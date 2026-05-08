import * as THREE from 'three';
import { BaseScene } from './BaseScene';
import type { AudioData } from '../audio/AudioEngine';

const PAD_COUNT = 52;
const CONN_R = 22;
const SIG_POOL = 35;

interface Trace { a: THREE.Vector2; c: THREE.Vector2; b: THREE.Vector2 }
interface Sig { traceIdx: number; t: number; speed: number; active: boolean }

export class CircuitScene extends BaseScene {
  private pads: THREE.Vector2[] = [];
  private traces: Trace[] = [];
  private sigs: Sig[] = [];
  private traceMat!: THREE.LineBasicMaterial;
  private sigPositions!: Float32Array;
  private sigColors!: Float32Array;
  private sigPoints!: THREE.Points;
  private padMat!: THREE.PointsMaterial;
  private spawnTimer = 0;
  private time = 0;

  init(): void {
    this.scene.background = new THREE.Color(0x000600);
    this.camera.position.set(0, 85, 25);
    this.camera.lookAt(0, 0, 0);
    this.scene.fog = new THREE.FogExp2(0x000600, 0.003);

    // Generate pads on a jittered grid
    for (let i = 0; i < PAD_COUNT; i++) {
      const col = i % 10, row = Math.floor(i / 10);
      this.pads.push(new THREE.Vector2(
        col * 12 - 54 + (Math.random() - 0.5) * 5,
        row * 15 - 38 + (Math.random() - 0.5) * 5,
      ));
    }

    // Connect pads with L-shaped traces
    const seen = new Set<string>();
    for (let i = 0; i < PAD_COUNT; i++) {
      const nearby = Array.from({ length: PAD_COUNT }, (_, j) => j)
        .filter(j => j !== i)
        .map(j => ({ j, d: this.pads[i].distanceTo(this.pads[j]) }))
        .filter(x => x.d < CONN_R)
        .sort((a, b) => a.d - b.d)
        .slice(0, 3);

      for (const { j } of nearby) {
        const key = `${Math.min(i, j)}-${Math.max(i, j)}`;
        if (!seen.has(key)) {
          seen.add(key);
          const a = this.pads[i].clone();
          const b = this.pads[j].clone();
          // L-shape: horizontal first, then vertical
          const c = new THREE.Vector2(b.x, a.y);
          this.traces.push({ a, c, b });
        }
      }
    }

    // Trace geometry (static)
    const tv = new Float32Array(this.traces.length * 4 * 3);
    let vi = 0;
    for (const { a, c, b } of this.traces) {
      tv[vi++] = a.x; tv[vi++] = 0; tv[vi++] = a.y;
      tv[vi++] = c.x; tv[vi++] = 0; tv[vi++] = c.y;
      tv[vi++] = c.x; tv[vi++] = 0; tv[vi++] = c.y;
      tv[vi++] = b.x; tv[vi++] = 0; tv[vi++] = b.y;
    }
    const traceGeo = new THREE.BufferGeometry();
    traceGeo.setAttribute('position', new THREE.BufferAttribute(tv, 3));
    this.traceMat = new THREE.LineBasicMaterial({ color: 0x003d00, blending: THREE.AdditiveBlending, depthWrite: false });
    this.scene.add(new THREE.LineSegments(traceGeo, this.traceMat));

    // Pad dots
    const pv = new Float32Array(PAD_COUNT * 3);
    for (let i = 0; i < PAD_COUNT; i++) {
      pv[i * 3] = this.pads[i].x; pv[i * 3 + 1] = 0.15; pv[i * 3 + 2] = this.pads[i].y;
    }
    const padGeo = new THREE.BufferGeometry();
    padGeo.setAttribute('position', new THREE.BufferAttribute(pv, 3));
    this.padMat = new THREE.PointsMaterial({ color: 0x00bb55, size: 1.8, blending: THREE.AdditiveBlending, depthWrite: false });
    this.scene.add(new THREE.Points(padGeo, this.padMat));

    // Signal pool
    this.sigPositions = new Float32Array(SIG_POOL * 3);
    this.sigColors = new Float32Array(SIG_POOL * 3);
    const sigGeo = new THREE.BufferGeometry();
    sigGeo.setAttribute('position', new THREE.BufferAttribute(this.sigPositions, 3));
    sigGeo.setAttribute('color', new THREE.BufferAttribute(this.sigColors, 3));
    this.sigPoints = new THREE.Points(sigGeo, new THREE.PointsMaterial({
      size: 3.2, vertexColors: true, blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    this.scene.add(this.sigPoints);

    for (let i = 0; i < SIG_POOL; i++) this.sigs.push({ traceIdx: 0, t: 0, speed: 0.5, active: false });
  }

  private spawn(speed: number): void {
    const s = this.sigs.find(s => !s.active);
    if (!s || !this.traces.length) return;
    s.active = true;
    s.traceIdx = Math.floor(Math.random() * this.traces.length);
    s.t = 0;
    s.speed = speed;
  }

  private tracePos(trace: Trace, t: number): THREE.Vector2 {
    return t < 0.5
      ? trace.a.clone().lerp(trace.c, t * 2)
      : trace.c.clone().lerp(trace.b, (t - 0.5) * 2);
  }

  update(delta: number, audio: AudioData): void {
    this.time += delta;
    this.spawnTimer -= delta;

    if (audio.beat) {
      for (let i = 0; i < 4 + Math.floor(audio.bass * 5); i++) this.spawn(0.7 + audio.bass * 1.4);
    }
    if (this.spawnTimer <= 0) {
      this.spawn(0.35 + audio.volume * 0.5);
      this.spawnTimer = 0.25 + Math.random() * 0.35;
    }

    for (let i = 0; i < SIG_POOL; i++) {
      const s = this.sigs[i];
      if (!s.active) { this.sigColors[i * 3] = this.sigColors[i * 3 + 1] = this.sigColors[i * 3 + 2] = 0; continue; }
      s.t += s.speed * delta;
      if (s.t >= 1) { s.active = false; continue; }
      const p = this.tracePos(this.traces[s.traceIdx], s.t);
      this.sigPositions[i * 3] = p.x; this.sigPositions[i * 3 + 1] = 0.25; this.sigPositions[i * 3 + 2] = p.y;
      const br = 0.65 + audio.volume * 0.35;
      this.sigColors[i * 3] = 0; this.sigColors[i * 3 + 1] = br; this.sigColors[i * 3 + 2] = br * 0.35;
    }

    (this.sigPoints.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    (this.sigPoints.geometry.attributes.color as THREE.BufferAttribute).needsUpdate = true;

    this.traceMat.color.setRGB(0, 0.20 + audio.volume * 0.1, 0.04);
    this.padMat.color.setRGB(0, 0.55 + audio.bass * 0.35, 0.2);

    const a = this.time * 0.04;
    this.camera.position.x = Math.sin(a) * 25;
    this.camera.position.y = 80 + audio.bass * 12;
    this.camera.position.z = Math.cos(a) * 35 + 15;
    this.camera.lookAt(0, 0, 0);
  }

  dispose(): void {
    this.scene.traverse(o => {
      if (o instanceof THREE.Points || o instanceof THREE.LineSegments) {
        o.geometry.dispose(); (o.material as THREE.Material).dispose();
      }
    });
  }
}
