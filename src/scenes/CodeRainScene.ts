import * as THREE from 'three';
import { BaseScene } from './BaseScene';
import type { AudioData } from '../audio/AudioEngine';

const COLS = 32;
const ROWS = 28;
const CHAR_W = 3.2;
const CHAR_H = 4.0;
// Katakana + ASCII mix
const GLYPHS = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉ01アイウエオ{}[]<>/\\;:!?#$%@&';

interface Column {
  x: number;
  headY: number;      // 0..ROWS, leading glyph row
  speed: number;      // rows/sec
  length: number;     // trail length in rows
  active: boolean;
  chars: number[];    // glyph index per row (ROWS length)
  scrambleTimer: number;
}

export class CodeRainScene extends BaseScene {
  private columns: Column[] = [];
  private meshes: THREE.Mesh[][] = []; // [col][row]
  private mats: THREE.MeshBasicMaterial[][] = [];
  private glyphTex!: THREE.CanvasTexture;
  private time = 0;
  private beatKick = 0;
  private spawnTimer = 0;

  init(): void {
    this.scene.background = new THREE.Color(0x000300);
    this.camera.position.set(0, 0, 85);
    this.camera.lookAt(0, 0, 0);
    this.scene.fog = new THREE.FogExp2(0x000300, 0.008);

    this.glyphTex = this.buildGlyphTexture();

    const totalW = COLS * CHAR_W;
    const totalH = ROWS * CHAR_H;

    for (let c = 0; c < COLS; c++) {
      const colMeshes: THREE.Mesh[] = [];
      const colMats: THREE.MeshBasicMaterial[] = [];
      const chars = Array.from({ length: ROWS }, () => Math.floor(Math.random() * GLYPHS.length));

      for (let r = 0; r < ROWS; r++) {
        const geo = new THREE.PlaneGeometry(CHAR_W * 0.9, CHAR_H * 0.9);
        const mat = new THREE.MeshBasicMaterial({
          map: this.glyphTex,
          color: 0x003300,
          transparent: true,
          opacity: 0,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });
        const mesh = new THREE.Mesh(geo, mat);
        const glyph = chars[r];
        this.setUV(geo, glyph);
        mesh.position.set(
          c * CHAR_W - totalW / 2 + CHAR_W / 2,
          totalH / 2 - r * CHAR_H - CHAR_H / 2,
          (Math.random() - 0.5) * 12,
        );
        this.scene.add(mesh);
        colMeshes.push(mesh);
        colMats.push(mat);
      }

      this.meshes.push(colMeshes);
      this.mats.push(colMats);

      this.columns.push({
        x: c,
        headY: -Math.floor(Math.random() * ROWS),
        speed: 4 + Math.random() * 8,
        length: 6 + Math.floor(Math.random() * 10),
        active: Math.random() > 0.3,
        chars,
        scrambleTimer: Math.random(),
      });
    }
  }

  private buildGlyphTexture(): THREE.CanvasTexture {
    const ATLAS_COLS = 8;
    const ATLAS_ROWS = 8;
    const CW = 48, CH = 56;
    const canvas = document.createElement('canvas');
    canvas.width = ATLAS_COLS * CW;
    canvas.height = ATLAS_ROWS * CH;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ff41';
    ctx.font = `bold ${CH * 0.72}px monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (let i = 0; i < ATLAS_COLS * ATLAS_ROWS; i++) {
      const glyph = GLYPHS[i % GLYPHS.length];
      const ax = (i % ATLAS_COLS) * CW + CW / 2;
      const ay = Math.floor(i / ATLAS_COLS) * CH + CH / 2;
      ctx.fillText(glyph, ax, ay);
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.minFilter = THREE.LinearFilter;
    return tex;
  }

  private setUV(geo: THREE.PlaneGeometry, glyphIdx: number): void {
    const ATLAS_COLS = 8;
    const ATLAS_ROWS = 8;
    const idx = glyphIdx % (ATLAS_COLS * ATLAS_ROWS);
    const ax = idx % ATLAS_COLS;
    const ay = Math.floor(idx / ATLAS_COLS);
    const u0 = ax / ATLAS_COLS;
    const u1 = (ax + 1) / ATLAS_COLS;
    const v0 = 1 - (ay + 1) / ATLAS_ROWS;
    const v1 = 1 - ay / ATLAS_ROWS;
    const uv = geo.attributes.uv as THREE.BufferAttribute;
    uv.setXY(0, u0, v1);
    uv.setXY(1, u1, v1);
    uv.setXY(2, u0, v0);
    uv.setXY(3, u1, v0);
    uv.needsUpdate = true;
  }

  update(delta: number, audio: AudioData): void {
    this.time += delta;
    this.spawnTimer -= delta;

    if (audio.beat) this.beatKick = 1.0;
    this.beatKick *= 0.85;

    // Occasionally spawn new columns
    if (this.spawnTimer <= 0) {
      this.spawnTimer = 0.15 + Math.random() * 0.3;
      const idle = this.columns.filter(c => !c.active);
      if (idle.length) {
        const col = idle[Math.floor(Math.random() * idle.length)];
        col.active = true;
        col.headY = -col.length;
        col.speed = 5 + audio.volume * 10 + this.beatKick * 12;
        col.length = 6 + Math.floor(Math.random() * 12);
      }
    }

    for (let c = 0; c < COLS; c++) {
      const col = this.columns[c];

      // Scramble random glyphs periodically
      col.scrambleTimer -= delta;
      if (col.scrambleTimer <= 0) {
        col.scrambleTimer = 0.08 + Math.random() * 0.12;
        const r = Math.floor(Math.random() * ROWS);
        col.chars[r] = Math.floor(Math.random() * GLYPHS.length);
        if (col.active) this.setUV(this.meshes[c][r].geometry as THREE.PlaneGeometry, col.chars[r]);
      }

      if (!col.active) {
        for (let r = 0; r < ROWS; r++) this.mats[c][r].opacity = 0;
        continue;
      }

      col.headY += col.speed * delta;

      if (col.headY > ROWS + col.length) {
        col.active = false;
        continue;
      }

      const headRow = Math.floor(col.headY);

      for (let r = 0; r < ROWS; r++) {
        const dist = headRow - r;
        let opacity = 0;
        let bright = 0;

        if (dist === 0) {
          // Leading character — near white
          opacity = 0.95 + this.beatKick * 0.05;
          bright = 1.0;
        } else if (dist > 0 && dist < col.length) {
          // Trail — fade out
          const t = 1 - dist / col.length;
          opacity = t * (0.6 + audio.volume * 0.2);
          bright = t;
        }

        const mat = this.mats[c][r];
        mat.opacity = opacity;
        if (opacity > 0) {
          if (dist === 0) {
            mat.color.setRGB(0.85 + this.beatKick * 0.15, 1.0, 0.85 + this.beatKick * 0.15);
          } else {
            const g = 0.12 + bright * (0.55 + audio.bass * 0.2);
            mat.color.setRGB(0, g, 0);
          }
        }
      }
    }

    // Gentle camera drift
    this.camera.position.x = Math.sin(this.time * 0.04) * 8;
    this.camera.position.y = Math.sin(this.time * 0.03) * 4;
    this.camera.position.z = 82 + Math.cos(this.time * 0.05) * 6 - this.beatKick * 3;
    this.camera.lookAt(0, 0, 0);
  }

  dispose(): void {
    this.glyphTex.dispose();
    this.scene.traverse(o => {
      if (o instanceof THREE.Mesh) {
        o.geometry.dispose();
        (o.material as THREE.Material).dispose();
      }
    });
  }
}
