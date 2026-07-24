import type { TrustData } from '../types/content';

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

export const mockTrustData: TrustData = {
  logoUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop', // Abstract golden geometry/lotus
  heroDeityImage: 'https://images.unsplash.com/photo-1609137144814-531e21b16c80?q=80&w=1200&auto=format&fit=crop', // Divine Indian classical art / Devi
  sanskritQuote: {
    devanagari: 'सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके । शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते ॥',
    transliteration: 'Sarva-Mangala-Maangallye Shive Sarvaartha-Saadhike | Sharannye Tryambake Gauri Naaraayanni Namo-Astu Te ||',
    translation: 'Auspiciousness of all auspiciousness, the consort of Shiva, the fulfiller of all objectives, the protector, the three-eyed Gauri, Narayani, we bow to Thee.'
  },
  englishQuote: 'Preserving the sacred flame of spiritual heritage and the ancient customs of our ancestors for seven hundred years.',
  aboutStory: [
    'Nestled in the lush Konkan coastland, where the Sahyadri mountains meet the Arabian Sea, our family trust has stood as the guardian of the sacred shrine of Devi Bhagavati for over three centuries.',
    'Founded by our ancestors in the late 17th century, the trust was established not to rule, but to serve—to maintain the daily prayers, protect the holy groves (Devrai), and preserve the palm-leaf manuscripts detailing the traditional rites and lineage history.',
    'Generation after generation, the family has meticulously transcribed historical documents, funded community infrastructure, and kept the lamp of Bhagavati Devi burning through periods of changing empires, colonial struggles, and modern transformations.'
  ],
  trustValues: [
    {
      title: 'Devotion (Bhakti)',
      description: 'Serving the Divine Mother Bhagavati as the ultimate source of energy, wisdom, and cosmic balance in our lives.'
    },
    {
      title: 'Preservation (Sanrakshan)',
      description: 'Protecting our ancestral documents, historical artifacts, and Konkan spiritual traditions from fading into oblivion.'
    },
    {
      title: 'Duty (Dharma)',
      description: 'Fulfilling our obligations to the community through silent charity, ecological restoration of temple land, and moral stewardship.'
    },
    {
      title: 'Continuity (Parampara)',
      description: 'Passing on the sacred rituals, classical Sanskrit scholarship, and oral histories to the younger generations.'
    }
  ],
  deityDescription: 'Bhagavati Devi, the Supreme Mother Goddess, is worshipped as the source of Aadishakti—the cosmic power that maintains order and sustains all life. In the Konkan region, She is revered in Her peaceful yet powerful form, sitting majestically on a golden throne under the shade of ancient trees. She represents the combined energies of Durga (courage), Lakshmi (grace), and Saraswati (wisdom).',
  deitySymbols: [
    {
      name: 'The Trishula (Trident)',
      meaning: 'Symbolizes the balance of the three gunas (Sattva, Rajas, Tamas) and mastery over the physical, mental, and spiritual planes.',
      iconName: 'Shield'
    },
    {
      name: 'The Golden Lotus',
      meaning: 'Represents pure detachment, spiritual awakening, and beauty blooming amidst the challenges of the worldly ocean.',
      iconName: 'Flower'
    },
    {
      name: 'The Conch (Shankha)',
      meaning: 'The primordial sound of creation, invoking purity and chasing away negative energies from the sanctuary.',
      iconName: 'Volume2'
    },
    {
      name: 'The Oil Lamp (Diya)',
      meaning: 'Representing the removal of darkness (ignorance) through the light of divine wisdom and selflessness.',
      iconName: 'Flame'
    }
  ],
  templeArchitecture: 'Our ancestral temple is a classic example of Konkan wooden and stone craftsmanship. The sanctum sanctorum (Garbhagriha) is built of local red laterite stone (Chira) which absorbs the monsoon moisture, keeping the inner chamber cool and fragrant with incense. The exterior roof features high-sloped terracotta tiles designed to withstand the heavy coastal downpours, while the central hall (Sabhamandapa) is adorned with hand-carved teakwood pillars depicting the ten incarnations of Vishnu.',
  templeRituals: [
    {
      time: '05:30 AM',
      name: 'Kakad Aarti',
      description: 'The morning awakening ritual of Devi Bhagavati, accompanied by soft singing of traditional hymns and lighting of camphor.'
    },
    {
      time: '08:00 AM',
      name: 'Abhishek & Shringar',
      description: 'Holy bathing of the deity with sacred waters, milk, and honey, followed by decoration with fresh marigolds and jasmine.'
    },
    {
      time: '12:00 PM',
      name: 'Maha Naivedya',
      description: 'Offering of traditional coastal vegetarian cuisine (sweet modaks, coconut rice) to the deity, followed by lunch distribution.'
    },
    {
      time: '07:00 PM',
      name: 'Maha Aarti & Deepotsav',
      description: 'The spectacular evening light ceremony. Hundreds of clay lamps are lit around the temple courtyard to the sound of bells.'
    }
  ],
  familyLegacyIntroduction: 'The story of our family is inextricably bound to the soil of the Konkan and the grace of Bhagavati Devi. For nine generations, our ancestors have kept detailed diaries, land records, and letters that document the social, cultural, and spiritual evolution of our community.',
  familyMembers: [
    {
      id: 'gen1_ananth',
      name: 'Ananthbhat Shastri',
      marathiName: 'अनंतभट्ट शास्त्री',
      generation: 1,
      lifespan: '1685 – 1752',
      role: 'Founding Patriarch & Scholar',
      bio: 'Ananthbhat Shastri was a renowned scholar of Mimamsa and Jyotisha. Sensing the political turbulence of the late 17th century, he migrated from the northern plains to the peaceful Konkan coast. Guided by a dream, he discovered a self-manifested (Swayambhu) stone of Devi Bhagavati in the jungle and erected a small wooden shrine that became the foundation of our temple.',
      contributions: [
        'Erected the first wooden shrine of Devi Bhagavati (1710)',
        'Compiled the first Sanskrit hymn manual for temple rituals',
        'Initiated the annual Navratri community feast'
      ],
      photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop', // Vintage pencil art placeholder style
      stories: [
        'Legend has it that Ananthbhat sat in deep meditation for 41 days under a Banyan tree without food or water, during which the location of the sacred spring near the temple was revealed to him in a vision.'
      ]
    },
    {
      id: 'gen2_madhav',
      name: 'Madhavrao Shastri',
      marathiName: 'माधवराव शास्त्री',
      generation: 2,
      lifespan: '1728 – 1795',
      role: 'Temple Builder & Administrator',
      bio: 'The eldest son of Ananthbhat, Madhavrao combined spiritual devotion with administrative foresight. He secured land grants from the Peshwas to support the temple\'s daily operations and replaced the temporary wooden shrine with a solid stone structure made of red laterite stone.',
      parents: ['gen1_ananth'],
      children: ['gen3_govind', 'gen3_vishwanath'],
      contributions: [
        'Constructed the laterite stone Garbhagriha (1764)',
        'Established the Trust endowment with local agricultural lands',
        'Built the community water tank (Pushkarini)'
      ],
      photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
      stories: [
        'During the great drought of 1779, Madhavrao opened the family granaries and fed over a thousand villagers daily for three months, establishing the trust\'s community-first legacy.'
      ]
    },
    {
      id: 'gen3_govind',
      name: 'Govindbhat Shastri',
      marathiName: 'गोविंदभट्ट शास्त्री',
      generation: 3,
      lifespan: '1765 – 1830',
      role: 'Sanskrit Grammarian & Reformer',
      bio: 'Govindbhat traveled to Varanasi at a young age to master the Sanskrit grammar system (Vyakarana). Upon returning, he established a traditional school (Gurukul) in the temple courtyard, offering free education, food, and lodging to students regardless of their background.',
      parents: ['gen2_madhav'],
      children: ['gen4_shankar'],
      contributions: [
        'Founded the Bhagavati Gurukul (1802)',
        'Collected and restored over 150 ancient palm-leaf manuscripts',
        'Initiated systematic tree planting in the Devrai (Sacred Grove)'
      ],
      photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop'
    },
    {
      id: 'gen3_vishwanath',
      name: 'Vishwanath Rao',
      marathiName: 'विश्वनाथ राव',
      generation: 3,
      lifespan: '1770 – 1845',
      role: 'Agrarian Pioneer',
      bio: 'Younger son of Madhavrao, Vishwanath focused on introducing sustainable farming practices in the temple valley. He constructed the step-well irrigation canals that are still used today for coconut and areca-nut plantations.',
      parents: ['gen2_madhav'],
      children: ['gen4_laxmi'],
      contributions: [
        'Designed the gravity-based water channel system',
        'Cultivated the first organic Alphonso mango orchards on trust land'
      ],
      photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop'
    },
    {
      id: 'gen4_shankar',
      name: 'Shankarrao Shastri',
      marathiName: 'शंकरराव शास्त्री',
      generation: 4,
      lifespan: '1805 – 1878',
      role: 'Astronomer & Trustee',
      bio: 'Shankarrao was a scholar of mathematical astronomy. He calculated local lunar calendars (Panchang) with high precision, which were adopted by the entire Konkan region. He was also instrumental in digitizing early family records during the British surveyor general census.',
      parents: ['gen3_govind'],
      children: ['gen5_vasudev'],
      contributions: [
        'Author of the "Bhagavati Jyotirganita" manuscript (1842)',
        'Formalized trust registration records in regional courts',
        'Renovated the temple wooden columns'
      ],
      photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop'
    },
    {
      id: 'gen4_laxmi',
      name: 'Laxmibai Shastri',
      marathiName: 'लक्ष्मीबाई शास्त्री',
      generation: 4,
      lifespan: '1812 – 1890',
      role: 'Community Matriarch & Devotee',
      bio: 'Laxmibai was known for her extraordinary musical devotion. She composed dozens of devotional songs (abhangs) in Marathi dedicated to Bhagavati Devi. Her compositions are still sung by local women during the evening aarti.',
      parents: ['gen3_vishwanath'],
      children: [],
      contributions: [
        'Composed 40+ Marathi devotional hymns (Bhagavati Bhaktimala)',
        'Organized the first collective women cooperative for handloom weaving in the valley'
      ],
      photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop'
    },
    {
      id: 'gen5_vasudev',
      name: 'Vasudev Rao',
      marathiName: 'वासुदेव राव',
      generation: 5,
      lifespan: '1848 – 1921',
      role: 'Modernizer & Philanthropist',
      bio: 'Vasudev Rao led the family trust into the early 20th century. Recognizing the value of modern education, he established the first English-medium high school in the taluka and set up scholarship funds for underprivileged students.',
      parents: ['gen4_shankar'],
      children: ['gen6_keshav'],
      contributions: [
        'Established the Bhagavati High School (1889)',
        'Created the Vasudev Memorial Scholarship Fund',
        'Installed the temple outer brass lamp pillars (Deepstambha)'
      ],
      photoUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop'
    },
    {
      id: 'gen6_keshav',
      name: 'Keshav Rao',
      marathiName: 'केशव राव',
      generation: 6,
      lifespan: '1890 – 1968',
      role: 'Freedom Fighter & Guardian',
      bio: 'Keshav Rao was active in the Indian Freedom Movement and hosted several secret regional meetings in the temple\'s sacred groves. After Independence, he dedicated himself to integrating the trust\'s assets with democratic land reforms and established the modern Trust Constitution.',
      parents: ['gen5_vasudev'],
      children: ['gen7_sharad'],
      contributions: [
        'Framed the modern Trust Constitution (1952)',
        'Donated 50 acres of family land to local tenant farmers under the Bhoodan movement',
        'Rebuilt the pilgrim Rest House (Dharamshala)'
      ],
      photoUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=300&auto=format&fit=crop'
    },
    {
      id: 'gen7_sharad',
      name: 'Dr. Sharad Shastri',
      marathiName: 'डॉ. शरद शास्त्री',
      generation: 7,
      lifespan: '1932 – 2015',
      role: 'Physician & Archivist',
      bio: 'A medical doctor by profession and historian at heart, Dr. Sharad spent fifty years treating local villagers for free. He set up the family archive museum room, carefully preserving centuries-old letters, royal decrees, and manuscripts in climate-controlled cases.',
      parents: ['gen6_keshav'],
      children: ['gen8_anand', 'gen8_radha'],
      contributions: [
        'Catalogued 1,200+ historical manuscripts and family letters',
        'Established the Bhagavati Charitable Dispensary (1971)',
        'Published the comprehensive "History of Bhagavati Devasthan"'
      ],
      photoUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=300&auto=format&fit=crop'
    },
    {
      id: 'gen8_anand',
      name: 'Anand Rao Shastri',
      marathiName: 'आनंद राव शास्त्री',
      generation: 8,
      lifespan: '1965 – Present',
      role: 'Current Chief Trustee',
      bio: 'Anand Rao holds a degree in heritage conservation and manages the daily affairs of the trust. He initiated the scientific restoration of the laterite stone structure and spearheaded this digital archiving project to make family history accessible to global descendants.',
      parents: ['gen7_sharad'],
      children: [],
      contributions: [
        'Completed the monumental structural restoration of the Temple (2018)',
        'Launched the digital preservation initiative for palm-leaf manuscripts',
        'Implemented rainwater harvesting systems across the temple estate'
      ],
      photoUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=300&auto=format&fit=crop'
    },
    {
      id: 'gen8_radha',
      name: 'Radha Shastri Deshmukh',
      marathiName: 'राधा शास्त्री देशमुख',
      generation: 8,
      lifespan: '1970 – Present',
      role: 'Trustee & Historian',
      bio: 'Radha is a professor of Indology and oversees the cultural and educational initiatives of the trust. She coordinates research grants for scholars studying Konkan culture and coordinates the annual classical music festival held at the temple.',
      parents: ['gen7_sharad'],
      children: [],
      contributions: [
        'Curates the annual Bhagavati Sangeet Samaroh',
        'Translates Sanskrit and old Marathi (Modi script) family letters into English'
      ],
      photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop'
    }
  ],
  timelineEvents: [
    {
      year: 1710,
      title: 'The Divine Revelation',
      description: 'Ananthbhat Shastri installs the self-manifested stone deity under an ancient Banyan tree, marking the birth of the shrine.',
      category: 'temple',
      documentTitle: 'Ananthbhat Diary Entry Excerpt (1710)',
      documentUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=600'
    },
    {
      year: 1764,
      title: 'Laterite Stone Sanctum',
      description: 'Madhavrao Shastri rebuilds the wooden temple into a permanent red laterite stone structure, establishing the traditional Konkan architectural style.',
      category: 'temple',
      documentTitle: 'Peshwa Land Grant Seal',
      documentUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600'
    },
    {
      year: 1802,
      title: 'Founding of Bhagavati Gurukul',
      description: 'Govindbhat Shastri opens a traditional residential school in the temple courtyard, providing free Sanskrit and mathematics education.',
      category: 'trust'
    },
    {
      year: 1842,
      title: 'Astronomical Manuscript Written',
      description: 'Shankarrao Shastri finishes "Bhagavati Jyotirganita", an advanced treatise on coastal astronomical navigation and lunar calculations.',
      category: 'family',
      documentTitle: 'Original Manuscript Leaf',
      documentUrl: 'https://images.unsplash.com/photo-1532156002950-fc11005a9b76?q=80&w=600'
    },
    {
      year: 1889,
      title: 'The High School Inauguration',
      description: 'Vasudev Rao constructs the taluka\'s first English-medium high school, transitioning the family education efforts into the modern age.',
      category: 'trust'
    },
    {
      year: 1952,
      title: 'The Modern Trust Constitution',
      description: 'Following Independence, Keshav Rao frames the official public trust constitution, protecting the ancestral assets and temple code of conduct.',
      category: 'trust',
      documentTitle: 'Registered Trust Act Document (1952)',
      documentUrl: 'https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=600'
    },
    {
      year: 1971,
      title: 'Bhagavati Charitable Dispensary',
      description: 'Dr. Sharad Shastri establishes a free clinic beside the temple, providing medical aid to remote villages in the region.',
      category: 'trust',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      audioTranscript: 'Today we open these doors. Let no man or woman leave this temple in physical pain. Bhagavati Devi is the ultimate healer, and we are but Her instruments.'
    },
    {
      year: 2018,
      title: 'Tercentenary Restoration',
      description: 'Anand Rao completes a multi-year restoration project, reinforcing the stone sanctum and copper-plated roofs using purely traditional materials.',
      category: 'temple',
      documentTitle: 'Architectural Restoration Layout',
      documentUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600'
    }
  ],
  galleryItems: [
    {
      id: 'g1',
      title: 'Red Laterite Sanctum (Garbhagriha)',
      category: 'temple',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800',
      year: '2023',
      description: 'The ancient red laterite stone structure of the inner sanctum, glowing softly in oil lamp light.'
    },
    {
      id: 'g2',
      title: 'Daily Evening Deepotsav',
      category: 'festivals',
      imageUrl: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=800',
      year: '2024',
      description: 'Lighting of hundreds of traditional terracotta oil lamps in the temple courtyard during Kartik Ekadashi.'
    },
    {
      id: 'g3',
      title: 'Ancestral Manuscripts Safe',
      category: 'documents',
      imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800',
      year: '1975',
      description: 'Palm-leaf manuscripts of temple chants wrapped in natural crimson silk to preserve them from humidity.'
    },
    {
      id: 'g4',
      title: 'Dr. Sharad Shastri with Villagers',
      category: 'family',
      imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800',
      year: '1982',
      description: 'Dr. Sharad Shastri examining a patient at the free dispensary under the shade of the sacred grove.'
    },
    {
      id: 'g5',
      title: 'Traditional Wooden Sabhamandapa',
      category: 'temple',
      imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800',
      year: '2022',
      description: 'Intricately carved teakwood pillars showing the Dashavatara panel inside the main assembly hall.'
    },
    {
      id: 'g6',
      title: 'Temple Renovation Stone Work',
      category: 'renovation',
      imageUrl: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=800',
      year: '2017',
      description: 'Artisans using traditional lime-mortar and hand-chiseling to repair the exterior laterite wall panels.'
    },
    {
      id: 'g7',
      title: 'Navratri Chariot Procession',
      category: 'festivals',
      imageUrl: 'https://images.unsplash.com/photo-1561361531-99522904d9c4?q=80&w=800',
      year: '2024',
      description: 'The golden chariot carrying the processional deity (Utsav Murti) through the village streets during Vijayadashami.'
    },
    {
      id: 'g8',
      title: 'Peshwa Era Land Charter',
      category: 'documents',
      imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800',
      year: '1765',
      description: 'Royal seal and official charter allocating the temple land bounds, written in Modi script Marathi.'
    }
  ],
  archiveDocuments: [
    {
      id: 'doc1',
      title: 'Founding Charter of Shree Bhagavati Shrine',
      category: 'manuscripts',
      year: '1712',
      author: 'Ananthbhat Shastri',
      description: 'A hand-written palm-leaf manuscript containing the invocation prayers, ritual instructions, and the boundary details of the shrine.',
      previewUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=500',
      fileType: 'image',
      fileSize: '4.8 MB',
      transcription: 'श्री भगवत्यै नमः । स्वस्ति श्री नृपशालिवाहन शके १६३४... Having received the divine vision, this shrine is constructed on the north side of the sacred grove. Let the lamps burn forever, fueled by the oil of devotion. May the family protect this land from all visual and spiritual corruption.'
    },
    {
      id: 'doc2',
      title: 'Royal Sanad (Land Grant) Charter',
      category: 'records',
      year: '1765',
      author: 'Peshwa Madhavrao I',
      description: 'Official copper-plate replica and paper charter confirming the tax-free status of the temple valley and its agricultural resources for worship maintenance.',
      previewUrl: 'https://images.unsplash.com/photo-1532156002950-fc11005a9b76?q=80&w=500',
      fileType: 'pdf',
      fileSize: '12.4 MB',
      transcription: 'This charter confirms that the revenue from the mango and coconut groves of the Devrai valley belongs exclusively to the daily worship (Pooja, Naivedya) of Shree Bhagavati Devi under the stewardship of Madhavrao Shastri...'
    },
    {
      id: 'doc3',
      title: 'Letters from the Bhoodan Movement',
      category: 'letters',
      year: '1954',
      author: 'Keshav Rao Shastri & Vinoba Bhave',
      description: 'Correspondence between Keshav Rao and Acharya Vinoba Bhave regarding the donation of 50 acres of trust-owned agricultural land to tenant farmers.',
      previewUrl: 'https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=500',
      fileType: 'pdf',
      fileSize: '3.1 MB',
      transcription: 'Dear Vinobaji, as trustees of the Bhagavati shrine, we believe that the land belongs to those who sweat upon it. Bhagavati is the mother of all, and her soil must feed her children equally. We hereby transfer the deed of the southern fields...'
    },
    {
      id: 'doc4',
      title: 'Bhagavati Jyotirganita Treatise',
      category: 'manuscripts',
      year: '1842',
      author: 'Shankarrao Shastri',
      description: 'Parchment manuscript explaining astronomical computations, coastal moon phases, and shadow-casting techniques to determine local time.',
      previewUrl: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=500',
      fileType: 'image',
      fileSize: '9.5 MB',
      transcription: 'By calculating the angular distance of the moon from the Chitra star, the exact high tide timing at the Dabhol port can be computed. This table serves both the seafarers and the temple priests for calculating Shubh Muhurtas...'
    },
    {
      id: 'doc5',
      title: 'Trust Registration Certificate',
      category: 'certificates',
      year: '1952',
      author: 'Charity Commissioner Bombay',
      description: 'Official document formalizing the Shree Bhagavati Devi Family Trust under the Bombay Public Trusts Act, 1950.',
      previewUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=500',
      fileType: 'pdf',
      fileSize: '1.5 MB'
    },
    {
      id: 'doc6',
      title: 'Restoration Architecture blueprints',
      category: 'records',
      year: '2015',
      author: 'Anand Rao Shastri',
      description: 'Comprehensive architectural blueprint outlining the conservation steps, structural wood reinforcements, and water drainage layout.',
      previewUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=500',
      fileType: 'pdf',
      fileSize: '18.2 MB'
    }
  ],
  oralHistories: [
    {
      id: 'oral1',
      speaker: 'Shantabai Shastri',
      relationship: 'Eldest Matriarch (Aged 94)',
      title: 'Memories of the Freedom Movement & Temple Sanctuary',
      audioDuration: '4:15',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Standard free placeholder audio
      transcriptEnglish: 'I was just a young bride of fourteen when I came to this house. The British police were patrolling the highways. My father-in-law, Keshav Rao, would hide the freedom fighters in the deep thickets of the Bhagavati Grove. At night, we would carry baskets of rice and bhakri to them under the guise of carrying offerings to the Devi. They slept on the stone floors of the Sabhamandapa. The Devi kept everyone safe. No search party ever dared to enter the sanctum.',
      transcriptMarathi: 'मी जेव्हा या घरात आले, तेव्हा अवघ्या चौदा वर्षांची होते. इंग्रज पोलिसांचा पहारा रस्त्यावर असायचा. माझे सासरे, केशवराव, स्वातंत्र्यसैनिकांना भगवतीच्या देवराईत लपवून ठेवायचे. रात्री देवळात प्रसाद नेण्याचा बहाणा करून आम्ही टोपलीतून भाकरी आणि भात पोहोचवायचो. ते सभामंडपाच्या दगडी जमिनीवर झोपायचे. देवीने सर्वांचे रक्षण केले. कोणत्याही शोधपथकाने कधी गाभाऱ्यात पाऊल ठेवण्याची हिंमत केली नाही.'
    },
    {
      id: 'oral2',
      speaker: 'Raghunath Bhat',
      relationship: 'Head Priest (Aged 78)',
      title: 'The Art of reciting the Rigveda in Temple Acoustics',
      audioDuration: '3:30',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      transcriptEnglish: 'My father taught me the chanting in this very Sabhamandapa. The laterite stone walls have a beautiful, quiet quality. They do not bounce the sound like modern concrete does; they absorb the high frequencies and enrich the low resonance of the Vedic syllables. When we chant the Purusha Sukta together at noon, the vibration travels through the columns into the earth. It is not just about chanting; it is a physical resonance that clears the mind.',
      transcriptMarathi: 'माझ्या वडिलांनी मला याच सभामंडपात वेदपठण शिकवले. चिऱ्याच्या दगडी भिंतींचे एक वैशिष्ट्य आहे. आधुनिक काँक्रीटसारखा आवाज तिथे घुमत नाही; ते उच्च स्वर शोषून घेतात आणि स्वरांचे गांभीर्य वाढवतात. जेव्हा आम्ही दुपारी पुरुषसूक्त म्हणतो, तेव्हा स्तंभामधून कंपने थेट जमिनीत उतरतात. हे केवळ पठण नाही, तर मनाची शुद्धी करणारा एक नाद आहे.'
    }
  ],
  videoArchive: [
    {
      id: 'v1',
      title: 'The Kartik Deepotsav Celebration (Full Video)',
      description: 'A beautiful visual documentary showcasing the lighting of 1008 clay lamps around the temple and the evening processional chants.',
      duration: '5:24',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-candles-burning-in-a-dark-room-41662-large.mp4',
      thumbnailUrl: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=500'
    },
    {
      id: 'v2',
      title: 'Restoring the Laterite Stone Sanctum',
      description: 'A quiet time-lapse and explanation of the lime-plastering technique used by master stonemasons during the 2018 renovation.',
      duration: '8:12',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-carving-a-stone-block-43033-large.mp4',
      thumbnailUrl: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=500'
    }
  ],
  donationDetails: {
    upiId: 'bhagavatitrust@sbi',
    upiQrUrl: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?q=80&w=300&auto=format&fit=crop', // Elegant modern QR code styling
    bankName: 'State Bank of India',
    accountName: 'Shree Bhagavati Devi Charitable Trust',
    accountNumber: '40991288371',
    ifscCode: 'SBIN0000281',
    branch: 'Dabhol Port Branch, Maharashtra',
    transparencyStatement: 'All offerings are directly managed by the family council. We do not participate in any commercial activities. The trust funds are strictly utilized for: (1) Daily rituals and temple upkeep, (2) Maintenance of the historical archive library, (3) Free Ayurvedic and Allopathic medicine at the clinic, (4) Direct educational support for rural children in the taluka. Annual audit reports are published in the temple archives and are open for public viewing.'
  },
  locationDetails: {
    address: 'Shree Bhagavati Temple Valley, Devasthan Road, Dabhol Taluka, Ratnagiri District, Maharashtra - 415706',
    landmarks: [
      '6 km east of Dabhol Ferry Creek jetty',
      'Behind the ancient Devrai (Sacred Forest Grove)'
    ],
    parking: 'Free parking is available at the temple entrance gates. Vehicles are not permitted beyond the outer stone archway (Ves) to preserve the silence and air quality of the sacred valley.',
    visitingHours: 'Daily: 05:00 AM – 12:30 PM, and 04:30 PM – 09:00 PM. (Afternoon closure is strictly maintained for deity resting hours).',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15324.966023773176!2d73.1678125!3d17.5878125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDM1JzE2LjEiTiA3M8KwMTAnMDQuMSJF!5e0!3m2!1sen!2sin!4v1689999999999!5m2!1sen!2sin'
  },
  contactDetails: {
    phone: '+91 2355 242 801',
    email: 'heritage@bhagavatidevitrust.org',
    officeAddress: 'The Ancestral Office, Shree Bhagavati Devasthan Trust, Dabhol Valley, Maharashtra, India'
  }
};
