import * as THREE from 'three';
import { BaseScene } from './BaseScene';
import type { AudioData } from '../audio/AudioEngine';

// 4D hypercube: 16 vertices, 32 edges
// Vertices: all (±1, ±1, ±1, ±1)
const VERTS4D: [number, number, number, number][] = [];
for (let i = 0; i < 16; i++) {
  VERTS4D.push([
    i & 1 ? 1 : -1,
    i & 2 ? 1 : -1,
    i & 4 ? 1 : -1,
    i & 8 ? 1 : -1,
  ]);
}

// Edges: connect vertices differing in exactly one bit
const EDGES: [number, number][] = [];
for (let a = 0; a < 16; a++) {
  for (let b = a + 1; b < 16; b++) {
    const diff = a ^ b;
    if (diff && (diff & (diff - 1)) === 0) EDGES.push([a, b]); // one bit different
  }
}

export class TesseractScene extends BaseScene {
  private edgeLines!: THREE.LineSegments;
  private nodesMesh!: THREE.Points;
  private edgePositions!: Float32Array;
  private nodePositions!: Float32Array;
  private angleXW = 0;
  private angleYW = 0;
  private angleZW = 0;
  private beatScale = 1;
  private time = 0;

  init(): void {
    this.scene.background = new THREE.Color(0x000005);
    this.camera.position.set(0, 0, 70);
    this.camera.lookAt(0, 0, 0);

    // Edge LineSegments
    this.edgePositions = new Float32Array(EDGES.length * 2 * 3);
    const edgeGeo = new THREE.BufferGeometry();
    edgeGeo.setAttribute('position', new THREE.BufferAttribute(this.edgePositions, 3));
    const edgeMat = new THREE.LineBasicMaterial({
      color: 0x88ddff,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
      opacity: 0.8,
    });
    this.edgeLines = new THREE.LineSegments(edgeGeo, edgeMat);
    this.scene.add(this.edgeLines);

    // Node points
    this.nodePositions = new Float32Array(16 * 3);
    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute('position', new THREE.BufferAttribute(this.nodePositions, 3));
    const nodeMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });
    this.nodesMesh = new THREE.Points(nodeGeo, nodeMat);
    this.scene.add(this.nodesMesh);
  }

  private project(v: [number, number, number, number]): THREE.Vector3 {
    // Rotate in XW plane
    const x1 = v[0] * Math.cos(this.angleXW) - v[3] * Math.sin(this.angleXW);
    const w1 = v[0] * Math.sin(this.angleXW) + v[3] * Math.cos(this.angleXW);
    // Rotate in YW plane
    const y1 = v[1] * Math.cos(this.angleYW) - w1 * Math.sin(this.angleYW);
    const w2 = v[1] * Math.sin(this.angleYW) + w1 * Math.cos(this.angleYW);
    // Rotate in ZW plane
    const z1 = v[2] * Math.cos(this.angleZW) - w2 * Math.sin(this.angleZW);
    const w3 = v[2] * Math.sin(this.angleZW) + w2 * Math.cos(this.angleZW);
    // Perspective projection from 4D to 3D
    const d = 2.5;
    const s = d / (d - w3);
    return new THREE.Vector3(x1 * s, y1 * s, z1 * s);
  }

  update(delta: number, audio: AudioData): void {
    this.time += delta;

    if (audio.beat) this.beatScale = 1.25;
    this.beatScale += (1.0 - this.beatScale) * 0.1;

    const rotSpeed = 0.35 + audio.volume * 0.6;
    this.angleXW += delta * rotSpeed * 0.7;
    this.angleYW += delta * rotSpeed * 0.5;
    this.angleZW += delta * rotSpeed * 0.4;

    const scale = 18 * this.beatScale * (1 + audio.bass * 0.2);

    // Project all 16 vertices
    const projected = VERTS4D.map((v) => {
      const p = this.project(v);
      return new THREE.Vector3(p.x * scale, p.y * scale, p.z * scale);
    });

    // Update edge positions
    for (let i = 0; i < EDGES.length; i++) {
      const [a, b] = EDGES[i];
      const pa = projected[a], pb = projected[b];
      this.edgePositions[i * 6]     = pa.x; this.edgePositions[i * 6 + 1] = pa.y; this.edgePositions[i * 6 + 2] = pa.z;
      this.edgePositions[i * 6 + 3] = pb.x; this.edgePositions[i * 6 + 4] = pb.y; this.edgePositions[i * 6 + 5] = pb.z;
    }

    // Update node positions
    for (let i = 0; i < 16; i++) {
      this.nodePositions[i * 3]     = projected[i].x;
      this.nodePositions[i * 3 + 1] = projected[i].y;
      this.nodePositions[i * 3 + 2] = projected[i].z;
    }

    (this.edgeLines.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    (this.nodesMesh.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;

    const edgeMat = this.edgeLines.material as THREE.LineBasicMaterial;
    edgeMat.color.setRGB(
      0.4 + audio.treble * 0.3,
      0.7 + audio.mid * 0.2,
      1.0
    );
    edgeMat.opacity = 0.6 + audio.volume * 0.4;

    this.camera.position.x = Math.sin(this.time * 0.08) * 20;
    this.camera.position.y = Math.cos(this.time * 0.06) * 15;
    this.camera.position.z = 70;
    this.camera.lookAt(0, 0, 0);
  }

  dispose(): void {
    this.edgeLines.geometry.dispose();
    (this.edgeLines.material as THREE.Material).dispose();
    this.nodesMesh.geometry.dispose();
    (this.nodesMesh.material as THREE.Material).dispose();
  }
}
