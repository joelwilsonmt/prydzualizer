import * as THREE from 'three';
import { BaseScene } from './BaseScene';
import type { AudioData } from '../audio/AudioEngine';

interface DataPanel {
  mesh: THREE.Mesh;
  material: THREE.MeshBasicMaterial;
  texture: THREE.CanvasTexture;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  lines: string[];
  lastUpdate: number;
  glitching: boolean;
  glitchTimer: number;
}

interface MatrixChar {
  sprite: THREE.Sprite;
  material: THREE.SpriteMaterial;
  texture: THREE.CanvasTexture;
  canvas: HTMLCanvasElement;
  fallSpeed: number;
  y: number;
  yMin: number;
  yMax: number;
}

const HEX_CHARS = '0123456789ABCDEF';
const MATRIX_CHARS = '0123456789ABCDEF01';

function randomHex(len: number): string {
  let s = '0x';
  for (let i = 0; i < len; i++) s += HEX_CHARS[Math.floor(Math.random() * 16)];
  return s;
}

function randomLine(): string {
  const templates = [
    () => `SYNC > ${randomHex(4)}`,
    () => `UPLINK: ${Math.random() > 0.5 ? 'ESTABLISHED' : 'PENDING'}`,
    () => `ΔT: +${(Math.random() * 0.01).toFixed(6)}ms`,
    () => `${randomHex(8)} ${randomHex(8)}`,
    () => `2047.${String(Math.floor(Math.random() * 12 + 1)).padStart(2, '0')}.${String(Math.floor(Math.random() * 28 + 1)).padStart(2, '0')} ${String(Math.floor(Math.random() * 24)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}.${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`,
    () => `FREQ: ${(Math.random() * 1000).toFixed(2)} MHz`,
    () => `NODE_${String(Math.floor(Math.random() * 256)).padStart(3, '0')} OK`,
    () => `ERR: ${randomHex(2)} AT ${randomHex(4)}`,
    () => `PING ${(Math.random() * 200).toFixed(1)}ms RTT`,
    () => `${Array.from({ length: 16 }, () => Math.round(Math.random())).join('')}`,
    () => `LOAD: ${(Math.random() * 100).toFixed(1)}%`,
    () => `CRC ${randomHex(4)} OK`,
  ];
  return templates[Math.floor(Math.random() * templates.length)]();
}

export class DigitalScene extends BaseScene {
  private panels: DataPanel[] = [];
  private matrixChars: MatrixChar[] = [];
  private gridHelper!: THREE.GridHelper;
  private time = 0;
  private cameraZ = 50;

  constructor() {
    super();
    this.scene.background = new THREE.Color(0x000000);
  }

  private createPanel(x: number, y: number, z: number, rotY: number, rotX: number): DataPanel {
    const canvasWidth = 256;
    const canvasHeight = 384;
    const canvas = document.createElement('canvas');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    const ctx = canvas.getContext('2d')!;

    const lineCount = 20;
    const lines: string[] = [];
    for (let i = 0; i < lineCount; i++) {
      lines.push(randomLine());
    }

    const texture = new THREE.CanvasTexture(canvas);
    const geo = new THREE.PlaneGeometry(8, 12);
    const mat = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    mesh.rotation.y = rotY;
    mesh.rotation.x = rotX;
    this.scene.add(mesh);

    const panel: DataPanel = {
      mesh,
      material: mat,
      texture,
      canvas,
      ctx,
      lines,
      lastUpdate: 0,
      glitching: false,
      glitchTimer: 0,
    };

    this.drawPanel(panel);
    return panel;
  }

  private drawPanel(panel: DataPanel, glitch = false): void {
    const { ctx, canvas, lines } = panel;
    const { width, height } = canvas;
    const lineH = height / lines.length;
    const fontSize = Math.max(8, Math.floor(lineH * 0.75));

    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);

