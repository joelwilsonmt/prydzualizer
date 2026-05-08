import * as THREE from 'three';
import type { AudioData } from '../audio/AudioEngine';

export abstract class BaseScene {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  protected clock: THREE.Clock;

  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.clock = new THREE.Clock();
  }

  abstract init(): void;
  abstract update(delta: number, audio: AudioData): void;
  abstract dispose(): void;

  onResize(width: number, height: number): void {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }
}
