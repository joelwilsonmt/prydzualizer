import * as THREE from 'three';
import { BaseScene } from './BaseScene';
import type { AudioData } from '../audio/AudioEngine';

const GRID = 14;
const CELL = 5;

export class CityScene extends BaseScene {
  private buildingMats: THREE.LineBasicMaterial[] = [];
  private buildingHeights: number[] = [];
  private scanLine!: THREE.Mesh;
  private scanY = -30;
  private scanDir = 1;
  private time = 0;
  private gridHelper!: THREE.GridHelper;

  init(): void {
    this.scene.background = new THREE.Color(0x000510);
    this.camera.position.set(0, 100, 80);
    this.camera.lookAt(0, 0, 0);
    this.scene.fog = new THREE.FogExp2(0x000510, 0.004);

    const half = (GRID * CELL) / 2;

    for (let row = 0; row < GRID; row++) {
      for (let col = 0; col < GRID; col++) {
        const h = 4 + Math.random() * 28;
        this.buildingHeights.push(h);
        const x = col * CELL - half + CELL / 2;
        const z = row * CELL - half + CELL / 2;

        const geo = new THREE.BoxGeometry(CELL * 0.7, h, CELL * 0.7);
        const edges = new THREE.EdgesGeometry(geo);
        const mat = new THREE.LineBasicMaterial({
          color: 0x002266,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          transparent: true,
          opacity: 0.12,
        });
        this.buildingMats.push(mat);
        const mesh = new THREE.LineSegments(edges, mat);
        mesh.position.set(x, h / 2, z);
        this.scene.add(mesh);
        geo.dispose();
      }
    }

    // Ground grid
    this.gridHelper = new THREE.GridHelper(GRID * CELL, GRID, 0x001a55, 0x000d2a);
    this.scene.add(this.gridHelper);

    // Scan plane
    const scanGeo = new THREE.PlaneGeometry(GRID * CELL * 1.2, GRID * CELL * 1.2);
    scanGeo.rotateX(-Math.PI / 2);
    const scanMat = new THREE.MeshBasicMaterial({
      color: 0x00aaff,
      transparent: true,
      opacity: 0.04,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    this.scanLine = new THREE.Mesh(scanGeo, scanMat);
    this.scanLine.position.y = this.scanY;
    this.scene.add(this.scanLine);

    // beams removed — they bloomed too strongly
  }

  update(delta: number, audio: AudioData): void {
    this.time += delta;

    // Slow camera orbit
    const orbitR = 120;
    this.camera.position.x = Math.sin(this.time * 0.08) * orbitR * 0.3;
    this.camera.position.z = 80 + Math.cos(this.time * 0.08) * 20;
    this.camera.position.y = 90 + audio.bass * 15;
    this.camera.lookAt(0, 0, 0);

    // Move scan line
    const scanSpeed = (6 + audio.bass * 28) * this.scanDir;
    this.scanY += scanSpeed * delta;
    if (this.scanY > 35) { this.scanY = 35; this.scanDir = -1; }
    if (this.scanY < -5) { this.scanY = -5; this.scanDir = 1; }
    this.scanLine.position.y = this.scanY;

    // Pulse building opacity based on scan proximity
    let idx = 0;
    for (let row = 0; row < GRID; row++) {
      for (let col = 0; col < GRID; col++) {
        const h = this.buildingHeights[idx];
        const scanDist = Math.abs(this.scanY - h / 2);
        const proximity = Math.max(0, 1 - scanDist / 20);
        const baseOpacity = 0.06 + audio.volume * 0.03;
        this.buildingMats[idx].opacity = baseOpacity + proximity * 0.18;

        // Color: very dim at rest, modest cyan only at scan line
        if (audio.beat && proximity > 0.5) {
          this.buildingMats[idx].color.setRGB(0.28, 0.18, 0.0);
        } else {
          const r = proximity * 0.05;
          const g = 0.08 + proximity * 0.32;
          const b = 0.25 + proximity * 0.28;
          this.buildingMats[idx].color.setRGB(r, g, b);
        }
        idx++;
      }
    }

    // Scan plane opacity pulse
    (this.scanLine.material as THREE.MeshBasicMaterial).opacity = 0.015 + audio.bass * 0.03;
  }

  dispose(): void {
    this.scene.traverse((obj) => {
      if (obj instanceof THREE.LineSegments || obj instanceof THREE.Mesh) {
        obj.geometry.dispose();
        if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
        else obj.material.dispose();
      }
    });
  }
}
