export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      {/* Sacred Quote */}
      <p className="footer-quote">
        “परित्राणाय साधूनां विनाशाय च दुष्कृताम् । धर्मसंस्थापनार्थाय सम्भवामि युगे युगे ॥”
      </p>
      
      <div className="footer-divider"></div>

      {/* Metadata / Registration */}
      <div className="footer-meta">
        <span>Shree Bhagavati Devi Devasthan Charitable Trust</span>
        <span>Registered under the Bombay Public Trusts Act, 1950 | Registration No. E-281 (Ratnagiri)</span>
        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '10px' }}>
          © {currentYear} Shree Bhagavati Devi Family Trust. All ancestral rights, manuscripts, and scans are legally protected.
        </span>
      </div>
    </footer>
  );
}
