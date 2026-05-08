import * as THREE from 'three';
import { BaseScene } from './BaseScene';
import type { AudioData } from '../audio/AudioEngine';

const TERM_COLS = 60;
const TERM_ROWS = 22;
const PANEL_COUNT = 5;
const CW = 10;   // canvas px per char wide
const CH = 16;   // canvas px per char tall

const PROMPTS = ['root@prydz:~# ', 'sys@node-7:~$ ', 'admin@core:~# ', '>>> '];

const COMMANDS: Array<{ cmd: string; out: string[] }> = [
  { cmd: 'ps aux | grep audio', out: ['audio    1337  99.9  2.1 beat_engine', 'audio    1338  0.1  0.0 freq_analyzer', 'audio    1339  44.1  0.8 pcm_buffer'] },
  { cmd: 'cat /proc/realtime', out: ['bpm: 128', 'bass: 0.84', 'mid: 0.41', 'treble: 0.22', 'beat: true'] },
  { cmd: 'ffmpeg -i track.flac -af loudnorm', out: ['Input Integrated: -14.2 LUFS', 'Input True Peak: -1.0 dBTP', 'Normalizing output...', 'frame= 2048 fps=192 q=-1.0 Lsize=44100kB'] },
  { cmd: 'ls -la /dev/audio*', out: ['crw-rw---- 1 root audio 116,  0 /dev/audio0', 'crw-rw---- 1 root audio 116,  1 /dev/dsp', 'crw-rw---- 1 root audio 116, 16 /dev/mixer'] },
  { cmd: 'netstat -an | grep 44100', out: ['tcp  0  0 127.0.0.1:44100  0.0.0.0:*  LISTEN', 'tcp  0  0 127.0.0.1:44100  127.0.0.1:51234  ESTABLISHED'] },
  { cmd: 'tail -f /var/log/beats.log', out: ['[00:00:00.000] BEAT  bass=0.91 bpm=128', '[00:00:00.469] BEAT  bass=0.78 bpm=128', '[00:00:00.938] BEAT  bass=0.85 bpm=128', '[00:00:01.406] BEAT  bass=0.93 bpm=128'] },
  { cmd: 'analyze --fft 512 --window hann', out: ['FFT size:    512 bins', 'Sample rate: 44100 Hz', 'Resolution:  86.1 Hz/bin', 'Peak freq:   432.0 Hz  (+3.2 dB)'] },
  { cmd: 'grep -r "DROP TABLE" /db/schema/', out: ['No matches found.', '[OK] Schema integrity verified'] },
  { cmd: 'uptime', out: ['23:59:58 up 7 days, 4:20,  3 users,  load average: 1.28, 1.28, 1.28'] },
  { cmd: 'hexdump -C audio.raw | head', out: ['00000000  ff fe 00 01 8a bc 2d 44  f0 11 aa 03 cc ee 77 12  |......-D......w.|', '00000010  00 80 ff 7f 01 00 fe ff  82 aa 11 cd ef 34 ab 00  |.............4..|'] },
];

interface Panel {
  mesh: THREE.Mesh;
  mat: THREE.MeshBasicMaterial;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  tex: THREE.CanvasTexture;
  lines: string[];
  typingLine: string;
  typingTarget: string;
  typingPos: number;
  typingTimer: number;
  outputQueue: string[];
  outputTimer: number;
  cursorBlink: number;
  prompt: string;
  state: 'prompt' | 'typing' | 'output' | 'idle';
  idleTimer: number;
  angle: number;
  radius: number;
  tilt: number;
  glowBeat: number;
}

export class TerminalScene extends BaseScene {
  private panels: Panel[] = [];
  private time = 0;
  private beatKick = 0;

