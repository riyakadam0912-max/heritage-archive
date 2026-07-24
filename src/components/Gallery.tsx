import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { mockTrustData } from '../constants/mockData';
import { resolveAssetUrl } from '../utils/image';

const categories = ['All', 'Temple', 'Family', 'Festivals', 'Renovation', 'Documents'];

export default function Gallery() {
  const { galleryItems } = mockTrustData;
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter gallery items
  const filteredItems = galleryItems.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.category.toLowerCase() === activeFilter.toLowerCase();
  });

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  const activeLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery">
      <div className="legacy-intro" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
        <span className="section-label">Visual Chronology</span>
        <h2 className="section-title">The Gallery Room</h2>
        <p className="story-text" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Vintage photographs, architecture layout, renovation work, and festive moments preserved in the temple archives.
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
            {cat}
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
              role="button"
              aria-label={`View larger image for ${item.title}`}
            >
              <img src={resolveAssetUrl(item.imageUrl)} alt={item.title} loading="lazy" decoding="async" />
              <div className="gallery-card-info">
                <span className="gallery-card-meta">{item.category} • {item.year || 'Archive'}</span>
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
            className="lightbox-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="lightbox-close-btn"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close Lightbox"
            >
              <X size={32} />
            </button>

            {/* Left Button */}
            <button className="lightbox-nav-btn prev" onClick={handlePrev} aria-label="Previous image">
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
            <button className="lightbox-nav-btn next" onClick={handleNext} aria-label="Next image">
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
                Category: {activeLightboxItem.category} | Year: {activeLightboxItem.year || 'Unrecorded'}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
