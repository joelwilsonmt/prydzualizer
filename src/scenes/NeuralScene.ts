import * as THREE from 'three';
import { BaseScene } from './BaseScene';
import type { AudioData } from '../audio/AudioEngine';

interface NodeInfo {
  position: THREE.Vector3;
  mesh: THREE.Mesh;
  material: THREE.MeshBasicMaterial;
  neighbors: number[];
}

interface FiringNode {
  timeRemaining: number;
  propagated: boolean;
}

interface FiringEdge {
  timeRemaining: number;
}

export class NeuralScene extends BaseScene {
  private nodes: NodeInfo[] = [];
  private edgeLines!: THREE.LineSegments;
  private edgeGeo!: THREE.BufferGeometry;
  private edgeColors!: Float32Array;
  private edgeVertexMap: Map<string, number> = new Map(); // "i-j" -> vertex index in edge array

  private firingNodes: Map<number, FiringNode> = new Map();
  private firingEdges: Map<string, FiringEdge> = new Map();

  private autoFireTimer = 0;
  private time = 0;

  private colorDarkGreen = new THREE.Color(0x001a08);
  private colorLimeGreen = new THREE.Color(0x00cc33);
  private colorBrightGreen = new THREE.Color(0x33bb00);
  private colorWhite = new THREE.Color(0x88ffaa);
  private colorEdgeBase = new THREE.Color(0x001f0e);

  constructor() {
    super();
    this.scene.background = new THREE.Color(0x000a00);
  }

  init(): void {
    const NODE_COUNT = 180;
    const RANGE = 50;
    const CONNECTION_DIST = 22;

    // Create nodes
    for (let i = 0; i < NODE_COUNT; i++) {
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * RANGE * 2,
        (Math.random() - 0.5) * RANGE * 2,
        (Math.random() - 0.5) * RANGE * 2
      );

      const geo = new THREE.SphereGeometry(0.4, 8, 8);
      const mat = new THREE.MeshBasicMaterial({ color: this.colorDarkGreen.clone() });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.copy(position);
      this.scene.add(mesh);

      this.nodes.push({ position, mesh, material: mat, neighbors: [] });
    }