  init(): void {
    this.scene.background = new THREE.Color(0x000200);
    this.camera.position.set(0, 0, 80);
    this.camera.lookAt(0, 0, 0);
    this.scene.fog = new THREE.FogExp2(0x000200, 0.006);

    const cw = TERM_COLS * CW;
    const ch = TERM_ROWS * CH;
    const aspect = cw / ch;

    for (let i = 0; i < PANEL_COUNT; i++) {
      const canvas = document.createElement('canvas');
      canvas.width = cw;
      canvas.height = ch;
      const ctx = canvas.getContext('2d')!;
      const tex = new THREE.CanvasTexture(canvas);
      tex.minFilter = THREE.LinearFilter;

      const panelW = 28 * aspect;
      const panelH = 28;
      const geo = new THREE.PlaneGeometry(panelW, panelH);
      const mat = new THREE.MeshBasicMaterial({
        map: tex,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(geo, mat);

      const angle = (i / PANEL_COUNT) * Math.PI * 2 + 0.3;
      const radius = 48 + Math.sin(i * 2.3) * 14;
      const tilt = (Math.random() - 0.5) * 0.35;
      const zExtra = (Math.random() - 0.5) * 30;
      mesh.position.set(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 28,
        Math.sin(angle) * radius + zExtra,
      );
      mesh.lookAt(0, mesh.position.y, 0);
      mesh.rotation.x += tilt;
      this.scene.add(mesh);

      const prompt = PROMPTS[i % PROMPTS.length];
      const initLines: string[] = [];
      for (let r = 0; r < 8; r++) initLines.push('');

      const panel: Panel = {
        mesh, mat, canvas, ctx, tex,
        lines: initLines,
        typingLine: '',
        typingTarget: '',
        typingPos: 0,
        typingTimer: 0,
        outputQueue: [],
        outputTimer: 0,
        cursorBlink: 0,
        prompt,
        state: 'prompt',
        idleTimer: i * 0.7,
        angle,
        radius,
        tilt,
        glowBeat: 0,
      };
      this.beginCommand(panel);
      this.panels.push(panel);
    }
  }

  private beginCommand(p: Panel): void {
    const cmd = COMMANDS[Math.floor(Math.random() * COMMANDS.length)];
    p.typingTarget = p.prompt + cmd.cmd;
    p.typingLine = p.prompt;
    p.typingPos = p.prompt.length;
    p.outputQueue = [...cmd.out];
    p.state = 'typing';
    p.typingTimer = 0;
  }

  private pushLine(p: Panel, line: string): void {
    p.lines.push(line);
    if (p.lines.length > TERM_ROWS) p.lines.shift();
  }

  private drawPanel(p: Panel): void {
    const { canvas, ctx } = p;
    const cw = canvas.width;
    const ch = canvas.height;
    const glow = p.glowBeat;

    ctx.fillStyle = '#000200';
    ctx.fillRect(0, 0, cw, ch);

    // Scanline overlay
    ctx.fillStyle = 'rgba(0,255,0,0.015)';
    for (let y = 0; y < ch; y += 4) ctx.fillRect(0, y, cw, 1);

    const baseG = Math.floor((0.55 + glow * 0.35) * 255);
    ctx.font = `${CH - 2}px monospace`;
    ctx.textBaseline = 'top';

    for (let r = 0; r < p.lines.length; r++) {
      const line = p.lines[r];
      if (!line) continue;
      // Dim older lines
      const age = p.lines.length - 1 - r;
      const dimG = Math.max(40, baseG - age * 9);
      ctx.fillStyle = `rgb(0,${dimG},0)`;
      ctx.fillText(line.slice(0, TERM_COLS), 4, r * CH);
    }

    // Current typing line
    const currentRow = p.lines.length;
    ctx.fillStyle = `rgb(0,${baseG},0)`;
    ctx.fillText(p.typingLine.slice(0, TERM_COLS), 4, currentRow * CH);

    // Cursor
    if (p.state === 'typing' || p.state === 'prompt') {
      const cursorOn = Math.floor(p.cursorBlink * 2) % 2 === 0;
      if (cursorOn) {
        const cx = 4 + p.typingLine.length * (CW);
        ctx.fillStyle = `rgb(0,${baseG},0)`;
        ctx.fillRect(cx, currentRow * CH, CW - 1, CH - 2);
      }
    }

    p.tex.needsUpdate = true;
  }

  update(delta: number, audio: AudioData): void {
    this.time += delta;

    if (audio.beat) this.beatKick = 1.0;
    this.beatKick *= 0.87;

    for (const p of this.panels) {
      p.cursorBlink += delta;
      if (audio.beat) p.glowBeat = 0.8 + audio.bass * 0.2;
      p.glowBeat *= 0.88;

      const typeSpeed = 0.045 - audio.volume * 0.015; // faster at louder

      if (p.state === 'idle') {
        p.idleTimer -= delta;
        if (p.idleTimer <= 0) this.beginCommand(p);

      } else if (p.state === 'typing') {
        p.typingTimer += delta;
        if (p.typingTimer >= typeSpeed && p.typingPos < p.typingTarget.length) {
          p.typingTimer = 0;
          p.typingLine += p.typingTarget[p.typingPos++];
        }
        if (p.typingPos >= p.typingTarget.length) {
          // Commit line, start output
          this.pushLine(p, p.typingLine);
          p.typingLine = '';
          p.state = 'output';
          p.outputTimer = 0.08;
        }

      } else if (p.state === 'output') {
        p.outputTimer -= delta;
        if (p.outputTimer <= 0 && p.outputQueue.length > 0) {
          this.pushLine(p, p.outputQueue.shift()!);
          p.outputTimer = 0.06 + Math.random() * 0.1;
        }
        if (p.outputQueue.length === 0 && p.outputTimer <= 0) {
          this.pushLine(p, '');
          p.state = 'idle';
          p.idleTimer = 0.4 + Math.random() * 1.2;
        }

      } else if (p.state === 'prompt') {
        p.idleTimer -= delta;
        if (p.idleTimer <= 0) this.beginCommand(p);
      }

      this.drawPanel(p);

      p.mat.opacity = 0.6 + audio.volume * 0.15 + p.glowBeat * 0.15;
    }

    // Slow orbit
    this.camera.position.x = Math.sin(this.time * 0.06) * 30;
    this.camera.position.y = 6 + Math.sin(this.time * 0.04) * 14;
    this.camera.position.z = 95 + Math.cos(this.time * 0.05) * 20;
    this.camera.lookAt(0, 0, 0);
  }

  dispose(): void {
    for (const p of this.panels) p.tex.dispose();
    this.scene.traverse(o => {
      if (o instanceof THREE.Mesh) {
        o.geometry.dispose();
        (o.material as THREE.Material).dispose();
      }
    });
  }
}
