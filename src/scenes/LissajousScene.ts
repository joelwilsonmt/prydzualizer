import * as THREE from 'three';
import { BaseScene } from './BaseScene';
import type { AudioData } from '../audio/AudioEngine';

const CURVES = [
  { a: 3, b: 2, c: 3, color: new THREE.Color(0x1a8878) },
  { a: 5, b: 4, c: 5, color: new THREE.Color(0x3a5577) },
  { a: 3, b: 4, c: 5, color: new THREE.Color(0x1a44aa) },
  { a: 5, b: 2, c: 3, color: new THREE.Color(0x772299) },
  { a: 4, b: 3, c: 4, color: new THREE.Color(0x226644) },
  { a: 5, b: 3, c: 2, color: new THREE.Color(0x775500) },
];
const PTS = 1800;
const SCALE = 28;

export class LissajousScene extends BaseScene {
  private lines: THREE.Line[] = [];
  private mats: THREE.LineBasicMaterial[] = [];
  private posArrays: Float32Array[] = [];
  private phase = 0;
  private beatKick = 0;
  private time = 0;

  init(): void {
    this.scene.background = new THREE.Color(0x000000);
    this.camera.position.set(0, 20, 75);
    this.camera.lookAt(0, 0, 0);

    for (const cfg of CURVES) {
      const positions = new Float32Array(PTS * 3);
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const mat = new THREE.LineBasicMaterial({
        color: cfg.color,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        transparent: true,
        opacity: 0.9,
      });
      const line = new THREE.Line(geo, mat);
      this.scene.add(line);
      this.lines.push(line);
      this.mats.push(mat);
      this.posArrays.push(positions);
    }
  }

  update(delta: number, audio: AudioData): void {
    this.time += delta;

    if (audio.beat) this.beatKick = 1.0;
    this.beatKick *= 0.88;

    // Phase drifts with volume; beat snaps it forward
    this.phase += delta * (0.3 + audio.volume * 0.6) + this.beatKick * 0.25;

    const scale = SCALE * (1 + audio.bass * 0.25 + this.beatKick * 0.15);

    for (let ci = 0; ci < CURVES.length; ci++) {
      const { a, b, c } = CURVES[ci];
      const ph = this.phase + ci * 0.55;
      const pos = this.posArrays[ci];

      for (let i = 0; i < PTS; i++) {
        const t = (i / PTS) * Math.PI * 6;
        pos[i * 3]     = Math.sin(a * t + ph) * scale;
        pos[i * 3 + 1] = Math.sin(b * t) * scale;
        pos[i * 3 + 2] = Math.sin(c * t + ph * 0.7) * scale;
      }

      (this.lines[ci].geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
      this.mats[ci].opacity = 0.65 + audio.volume * 0.3 + this.beatKick * 0.05;
    }

    // Slow camera orbit
    this.camera.position.x = Math.sin(this.time * 0.09) * 35;
    this.camera.position.y = 18 + Math.sin(this.time * 0.07) * 12;
    this.camera.position.z = Math.cos(this.time * 0.09) * 75;
    this.camera.lookAt(0, 0, 0);
  }

  dispose(): void {
    this.lines.forEach((l) => { l.geometry.dispose(); (l.material as THREE.Material).dispose(); });
  }
}
