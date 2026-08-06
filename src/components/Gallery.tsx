import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { resolveAssetUrl } from '../utils/image';
import { useLanguage } from '../hooks/useLanguage';

export default function Gallery() {
  const { t } = useLanguage();
  // Prefer typed translations as canonical source of gallery item metadata
  const galleryItems = t.gallery.items;
  const galleryCategoryLabels: Record<string, string> = { all: t.common.all, ...(t.gallery.categoryLabels ?? {}) };
  const categories = t.gallery.filters ?? ['all'];
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement | null>(null);

  // Filter gallery items by canonical category value
  const filteredItems = galleryItems.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category.toLowerCase() === activeFilter.toLowerCase();
  });

  const handlePrev = useCallback((e?: { stopPropagation: () => void }) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1);
    }
  }, [filteredItems.length, lightboxIndex]);

  const handleNext = useCallback((e?: { stopPropagation: () => void }) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1);
    }
  }, [filteredItems.length, lightboxIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0]?.clientX ?? null);
    setTouchEndX(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0]?.clientX ?? null);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;

    const delta = touchStartX - touchEndX;
    if (Math.abs(delta) > 50) {
      if (delta > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  useEffect(() => {
    if (lightboxIndex !== null) {
      lightboxRef.current?.focus();
    }
  }, [lightboxIndex]);

  const handleLightboxKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      setLightboxIndex(null);
      return;
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      handleNext();
      return;
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      handlePrev();
    }
  };

  const activeLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery">
      <div className="legacy-intro" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
        <span className="section-label">{t.gallery?.label}</span>
        <h2 className="section-title">{t.gallery?.title}</h2>
        <p className="story-text" style={{ maxWidth: '600px', margin: '0 auto' }}>
          {t.gallery?.intro}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="gallery-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => {
              setActiveFilter(cat);
              setLightboxIndex(null);
            }}
          >
            {galleryCategoryLabels[cat] ?? cat}
          </button>
        ))}
      </div>

      {/* Masonry Layout grid */}
      <motion.div className="gallery-masonry" layout>
        <AnimatePresence>
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              className="gallery-card-item"
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              onClick={() => setLightboxIndex(idx)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setLightboxIndex(idx);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`${t.gallery?.title}: ${item.title}`}
            >
              <img src={resolveAssetUrl(item.imageUrl)} alt={item.title} loading="lazy" decoding="async" />
              <div className="gallery-card-info">
                <span className="gallery-card-meta">{galleryCategoryLabels[item.category] ?? item.category} • {item.year || t.common.unrecorded}</span>
                <h3 className="gallery-card-title">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxItem && (
          <motion.div
            ref={lightboxRef}
            className="lightbox-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${t.gallery?.title} ${t.gallery?.lightbox?.close}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onKeyDown={handleLightboxKeyDown}
            tabIndex={-1}
          >
            <button
              className="lightbox-close-btn"
              onClick={() => setLightboxIndex(null)}
              aria-label={t.gallery?.lightbox?.close}
            >
              <X size={32} />
            </button>

            {/* Left Button */}
            <button className="lightbox-nav-btn prev" onClick={handlePrev} aria-label={t.gallery?.lightbox?.previous}>
              <ChevronLeft size={24} />
            </button>

            {/* Image display */}
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <img
                src={resolveAssetUrl(activeLightboxItem.imageUrl)}
                alt={activeLightboxItem.title}
                className="lightbox-img"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Right Button */}
            <button className="lightbox-nav-btn next" onClick={handleNext} aria-label={t.gallery?.lightbox?.next}>
              <ChevronRight size={24} />
            </button>

            {/* Text description */}
            <div className="lightbox-caption">
              <h3 className="lightbox-title">{activeLightboxItem.title}</h3>
              {activeLightboxItem.description && (
                <p className="lightbox-desc">{activeLightboxItem.description}</p>
              )}
              <span
                style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold)',
                  marginTop: '8px',
                  display: 'block',
                }}
              >
                {t.common.category}: {galleryCategoryLabels[activeLightboxItem.category] ?? activeLightboxItem.category} | {t.common.year}: {activeLightboxItem.year || t.common.unrecorded}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
