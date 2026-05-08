import * as THREE from 'three';
import { BaseScene } from './BaseScene';
import type { AudioData } from '../audio/AudioEngine';

// Grid wave variant — radial ocean waves emanating from center
const N = 60;
const SIZE = 120;
const STEP = SIZE / (N - 1);

function gx(col: number) { return col * STEP - SIZE / 2; }
function gz(row: number) { return row * STEP - SIZE / 2; }

export class OceanScene extends BaseScene {
  private grid!: THREE.LineSegments;
  private positions!: Float32Array;
  private colors!: Float32Array;
  private gridY = new Float32Array(N * N);
  private lookup!: Uint16Array;
  private totalVerts = 0;
  private time = 0;
  private smoothAmp = 4;
  private smoothSpeed = 1.5;
  private smoothChop = 0;

  init(): void {
    this.scene.background = new THREE.Color(0x000510);
    this.camera.position.set(0, 40, 75);
    this.camera.lookAt(0, 0, 0);
    this.scene.fog = new THREE.FogExp2(0x000510, 0.007);

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

    const LERP = 0.03;
    this.smoothAmp   += (4 + audio.bass * 18   - this.smoothAmp)   * LERP;
    this.smoothSpeed += (1.5 + audio.volume * 1.4 - this.smoothSpeed) * LERP;
    this.smoothChop  += (audio.treble * 0.8      - this.smoothChop)  * LERP;

    const amp   = this.smoothAmp;
    const speed = this.smoothSpeed;
    const chop  = this.smoothChop;

    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N; col++) {
        const x = gx(col);
        const z = gz(row);
        const r = Math.sqrt(x * x + z * z);

        // Primary radial swell
        const y1 = amp * 0.6 * Math.sin(r * 0.09 - this.time * speed);
        // Secondary choppier wave
        const y2 = amp * 0.25 * Math.sin(r * 0.18 - this.time * speed * 1.6 + chop * 2);
        // Cross-wave for texture
        const y3 = amp * 0.15 * Math.sin(x * 0.08 + z * 0.06 - this.time * speed * 0.8);

        this.gridY[row * N + col] = y1 + y2 + y3;
      }
    }

    for (let vi = 0; vi < this.totalVerts; vi++) {
      const row = this.lookup[vi * 2];
      const col = this.lookup[vi * 2 + 1];
      const y   = this.gridY[row * N + col];
      this.positions[vi * 3]     = gx(col);
      this.positions[vi * 3 + 1] = y;
      this.positions[vi * 3 + 2] = gz(row);

      // Deep blue at trough, teal at surface, near-white at crest
      const t = Math.max(0, Math.min(1, (y + amp) / (amp * 2)));
      this.colors[vi * 3]     = t * t * 0.3;
      this.colors[vi * 3 + 1] = 0.15 + t * 0.55;
      this.colors[vi * 3 + 2] = 0.45 + t * 0.45;
    }

    (this.grid.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    (this.grid.geometry.attributes.color    as THREE.BufferAttribute).needsUpdate = true;

    // Low camera angle — more dramatic wave perspective
    this.camera.position.x = Math.sin(this.time * 0.06) * 30;
    this.camera.position.y = 28 + this.smoothAmp * 0.4;
    this.camera.position.z = 70 + Math.cos(this.time * 0.05) * 18;
    this.camera.lookAt(0, -4, 0);
  }

  dispose(): void {
    this.grid.geometry.dispose();
    (this.grid.material as THREE.Material).dispose();
  }
}
