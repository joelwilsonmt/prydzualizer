import * as THREE from 'three';
import { BaseScene } from './BaseScene';
import type { AudioData } from '../audio/AudioEngine';

// 7-segment display digit lookup (segments: a b c d e f g)
// Segment layout:
//  _a_
// f   b
//  _g_
// e   c
//  _d_
const SEG7: Record<string, number> = {
  '0': 0b0111111, '1': 0b0000110, '2': 0b1011011, '3': 0b1001111,
  '4': 0b1100110, '5': 0b1101101, '6': 0b1111101, '7': 0b0000111,
  '8': 0b1111111, '9': 0b1101111,
};

// Segment geometries: each segment is a thin box in local digit space
// digit space: 1 unit wide, 2 units tall
const SEG_DEFS: Array<{ x: number; y: number; w: number; h: number }> = [
  { x: 0.5,  y: 1.9,  w: 0.7, h: 0.15 }, // a top
  { x: 0.9,  y: 1.45, w: 0.15, h: 0.7 }, // b top-right
  { x: 0.9,  y: 0.55, w: 0.15, h: 0.7 }, // c bot-right
  { x: 0.5,  y: 0.1,  w: 0.7, h: 0.15 }, // d bottom
  { x: 0.1,  y: 0.55, w: 0.15, h: 0.7 }, // e bot-left
  { x: 0.1,  y: 1.45, w: 0.15, h: 0.7 }, // f top-left
  { x: 0.5,  y: 1.0,  w: 0.7, h: 0.15 }, // g middle
];

const RING_POOL = 16;
const MAX_R = 80;

interface Ring {
  mesh: THREE.LineSegments;
  mat: THREE.LineBasicMaterial;
  radius: number;
  speed: number;
  active: boolean;
  color: [number, number, number];
}

export class AlarmScene extends BaseScene {
  private segMeshes: THREE.Mesh[][] = []; // [digitIndex][segIndex]
  private segMats: THREE.MeshBasicMaterial[][] = [];
  private colonMeshes: THREE.Mesh[] = [];
  private colonMats: THREE.MeshBasicMaterial[] = [];
  private rings: Ring[] = [];
  private time = 0;
  private beatKick = 0;
  private prevSecond = -1;
  private alarmFlash = 0;
  private tickFlash = 0;
  // Canvas for date strip
  private dateMesh!: THREE.Mesh;
  private dateMat!: THREE.MeshBasicMaterial;
  private dateTex!: THREE.CanvasTexture;
  private dateCanvas!: HTMLCanvasElement;
  private dateCtx!: CanvasRenderingContext2D;

  init(): void {
    this.scene.background = new THREE.Color(0x030000);
    this.camera.position.set(0, 8, 85);
    this.camera.lookAt(0, 6, 0);
    this.scene.fog = new THREE.FogExp2(0x030000, 0.004);

    this.buildDigits();
    this.buildColons();
    this.buildRings();
    this.buildDateStrip();
    this.refreshDisplay(new Date());
  }

