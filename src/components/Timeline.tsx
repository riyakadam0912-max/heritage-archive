import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Volume2, ChevronDown, ChevronUp } from 'lucide-react';
import { mockTrustData } from '../constants/mockData';
import { useLanguage } from '../hooks/useLanguage';
import type { TimelineEvent } from '../types/content';

export default function Timeline() {
  const { t } = useLanguage();
  // Merge technical timeline events with localized translations by year (translations override text)
  const timelineEvents: TimelineEvent[] = (() => {
    const tech = mockTrustData.timelineEvents || [];
    const localized = t.timeline.events || [];

    const merged = tech.map((event) => {
      const matching = localized.find((localEvent) => localEvent.year === event.year);
      return { ...event, ...(matching ?? {}) };
    });

    const unmatchedLocalized = localized.filter(
      (localEvent) => !tech.some((event) => event.year === localEvent.year)
    );

    return [...merged, ...unmatchedLocalized].sort((a, b) => a.year - b.year) as TimelineEvent[];
  })();
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
        <span className="section-label">{t.timeline.sectionLabel}</span>
        <h2 className="section-title">{t.timeline.title}</h2>
        <p className="story-text">{t.timeline.intro}</p>
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
              aria-label={t.accessibility.timelineEventFor
                .replace('{year}', String(event.year))
                .replace('{title}', event.title)}
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
                  <span className="timeline-year">{event.year} {t.timeline.yearSuffix ?? ''}</span>
                  <div>
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
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
                            <span>{t.timeline.attachedDocumentLabel} {event.documentTitle || ''}</span>
                          </div>
                          <img
                            src={event.documentUrl}
                            alt={event.documentTitle || t.timeline.documentScanAlt}
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
                            <span>{t.timeline.audioLabel}</span>
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
