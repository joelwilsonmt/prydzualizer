import * as THREE from 'three';
import { BaseScene } from './BaseScene';
import type { AudioData } from '../audio/AudioEngine';

const COUNT = 7000;
const BOUND = 50;
const BASE_SPEED = 5;

export class FlowScene extends BaseScene {
  private pts!: THREE.Points;
  private pos!: Float32Array;
  private vel!: Float32Array;
  private col!: Float32Array;
  private time = 0;
  private beatBurst = 0;

  init(): void {
    this.scene.background = new THREE.Color(0x020008);
    this.camera.position.set(0, 20, 70);
    this.camera.lookAt(0, 0, 0);
    this.scene.fog = new THREE.FogExp2(0x020008, 0.005);

    this.pos = new Float32Array(COUNT * 3);
    this.vel = new Float32Array(COUNT * 3);
    this.col = new Float32Array(COUNT * 3);

    for (let i = 0; i < COUNT; i++) this.resetParticle(i, true);

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(this.col, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.22,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    this.pts = new THREE.Points(geo, mat);
    this.scene.add(this.pts);
  }

  private resetParticle(i: number, random = false): void {
    const r = random ? Math.random() * BOUND : 2 + Math.random() * 6;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    this.pos[i * 3]     = Math.sin(phi) * Math.cos(theta) * r;
    this.pos[i * 3 + 1] = Math.sin(phi) * Math.sin(theta) * r;
    this.pos[i * 3 + 2] = Math.cos(phi) * r;
    this.vel[i * 3] = this.vel[i * 3 + 1] = this.vel[i * 3 + 2] = 0;
  }

  private field(x: number, y: number, z: number, t: number): [number, number, number] {
    // Curl-like toroidal field with time variation
    const vx = Math.sin(y * 0.18 + t * 0.7) * Math.cos(z * 0.12 + t * 0.4);
    const vy = Math.sin(z * 0.18 + t * 0.9) * Math.cos(x * 0.12 + t * 0.5);
    const vz = Math.sin(x * 0.18 + t * 0.6) * Math.cos(y * 0.12 + t * 0.8);
    return [vx, vy, vz];
  }

  update(delta: number, audio: AudioData): void {
    this.time += delta;

    if (audio.beat) this.beatBurst = 1.0;
    this.beatBurst *= 0.84;

    const speed = (BASE_SPEED + audio.bass * 30 + this.beatBurst * 45) * delta;

    for (let i = 0; i < COUNT; i++) {
      const x = this.pos[i * 3];
      const y = this.pos[i * 3 + 1];
      const z = this.pos[i * 3 + 2];

      const [fx, fy, fz] = this.field(x, y, z, this.time);

      this.pos[i * 3]     += fx * speed;
      this.pos[i * 3 + 1] += fy * speed;
      this.pos[i * 3 + 2] += fz * speed;

      const dist = Math.sqrt(
        this.pos[i * 3] ** 2 + this.pos[i * 3 + 1] ** 2 + this.pos[i * 3 + 2] ** 2
      );
      if (dist > BOUND || dist < 0.1) this.resetParticle(i);

      // Color by velocity direction: map to violet/purple/pink
      const speed2 = Math.sqrt(fx * fx + fy * fy + fz * fz);
      const t = Math.min(1, speed2 * 0.8 + audio.volume * 0.3);
      this.col[i * 3]     = 0.4 + t * 0.6;
      this.col[i * 3 + 1] = 0.05 + t * 0.2;
      this.col[i * 3 + 2] = 0.8 + t * 0.2;
    }

    (this.pts.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    (this.pts.geometry.attributes.color as THREE.BufferAttribute).needsUpdate = true;

    this.camera.position.x = Math.sin(this.time * 0.08) * 30;
    this.camera.position.y = 20 + Math.sin(this.time * 0.06) * 15;
    this.camera.position.z = Math.cos(this.time * 0.08) * 70;
    this.camera.lookAt(0, 0, 0);
  }

  dispose(): void {
    this.pts.geometry.dispose();
    (this.pts.material as THREE.Material).dispose();
  }
}
