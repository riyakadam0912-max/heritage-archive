import { useState, useEffect } from 'react';
import type { MouseEvent } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { mockTrustData } from '../constants/mockData';
import { useLanguage } from '../hooks/useLanguage';
import { resolveAssetUrl } from '../utils/image';

const navItems = [
  { key: 'story', target: 'about', sections: ['about', 'devi'] },
  { key: 'temple', target: 'temple', sections: ['temple'] },
  { key: 'archive', target: 'archive', sections: ['gallery', 'archive'] },
  { key: 'visit', target: 'location', sections: ['location'] },
  { key: 'donation', target: 'donation', sections: ['donation'] },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { locale, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      let currentItem = 'home';
      let currentSectionTop = Number.NEGATIVE_INFINITY;

      for (const item of navItems) {
        for (const sectionId of item.sections) {
          const section = document.getElementById(sectionId);
          if (section) {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop <= 150 && sectionTop > currentSectionTop) {
              currentItem = item.key;
              currentSectionTop = sectionTop;
            }
          }
        }
      }
      setActiveSection(currentItem);
    };

    handleScroll();
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
          <img
            className="logo-inner"
            src={resolveAssetUrl(mockTrustData.logoUrl)}
            alt={t.accessibility.logoAlt}
          />
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
              className={`nav-item ${item.key === 'donation' ? 'nav-item-donate' : ''} ${activeSection === item.key ? 'active' : ''}`}
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
        <div className="mobile-nav-menu">
          <ul className="mobile-nav-links">
            {navItems.map((item) => (
              <li
                key={item.target}
                className={`nav-item ${item.key === 'donation' ? 'nav-item-donate' : ''} ${activeSection === item.key ? 'active' : ''}`}
              >
                <a
                  href={`#${item.target}`}
                  onClick={(e) => handleNavClick(e, item.target)}
                >
                  {t.nav?.[item.key as keyof typeof t.nav] ?? t.navigation.items[item.key as keyof typeof t.navigation.items] ?? ''}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
