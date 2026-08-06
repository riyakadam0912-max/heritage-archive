import { MapPin, Compass, Info, Clock } from 'lucide-react';
import cityViewImage from '../assets/images/cityview.jfif';
import { mockTrustData } from '../constants/mockData';
import { useLanguage } from '../hooks/useLanguage';
import { resolveAssetUrl } from '../utils/image';

export default function Location() {
  const { t } = useLanguage();
  const { locationDetails } = mockTrustData;
  const safeLocationDetails = locationDetails ?? { address: '', landmarks: [], parking: '', visitingHours: '', mapEmbedUrl: '' };
  const locationText = t.location ?? {
    sectionLabel: '',
    title: '',
    intro: '',
    addressLabel: '',
    visitingHoursLabel: '',
    landmarksLabel: '',
    parkingLabel: '',
    address: '',
    landmarks: [],
    parking: '',
    visitingHours: '',
  };

  return (
    <section id="location">
      <div className="legacy-intro">
        <span className="section-label">{t.location?.sectionLabel}</span>
        <h2 className="section-title">{t.location?.title}</h2>
        <p className="story-text">{t.location?.intro}</p>
      </div>

      <div className="location-grid">
        {/* Detail Box */}
        <div className="location-info-box">
          {/* Address */}
          <div className="location-item">
            <h3 className="location-label">
              <MapPin size={20} strokeWidth={1.5} /> {t.location?.addressLabel}
            </h3>
            <p className="location-value">{safeLocationDetails.address ?? locationText.address}</p>
          </div>

          {/* Visiting Hours */}
          <div className="location-item">
            <h3 className="location-label">
              <Clock size={20} strokeWidth={1.5} /> {t.location?.visitingHoursLabel}
            </h3>
            <p className="location-value">{safeLocationDetails.visitingHours ?? locationText.visitingHours}</p>
          </div>

          {/* Landmarks */}
          <div className="location-item">
            <h3 className="location-label">
              <Compass size={20} strokeWidth={1.5} /> {t.location?.landmarksLabel}
            </h3>
            <ul className="location-landmarks-list">
              {(safeLocationDetails.landmarks ?? locationText.landmarks ?? []).map((landmark, idx) => (
                <li key={idx} className="location-value">
                  {landmark}
                </li>
              ))}
            </ul>
          </div>

          {/* Parking Policy */}
          <div className="location-item">
            <h3 className="location-label">
              <Info size={20} strokeWidth={1.5} /> {t.location?.parkingLabel}
            </h3>
            <p className="location-value" style={{ fontStyle: 'italic' }}>
              {safeLocationDetails.parking ?? locationText.parking}
            </p>
          </div>
        </div>

        {/* Google Maps Frame */}
        <div className="map-wrapper">
          <img
            src={resolveAssetUrl(safeLocationDetails.imageUrl ?? cityViewImage)}
            alt={t.location?.title ?? 'Shree Bhagavati Devi Temple Location'}
            className="map-iframe"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
