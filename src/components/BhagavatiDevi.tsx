import { motion } from 'framer-motion';
import { Shield, Flower, Volume2, Flame, type LucideIcon } from 'lucide-react';
import templeImage from '../assets/images/templeimage.jfif';
import { useLanguage } from '../hooks/useLanguage';
import { resolveAssetUrl } from '../utils/image';

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Flower,
  Volume2,
  Flame,
};

export default function BhagavatiDevi() {
  const { t } = useLanguage();
  const deityDescription = t.deity.description;
  const deitySymbols = t.deity.symbols;

  return (
    <section id="devi" style={{ background: 'var(--bg-ancient)' }}>
      <div className="devi-container">
        {/* Sacred Description and Symbols */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">{t.deity.label}</span>
          <h2 className="section-title">{t.deity.title}</h2>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              marginBottom: '35px',
              textAlign: 'justify',
            }}
          >
            {deityDescription}
          </p>

          {deitySymbols.length > 0 && <>
          <h3
            style={{
              fontFamily: 'var(--font-serif-heading)',
              fontSize: '1.6rem',
              color: 'var(--primary-maroon)',
              marginBottom: '20px',
              borderBottom: '1px solid rgba(74, 55, 40, 0.15)',
              paddingBottom: '8px',
            }}
          >
            {t.deity.iconographyTitle}
          </h3>

          <div className="devi-symbol-grid">
            {deitySymbols.map((symbol, index) => {
              const Icon = iconMap[(symbol.iconName as string) || ''] ?? Shield;
              return (
                <div key={index} className="symbol-card">
                  <Icon size={24} strokeWidth={1.2} />
                  <h4 className="symbol-name">{symbol.name}</h4>
                  <p className="symbol-meaning">{symbol.meaning}</p>
                </div>
              );
            })}
          </div>
          </>}
        </motion.div>

        {/* Parallax Image Frame */}
        <motion.div
          style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '380px',
              height: '520px',
              border: '1.5px solid var(--accent-gold)',
              padding: '12px',
              borderRadius: '4px',
              background: 'var(--bg-parchment)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
            }}
          >
            {/* Soft gold border overlay */}
            <div
              style={{
                position: 'absolute',
                top: '-12px',
                left: '-12px',
                right: '-12px',
                bottom: '-12px',
                border: '1px solid rgba(194, 166, 121, 0.3)',
                borderRadius: '6px',
                pointerEvents: 'none',
              }}
            ></div>
            <img
              src={resolveAssetUrl(templeImage)}
              alt={t.deity.imageAlt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '2px',
                filter: 'sepia(0.15) contrast(1.02)',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
