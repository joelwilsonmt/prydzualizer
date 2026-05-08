import * as THREE from 'three';
import { BaseScene } from './BaseScene';
import type { AudioData } from '../audio/AudioEngine';

// Grid wave variant — multi-source interference plasma
const N = 52;
const SIZE = 100;
const STEP = SIZE / (N - 1);

function gx(col: number) { return col * STEP - SIZE / 2; }
function gz(row: number) { return row * STEP - SIZE / 2; }

export class PlasmaScene extends BaseScene {
  private grid!: THREE.LineSegments;
  private positions!: Float32Array;
  private colors!: Float32Array;
  private gridY = new Float32Array(N * N);
  private lookup!: Uint16Array;
  private totalVerts = 0;
  private time = 0;
  private smoothAmp = 5;
  private smoothBass = 0;
  private smoothMid = 0;
  private smoothTreble = 0;

  init(): void {
    this.scene.background = new THREE.Color(0x050008);
    this.camera.position.set(0, 60, 55);
    this.camera.lookAt(0, 0, 0);
    this.scene.fog = new THREE.FogExp2(0x050008, 0.007);

    const horizVerts = N * (N - 1) * 2;
    const vertVerts  = N * (N - 1) * 2;
    this.totalVerts = horizVerts + vertVerts;

    this.positions = new Float32Array(this.totalVerts * 3);
    this.colors    = new Float32Array(this.totalVerts * 3);
    this.lookup    = new Uint16Array(this.totalVerts * 2);

    let vi = 0;
    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N - 1; col++) {
        this.lookup[vi * 2] = row; this.lookup[vi * 2 + 1] = col; vi++;
        this.lookup[vi * 2] = row; this.lookup[vi * 2 + 1] = col + 1; vi++;
      }
    }
    for (let col = 0; col < N; col++) {
      for (let row = 0; row < N - 1; row++) {
        this.lookup[vi * 2] = row; this.lookup[vi * 2 + 1] = col; vi++;
        this.lookup[vi * 2] = row + 1; this.lookup[vi * 2 + 1] = col; vi++;
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    geo.setAttribute('color',    new THREE.BufferAttribute(this.colors, 3));
    const mat = new THREE.LineBasicMaterial({
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.grid = new THREE.LineSegments(geo, mat);
    this.scene.add(this.grid);
  }

  update(delta: number, audio: AudioData): void {
    this.time += delta;

    const LERP = 0.015;
    this.smoothAmp    += (5 + audio.bass * 12     - this.smoothAmp)    * LERP;
    this.smoothBass   += (audio.bass               - this.smoothBass)   * LERP;
    this.smoothMid    += (audio.mid                - this.smoothMid)    * LERP;
    this.smoothTreble += (audio.treble             - this.smoothTreble) * LERP;

    const amp = this.smoothAmp;
    // Four interference sources that drift over time
    const s1x = Math.sin(this.time * 0.22) * 30;
    const s1z = Math.cos(this.time * 0.18) * 30;
    const s2x = Math.cos(this.time * 0.15) * 25;
    const s2z = Math.sin(this.time * 0.20) * 25;
    const f1  = 0.08 + this.smoothMid * 0.04;
    const f2  = 0.06 + this.smoothTreble * 0.03;
    const spd = 1.8 + this.smoothBass * 0.8;

    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N; col++) {
        const x = gx(col);
        const z = gz(row);

        const r1 = Math.sqrt((x - s1x) ** 2 + (z - s1z) ** 2);
        const r2 = Math.sqrt((x - s2x) ** 2 + (z - s2z) ** 2);
        const r3 = Math.sqrt(x * x + z * z); // center source

        const y =
          amp * 0.4 * Math.sin(r1 * f1 - this.time * spd) +
          amp * 0.35 * Math.sin(r2 * f2 - this.time * spd * 0.85) +
          amp * 0.25 * Math.sin(r3 * 0.07 + this.time * spd * 0.5);

        this.gridY[row * N + col] = y;
      }
    }

    for (let vi = 0; vi < this.totalVerts; vi++) {
      const row = this.lookup[vi * 2];
      const col = this.lookup[vi * 2 + 1];
      const y   = this.gridY[row * N + col];
      this.positions[vi * 3]     = gx(col);
      this.positions[vi * 3 + 1] = y;
      this.positions[vi * 3 + 2] = gz(row);

      // Plasma: hue shifts with height — magenta → cyan → green
      const t = Math.max(0, Math.min(1, (y + amp) / (amp * 2)));
      const t2 = t * t;
      // Positive = magenta/purple, negative = cyan/teal, neutral = dark
      this.colors[vi * 3]     = 0.05 + (1 - t) * 0.45 * (1 - t); // more R at low t
      this.colors[vi * 3 + 1] = 0.08 + t2 * 0.35;
      this.colors[vi * 3 + 2] = 0.1 + t * (1 - t) * 1.4;         // peaks in blue at mid t
    }

    (this.grid.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    (this.grid.geometry.attributes.color    as THREE.BufferAttribute).needsUpdate = true;

    this.camera.position.x = Math.sin(this.time * 0.07) * 22;
    this.camera.position.y = 55 + this.smoothAmp * 0.4;
    this.camera.position.z = 55 + Math.cos(this.time * 0.05) * 18;
    this.camera.lookAt(0, 0, 0);
  }

  dispose(): void {
    this.grid.geometry.dispose();
    (this.grid.material as THREE.Material).dispose();
  }
}
