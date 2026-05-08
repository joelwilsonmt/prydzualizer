import * as THREE from 'three';
import { BaseScene } from './BaseScene';
import type { AudioData } from '../audio/AudioEngine';

// Binary clock + UNIX timestamp + hex data stream
// Layout: center binary clock rings, floating hex panels, animated epoch counter

const HEX_CHARS = '0123456789ABCDEF';
const PANEL_COUNT = 18;

interface HexPanel {
  mesh: THREE.Mesh;
  mat: THREE.MeshBasicMaterial;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  tex: THREE.CanvasTexture;
  angle: number;
  radius: number;
  yOff: number;
  refreshTimer: number;
  lines: string[];
  glowBeat: number;
}

interface BinaryRing {
  bits: THREE.Mesh[];
  mats: THREE.MeshBasicMaterial[];
  value: number; // current integer value displayed
  maxBits: number;
  radius: number;
  y: number;
  label: string;
}

export class ClockScene extends BaseScene {
  private panels: HexPanel[] = [];
  private rings: BinaryRing[] = [];
  private epochMesh!: THREE.Mesh;
  private epochMat!: THREE.MeshBasicMaterial;
  private epochCanvas!: HTMLCanvasElement;
  private epochCtx!: CanvasRenderingContext2D;
  private epochTex!: THREE.CanvasTexture;
  private time = 0;
  private beatKick = 0;
  private epochTimer = 0;

  init(): void {
    this.scene.background = new THREE.Color(0x000208);
    this.camera.position.set(0, 28, 95);
    this.camera.lookAt(0, 0, 0);
    this.scene.fog = new THREE.FogExp2(0x000208, 0.005);

    this.buildBinaryRings();
    this.buildHexPanels();
    this.buildEpochDisplay();
  }

  private buildBinaryRings(): void {
    // Hours (0-23, 5 bits), Minutes (0-59, 6 bits), Seconds (0-59, 6 bits)
    const ringDefs = [
      { label: 'HH', maxBits: 5, radius: 10, y: 14 },
      { label: 'MM', maxBits: 6, radius: 14, y: 0 },
      { label: 'SS', maxBits: 6, radius: 18, y: -14 },
    ];

    const dotGeo = new THREE.SphereGeometry(0.8, 8, 6);

    for (const def of ringDefs) {
      const bits: THREE.Mesh[] = [];
      const mats: THREE.MeshBasicMaterial[] = [];
      for (let b = 0; b < def.maxBits; b++) {
        const mat = new THREE.MeshBasicMaterial({
          color: 0x002244,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          transparent: true,
          opacity: 0.4,
        });
        const mesh = new THREE.Mesh(dotGeo, mat);
        const angle = (b / def.maxBits) * Math.PI * 2 - Math.PI / 2;
        mesh.position.set(
          Math.cos(angle) * def.radius,
          def.y,
          Math.sin(angle) * def.radius,
        );
        this.scene.add(mesh);
        bits.push(mesh);
        mats.push(mat);
      }
      this.rings.push({ bits, mats, value: 0, maxBits: def.maxBits, radius: def.radius, y: def.y, label: def.label });
    }

    dotGeo.dispose();
  }

