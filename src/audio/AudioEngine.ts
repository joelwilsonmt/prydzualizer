export interface AudioData {
  raw: Uint8Array;
  bass: number;   // 0-1
  mid: number;    // 0-1
  treble: number; // 0-1
  volume: number; // 0-1
  beat: boolean;
}

export class AudioEngine {
  private context: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private source: MediaStreamAudioSourceNode | AudioBufferSourceNode | null = null;
  private stream: MediaStream | null = null;
  private _isActive = false;
  private _mode: 'mic' | 'file' | null = null;

  private dataArray: Uint8Array<ArrayBuffer> = new Uint8Array(256);
  private runningAvgBass = 0;
  private beatCooldown = 0;
  private lastBeatTime = 0;

  get isActive(): boolean {
    return this._isActive;
  }

  get mode(): 'mic' | 'file' | null {
    return this._mode;
  }

  private createContext(): AudioContext {
    if (!this.context) {
      this.context = new AudioContext();
    }
    return this.context;
  }

  private setupAnalyser(ctx: AudioContext): AnalyserNode {
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 512;
    analyser.smoothingTimeConstant = 0.45; // snappier response
    this.analyser = analyser;
    this.dataArray = new Uint8Array(analyser.frequencyBinCount) as Uint8Array<ArrayBuffer>;
    return analyser;
  }

  async startMic(): Promise<void> {
    this.stop();
    const ctx = this.createContext();
    if (ctx.state === 'suspended') {
      await ctx.resume();
    }
    const analyser = this.setupAnalyser(ctx);
    this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    this.source = ctx.createMediaStreamSource(this.stream);
    this.source.connect(analyser);
    this._isActive = true;
    this._mode = 'mic';
  }

  async startFile(file: File): Promise<void> {
    this.stop();
    const ctx = this.createContext();
    if (ctx.state === 'suspended') {
      await ctx.resume();
    }
    const analyser = this.setupAnalyser(ctx);
    const arrayBuffer = await file.arrayBuffer();
    const audioBuffer = await ctx.decodeAudioData(arrayBuffer);
    const source = ctx.createBufferSource();
    source.buffer = audioBuffer;
    source.loop = true;
    source.connect(analyser);
    analyser.connect(ctx.destination);
    source.start();
    this.source = source;
    this._isActive = true;
    this._mode = 'file';
  }

  stop(): void {
    if (this.source) {
      try {
        this.source.disconnect();
        if (this.source instanceof AudioBufferSourceNode) {
          this.source.stop();
        }
      } catch {
        // ignore
      }
      this.source = null;
    }
    if (this.stream) {
      this.stream.getTracks().forEach((t) => t.stop());
      this.stream = null;
    }
    if (this.analyser) {
      try {
        this.analyser.disconnect();
      } catch {
        // ignore
      }
      this.analyser = null;
    }
    this._isActive = false;
    this._mode = null;
  }

  getAudioData(): AudioData {
    const raw = this.dataArray;

    if (!this.analyser || !this._isActive) {
      return {
        raw,
        bass: 0,
        mid: 0,
        treble: 0,
        volume: 0,
        beat: false,
      };
    }

    this.analyser.getByteFrequencyData(raw);

    // Helper: average bins, apply power curve to expand dynamic range
    const band = (lo: number, hi: number): number => {
      let sum = 0;
      for (let i = lo; i <= hi; i++) sum += raw[i];
      const avg = sum / ((hi - lo + 1) * 255);
      // Power curve: makes quiet passages quieter, loud passages louder
      return Math.min(1, Math.pow(avg, 0.6) * 1.4);
    };

    const bass   = band(0, 5);
    const mid    = band(6, 60);
    const treble = band(61, 128);

    // Volume: RMS with power curve
    let rmsSum = 0;
    for (let i = 0; i < raw.length; i++) {
      const n = raw[i] / 255;
      rmsSum += n * n;
    }
    const volume = Math.min(1, Math.pow(Math.sqrt(rmsSum / raw.length), 0.65) * 1.5);

    // Beat detection — faster avg, lower threshold
    const alpha = 0.15;
    this.runningAvgBass = alpha * bass + (1 - alpha) * this.runningAvgBass;

    const now = performance.now();
    let beat = false;
    const cooldownMs = 250;
    if (
      bass > 1.2 * this.runningAvgBass &&
      bass > 0.03 &&
      now - this.lastBeatTime > cooldownMs
    ) {
      beat = true;
      this.lastBeatTime = now;
    }
    this.beatCooldown = beat ? cooldownMs : Math.max(0, this.beatCooldown - 16);

    return { raw, bass, mid, treble, volume, beat };
  }
}
