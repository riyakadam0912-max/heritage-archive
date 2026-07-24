import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { resolveAssetUrl } from '../utils/image';

const festivalData = [
  {
    name: 'Sharadotsav (Navratri)',
    timing: 'Ashvin Shuddha Pratipada to Dashami (Oct)',
    description: 'The premier annual gathering of the trust. For nine nights, the temple grounds are illuminated by thousands of clay lamps. Traditional Gondhal folk dances and musical prayers are offered in the Sabhamandapa. The festival culminates in the grand Vijayadashami procession when the Utsav Murti is paraded on the wooden chariot across the neighboring valleys.',
    heritageStory: 'Historically, family members from as far as Mumbai, Pune, and Goa return to the ancestral home to serve in the kitchen, prepare the Naivedya, and sit together in Vedic chants. It is a time of ancestral homecoming.',
    imageUrl: 'https://images.unsplash.com/photo-1561361531-99522904d9c4?q=80&w=800',
  },
  {
    name: 'Kartik Deepotsav',
    timing: 'Kartik Purnima (Nov)',
    description: 'A quiet, ethereal night where the noise of the world is shut out. Exactly 1008 terracotta lamps are hand-filled with organic coconut oil and lit by the family trustees, lining the boundaries of the laterite temple and the sacred Banyan tree. Special chants from the Rigveda echoing through the quiet valley represent the victory of spiritual light over darkness.',
    heritageStory: 'Started in 1772 by Madhavrao Shastri as a thanksgiving rite after the family survived the coastal epidemics, the Deepotsav represents the sanctuary silence at its most profound.',
    imageUrl: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=800',
  }
];

export default function Festivals() {
  return (
    <section id="festivals" style={{ background: 'var(--bg-ancient)' }}>
      <div className="legacy-intro">
        <span className="section-label">Ancestral Festivities</span>
        <h2 className="section-title">Ritual Gatherings & Festivals</h2>
        <p className="story-text">
          Our festivals are not commercial events, but sacred times where traditional code, family memories, and cosmic adoration unite.
        </p>
      </div>

      <div className="festival-carousel">
        {festivalData.map((fest, idx) => {
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
                    Family Heritage Story
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
