import { X, Heart, Shield, Award } from 'lucide-react';
import type { FamilyMember } from '../constants/mockData';
import { resolveAssetUrl } from '../utils/image';

interface BiographyDrawerProps {
  member: FamilyMember | null;
  onClose: () => void;
}

export default function BiographyDrawer({ member, onClose }: BiographyDrawerProps) {
  if (!member) return null;

  return (
    <div
      className="biography-drawer-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Biography details for ${member.name}`}
    >
      <div
        className="biography-drawer"
        onClick={(e) => e.stopPropagation()}
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <button
          className="drawer-close-btn"
          onClick={onClose}
          aria-label="Close details"
        >
          <X size={28} />
        </button>

        {/* Profile Image & Meta */}
        <div className="drawer-header">
          <img src={resolveAssetUrl(member.photoUrl)} alt={member.name} className="drawer-avatar" loading="lazy" decoding="async" />
          <h2 className="drawer-name" style={{ marginTop: '20px' }}>
            {member.name}
          </h2>
          {member.marathiName && (
            <p
              style={{
                fontFamily: 'var(--font-devanagari)',
                fontSize: '1.2rem',
                color: 'var(--accent-gold)',
                marginBottom: '10px',
              }}
            >
              {member.marathiName}
            </p>
          )}
          <div className="drawer-meta">
            <span>{member.lifespan}</span>
            <span style={{ margin: '0 10px' }}>•</span>
            <span style={{ color: 'var(--primary-maroon)', fontWeight: 'bold' }}>
              {member.role}
            </span>
          </div>
        </div>

        {/* Narrative Biography */}
        <div>
          <h3 className="drawer-list-title">Historical Narrative</h3>
          <p className="drawer-bio-p">{member.bio}</p>
        </div>

        {/* Contributions */}
        <div>
          <h3 className="drawer-list-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award size={18} strokeWidth={1.5} />
            Key Contributions
          </h3>
          <ul style={{ listStyle: 'none', paddingLeft: '5px' }}>
            {member.contributions.map((contrib, idx) => (
              <li
                key={idx}
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.5,
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'start',
                  gap: '10px',
                }}
              >
                <span style={{ color: 'var(--accent-gold)', marginTop: '4px' }}>♦</span>
                <span>{contrib}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stories / Anecdotes */}
        {member.stories && member.stories.length > 0 && (
          <div>
            <h3 className="drawer-list-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Shield size={18} strokeWidth={1.5} />
              Archived Anecdotes
            </h3>
            {member.stories.map((story, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: '0.92rem',
                  fontStyle: 'italic',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  background: 'var(--bg-ancient)',
                  padding: '15px',
                  borderRadius: '4px',
                  borderLeft: '2px solid var(--accent-gold)',
                  marginBottom: '10px',
                }}
              >
                “{story}”
              </p>
            ))}
          </div>
        )}

        {/* Lineage Info */}
        {(member.parents || member.children) && (
          <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1.5px solid rgba(194, 166, 121, 0.2)' }}>
            <h3 className="drawer-list-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Heart size={18} strokeWidth={1.5} />
              Lineage Context
            </h3>
            <div style={{ display: 'flex', gap: '30px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              {member.parents && member.parents.length > 0 && (
                <div>
                  <span style={{ textTransform: 'uppercase', fontSize: '0.75rem', display: 'block' }}>Parentage</span>
                  <span style={{ color: 'var(--text-brown)', fontWeight: 500 }}>
                    {member.parents.map((p) => p.replace('gen', 'Generation ')).join(', ')}
                  </span>
                </div>
              )}
              {member.children && member.children.length > 0 && (
                <div>
                  <span style={{ textTransform: 'uppercase', fontSize: '0.75rem', display: 'block' }}>Offspring</span>
                  <span style={{ color: 'var(--text-brown)', fontWeight: 500 }}>
                    {member.children.map((c) => c.replace('gen', 'Generation ')).join(', ')}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
