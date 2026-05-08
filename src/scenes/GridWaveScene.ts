import * as THREE from 'three';
import { BaseScene } from './BaseScene';
import type { AudioData } from '../audio/AudioEngine';

const N = 56;
const SIZE = 110;
const STEP = SIZE / (N - 1);

function gx(col: number) { return col * STEP - SIZE / 2; }
function gz(row: number) { return row * STEP - SIZE / 2; }

export class GridWaveScene extends BaseScene {
  private grid!: THREE.LineSegments;
  private positions!: Float32Array;
  private colors!: Float32Array;
  private gridY = new Float32Array(N * N);
  private lookup!: Uint16Array;
  private totalVerts = 0;
  private time = 0;
  private smoothAmp = 6;
  private smoothSpeed = 2.0;
  private smoothMid = 0;
  private smoothTreble = 0;

  init(): void {
    this.scene.background = new THREE.Color(0x000a08);
    this.camera.position.set(0, 55, 70);
    this.camera.lookAt(0, 0, 0);
    this.scene.fog = new THREE.FogExp2(0x000a08, 0.006);

    const horizVerts = N * (N - 1) * 2;
    const vertVerts = N * (N - 1) * 2;
    this.totalVerts = horizVerts + vertVerts;

    this.positions = new Float32Array(this.totalVerts * 3);
    this.colors = new Float32Array(this.totalVerts * 3);
    this.lookup = new Uint16Array(this.totalVerts * 2);

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
    geo.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));

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
    this.smoothAmp   += (6 + audio.bass * 10   - this.smoothAmp)   * LERP;
    this.smoothSpeed += (2.0 + audio.volume * 0.8 - this.smoothSpeed) * LERP;
    this.smoothMid   += (audio.mid   - this.smoothMid)   * LERP;
    this.smoothTreble += (audio.treble - this.smoothTreble) * LERP;

    const amp = this.smoothAmp;
    const freq1 = 0.07 + this.smoothMid * 0.02;
    const freq2 = 0.05 + this.smoothTreble * 0.018;
    const speed = this.smoothSpeed;

    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N; col++) {
        const x = gx(col);
        const z = gz(row);
        const y =
          amp * 0.5 * Math.sin(x * freq1 + this.time * speed) +
          amp * 0.3 * Math.sin(z * freq2 + this.time * speed * 0.7) +
          amp * 0.2 * Math.sin((x + z) * 0.06 + this.time * speed * 1.3);
        this.gridY[row * N + col] = y;
      }
    }

    for (let vi = 0; vi < this.totalVerts; vi++) {
      const row = this.lookup[vi * 2];
      const col = this.lookup[vi * 2 + 1];
      const y = this.gridY[row * N + col];
      this.positions[vi * 3]     = gx(col);
      this.positions[vi * 3 + 1] = y;
      this.positions[vi * 3 + 2] = gz(row);

      const t = Math.max(0, Math.min(1, (y + amp) / (amp * 2)));
      // teal → cyan → white
      this.colors[vi * 3]     = t * t * 0.6;
      this.colors[vi * 3 + 1] = 0.5 + t * 0.5;
      this.colors[vi * 3 + 2] = 0.7 + t * 0.3;
    }

    (this.grid.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    (this.grid.geometry.attributes.color as THREE.BufferAttribute).needsUpdate = true;

    this.camera.position.x = Math.sin(this.time * 0.08) * 25;
    this.camera.position.y = 50 + this.smoothAmp * 0.5;
    this.camera.position.z = 65 + Math.cos(this.time * 0.06) * 20;
    this.camera.lookAt(0, 0, 0);
  }

  dispose(): void {
    this.grid.geometry.dispose();
    (this.grid.material as THREE.Material).dispose();
  }
}
