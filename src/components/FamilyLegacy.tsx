import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { mockTrustData } from '../constants/mockData';
import { useLanguage } from '../hooks/useLanguage';
import type { FamilyMember } from '../types/content';
import BiographyDrawer from './BiographyDrawer';
import { resolveAssetUrl } from '../utils/image';

export default function FamilyLegacy() {
  const [selectedMember, setSelectedMember] = useState<FamilyMember | null>(null);
  const { t } = useLanguage();
  const familyLegacyIntroduction = t.family.introduction;
  const familyMembersTranslated = mockTrustData.familyMembers.map((m) => {
    const localized = t.family.members.find((lm) => lm.id === m.id);
    return { ...m, ...(localized ?? {}) } as FamilyMember;
  });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section id="legacy">
      <div className="legacy-intro">
        <span className="section-label">{t.family.sectionLabel}</span>
        <h2 className="section-title">{t.family.title}</h2>
        <p className="story-text">{familyLegacyIntroduction}</p>
      </div>

      <motion.div
        className="legacy-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {familyMembersTranslated.map((member) => (
          <motion.div
            key={member.id}
            className="legacy-card"
            variants={cardVariants}
            onClick={() => setSelectedMember(member)}
            role="button"
            aria-haspopup="dialog"
            aria-label={t.accessibility.biographyFor.replace('{name}', member.name)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedMember(member);
              }
            }}
          >
            <div className="legacy-card-gen">{t.biography.generationPrefix}{member.generation}</div>
            <img src={resolveAssetUrl(member.photoUrl)} alt={member.name} className="legacy-card-avatar" loading="lazy" decoding="async" />
            <h3 className="legacy-card-name">{member.name}</h3>
            {member.marathiName && (
              <p
                style={{
                  fontFamily: 'var(--font-devanagari)',
                  color: 'var(--accent-gold)',
                  fontSize: '0.95rem',
                  marginBottom: '4px',
                }}
              >
                {member.marathiName}
              </p>
            )}
            <span className="legacy-card-lifespan">{member.lifespan}</span>
            <span className="legacy-card-role">{member.role}</span>

            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic', marginTop: 'auto' }}>
              {t.family.viewArchiveCta}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Drawer Overlay for biography details */}
      <BiographyDrawer member={selectedMember} onClose={() => setSelectedMember(null)} />
    </section>
  );
}
