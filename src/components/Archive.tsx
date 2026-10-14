import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FileText, Download, X, Eye } from 'lucide-react';
import { mockTrustData } from '../constants/mockData';
import type { ArchiveDocument } from '../constants/mockData';
import { useLanguage } from '../hooks/useLanguage';
import { resolveAssetUrl } from '../utils/image';

export default function Archive() {
  const { t } = useLanguage();
  const archiveDocuments: ArchiveDocument[] = (mockTrustData.archiveDocuments || []).map((doc): ArchiveDocument => ({
    ...doc,
    title: doc.title ?? `${t.archive.title} ${doc.year}`,
    description: doc.description ?? t.archive.intro,
    transcription: doc.transcription ?? '',
  }));
  const archiveCategoryKeys = ['all', 'manuscripts', 'letters', 'certificates', 'records'] as const;
  const archiveCategoryLabels = archiveCategoryKeys.map((key) => {
    if (key === 'all') return t.common.all;
    const localizedIndex = archiveCategoryKeys.indexOf(key) + 1;
    return t.archive.filters[localizedIndex] ?? key;
  });
  const archiveCategoryLabelMap = Object.fromEntries(
    archiveCategoryKeys.map((key, index) => [key, archiveCategoryLabels[index]])
  ) as Record<string, string>;

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'manuscripts' | 'letters' | 'certificates' | 'records'>('all');
  const [selectedDoc, setSelectedDoc] = useState<ArchiveDocument | null>(null);

  // Filter and search logic
  const filteredDocs = archiveDocuments.filter((doc) => {
    const matchesCategory = activeCategory === 'all' || doc.category.toLowerCase() === activeCategory;
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (doc.transcription && doc.transcription.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="archive">
      <div className="legacy-intro">
        <span className="section-label">{t.archive.sectionLabel}</span>
        <h2 className="section-title">{t.archive.title}</h2>
        <p className="story-text">{t.archive.intro}</p>
      </div>

      <div className="archive-source-record">
        <FileText size={28} strokeWidth={1.4} aria-hidden="true" />
        <div>
          <h3>{t.archive.sourceBookletTitle}</h3>
          <p>{t.archive.sourceBookletDescription}</p>
        </div>
      </div>

      {/* Controls: Search and Filter */}
      {archiveDocuments.length > 0 && <div className="archive-controls">
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <Search
            size={18}
            style={{ position: 'absolute', left: '16px', color: 'var(--text-muted)' }}
          />
          <input
            type="text"
            className="archive-search-input"
            placeholder={t.archive.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ paddingLeft: '45px', width: '100%' }}
            aria-label={t.archive.searchPlaceholder}
          />
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {archiveCategoryKeys.map((key, index) => (
            <button
              key={key}
              className={`filter-btn ${activeCategory === key ? 'active' : ''}`}
              onClick={() => setActiveCategory(key)}
              style={{ padding: '6px 14px', fontSize: '0.75rem' }}
            >
              {archiveCategoryLabels[index]}
            </button>
          ))}
        </div>
      </div>}

      {/* Grid listing */}
      {archiveDocuments.length > 0 && <div className="archive-grid">
        {filteredDocs.map((doc) => (
          <motion.div
            key={doc.id}
            className="archive-card"
            onClick={() => setSelectedDoc(doc)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedDoc(doc);
              }
            }}
            tabIndex={0}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            role="button"
            aria-haspopup="dialog"
            aria-label={`${t.archive.viewDoc} ${doc.title}`}
          >
            <div className="archive-card-meta">
                <span>{archiveCategoryLabelMap[doc.category] ?? doc.category}</span>
              <span>{doc.year} {t.timeline.yearSuffix ?? ''}</span>
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
                {t.archive.authorLabel} {doc.author}
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
                <Eye size={14} /> {t.archive.viewDoc}
              </span>
            </div>
          </motion.div>
        ))}

        {filteredDocs.length === 0 && (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px' }}>
            <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
              {t.archive.noResults}
            </p>
          </div>
        )}
      </div>}

      {/* Document Viewer Modal Overlay */}
      <AnimatePresence>
        {selectedDoc && (
          <div
            className="doc-modal-backdrop"
            onClick={() => setSelectedDoc(null)}
            role="dialog"
            aria-modal="true"
            aria-label={t.accessibility.documentViewerFor.replace('{title}', selectedDoc.title)}
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
                aria-label={t.common.close}
              >
                <X size={28} />
              </button>

              {/* Left Column: visual scan / preview */}
              <div className="doc-modal-preview">
                {selectedDoc.fileType === 'pdf' ? (
                  <div className="doc-pdf-placeholder">
                    <FileText size={48} strokeWidth={1} style={{ color: 'var(--accent-gold)' }} />
                    <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>{t.archive.pdfLabel}</span>
                    <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>{selectedDoc.fileSize}</span>
                  </div>
                ) : (
                  <img src={resolveAssetUrl(selectedDoc.previewUrl)} alt={selectedDoc.title} />
                )}
              </div>

              {/* Right Column: details and transcription */}
              <div className="doc-modal-details">
                <div>
                  <span className="section-label" style={{ fontSize: '0.7rem' }}>
                    {selectedDoc.category} {t.timeline.yearSuffix ?? ''} {selectedDoc.year}
                  </span>
                  <h2 style={{ fontSize: '1.65rem', marginBottom: '8px', lineHeight: 1.2 }}>
                    {selectedDoc.title}
                  </h2>
                  <div className="doc-detail-meta">
                    <span>{t.archive.authorLabel} {selectedDoc.author}</span>
                    <span style={{ margin: '0 10px' }}>|</span>
                    <span>{t.archive.pdfLabel ? `Format: ${selectedDoc.fileType.toUpperCase()} (${selectedDoc.fileSize})` : ''}</span>
                  </div>
                </div>

                <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>{selectedDoc.description}</p>

                {selectedDoc.transcription && (
                  <div className="doc-transcription">
                    <h4 className="doc-transcription-title">{t.archive.pdfLabel}</h4>
                    <p className="doc-transcription-text">{selectedDoc.transcription}</p>
                  </div>
                )}

                <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
                  <button
                    type="button"
                    onClick={() => {
                      alert(t.archive.downloadAlert);
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
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <Download size={14} /> {t.archive.downloadScan}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
