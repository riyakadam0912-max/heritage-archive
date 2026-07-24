export default function DecorativeDivider() {
  return (
    <div className="decorative-divider" aria-hidden="true">
      <svg className="divider-svg" viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
        {/* Left scroll-inspired line */}
        <line
          x1="0"
          y1="15"
          x2="82"
          y2="15"
          stroke="var(--secondary-sandstone)"
          strokeWidth="1"
          strokeDasharray="2, 1"
          opacity="0.7"
        />
        <circle cx="82" cy="15" r="2.5" fill="var(--accent-gold)" />

        {/* Central Lotus / Mandala motif */}
        {/* Vertical Petals */}
        <path
          d="M 100 3 C 95 12, 95 12, 100 27 C 105 12, 105 12, 100 3 Z"
          fill="none"
          stroke="var(--primary-maroon)"
          strokeWidth="1.2"
        />
        {/* Horizontal Petals */}
        <path
          d="M 88 15 C 97 10, 97 10, 112 15 C 97 20, 97 20, 88 15 Z"
          fill="none"
          stroke="var(--primary-maroon)"
          strokeWidth="1.2"
        />
        {/* Outer Ring */}
        <circle
          cx="100"
          cy="15"
          r="8"
          fill="none"
          stroke="var(--accent-gold)"
          strokeWidth="1"
          strokeDasharray="1, 1.5"
        />
        {/* Center Bindu */}
        <circle cx="100" cy="15" r="2.5" fill="var(--accent-gold)" />

        {/* Right scroll-inspired line */}
        <circle cx="118" cy="15" r="2.5" fill="var(--accent-gold)" />
        <line
          x1="118"
          y1="15"
          x2="200"
          y2="15"
          stroke="var(--secondary-sandstone)"
          strokeWidth="1"
          strokeDasharray="2, 1"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}
