import { Phone, Mail, MapPin } from 'lucide-react';
import { mockTrustData } from '../constants/mockData';

export default function Contact() {
  const { contactDetails } = mockTrustData;

  return (
    <section id="contact">
      <div className="legacy-intro" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
        <span className="section-label">Stewardship</span>
        <h2 className="section-title">Contact The Office</h2>
        <p className="story-text" style={{ maxWidth: '600px', margin: '0 auto' }}>
          For inquiries regarding document research, scholarship application submissions, or lineage updates.
        </p>
      </div>

      <div className="contact-grid">
        {/* Phone */}
        <div className="contact-card">
          <Phone size={28} strokeWidth={1.2} />
          <h3 className="contact-card-title">Phone Contact</h3>
          <p className="contact-card-value" style={{ fontFamily: 'monospace' }}>
            {contactDetails.phone}
          </p>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Available Mon – Sat: 09:00 AM – 05:00 PM
          </span>
        </div>

        {/* Email */}
        <div className="contact-card">
          <Mail size={28} strokeWidth={1.2} />
          <h3 className="contact-card-title">Electronic Mail</h3>
          <p className="contact-card-value">
            <a href={`mailto:${contactDetails.email}`} style={{ borderBottom: '1px dashed' }}>
              {contactDetails.email}
            </a>
          </p>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            We respond to heritage queries within 48 hours
          </span>
        </div>

        {/* Office Address */}
        <div className="contact-card">
          <MapPin size={28} strokeWidth={1.2} />
          <h3 className="contact-card-title">Ancestral Office</h3>
          <p className="contact-card-value" style={{ lineHeight: 1.5 }}>
            {contactDetails.officeAddress}
          </p>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Located directly adjacent to the temple hall
          </span>
        </div>
      </div>
    </section>
  );
}
