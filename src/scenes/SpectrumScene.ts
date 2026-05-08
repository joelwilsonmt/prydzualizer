import * as THREE from 'three';
import { BaseScene } from './BaseScene';
import type { AudioData } from '../audio/AudioEngine';

const BAR_COUNT = 128;
const INNER_R = 9;     // radius where bars start
const MAX_EXTEND = 48; // max radial bar length
const MIN_EXTEND = 1.0; // minimum bar length so structure always visible

// Log-ish frequency bin mapping: spreads bass bars wide, compresses treble
function binForBar(i: number): number {
  return Math.round(Math.pow(i / (BAR_COUNT - 1), 0.7) * 110);
}

export class SpectrumScene extends BaseScene {
  private bars!: THREE.InstancedMesh;
  private dummy = new THREE.Object3D();
  private color = new THREE.Color();
  private innerRing!: THREE.Line;
  private innerRingMat!: THREE.LineBasicMaterial;
  private outerRing!: THREE.Line;
  private outerRingMat!: THREE.LineBasicMaterial;
  private time = 0;
  private smoothBars = new Float32Array(BAR_COUNT); // per-bar smoothing

  init(): void {
    this.scene.background = new THREE.Color(0x030000);
    this.camera.position.set(0, 65, 45);
    this.camera.lookAt(0, 0, 0);
    this.scene.fog = new THREE.FogExp2(0x030000, 0.004);

    // Radial bar: length along X, pivot at inner end (x=0)
    const barGeo = new THREE.BoxGeometry(1, 0.85, 0.85);
    barGeo.translate(0.5, 0, 0);

    const barMat = new THREE.MeshBasicMaterial({
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: false,
    });

    this.bars = new THREE.InstancedMesh(barGeo, barMat, BAR_COUNT);
    this.bars.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.bars.instanceColor = new THREE.InstancedBufferAttribute(
      new Float32Array(BAR_COUNT * 3), 3
    );
    this.bars.instanceColor.setUsage(THREE.DynamicDrawUsage);
    this.scene.add(this.bars);

    // Inner definition ring
    const ringPts: THREE.Vector3[] = [];
    for (let i = 0; i <= 128; i++) {
      const a = (i / 128) * Math.PI * 2;
      ringPts.push(new THREE.Vector3(Math.cos(a) * INNER_R, 0, Math.sin(a) * INNER_R));
    }
    this.innerRingMat = new THREE.LineBasicMaterial({
      color: 0xff3300,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.innerRing = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(ringPts),
      this.innerRingMat
    );
    this.scene.add(this.innerRing);

    // Outer boundary ring (at max extent)
    const outerPts: THREE.Vector3[] = [];
    for (let i = 0; i <= 128; i++) {
      const a = (i / 128) * Math.PI * 2;
      const r = INNER_R + MAX_EXTEND + 2;
      outerPts.push(new THREE.Vector3(Math.cos(a) * r, 0, Math.sin(a) * r));
    }
    this.outerRingMat = new THREE.LineBasicMaterial({
      color: 0x220500,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.outerRing = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(outerPts),
      this.outerRingMat
    );
    this.scene.add(this.outerRing);
  }

  update(delta: number, audio: AudioData): void {
    this.time += delta;

    const raw = audio.raw;
    const slowRot = this.time * 0.04;

    for (let i = 0; i < BAR_COUNT; i++) {
      const bin = binForBar(i);
      const rawVal = (raw[bin] ?? 0) / 255;

      // Per-bar smoothing: fast attack, slower decay
      const target = rawVal * MAX_EXTEND * (1 + audio.bass * 1.5);
      const rate = rawVal > this.smoothBars[i] / MAX_EXTEND ? 0.5 : 0.12;
      this.smoothBars[i] += (Math.max(MIN_EXTEND, target) - this.smoothBars[i]) * rate;

      const barLen = this.smoothBars[i];
      const angle = (i / BAR_COUNT) * Math.PI * 2 + slowRot;

      // Position at inner ring, rotate outward
      this.dummy.position.set(
        Math.cos(angle) * INNER_R,
        0,
        Math.sin(angle) * INNER_R
      );
      this.dummy.rotation.set(0, -angle, 0);
      this.dummy.scale.set(barLen, 1, 1);
      this.dummy.updateMatrix();
      this.bars.setMatrixAt(i, this.dummy.matrix);

      // Color by frequency position: red (bass) → orange → amber → white (treble)
      const freq = i / BAR_COUNT; // 0=bass, 1=treble
      const amp = Math.min(0.72, rawVal * 1.1 + 0.04);
      if (freq < 0.33) {
        this.color.setRGB(amp, amp * (freq / 0.33) * 0.45, 0);
      } else if (freq < 0.66) {
        const t = (freq - 0.33) / 0.33;
        this.color.setRGB(amp, amp * (0.45 + t * 0.45), amp * t * 0.2);
      } else {
        const t = (freq - 0.66) / 0.34;
        this.color.setRGB(amp, amp * (0.9 + t * 0.1), amp * (0.2 + t * 0.8));
      }
      this.bars.setColorAt(i, this.color);
    }

    this.bars.instanceMatrix.needsUpdate = true;
    this.bars.instanceColor!.needsUpdate = true;

    // Inner ring pulses with bass
    const bassR = 0.6 + audio.bass * 0.4;
    this.innerRingMat.color.setRGB(bassR, bassR * 0.15, 0);

    // Outer ring barely visible, hints at max extent
    this.outerRingMat.color.setRGB(0.12 + audio.treble * 0.1, 0.02, 0);

    // Camera slow orbit, slightly elevated
    this.camera.position.x = Math.sin(this.time * 0.06) * 20;
    this.camera.position.y = 60 + Math.sin(this.time * 0.1) * 8;
    this.camera.position.z = 45 + Math.cos(this.time * 0.06) * 20;
    this.camera.lookAt(0, 0, 0);
  }

  dispose(): void {
    this.bars.geometry.dispose();
    (this.bars.material as THREE.Material).dispose();
    this.innerRing.geometry.dispose();
    this.innerRingMat.dispose();
    this.outerRing.geometry.dispose();
    this.outerRingMat.dispose();
  }
}
