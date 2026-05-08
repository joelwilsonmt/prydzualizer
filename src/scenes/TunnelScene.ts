import * as THREE from 'three';
import { BaseScene } from './BaseScene';
import type { AudioData } from '../audio/AudioEngine';

export class TunnelScene extends BaseScene {
  private tunnelLines!: THREE.LineSegments;
  private tunnelMaterial!: THREE.LineBasicMaterial;
  private longitudinalLines!: THREE.LineSegments;
  private longitudinalMaterial!: THREE.LineBasicMaterial;
  private horizonGlow!: THREE.Mesh;
  private horizonMaterial!: THREE.MeshBasicMaterial;

  private readonly RING_COUNT = 80;
  private readonly SEGMENTS = 24;
  private readonly RADIUS = 8;
  private readonly Z_START = 10;
  private readonly Z_END = -400;
  private readonly Z_SPACING = (400 + 10) / 80;

  private ringScales: Float32Array = new Float32Array(80);
  private beatFlash = 0;
  private time = 0;

  constructor() {
    super();
    this.scene.background = new THREE.Color(0x020005);
  }

  init(): void {
    // Build rings as LineSegments
    // Each ring: SEGMENTS vertices -> SEGMENTS line segments (each segment = 2 vertices)
    const ringVertexCount = this.RING_COUNT * this.SEGMENTS * 2;
    const ringPositions = new Float32Array(ringVertexCount * 3);
    let idx = 0;

    for (let r = 0; r < this.RING_COUNT; r++) {
      const z = this.Z_START - r * this.Z_SPACING;
      for (let s = 0; s < this.SEGMENTS; s++) {
        const angle1 = (s / this.SEGMENTS) * Math.PI * 2;
        const angle2 = ((s + 1) / this.SEGMENTS) * Math.PI * 2;
        ringPositions[idx++] = Math.cos(angle1) * this.RADIUS;
        ringPositions[idx++] = Math.sin(angle1) * this.RADIUS;
        ringPositions[idx++] = z;
        ringPositions[idx++] = Math.cos(angle2) * this.RADIUS;
        ringPositions[idx++] = Math.sin(angle2) * this.RADIUS;
        ringPositions[idx++] = z;
      }
    }

    const ringGeo = new THREE.BufferGeometry();
    ringGeo.setAttribute('position', new THREE.BufferAttribute(ringPositions, 3));

    this.tunnelMaterial = new THREE.LineBasicMaterial({
      color: 0xff00cc,
      transparent: true,
      opacity: 0.8,
    });

    this.tunnelLines = new THREE.LineSegments(ringGeo, this.tunnelMaterial);
    this.scene.add(this.tunnelLines);

    // Longitudinal lines: 6 lines connecting every ring
    const LONG_COUNT = 6;
    const longVertexCount = LONG_COUNT * (this.RING_COUNT - 1) * 2;
    const longPositions = new Float32Array(longVertexCount * 3);
    let lidx = 0;

    for (let l = 0; l < LONG_COUNT; l++) {
      const angle = (l / LONG_COUNT) * Math.PI * 2;
      const x = Math.cos(angle) * this.RADIUS;
      const y = Math.sin(angle) * this.RADIUS;

      for (let r = 0; r < this.RING_COUNT - 1; r++) {
        const z1 = this.Z_START - r * this.Z_SPACING;
        const z2 = this.Z_START - (r + 1) * this.Z_SPACING;
        longPositions[lidx++] = x;
        longPositions[lidx++] = y;
        longPositions[lidx++] = z1;
        longPositions[lidx++] = x;
        longPositions[lidx++] = y;
        longPositions[lidx++] = z2;
      }
    }

    const longGeo = new THREE.BufferGeometry();
    longGeo.setAttribute('position', new THREE.BufferAttribute(longPositions, 3));

    this.longitudinalMaterial = new THREE.LineBasicMaterial({
      color: 0xff00cc,
      transparent: true,
      opacity: 0.4,
    });

    this.longitudinalLines = new THREE.LineSegments(longGeo, this.longitudinalMaterial);
    this.scene.add(this.longitudinalLines);

    // Horizon glow plane
    const horizonGeo = new THREE.PlaneGeometry(40, 40);
    this.horizonMaterial = new THREE.MeshBasicMaterial({
      color: 0xff00cc,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    this.horizonGlow = new THREE.Mesh(horizonGeo, this.horizonMaterial);
    this.horizonGlow.position.z = this.Z_END + 20;
    this.scene.add(this.horizonGlow);

    this.camera.position.set(0, 0, this.Z_START);
    this.camera.lookAt(0, 0, this.Z_START - 100);

    // Initialize ring scales
    for (let i = 0; i < this.RING_COUNT; i++) {
      this.ringScales[i] = 1.0;
    }
  }

  update(delta: number, audio: AudioData): void {
    this.time += delta;

    // Move camera forward
    const speed = 10 + audio.bass * 60;
    this.camera.position.z -= speed * delta;

    // Reset when too far
    if (this.camera.position.z < this.Z_END + 50) {
      this.camera.position.z = this.Z_START;
    }

    // Camera drift — more dramatic at high bass
    this.camera.position.x = Math.sin(this.time * 0.4) * (2.5 + audio.bass * 3);
    this.camera.position.y = Math.cos(this.time * 0.3) * (1.5 + audio.bass * 2);

    // Look ahead into tunnel
    this.camera.lookAt(
      this.camera.position.x * 0.1,
      this.camera.position.y * 0.1,
      this.camera.position.z - 50
    );

    // Beat flash
    if (audio.beat) {
      this.beatFlash = 1.0;
    }
    this.beatFlash = Math.max(0, this.beatFlash - delta * 3);

    // Color lerp based on volume and beat flash
    const flashAmt = this.beatFlash;
    const volAmt = audio.volume;
    const baseColor = new THREE.Color(0xff00cc);
    const brightColor = new THREE.Color(0xffffff);
    const currentColor = baseColor.clone().lerp(brightColor, flashAmt * 0.9 + volAmt * 0.4);

    this.tunnelMaterial.color.set(currentColor);
    this.longitudinalMaterial.color.set(currentColor);
    this.tunnelMaterial.opacity = 0.5 + flashAmt * 0.5;
    this.longitudinalMaterial.opacity = 0.25 + flashAmt * 0.45 + volAmt * 0.2;

    // Update ring positions with bass-driven scale pulse
    // We rebuild by scaling the ring positions in the geometry
    const geo = this.tunnelLines.geometry;
    const positions = geo.attributes.position.array as Float32Array;
    let idx = 0;

    for (let r = 0; r < this.RING_COUNT; r++) {
      const z = this.Z_START - r * this.Z_SPACING;
      const distFromCamera = Math.abs(z - this.camera.position.z);
      const waveFactor = Math.sin(this.time * 3 + r * 0.3) * 0.15;
      const scale = 1.0 + audio.bass * 0.65 + waveFactor + (audio.beat ? 0.2 : 0);

      for (let s = 0; s < this.SEGMENTS; s++) {
        const angle1 = (s / this.SEGMENTS) * Math.PI * 2;
        const angle2 = ((s + 1) / this.SEGMENTS) * Math.PI * 2;
        positions[idx++] = Math.cos(angle1) * this.RADIUS * scale;
        positions[idx++] = Math.sin(angle1) * this.RADIUS * scale;
        positions[idx++] = z;
        positions[idx++] = Math.cos(angle2) * this.RADIUS * scale;
        positions[idx++] = Math.sin(angle2) * this.RADIUS * scale;
        positions[idx++] = z;
      }
      void distFromCamera;
    }
    geo.attributes.position.needsUpdate = true;

    // Horizon glow
    this.horizonMaterial.opacity = 0.06 + audio.bass * 0.45 + flashAmt * 0.35;
  }

  dispose(): void {
    this.tunnelLines.geometry.dispose();
    this.tunnelMaterial.dispose();
    this.longitudinalLines.geometry.dispose();
    this.longitudinalMaterial.dispose();
    this.horizonGlow.geometry.dispose();
    this.horizonMaterial.dispose();
  }
}
