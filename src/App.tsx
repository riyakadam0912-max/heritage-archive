import { lazy, Suspense, useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SmoothScroll from './components/SmoothScroll';
import { useLanguage } from './hooks/useLanguage';
import DustParticles from './components/DustParticles';
import DecorativeDivider from './components/DecorativeDivider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { mockTrustData } from './constants/mockData';
import { resolveAssetUrl } from './utils/image';

const AboutTrust = lazy(() => import('./components/AboutTrust'));
const BhagavatiDevi = lazy(() => import('./components/BhagavatiDevi'));
const Temple = lazy(() => import('./components/Temple'));
const FamilyLegacy = lazy(() => import('./components/FamilyLegacy'));
const FamilyTree = lazy(() => import('./components/FamilyTree'));
const Timeline = lazy(() => import('./components/Timeline'));
const Gallery = lazy(() => import('./components/Gallery'));
const Festivals = lazy(() => import('./components/Festivals'));
const Archive = lazy(() => import('./components/Archive'));
const OralHistory = lazy(() => import('./components/OralHistory'));
const VideoArchive = lazy(() => import('./components/VideoArchive'));
const Donation = lazy(() => import('./components/Donation'));
const Location = lazy(() => import('./components/Location'));
const Contact = lazy(() => import('./components/Contact'));

function LoadingSections() {
  const { t } = useLanguage();
  return (
    <div className="loading-shell" aria-live="polite" aria-busy="true">
      {t.common.loading}
    </div>
  );
}

export default function App() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isMobile, setIsMobile] = useState(false);
  const { locale, t } = useLanguage();

  // Mouse move listener for custom cursor gold glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', checkMobile);
    
    checkMobile(); // Run check initially

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <HelmetProvider>
      <SmoothScroll>
        <div style={{ position: 'relative', width: '100%' }}>
          <a className="skip-link" href="#main-content">
            {t.accessibility.skipToMain}
          </a>

          {/* SEO Metadata */}
          <Helmet>
            <title>{t.siteTitle}</title>
            <meta name="description" content={t.metaDescription} />
            <meta name="keywords" content={t.metadata.keywords} />
            <meta name="author" content={t.metadata.author} />
            <meta name="theme-color" content="#fbf8f3" />
            <meta property="og:title" content={t.siteTitle} />
            <meta property="og:description" content={t.metaDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={t.siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={t.siteTitle} />
            <meta name="twitter:description" content={t.metaDescription} />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://bhagavatidevitrust.org" />
            <meta property="og:image" content={resolveAssetUrl(mockTrustData.heroDeityImage)} />
            <meta name="twitter:image" content={resolveAssetUrl(mockTrustData.heroDeityImage)} />
            <html lang={locale} />
          </Helmet>

          {/* Ambient overlays */}
          <div className="paper-overlay"></div>
          {!isMobile && (
            <div
              className="cursor-glow"
              style={{
                left: `${cursorPos.x}px`,
                top: `${cursorPos.y}px`,
              }}
            ></div>
          )}
          <DustParticles />

          {/* Main sticky navigation */}
          <Navbar />

          {/* Layout blocks */}
          <main id="main-content" style={{ zIndex: 5, position: 'relative' }}>
            <Hero />

            <Suspense fallback={<LoadingSections />}>
              <DecorativeDivider />
              <AboutTrust />

              <DecorativeDivider />
              <BhagavatiDevi />

              <DecorativeDivider />
              <Temple />

              <DecorativeDivider />
              <FamilyLegacy />

              <DecorativeDivider />
              <FamilyTree />

              <DecorativeDivider />
              <Timeline />

              <DecorativeDivider />
              <Gallery />

              <DecorativeDivider />
              <Festivals />

              <DecorativeDivider />
              <Archive />

              <DecorativeDivider />
              <OralHistory />

              <DecorativeDivider />
              <VideoArchive />

              <DecorativeDivider />
              <Donation />

              <DecorativeDivider />
              <Location />

              <DecorativeDivider />
              <Contact />
            </Suspense>
          </main>

          <Footer />
        </div>
      </SmoothScroll>
    </HelmetProvider>
  );
}
