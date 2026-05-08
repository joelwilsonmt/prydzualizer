import * as THREE from 'three';
import { BaseScene } from './BaseScene';
import type { AudioData } from '../audio/AudioEngine';

const RIBBONS = 55;   // horizontal ribbons stacked vertically
const PTS_PER = 120;  // points per ribbon
const WIDTH = 140;
const HEIGHT_RANGE = 60; // y from -30 to +30

export class AuroraScene extends BaseScene {
  private positions!: Float32Array;
  private colors!: Float32Array;
  private lines!: THREE.LineSegments;
  private time = 0;

  init(): void {
    this.scene.background = new THREE.Color(0x000208);
    this.camera.position.set(0, 8, 90);
    this.camera.lookAt(0, 5, 0);
    this.scene.fog = new THREE.FogExp2(0x000208, 0.005);

    // Each ribbon is PTS_PER-1 line segments = (PTS_PER-1)*2 vertices per ribbon
    const segsPerRibbon = PTS_PER - 1;
    const totalVerts = RIBBONS * segsPerRibbon * 2;
    this.positions = new Float32Array(totalVerts * 3);
    this.colors = new Float32Array(totalVerts * 3);

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));

    const mat = new THREE.LineBasicMaterial({
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
      opacity: 0.85,
    });

    this.lines = new THREE.LineSegments(geo, mat);
    this.scene.add(this.lines);
  }

  update(delta: number, audio: AudioData): void {
    this.time += delta;

    const bassAmp = 4 + audio.bass * 18;
    const trebleAmp = 1.5 + audio.treble * 6;
    const speed1 = 0.6 + audio.volume * 0.8;
    const speed2 = 0.9 + audio.mid * 1.0;

    const segsPerRibbon = PTS_PER - 1;

    for (let ri = 0; ri < RIBBONS; ri++) {
      const yBase = (ri / (RIBBONS - 1)) * HEIGHT_RANGE - HEIGHT_RANGE / 2;
      const phase = ri * 0.38; // phase offset per ribbon
      const depth = Math.sin(ri * 0.18) * 15; // z-depth variation

      // Color by height: bottom=green, mid=teal, top=blue/violet
      const t = (yBase + HEIGHT_RANGE / 2) / HEIGHT_RANGE; // 0=bottom, 1=top
      let cr: number, cg: number, cb: number;
      if (t < 0.4) {
        cr = 0; cg = 0.7 + t * 0.3; cb = 0.2 + t * 0.5;
      } else if (t < 0.7) {
        const s = (t - 0.4) / 0.3;
        cr = s * 0.3; cg = 0.6 - s * 0.3; cb = 0.7 + s * 0.3;
      } else {
        const s = (t - 0.7) / 0.3;
        cr = 0.3 + s * 0.5; cg = 0.1; cb = 1.0;
      }
      const brightness = 0.5 + audio.volume * 0.4 + (1 - Math.abs(t - 0.5) * 1.5) * 0.3;

      // Compute each point's displaced position
      const pts = new Array(PTS_PER);
      for (let pi = 0; pi < PTS_PER; pi++) {
        const x = (pi / (PTS_PER - 1)) * WIDTH - WIDTH / 2;
        const wave1 = bassAmp * Math.sin(x * 0.04 + this.time * speed1 + phase);
        const wave2 = trebleAmp * Math.sin(x * 0.09 - this.time * speed2 * 0.7 + phase * 1.3);
        const wave3 = bassAmp * 0.4 * Math.sin(x * 0.02 + this.time * 0.4 + phase * 0.5);
        pts[pi] = { x, y: yBase + wave1 + wave2 + wave3, z: depth };
      }

      // Write line segments
      for (let si = 0; si < segsPerRibbon; si++) {
        const vi = (ri * segsPerRibbon + si) * 2;
        const a = pts[si], b = pts[si + 1];

        this.positions[vi * 3]     = a.x; this.positions[vi * 3 + 1] = a.y; this.positions[vi * 3 + 2] = a.z;
        this.positions[vi * 3 + 3] = b.x; this.positions[vi * 3 + 4] = b.y; this.positions[vi * 3 + 5] = b.z;

        this.colors[vi * 3]     = cr * brightness; this.colors[vi * 3 + 1] = cg * brightness; this.colors[vi * 3 + 2] = cb * brightness;
        this.colors[vi * 3 + 3] = cr * brightness; this.colors[vi * 3 + 4] = cg * brightness; this.colors[vi * 3 + 5] = cb * brightness;
      }
    }

    (this.lines.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    (this.lines.geometry.attributes.color as THREE.BufferAttribute).needsUpdate = true;

    // Slow camera drift
    this.camera.position.x = Math.sin(this.time * 0.06) * 25;
    this.camera.position.y = 6 + Math.sin(this.time * 0.08) * 8;
    this.camera.lookAt(0, 5, 0);
  }

  dispose(): void {
    this.lines.geometry.dispose();
    (this.lines.material as THREE.Material).dispose();
  }
}
