import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FileText, Download, X, Eye } from 'lucide-react';
import { mockTrustData } from '../constants/mockData';
import type { ArchiveDocument } from '../constants/mockData';

const docCategories = ['All', 'Manuscripts', 'Letters', 'Certificates', 'Records'];

export default function Archive() {
  const { archiveDocuments } = mockTrustData;
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedDoc, setSelectedDoc] = useState<ArchiveDocument | null>(null);

  // Filter and search logic
  const filteredDocs = archiveDocuments.filter((doc) => {
    const matchesCategory =
      activeCategory === 'All' || doc.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (doc.transcription && doc.transcription.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="archive">
      <div className="legacy-intro">
        <span className="section-label">Heritage Museum</span>
        <h2 className="section-title">The Digital Archive Room</h2>
        <p className="story-text">
          Browse centuries of family records, court papers, royal charters (Sanads), palm manuscripts, and old transcripts scanned and translated.
        </p>
      </div>

      {/* Controls: Search and Filter */}
      <div className="archive-controls">
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <Search
            size={18}
            style={{ position: 'absolute', left: '16px', color: 'var(--text-muted)' }}
          />
          <input
            type="text"
            className="archive-search-input"
            placeholder="Search manuscripts, transcriptions, letters..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ paddingLeft: '45px', width: '100%' }}
            aria-label="Search Archives"
          />
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {docCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              style={{ padding: '6px 14px', fontSize: '0.75rem' }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid listing */}
      <div className="archive-grid">
        {filteredDocs.map((doc) => (
          <motion.div
            key={doc.id}
            className="archive-card"
            onClick={() => setSelectedDoc(doc)}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            role="button"
            aria-haspopup="dialog"
            aria-label={`Open document ${doc.title}`}
          >
            <div className="archive-card-meta">
              <span>{doc.category}</span>
              <span>{doc.year} AD</span>
            </div>
            <h3 className="archive-card-title">{doc.title}</h3>
            <p className="archive-card-desc">{doc.description.substring(0, 120)}...</p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '15px',
                paddingTop: '15px',
                borderTop: '1px solid rgba(194, 166, 121, 0.15)',
              }}
            >
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Author: {doc.author}
              </span>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.8rem',
                  color: 'var(--primary-maroon)',
                  fontWeight: 500,
                }}
              >
                <Eye size={14} /> View Document
              </span>
            </div>
          </motion.div>
        ))}

        {filteredDocs.length === 0 && (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px' }}>
            <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
              No manuscripts or documents matched your search query.
            </p>
          </div>
        )}
      </div>

      {/* Document Viewer Modal Overlay */}
      <AnimatePresence>
        {selectedDoc && (
          <div
            className="doc-modal-backdrop"
            onClick={() => setSelectedDoc(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Document viewer for ${selectedDoc.title}`}
          >
            <motion.div
              className="doc-modal-container"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="drawer-close-btn"
                onClick={() => setSelectedDoc(null)}
                style={{ color: 'var(--primary-maroon)', zIndex: 10 }}
                aria-label="Close document viewer"
              >
                <X size={28} />
              </button>

              {/* Left Column: visual scan / preview */}
              <div className="doc-modal-preview">
                {selectedDoc.fileType === 'pdf' ? (
                  <div className="doc-pdf-placeholder">
                    <FileText size={48} strokeWidth={1} style={{ color: 'var(--accent-gold)' }} />
                    <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>PDF File Document</span>
                    <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>{selectedDoc.fileSize}</span>
                  </div>
                ) : (
                  <img src={selectedDoc.previewUrl} alt={selectedDoc.title} />
                )}
              </div>

              {/* Right Column: details and transcription */}
              <div className="doc-modal-details">
                <div>
                  <span className="section-label" style={{ fontSize: '0.7rem' }}>
                    {selectedDoc.category} AD {selectedDoc.year}
                  </span>
                  <h2 style={{ fontSize: '1.65rem', marginBottom: '8px', lineHeight: 1.2 }}>
                    {selectedDoc.title}
                  </h2>
                  <div className="doc-detail-meta">
                    <span>Steward/Author: {selectedDoc.author}</span>
                    <span style={{ margin: '0 10px' }}>|</span>
                    <span>Format: {selectedDoc.fileType.toUpperCase()} ({selectedDoc.fileSize})</span>
                  </div>
                </div>

                <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>{selectedDoc.description}</p>

                {selectedDoc.transcription && (
                  <div className="doc-transcription">
                    <h4 className="doc-transcription-title">English Translation Excerpt</h4>
                    <p className="doc-transcription-text">{selectedDoc.transcription}</p>
                  </div>
                )}

                <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Simulating file download. The original high-resolution TIFF archive is packaged for download.');
                    }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'var(--primary-maroon)',
                      color: 'var(--bg-parchment)',
                      padding: '10px 20px',
                      borderRadius: '24px',
                      fontSize: '0.85rem',
                      fontWeight: 'bold',
                      textDecoration: 'none',
                    }}
                  >
                    <Download size={14} /> Download Archive Scan
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
