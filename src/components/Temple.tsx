import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Clock } from 'lucide-react';
import { mockTrustData } from '../constants/mockData';
import { useLanguage } from '../hooks/useLanguage';
import { resolveAssetUrl } from '../utils/image';

export default function Temple() {
  const { galleryItems } = mockTrustData;
  const { t } = useLanguage();
  const templeArchitecture = t.temple.architecture;
  const templeRituals = t.temple.rituals;
  const [isBellSwinging, setIsBellSwinging] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Get temple photo placeholder
  const templeImg = galleryItems.find((item) => item.category === 'temple')?.imageUrl || 
                    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800';

  // Handle bell swing click
  const triggerBell = () => {
    setIsBellSwinging(true);
    // Play a mock bell chime sound if needed, or just let it animate
    setTimeout(() => setIsBellSwinging(false), 3000);
  };

  // Canvas Incense Smoke generator
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 480);

    interface SmokeParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      life: number;
      maxLife: number;
      size: number;
    }

    const smoke: SmokeParticle[] = [];

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || 400;
      height = canvas.height = canvas.parentElement?.clientHeight || 480;
    };

    window.addEventListener('resize', handleResize);

    function createSmokeParticle(): SmokeParticle {
      return {
        // Emit from bottom right corner (simulating incense stand)
        x: width - 40 + (Math.random() - 0.5) * 10,
        y: height - 10,
        vx: (Math.random() - 0.6) * 0.4,
        vy: -(Math.random() * 0.8 + 0.5),
        alpha: Math.random() * 0.4 + 0.1,
        life: 0,
        maxLife: 200 + Math.random() * 100,
        size: Math.random() * 8 + 4,
      };
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      // Spawn new particles
      if (smoke.length < 35) {
        smoke.push(createSmokeParticle());
      }

      // Draw and update
      for (let i = smoke.length - 1; i >= 0; i--) {
        const p = smoke[i];
        p.life++;
        p.y += p.vy;
        p.x += p.vx + Math.sin(p.y * 0.03) * 0.2; // Sine wave drift
        p.alpha = 1 - p.life / p.maxLife;

        ctx.beginPath();
        // Blur circle for smoke look
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        grad.addColorStop(0, `rgba(235, 230, 220, ${p.alpha * 0.25})`);
        grad.addColorStop(1, 'rgba(235, 230, 220, 0)');
        ctx.fillStyle = grad;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Remove dead particles
        if (p.life >= p.maxLife || p.y < 0) {
          smoke.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="temple">
      <div className="temple-grid">
        {/* Left Column: Image, Swinging Bell & Canvas Smoke */}
        <motion.div
          className="temple-visual-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          {/* Bell Swing Trigger */}
          <button
            className="temple-bell-indicator"
            onClick={triggerBell}
            type="button"
            title={t.temple.ringBellAria}
            aria-label={t.temple.ringBellAria}
          >
            <Bell className={isBellSwinging ? 'bell-swinging' : ''} size={24} />
          </button>

          <div className="temple-image-frame">
            {/* Ambient Incense Smoke Overlay Canvas */}
            <canvas ref={canvasRef} className="incense-canvas" />

            <img
              src={resolveAssetUrl(templeImg)}
              alt={t.temple.imageAlt}
              loading="lazy"
              decoding="async"
            />
          </div>
          {t.temple.bellNote && <div
            style={{
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              textAlign: 'right',
              marginTop: '10px',
              fontStyle: 'italic',
            }}
          >
            {t.temple.bellNote}
          </div>}
        </motion.div>

        {/* Right Column: Details & Schedule */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
        >
          <div>
            <span className="section-label">{t.temple.sectionLabel}</span>
            <h2 className="section-title">{t.temple.title}</h2>
            <p style={{ lineHeight: 1.8, textAlign: 'justify' }}>{templeArchitecture}</p>
          </div>

          {templeRituals.length > 0 && <div>
            <h3
              style={{
                fontFamily: 'var(--font-serif-heading)',
                fontSize: '1.6rem',
                color: 'var(--primary-maroon)',
                marginBottom: '15px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                borderBottom: '1px solid rgba(74, 55, 40, 0.15)',
                paddingBottom: '8px',
              }}
            >
              <Clock size={22} strokeWidth={1.5} />
              {t.temple.dailyTitle}
            </h3>

            <div className="ritual-schedule">
              {templeRituals.map((ritual, idx) => (
                <div key={idx} className="ritual-row">
                  <div className="ritual-time">{ritual.time}</div>
                  <div className="ritual-details">
                    <h4 className="ritual-name">{ritual.name}</h4>
                    <p className="ritual-desc">{ritual.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>}
        </motion.div>
      </div>
    </section>
  );
}
