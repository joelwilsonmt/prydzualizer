import * as THREE from 'three';
import { BaseScene } from './BaseScene';
import type { AudioData } from '../audio/AudioEngine';

const TURNS = 4;
const SEGMENTS = 80;
const RADIUS = 6;
const HEIGHT = 60;

export class DNAScene extends BaseScene {
  private group!: THREE.Group;
  private strandMats: THREE.LineBasicMaterial[] = [];
  private rungMat!: THREE.LineBasicMaterial;
  private pulsePositions: { t: number; dir: number }[] = [];
  private pulseMeshes: THREE.Mesh[] = [];
  private time = 0;

  init(): void {
    this.scene.background = new THREE.Color(0x000208);
    this.camera.position.set(0, 0, 80);
    this.camera.lookAt(0, 0, 0);

    this.group = new THREE.Group();
    this.scene.add(this.group);

    const pts1: THREE.Vector3[] = [];
    const pts2: THREE.Vector3[] = [];
    for (let i = 0; i <= SEGMENTS; i++) {
      const t = (i / SEGMENTS) * Math.PI * 2 * TURNS;
      const y = (i / SEGMENTS) * HEIGHT - HEIGHT / 2;
      pts1.push(new THREE.Vector3(Math.cos(t) * RADIUS, y, Math.sin(t) * RADIUS));
      pts2.push(new THREE.Vector3(Math.cos(t + Math.PI) * RADIUS, y, Math.sin(t + Math.PI) * RADIUS));
    }

    const mat1 = new THREE.LineBasicMaterial({ color: 0x00ffee, blending: THREE.AdditiveBlending, depthWrite: false });
    const mat2 = new THREE.LineBasicMaterial({ color: 0xff44bb, blending: THREE.AdditiveBlending, depthWrite: false });
    this.strandMats = [mat1, mat2];
    this.rungMat = new THREE.LineBasicMaterial({ color: 0x446688, transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending, depthWrite: false });

    this.group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts1), mat1));
    this.group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts2), mat2));

    // rungs every N segments
    const rungPts: THREE.Vector3[] = [];
    for (let i = 0; i <= SEGMENTS; i += 2) {
      rungPts.push(pts1[i], pts2[i]);
    }
    const rungGeo = new THREE.BufferGeometry().setFromPoints(rungPts);
    this.group.add(new THREE.LineSegments(rungGeo, this.rungMat));

    // pulse spheres (reused pool)
    const pulseMat = new THREE.MeshBasicMaterial({ color: 0xffffff, blending: THREE.AdditiveBlending, depthWrite: false });
    for (let i = 0; i < 4; i++) {
      const m = new THREE.Mesh(new THREE.SphereGeometry(0.5, 6, 6), pulseMat.clone());
      m.visible = false;
      this.group.add(m);
      this.pulseMeshes.push(m);
    }

    // dim ambient fog
    this.scene.fog = new THREE.FogExp2(0x000208, 0.008);
  }

  update(delta: number, audio: AudioData): void {
    this.time += delta;

    this.group.rotation.y += delta * (0.3 + audio.volume * 4.0);
    this.group.rotation.z = Math.sin(this.time * 0.5) * audio.bass * 0.6;

    // camera gentle orbit
    this.camera.position.x = Math.sin(this.time * 0.15) * 20;
    this.camera.position.z = Math.cos(this.time * 0.15) * 80;
    this.camera.lookAt(0, 0, 0);

    // strand color pulsing on volume
    const v = audio.volume;
    this.strandMats[0].color.setRGB(0 + v * 0.3, 1.0, 0.93 + v * 0.07);
    this.strandMats[1].color.setRGB(1.0, 0.27 + v * 0.3, 0.73 + v * 0.27);

    // spawn pulse on beat
    if (audio.beat) {
      const free = this.pulsePositions.length < 4 ? this.pulsePositions.length : -1;
      if (free >= 0 || this.pulsePositions.length < 4) {
        this.pulsePositions.push({ t: 0, dir: Math.random() > 0.5 ? 1 : -1 });
      }
    }

    // advance pulses
    this.pulsePositions = this.pulsePositions.filter((p, idx) => {
      p.t += delta * (2.5 + audio.mid * 2.5) * p.dir;
      const norm = Math.abs(p.t) / 1.0; // 0-1 over 1 sec
      if (norm > 1) {
        if (this.pulseMeshes[idx]) this.pulseMeshes[idx].visible = false;
        return false;
      }
      const frac = (p.dir > 0 ? norm : 1 - norm);
      const angle = frac * Math.PI * 2 * TURNS;
      const y = frac * HEIGHT - HEIGHT / 2;
      const strand = Math.random() > 0.5 ? 1 : -1;
      const x = Math.cos(angle + (strand > 0 ? 0 : Math.PI)) * RADIUS;
      const z = Math.sin(angle + (strand > 0 ? 0 : Math.PI)) * RADIUS;
      if (this.pulseMeshes[idx]) {
        this.pulseMeshes[idx].position.set(x, y, z);
        this.pulseMeshes[idx].visible = true;
        (this.pulseMeshes[idx].material as THREE.MeshBasicMaterial).color.setRGB(
          1.0, 0.8 + audio.treble * 0.2, 1.0
        );
      }
      return true;
    });

    // hide unused pulse meshes
    for (let i = this.pulsePositions.length; i < this.pulseMeshes.length; i++) {
      this.pulseMeshes[i].visible = false;
    }
  }

  dispose(): void {
    this.group.traverse((obj) => {
      if (obj instanceof THREE.Mesh || obj instanceof THREE.Line || obj instanceof THREE.LineSegments) {
        obj.geometry.dispose();
        if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
        else obj.material.dispose();
      }
    });
  }
}
