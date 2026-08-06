export interface TrustValue {
  title: string;
  description: string;
}

export interface DeitySymbol {
  name: string;
  meaning: string;
  iconName: string;
}

export interface TempleRitual {
  time: string;
  name: string;
  description: string;
}

export interface FamilyMember {
  id: string;
  name: string;
  marathiName?: string;
  generation: number;
  lifespan: string;
  role: string;
  bio: string;
  parents?: string[];
  children?: string[];
  contributions: string[];
  photoUrl: string;
  stories?: string[];
}

// Language-independent technical shape for data coming from mockData.ts
export interface TechnicalFamilyMember {
  id: string;
  generation: number;
  lifespan: string;
  photoUrl: string;
  parents?: string[];
  children?: string[];
}

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  category: 'temple' | 'trust' | 'family';
  documentUrl?: string;
  documentTitle?: string;
  audioUrl?: string;
  audioTranscript?: string;
}

export interface TechnicalTimelineEvent {
  year: number;
  category: 'temple' | 'trust' | 'family';
  documentUrl?: string;
  audioUrl?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'devi' | 'temple' | 'festivals';
  imageUrl: string;
  blurPlaceholder?: string;
  year?: string;
  description?: string;
}

export interface TechnicalGalleryItem {
  id: string;
  category: 'devi' | 'temple' | 'festivals';
  imageUrl: string;
  blurPlaceholder?: string;
  year?: string;
}

export interface ArchiveDocument {
  id: string;
  title: string;
  category: 'letters' | 'certificates' | 'records' | 'manuscripts';
  year: string;
  author: string;
  description: string;
  previewUrl: string;
  fileType: 'pdf' | 'image';
  fileSize: string;
  transcription?: string;
}

export interface TechnicalArchiveDocument {
  id: string;
  category: 'letters' | 'certificates' | 'records' | 'manuscripts';
  year: string;
  author: string;
  previewUrl: string;
  fileType: 'pdf' | 'image';
  fileSize: string;
  title?: string;
  description?: string;
  transcription?: string;
}

export interface OralHistory {
  id: string;
  speaker: string;
  relationship: string;
  title: string;
  audioDuration: string;
  audioUrl: string;
  transcriptEnglish: string;
  transcriptMarathi: string;
}

export interface TechnicalOralHistory {
  id: string;
  speaker: string;
  relationship: string;
  audioDuration: string;
  audioUrl: string;
}

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  duration: string;
  videoUrl: string;
  thumbnailUrl: string;
}

export interface TechnicalVideoItem {
  id: string;
  duration: string;
  videoUrl: string;
  thumbnailUrl: string;
}

export interface TrustData {
  logoUrl: string;
  heroDeityImage: string;
  sanskritQuote: {
    devanagari: string;
    transliteration: string;
    translation: string;
  };
  englishQuote: string;
  aboutStory: string[];
  trustValues: TrustValue[];
  deityDescription: string;
  deitySymbols: DeitySymbol[];
  templeArchitecture: string;
  templeRituals: TempleRitual[];
  familyLegacyIntroduction: string;
  familyMembers: FamilyMember[];
  timelineEvents: TimelineEvent[];
  galleryItems: GalleryItem[];
  archiveDocuments: ArchiveDocument[];
  oralHistories: OralHistory[];
  videoArchive: VideoItem[];
  donationDetails: {
    upiId: string;
    upiQrUrl: string;
    bankName: string;
    accountName: string;
    accountNumber: string;
    ifscCode: string;
    branch: string;
    transparencyStatement: string;
  };
  locationDetails: {
    address: string;
    landmarks: string[];
    parking: string;
    visitingHours: string;
    mapEmbedUrl: string;
    imageUrl?: string;
  };
  contactDetails: {
    phone: string;
    email: string;
    officeAddress: string;
  };
}

// Language-independent technical container used by mock data
export interface TechnicalTrustData {
  logoUrl: string;
  heroDeityImage: string;
  sanskritQuote: {
    devanagari: string;
    transliteration: string;
    translation?: string;
  };
  familyMembers: TechnicalFamilyMember[];
  timelineEvents: TechnicalTimelineEvent[];
  galleryItems: TechnicalGalleryItem[];
  archiveDocuments: TechnicalArchiveDocument[];
  oralHistories: TechnicalOralHistory[];
  videoArchive: TechnicalVideoItem[];
  donationDetails: {
    upiId?: string;
    upiQrUrl?: string;
    bankName?: string;
    accountName?: string;
    accountNumber?: string;
    ifscCode?: string;
    branch?: string;
  };
  locationDetails: {
    address?: string;
    landmarks?: string[];
    parking?: string;
    visitingHours?: string;
    mapEmbedUrl?: string;
    imageUrl?: string;
  };
  contactDetails?: {
    phone?: string;
    email?: string;
  };
}
