import * as THREE from 'three';
import { BaseScene } from './BaseScene';
import type { AudioData } from '../audio/AudioEngine';

const RING_COUNT = 10;
const PARTICLES_PER_RING = 400;
const TOTAL = RING_COUNT * PARTICLES_PER_RING;

export class VortexScene extends BaseScene {
  private diskPoints!: THREE.Points;
  private diskPositions!: Float32Array;
  private diskColors!: Float32Array;
  private ringAngles: Float32Array = new Float32Array(RING_COUNT * PARTICLES_PER_RING);
  private ringRadii: Float32Array = new Float32Array(RING_COUNT);
  private omegas: Float32Array = new Float32Array(RING_COUNT);
  private jetMat!: THREE.MeshBasicMaterial;
  private jet1!: THREE.Mesh;
  private jet2!: THREE.Mesh;
  private jetFlash = 0;
  private time = 0;

  init(): void {
    this.scene.background = new THREE.Color(0x000000);
    this.camera.position.set(0, 35, 60);
    this.camera.lookAt(0, 0, 0);
    this.scene.fog = new THREE.FogExp2(0x000000, 0.006);

    this.diskPositions = new Float32Array(TOTAL * 3);
    this.diskColors = new Float32Array(TOTAL * 3);

    for (let r = 0; r < RING_COUNT; r++) {
      const radius = 5 + (r / (RING_COUNT - 1)) * 55;
      this.ringRadii[r] = radius;
      // Keplerian: omega ~ 1/sqrt(r)
      this.omegas[r] = 1.2 / Math.sqrt(radius);

      for (let p = 0; p < PARTICLES_PER_RING; p++) {
        const i = r * PARTICLES_PER_RING + p;
        this.ringAngles[i] = (p / PARTICLES_PER_RING) * Math.PI * 2 + Math.random() * 0.1;
        // slight vertical spread
        const spread = (Math.random() - 0.5) * (radius * 0.04);
        const idx = i * 3;
        this.diskPositions[idx]     = Math.cos(this.ringAngles[i]) * radius;
        this.diskPositions[idx + 1] = spread;
        this.diskPositions[idx + 2] = Math.sin(this.ringAngles[i]) * radius;
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.diskPositions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(this.diskColors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.25,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    this.diskPoints = new THREE.Points(geo, mat);
    this.scene.add(this.diskPoints);

    // Event horizon ring
    const ringGeo = new THREE.TorusGeometry(4.8, 0.15, 8, 80);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xffffff, blending: THREE.AdditiveBlending, depthWrite: false });
    this.scene.add(new THREE.Mesh(ringGeo, ringMat));

    // Jets (narrow cones up/down)
    const jetGeo = new THREE.ConeGeometry(0.4, 50, 8, 1, true);
    this.jetMat = new THREE.MeshBasicMaterial({
      color: 0xcc44ff,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    this.jet1 = new THREE.Mesh(jetGeo, this.jetMat);
    this.jet1.position.y = 25;
    this.jet2 = new THREE.Mesh(jetGeo.clone(), this.jetMat);
    this.jet2.position.y = -25;
    this.jet2.rotation.z = Math.PI;
    this.scene.add(this.jet1, this.jet2);
  }

  update(delta: number, audio: AudioData): void {
    this.time += delta;

    const speedMult = 1 + audio.bass * 18;

    for (let r = 0; r < RING_COUNT; r++) {
      const omega = this.omegas[r] * speedMult;
      const radius = this.ringRadii[r];
      // inner rings: purple/magenta, outer: orange/red
      const t = r / (RING_COUNT - 1);
      const cr = t * 0.9 + audio.treble * 0.1;
      const cg = 0.05 + t * 0.1;
      const cb = 1.0 - t * 0.7 + audio.mid * 0.2;

      for (let p = 0; p < PARTICLES_PER_RING; p++) {
        const i = r * PARTICLES_PER_RING + p;
        this.ringAngles[i] += omega * delta;
        const spread = (Math.sin(this.ringAngles[i] * 7 + this.time) * 0.5) * (radius * 0.03);
        const idx = i * 3;
        this.diskPositions[idx]     = Math.cos(this.ringAngles[i]) * radius;
        this.diskPositions[idx + 1] = spread;
        this.diskPositions[idx + 2] = Math.sin(this.ringAngles[i]) * radius;

        const brightness = 0.3 + audio.volume * 0.9;
        this.diskColors[idx]     = cr * brightness;
        this.diskColors[idx + 1] = cg * brightness;
        this.diskColors[idx + 2] = cb * brightness;
      }
    }

    (this.diskPoints.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    (this.diskPoints.geometry.attributes.color as THREE.BufferAttribute).needsUpdate = true;

    // jet flash on beat
    if (audio.beat) this.jetFlash = 1.0;
    this.jetFlash = Math.max(0, this.jetFlash - delta * 2.5);
    this.jetMat.opacity = 0.10 + this.jetFlash * 0.5 + audio.mid * 0.05;
    this.jetMat.color.setRGB(0.8 + this.jetFlash * 0.2, 0.27 * (1 - this.jetFlash), 1.0);

    // slow camera orbit
    const orbitAngle = this.time * 0.1;
    this.camera.position.x = Math.sin(orbitAngle) * 55;
    this.camera.position.z = Math.cos(orbitAngle) * 55;
    this.camera.position.y = 25 + Math.sin(this.time * 0.07) * 10;
    this.camera.lookAt(0, 0, 0);
  }

  dispose(): void {
    this.diskPoints.geometry.dispose();
    (this.diskPoints.material as THREE.Material).dispose();
    this.jet1.geometry.dispose();
    this.jet2.geometry.dispose();
    this.jetMat.dispose();
  }
}
