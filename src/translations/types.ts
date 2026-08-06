export type Locale = 'en' | 'mr';

export interface Translation {
  // Backwards-compatible top-level metadata and section map
  siteTitle?: string;
  metaDescription?: string;
  nav?: Record<string, string>;
  sections?: Record<string, string>;

  common: {
    loading: string;
    langEnglish: string;
    langMarathi: string;
    all: string;
    category: string;
    year: string;
    unrecorded: string;
    availableHours: string;
    emailResponseTime: string;
    officeLabel: string;
    close: string;
  };
  navigation: {
    title: string;
    items: Record<string, string>;
  };
  hero: {
    title: string;
    subtitle: string;
    explore: string;
    sanskritDevanagari?: string;
    sanskritTranslation?: string;
    englishQuote?: string;
    exploreCta: string;
  };
  about: {
    sectionLabel: string;
    title: string;
    story: string[];
  };
  trust: {
    values: { title: string; description: string }[];
  };
  deity: {
    label: string;
    title: string;
    description: string;
    iconographyTitle: string;
    imageAlt: string;
    symbols: { name: string; meaning: string; iconName?: string }[];
  };
  temple: {
    sectionLabel: string;
    title: string;
    architecture: string;
    dailyTitle: string;
    rituals: { time: string; name: string; description: string }[];
    imageAlt: string;
    bellNote: string;
    ringBellAria: string;
  };
  gallery: {
    label: string;
    title: string;
    intro: string;
    filters: string[];
    categoryLabels?: Record<string, string>;
    items: { id: string; title: string; category: string; imageUrl: string; year?: string; description?: string }[];
    lightbox: { close: string; previous: string; next: string };
  };
  timeline: {
    sectionLabel: string;
    title: string;
    intro: string;
    events: { year: number; title: string; description: string; category?: string; documentTitle?: string; documentUrl?: string; audioUrl?: string; audioTranscript?: string }[];
    attachedDocumentLabel: string;
    audioLabel: string;
    documentScanAlt: string;
    yearSuffix?: string;
  };
  family: {
    sectionLabel: string;
    title: string;
    introduction: string;
    members: {
      id: string;
      name: string;
      marathiName?: string;
      generation: number;
      lifespan?: string;
      role?: string;
      bio?: string;
      contributions?: string[];
      stories?: string[];
      photoUrl?: string;
    }[];
    viewArchiveCta?: string;
    scrollHint?: string;
  };
  biography: {
    narrativeTitle: string;
    contributionsTitle: string;
    anecdotesTitle: string;
    lineageTitle: string;
    parentageLabel: string;
    offspringLabel: string;
    generationPrefix: string;
  };
  festivals: {
    sectionLabel: string;
    title: string;
    intro: string;
    items: { name: string; timing: string; description: string; heritageStory?: string; imageUrl?: string }[];
    heritageLabel: string;
  };
  archive: {
    sectionLabel: string;
    title: string;
    intro: string;
    searchPlaceholder: string;
    filters: string[];
    noResults: string;
    authorLabel: string;
    viewDoc: string;
    pdfLabel: string;
    attachedDocumentPrefix: string;
    downloadScan: string;
    downloadAlert: string;
  };
  oralHistory: {
    sectionLabel: string;
    title: string;
    intro: string;
    items: { id: string; speaker: string; relationship: string; title: string; audioDuration: string; audioUrl: string; transcriptEnglish?: string; transcriptMarathi?: string }[];
    durationLabel: string;
    transcriptTabs: { english: string; marathi: string };
    playAria: string;
    pauseAria: string;
  };
  videoArchive: {
    sectionLabel: string;
    title: string;
    intro: string;
    items: { id: string; title: string; description: string; duration: string; videoUrl: string; thumbnailUrl?: string }[];
    fallback: string;
    videoClipLabel: string;
  };
  donation: {
    sectionLabel: string;
    title: string;
    intro: string;
    upiTitle: string;
    qrAlt: string;
    scanInstructions: string;
    bankLabels: { bankName: string; accountName: string; accountNumber: string; ifsc: string; branch: string };
    directRemittanceTitle: string;
    transparencyTitle: string;
    transparencyStatement: string;
  };
  contact: {
    sectionLabel: string;
    subtitle?: string;
    title: string;
    phoneLabel: string;
    emailLabel: string;
    officeLabel: string;
    availableHours: string;
    emailResponseTime: string;
  };
  footer: {
    sacredQuoteDevanagari?: string;
    trustName: string;
    registration: string;
    copyright: string;
  };
  location?: {
    sectionLabel: string;
    title: string;
    intro?: string;
    addressLabel: string;
    visitingHoursLabel: string;
    landmarksLabel: string;
    parkingLabel: string;
    address?: string;
    landmarks?: string[];
    parking?: string;
    visitingHours?: string;
  };
  forms?: Record<string, unknown>;
  accessibility: {
    skipToMain: string;
    logoAlt: string;
    toggleMenu: string;
    biographyFor: string; // template
    documentViewerFor: string; // template
    timelineEventFor: string; // template
  };
  metadata: {
    keywords: string;
    author: string;
  };
}

