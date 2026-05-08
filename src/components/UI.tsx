import React, { useRef } from 'react';

interface UIProps {
  currentScene: number;
  sceneNames: string[];
  isAudioActive: boolean;
  audioMode: 'mic' | 'file' | null;
  transitionAlpha: number;
  showControls: boolean;
  isFullscreen: boolean;
  audioError: string | null;
  onMicToggle: () => void;
  onFileSelect: (file: File) => void;
  onPrev: () => void;
  onNext: () => void;
  onToggleFullscreen: () => void;
}

export function UI({
  currentScene,
  sceneNames,
  isAudioActive,
  audioMode,
  transitionAlpha,
  showControls,
  isFullscreen,
  audioError,
  onMicToggle,
  onFileSelect,
  onPrev,
  onNext,
  onToggleFullscreen,
}: UIProps): React.ReactElement {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('audio/')) onFileSelect(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) { onFileSelect(file); e.target.value = ''; }
  };

  return (
    <div
      className="absolute inset-0 select-none"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      style={{ pointerEvents: 'none' }}
    >
      {/* Transition overlay — always present */}
      <div
        className="absolute inset-0 bg-black pointer-events-none"
        style={{ opacity: transitionAlpha }}
      />

      {/* All HUD — fades out when controls hidden */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{ opacity: showControls ? 1 : 0, pointerEvents: showControls ? 'auto' : 'none' }}
      >
        {/* Top-left branding */}
        <div className="absolute top-4 left-5 pointer-events-none">
          <span className="font-mono text-xs tracking-[0.4em] uppercase" style={{ color: 'rgba(255,255,255,0.2)' }}>
            Prydzualizer
          </span>
        </div>

        {/* Top-right controls */}
        <div className="absolute top-4 right-5 flex items-center gap-3" style={{ pointerEvents: 'auto' }}>
          {/* Mic */}
          <button
            onClick={onMicToggle}
            title={isAudioActive && audioMode === 'mic' ? 'Stop mic' : 'Start mic'}
            className="flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-200"
            style={{
              borderColor: isAudioActive && audioMode === 'mic' ? 'rgba(0,255,100,0.7)' : 'rgba(255,255,255,0.2)',
              color: isAudioActive && audioMode === 'mic' ? 'rgba(0,255,100,0.9)' : 'rgba(255,255,255,0.4)',
              boxShadow: isAudioActive && audioMode === 'mic' ? '0 0 10px rgba(0,255,100,0.4)' : 'none',
              background: 'transparent',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1a4 4 0 0 1 4 4v7a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v7a2 2 0 0 0 4 0V5a2 2 0 0 0-2-2zm-7 9a7 7 0 0 0 14 0h2a9 9 0 0 1-8 8.94V23h-2v-2.06A9 9 0 0 1 3 12H5z" />
            </svg>
          </button>

          {/* File */}
          <button
            onClick={() => fileInputRef.current?.click()}
            title="Load audio file"
            className="flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-200"
            style={{
              borderColor: isAudioActive && audioMode === 'file' ? 'rgba(0,180,255,0.7)' : 'rgba(255,255,255,0.2)',
              color: isAudioActive && audioMode === 'file' ? 'rgba(0,180,255,0.9)' : 'rgba(255,255,255,0.4)',
              boxShadow: isAudioActive && audioMode === 'file' ? '0 0 10px rgba(0,180,255,0.4)' : 'none',
              background: 'transparent',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
            </svg>
          </button>

          {isAudioActive && (
            <span
              className="font-mono text-xs tracking-widest animate-pulse"
              style={{ color: audioMode === 'mic' ? 'rgba(0,255,100,0.8)' : 'rgba(0,180,255,0.8)' }}
            >
              {audioMode === 'mic' ? 'MIC' : 'FILE'}
            </span>
          )}

          {/* Fullscreen toggle — icon swaps based on state */}
          <button
            onClick={onToggleFullscreen}
            title={isFullscreen ? 'Exit fullscreen (F)' : 'Fullscreen (F)'}
            className="flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-200"
            style={{
              borderColor: isFullscreen ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.2)',
              color: isFullscreen ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.4)',
              background: 'transparent',
            }}
          >
            {isFullscreen ? (
              // Exit fullscreen icon
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
              </svg>
            ) : (
              // Enter fullscreen icon
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
              </svg>
            )}
          </button>
        </div>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="audio/*"
          onChange={handleFileChange}
          className="hidden"
        />

        {/* Left arrow */}
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:scale-110"
          style={{ color: 'rgba(255,255,255,0.2)', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', pointerEvents: 'auto' }}
          onMouseEnter={(e) => { const b = e.currentTarget; b.style.color = 'rgba(255,255,255,0.6)'; b.style.borderColor = 'rgba(255,255,255,0.3)'; }}
          onMouseLeave={(e) => { const b = e.currentTarget; b.style.color = 'rgba(255,255,255,0.2)'; b.style.borderColor = 'rgba(255,255,255,0.1)'; }}
          title="Previous scene"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>

        {/* Right arrow */}
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:scale-110"
          style={{ color: 'rgba(255,255,255,0.2)', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', pointerEvents: 'auto' }}
          onMouseEnter={(e) => { const b = e.currentTarget; b.style.color = 'rgba(255,255,255,0.6)'; b.style.borderColor = 'rgba(255,255,255,0.3)'; }}
          onMouseLeave={(e) => { const b = e.currentTarget; b.style.color = 'rgba(255,255,255,0.2)'; b.style.borderColor = 'rgba(255,255,255,0.1)'; }}
          title="Next scene"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>

        {/* Bottom centre: scene name + dots */}
        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-3 pointer-events-none">
          <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'rgba(255,255,255,0.6)' }}>
            {sceneNames[currentScene]}
          </span>
          <div className="flex items-center gap-2">
            {sceneNames.map((_, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === currentScene ? '20px' : '6px',
                  height: '6px',
                  background: i === currentScene ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.25)',
                }}
              />
            ))}
          </div>
        </div>

        {audioError && (
          <div className="absolute bottom-20 left-0 right-0 flex justify-center pointer-events-none">
            <span className="font-mono text-xs tracking-widest" style={{ color: 'rgba(255,80,80,0.85)' }}>
              {audioError}
            </span>
          </div>
        )}

        {!isAudioActive && !audioError && (
          <div className="absolute bottom-20 left-0 right-0 flex justify-center pointer-events-none">
            <span className="font-mono text-xs tracking-widest" style={{ color: 'rgba(255,255,255,0.15)' }}>
              drop audio file or tap mic
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
