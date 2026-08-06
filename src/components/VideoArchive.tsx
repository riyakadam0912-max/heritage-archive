import { Play } from 'lucide-react';

import { useLanguage } from '../hooks/useLanguage';

export default function VideoArchive() {
  const { t } = useLanguage();
  const videoArchive = t.videoArchive.items;

  return (
    <section id="video-archive">
      <div className="legacy-intro">
        <span className="section-label">{t.videoArchive.sectionLabel}</span>
        <h2 className="section-title">{t.videoArchive.title}</h2>
        <p className="story-text">{t.videoArchive.intro}</p>
      </div>

      <div className="video-grid">
        {videoArchive.map((video) => (
          <div key={video.id} className="video-card">
            <div className="video-player-wrapper">
              <video
                src={video.videoUrl}
                poster={video.thumbnailUrl}
                controls
                preload="metadata"
                playsInline
                aria-label={t.videoArchive.title + ' — ' + video.title}
              >
                {t.videoArchive.fallback}
              </video>
            </div>
            
            <div className="video-details-box">
              <span
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--accent-gold)',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginBottom: '10px',
                }}
              >
                <Play size={12} fill="var(--accent-gold)" /> {t.videoArchive.videoClipLabel.replace('{duration}', video.duration)}
              </span>
              <h3 className="video-title">{video.title}</h3>
              <p className="video-description">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
