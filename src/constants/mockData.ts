import type { TechnicalTrustData } from '../types/content';
import bhagavatiDeviImage from '../assets/images/bhagavati-devi.jfif';
import templeImage from '../assets/images/templeimage.jfif';
import bestViewImage from '../assets/images/bestview.jpg';
import cityViewImage from '../assets/images/cityview.jfif';
import backsideViewImage from '../assets/images/backsideview.jpg';

export type {
  TrustData,
  TrustValue,
  DeitySymbol,
  TempleRitual,
  FamilyMember,
  TimelineEvent,
  GalleryItem,
  ArchiveDocument,
  OralHistory,
  VideoItem,
} from '../types/content';

export const mockTrustData: TechnicalTrustData = {
  logoUrl: bhagavatiDeviImage,
  heroDeityImage: bhagavatiDeviImage,
  sanskritQuote: {
    devanagari: 'सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके । शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते ॥',
    transliteration: 'Sarva-Mangala-Maangallye Shive Sarvaartha-Saadhike | Sharannye Tryambake Gauri Naaraayanni Namo-Astu Te ||'
  },
  familyMembers: [],
  timelineEvents: [],
  galleryItems: [
    { id: 'g1', category: 'devi', imageUrl: templeImage, year: 'Present' },
    { id: 'g2', category: 'devi', imageUrl: bhagavatiDeviImage, year: 'Present' },
    { id: 'g3', category: 'temple', imageUrl: bestViewImage, year: 'Present' },
    { id: 'g4', category: 'temple', imageUrl: cityViewImage, year: 'Present' },
    { id: 'g5', category: 'temple', imageUrl: backsideViewImage, year: 'Present' }
  ],
  archiveDocuments: [],
  oralHistories: [],
  videoArchive: [],
  donationDetails: {},
  locationDetails: {},
  contactDetails: {}
};
