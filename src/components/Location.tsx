import { MapPin, Compass, Info, Clock } from 'lucide-react';
import { mockTrustData } from '../constants/mockData';

export default function Location() {
  const { locationDetails } = mockTrustData;

  return (
    <section id="location">
      <div className="legacy-intro">
        <span className="section-label">Pilgrimage</span>
        <h2 className="section-title">Temple Location & Visiting Hours</h2>
        <p className="story-text">
          Guidelines and maps to assist descendants and pilgrims visiting the Shree Bhagavati shrine in Ratnagiri.
        </p>
      </div>

      <div className="location-grid">
        {/* Detail Box */}
        <div className="location-info-box">
          {/* Address */}
          <div className="location-item">
            <h3 className="location-label">
              <MapPin size={20} strokeWidth={1.5} /> Address
            </h3>
            <p className="location-value">{locationDetails.address}</p>
          </div>

          {/* Visiting Hours */}
          <div className="location-item">
            <h3 className="location-label">
              <Clock size={20} strokeWidth={1.5} /> Visiting Hours
            </h3>
            <p className="location-value">{locationDetails.visitingHours}</p>
          </div>

          {/* Landmarks */}
          <div className="location-item">
            <h3 className="location-label">
              <Compass size={20} strokeWidth={1.5} /> Landmarks
            </h3>
            <ul className="location-landmarks-list">
              {locationDetails.landmarks.map((landmark, idx) => (
                <li key={idx} className="location-value">
                  {landmark}
                </li>
              ))}
            </ul>
          </div>

          {/* Parking Policy */}
          <div className="location-item">
            <h3 className="location-label">
              <Info size={20} strokeWidth={1.5} /> Environment & Parking
            </h3>
            <p className="location-value" style={{ fontStyle: 'italic' }}>
              {locationDetails.parking}
            </p>
          </div>
        </div>

        {/* Google Maps Frame */}
        <div className="map-wrapper">
          <iframe
            title="Shree Bhagavati Devi Temple Map Location"
            src={locationDetails.mapEmbedUrl}
            className="map-iframe"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
