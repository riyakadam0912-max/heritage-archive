import { motion, type Variants } from 'framer-motion';
import { Compass, BookOpen, ShieldAlert, Heart, type LucideIcon } from 'lucide-react';
import { mockTrustData } from '../constants/mockData';
import { useLanguage } from '../hooks/useLanguage';

// Map icon names from mockData to Lucide components
const iconMap: Record<string, LucideIcon> = {
  Bhakti: Heart,
  Preservation: BookOpen,
  Duty: Compass,
  Continuity: ShieldAlert,
};

export default function AboutTrust() {
  const { aboutStory, trustValues } = mockTrustData;
  const { t } = useLanguage();

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section id="about">
      <div className="about-grid">
        {/* Story details */}
        <motion.div
          className="story-column"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.span className="section-label" variants={cardVariants}>
            {t.sections?.about ?? 'About The Family Trust'}
          </motion.span>
          <motion.h2 className="section-title" variants={cardVariants}>
            {t.sections?.about ?? 'About The Family Trust'}
          </motion.h2>
          {aboutStory.map((paragraph, index) => (
            <motion.p key={index} className="story-text" variants={cardVariants}>
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        {/* Values details */}
        <motion.div
          className="values-column"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label" style={{ color: 'var(--primary-maroon)' }}>
            {t.sections?.about ?? 'Core Virtues'}
          </span>
          <h3
            style={{
              fontFamily: 'var(--font-serif-heading)',
              fontSize: '2rem',
              color: 'var(--primary-maroon)',
              marginBottom: '10px',
            }}
          >
            {t.sections?.about ?? 'Trust Stewardship'}
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            {trustValues.map((value, idx) => {
              // Extract icon based on title key
              const iconKey = value.title.split(' ')[0];
              const IconComponent = iconMap[iconKey] || Heart;

              return (
                <div key={idx} className="value-item">
                  <h4 className="value-item-title">
                    <IconComponent size={20} strokeWidth={1.5} />
                    {value.title}
                  </h4>
                  <p className="value-item-desc">{value.description}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