    if (glitch) {
      ctx.fillStyle = `rgba(0,255,0,${Math.random() * 0.3 + 0.1})`;
      ctx.fillRect(0, 0, width, height);
      for (let i = 0; i < 5; i++) {
        const gx = Math.random() * width;
        const gy = Math.random() * height;
        const gw = Math.random() * width * 0.5;
        const gh = Math.random() * 20 + 2;
        ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.5})`;
        ctx.fillRect(gx, gy, gw, gh);
      }
    }

    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < lines.length; i++) {
      const brightness = glitch
        ? Math.random() > 0.3
          ? 255
          : Math.floor(Math.random() * 128 + 64)
        : Math.floor(180 + Math.random() * 75);
      ctx.fillStyle = `rgb(0, ${brightness}, ${Math.floor(brightness * 0.3)})`;
      ctx.fillText(lines[i].substring(0, 30), 4, (i + 1) * lineH - 2);
    }

    // Border
    ctx.strokeStyle = glitch ? '#ffffff' : '#00ff44';
    ctx.globalAlpha = glitch ? 0.8 : 0.3;
    ctx.lineWidth = 1;
    ctx.strokeRect(1, 1, width - 2, height - 2);
    ctx.globalAlpha = 1.0;

    panel.texture.needsUpdate = true;
  }

  private createMatrixChar(): MatrixChar {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d')!;
    const char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
    ctx.fillStyle = 'transparent';
    ctx.clearRect(0, 0, 32, 32);
    ctx.fillStyle = '#00ff44';
    ctx.font = 'bold 24px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(char, 16, 16);

    const texture = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      opacity: Math.random() * 0.6 + 0.2,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const sprite = new THREE.Sprite(mat);
    const scale = 1 + Math.random() * 2;
    sprite.scale.set(scale, scale, 1);

    const x = (Math.random() - 0.5) * 200;
    const z = (Math.random() - 0.5) * 200 - 50;
    const yMax = 30 + Math.random() * 20;
    const yMin = -30 - Math.random() * 20;
    const y = yMin + Math.random() * (yMax - yMin);
    sprite.position.set(x, y, z);

    return {
      sprite,
      material: mat,
      texture,
      canvas,
      fallSpeed: 2 + Math.random() * 8,
      y,
      yMin,
      yMax,
    };
  }

  init(): void {
    // Create 20 data panels scattered in 3D space
    for (let i = 0; i < 20; i++) {
      const x = (Math.random() - 0.5) * 120;
      const y = (Math.random() - 0.5) * 40;
      const z = -20 - Math.random() * 150;
      const rotY = (Math.random() - 0.5) * Math.PI * 0.6;
      const rotX = (Math.random() - 0.5) * 0.3;
      this.panels.push(this.createPanel(x, y, z, rotY, rotX));
    }

    // Grid helper
    this.gridHelper = new THREE.GridHelper(200, 30, 0x003300, 0x001a00);
    this.gridHelper.position.y = -20;
    this.scene.add(this.gridHelper);

    // Matrix rain chars
    for (let i = 0; i < 200; i++) {
      const mc = this.createMatrixChar();
      this.scene.add(mc.sprite);
      this.matrixChars.push(mc);
    }

    this.camera.position.set(0, 5, this.cameraZ);
    this.camera.lookAt(0, 0, 0);
  }

  update(delta: number, audio: AudioData): void {
    this.time += delta;

    // Camera drift forward
    const speed = 5 + audio.bass * 35;
    this.cameraZ -= speed * delta;
    if (this.cameraZ < -150) this.cameraZ = 50;

    this.camera.position.z += (this.cameraZ - this.camera.position.z) * 0.05;
    this.camera.position.x = Math.sin(this.time * 0.1) * 3;
    this.camera.position.y = 5 + Math.cos(this.time * 0.08) * 2;
    this.camera.lookAt(this.camera.position.x * 0.2, 0, this.camera.position.z - 30);

    const now = performance.now();

    // Update panels
    this.panels.forEach((panel, i) => {
      // Scroll content every 100ms
      if (now - panel.lastUpdate > 100) {
        panel.lines.shift();
        panel.lines.push(randomLine());
        panel.lastUpdate = now;
      }

      // Glitch on beat
      if (audio.beat && Math.random() < 0.3) {
        panel.glitching = true;
        panel.glitchTimer = 0.15 + Math.random() * 0.15;
      }

      if (panel.glitching) {
        panel.glitchTimer -= delta;
        if (panel.glitchTimer <= 0) {
          panel.glitching = false;
        }
        this.drawPanel(panel, true);
      } else {
        // Throttle normal redraws to every 100ms
        if (now - panel.lastUpdate < 50) {
          this.drawPanel(panel, false);
        }
      }

      // Opacity based on volume and mid
      panel.material.opacity = 0.25 + audio.volume * 0.65 + audio.mid * 0.1;
      void i;
    });

    // Matrix chars falling
    this.matrixChars.forEach((mc) => {
      mc.y -= mc.fallSpeed * delta;
      if (mc.y < mc.yMin) {
        mc.y = mc.yMax;
        // Change character
        const char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        const ctx = mc.canvas.getContext('2d')!;
        ctx.clearRect(0, 0, 32, 32);
        ctx.fillStyle = '#00ff44';
        ctx.font = 'bold 24px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(char, 16, 16);
        mc.texture.needsUpdate = true;
      }
      mc.sprite.position.y = mc.y;
      mc.material.opacity = 0.08 + audio.treble * 0.55 + audio.volume * 0.15;
    });
  }

  dispose(): void {
    this.panels.forEach((p) => {
      p.mesh.geometry.dispose();
      p.material.dispose();
      p.texture.dispose();
    });
    this.gridHelper.dispose();
    this.matrixChars.forEach((mc) => {
      mc.sprite.geometry?.dispose();
      mc.material.dispose();
      mc.texture.dispose();
    });
  }
}