    // Determine neighbors
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dist = this.nodes[i].position.distanceTo(this.nodes[j].position);
        if (dist < CONNECTION_DIST) {
          this.nodes[i].neighbors.push(j);
          this.nodes[j].neighbors.push(i);
        }
      }
    }

    // Build edge geometry with per-vertex colors
    const edgeList: [number, number][] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      for (const j of this.nodes[i].neighbors) {
        if (j > i) {
          edgeList.push([i, j]);
        }
      }
    }

    const edgeVertexCount = edgeList.length * 2;
    const edgePositions = new Float32Array(edgeVertexCount * 3);
    this.edgeColors = new Float32Array(edgeVertexCount * 3);

    for (let e = 0; e < edgeList.length; e++) {
      const [i, j] = edgeList[e];
      const pi = this.nodes[i].position;
      const pj = this.nodes[j].position;

      const baseIdx = e * 2;
      edgePositions[baseIdx * 3 + 0] = pi.x;
      edgePositions[baseIdx * 3 + 1] = pi.y;
      edgePositions[baseIdx * 3 + 2] = pi.z;
      edgePositions[(baseIdx + 1) * 3 + 0] = pj.x;
      edgePositions[(baseIdx + 1) * 3 + 1] = pj.y;
      edgePositions[(baseIdx + 1) * 3 + 2] = pj.z;

      this.edgeColors[baseIdx * 3 + 0] = this.colorEdgeBase.r;
      this.edgeColors[baseIdx * 3 + 1] = this.colorEdgeBase.g;
      this.edgeColors[baseIdx * 3 + 2] = this.colorEdgeBase.b;
      this.edgeColors[(baseIdx + 1) * 3 + 0] = this.colorEdgeBase.r;
      this.edgeColors[(baseIdx + 1) * 3 + 1] = this.colorEdgeBase.g;
      this.edgeColors[(baseIdx + 1) * 3 + 2] = this.colorEdgeBase.b;

      const key = `${i}-${j}`;
      this.edgeVertexMap.set(key, baseIdx);
    }

    this.edgeGeo = new THREE.BufferGeometry();
    this.edgeGeo.setAttribute('position', new THREE.BufferAttribute(edgePositions, 3));
    this.edgeGeo.setAttribute('color', new THREE.BufferAttribute(this.edgeColors, 3));

    const edgeMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.edgeLines = new THREE.LineSegments(this.edgeGeo, edgeMat);
    this.scene.add(this.edgeLines);

    this.camera.position.set(0, 0, 80);
    this.camera.lookAt(0, 0, 0);
  }

  private fireSources(count: number): void {
    const picked: Set<number> = new Set();
    for (let i = 0; i < count * 3 && picked.size < count; i++) {
      picked.add(Math.floor(Math.random() * this.nodes.length));
    }
    picked.forEach((idx) => {
      this.firingNodes.set(idx, { timeRemaining: 0.8, propagated: false });
    });
  }

  update(delta: number, audio: AudioData): void {
    this.time += delta;

    // Auto-fire timer
    this.autoFireTimer -= delta;
    if (this.autoFireTimer <= 0 || audio.beat) {
      const count = 2 + Math.floor(audio.bass * 8);
      this.fireSources(count);
      this.autoFireTimer = audio.beat ? 0.25 : 1.0;
    }

    // Update firing nodes
    const toRemove: number[] = [];
    this.firingNodes.forEach((state, idx) => {
      state.timeRemaining -= delta;

      if (!state.propagated && state.timeRemaining < 0.6) {
        // Propagate to neighbors after 0.2s
        state.propagated = true;
        const propagateCount = 2 + Math.floor(audio.bass * 5);
        const neighbors = this.nodes[idx].neighbors;
        for (let k = 0; k < Math.min(propagateCount, neighbors.length); k++) {
          const nIdx = neighbors[Math.floor(Math.random() * neighbors.length)];
          if (!this.firingNodes.has(nIdx)) {
            this.firingNodes.set(nIdx, { timeRemaining: 0.6, propagated: false });
          }
          // Fire the edge
          const edgeKey = idx < nIdx ? `${idx}-${nIdx}` : `${nIdx}-${idx}`;
          this.firingEdges.set(edgeKey, { timeRemaining: 0.5 });
        }
      }

      if (state.timeRemaining <= 0) {
        toRemove.push(idx);
      }
    });
    toRemove.forEach((idx) => this.firingNodes.delete(idx));

    // Update firing edges
    const edgesToRemove: string[] = [];
    this.firingEdges.forEach((state, key) => {
      state.timeRemaining -= delta;
      if (state.timeRemaining <= 0) {
        edgesToRemove.push(key);
      }
    });
    edgesToRemove.forEach((key) => this.firingEdges.delete(key));

    // Update node visuals
    this.nodes.forEach((node, idx) => {
      const firing = this.firingNodes.get(idx);
      if (firing) {
        const t = firing.timeRemaining / 0.8;
        node.material.color.lerpColors(this.colorWhite, this.colorLimeGreen, 1 - t);
        const scale = 1.0 + t * 3.5 + audio.bass * 1.5;
        node.mesh.scale.setScalar(scale);
      } else {
        node.material.color.lerpColors(
          this.colorDarkGreen,
          node.material.color,
          0.85
        );
        node.mesh.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    });

    // Update edge colors
    // Reset all to base
    for (let i = 0; i < this.edgeColors.length; i += 3) {
      this.edgeColors[i] = this.colorEdgeBase.r;
      this.edgeColors[i + 1] = this.colorEdgeBase.g;
      this.edgeColors[i + 2] = this.colorEdgeBase.b;
    }

    // Highlight firing edges
    this.firingEdges.forEach((state, key) => {
      const baseIdx = this.edgeVertexMap.get(key);
      if (baseIdx === undefined) return;
      const t = state.timeRemaining / 0.5;
      const c = this.colorBrightGreen.clone().lerp(this.colorWhite, 1 - t);
      this.edgeColors[baseIdx * 3 + 0] = c.r;
      this.edgeColors[baseIdx * 3 + 1] = c.g;
      this.edgeColors[baseIdx * 3 + 2] = c.b;
      this.edgeColors[(baseIdx + 1) * 3 + 0] = c.r;
      this.edgeColors[(baseIdx + 1) * 3 + 1] = c.g;
      this.edgeColors[(baseIdx + 1) * 3 + 2] = c.b;
    });

    this.edgeGeo.attributes.color.needsUpdate = true;

    // Camera orbit
    const orbitR = 95 + audio.volume * 20;
    const orbitSpeed = 0.12;
    this.camera.position.x = Math.sin(this.time * orbitSpeed) * orbitR;
    this.camera.position.y = Math.cos(this.time * orbitSpeed * 0.7) * orbitR * 0.4;
    this.camera.position.z = Math.cos(this.time * orbitSpeed) * orbitR;
    this.camera.lookAt(0, 0, 0);
  }

  dispose(): void {
    this.nodes.forEach((node) => {
      node.mesh.geometry.dispose();
      node.material.dispose();
    });
    this.edgeGeo.dispose();
    (this.edgeLines.material as THREE.Material).dispose();
  }
}
