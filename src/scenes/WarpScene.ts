import * as THREE from 'three';
import { BaseScene } from './BaseScene';
import type { AudioData } from '../audio/AudioEngine';

const STAR_COUNT = 3000;
const MAX_DIST = 120;
const BASE_SPEED = 18;

export class WarpScene extends BaseScene {
  private stars!: THREE.LineSegments;
  private positions!: Float32Array;
  private colors!: Float32Array;
  private directions: Float32Array = new Float32Array(STAR_COUNT * 3);
  private distances: Float32Array = new Float32Array(STAR_COUNT);
  private time = 0;
  private warpDir = 1;        // 1 = fly out, -1 = fly in
  private flipTimer = 10;
  private sweepX = 0;
  private sweepY = 0;

  init(): void {
    this.scene.background = new THREE.Color(0x00000a);
    this.camera.position.set(0, 0, 0);
    this.camera.lookAt(0, 0, -1);

    this.positions = new Float32Array(STAR_COUNT * 2 * 3);
    this.colors = new Float32Array(STAR_COUNT * 2 * 3);

    for (let i = 0; i < STAR_COUNT; i++) {
      this.resetStar(i, true);
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));

    const mat = new THREE.LineBasicMaterial({
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.stars = new THREE.LineSegments(geo, mat);
    this.scene.add(this.stars);
  }

  private resetStar(i: number, randomDist = false): void {
    // random direction in sphere
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const dx = Math.sin(phi) * Math.cos(theta);
    const dy = Math.sin(phi) * Math.sin(theta);
    const dz = -Math.abs(Math.cos(phi)) - 0.2; // bias forward (into screen)
    const len = Math.sqrt(dx * dx + dy * dy + dz * dz);
    this.directions[i * 3] = dx / len;
    this.directions[i * 3 + 1] = dy / len;
    this.directions[i * 3 + 2] = dz / len;
    this.distances[i] = randomDist ? Math.random() * MAX_DIST * 0.8 : 1;
  }

  update(delta: number, audio: AudioData): void {
    this.time += delta;
    const speed = BASE_SPEED + audio.bass * 70;
    const streakFactor = 0.06 + audio.bass * 0.18;

    // Periodically flip warp direction for variety
    this.flipTimer -= delta;
    if (this.flipTimer <= 0 || (audio.beat && Math.random() < 0.12)) {
      this.warpDir *= -1;
      this.flipTimer = 9 + Math.random() * 8;
    }

    // Slow sweep of the look target
    this.sweepX = Math.sin(this.time * 0.07) * 12;
    this.sweepY = Math.cos(this.time * 0.05) * 6;

    for (let i = 0; i < STAR_COUNT; i++) {
      this.distances[i] += speed * delta * this.warpDir;
      if (this.distances[i] > MAX_DIST || this.distances[i] < 0.5) {
        this.distances[i] = this.warpDir > 0 ? 1 : MAX_DIST * 0.9;
        this.resetStar(i);
      }

      const d = this.distances[i];
      const streak = speed * delta * streakFactor * 60;
      // Tail trails behind the motion direction
      const dTail = this.warpDir > 0
        ? Math.max(0.1, d - streak)
        : Math.min(MAX_DIST * 0.99, d + streak);
      const dx = this.directions[i * 3];
      const dy = this.directions[i * 3 + 1];
      const dz = this.directions[i * 3 + 2];

      const vi = i * 2 * 3;
      // tail vertex
      this.positions[vi]     = dx * dTail;
      this.positions[vi + 1] = dy * dTail;
      this.positions[vi + 2] = dz * dTail;
      // tip vertex (leading edge)
      this.positions[vi + 3] = dx * d;
      this.positions[vi + 4] = dy * d;
      this.positions[vi + 5] = dz * d;

      // color: tip = bright, tail = dim; flip brightness when reversing
      const tColor = this.warpDir > 0 ? d / MAX_DIST : 1 - d / MAX_DIST;
      const r = tColor * 0.35;
      const g = 0.3 + tColor * 0.4;
      const b = 0.7 + tColor * 0.3;
      this.colors[vi]     = r * 0.15; this.colors[vi + 1] = g * 0.25; this.colors[vi + 2] = b * 0.25;
      this.colors[vi + 3] = r;        this.colors[vi + 4] = g;        this.colors[vi + 5] = b;
    }

    (this.stars.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    (this.stars.geometry.attributes.color as THREE.BufferAttribute).needsUpdate = true;

    this.camera.position.x = Math.sin(this.time * 0.07) * (1.5 + audio.bass * 2.5);
    this.camera.position.y = Math.cos(this.time * 0.05) * (1.0 + audio.bass * 1.5);
    const lookZ = this.warpDir > 0 ? -100 : 100;
    this.camera.lookAt(this.sweepX, this.sweepY, lookZ);
  }

  dispose(): void {
    this.stars.geometry.dispose();
    (this.stars.material as THREE.Material).dispose();
  }
}
