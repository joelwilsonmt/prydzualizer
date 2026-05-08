import * as THREE from 'three';
import { BaseScene } from './BaseScene';
import type { AudioData } from '../audio/AudioEngine';

// Pulse variant — expanding platonic solid wireframes
const POOL = 20;
const MAX_R = 70;

const GEOS = [
  new THREE.TetrahedronGeometry(1, 0),
  new THREE.OctahedronGeometry(1, 0),
  new THREE.IcosahedronGeometry(1, 0),
  new THREE.IcosahedronGeometry(1, 1),
  new THREE.DodecahedronGeometry(1, 0),
];

interface Crystal {
  mesh: THREE.LineSegments;
  mat: THREE.LineBasicMaterial;
  radius: number;
  speed: number;
  active: boolean;
  rotAxis: THREE.Vector3;
  rotSpeed: number;
  hue: number;  // 0-1
}

export class CrystalScene extends BaseScene {
  private crystals: Crystal[] = [];
  private core!: THREE.LineSegments;
  private coreMat!: THREE.LineBasicMaterial;
  private coreRot = new THREE.Vector3(0.4, 0.7, 0.3).normalize();
  private coreScale = 1;
  private ambientTimer = 0;
  private time = 0;
  private beatKick = 0;
  private hueOffset = 0;

  init(): void {
    this.scene.background = new THREE.Color(0x000008);
    this.camera.position.set(0, 20, 80);
    this.camera.lookAt(0, 0, 0);
    this.scene.fog = new THREE.FogExp2(0x000008, 0.004);

    // Pre-build wireframe geometry for each platonic solid
    const wireGeos = GEOS.map(g => { const w = new THREE.WireframeGeometry(g); g.dispose(); return w; });

    for (let i = 0; i < POOL; i++) {
      const geoIdx = i % wireGeos.length;
      const mat = new THREE.LineBasicMaterial({
        color: 0x00ffff,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const mesh = new THREE.LineSegments(wireGeos[geoIdx].clone(), mat);
      mesh.visible = false;
      this.scene.add(mesh);

      const rotAxis = new THREE.Vector3(
        Math.random() - 0.5,
        Math.random() - 0.5,
        Math.random() - 0.5,
      ).normalize();

      this.crystals.push({
        mesh, mat,
        radius: 0,
        speed: 20,
        active: false,
        rotAxis,
        rotSpeed: 0.5 + Math.random() * 1.5,
        hue: Math.random(),
      });
    }

    wireGeos.forEach(g => g.dispose());

    // Central core — dense icosahedron
    const coreGeo = new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(4, 2));
    this.coreMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.core = new THREE.LineSegments(coreGeo, this.coreMat);
    this.scene.add(this.core);
  }

  private spawn(speed: number, hue: number): void {
    const c = this.crystals.find(c => !c.active);
    if (!c) return;
    c.radius = 4;
    c.speed = speed;
    c.hue = hue;
    c.active = true;
    c.mesh.visible = true;
    c.mesh.scale.setScalar(4);
    c.mesh.rotation.set(
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
    );
    c.mat.opacity = 0.8;
  }

  update(delta: number, audio: AudioData): void {
    this.time += delta;
    this.hueOffset += delta * 0.05;
    this.ambientTimer -= delta;

    if (audio.beat) {
      this.beatKick = 1.0;
      this.spawn(32 + audio.bass * 28, (this.hueOffset + 0.0) % 1);
      this.spawn(20 + audio.bass * 15, (this.hueOffset + 0.33) % 1);
      this.coreScale = 1.8 + audio.bass * 0.6;
    }
    if (this.ambientTimer <= 0) {
      this.spawn(10 + audio.volume * 8, (this.hueOffset + Math.random()) % 1);
      this.ambientTimer = 1.8 - audio.volume * 0.5;
    }
    this.beatKick *= 0.87;
    this.coreScale += (1.0 - this.coreScale) * 0.07;
    this.core.scale.setScalar(this.coreScale);

    // Rotate core
    this.core.rotateOnAxis(this.coreRot, delta * (0.4 + audio.volume * 0.6));
    this.coreMat.color.setHSL((this.hueOffset + 0.5) % 1, 0.8, 0.55 + audio.treble * 0.2);

    for (const c of this.crystals) {
      if (!c.active) continue;

      c.radius += c.speed * delta;
      c.mesh.scale.setScalar(c.radius);
      c.mesh.rotateOnAxis(c.rotAxis, c.rotSpeed * delta);

      const t = c.radius / MAX_R;
      c.mat.opacity = Math.max(0, (1 - t) * 0.7);

      // HSL color shift as crystal expands
      const hue = (c.hue + t * 0.15 + this.hueOffset) % 1;
      const sat = 0.7 + audio.mid * 0.3;
      const lit = 0.4 + t * 0.2;
      c.mat.color.setHSL(hue, sat, lit);

      if (c.radius >= MAX_R) {
        c.active = false;
        c.mesh.visible = false;
      }
    }

    // Camera arc
    this.camera.position.x = Math.sin(this.time * 0.09) * 22;
    this.camera.position.y = 18 + Math.sin(this.time * 0.06) * 12 + this.beatKick * 5;
    this.camera.position.z = 78 + Math.cos(this.time * 0.09) * 14;
    this.camera.lookAt(0, 0, 0);
  }

  dispose(): void {
    this.crystals.forEach(c => { c.mesh.geometry.dispose(); c.mat.dispose(); });
    this.core.geometry.dispose();
    this.coreMat.dispose();
  }
}
