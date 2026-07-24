import { Play } from 'lucide-react';
import { mockTrustData } from '../constants/mockData';

export default function VideoArchive() {
  const { videoArchive } = mockTrustData;

  return (
    <section id="video-archive">
      <div className="legacy-intro">
        <span className="section-label">Archived Reels</span>
        <h2 className="section-title">Visual Records & Ritual footage</h2>
        <p className="story-text">
          Vivid documentary videos showcasing historical rituals, stone carvings, restoration journals, and holy festivals.
        </p>
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
                aria-label={`Video player for ${video.title}`}
              >
                Your browser does not support the video tag.
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
                <Play size={12} fill="var(--accent-gold)" /> Video Clip ({video.duration} mins)
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
