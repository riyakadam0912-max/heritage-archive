import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Volume2, ChevronDown, ChevronUp } from 'lucide-react';
import { mockTrustData } from '../constants/mockData';

export default function Timeline() {
  const { timelineEvents } = mockTrustData;
  const [expandedEventId, setExpandedEventId] = useState<number | null>(null);

  const toggleExpand = (year: number) => {
    if (expandedEventId === year) {
      setExpandedEventId(null);
    } else {
      setExpandedEventId(year);
    }
  };

  return (
    <section id="timeline">
      <div className="legacy-intro">
        <span className="section-label">Chronology of Grace</span>
        <h2 className="section-title">History & Milestones</h2>
        <p className="story-text">
          A chronologically indexed chronicle of the Shree Bhagavati shrine construction, community deeds, and trust governance.
        </p>
      </div>

      <div className="timeline-container">
        {/* Continuous Vertical Gold Line */}
        <div className="timeline-gold-line"></div>

        {timelineEvents.map((event) => {
          const isExpanded = expandedEventId === event.year;

          return (
            <div
              key={event.year}
              className="timeline-item"
              onClick={() => toggleExpand(event.year)}
              role="button"
              aria-expanded={isExpanded}
              aria-label={`Timeline event for year ${event.year}: ${event.title}`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleExpand(event.year);
                }
              }}
            >
              {/* Gold Node Bullet */}
              <div className="timeline-node">
                <div className="timeline-node-inner"></div>
              </div>

              {/* Event Card */}
              <div className="timeline-content-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="timeline-year">{event.year} AD</span>
                  {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
                <h3 className="timeline-title">{event.title}</h3>
                <p className="timeline-desc">{event.description}</p>

                {/* Expandable Tray */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      className="timeline-expand-box"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      onClick={(e) => e.stopPropagation()} // Stop propagation from bubble clicks
                    >
                      {/* Document Attachment */}
                      {event.documentUrl && (
                        <div>
                          <div className="timeline-doc-link">
                            <FileText size={16} />
                            <span>Attached Document: {event.documentTitle || 'Historical Record Scan'}</span>
                          </div>
                          <img
                            src={event.documentUrl}
                            alt={event.documentTitle || 'Archived Document Scan'}
                            className="timeline-doc-preview"
                            style={{ marginTop: '10px' }}
                          />
                        </div>
                      )}

                      {/* Audio Memory Attachment */}
                      {event.audioUrl && (
                        <div
                          style={{
                            background: 'var(--bg-parchment)',
                            padding: '15px',
                            borderRadius: '4px',
                            border: '1px solid rgba(194, 166, 121, 0.2)',
                            marginTop: '10px',
                          }}
                        >
                          <div
                            className="timeline-doc-link"
                            style={{ color: 'var(--leaf-green)', marginBottom: '8px' }}
                          >
                            <Volume2 size={16} />
                            <span>Oral History Soundclip Excerpt</span>
                          </div>
                          {event.audioTranscript && (
                            <p style={{ fontSize: '0.88rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
                              “{event.audioTranscript}”
                            </p>
                          )}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
