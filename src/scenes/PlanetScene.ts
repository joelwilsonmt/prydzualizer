import * as THREE from 'three';
import { BaseScene } from './BaseScene';
import type { AudioData } from '../audio/AudioEngine';

export class PlanetScene extends BaseScene {
  private planetWireframe!: THREE.LineSegments;
  private planetMaterial!: THREE.LineBasicMaterial;
  private rings: THREE.LineSegments[] = [];
  private ringMaterials: THREE.LineBasicMaterial[] = [];
  private equatorialRing!: THREE.Mesh;
  private equatorialMaterial!: THREE.MeshBasicMaterial;
  private stars!: THREE.Points;

  private beatFlash = 0;
  private time = 0;

  constructor() {
    super();
    this.scene.background = new THREE.Color(0x050000);
  }

  init(): void {
    // Planet wireframe
    const icoGeo = new THREE.IcosahedronGeometry(20, 4);
    const wireGeo = new THREE.WireframeGeometry(icoGeo);
    icoGeo.dispose();

    this.planetMaterial = new THREE.LineBasicMaterial({
      color: 0xff6600,
      transparent: true,
      opacity: 0.8,
    });

    this.planetWireframe = new THREE.LineSegments(wireGeo, this.planetMaterial);
    this.scene.add(this.planetWireframe);

    // Atmosphere rings
    const ringConfigs = [
      { radius: 22, angle: 0 },
      { radius: 26, angle: Math.PI / 6 },
      { radius: 30, angle: Math.PI / 3 },
    ];

    ringConfigs.forEach((cfg) => {
      const torusGeo = new THREE.TorusGeometry(cfg.radius, 0.15, 8, 80);
      const mat = new THREE.LineBasicMaterial({
        color: 0xffaa00,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
      });

      // Convert to wireframe for line rendering
      const wGeo = new THREE.WireframeGeometry(torusGeo);
      torusGeo.dispose();
      const ring = new THREE.LineSegments(wGeo, mat);
      ring.rotation.x = cfg.angle;
      this.scene.add(ring);
      this.rings.push(ring);
      this.ringMaterials.push(mat);
    });

    // Equatorial glow ring
    const ringGeo = new THREE.RingGeometry(21, 23, 80);
    this.equatorialMaterial = new THREE.MeshBasicMaterial({
      color: 0xffaa00,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    this.equatorialRing = new THREE.Mesh(ringGeo, this.equatorialMaterial);
    this.scene.add(this.equatorialRing);

    // Stars
    const STAR_COUNT = 10000;
    const starPositions = new Float32Array(STAR_COUNT * 3);
    for (let i = 0; i < STAR_COUNT; i++) {
      const r = 300 + Math.random() * 400;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = r * Math.cos(phi);
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.5,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.6,
    });
    this.stars = new THREE.Points(starGeo, starMat);
    this.scene.add(this.stars);

    this.camera.position.set(0, 10, 60);
    this.camera.lookAt(0, 0, 0);
  }

  update(delta: number, audio: AudioData): void {
    this.time += delta;

    // Planet rotation
    const rotSpeed = 0.1 + audio.volume * 5.0;
    this.planetWireframe.rotation.y += rotSpeed * delta;
    this.planetWireframe.rotation.x += audio.bass * 0.6 * delta;

    // Beat flash
    if (audio.beat) {
      this.beatFlash = 1.0;
    }
    this.beatFlash = Math.max(0, this.beatFlash - delta * 2.5);

    // Color lerp toward gold/white on beat
    const orangeColor = new THREE.Color(0xff6600);
    const flashColor = new THREE.Color(0xffffff);
    this.planetMaterial.color.lerpColors(orangeColor, flashColor, this.beatFlash * 0.9 + audio.volume * 0.2);
    this.planetMaterial.opacity = 0.6 + this.beatFlash * 0.4;
    // Scale pulse on beat
    const beatScale = 1.0 + this.beatFlash * 0.2 + audio.bass * 0.18;
    this.planetWireframe.scale.setScalar(beatScale);

    // Rings rotation
    this.rings[0].rotation.x += 0.003 * delta * 60;
    this.rings[0].rotation.y += 0.002 * delta * 60;
    this.rings[1].rotation.z += 0.004 * delta * 60;
    this.rings[1].rotation.x = Math.PI / 6 + this.time * 0.01;
    this.rings[2].rotation.y += 0.005 * delta * 60;
    this.rings[2].rotation.z = Math.PI / 3 + this.time * 0.008;

    // Bass camera zoom — rush in on heavy bass
    const bassCamZ = 38 + (1 - audio.bass) * 35 + Math.sin(this.time * 0.5) * 5;
    this.camera.position.z += (bassCamZ - this.camera.position.z) * 0.08;

    // Subtle camera orbit
    this.camera.position.x = Math.sin(this.time * 0.05) * 5;
    this.camera.position.y = 10 + Math.cos(this.time * 0.04) * 5;
    this.camera.lookAt(0, 0, 0);

    // Equatorial ring treble pulse
    this.equatorialMaterial.opacity = 0.05 + audio.treble * 0.65;

    // Ring brightness
    this.ringMaterials.forEach((mat) => {
      mat.opacity = 0.2 + audio.volume * 0.5 + audio.bass * 0.4 + this.beatFlash * 0.4;
    });
  }

  dispose(): void {
    this.planetWireframe.geometry.dispose();
    this.planetMaterial.dispose();
    this.rings.forEach((r) => {
      r.geometry.dispose();
    });
    this.ringMaterials.forEach((m) => m.dispose());
    this.equatorialRing.geometry.dispose();
    this.equatorialMaterial.dispose();
    this.stars.geometry.dispose();
    (this.stars.material as THREE.Material).dispose();
  }
}
