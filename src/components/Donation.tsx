import { Landmark, CheckCircle } from 'lucide-react';
import { mockTrustData } from '../constants/mockData';

export default function Donation() {
  const { donationDetails } = mockTrustData;

  return (
    <section id="donation" style={{ background: 'var(--bg-ancient)' }}>
      <div className="legacy-intro" style={{ maxWidth: '700px' }}>
        <span className="section-label">Trust Support</span>
        <h2 className="section-title">Support the Endowment</h2>
        <p className="story-text">
          As a centuries-old public trust, our offerings are managed by the family council solely for the daily temple upkeep, clinic services, and regional education funds. We maintain complete audit transparency.
        </p>
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
            UPI Scan to Offer
          </h3>
          <img
            src={donationDetails.upiQrUrl}
            alt="Endowment Donation UPI QR Code"
            className="qr-code-image"
          />
          <div className="upi-id-label">{donationDetails.upiId}</div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Scan via any BHIM, UPI, GPAY or PhonePe application
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
              <Landmark size={20} strokeWidth={1.5} /> Direct Bank Remittance
            </h3>

            <div className="bank-detail-item">
              <span className="bank-label">Bank Name</span>
              <span className="bank-value">{donationDetails.bankName}</span>
            </div>

            <div className="bank-detail-item">
              <span className="bank-label">Account Name</span>
              <span className="bank-value">{donationDetails.accountName}</span>
            </div>

            <div className="bank-detail-item">
              <span className="bank-label">Account Number</span>
              <span className="bank-value" style={{ fontFamily: 'monospace' }}>
                {donationDetails.accountNumber}
              </span>
            </div>

            <div className="bank-detail-item">
              <span className="bank-label">IFSC Code</span>
              <span className="bank-value" style={{ fontFamily: 'monospace' }}>
                {donationDetails.ifscCode}
              </span>
            </div>

            <div className="bank-detail-item" style={{ gridColumn: '1 / -1' }}>
              <span className="bank-label">Branch Office</span>
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
              <CheckCircle size={16} style={{ color: 'var(--leaf-green)' }} /> Transparency Pledge
            </span>
            <p>{donationDetails.transparencyStatement}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
