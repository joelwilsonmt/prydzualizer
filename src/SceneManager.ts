import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import type { AudioData } from './audio/AudioEngine';
import { BaseScene } from './scenes/BaseScene';
import { NebulaScene } from './scenes/NebulaScene';
import { TunnelScene } from './scenes/TunnelScene';
import { NeuralScene } from './scenes/NeuralScene';
import { PlanetScene } from './scenes/PlanetScene';
import { DigitalScene } from './scenes/DigitalScene';
import { WarpScene } from './scenes/WarpScene';
import { DNAScene } from './scenes/DNAScene';
import { CityScene } from './scenes/CityScene';
import { VortexScene } from './scenes/VortexScene';
import { GridWaveScene } from './scenes/GridWaveScene';
import { SpectrumScene } from './scenes/SpectrumScene';
import { GlobeScene } from './scenes/GlobeScene';
import { FlowScene } from './scenes/FlowScene';
import { CymaticsScene } from './scenes/CymaticsScene';
import { LissajousScene } from './scenes/LissajousScene';
import { ShockwaveScene } from './scenes/ShockwaveScene';
import { AuroraScene } from './scenes/AuroraScene';
import { TesseractScene } from './scenes/TesseractScene';
import { PulseScene } from './scenes/PulseScene';
import { CircuitScene } from './scenes/CircuitScene';
import { ClockScene } from './scenes/ClockScene';
import { TerminalScene } from './scenes/TerminalScene';
import { AlarmScene } from './scenes/AlarmScene';
import { OceanScene } from './scenes/OceanScene';
import { PlasmaScene } from './scenes/PlasmaScene';
import { CrystalScene } from './scenes/CrystalScene';

export class SceneManager {
  static readonly SCENE_NAMES = [
    'Nebula', 'Tunnel', 'Terminal', 'Neural Net', 'Planet',
    'Digital', 'Warp', 'DNA', 'City', 'Vortex',
    'Grid Wave', 'Spectrum', 'Globe', 'Flow', 'Cymatics',
    'Lissajous', 'Shockwave', 'Aurora', 'Tesseract', 'Pulse',
    'Circuit', 'Clock', 'Alarm',
    'Ocean', 'Plasma', 'Crystal',
  ];

  private renderer: THREE.WebGLRenderer;
  private composer: EffectComposer;
  private renderPass: RenderPass;
  private scenes: BaseScene[];
  private currentIndex = 0;
  private transitioning = false;
  private transitionProgress = 0;
  private transitionSwitchDone = false;
  private autoTimer = 0;
  private readonly AUTO_CYCLE_DURATION = 45;
  private rafId = 0;
  private masterClock = new THREE.Clock();
  private audioData: AudioData | null = null;
  private onSceneChange: (index: number, name: string) => void;
  private _transitionAlpha = 0;

  get transitionAlpha(): number {
    return this._transitionAlpha;
  }

  constructor(
    canvas: HTMLCanvasElement,
    onSceneChange: (index: number, name: string) => void
  ) {
    this.onSceneChange = onSceneChange;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    // Create scenes
    this.scenes = [
      new NebulaScene(),
      new TunnelScene(),
      new TerminalScene(),
      new NeuralScene(),
      new PlanetScene(),
      new DigitalScene(),
      new WarpScene(),
      new DNAScene(),
      new CityScene(),
      new VortexScene(),
      new GridWaveScene(),
      new SpectrumScene(),
      new GlobeScene(),
      new FlowScene(),
      new CymaticsScene(),
      new LissajousScene(),
      new ShockwaveScene(),
      new AuroraScene(),
      new TesseractScene(),
      new PulseScene(),
      new CircuitScene(),
      new ClockScene(),
      new AlarmScene(),
      new OceanScene(),
      new PlasmaScene(),
      new CrystalScene(),
    ];

    // Init all scenes
    this.scenes.forEach((s) => s.init());

    // Setup composer
    this.composer = new EffectComposer(this.renderer);

    const first = this.scenes[0];
    this.renderPass = new RenderPass(first.scene, first.camera);
    this.composer.addPass(this.renderPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.1
    );
    this.composer.addPass(bloomPass);

    const outputPass = new OutputPass();
    this.composer.addPass(outputPass);

    // Resize handler
    window.addEventListener('resize', this.onResize);
  }

  private onResize = (): void => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.renderer.setSize(w, h);
    this.composer.setSize(w, h);
    this.scenes.forEach((s) => s.onResize(w, h));
  };

  setAudioData(data: AudioData): void {
    this.audioData = data;
  }

  nextScene(): void {
    if (this.transitioning) return;
    const next = (this.currentIndex + 1) % this.scenes.length;
    this.beginTransition(next, true);
  }

  prevScene(): void {
    if (this.transitioning) return;
    const prev = (this.currentIndex - 1 + this.scenes.length) % this.scenes.length;
    this.beginTransition(prev, true);
  }

  private beginTransition(targetIndex: number, manual = false): void {
    this.transitioning = true;
    this.transitionProgress = 0;
    this.transitionSwitchDone = false;
    this._transitionAlpha = 0;
    this._pendingIndex = targetIndex;
    if (manual) this.autoTimer = this.AUTO_CYCLE_DURATION;
  }

  private _pendingIndex = 0;

  start(): void {
    this.masterClock.start();
    this.autoTimer = this.AUTO_CYCLE_DURATION;
    this.loop();
  }

  stop(): void {
    cancelAnimationFrame(this.rafId);
    window.removeEventListener('resize', this.onResize);
  }

  private loop = (): void => {
    this.rafId = requestAnimationFrame(this.loop);

    const delta = Math.min(this.masterClock.getDelta(), 0.05);

    // Auto cycle
    this.autoTimer -= delta;
    if (this.autoTimer <= 0) {
      this.autoTimer = this.AUTO_CYCLE_DURATION;
      const next = (this.currentIndex + 1) % this.scenes.length;
      this.beginTransition(next);
    }

    // Handle transition
    if (this.transitioning) {
      const TRANSITION_DURATION = 0.8;
      this.transitionProgress += delta / TRANSITION_DURATION;

      // Switch scene exactly once when we cross the midpoint
      if (this.transitionProgress >= 0.5 && !this.transitionSwitchDone) {
        this.transitionSwitchDone = true;
        this.currentIndex = this._pendingIndex;
        this.onSceneChange(this.currentIndex, SceneManager.SCENE_NAMES[this.currentIndex]);
        this.renderPass.scene = this.scenes[this.currentIndex].scene;
        this.renderPass.camera = this.scenes[this.currentIndex].camera;
      }

      // Alpha: fade to black (0→0.5), fade back in (0.5→1.0)
      this._transitionAlpha = this.transitionProgress < 0.5
        ? this.transitionProgress * 2
        : Math.max(0, 2 - this.transitionProgress * 2);

      if (this.transitionProgress >= 1.0) {
        this.transitioning = false;
        this.transitionProgress = 0;
        this._transitionAlpha = 0;
      }
    }

    // Build a silent audio data if none provided
    const audio: AudioData = this.audioData ?? {
      raw: new Uint8Array(256),
      bass: 0,
      mid: 0,
      treble: 0,
      volume: 0,
      beat: false,
    };

    // Update current scene
    this.scenes[this.currentIndex].update(delta, audio);

    // Render
    this.renderPass.scene = this.scenes[this.currentIndex].scene;
    this.renderPass.camera = this.scenes[this.currentIndex].camera;
    this.composer.render();
  };

  dispose(): void {
    this.stop();
    this.scenes.forEach((s) => s.dispose());
    this.renderer.dispose();
  }
}
