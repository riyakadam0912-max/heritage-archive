import { useLanguage } from '../hooks/useLanguage';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="footer-section">
      {/* Sacred Quote */}
      <p className="footer-quote">
        {t.footer.sacredQuoteDevanagari}
      </p>
      
      <div className="footer-divider"></div>

      {/* Metadata / Registration */}
      <div className="footer-meta">
        <span>{t.footer.trustName}</span>
        {t.footer.registration && <span>{t.footer.registration}</span>}
        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '10px' }}>
          {t.footer.copyright.replace('{year}', String(currentYear))}
        </span>
      </div>
    </footer>
  );
}
