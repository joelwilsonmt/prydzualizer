import * as THREE from 'three';
import { BaseScene } from './BaseScene';
import type { AudioData } from '../audio/AudioEngine';

export class NebulaScene extends BaseScene {
  private particles!: THREE.Points;
  private particleMaterial!: THREE.PointsMaterial;
  private nebulaSphere1!: THREE.Mesh;
  private nebulaSphere2!: THREE.Mesh;
  private time = 0;
  private beatFlash = 0;

  constructor() {
    super();
    this.scene.background = new THREE.Color(0x000005);
  }

  init(): void {
    const COUNT = 60000;
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);

    const colorFar = new THREE.Color(0x0022cc);
    const colorMid = new THREE.Color(0x0099cc);
    const colorNear = new THREE.Color(0x44bbdd); // soft cyan instead of white

    for (let i = 0; i < COUNT; i++) {
      // Bias toward center using cube root sampling
      const r = Math.cbrt(Math.random()) * 80;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Color: near center = white, mid = cyan, far = deep blue
      const t = r / 80; // 0=center, 1=far
      let c: THREE.Color;
      if (t < 0.5) {
        c = colorNear.clone().lerp(colorMid, t * 2);
      } else {
        c = colorMid.clone().lerp(colorFar, (t - 0.5) * 2);
      }
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    this.particleMaterial = new THREE.PointsMaterial({
      size: 0.2,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.particles = new THREE.Points(geometry, this.particleMaterial);
    this.scene.add(this.particles);

    // Nebula cloud spheres
    const cloudGeo1 = new THREE.SphereGeometry(40, 32, 32);
    const cloudMat1 = new THREE.MeshBasicMaterial({
      color: 0x000833,
      transparent: true,
      opacity: 0.18,
      side: THREE.BackSide,
      depthWrite: false,
    });
    this.nebulaSphere1 = new THREE.Mesh(cloudGeo1, cloudMat1);
    this.scene.add(this.nebulaSphere1);

    const cloudGeo2 = new THREE.SphereGeometry(60, 32, 32);
    const cloudMat2 = new THREE.MeshBasicMaterial({
      color: 0x001155,
      transparent: true,
      opacity: 0.10,
      side: THREE.BackSide,
      depthWrite: false,
    });
    this.nebulaSphere2 = new THREE.Mesh(cloudGeo2, cloudMat2);
    this.scene.add(this.nebulaSphere2);

    this.camera.position.set(0, 0, 0);
    this.camera.lookAt(0, 0, -1);
  }

  update(delta: number, audio: AudioData): void {
    this.time += delta;

    // Slow camera orbit
    const orbitRadius = 5;
    this.camera.position.x = Math.sin(this.time * 0.08) * orbitRadius;
    this.camera.position.y = Math.cos(this.time * 0.06) * orbitRadius * 0.5;
    this.camera.position.z = Math.cos(this.time * 0.05) * orbitRadius;
    this.camera.lookAt(0, 0, 0);

    if (audio.beat) this.beatFlash = 1.0;
    this.beatFlash *= 0.88;

    // Bass breathing — scale particles
    const breathScale = 1.0 + audio.bass * 1.5 + this.beatFlash * 0.2;
    this.particles.scale.setScalar(breathScale);

    // Slow Y rotation — speeds up with volume
    this.particles.rotation.y += delta * (0.03 + audio.volume * 0.08);

    // Treble + beat modulates particle size
    this.particleMaterial.size = 0.18 + audio.treble * 0.18 + this.beatFlash * 0.12;

    // Nebula spheres pulse with bass
    const pulseScale = 1.0 + audio.volume * 0.12 + audio.bass * 0.08;
    this.nebulaSphere1.scale.setScalar(pulseScale);
    this.nebulaSphere2.scale.setScalar(pulseScale * 0.97);
    (this.nebulaSphere1.material as THREE.MeshBasicMaterial).opacity = 0.15 + audio.bass * 0.12;
    (this.nebulaSphere2.material as THREE.MeshBasicMaterial).opacity = 0.08 + audio.volume * 0.1;
  }

  dispose(): void {
    this.particles.geometry.dispose();
    this.particleMaterial.dispose();
    (this.nebulaSphere1.material as THREE.Material).dispose();
    this.nebulaSphere1.geometry.dispose();
    (this.nebulaSphere2.material as THREE.Material).dispose();
    this.nebulaSphere2.geometry.dispose();
  }
}
