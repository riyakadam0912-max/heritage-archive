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
  familyMembers: [
    {
      id: 'gen1_ananth',
      generation: 1,
      lifespan: '1685 – 1752',
      photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop', // image kept here
      parents: [],
      children: [],
      // language content (name, bio, contributions, stories) moved to translations
    },
    {
      id: 'gen2_madhav',
      generation: 2,
      lifespan: '1728 – 1795',
      parents: ['gen1_ananth'],
      children: ['gen3_govind', 'gen3_vishwanath'],
      photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
      // language content (name, bio, contributions, stories) moved to translations
    },
    {
      id: 'gen3_govind',
      generation: 3,
      lifespan: '1765 – 1830',
      parents: ['gen2_madhav'],
      children: ['gen4_shankar'],
      photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
      // language content (name, bio, contributions, stories) moved to translations
    },
    {
      id: 'gen3_vishwanath',
      generation: 3,
      lifespan: '1770 – 1845',
      parents: ['gen2_madhav'],
      children: ['gen4_laxmi'],
      photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop',
      // language content (name, bio, contributions, stories) moved to translations
    },
    {
      id: 'gen4_shankar',
      generation: 4,
      lifespan: '1805 – 1878',
      parents: ['gen3_govind'],
      children: ['gen5_vasudev'],
      photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop',
      // language content (name, bio, contributions, stories) moved to translations
    },
    {
      id: 'gen4_laxmi',
      generation: 4,
      lifespan: '1812 – 1890',
      parents: ['gen3_vishwanath'],
      children: [],
      photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
      // language content (name, bio, contributions, stories) moved to translations
    },
    {
      id: 'gen5_vasudev',
      generation: 5,
      lifespan: '1848 – 1921',
      parents: ['gen4_shankar'],
      children: ['gen6_keshav'],
      photoUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop',
      // language content (name, bio, contributions, stories) moved to translations
    },
    {
      id: 'gen6_keshav',
      generation: 6,
      lifespan: '1890 – 1968',
      parents: ['gen5_vasudev'],
      children: ['gen7_sharad'],
      photoUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=300&auto=format&fit=crop',
      // language content (name, bio, contributions, stories) moved to translations
    },
    {
      id: 'gen7_sharad',
      generation: 7,
      lifespan: '1932 – 2015',
      parents: ['gen6_keshav'],
      children: ['gen8_anand', 'gen8_radha'],
      photoUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=300&auto=format&fit=crop',
      // language content (name, bio, contributions, stories) moved to translations
    },
    {
      id: 'gen8_anand',
      generation: 8,
      lifespan: '1965 – Present',
      parents: ['gen7_sharad'],
      children: [],
      photoUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=300&auto=format&fit=crop',
      // language content (name, bio, contributions, stories) moved to translations
    },
    {
      id: 'gen8_radha',
      generation: 8,
      lifespan: '1970 – Present',
      parents: ['gen7_sharad'],
      children: [],
      photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop'
    }
  ],
  timelineEvents: [
    { year: 1710, category: 'temple', documentUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=600' },
    { year: 1764, category: 'temple', documentUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600' },
    { year: 1802, category: 'trust' },
    { year: 1842, category: 'family', documentUrl: 'https://images.unsplash.com/photo-1532156002950-fc11005a9b76?q=80&w=600' },
    { year: 1889, category: 'trust' },
    { year: 1952, category: 'trust', documentUrl: 'https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=600' },
    { year: 1971, category: 'trust', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
    { year: 2018, category: 'temple', documentUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600' }
  ],
  galleryItems: [
    { id: 'g1', category: 'devi', imageUrl: templeImage, year: 'Present' },
    { id: 'g2', category: 'devi', imageUrl: bhagavatiDeviImage, year: 'Present' },
    { id: 'g3', category: 'temple', imageUrl: bestViewImage, year: 'Present' },
    { id: 'g4', category: 'temple', imageUrl: cityViewImage, year: 'Present' },
    { id: 'g5', category: 'temple', imageUrl: backsideViewImage, year: 'Present' }
  ],
  archiveDocuments: [
    { id: 'doc1', category: 'manuscripts', year: '1712', author: 'Ananthbhat Shastri', previewUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=500', fileType: 'image', fileSize: '4.8 MB' },
    { id: 'doc2', category: 'records', year: '1765', author: 'Peshwa Madhavrao I', previewUrl: 'https://images.unsplash.com/photo-1532156002950-fc11005a9b76?q=80&w=500', fileType: 'pdf', fileSize: '12.4 MB' },
    { id: 'doc3', category: 'letters', year: '1954', author: 'Keshav Rao Shastri & Vinoba Bhave', previewUrl: 'https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=500', fileType: 'pdf', fileSize: '3.1 MB' },
    { id: 'doc4', category: 'manuscripts', year: '1842', author: 'Shankarrao Shastri', previewUrl: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=500', fileType: 'image', fileSize: '9.5 MB' },
    { id: 'doc5', category: 'certificates', year: '1952', author: 'Charity Commissioner Bombay', previewUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=500', fileType: 'pdf', fileSize: '1.5 MB' },
    { id: 'doc6', category: 'records', year: '2015', author: 'Anand Rao Shastri', previewUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=500', fileType: 'pdf', fileSize: '18.2 MB' }
  ],
  oralHistories: [
    { id: 'oral1', speaker: 'Shantabai Shastri', relationship: 'Eldest Matriarch (Aged 94)', audioDuration: '4:15', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
    { id: 'oral2', speaker: 'Raghunath Bhat', relationship: 'Head Priest (Aged 78)', audioDuration: '3:30', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' }
  ],
  videoArchive: [
    { id: 'v1', duration: '5:24', videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-candles-burning-in-a-dark-room-41662-large.mp4', thumbnailUrl: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=500' },
    { id: 'v2', duration: '8:12', videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-carving-a-stone-block-43033-large.mp4', thumbnailUrl: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=500' }
  ],
  donationDetails: {
    upiId: 'bhagavatitrust@sbi',
    upiQrUrl: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?q=80&w=300&auto=format&fit=crop', // technical
    bankName: 'State Bank of India',
    accountName: 'Shree Bhagavati Devi Charitable Trust',
    accountNumber: '40991288371',
    ifscCode: 'SBIN0000281',
    branch: 'Dabhol Port Branch, Maharashtra'
  },
  locationDetails: {
    // language-dependent labels moved to translations; keep mapEmbedUrl (technical)
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15324.966023773176!2d73.1678125!3d17.5878125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDM1JzE2LjEiTiA3M8KwMTAnMDQuMSJF!5e0!3m2!1sen!2sin!4v1689999999999!5m2!1sen!2sin',
    imageUrl: cityViewImage,
  },
  contactDetails: {
    phone: '+91 2355 242 801',
    email: 'heritage@bhagavatidevitrust.org'
  }
};
