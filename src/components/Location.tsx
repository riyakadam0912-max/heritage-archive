import { MapPin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function Location() {
  const { t } = useLanguage();
  const addressLabel = t.location?.addressLabel ?? t.contact.officeLabel;
  const address = t.location?.address ?? '';

  return (
    <section id="location">
      <div className="legacy-intro">
        <span className="section-label">{t.location?.sectionLabel}</span>
        <h2 className="section-title">{t.location?.title}</h2>
        <p className="story-text">{t.location?.intro}</p>
      </div>

      <div className="location-grid" style={{ gridTemplateColumns: '1fr' }}>
        {/* Detail Box */}
        <div className="location-info-box">
          <div className="location-item">
            <h3 className="location-label">
              <MapPin size={20} strokeWidth={1.5} /> {addressLabel}
            </h3>
            <p className="location-value">{address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
