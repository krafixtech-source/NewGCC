'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';

interface VideoPlayerProps {
  src?: string;
  alternateSrc?: string;
  posterImage: string;
  aspectRatio?: '16/9' | '4/5' | '3/4' | '21/9' | 'auto';
  className?: string;
  caption?: string;
  autoPlayInView?: boolean;
  loop?: boolean;
  showControls?: boolean;
  editorialLabel?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  alternateSrc,
  posterImage,
  aspectRatio = '16/9',
  className = '',
  caption,
  autoPlayInView = true,
  loop = true,
  showControls = true,
  editorialLabel,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasVideoError, setHasVideoError] = useState(false);

  // Autoplay when scrolled into view
  useEffect(() => {
    if (!autoPlayInView || !videoRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().then(() => setIsPlaying(true)).catch(() => {
            // Browser autoplay restrictions
            setIsPlaying(false);
          });
        } else {
          videoRef.current?.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [autoPlayInView, src]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(console.error);
    } else {
      containerRef.current.requestFullscreen().catch(console.error);
    }
  };

  const aspectClass = 
    aspectRatio === '16/9' ? 'aspect-video' :
    aspectRatio === '4/5' ? 'aspect-[4/5]' :
    aspectRatio === '3/4' ? 'aspect-[3/4]' :
    aspectRatio === '21/9' ? 'aspect-[21/9]' : '';

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden bg-canvas-paper border border-border rounded-2xl group ${aspectClass} ${className}`}
    >
      {/* Video Element (if src provided and no load error) */}
      {src && !hasVideoError ? (
        <video
          ref={videoRef}
          poster={posterImage}
          loop={loop}
          muted={isMuted}
          playsInline
          autoPlay={autoPlayInView}
          onError={() => setHasVideoError(true)}
          className="w-full h-full object-cover"
        >
          <source src={src} type="video/mp4" />
          {alternateSrc && <source src={alternateSrc} type="video/mp4" />}
        </video>
      ) : (
        /* Archival Documentary Photo Fallback / Poster */
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          style={{ backgroundImage: `url('${posterImage}')` }}
        />
      )}

      {/* Subtle 10-15% Warm Tint Overlay (No heavy black gradient) */}
      <div className="absolute inset-0 bg-[#F7F4ED]/10 pointer-events-none" />

      {/* Editorial Label in corner */}
      {editorialLabel && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-canvas-white/90 backdrop-blur-sm border border-border text-[11px] font-mono tracking-widest text-ink uppercase rounded-full shadow-sm">
            {editorialLabel}
          </span>
        </div>
      )}

      {/* Minimal Video Controls */}
      {showControls && (
        <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 opacity-90 transition-opacity">
          {src && !hasVideoError && (
            <>
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
                className="p-2 bg-canvas-white/90 hover:bg-canvas-white text-ink border border-border text-xs rounded-full transition-colors shadow-sm"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={toggleMute}
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                className="p-2 bg-canvas-white/90 hover:bg-canvas-white text-ink border border-border text-xs rounded-full transition-colors shadow-sm"
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
            </>
          )}
          <button
            onClick={toggleFullscreen}
            aria-label="Fullscreen"
            className="p-2 bg-canvas-white/90 hover:bg-canvas-white text-ink border border-border text-xs rounded-full transition-colors shadow-sm"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Caption bar if provided */}
      {caption && (
        <div className="absolute bottom-4 left-4 z-10 max-w-md hidden sm:block">
          <p className="text-xs text-ink bg-canvas-white/90 backdrop-blur-sm border border-border px-3.5 py-2 leading-relaxed font-sans rounded-xl shadow-sm">
            {caption}
          </p>
        </div>
      )}
    </div>
  );
};
