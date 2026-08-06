import { Landmark, CheckCircle } from 'lucide-react';
import { mockTrustData } from '../constants/mockData';
import { useLanguage } from '../hooks/useLanguage';
import { resolveAssetUrl } from '../utils/image';

export default function Donation() {
  const { t } = useLanguage();
  const { donationDetails } = mockTrustData;

  return (
    <section id="donation" style={{ background: 'var(--bg-ancient)' }}>
      <div className="legacy-intro" style={{ maxWidth: '700px' }}>
        <span className="section-label">{t.donation.sectionLabel}</span>
        <h2 className="section-title">{t.donation.title}</h2>
        <p className="story-text">{t.donation.intro}</p>
      </div>

      <div className="donation-layout">
        {/* UPI QR Column */}
        <div className="donation-qr-card">
          <h3
            style={{
              fontFamily: 'var(--font-serif-heading)',
              fontSize: '1.4rem',
              color: 'var(--primary-maroon)',
            }}
          >
            {t.donation.upiTitle}
          </h3>
          <img
            src={resolveAssetUrl(donationDetails.upiQrUrl)}
            alt={t.donation.qrAlt}
            className="qr-code-image"
          />
          <div className="upi-id-label">{donationDetails.upiId}</div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            {t.donation.scanInstructions}
          </span>
        </div>

        {/* Bank Details Grid */}
        <div className="donation-details-grid">
          <div className="bank-details-box">
            <h3
              style={{
                gridColumn: '1 / -1',
                fontFamily: 'var(--font-serif-heading)',
                fontSize: '1.35rem',
                color: 'var(--primary-maroon)',
                borderBottom: '1px solid rgba(74, 55, 40, 0.15)',
                paddingBottom: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <Landmark size={20} strokeWidth={1.5} /> {t.donation.directRemittanceTitle}
            </h3>

            <div className="bank-detail-item">
              <span className="bank-label">{t.donation.bankLabels.bankName}</span>
              <span className="bank-value">{donationDetails.bankName}</span>
            </div>

            <div className="bank-detail-item">
              <span className="bank-label">{t.donation.bankLabels.accountName}</span>
              <span className="bank-value">{donationDetails.accountName}</span>
            </div>

            <div className="bank-detail-item">
              <span className="bank-label">{t.donation.bankLabels.accountNumber}</span>
              <span className="bank-value" style={{ fontFamily: 'monospace' }}>
                {donationDetails.accountNumber}
              </span>
            </div>

            <div className="bank-detail-item">
              <span className="bank-label">{t.donation.bankLabels.ifsc}</span>
              <span className="bank-value" style={{ fontFamily: 'monospace' }}>
                {donationDetails.ifscCode}
              </span>
            </div>

            <div className="bank-detail-item" style={{ gridColumn: '1 / -1' }}>
              <span className="bank-label">{t.donation.bankLabels.branch}</span>
              <span className="bank-value" style={{ fontSize: '0.95rem' }}>{donationDetails.branch}</span>
            </div>
          </div>

          {/* Transparency Statement */}
          <div className="transparency-pledge">
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-serif-heading)',
                fontSize: '1.15rem',
                color: 'var(--primary-maroon)',
                marginBottom: '6px',
              }}
            >
              <CheckCircle size={16} style={{ color: 'var(--leaf-green)' }} /> {t.donation.transparencyTitle}
            </span>
            <p>{t.donation.transparencyStatement}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
