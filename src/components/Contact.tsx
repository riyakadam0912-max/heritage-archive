import { Phone, Mail, MapPin } from 'lucide-react';
import { mockTrustData } from '../constants/mockData';
import { useLanguage } from '../hooks/useLanguage';

export default function Contact() {
  const { contactDetails } = mockTrustData;
  const { t } = useLanguage();
  const safeContactDetails = contactDetails ?? { phone: '', email: '' };
  const locationText = t.location ?? {
    sectionLabel: t.contact.sectionLabel,
    title: t.contact.title,
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
    <section id="contact">
      <div className="legacy-intro" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
        <span className="section-label">{t.contact?.sectionLabel}</span>
        <h2 className="section-title">{t.contact?.title}</h2>
        <p className="story-text" style={{ maxWidth: '600px', margin: '0 auto' }}>
          {t.contact?.subtitle}
        </p>
      </div>

      <div className="contact-grid">
        {/* Phone */}
        <div className="contact-card">
          <Phone size={28} strokeWidth={1.2} />
          <h3 className="contact-card-title">{t.contact?.phoneLabel}</h3>
          <p className="contact-card-value" style={{ fontFamily: 'monospace' }}>
            {safeContactDetails.phone}
          </p>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            {t.common.availableHours}
          </span>
        </div>

        {/* Email */}
        <div className="contact-card">
          <Mail size={28} strokeWidth={1.2} />
          <h3 className="contact-card-title">{t.contact?.emailLabel}</h3>
          <p className="contact-card-value">
            <a href={`mailto:${safeContactDetails.email}`} style={{ borderBottom: '1px dashed' }}>
              {safeContactDetails.email}
            </a>
          </p>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            {t.common.emailResponseTime}
          </span>
        </div>

        {/* Office Address */}
        <div className="contact-card">
          <MapPin size={28} strokeWidth={1.2} />
          <h3 className="contact-card-title">{t.contact?.officeLabel}</h3>
          <p className="contact-card-value" style={{ lineHeight: 1.5 }}>
            {locationText.address}
          </p>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            {(locationText.landmarks ?? []).join(', ')}
          </span>
        </div>
      </div>
    </section>
  );
}
