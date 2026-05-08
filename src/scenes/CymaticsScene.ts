import * as THREE from 'three';
import { BaseScene } from './BaseScene';
import type { AudioData } from '../audio/AudioEngine';

// Chladni cymatics: z(x,y,t) = sin(nx*π*x/L)*sin(ny*π*y/L)
// Particles are elevated proportionally to |z| and colored by it

const RES = 90; // RES x RES grid
const L = 80;
const MODES = [
  [2, 3], [3, 2], [3, 3], [4, 3], [3, 4],
  [4, 4], [5, 3], [3, 5], [4, 5], [5, 4],
  [5, 5], [6, 4], [2, 5], [5, 2],
] as const;

export class CymaticsScene extends BaseScene {
  private pts!: THREE.Points;
  private positions!: Float32Array;
  private colors!: Float32Array;
  private time = 0;
  private modeIndex = 0;
  private targetMode = 0;
  private modeBlend = 1.0; // 1 = fully on targetMode
  private beatCooldown = 0;
  private smoothAmp = 8;
  private smoothOmega = 2.0;

  init(): void {
    this.scene.background = new THREE.Color(0x050300);
    this.camera.position.set(0, 90, 50);
    this.camera.lookAt(0, 0, 0);
    this.scene.fog = new THREE.FogExp2(0x050300, 0.004);

    const count = RES * RES;
    this.positions = new Float32Array(count * 3);
    this.colors = new Float32Array(count * 3);

    for (let r = 0; r < RES; r++) {
      for (let c = 0; c < RES; c++) {
        const i = r * RES + c;
        this.positions[i * 3]     = (c / (RES - 1)) * L - L / 2;
        this.positions[i * 3 + 2] = (r / (RES - 1)) * L - L / 2;
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.55,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    this.pts = new THREE.Points(geo, mat);
    this.scene.add(this.pts);

    // Grid frame
    const framePts = [
      new THREE.Vector3(-L / 2, 0, -L / 2), new THREE.Vector3(L / 2, 0, -L / 2),
      new THREE.Vector3(L / 2, 0, -L / 2),  new THREE.Vector3(L / 2, 0, L / 2),
      new THREE.Vector3(L / 2, 0, L / 2),   new THREE.Vector3(-L / 2, 0, L / 2),
      new THREE.Vector3(-L / 2, 0, L / 2),  new THREE.Vector3(-L / 2, 0, -L / 2),
    ];
    const frameMat = new THREE.LineBasicMaterial({ color: 0x221100, blending: THREE.AdditiveBlending, depthWrite: false });
    this.scene.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(framePts), frameMat));
  }

  private chladni(x: number, z: number, nx: number, nz: number): number {
    return Math.sin((nx * Math.PI * (x + L / 2)) / L) *
           Math.sin((nz * Math.PI * (z + L / 2)) / L);
  }

  update(delta: number, audio: AudioData): void {
    this.time += delta;
    this.beatCooldown = Math.max(0, this.beatCooldown - delta);

    if (audio.beat && this.beatCooldown <= 0) {
      this.modeIndex = this.targetMode;
      this.targetMode = (this.targetMode + 1) % MODES.length;
      this.modeBlend = 0;
      this.beatCooldown = 0.5;
    }
    this.modeBlend = Math.min(1, this.modeBlend + delta * 1.5);

    const [nxA, nzA] = MODES[this.modeIndex];
    const [nxB, nzB] = MODES[this.targetMode];
    const LERP = 0.025;
    this.smoothAmp   += (8 + audio.bass * 18   - this.smoothAmp)   * LERP;
    this.smoothOmega += (2.0 + audio.mid * 3.0 - this.smoothOmega) * LERP;
    const waveAmp = this.smoothAmp;
    const omega = this.smoothOmega;

    for (let r = 0; r < RES; r++) {
      for (let c = 0; c < RES; c++) {
        const i = r * RES + c;
        const x = this.positions[i * 3];
        const z = this.positions[i * 3 + 2];

        const zA = this.chladni(x, z, nxA, nzA);
        const zB = this.chladni(x, z, nxB, nzB);
        const zVal = zA * (1 - this.modeBlend) + zB * this.modeBlend;

        const y = zVal * waveAmp * Math.cos(omega * this.time);
        this.positions[i * 3 + 1] = y;

        const t = Math.abs(zVal);
        // amber → white at antinodes, dark at nodes
        this.colors[i * 3]     = 0.3 + t * 0.7;
        this.colors[i * 3 + 1] = 0.15 + t * 0.6;
        this.colors[i * 3 + 2] = t * 0.3;
      }
    }

    (this.pts.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    (this.pts.geometry.attributes.color as THREE.BufferAttribute).needsUpdate = true;

    this.camera.position.x = Math.sin(this.time * 0.06) * 20;
    this.camera.position.y = 85 + this.smoothAmp * 0.5;
    this.camera.position.z = 50 + Math.cos(this.time * 0.06) * 10;
    this.camera.lookAt(0, 0, 0);
  }

  dispose(): void {
    this.pts.geometry.dispose();
    (this.pts.material as THREE.Material).dispose();
  }
}
