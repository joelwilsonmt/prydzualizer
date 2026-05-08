import * as THREE from 'three';
import { BaseScene } from './BaseScene';
import type { AudioData } from '../audio/AudioEngine';

const POOL_SIZE = 20;
const MAX_R = 80;
const RING_PTS = 96;

interface Ring {
  line: THREE.Line;
  mat: THREE.LineBasicMaterial;
  radius: number;
  speed: number;
  active: boolean;
  hue: number; // 0=magenta, 1=violet, 2=white
}

export class ShockwaveScene extends BaseScene {
  private rings: Ring[] = [];
  private ambientTimer = 0;
  private time = 0;

  init(): void {
    this.scene.background = new THREE.Color(0x000000);
    this.camera.position.set(0, 55, 55);
    this.camera.lookAt(0, 0, 0);

    // Pre-build ring geometries using a unit circle — scale via Object3D.scale
    for (let i = 0; i < POOL_SIZE; i++) {
      const pts: THREE.Vector3[] = [];
      for (let j = 0; j <= RING_PTS; j++) {
        const a = (j / RING_PTS) * Math.PI * 2;
        pts.push(new THREE.Vector3(Math.cos(a), 0, Math.sin(a)));
      }
      const mat = new THREE.LineBasicMaterial({
        color: 0xff00ff,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), mat);
      line.visible = false;
      this.scene.add(line);
      this.rings.push({ line, mat, radius: 0, speed: 30, active: false, hue: 0 });
    }
  }

  private spawn(speed = 30, hue = 0): void {
    const ring = this.rings.find((r) => !r.active);
    if (!ring) return;
    ring.radius = 1;
    ring.speed = speed;
    ring.hue = hue;
    ring.active = true;
    ring.line.visible = true;
    ring.line.scale.setScalar(1);
    ring.line.position.y = (Math.random() - 0.5) * 6;
    ring.mat.opacity = 0.9;
  }

  update(delta: number, audio: AudioData): void {
    this.time += delta;
    this.ambientTimer -= delta;

    if (audio.beat) {
      this.spawn(35 + audio.bass * 30, 0);
      if (audio.bass > 0.5) this.spawn(20 + audio.bass * 15, 1); // double ring on strong beat
    }

    // Ambient slow rings
    if (this.ambientTimer <= 0) {
      this.spawn(12 + audio.volume * 8, 2);
      this.ambientTimer = 1.8 - audio.volume * 0.8;
    }

    for (const ring of this.rings) {
      if (!ring.active) continue;

      ring.radius += ring.speed * delta;
      const t = ring.radius / MAX_R; // 0→1 as ring expands

      ring.line.scale.setScalar(ring.radius);

      // Fade out as it expands
      ring.mat.opacity = Math.max(0, (1 - t) * 0.85);

      // Color by hue type
      if (ring.hue === 0) {
        // magenta → violet
        ring.mat.color.setRGB(1.0 - t * 0.3, 0, 0.6 + t * 0.4);
      } else if (ring.hue === 1) {
        // cyan
        ring.mat.color.setRGB(0, 0.6 + t * 0.4, 1.0);
      } else {
        // dim white ambient
        ring.mat.color.setRGB(0.4, 0.3 + t * 0.3, 0.5 + t * 0.2);
      }

      if (ring.radius >= MAX_R) {
        ring.active = false;
        ring.line.visible = false;
      }
    }

    // Gentle camera sway
    this.camera.position.x = Math.sin(this.time * 0.07) * 15;
    this.camera.position.z = 55 + Math.cos(this.time * 0.05) * 15;
    this.camera.position.y = 50 + audio.bass * 12;
    this.camera.lookAt(0, 0, 0);
  }

  dispose(): void {
    this.rings.forEach((r) => {
      r.line.geometry.dispose();
      r.mat.dispose();
    });
  }
}
