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

export interface GalleryItem {
  id: string;
  title: string;
  category: 'temple' | 'family' | 'festivals' | 'renovation' | 'documents';
  imageUrl: string;
  blurPlaceholder?: string;
  year?: string;
  description?: string;
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

export interface VideoItem {
  id: string;
  title: string;
  description: string;
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
  };
  contactDetails: {
    phone: string;
    email: string;
    officeAddress: string;
  };
}
