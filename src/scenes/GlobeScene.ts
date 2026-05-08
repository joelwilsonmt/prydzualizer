import * as THREE from 'three';
import { BaseScene } from './BaseScene';
import type { AudioData } from '../audio/AudioEngine';

const BASE_R = 22;

export class GlobeScene extends BaseScene {
  private shell!: THREE.LineSegments;
  private origPositions!: Float32Array;
  private positions!: Float32Array;
  private shellMat!: THREE.LineBasicMaterial;
  private rings: THREE.Line[] = [];
  private ringMats: THREE.LineBasicMaterial[] = [];
  private time = 0;
  private beatPulse = 0;
  private smoothBass = 0;
  private smoothMid = 0;
  private smoothVol = 0;

  init(): void {
    this.scene.background = new THREE.Color(0x020100);
    this.camera.position.set(0, 0, 70);
    this.camera.lookAt(0, 0, 0);

    // Dense icosahedron as wireframe
    const icoGeo = new THREE.IcosahedronGeometry(BASE_R, 5);
    const wireGeo = new THREE.WireframeGeometry(icoGeo);
    this.origPositions = (wireGeo.attributes.position as THREE.BufferAttribute).array.slice() as Float32Array;
    this.positions = new Float32Array(this.origPositions.length);

    this.shellMat = new THREE.LineBasicMaterial({
      color: 0xffcc00,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.shell = new THREE.LineSegments(wireGeo, this.shellMat);
    this.scene.add(this.shell);
    icoGeo.dispose();

    // Latitude rings
    const ringColors = [0xffdd00, 0xff9900, 0xff6600, 0xffaa44, 0xffee88];
    for (let lat = -60; lat <= 60; lat += 20) {
      const latR = Math.cos((lat * Math.PI) / 180) * BASE_R;
      const y = Math.sin((lat * Math.PI) / 180) * BASE_R;
      const pts: THREE.Vector3[] = [];
      for (let a = 0; a <= 64; a++) {
        const angle = (a / 64) * Math.PI * 2;
        pts.push(new THREE.Vector3(Math.cos(angle) * latR, y, Math.sin(angle) * latR));
      }
      const mat = new THREE.LineBasicMaterial({ color: ringColors[Math.floor(Math.random() * ringColors.length)], blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.5 });
      const ring = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), mat);
      this.rings.push(ring);
      this.ringMats.push(mat);
      this.scene.add(ring);
    }
  }

  update(delta: number, audio: AudioData): void {
    this.time += delta;

    if (audio.beat) this.beatPulse = 1.0;
    this.beatPulse *= 0.93;

    const LERP = 0.02;
    this.smoothBass += (audio.bass - this.smoothBass) * LERP;
    this.smoothMid  += (audio.mid  - this.smoothMid)  * LERP;
    this.smoothVol  += (audio.volume - this.smoothVol) * LERP;

    const distortAmp = 1.5 + this.smoothBass * 7 + this.beatPulse * 5;
    const noiseSpeed = 0.4 + this.smoothMid * 0.18;

    const orig = this.origPositions;
    const pos = this.positions;
    const count = orig.length / 3;

    for (let i = 0; i < count; i++) {
      const ox = orig[i * 3];
      const oy = orig[i * 3 + 1];
      const oz = orig[i * 3 + 2];

      const nx = Math.sin(ox * 0.09 + this.time * noiseSpeed) * Math.cos(oy * 0.07 + this.time * noiseSpeed * 0.8);
      const ny = Math.sin(oy * 0.09 + this.time * noiseSpeed * 1.1) * Math.cos(oz * 0.07 + this.time * noiseSpeed * 0.6);
      const nz = Math.sin(oz * 0.09 + this.time * noiseSpeed * 0.9) * Math.cos(ox * 0.07 + this.time * noiseSpeed * 1.2);

      pos[i * 3]     = ox + nx * distortAmp;
      pos[i * 3 + 1] = oy + ny * distortAmp;
      pos[i * 3 + 2] = oz + nz * distortAmp;
    }

    (this.shell.geometry.attributes.position as THREE.BufferAttribute).array.set(pos);
    (this.shell.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    this.shell.geometry.computeBoundingSphere();

    const w = this.smoothVol * 0.2 + this.beatPulse * 0.4;
    this.shellMat.color.setRGB(0.55 + w * 0.35, 0.35 + w * 0.25, w * 0.2);

    // Ring opacity pulse
    this.ringMats.forEach((m, i) => {
      m.opacity = 0.12 + audio.mid * 0.18 + Math.sin(this.time * 0.8 + i * 0.8) * 0.06;
    });

    this.shell.rotation.y += delta * (0.12 + this.smoothVol * 0.35);
    this.shell.rotation.x += delta * (0.03 + this.smoothBass * 0.12);

    this.camera.position.x = Math.sin(this.time * 0.09) * 20;
    this.camera.position.y = Math.sin(this.time * 0.07) * 12;
    this.camera.position.z = 70;
    this.camera.lookAt(0, 0, 0);
  }

  dispose(): void {
    this.shell.geometry.dispose();
    this.shellMat.dispose();
    this.rings.forEach((r) => { r.geometry.dispose(); (r.material as THREE.Material).dispose(); });
  }
}
