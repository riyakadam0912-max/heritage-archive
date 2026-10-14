import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function Donation() {
  const { t } = useLanguage();

  return (
    <section id="donation" style={{ background: 'var(--bg-ancient)' }}>
      <div className="legacy-intro" style={{ maxWidth: '700px' }}>
        <span className="section-label">{t.donation.sectionLabel}</span>
        <h2 className="section-title">{t.donation.title}</h2>
        <p className="story-text">{t.donation.intro}</p>
      </div>

      <div className="transparency-pledge" role="note" style={{ maxWidth: '760px', margin: '0 auto' }}>
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'var(--font-serif-heading)',
            fontSize: '1.15rem',
            color: 'var(--primary-maroon)',
            marginBottom: '6px',
          }}
        >
          <ShieldCheck size={18} style={{ color: 'var(--leaf-green)' }} /> {t.donation.transparencyTitle}
        </span>
        <p>{t.donation.transparencyStatement}</p>
        <p style={{ marginTop: '12px' }}>{t.donation.scanInstructions}</p>
        </div>
    </section>
  );
}
