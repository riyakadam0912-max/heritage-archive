import { useState, useEffect } from 'react';
import type { MouseEvent } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { mockTrustData } from '../constants/mockData';
import { useLanguage } from '../hooks/useLanguage';
import { resolveAssetUrl } from '../utils/image';

const navItems = [
  { key: 'about', target: 'about' },
  { key: 'devi', target: 'devi' },
  { key: 'temple', target: 'temple' },
  { key: 'legacy', target: 'legacy' },
  { key: 'timeline', target: 'timeline' },
  { key: 'gallery', target: 'gallery' },
  { key: 'festivals', target: 'festivals' },
  { key: 'archive', target: 'archive' },
  { key: 'donation', target: 'donation' },
  { key: 'location', target: 'location' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { locale, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      // Determine active section based on scroll offset
      const sections = navItems.map((item) => document.getElementById(item.target));
      let currentSection = 'home';

      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) {
            currentSection = section.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Lenis smooth scrolls it
    }
  };

  return (
    <nav className="navbar" role="navigation" aria-label={t.navigation.title}>
      <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="logo-container">
          <div className="logo-border"></div>
          {/* Logo inner with Bhagavati Artwork */}
          <div
            className="logo-inner"
            style={{ backgroundImage: `url(${resolveAssetUrl(mockTrustData.logoUrl)})` }}
            role="img"
            aria-label={t.accessibility.logoAlt}
          ></div>
        </div>
        <span className="nav-title">{t.navigation.title}</span>
      </div>

      {/* Desktop Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button
          className="lang-switcher"
          onClick={() => setLanguage(locale === 'en' ? 'mr' : 'en')}
          aria-label={locale === 'en' ? t.common.langMarathi : t.common.langEnglish}
          aria-pressed={locale === 'mr'}
          type="button"
        >
          <Languages size={16} />
          <span>{locale === 'en' ? t.common.langMarathi : t.common.langEnglish}</span>
        </button>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li
              key={item.target}
              className={`nav-item ${activeSection === item.target ? 'active' : ''}`}
            >
                    <a href={`#${item.target}`} onClick={(e) => handleNavClick(e, item.target)}>
                  {t.nav?.[item.key as keyof typeof t.nav] ?? t.navigation.items[item.key as keyof typeof t.navigation.items] ?? ''}
                </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="mobile-menu-btn"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-expanded={isMobileMenuOpen}
        aria-label={t.accessibility.toggleMenu}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Links overlay */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            background: 'var(--bg-parchment)',
            borderBottom: '1.5px solid var(--accent-gold)',
            boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
            zIndex: 999,
          }}
        >
          <ul
            style={{
              listStyle: 'none',
              padding: '20px 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            {navItems.map((item) => (
              <li
                key={item.target}
                className={`nav-item ${activeSection === item.target ? 'active' : ''}`}
              >
                <a
                  href={`#${item.target}`}
                  onClick={(e) => handleNavClick(e, item.target)}
                  style={{
                    fontSize: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 500,
                  }}
                >
                  {t.nav?.[item.key as keyof typeof t.nav] ?? t.navigation.items[item.key as keyof typeof t.navigation.items] ?? ''}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Top scroll progress indicator bar */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
    </nav>
  );
}
