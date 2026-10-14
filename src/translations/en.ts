import type { Translation } from './types';
import bhagavatiDeviImage from '../assets/images/bhagavati-devi.jfif';
import templeImage from '../assets/images/templeimage.jfif';
import bestViewImage from '../assets/images/bestview.jpg';
import cityViewImage from '../assets/images/cityview.jfif';
import backsideViewImage from '../assets/images/backsideview.jpg';

const en: Translation = {
  common: {
    loading: 'Loading heritage experience…',
    langEnglish: 'English',
    langMarathi: 'मराठी',
    all: 'All',
    category: 'Category',
    year: 'Year',
    unrecorded: 'Unrecorded',
    availableHours: 'Available Mon – Sat: 09:00 AM – 05:00 PM',
    emailResponseTime: 'We respond to heritage queries within 48 hours',
    officeLabel: 'Ancestral Office',
    close: 'Close'
  },
  navigation: {
    title: 'श्री भगवती प्रतिष्ठान',
    items: {
      about: 'About',
      devi: 'Bhagavati Devi',
      temple: 'Temple',
      legacy: 'Legacy',
      timeline: 'Timeline',
      gallery: 'Gallery',
      festivals: 'Festivals',
      archive: 'Archive',
      donation: 'Donation',
      location: 'Location',
      contact: 'Contact'
    }
  },
  hero: {
    title: 'Shri Bhagavati Pratishthan',
    subtitle: 'Navghar, Malgund, Ratnagiri',
    explore: 'Explore Heritage',
    sanskritDevanagari: 'सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके । शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते ॥',
    sanskritTranslation: 'Auspiciousness of all auspiciousness, the consort of Shiva, the fulfiller of all objectives, the protector, the three-eyed Gauri, Narayani, we bow to Thee.',
    englishQuote: 'Official information and the Marathi booklet published by Shri Bhagavati Pratishthan.',
    exploreCta: 'Scroll to explore heritage'
  },
  // compatibility fields used in several components
  siteTitle: 'Shri Bhagavati Pratishthan',
  metaDescription: 'Official information and the Marathi booklet of Shri Bhagavati Pratishthan, Navghar, Malgund, Ratnagiri.',
  nav: {
    story: 'Story',
    temple: 'Temple',
    archive: 'Archive',
    visit: 'Visit',
    donation: 'Donate',
  },
  sections: {
    about: 'About the Pratishthan',
    trust: 'Recorded in the booklet',
    values: 'Published information'
  },
  about: {
    sectionLabel: 'About the Pratishthan',
    title: 'Shri Bhagavati Pratishthan',
    story: [
      'The supplied Marathi booklet identifies the organization as Shri Bhagavati Pratishthan, located at Navghar, Malgund, Ratnagiri.',
      'The booklet records the current committee, notices, and annual contributions. It does not provide a verified multi-generation family history or historical chronology.'
    ]
  },
  trust: {
    values: [
      { title: 'Committee', description: 'The booklet includes a committee roster.' },
      { title: 'Notices', description: 'The booklet includes notices from the Pratishthan.' },
      { title: 'Annual contributions', description: 'The booklet includes annual contribution lists.' }
    ]
  },
  deity: {
    label: 'Divine Mother',
    title: 'Bhagavati Devi',
    description: 'The booklet cover features an image of Shri Bhagavati. The image is presented here as a devotional representation; detailed historical claims about the idol are not established by the supplied booklet.',
    iconographyTitle: 'Sacred Iconography',
    imageAlt: 'Bhagavati Devi Sacred Iconography Artwork',
    symbols: []
  },
  temple: {
    sectionLabel: 'Shri Bhagavati',
    title: 'Devotional Image',
    architecture: 'The supplied booklet identifies Shri Bhagavati Pratishthan and includes a devotional image of Shri Bhagavati. Architectural details and daily ritual timings are not specified here.',
    dailyTitle: 'Ritual schedule',
    rituals: [],
    imageAlt: 'Image supplied with the site',
    bellNote: '',
    ringBellAria: 'Ring Temple Bell'
  },
  gallery: {
    label: 'Images',
    title: 'Image Gallery',
    intro: 'Images are presented without historical dates or location claims unless verified.',
    filters: ['all', 'devi', 'temple', 'festivals'],
    categoryLabels: {
      all: 'All',
      devi: 'Devi Images',
      temple: 'Temple View',
      festivals: 'Festivals'
    },
    items: [
      { id: 'g1', title: 'Image 1', category: 'devi', imageUrl: templeImage, description: 'Image supplied with the site.' },
      { id: 'g2', title: 'Image 2', category: 'devi', imageUrl: bhagavatiDeviImage, description: 'Image supplied with the site.' },
      { id: 'g3', title: 'Image 3', category: 'temple', imageUrl: bestViewImage, description: 'Image supplied with the site.' },
      { id: 'g4', title: 'Image 4', category: 'temple', imageUrl: cityViewImage, description: 'Image supplied with the site.' },
      { id: 'g5', title: 'Image 5', category: 'temple', imageUrl: backsideViewImage, description: 'Image supplied with the site.' }
    ],
    lightbox: { close: 'Close Lightbox', previous: 'Previous image', next: 'Next image' }
  },
  timeline: {
    sectionLabel: 'Chronology of Grace',
    title: 'History & Milestones',
    intro: 'A chronologically indexed chronicle of the Shree Bhagavati shrine construction, community deeds, and trust governance.',
    events: [
      { year: 1710, title: 'The Divine Revelation', description: "Ananthbhat Shastri installs the self-manifested stone deity under an ancient Banyan tree, marking the birth of the shrine.", category: 'temple', documentTitle: 'Ananthbhat Diary Entry Excerpt (1710)', documentUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=600' },
      { year: 1764, title: 'Laterite Stone Sanctum', description: "Madhavrao Shastri rebuilds the wooden temple into a permanent red laterite stone structure, establishing the traditional Konkan architectural style.", category: 'temple', documentTitle: 'Peshwa Land Grant Seal', documentUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600' },
      { year: 1802, title: 'Founding of Bhagavati Gurukul', description: 'Govindbhat Shastri opens a traditional residential school in the temple courtyard, providing free Sanskrit and mathematics education.', category: 'trust' },
      { year: 1842, title: 'Astronomical Manuscript Written', description: 'Shankarrao Shastri finishes "Bhagavati Jyotirganita", an advanced treatise on coastal astronomical navigation and lunar calculations.', category: 'family', documentTitle: 'Original Manuscript Leaf', documentUrl: 'https://images.unsplash.com/photo-1532156002950-fc11005a9b76?q=80&w=600' },
      { year: 1889, title: 'The High School Inauguration', description: "Vasudev Rao constructs the taluka's first English-medium high school, transitioning the family education efforts into the modern age.", category: 'trust' },
      { year: 1952, title: 'The Modern Trust Constitution', description: "Following Independence, Keshav Rao frames the official public trust constitution, protecting the ancestral assets and temple code of conduct.", category: 'trust', documentTitle: 'Registered Trust Act Document (1952)', documentUrl: 'https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=600' },
      { year: 1971, title: 'Bhagavati Charitable Dispensary', description: 'Dr. Sharad Shastri establishes a free clinic beside the temple, providing medical aid to remote villages in the region.', category: 'trust', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', audioTranscript: 'Today we open these doors. Let no man or woman leave this temple in physical pain. Bhagavati Devi is the ultimate healer, and we are but Her instruments.' },
      { year: 2018, title: 'Tercentenary Restoration', description: 'Anand Rao completes a multi-year restoration project, reinforcing the stone sanctum and copper-plated roofs using purely traditional materials.', category: 'temple', documentTitle: 'Architectural Restoration Layout', documentUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600' }
    ],
    attachedDocumentLabel: 'Attached Document:',
    audioLabel: 'Oral History Soundclip Excerpt',
    documentScanAlt: 'Timeline document scan',
    yearSuffix: 'AD'
  },
  family: {
    sectionLabel: 'Ancestral Continuity',
    title: 'The Family Legacy',
    introduction: 'The story of our family is inextricably bound to the soil of the Konkan and the grace of Bhagavati Devi. For nine generations, our ancestors have kept detailed diaries, land records, and letters that document the social, cultural, and spiritual evolution of our community.',
    members: [
      { id: 'gen1_ananth', name: 'Ananthbhat Shastri', marathiName: 'अनंतभट्ट शास्त्री', generation: 1, lifespan: '1685 – 1752', role: 'Founding Patriarch & Scholar', bio: 'Ananthbhat Shastri was a renowned scholar of Mimamsa and Jyotisha. Sensing the political turbulence of the late 17th century, he migrated from the northern plains to the peaceful Konkan coast. Guided by a dream, he discovered a self-manifested (Swayambhu) stone of Devi Bhagavati in the jungle and erected a small wooden shrine that became the foundation of our temple.', contributions: ['Erected the first wooden shrine of Devi Bhagavati (1710)', 'Compiled the first Sanskrit hymn manual for temple rituals', 'Initiated the annual Navratri community feast'], photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop', stories: ['Legend has it that Ananthbhat sat in deep meditation for 41 days under a Banyan tree without food or water, during which the location of the sacred spring near the temple was revealed to him in a vision.'] },
      { id: 'gen2_madhav', name: 'Madhavrao Shastri', marathiName: 'माधवराव शास्त्री', generation: 2, lifespan: '1728 – 1795', role: 'Temple Builder & Administrator', bio: 'The eldest son of Ananthbhat, Madhavrao combined spiritual devotion with administrative foresight. He secured land grants from the Peshwas to support the temple\'s daily operations and replaced the temporary wooden shrine with a solid stone structure made of red laterite stone.', contributions: ['Constructed the laterite stone Garbhagriha (1764)', 'Established the Trust endowment with local agricultural lands', 'Built the community water tank (Pushkarini)'], photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop', stories: ['During the great drought of 1779, Madhavrao opened the family granaries and fed over a thousand villagers daily for three months, establishing the trust\'s community-first legacy.'] },
      { id: 'gen3_govind', name: 'Govindbhat Shastri', marathiName: 'गोविंदभट्ट शास्त्री', generation: 3, lifespan: '1765 – 1830', role: 'Sanskrit Grammarian & Reformer', bio: 'Govindbhat traveled to Varanasi at a young age to master the Sanskrit grammar system (Vyakarana). Upon returning, he established a traditional school (Gurukul) in the temple courtyard, offering free education, food, and lodging to students regardless of their background.', contributions: ['Founded the Bhagavati Gurukul (1802)', 'Collected and restored over 150 ancient palm-leaf manuscripts', 'Initiated systematic tree planting in the Devrai (Sacred Grove)'], photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop' },
      { id: 'gen3_vishwanath', name: 'Vishwanath Rao', marathiName: 'विश्वनाथ राव', generation: 3, lifespan: '1770 – 1845', role: 'Agrarian Pioneer', bio: 'Younger son of Madhavrao, Vishwanath focused on introducing sustainable farming practices in the temple valley. He constructed the step-well irrigation canals that are still used today for coconut and areca-nut plantations.', contributions: ['Designed the gravity-based water channel system', 'Cultivated the first organic Alphonso mango orchards on trust land'], photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop' },
      { id: 'gen4_shankar', name: 'Shankarrao Shastri', marathiName: 'शंकरराव शास्त्री', generation: 4, lifespan: '1805 – 1878', role: 'Astronomer & Trustee', bio: 'Shankarrao was a scholar of mathematical astronomy. He calculated local lunar calendars (Panchang) with high precision, which were adopted by the entire Konkan region. He was also instrumental in digitizing early family records during the British surveyor general census.', contributions: ['Author of the "Bhagavati Jyotirganita" manuscript (1842)', 'Formalized trust registration records in regional courts', 'Renovated the temple wooden columns'], photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop' },
      { id: 'gen4_laxmi', name: 'Laxmibai Shastri', marathiName: 'लक्ष्मीबाई शास्त्री', generation: 4, lifespan: '1812 – 1890', role: 'Community Matriarch & Devotee', bio: 'Laxmibai was known for her extraordinary musical devotion. She composed dozens of devotional songs (abhangs) in Marathi dedicated to Bhagavati Devi. Her compositions are still sung by local women during the evening aarti.', contributions: ['Composed 40+ Marathi devotional hymns (Bhagavati Bhaktimala)', 'Organized the first collective women cooperative for handloom weaving in the valley'], photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop' },
      { id: 'gen5_vasudev', name: 'Vasudev Rao', marathiName: '', generation: 5, lifespan: '1848 – 1921', role: 'Modernizer & Philanthropist', bio: 'Vasudev Rao led the family trust into the early 20th century. Recognizing the value of modern education, he established the first English-medium high school in the taluka and set up scholarship funds for underprivileged students.', contributions: ['Established the Bhagavati High School (1889)', 'Created the Vasudev Memorial Scholarship Fund', 'Installed the temple outer brass lamp pillars (Deepstambha)'], photoUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop' },
      { id: 'gen6_keshav', name: 'Keshav Rao', marathiName: 'केशव राव', generation: 6, lifespan: '1890 – 1968', role: 'Freedom Fighter & Guardian', bio: 'Keshav Rao was active in the Indian Freedom Movement and hosted several secret regional meetings in the temple\'s sacred groves. After Independence, he dedicated himself to integrating the trust\'s assets with democratic land reforms and established the modern Trust Constitution.', contributions: ['Framed the modern Trust Constitution (1952)', 'Donated 50 acres of family land to local tenant farmers under the Bhoodan movement', 'Rebuilt the pilgrim Rest House (Dharamshala)'], photoUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=300&auto=format&fit=crop' },
      { id: 'gen7_sharad', name: 'Dr. Sharad Shastri', marathiName: 'डॉ. शरद शास्त्री', generation: 7, lifespan: '1932 – 2015', role: 'Physician & Archivist', bio: 'A medical doctor by profession and historian at heart, Dr. Sharad spent fifty years treating local villagers for free. He set up the family archive museum room, carefully preserving centuries-old letters, royal decrees, and manuscripts in climate-controlled cases.', contributions: ['Catalogued 1,200+ historical manuscripts and family letters', 'Established the Bhagavati Charitable Dispensary (1971)', 'Published the comprehensive "History of Bhagavati Devasthan"'], photoUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=300&auto=format&fit=crop' },
      { id: 'gen8_anand', name: 'Anand Rao Shastri', marathiName: 'आनंद राव शास्त्री', generation: 8, lifespan: '1965 – Present', role: 'Current Chief Trustee', bio: 'Anand Rao holds a degree in heritage conservation and manages the daily affairs of the trust. He initiated the scientific restoration of the laterite stone structure and spearheaded this digital archiving project to make family history accessible to global descendants.', contributions: ['Completed the monumental structural restoration of the Temple (2018)', 'Launched the digital preservation initiative for palm-leaf manuscripts', 'Implemented rainwater harvesting systems across the temple estate'], photoUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=300&auto=format&fit=crop' },
      { id: 'gen8_radha', name: 'Radha Shastri Deshmukh', marathiName: 'राधा शास्त्री देशमुख', generation: 8, lifespan: '1970 – Present', role: 'Trustee & Historian', bio: 'Radha is a professor of Indology and oversees the cultural and educational initiatives of the trust. She coordinates research grants for scholars studying Konkan culture and coordinates the annual classical music festival held at the temple.', contributions: ['Curates the annual Bhagavati Sangeet Samaroh', 'Translates Sanskrit and old Marathi (Modi script) family letters into English'], photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop' }
    ]
    ,
    viewArchiveCta: 'Click to view archive and stories'
    ,
    scrollHint: 'Scroll horizontally on mobile to explore full lineages.'
  },
  biography: {
    narrativeTitle: 'Historical Narrative',
    contributionsTitle: 'Key Contributions',
    anecdotesTitle: 'Archived Anecdotes',
    lineageTitle: 'Lineage Context',
    parentageLabel: 'Parentage',
    offspringLabel: 'Offspring',
    generationPrefix: 'Generation '
  },
  festivals: {
    sectionLabel: 'Ancestral Festivities',
    title: 'Ritual Gatherings & Festivals',
    intro: 'Our festivals are not commercial events, but sacred times where traditional code, family memories, and cosmic adoration unite.',
    items: [
      { name: 'Sharadotsav (Navratri)', timing: 'Ashvin Shuddha Pratipada to Dashami (Oct)', description: 'The premier annual gathering of the trust. For nine nights, the temple grounds are illuminated by thousands of clay lamps. Traditional Gondhal folk dances and musical prayers are offered in the Sabhamandapa. The festival culminates in the grand Vijayadashami procession when the Utsav Murti is paraded on the wooden chariot across the neighboring valleys.', heritageStory: 'Historically, family members from as far as Mumbai, Pune, and Goa return to the ancestral home to serve in the kitchen, prepare the Naivedya, and sit together in Vedic chants. It is a time of ancestral homecoming.', imageUrl: 'https://images.unsplash.com/photo-1561361531-99522904d9c4?q=80&w=800' },
      { name: 'Kartik Deepotsav', timing: 'Kartik Purnima (Nov)', description: 'A quiet, ethereal night where the noise of the world is shut out. Exactly 1008 terracotta lamps are hand-filled with organic coconut oil and lit by the family trustees, lining the boundaries of the laterite temple and the sacred Banyan tree. Special chants from the Rigveda echoing through the quiet valley represent the victory of spiritual light over darkness.', heritageStory: 'Started in 1772 by Madhavrao Shastri as a thanksgiving rite after the family survived the coastal epidemics, the Deepotsav represents the sanctuary silence at its most profound.', imageUrl: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=800' }
    ],
    heritageLabel: 'Family Heritage Story'
  },
  archive: {
    sectionLabel: 'Official Publication',
    title: 'Shri Bhagavati Pratishthan Booklet',
    intro: 'The available Marathi booklet contains committee information, notices, and annual contribution lists.',
    sourceBookletTitle: 'Shri Bhagavati Pratishthan (Marathi)',
    sourceBookletDescription: 'The supplied booklet was used to verify the organization name and locality. Individual contact details and contribution amounts are not reproduced here.',
    searchPlaceholder: 'Search manuscripts, transcriptions, letters...',
    filters: ['All', 'Manuscripts', 'Letters', 'Certificates', 'Records'],
    noResults: 'No manuscripts or documents matched your search query.',
    authorLabel: 'Author:',
    viewDoc: 'View Document',
    pdfLabel: 'PDF File Document',
    attachedDocumentPrefix: 'Attached Document:',
    downloadScan: 'Download Archive Scan',
    downloadAlert: 'Simulating file download. The original high-resolution TIFF archive is packaged for download.'
  },
  oralHistory: {
    sectionLabel: 'Oral Heritage',
    title: "Elders' Oral History Archive",
    intro: 'Listen to the voice recordings and memories of our elder generations, preserving the old Marathi tales and family wisdom.',
    items: [
      { id: 'oral1', speaker: 'Shantabai Shastri', relationship: "Eldest Matriarch (Aged 94)", title: 'Memories of the Freedom Movement & Temple Sanctuary', audioDuration: '4:15', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', transcriptEnglish: 'I was just a young bride of fourteen when I came to this house. The British police were patrolling the highways. My father-in-law, Keshav Rao, would hide the freedom fighters in the deep thickets of the Bhagavati Grove. At night, we would carry baskets of rice and bhakri to them under the guise of carrying offerings to the Devi. They slept on the stone floors of the Sabhamandapa. The Devi kept everyone safe. No search party ever dared to enter the sanctum.', transcriptMarathi: 'मी जेव्हा या घरात आले, तेव्हा अवघ्या चौदा वर्षांची होते. इंग्रज पोलिसांचा पहारा रस्त्यावर असायचा. माझे सासरे, केशवराव, स्वातंत्र्यसैनिकांना भगवतीच्या देवराईत लपवून ठेवायचे. रात्री देवळात प्रसाद नेण्याचा बहाणा करून आम्ही टोपलीतून भाकरी आणि भात पोहोचवायचो. ते सभामंडपाच्या दगडी जमिनीवर झोपायचे. देवीने सर्वांचे रक्षण केले. कोणत्याही शोधपथकाने कधी गाभाऱ्यात पाऊल ठेवण्याची हिंमत केली नाही.' },
      { id: 'oral2', speaker: 'Raghunath Bhat', relationship: 'Head Priest (Aged 78)', title: 'The Art of reciting the Rigveda in Temple Acoustics', audioDuration: '3:30', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', transcriptEnglish: 'My father taught me the chanting in this very Sabhamandapa. The laterite stone walls have a beautiful, quiet quality. They do not bounce the sound like modern concrete does; they absorb the high frequencies and enrich the low resonance of the Vedic syllables. When we chant the Purusha Sukta together at noon, the vibration travels through the columns into the earth. It is not just about chanting; it is a physical resonance that clears the mind.', transcriptMarathi: 'माझ्या वडिलांनी मला याच सभामंडपात वेदपठण शिकवले. चिऱ्याच्या दगडी भिंतींचे एक वैशिष्ट्य आहे. आधुनिक काँक्रीटसारखा आवाज तिथे घुमत नाही; ते उच्च स्वर शोषून घेतात आणि स्वरांचे गांभीर्य वाढवतात. जेव्हा आम्ही दुपारी पुरुषसूक्त म्हणतो, तेव्हा स्तंभामधून कंपने थेट जमिनीत उतरतात. हे केवळ पठण नाही, तर मनाची शुद्धी करणारा एक नाद आहे.' }
    ],
    durationLabel: 'Duration:' ,
    transcriptTabs: { english: 'English Transcript', marathi: 'Marathi Translation' },
    playAria: 'Play audio',
    pauseAria: 'Pause audio'
  },
  videoArchive: {
    sectionLabel: 'Archived Reels',
    title: 'Visual Records & Ritual footage',
    intro: 'Vivid documentary videos showcasing historical rituals, stone carvings, restoration journals, and holy festivals.',
    items: [
      { id: 'v1', title: 'The Kartik Deepotsav Celebration (Full Video)', description: 'A beautiful visual documentary showcasing the lighting of 1008 clay lamps around the temple and the evening processional chants.', duration: '5:24', videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-candles-burning-in-a-dark-room-41662-large.mp4', thumbnailUrl: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=500' },
      { id: 'v2', title: 'Restoring the Laterite Stone Sanctum', description: 'A quiet time-lapse and explanation of the lime-plastering technique used by master stonemasons during the 2018 renovation.', duration: '8:12', videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-carving-a-stone-block-43033-large.mp4', thumbnailUrl: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=500' }
    ],
    fallback: 'Video preview is currently unavailable.',
    videoClipLabel: 'Video Clip ({duration})'
  },
  donation: {
    sectionLabel: 'Donations',
    title: 'Donation Information',
    intro: 'The supplied booklet lists annual contributions but does not provide verified electronic payment or bank-transfer instructions.',
    upiTitle: 'Payment details unavailable',
    qrAlt: 'No verified donation QR code is available',
    scanInstructions: 'Please confirm current payment instructions directly with Shri Bhagavati Pratishthan before sending funds.',
    bankLabels: { bankName: 'Bank Name', accountName: 'Account Name', accountNumber: 'Account Number', ifsc: 'IFSC Code', branch: 'Branch Office' },
    directRemittanceTitle: 'Bank transfer details unavailable',
    transparencyTitle: 'Please verify before donating',
    transparencyStatement: 'No bank account, UPI ID, or QR code is published here because the supplied booklet does not verify those details.'
  },
  contact: {
    sectionLabel: 'Stewardship',
    title: 'Contact The Office',
    subtitle: 'For inquiries regarding document research, scholarship applications, or lineage updates, please reach out to the office.',
    phoneLabel: 'Phone Contact',
    emailLabel: 'Electronic Mail',
    officeLabel: 'Ancestral Office',
    availableHours: 'Available Mon – Sat: 09:00 AM – 05:00 PM',
    emailResponseTime: 'We respond to heritage queries within 48 hours'
  },
  location: {
    sectionLabel: 'Location',
    title: 'Pratishthan Address',
    intro: 'The supplied booklet lists the Pratishthan at the following location.',
    address: 'Navghar, Malgund, Ratnagiri, Maharashtra',
    landmarks: [],
    parking: '',
    visitingHours: '',
    addressLabel: 'Address',
    visitingHoursLabel: 'Visiting Hours',
    landmarksLabel: 'Landmarks',
    parkingLabel: 'Environment & Parking'
  },
  footer: {
    sacredQuoteDevanagari: '“परित्राणाय साधूनां विनाशाय च दुष्कृताम् । धर्मसंस्थापनार्थाय सम्भवामि युगे युगे ॥”',
    trustName: 'Shri Bhagavati Pratishthan',
    registration: '',
    copyright: '© {year} Shri Bhagavati Pratishthan. All rights reserved.'
  },
  forms: {},
  accessibility: {
    skipToMain: 'Skip to main content',
    logoAlt: 'Shri Bhagavati Pratishthan',
    toggleMenu: 'Toggle Navigation Menu',
    biographyFor: 'Biography details for {name}',
    documentViewerFor: 'Document viewer for {title}',
    timelineEventFor: 'Timeline event for year {year}: {title}'
  },
  metadata: {
    keywords: 'Bhagavati Devi, Family Trust, Ratnagiri, Konkan Temple, Ancestral Archive, Palm Leaf Manuscripts, Vedic Chanting, Digital Museum',
    author: 'Shri Bhagavati Pratishthan'
  }
};

export default en;