  private buildDigits(): void {
    // HH:MM:SS = 6 digits, arranged left to right
    // Each digit cell is 6 units wide, 12 tall; with 1 unit gap
    const DIGIT_SCALE = 6;
    // Positions: H H : M M : S S — 6 digit slots, colons handled separately
    // x offsets for 6 digits (accounting for colons at slots 2 and 4)
    const digitXOffsets = [-19.5, -13, -4.5, 2, 10.5, 17];

    for (let d = 0; d < 6; d++) {
      const segs: THREE.Mesh[] = [];
      const mats: THREE.MeshBasicMaterial[] = [];
      for (let s = 0; s < 7; s++) {
        const def = SEG_DEFS[s];
        const geo = new THREE.BoxGeometry(def.w * DIGIT_SCALE, def.h * DIGIT_SCALE, 0.4);
        const mat = new THREE.MeshBasicMaterial({
          color: 0x1a0000,
          transparent: true,
          opacity: 0.15,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(
          digitXOffsets[d] + (def.x - 0.5) * DIGIT_SCALE,
          (def.y - 1) * DIGIT_SCALE,
          0,
        );
        this.scene.add(mesh);
        segs.push(mesh);
        mats.push(mat);
      }
      this.segMeshes.push(segs);
      this.segMats.push(mats);
    }
  }

  private buildColons(): void {
    // Two colons: between HH:MM and MM:SS
    const colonXs = [-7.5, 7.0];
    for (const cx of colonXs) {
      for (const cy of [3, -3]) {
        const geo = new THREE.SphereGeometry(0.9, 8, 6);
        const mat = new THREE.MeshBasicMaterial({
          color: 0xff3300,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          transparent: true,
          opacity: 0.9,
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(cx, cy, 0);
        this.scene.add(mesh);
        this.colonMeshes.push(mesh);
        this.colonMats.push(mat);
      }
    }
  }

  private buildRings(): void {
    const icoGeo = new THREE.IcosahedronGeometry(1, 1);
    const wireGeo = new THREE.WireframeGeometry(icoGeo);
    icoGeo.dispose();
    for (let i = 0; i < RING_POOL; i++) {
      const mat = new THREE.LineBasicMaterial({
        color: 0xff2200,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const mesh = new THREE.LineSegments(wireGeo.clone(), mat);
      mesh.visible = false;
      this.scene.add(mesh);
      this.rings.push({ mesh, mat, radius: 0, speed: 20, active: false, color: [1, 0.1, 0] });
    }
    wireGeo.dispose();
  }

  private buildDateStrip(): void {
    this.dateCanvas = document.createElement('canvas');
    this.dateCanvas.width = 512;
    this.dateCanvas.height = 64;
    this.dateCtx = this.dateCanvas.getContext('2d')!;
    this.dateTex = new THREE.CanvasTexture(this.dateCanvas);
    this.dateTex.minFilter = THREE.LinearFilter;
    const geo = new THREE.PlaneGeometry(38, 4.5);
    this.dateMat = new THREE.MeshBasicMaterial({
      map: this.dateTex,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.dateMesh = new THREE.Mesh(geo, this.dateMat);
    this.dateMesh.position.set(0, -11, 0);
    this.scene.add(this.dateMesh);
  }

  private refreshDisplay(now: Date): void {
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    const digits = hh + mm + ss;

    for (let d = 0; d < 6; d++) {
      const mask = SEG7[digits[d]] ?? 0;
      for (let s = 0; s < 7; s++) {
        const on = (mask >> s) & 1;
        const mat = this.segMats[d][s];
        if (on) {
          mat.color.setRGB(1.0, 0.18 + this.beatKick * 0.1, 0.0);
          mat.opacity = 0.85 + this.beatKick * 0.1;
        } else {
          mat.color.setRGB(0.12, 0.01, 0.0);
          mat.opacity = 0.12;
        }
      }
    }

    // Date strip
    const ctx = this.dateCtx;
    ctx.fillStyle = '#030000';
    ctx.fillRect(0, 0, 512, 64);
    const r = Math.floor((0.5 + this.alarmFlash * 0.4) * 255);
    ctx.fillStyle = `rgb(${r},${Math.floor(r * 0.2)},0)`;
    ctx.font = 'bold 28px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const dateStr = `${dayNames[now.getDay()]}  ${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
    ctx.fillText(dateStr, 256, 32);
    this.dateTex.needsUpdate = true;
  }

  private spawnRing(speed: number, color: [number, number, number]): void {
    const r = this.rings.find(r => !r.active);
    if (!r) return;
    r.radius = 5;
    r.speed = speed;
    r.color = color;
    r.active = true;
    r.mesh.visible = true;
    r.mesh.scale.setScalar(5);
    r.mat.opacity = 0.75;
  }

  update(delta: number, audio: AudioData): void {
    this.time += delta;

    if (audio.beat) {
      this.beatKick = 1.0;
      this.alarmFlash = 1.0;
      this.spawnRing(35 + audio.bass * 30, [1.0, 0.15 + audio.bass * 0.3, 0]);
      this.spawnRing(22 + audio.bass * 18, [0.8, 0.05, 0]);
    }
    this.beatKick *= 0.86;
    this.alarmFlash *= 0.82;

    // Tick rings on new second
    const now = new Date();
    const sec = now.getSeconds();
    if (sec !== this.prevSecond) {
      this.prevSecond = sec;
      this.tickFlash = 0.6;
      this.spawnRing(15, [0.6, 0.08, 0]);
      this.refreshDisplay(now);
    } else {
      this.refreshDisplay(now);
    }
    this.tickFlash *= 0.85;

    // Colon pulse on beat / tick
    const colonBright = 0.5 + this.alarmFlash * 0.4 + this.tickFlash * 0.3;
    for (const mat of this.colonMats) {
      mat.color.setRGB(1.0, 0.15 + this.alarmFlash * 0.3, 0);
      mat.opacity = colonBright;
    }

    // Expand rings
    for (const ring of this.rings) {
      if (!ring.active) continue;
      ring.radius += ring.speed * delta;
      ring.mesh.scale.setScalar(ring.radius);
      const t = ring.radius / MAX_R;
      ring.mat.opacity = Math.max(0, (1 - t) * 0.65);
      ring.mat.color.setRGB(
        ring.color[0],
        ring.color[1] * (1 - t * 0.5),
        ring.color[2],
      );
      if (ring.radius >= MAX_R) {
        ring.active = false;
        ring.mesh.visible = false;
      }
    }

    // Ambient dim ring from volume
    if (Math.random() < audio.volume * 0.08) {
      this.spawnRing(8 + audio.volume * 10, [0.4, 0.04, 0]);
    }

    // Camera slow bob
    this.camera.position.x = Math.sin(this.time * 0.05) * 14;
    this.camera.position.y = 8 + this.beatKick * 4 + Math.sin(this.time * 0.04) * 4;
    this.camera.position.z = 82 + Math.cos(this.time * 0.05) * 10;
    this.camera.lookAt(0, 4, 0);
  }

  dispose(): void {
    this.dateTex.dispose();
    this.scene.traverse(o => {
      if (o instanceof THREE.Mesh || o instanceof THREE.LineSegments) {
        o.geometry.dispose();
        (o.material as THREE.Material).dispose();
      }
    });
  }
}
