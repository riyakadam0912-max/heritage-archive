import { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { mockTrustData } from '../constants/mockData';
import type { OralHistory as OralHistoryType } from '../types/content';

export default function OralHistory() {
  const { t } = useLanguage();
  // Merge technical oral history items with localized transcripts by id
  const oralHistories: OralHistoryType[] = (mockTrustData.oralHistories || []).map((o) => {
    const localized = t.oralHistory.items.find((li) => li.id === o.id);
    return {
      ...o,
      transcriptEnglish: localized?.transcriptEnglish ?? '',
      transcriptMarathi: localized?.transcriptMarathi ?? '',
      ...(localized ?? {}),
    } as OralHistoryType;
  });
  const [activeOralId, setActiveOralId] = useState<string>(oralHistories[0]?.id || '');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [activeTab, setActiveTab] = useState<'english' | 'marathi'>('english');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timerRef = useRef<number | null>(null);

  const activeOral = oralHistories.find((oral) => oral.id === activeOralId) || oralHistories[0];

  // Convert mm:ss string to seconds
  const getDurationInSeconds = (durationStr: string) => {
    const parts = durationStr.split(':');
    return parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
  };

  const durationSec = getDurationInSeconds(activeOral.audioDuration);

  // Play/pause simulated countdown
  const handlePlayToggle = () => {
    if (isPlaying) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      timerRef.current = window.setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= durationSec) {
            setIsPlaying(false);
            if (timerRef.current) clearInterval(timerRef.current);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
  };

  // Reset player when switching audio tracks
  const handleTrackSelect = (id: string) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsPlaying(false);
    setCurrentTime(0);
    setActiveOralId(id);
  };

  // Render Canvas Waveform Chime Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const width = (canvas.width = canvas.clientWidth);
    const height = (canvas.height = canvas.clientHeight);

    // Waveform heights configuration
    const barsCount = 60;
    const barWidth = 4;
    const gap = 2;
    const baseHeights: number[] = [];

    // Fill mock bar heights
    for (let i = 0; i < barsCount; i++) {
      baseHeights.push(Math.random() * 25 + 5);
    }

    let offset = 0;

    function drawWave() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      // Playback progress ratio
      const progressRatio = currentTime / durationSec;
      const filledBars = Math.floor(barsCount * progressRatio);

      offset += 0.05;

      for (let i = 0; i < barsCount; i++) {
        // Calculate coordinate positions
        const x = (i * (barWidth + gap)) + (width - (barsCount * (barWidth + gap))) / 2;
        let barHeight = baseHeights[i];

        // Animate wave when playing
        if (isPlaying) {
          barHeight += Math.sin(i * 0.15 + offset) * 8;
          barHeight = Math.max(2, barHeight);
        }

        const y = (height - barHeight) / 2;

        // Visual coloring (maroon for progress, gold/sandstone for background)
        if (i < filledBars) {
          ctx.fillStyle = 'var(--primary-maroon)';
        } else {
          ctx.fillStyle = 'var(--secondary-sandstone)';
        }

        ctx.fillRect(x, y, barWidth, barHeight);
      }

      animationFrameId = requestAnimationFrame(drawWave);
    }

    drawWave();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying, currentTime, activeOralId, durationSec]);

  // Cleanup timers on component unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const formatTime = (timeInSec: number) => {
    const mins = Math.floor(timeInSec / 60);
    const secs = timeInSec % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section id="oral-history">
      <div className="legacy-intro">
        <span className="section-label">{t.oralHistory.sectionLabel}</span>
        <h2 className="section-title">{t.oralHistory.title}</h2>
        <p className="story-text">{t.oralHistory.intro}</p>
      </div>

      {/* Grid containing list & active player */}
      <div className="oral-history-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: '40px' }}>
        {/* Track selector column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {oralHistories.map((oral) => (
            <div
              key={oral.id}
              onClick={() => handleTrackSelect(oral.id)}
              style={{
                background: activeOralId === oral.id ? 'var(--bg-ancient)' : 'none',
                border: '1.5px solid',
                borderColor: activeOralId === oral.id ? 'var(--accent-gold)' : 'rgba(194,166,121,0.2)',
                padding: '20px',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'var(--transition-medium)',
              }}
            >
              <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-maroon)', marginBottom: '4px' }}>
                {oral.speaker}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{oral.relationship}</p>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.8rem',
                    color: 'var(--accent-gold)',
                    marginTop: '10px',
                  }}
                >
                  <Volume2 size={14} /> {t.oralHistory.durationLabel} {oral.audioDuration}
                </div>
            </div>
          ))}
        </div>

        {/* Player Detail Card */}
        {activeOral && (
          <div className="oral-history-card">
            <div className="oral-card-header">
              <div>
                <h3 className="oral-speaker-name">{activeOral.speaker}</h3>
                <span className="oral-speaker-meta">{activeOral.relationship}</span>
              </div>
              <h4 style={{ fontFamily: 'var(--font-serif-heading)', color: 'var(--accent-gold)', fontSize: '1.3rem' }}>
                {activeOral.title}
              </h4>
            </div>

            {/* Simulated Audio Waveform Controls */}
            <div className="audio-player-wrapper">
              <div className="audio-controls-row">
                <button
                  className="audio-play-btn"
                  onClick={handlePlayToggle}
                  aria-label={isPlaying ? t.oralHistory.pauseAria : t.oralHistory.playAria}
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} style={{ marginLeft: '3px' }} />}
                </button>

                <canvas ref={canvasRef} className="waveform-canvas" />

                <div className="audio-time-label">
                  <span>{formatTime(currentTime)}</span>
                  <span style={{ margin: '0 4px' }}>/</span>
                  <span>{activeOral.audioDuration}</span>
                </div>
              </div>
            </div>

            {/* Translation tabs */}
            <div className="transcript-tabs-header">
              <button
                className={`transcript-tab-btn ${activeTab === 'english' ? 'active' : ''}`}
                onClick={() => setActiveTab('english')}
              >
                {t.oralHistory.transcriptTabs.english}
              </button>
              <button
                className={`transcript-tab-btn ${activeTab === 'marathi' ? 'active' : ''}`}
                onClick={() => setActiveTab('marathi')}
              >
                {t.oralHistory.transcriptTabs.marathi}
              </button>
            </div>

            <div className="transcript-body-box">
              <p className="transcript-body-text">
                {activeTab === 'english' ? activeOral.transcriptEnglish : activeOral.transcriptMarathi}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
