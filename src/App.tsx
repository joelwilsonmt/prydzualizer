import { useCallback, useEffect, useRef, useState } from 'react';
import { AudioEngine } from './audio/AudioEngine';
import { SceneManager } from './SceneManager';
import { UI } from './components/UI';

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneManagerRef = useRef<SceneManager | null>(null);
  const audioEngineRef = useRef<AudioEngine | null>(null);
  const animFrameRef = useRef<number>(0);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const toggleFSRef = useRef<() => void>(() => {});

  const [currentScene, setCurrentScene] = useState(0);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [audioMode, setAudioMode] = useState<'mic' | 'file' | null>(null);
  const [transitionAlpha, setTransitionAlpha] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [audioError, setAudioError] = useState<string | null>(null);

  // Toggle browser fullscreen
  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (e) {
      console.error('Fullscreen error:', e);
    }
  }, []);

  // Keep a stable ref so keydown handler (in the engine useEffect) can call it
  useEffect(() => { toggleFSRef.current = toggleFullscreen; }, [toggleFullscreen]);

  // Track actual fullscreen state and auto-hide controls
  useEffect(() => {
    const scheduleHide = () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      hideTimerRef.current = setTimeout(() => setControlsVisible(false), 2500);
    };

    const onFSChange = () => {
      const inFS = !!document.fullscreenElement;
      setIsFullscreen(inFS);
      if (inFS) {
        setControlsVisible(true);
        scheduleHide();
      } else {
        setControlsVisible(true);
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      }
    };

    document.addEventListener('fullscreenchange', onFSChange);
    return () => {
      document.removeEventListener('fullscreenchange', onFSChange);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  // Show controls on mouse move (auto-hide only active in fullscreen)
  const handleMouseMove = useCallback(() => {
    if (!document.fullscreenElement) return;
    setControlsVisible(true);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => setControlsVisible(false), 2500);
  }, []);

  // 3D engine setup
  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = new AudioEngine();
    audioEngineRef.current = engine;

    const manager = new SceneManager(canvasRef.current, (index) => {
      setCurrentScene(index);
    });
    sceneManagerRef.current = manager;
    manager.start();

    let lastTransitionAlpha = 0;
    const loop = () => {
      animFrameRef.current = requestAnimationFrame(loop);
      if (engine.isActive) manager.setAudioData(engine.getAudioData());
      const alpha = manager.transitionAlpha;
      if (Math.abs(alpha - lastTransitionAlpha) > 0.01) {
        lastTransitionAlpha = alpha;
        setTransitionAlpha(alpha);
      }
    };
    animFrameRef.current = requestAnimationFrame(loop);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') manager.nextScene();
      if (e.key === 'ArrowLeft') manager.prevScene();
      if (e.key === 'f' || e.key === 'F') toggleFSRef.current();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      manager.dispose();
      engine.stop();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleMicToggle = async () => {
    const engine = audioEngineRef.current;
    if (!engine) return;
    if (engine.isActive && engine.mode === 'mic') {
      engine.stop();
      setIsAudioActive(false);
      setAudioMode(null);
    } else {
      try {
        setAudioError(null);
        await engine.startMic();
        setIsAudioActive(true);
        setAudioMode('mic');
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Mic access denied';
        setAudioError(msg);
        console.error('Mic access failed:', err);
      }
    }
  };

  const handleFileSelect = async (file: File) => {
    const engine = audioEngineRef.current;
    if (!engine) return;
    try {
      await engine.startFile(file);
      setIsAudioActive(true);
      setAudioMode('file');
    } catch (err) {
      console.error('File audio failed:', err);
    }
  };

  // Controls should show when: not fullscreen, OR fullscreen+mouse recently moved
  const showControls = !isFullscreen || controlsVisible;

  return (
    <div
      className="w-screen h-screen bg-black relative overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{ cursor: isFullscreen && !controlsVisible ? 'none' : 'default' }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: 'block' }}
      />
      <UI
        currentScene={currentScene}
        sceneNames={SceneManager.SCENE_NAMES}
        isAudioActive={isAudioActive}
        audioMode={audioMode}
        transitionAlpha={transitionAlpha}
        showControls={showControls}
        isFullscreen={isFullscreen}
        audioError={audioError}
        onMicToggle={handleMicToggle}
        onFileSelect={handleFileSelect}
        onPrev={() => sceneManagerRef.current?.prevScene()}
        onNext={() => sceneManagerRef.current?.nextScene()}
        onToggleFullscreen={toggleFullscreen}
      />
    </div>
  );
}
