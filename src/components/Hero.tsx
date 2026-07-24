import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { mockTrustData } from '../constants/mockData';
import { useLanguage } from '../hooks/useLanguage';
import { resolveAssetUrl } from '../utils/image';

export default function Hero() {
  const { heroDeityImage, sanskritQuote, englishQuote } = mockTrustData;
  const { t } = useLanguage();

  const handleExploreClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="home">
      <div style={{ maxWidth: '900px', width: '100%' }}>
        {/* Animated Deity Frame with Golden Glow */}
        <motion.div
          className="deity-frame"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            transform: 'translateY(0)',
            willChange: 'transform, opacity',
          }}
        >
          <div className="deity-glow"></div>
          <img
            src={resolveAssetUrl(heroDeityImage)}
            alt="Bhagavati Devi Sacred Art Portrait"
            className="deity-image"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </motion.div>

        {/* Headings */}
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Sanskrit quote box */}
        <motion.div
          className="sanskrit-quote-box"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.9 }}
        >
          <div className="sanskrit-text">{sanskritQuote.devanagari}</div>
          <div className="sanskrit-translation">“{sanskritQuote.translation}”</div>
        </motion.div>

        {/* English quote */}
        <motion.p
          style={{
            fontSize: '1.05rem',
            color: 'var(--text-muted)',
            fontStyle: 'italic',
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: 1.7,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
        >
          {englishQuote}
        </motion.p>

        {/* Animated Diya and Scroll Indicator */}
        <motion.div
          className="diya-container"
          onClick={handleExploreClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          aria-label="Scroll to explore heritage"
        >
          {/* Diya SVG */}
          <svg className="diya-svg" viewBox="0 0 100 80">
            {/* Diya Body */}
            <path
              className="diya-bowl"
              d="M10,40 C10,65 90,65 90,40 C90,30 80,35 50,35 C20,35 10,30 10,40 Z"
            />
            {/* Ornament detail */}
            <circle className="diya-ornament" cx="50" cy="50" r="4" />
            <path
              className="diya-ornament"
              d="M40,50 Q50,45 60,50 Q50,55 40,50 Z"
            />
            
            {/* Wick connection */}
            <rect className="diya-wick" x="48" y="27" width="4" height="8" rx="1" />

            {/* Glowing Flame */}
            <g className="diya-flame">
              <path
                d="M50,5 C40,22 45,30 50,30 C55,30 60,22 50,5 Z"
                fill="url(#flameGrad)"
              />
            </g>

            {/* SVG Gradients definitions */}
            <defs>
              <radialGradient id="flameGrad" cx="50%" cy="80%" r="80%">
                <stop offset="0%" stopColor="#fff" />
                <stop offset="25%" stopColor="#ffd700" />
                <stop offset="60%" stopColor="#ff4500" />
                <stop offset="100%" stopColor="#8b0000" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>

          <div className="explore-cta">
            <span>{t.hero.explore}</span>
            <ArrowDown size={16} strokeWidth={1.5} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
