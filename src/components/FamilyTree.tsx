import { useState } from 'react';
import { motion } from 'framer-motion';
import { mockTrustData } from '../constants/mockData';
import type { FamilyMember } from '../types/content';
import BiographyDrawer from './BiographyDrawer';

// Defined coordinate mapping for beautiful, clean layout representing generations
const nodePositions: Record<string, { x: number; y: number }> = {
  gen1_ananth: { x: 450, y: 50 },
  gen2_madhav: { x: 450, y: 140 },
  gen3_govind: { x: 250, y: 230 },
  gen3_vishwanath: { x: 650, y: 230 },
  gen4_shankar: { x: 250, y: 320 },
  gen4_laxmi: { x: 650, y: 320 },
  gen5_vasudev: { x: 250, y: 410 },
  gen6_keshav: { x: 250, y: 500 },
  gen7_sharad: { x: 250, y: 590 },
  gen8_anand: { x: 150, y: 680 },
  gen8_radha: { x: 350, y: 680 },
};

// Defined branches drawing connection arrays
const treeConnections = [
  { from: 'gen1_ananth', to: 'gen2_madhav' },
  { from: 'gen2_madhav', to: 'gen3_govind' },
  { from: 'gen2_madhav', to: 'gen3_vishwanath' },
  { from: 'gen3_govind', to: 'gen4_shankar' },
  { from: 'gen3_vishwanath', to: 'gen4_laxmi' },
  { from: 'gen4_shankar', to: 'gen5_vasudev' },
  { from: 'gen5_vasudev', to: 'gen6_keshav' },
  { from: 'gen6_keshav', to: 'gen7_sharad' },
  { from: 'gen7_sharad', to: 'gen8_anand' },
  { from: 'gen7_sharad', to: 'gen8_radha' },
];

export default function FamilyTree() {
  const { familyMembers } = mockTrustData;
  const [selectedMember, setSelectedMember] = useState<FamilyMember | null>(null);

  return (
    <section id="family-tree" style={{ paddingTop: '50px' }}>
      <div className="legacy-intro">
        <span className="section-label">Interactive Lineage</span>
        <h2 className="section-title">The Vamshavriksha</h2>
        <p className="story-text" style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
          Click on any family member node to view their archival records, historical contributions, and personal stories.
        </p>
      </div>

      <div className="tree-container">
        {/* Main tree drawing canvas */}
        <svg
          className="tree-svg-canvas"
          viewBox="0 0 900 740"
          width="100%"
          height="100%"
          style={{ maxWidth: '900px' }}
        >
          {/* Defs for gradients & paths */}
          <defs>
            <linearGradient id="goldMaroon" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-gold)" />
              <stop offset="100%" stopColor="var(--primary-maroon)" />
            </linearGradient>
          </defs>

          {/* Render curved tree branches */}
          {treeConnections.map((conn, idx) => {
            const start = nodePositions[conn.from];
            const end = nodePositions[conn.to];
            if (!start || !end) return null;

            // Curved bezier path string
            const pathD = `M ${start.x} ${start.y} C ${start.x} ${(start.y + end.y) / 2}, ${end.x} ${(start.y + end.y) / 2}, ${end.x} ${end.y}`;

            return (
              <motion.path
                key={idx}
                d={pathD}
                className="tree-link"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: idx * 0.1, ease: 'easeInOut' }}
              />
            );
          })}

          {/* Render individual node blocks */}
          {familyMembers.map((member) => {
            const pos = nodePositions[member.id];
            if (!pos) return null;

            return (
              <g
                key={member.id}
                className="tree-node"
                onClick={() => setSelectedMember(member)}
                role="button"
                aria-label={`View lineage card for ${member.name}`}
              >
                {/* Node outer outline */}
                <circle cx={pos.x} cy={pos.y} r="20" />
                
                {/* Gen indicator text */}
                <circle cx={pos.x} cy={pos.y} r="16" fill="none" stroke="var(--secondary-sandstone)" strokeWidth="0.8" />
                
                <text x={pos.x} y={pos.y + 4} fontSize="9" fontWeight="bold" fill="var(--text-muted)">
                  G{member.generation}
                </text>

                {/* Node name tag */}
                <rect
                  x={pos.x - 70}
                  y={pos.y + 26}
                  width="140"
                  height="22"
                  rx="4"
                  fill="var(--bg-parchment)"
                  stroke="rgba(74, 55, 40, 0.15)"
                  strokeWidth="1"
                />
                
                <text x={pos.x} y={pos.y + 40} fontSize="11" fill="var(--text-brown)" fontWeight="500">
                  {member.name.split(' ')[0]} {member.name.split(' ')[1] || ''}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="tree-instruction">
        *Scroll horizontally on mobile viewports to explore full lineages.
      </div>

      {/* Drawer Overlay for biography details */}
      <BiographyDrawer member={selectedMember} onClose={() => setSelectedMember(null)} />
    </section>
  );
}