  private buildHexPanels(): void {
    for (let i = 0; i < PANEL_COUNT; i++) {
      const angle = (i / PANEL_COUNT) * Math.PI * 2;
      const radius = 38 + Math.sin(i * 2.1) * 10;
      const yOff = (Math.random() - 0.5) * 30;

      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 192;
      const ctx = canvas.getContext('2d')!;
      const tex = new THREE.CanvasTexture(canvas);
      tex.minFilter = THREE.LinearFilter;

      const geo = new THREE.PlaneGeometry(12, 9);
      const mat = new THREE.MeshBasicMaterial({
        map: tex,
        transparent: true,
        opacity: 0.55,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(Math.cos(angle) * radius, yOff, Math.sin(angle) * radius);
      mesh.lookAt(0, yOff, 0);
      this.scene.add(mesh);

      const lines = Array.from({ length: 8 }, () => this.randomHexLine());

      this.panels.push({ mesh, mat, canvas, ctx, tex, angle, radius, yOff, refreshTimer: Math.random(), lines, glowBeat: 0 });
      this.drawPanel(this.panels[this.panels.length - 1]);
    }
  }

  private buildEpochDisplay(): void {
    this.epochCanvas = document.createElement('canvas');
    this.epochCanvas.width = 512;
    this.epochCanvas.height = 96;
    this.epochCtx = this.epochCanvas.getContext('2d')!;
    this.epochTex = new THREE.CanvasTexture(this.epochCanvas);
    this.epochTex.minFilter = THREE.LinearFilter;

    const geo = new THREE.PlaneGeometry(40, 7.5);
    this.epochMat = new THREE.MeshBasicMaterial({
      map: this.epochTex,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.epochMesh = new THREE.Mesh(geo, this.epochMat);
    this.epochMesh.position.set(0, 26, 0);
    this.scene.add(this.epochMesh);
    this.drawEpoch(0);
  }

  private randomHexLine(): string {
    let s = '';
    const prefix = ['0x', 'FF', 'DE', 'BE', 'CA', 'FE', 'BA', '0A'][Math.floor(Math.random() * 8)];
    s += prefix + ' ';
    for (let i = 0; i < 8; i++) {
      s += HEX_CHARS[Math.floor(Math.random() * 16)] + HEX_CHARS[Math.floor(Math.random() * 16)];
      if (i < 7) s += ' ';
    }
    return s;
  }

  private drawPanel(p: HexPanel): void {
    const { canvas, ctx } = p;
    ctx.fillStyle = '#000208';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const glow = p.glowBeat;
    const g = 0.4 + glow * 0.5;
    ctx.fillStyle = `rgba(0,${Math.floor(g * 200)},${Math.floor(g * 255)},1)`;
    ctx.font = 'bold 14px monospace';
    ctx.textAlign = 'left';

    for (let i = 0; i < p.lines.length; i++) {
      ctx.fillText(p.lines[i], 8, 18 + i * 21);
    }
    p.tex.needsUpdate = true;
  }

  private drawEpoch(beatGlow: number): void {
    const canvas = this.epochCanvas;
    const ctx = this.epochCtx;
    ctx.fillStyle = '#000208';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const now = Date.now();
    const epoch = Math.floor(now / 1000);
    const ms = now % 1000;
    const iso = new Date(now).toISOString().replace('T', ' ').slice(0, -1);

    const g = Math.floor((0.6 + beatGlow * 0.4) * 255);
    ctx.fillStyle = `rgb(0,${g},${Math.floor(g * 0.6)})`;
    ctx.font = 'bold 28px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(`${epoch}.${String(ms).padStart(3, '0')}`, canvas.width / 2, 38);

    ctx.font = '14px monospace';
    ctx.fillStyle = `rgba(0,${Math.floor(g * 0.7)},${Math.floor(g * 0.4)},1)`;
    ctx.fillText(iso, canvas.width / 2, 68);

    this.epochTex.needsUpdate = true;
  }

  update(delta: number, audio: AudioData): void {
    this.time += delta;
    this.epochTimer += delta;

    if (audio.beat) this.beatKick = 1.0;
    this.beatKick *= 0.86;

    // Update binary rings from real clock
    const now = new Date();
    const timeVals = [now.getHours(), now.getMinutes(), now.getSeconds()];

    for (let ri = 0; ri < this.rings.length; ri++) {
      const ring = this.rings[ri];
      const val = timeVals[ri];
      ring.value = val;

      for (let b = 0; b < ring.maxBits; b++) {
        const bit = (val >> (ring.maxBits - 1 - b)) & 1;
        const mat = ring.mats[b];
        if (bit) {
          if (ri === 0) {
            mat.color.setRGB(0.1 + this.beatKick * 0.1, 0.5 + audio.bass * 0.3 + this.beatKick * 0.3, 1.0);
          } else if (ri === 1) {
            mat.color.setRGB(0, 0.9 + audio.mid * 0.1, 0.4 + audio.mid * 0.3);
          } else {
            mat.color.setRGB(0, 0.6 + audio.treble * 0.3, 0.8 + audio.treble * 0.2);
          }
          mat.opacity = 0.7 + this.beatKick * 0.25;
        } else {
          mat.color.setRGB(0.02, 0.06, 0.15);
          mat.opacity = 0.3 + audio.volume * 0.1;
        }
      }
    }

    // Rotate rings slightly
    for (let ri = 0; ri < this.rings.length; ri++) {
      const ring = this.rings[ri];
      const rotSpeed = 0.015 + audio.volume * 0.02 + (ri % 2 === 0 ? 0 : -0.01);
      for (let b = 0; b < ring.maxBits; b++) {
        const angle = (b / ring.maxBits) * Math.PI * 2 - Math.PI / 2 + this.time * rotSpeed * (ri % 2 === 0 ? 1 : -1);
        ring.bits[b].position.set(
          Math.cos(angle) * ring.radius,
          ring.y,
          Math.sin(angle) * ring.radius,
        );
      }
    }

    // Update hex panels
    for (const p of this.panels) {
      if (audio.beat) p.glowBeat = 0.8 + audio.bass * 0.2;
      p.glowBeat *= 0.88;

      p.refreshTimer -= delta;
      if (p.refreshTimer <= 0) {
        p.refreshTimer = 0.12 + Math.random() * 0.2;
        const lineIdx = Math.floor(Math.random() * p.lines.length);
        p.lines[lineIdx] = this.randomHexLine();
        this.drawPanel(p);
      }

      // Orbit slowly
      p.angle += delta * (0.04 + audio.volume * 0.02);
      p.mesh.position.set(
        Math.cos(p.angle) * p.radius,
        p.yOff + Math.sin(this.time * 0.3 + p.angle) * 2,
        Math.sin(p.angle) * p.radius,
      );
      p.mesh.lookAt(0, p.yOff, 0);

      p.mat.opacity = 0.35 + audio.volume * 0.1 + p.glowBeat * 0.15;
    }

    // Epoch display — update every frame (ms counter)
    this.drawEpoch(this.beatKick);
    this.epochMesh.position.y = 26 + this.beatKick * 2;

    // Camera
    this.camera.position.x = Math.sin(this.time * 0.07) * 22;
    this.camera.position.y = 25 + audio.bass * 8 + this.beatKick * 4;
    this.camera.position.z = 90 + Math.cos(this.time * 0.07) * 15;
    this.camera.lookAt(0, 0, 0);
  }

  dispose(): void {
    this.epochTex.dispose();
    for (const p of this.panels) p.tex.dispose();
    this.scene.traverse(o => {
      if (o instanceof THREE.Mesh) {
        o.geometry.dispose();
        (o.material as THREE.Material).dispose();
      }
    });
  }
}
