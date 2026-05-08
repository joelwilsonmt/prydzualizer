import * as THREE from 'three';
import { BaseScene } from './BaseScene';
import type { AudioData } from '../audio/AudioEngine';

const POOL = 14;
const MAX_R = 65;

interface Shell {
  mesh: THREE.LineSegments;
  mat: THREE.LineBasicMaterial;
  radius: number;
  speed: number;
  active: boolean;
  tint: number; // 0=cyan, 1=white, 2=green
}

export class PulseScene extends BaseScene {
  private shells: Shell[] = [];
  private core!: THREE.Mesh;
  private coreMat!: THREE.MeshBasicMaterial;
  private coreScale = 1;
  private ambientTimer = 0;
  private time = 0;

  init(): void {
    this.scene.background = new THREE.Color(0x000000);
    this.camera.position.set(0, 25, 75);
    this.camera.lookAt(0, 0, 0);

    // Wireframe icosahedron for shells
    const icoGeo = new THREE.IcosahedronGeometry(1, 2);
    const wireGeo = new THREE.WireframeGeometry(icoGeo);
    icoGeo.dispose();

    for (let i = 0; i < POOL; i++) {
      const mat = new THREE.LineBasicMaterial({
        color: 0x00ddff,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const mesh = new THREE.LineSegments(wireGeo.clone(), mat);
      mesh.visible = false;
      this.scene.add(mesh);
      this.shells.push({ mesh, mat, radius: 0, speed: 22, active: false, tint: 0 });
    }

    // Central core sphere
    const coreGeo = new THREE.IcosahedronGeometry(3, 2);
    const coreWire = new THREE.WireframeGeometry(coreGeo);
    coreGeo.dispose();
    this.coreMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
      opacity: 0.9,
    }) as unknown as THREE.MeshBasicMaterial;
    this.core = new THREE.Mesh(coreWire as unknown as THREE.BufferGeometry, this.coreMat);
    this.scene.add(this.core);
  }

  private spawn(speed: number, tint: number): void {
    const s = this.shells.find((sh) => !sh.active);
    if (!s) return;
    s.radius = 3;
    s.speed = speed;
    s.tint = tint;
    s.active = true;
    s.mesh.visible = true;
    s.mesh.scale.setScalar(3);
    s.mat.opacity = 0.85;
  }

  update(delta: number, audio: AudioData): void {
    this.time += delta;
    this.ambientTimer -= delta;

    if (audio.beat) {
      this.spawn(28 + audio.bass * 25, 0);
      this.coreScale = 1.6 + audio.bass * 0.5;
    }
    if (this.ambientTimer <= 0) {
      this.spawn(10 + audio.volume * 6, 2);
      this.ambientTimer = 2.2 - audio.volume;
    }

    this.coreScale += (1.0 - this.coreScale) * 0.08;
    this.core.scale.setScalar(this.coreScale);

    const coreMat = this.coreMat as unknown as THREE.LineBasicMaterial;
    coreMat.color.setRGB(
      0.6 + audio.treble * 0.4,
      0.8 + audio.mid * 0.2,
      1.0
    );

    for (const s of this.shells) {
      if (!s.active) continue;

      s.radius += s.speed * delta;
      s.mesh.scale.setScalar(s.radius);

      const t = s.radius / MAX_R;
      s.mat.opacity = Math.max(0, (1 - t) * 0.75);

      if (s.tint === 0) {
        s.mat.color.setRGB(0, 0.7 + t * 0.3, 1.0);
      } else if (s.tint === 1) {
        s.mat.color.setRGB(1.0, 1.0, 1.0);
      } else {
        s.mat.color.setRGB(0, 0.8, 0.3 + t * 0.4);
      }

      if (s.radius >= MAX_R) {
        s.active = false;
        s.mesh.visible = false;
      }
    }

    this.camera.position.x = Math.sin(this.time * 0.07) * 18;
    this.camera.position.y = 22 + Math.sin(this.time * 0.05) * 10;
    this.camera.position.z = 72 + Math.cos(this.time * 0.07) * 12;
    this.camera.lookAt(0, 0, 0);
  }

  dispose(): void {
    this.shells.forEach((s) => { s.mesh.geometry.dispose(); s.mat.dispose(); });
    this.core.geometry.dispose();
    (this.core.material as THREE.Material).dispose();
  }
}
