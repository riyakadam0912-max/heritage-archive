import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { resolveAssetUrl } from '../utils/image';
import { useLanguage } from '../hooks/useLanguage';

// festival items are provided from the typed translations

export default function Festivals() {
  const { t } = useLanguage();
  const festivalItems = t.festivals.items;

  return (
    <section id="festivals" style={{ background: 'var(--bg-ancient)' }}>
      <div className="legacy-intro">
        <span className="section-label">{t.festivals.sectionLabel}</span>
        <h2 className="section-title">{t.festivals.title}</h2>
        <p className="story-text">{t.festivals.intro}</p>
      </div>

      <div className="festival-carousel">
        {festivalItems.map((fest, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={fest.name}
              className={`festival-card ${isEven ? '' : 'reverse'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.0 }}
            >
              {/* Image Column */}
              <div className="festival-img-wrapper">
                <img src={resolveAssetUrl(fest.imageUrl)} alt={fest.name} loading="lazy" decoding="async" />
              </div>

              {/* Text Column */}
              <div className="festival-info-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-gold)' }}>
                  <Calendar size={18} />
                  <span className="festival-timing">{fest.timing}</span>
                </div>
                <h3 className="festival-name">{fest.name}</h3>
                <p style={{ fontSize: '0.98rem', lineHeight: 1.7, textAlign: 'justify' }}>
                  {fest.description}
                </p>
                <div
                  style={{
                    background: 'var(--bg-parchment)',
                    padding: '20px',
                    borderRadius: '4px',
                    borderLeft: '2px solid var(--primary-maroon)',
                    marginTop: '10px',
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-serif-heading)',
                      fontSize: '1.1rem',
                      color: 'var(--primary-maroon)',
                      marginBottom: '6px',
                    }}
                  >
                    {t.festivals.heritageLabel}
                  </span>
                  <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
                    {fest.heritageStory}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
