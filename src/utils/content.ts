export const siteSections = [
  'about',
  'devi',
  'temple',
  'legacy',
  'timeline',
  'gallery',
  'festivals',
  'archive',
  'donation',
  'location',
  'contact',
] as const;

export function formatSectionLabel(section: string) {
  return section.charAt(0).toUpperCase() + section.slice(1);
}
