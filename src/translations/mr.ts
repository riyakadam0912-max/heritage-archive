import type { Translation } from './types';
import bhagavatiDeviImage from '../assets/images/bhagavati-devi.jfif';
import templeImage from '../assets/images/templeimage.jfif';
import bestViewImage from '../assets/images/bestview.jpg';
import cityViewImage from '../assets/images/cityview.jfif';
import backsideViewImage from '../assets/images/backsideview.jpg';

const mr: Translation = {
  common: {
    loading: 'वारसा अनुभव लोड करत आहोत…',
    langEnglish: 'English',
    langMarathi: 'मराठी',
    all: 'सर्व',
    category: 'वर्ग',
    year: 'वर्ष',
    unrecorded: 'अद्वितीय',
    availableHours: 'उपलब्ध: सोम – शनि: 09:00 AM – 05:00 PM',
    emailResponseTime: 'आम्ही पुराभिलेख प्रश्नांना 48 तासांत उत्तर देतो',
    officeLabel: 'पौराणिक कार्यालय',
    close: 'बंद करा'
  },
  navigation: {
    title: 'श्री भगवती देवी कुटुंब विश्वस्त',
    items: {
      about: 'आमच्या विषयी',
      devi: 'भगवती देवी',
      temple: 'देवस्थान',
      legacy: 'वारसा',
      timeline: 'कालरेखा',
      gallery: 'चित्रदालन',
      festivals: 'उत्सव',
      archive: 'पुराभिलेख',
      donation: 'दान',
      location: 'ठिकाण',
      contact: 'संपर्क'
    }
  },
  hero: {
    title: 'श्री भगवती देवी कौटुंबिक विश्वस्त संस्था',
    subtitle: 'वारसा आश्रम आणि पूर्वजांचा डिजिटल पुराभिलेख',
    explore: 'वारसा एक्स्प्लोर करा',
    sanskritDevanagari: 'सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके । शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते ॥',
    sanskritTranslation: 'सर्व मंगलांकरिणी, शिवाच्या पती, सर्व उद्दिष्ट पूर्तित करणारी, त्र्यंबके गौरी, नारायणी — आम्ही तुझे नमन करतो.',
    englishQuote: 'पुढच्या सातशे वर्षांसाठी आमच्या पूर्वजांच्या पवित्र परंपरा आणि वारसा जतन करणे.',
    exploreCta: 'वारसा एक्स्प्लोर करा'
  },
  about: {
    sectionLabel: 'कुटुंब विश्वस्ताविषयी',
    title: 'कुटुंब विश्वस्ताविषयी',
    story: [
      'कोकणातील निसर्गरम्य किनाऱ्यावर, सह्याद्री पर्वत आणि अरबी समुद्र जेथून भेटतो, आमचा कुटुंब विश्वस्त भगवती देवीच्या पवित्र मंदिराचा रक्षक म्हणून शतकांहून अधिक काळ उपस्थित आहे.',
      'आमच्या पूर्वजांनी 17व्या शतकात स्थापन केलेले हे विश्वस्त शासन करण्यासाठी नव्हे तर सेवा करण्यासाठी होते — दररोजच्या पूजा, देवराईचे संरक्षण आणि शास्त्रातील पानपत्रे राखणे.',
      'पिढ्यानपिढ्या, कुटुंबाने ऐतिहासिक दस्तऐवजांचे छाननी आणि प्रतलेखन केले, समुदायाच्या पायाभूत सुविधा वित्तपोषित केल्या आणि बदलत्या राजवटी, वसाहती संघर्ष आणि आधुनिक रूपांतरणांच्या काळात भगवती देवीची दीपक जपली.'
    ]
  },
  trust: {
    values: [
      { title: 'भक्ति (Devotion)', description: 'भगवती देवीला आस्थेने सेवेत घातलेले — जीवनातील ऊर्जा, ज्ञान आणि संतुलनाचा स्रोत.' },
      { title: 'संरक्षण (Preservation)', description: 'पूर्वजांचे दस्तऐवज, ऐतिहासिक कलाकृती आणि कोकण परंपरा हरपत नाही याची काळजी.' },
      { title: 'धर्म (Duty)', description: 'समुदायासाठी निःशब्द दान, पारिस्थितिक पुनरुज्जीवन आणि नैतिक जबाबदारी.' },
      { title: 'परंपरा (Continuity)', description: 'पवित्र अनुष्ठान, संस्कृत परंपरा आणि मौखिक इतिहास पुढील पिढ्यांना हस्तांतरित करणे.' }
    ]
  },
  deity: {
    label: 'देवी माता',
    title: 'भगवती देवी',
    description: 'भगवती देवी या कोकण प्रदेशात शांत, परंतु शक्तिशाली रूपात पूजल्या जातात. त्या धैर्य, कृपा आणि ज्ञान या तिन्ही ऊर्जा व्यक्त करतात.',
    iconographyTitle: 'पवित्र प्रतिके',
    imageAlt: 'भगवती देवी पवित्र कलाकृती',
    symbols: [
      { name: 'त्रिशूल (Trident)', meaning: 'तीन गुणांचे समतोल दर्शवते आणि तिन्ही पातळ्यांवर प्रभुत्व.' },
      { name: 'सुवर्ण कमळ (Golden Lotus)', meaning: 'अनित्यतेत शुद्धता आणि आध्यात्मिक जागृतीचे प्रतिक.' },
      { name: 'शंख (Conch)', meaning: 'सृष्टीचा आदिम नाद, पवित्रता आणणारा.' },
      { name: 'दिवा (Oil Lamp)', meaning: 'अज्ञानावर ज्ञानाचा प्रकाश फेकण्याचे प्रतिक.' }
    ]
  },
  temple: {
    sectionLabel: 'देवस्थान',
    title: 'पवित्र आराधनागृह',
    architecture: 'आमचे मंदिर कोकणाच्या लाकडी आणि दगडी कलाकृतीचे अद्भुत उदाहरण आहे...',
    dailyTitle: 'दैनंदिन विधी',
    rituals: [
      { time: '05:30 AM', name: 'काकड आरती', description: 'प्रातःकालीन आरती आणि दीपप्रज्वलन.' },
      { time: '08:00 AM', name: 'अभिषेक आणि श्रृंगार', description: 'देवतेचे पवित्र स्नान व श्रृंगार.' },
      { time: '12:00 PM', name: 'महानैवेध्य', description: 'देवतेला खास समारंभिक अन्न.' },
      { time: '07:00 PM', name: 'महाआर्ते आणि दीपोत्सव', description: 'संध्याकाळी हजारो दिवे लावण्यात येतात.' }
    ],
    imageAlt: 'देवस्थान लाल चिरा वास्तुकला',
    bellNote: '*घंटा वाजवण्यासाठी प्रतीक क्लिक करा. पवित्र धुर मंदिरात वर जातो.',
    ringBellAria: 'घंटा वाजवा'
  },
  gallery: {
    label: 'दृश्य कालक्रम',
    title: 'चित्रदालन',
    intro: 'पारंपारिक फोटो, वास्तु रचना, नूतनीकरण कामे आणि उत्सवाचे क्षण जपलेले आहेत.',
    filters: ['all', 'devi', 'temple', 'festivals'],
    categoryLabels: {
      all: 'सर्व',
      devi: 'देवीची चित्रे',
      temple: 'मंदिर दृश्य',
      festivals: 'उत्सव'
    },
    items: [
      { id: 'g1', title: 'पवित्र मंदिर प्रतिमा', category: 'devi', imageUrl: templeImage, year: 'वर्तमान', description: 'मंदिर गाभाऱ्याचे आणि पवित्र परिसराचे भक्तीपूर्ण दृश्य.' },
      { id: 'g2', title: 'भगवती देवी प्रतिमा', category: 'devi', imageUrl: bhagavatiDeviImage, year: 'वर्तमान', description: 'श्री भगवती देवीची प्रामाणिक भक्तीपूर्ण प्रतिमा.' },
      { id: 'g3', title: 'अरबी समुद्र दृश्य', category: 'temple', imageUrl: bestViewImage, year: 'वर्तमान', description: 'रत्नागिरी किल्ल्याच्या मंदिर परिसरातून अरबी समुद्राचे panoramika दृश्य.' },
      { id: 'g4', title: 'रत्नागिरी किनारपट्टी', category: 'temple', imageUrl: cityViewImage, year: 'वर्तमान', description: 'मंदिराच्या डोंगरावरून रत्नागिरी शहर आणि कोकण किनारपट्टीचे दृश्य.' },
      { id: 'g5', title: 'पवित्र मंदिर दृष्य', category: 'temple', imageUrl: backsideViewImage, year: 'वर्तमान', description: 'भगवती मंदिर परिसरातून किल्ला आणि आसपासचे landschap पाहिले जाणारे दृश्य.' }
    ],
    lightbox: { close: 'लाइटबॉक्स बंद करा', previous: 'मागील चित्र', next: 'पुढचे चित्र' }
  },
  timeline: {
    sectionLabel: 'कालक्रम',
    title: 'इतिहास आणि माइलस्टोन',
    intro: 'भगवती देवस्थानाच्या बांधकाम, सामुदायिक कृती आणि विश्वस्त शासनाची कालक्रमानुसार नोंद.',
    events: [
      { year: 1710, title: 'दैवी प्रकट', description: 'अनंतभट्ट शास्त्रींनी प्राकृत पाषाण देव मूर्ती बसवली, ज्यामुळे देवळाची निर्मिती झाली.', category: 'temple', documentTitle: 'अनंतभट्ट डायरी (1710)', documentUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=600' },
      { year: 1764, title: 'चिरा दगडी गाभागृह', description: 'माधवराव शास्त्रींनी लाकडी मंदिर दगडी गाभागृहात रूपांतरित केले.', category: 'temple', documentTitle: 'पेशवा जमीन अनुदान', documentUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600' },
      { year: 1802, title: 'भगवती गुरुकुल स्थापन', description: 'गोविंदभट्ट शास्त्रींनी गुरुकुलाची स्थापना केली.', category: 'trust' },
      { year: 1842, title: 'ज्योतिरगणित ग्रंथ', description: 'शंकरराव शास्त्रींनी "भगवती ज्योतिरगणित" पूर्ण केले.', category: 'family', documentTitle: 'मूल हस्तलिखित पान', documentUrl: 'https://images.unsplash.com/photo-1532156002950-fc11005a9b76?q=80&w=600' },
      { year: 1889, title: 'हायस्कूल उद्घाटन', description: 'वासुदेव रावांनी तालुक्यातील पहिले इंग्रजी माध्यम उच्च माध्यमिक शाळा उघडली.', category: 'trust' },
      { year: 1952, title: 'आधुनिक ट्रस्ट संविधान', description: 'स्वातंत्र्यानंतर केशव राव यांनी ट्रस्ट संविधान फ्रेम केले.', category: 'trust', documentTitle: 'नोंदणीकृत ट्रस्ट कायदा (1952)', documentUrl: 'https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=600' },
      { year: 1971, title: 'भक्ती डिस्पेन्सरी', description: 'डॉ. शरद शास्त्री यांनी मोफत क्लिनिकची स्थापना केली.', category: 'trust', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', audioTranscript: 'आज आपण हे दरवाजे उघडतो. कोणताही पुरुष किंवा स्त्री या देवळातून शारीरिक वेदना घेऊन निघू नये.' },
      { year: 2018, title: 'त्रिसेंच्येअरी नूतनीकरण', description: 'आनंद राव यांनी दगडी गाभागृहाचे बहु-वर्षीय नूतनीकरण पूर्ण केले.', category: 'temple', documentTitle: 'नूतनीकरण आर्किटेक्चर', documentUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600' }
    ],
    attachedDocumentLabel: 'जोडलेले दस्तऐवज:',
    audioLabel: 'मौखिक इतिहास क्लिप',
    documentScanAlt: 'कालरेखा दस्तऐवज स्कॅन',
    yearSuffix: 'AD'
  },
  family: {
    sectionLabel: 'वांशिक सातत्य',
    title: 'कुटुंब वारसा',
    introduction: 'आमच्या कुटुंबाची कहाणी कोकणाच्या मातीत आणि भगवती देवीच्या कृपेने अखंड बांधलेली आहे.',
    members: [
      { id: 'gen1_ananth', name: 'अनंतभट्ट शास्त्री', marathiName: 'अनंतभट्ट शास्त्री', generation: 1, lifespan: '1685 – 1752', role: 'स्थापित पितामह आणि शास्त्री', bio: 'अनंतभट्ट शास्त्री हे मिमांसा व ज्योतिषाचे नामवंत शास्त्री होते. त्यांनी जंगलात देवीची स्वयम्भू मूर्ती शोधून लाकडी मंदिर उभारले.', contributions: ['पहिले लाकडी मंदिर उभारले (1710)', 'देवळीनियमांसाठी संस्कृत स्तोत्र संकलन केले', 'वार्षिक नवरात्र समुदाय भोजन सुरू केले'], photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop', stories: ['कथेप्रमाणे अनंतभट्ट यांनी 41 दिवस ध्यान केले आणि पवित्र झऱ्याचे स्थान शोधले.'] },
      { id: 'gen2_madhav', name: 'माधवराव शास्त्री', marathiName: 'माधवराव शास्त्री', generation: 2, lifespan: '1728 – 1795', role: 'मंदिर बांधणारा व प्रशासक', bio: 'माधवराव यांनी पेशव्यांकडून जमीन अनुदान मिळवून दगडी गाभागृहाची उभारणी केली.', contributions: ['चिरा गाभागृह बांधले (1764)', 'ट्रस्टसाठी शेतीची निधी स्थापना केली', 'पुशकरिणी बांधली'], photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop', stories: ['1779 च्या दुष्काळात त्यांनी भात खाऊ तयार करून शेकडो लोकांना अन्न दिले.'] },
      { id: 'gen3_govind', name: 'गोविंदभट्ट शास्त्री', marathiName: 'गोविंदभट्ट शास्त्री', generation: 3, lifespan: '1765 – 1830', role: 'व्याकरणतज्ञ व सुधारणावादी', bio: 'गोविंदभट्ट यांनी वारणसीत शिक्षण घेतले आणि परत आल्यावर गुरुकुल स्थापन केले.', contributions: ['भगवती गुरुकुल स्थापली (1802)', '150+ हस्तलिखिते जपली', 'देवराईत वृक्षारोपण सुरू केले'], photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop' },
      { id: 'gen3_vishwanath', name: 'विश्वनाथ राव', marathiName: 'विश्वनाथ राव', generation: 3, lifespan: '1770 – 1845', role: 'कृषी उद्योजक', bio: 'विष्णुवराव यांनी सिंचन पद्धती तयार केली ज्यामुळे नारळ व आरेचक लागवड शाश्वत झाली.', contributions: ['गर्व्ही-आधारित पाणी वाहिनी रचली', 'पहिले अल्फांसो आंब्याचे बाग केले'], photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop' },
      { id: 'gen4_shankar', name: 'शंकरराव शास्त्री', marathiName: 'शंकरराव शास्त्री', generation: 4, lifespan: '1805 – 1878', role: 'ज्योतिषी व विश्वस्त', bio: 'शंकरराव यांनी स्थानिक पंचांग बनवले व कुटुंब नोंदी डिजिटल पद्धतीने साठवल्या.', contributions: ['"भगवती ज्योतिर्गणित" (1842)', 'ट्रस्ट नोंदणी नोंदवली', 'मंदिर स्तंभांची नूतनीकरण केली'], photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop' },
      { id: 'gen4_laxmi', name: 'लक्ष्मीबाई शास्त्री', marathiName: 'लक्ष्मीबाई शास्त्री', generation: 4, lifespan: '1812 – 1890', role: 'समुदाय मातृवंदना', bio: 'लक्ष्मीबाई यांनी भक्तिमय संगीत रचले आणि महिला गटांसाठी विणकाम सहकारी संघटित केले.', contributions: ['40+ मराठी भक्तिगीते रचली', 'महिला विणकाम सहकारी संस्थेची सुरुवात केली'], photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop' },
      { id: 'gen5_vasudev', name: 'वासुदेव राव', marathiName: '', generation: 5, lifespan: '1848 – 1921', role: 'आधुनिकीकारक व परोपकारी', bio: 'वासुदेव राव यांनी शिक्षणावर भर देऊन शाळा व निधी सुरु केले.', contributions: ['भगवती हायस्कूल (1889)', 'वासुदेव स्मृती छात्रवृत्ती निधी', 'दीपस्तंभ स्थापना'], photoUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop' },
      { id: 'gen6_keshav', name: 'केशव राव', marathiName: 'केशव राव', generation: 6, lifespan: '1890 – 1968', role: 'स्वातंत्र्यसैनिक व संरक्षक', bio: 'केशव राव स्वातंत्र्य चळवळीमध्ये सक्रिय होते व नंतर ट्रस्ट संविधान तयार केले.', contributions: ['आधुनिक ट्रस्ट संविधान (1952)', '50 एकर भूमी बिडान देणगी', 'धर्मशाला नुतनीकरण'], photoUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=300&auto=format&fit=crop' },
      { id: 'gen7_sharad', name: 'डॉ. शरद शास्त्री', marathiName: 'डॉ. शरद शास्त्री', generation: 7, lifespan: '1932 – 2015', role: 'वैद्य व अभिलेखपाल', bio: 'डॉ. शरद यांनी मोफत वैद्यकीय मदत दिली व कुटुंब संग्रहालयाची स्थापना केली.', contributions: ['1,200+ हस्तलिखिते सूचीबद्ध केली', 'भगवती धर्मशाळा (1971)', '"History of Bhagavati Devasthan" प्रकाशित'], photoUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=300&auto=format&fit=crop' },
      { id: 'gen8_anand', name: 'आनंद राव शास्त्री', marathiName: 'आनंद राव शास्त्री', generation: 8, lifespan: '1965 – Present', role: 'सदर वर्तमान मुख्य विश्वस्त', bio: 'आनंद राव हे विरासत संरक्षणात पदवीधर असून त्यांनी नूतनीकरण व डिजिटल प्रोजेक्ट पुढे नेले.', contributions: ['मंदिर संरचनात्मक नूतनीकरण पूर्ण (2018)', 'हस्तलिखिते डिजिटल संग्रह प्रकल्प', 'पानी साठवण प्रणाली राबविली'], photoUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=300&auto=format&fit=crop' },
      { id: 'gen8_radha', name: 'राधा शास्त्री देशमुख', marathiName: 'राधा शास्त्री देशमुख', generation: 8, lifespan: '1970 – Present', role: 'ट्रस्टी व इतिहासकार', bio: 'राधा इंडोलॉजी प्राध्यापिका असून सांस्कृतिक उपक्रम व शोधनिधी समन्वय करते.', contributions: ['वार्षिक संगीत समारंभ kurates', 'संस्कृत व जुने मराठी पत्र अनुवाद करते'], photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop' }
    ],
    viewArchiveCta: 'आर्काइव्ह व कथा पाहण्यासाठी क्लिक करा'
  ,
    scrollHint: 'मोबाइल दृश्यात संपूर्ण वंश समजण्यासाठी क्षैतिज स्क्रोल करा.'
  },
  biography: {
    narrativeTitle: 'ऐतिहासिक वर्णन',
    contributionsTitle: 'महत्वाचे योगदान',
    anecdotesTitle: 'संग्रहित किस्से',
    lineageTitle: 'वंश संदर्भ',
    parentageLabel: 'पालकत्व',
    offspringLabel: 'नंतरचे',
    generationPrefix: 'पिढी '
  },
  festivals: {
    sectionLabel: 'पौराणिक सण',
    title: 'आचार आणि उत्सव',
    intro: 'आमचे सण व्यावसायिक कार्यक्रम नाहीत, तर पवित्र काळ आहेत.',
    items: [
      { name: 'Sharadotsav (Navratri)', timing: 'आश्विन शुद्ध प्रथम ते दशमी (ऑक्टोबर)', description: 'परंपरागत नऊ रात्र उत्सव; सभामंडपात लोक-नृत्य आणि प्रार्थना.', heritageStory: 'कुटुंब सदस्य मुंबई, पुणे आणि गोवा ऐवढ्या दूर देशांतून परत येतात.', imageUrl: 'https://images.unsplash.com/photo-1561361531-99522904d9c4?q=80&w=800' },
      { name: 'Kartik Deepotsav', timing: 'कार्तिक पूर्णिमा (नोव्हेंबर)', description: '1008 मातीच्या दिव्यांची हाताने भरलेली वंदना; शांततेचा अनुष्ठान.', heritageStory: 'माधवराव यांनी सुरू केलेली परंपरा 1772 पासून.' , imageUrl: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=800' }
    ],
    heritageLabel: 'कुटुंब वारसा कथा'
  },
  archive: {
    sectionLabel: 'पुराभिलेख',
    title: 'डिजिटल पुराभिलेख',
    intro: 'शतके जुने कुटुंब नोंदी, राजकीय परवाने, हस्तलिखिते आणि भाषांतरित प्रत.',
    searchPlaceholder: 'हस्तलिखिते, प्रत, पत्रे शोधा...',
    filters: ['सर्व', 'हस्तलिखिते', 'पत्रे', 'प्रमाणपत्र', 'नोंदी'],
    noResults: 'आपल्या शोधाशी कोणतेही दस्तऐवज जुळले नाहीत.',
    authorLabel: 'लेखक:',
    viewDoc: 'दस्तऐवज पहा',
    pdfLabel: 'पीडीएफ दस्तऐवज',
    attachedDocumentPrefix: 'जोडलेले दस्तऐवज:',
    downloadScan: 'आर्काइव्ह स्कॅन डाउनलोड करा',
    downloadAlert: 'डाउनलोड अनुकरण करत आहोत. मूळ उच्च-रिझोल्यूशन TIFF पॅक केलेले आहे.'
  },
  oralHistory: {
    sectionLabel: 'मौखिक वारसा',
    title: 'वडिलधारकांची मौखिक इतिहास संग्रह',
    intro: 'वडिलधारकांच्या आवाजातील नोंदी ऐका, जुन्या मराठी गोष्टी आणि कौटुंबिक ज्ञान जतन केले आहे.',
    items: [
      { id: 'oral1', speaker: 'Shantabai Shastri', relationship: 'Eldest Matriarch (Aged 94)', title: 'Memories of the Freedom Movement & Temple Sanctuary', audioDuration: '4:15', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', transcriptEnglish: 'I was just a young bride of fourteen when I came to this house. The British police were patrolling the highways. My father-in-law, Keshav Rao, would hide the freedom fighters in the deep thickets of the Bhagavati Grove. At night, we would carry baskets of rice and bhakri to them under the guise of carrying offerings to the Devi. They slept on the stone floors of the Sabhamandapa. The Devi kept everyone safe. No search party ever dared to enter the sanctum.', transcriptMarathi: 'मी जेव्हा या घरात आले, तेव्हा अवघ्या चौदा वर्षांची होते. इंग्रज पोलिसांचा पहारा रस्त्यावर असायचा. माझे सासरे, केशवराव, स्वातंत्र्यसैनिकांना भगवतीच्या देवराईत लपवून ठेवायचे. रात्री देवळात प्रसाद नेण्याचा बहाणा करून आम्ही टोपलीतून भाकरी आणि भात पोहोचवायचो. ते सभामंडपाच्या दगडी जमिनीवर झोपायचे. देवीने सर्वांचे रक्षण केले. कोणत्याही शोधपथकाने कधी गाभाऱ्यात पाऊल ठेवण्याची हिंमत केली नाही.' },
      { id: 'oral2', speaker: 'Raghunath Bhat', relationship: 'Head Priest (Aged 78)', title: 'The Art of reciting the Rigveda in Temple Acoustics', audioDuration: '3:30', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', transcriptEnglish: 'My father taught me the chanting in this very Sabhamandapa. The laterite stone walls have a beautiful, quiet quality. They do not bounce the sound like modern concrete does; they absorb the high frequencies and enrich the low resonance of the Vedic syllables. When we chant the Purusha Sukta together at noon, the vibration travels through the columns into the earth. It is not just about chanting; it is a physical resonance that clears the mind.', transcriptMarathi: 'माझ्या वडिलांनी मला याच सभामंडपात वेदपठण शिकवले. चिऱ्याच्या दगडी भिंतींचे एक वैशिष्ट्य आहे. आधुनिक काँक्रीटसारखा आवाज तिथे घुमत नाही; ते उच्च स्वर शोषून घेतात आणि स्वरांचे गांभीर्य वाढवतात. जेव्हा आम्ही दुपारी पुरुषसूक्त म्हणतो, तेव्हा स्तंभामधून कंपने थेट जमिनीत उतरतात. हे केवळ पठण नाही, तर मनाची शुद्धी करणारा एक नाद आहे.' }
    ],
    durationLabel: 'कालावधी:',
    transcriptTabs: { english: 'इंग्रजी प्रत', marathi: 'मराठी अनुवाद' },
    playAria: 'ऑडिओ प्ले करा',
    pauseAria: 'ऑडिओ थांबवा'
  },
  videoArchive: {
    sectionLabel: 'संग्रहित रील्स',
    title: 'दृश्य नोंदी आणि अनुष्ठान फूटेज',
    intro: 'ऐतिहासिक अनुष्ठान, शिल्पकामे, नूतनीकरण जर्नल आणि पवित्र उत्सवांचे दृश्य चित्रपट.',
    items: [
      { id: 'v1', title: 'The Kartik Deepotsav Celebration (Full Video)', description: 'A beautiful visual documentary showcasing the lighting of 1008 clay lamps around the temple and the evening processional chants.', duration: '5:24', videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-candles-burning-in-a-dark-room-41662-large.mp4', thumbnailUrl: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=500' },
      { id: 'v2', title: 'Restoring the Laterite Stone Sanctum', description: 'A quiet time-lapse and explanation of the lime-plastering technique used by master stonemasons during the 2018 renovation.', duration: '8:12', videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-carving-a-stone-block-43033-large.mp4', thumbnailUrl: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=500' }
    ],
    fallback: 'आपला ब्राउझर व्हिडिओ टॅग समर्थित नाही.',
    videoClipLabel: 'व्हिडिओ क्लिप ({duration})'
  },
  donation: {
    sectionLabel: 'दान',
    title: 'व्यवस्थापनासाठी पाठिंबा',
    intro: 'शतके जुना सार्वजनिक विश्वस्त म्हणून आमची देणग्या मंदिर देखभाल, क्लिनिक सेवा आणि शैक्षणिक निधींसाठी वापरल्या जातात.',
    upiTitle: 'UPI स्कॅन करून दान करा',
    qrAlt: 'दान UPI QR कोड',
    scanInstructions: 'BHIM, UPI, GPAY किंवा PhonePe वापरा',
    bankLabels: { bankName: 'बँकेचे नाव', accountName: 'खाते नाव', accountNumber: 'खाते क्रमांक', ifsc: 'IFSC कोड', branch: 'शाखा' },
    directRemittanceTitle: 'थेट बँक हस्तांतरण',
    transparencyTitle: 'पारदर्शकता वचन',
    transparencyStatement: 'सर्व निधी सार्वजनिक विश्वस्त पारदर्शकतेत व्यवस्थापित केले जातात आणि फक्त मंदिर देखभाल, समुदाय आरोग्य आणि शिक्षणासाठी वापरले जातात.'
  },
  contact: {
    sectionLabel: 'व्यवस्थापन',
    title: 'कार्यालयाशी संपर्क साधा',
    subtitle: 'दस्तऐवज संशोधन, शिष्यवृत्ती अर्ज किंवा वंश तपशील अद्यतनांसाठी कृपया कार्यालयाशी संपर्क साधा.',
    phoneLabel: 'फोन संपर्क',
    emailLabel: 'ई-मेल',
    officeLabel: 'पौराणिक कार्यालय',
    availableHours: 'उपलब्ध: सोम – शनि: 09:00 AM – 05:00 PM',
    emailResponseTime: 'आम्ही 48 तासांत उत्तर देतो'
  },
  location: {
    sectionLabel: 'तीर्थयात्रा',
    title: 'देवस्थानाचे ठिकाण आणि दर्शनाची वेळ',
    intro: 'रत्नागिरीमध्ये श्री भगवती देवस्थानास भेट देणाऱ्यांसाठी मार्गदर्शक आणि नकाशे.',
    address: 'Shree Bhagavati Temple Valley, Devasthan Road, Dabhol Taluka, Ratnagiri District, Maharashtra - 415706',
    landmarks: ['Dabhol Ferry Creek जेटीपासून 6 किमी पूर्वेस', 'प्राचीन देवराई (पवित्र जंगल) च्या मागे'],
    parking: 'देवळाच्या प्रवेशद्वाराजवळ विनामूल्य पार्किंग उपलब्ध आहे. वाहने बाह्य दगडी वेशपर्यंत जाऊ नयेत.',
    visitingHours: 'दररोज: 05:00 AM – 12:30 PM, आणि 04:30 PM – 09:00 PM. (दुपारची विश्रांती पाळली जाते).',
    addressLabel: 'पत्ता',
    visitingHoursLabel: 'दर्शनाची वेळ',
    landmarksLabel: 'मुख्य ठिकाणे',
    parkingLabel: 'पर्यावरण व पार्किंग'
  },
  // compatibility fields
  siteTitle: 'श्री भगवती देवी कुटुंब विश्वस्त',
  metaDescription: 'देवस्थान, विधी आणि कुटुंबाच्या पुराभिलेखांचे डिजिटल संरक्षण करणारा एक सतत चालणारा वारसा प्रकल्प.',
  nav: {
    about: 'आमच्या विषयी',
    devi: 'देवी',
    temple: 'देवस्थान',
    legacy: 'वारसा',
    timeline: 'कालरेखा',
    gallery: 'चित्रदालन',
    festivals: 'उत्सव',
    archive: 'पुराभिलेख',
    donation: 'दान',
    location: 'ठिकाण',
    contact: 'संपर्क'
  },
  sections: {
    about: 'कुटुंब विश्वस्ताविषयी',
    trust: 'विश्वस्त व्यवस्थापन',
    values: 'मूलभूत मूल्ये'
  },
  footer: {
    sacredQuoteDevanagari: '“परित्राणाय साधूनां विनाशाय च दुष्कृताम् । धर्मसंस्थापनार्थाय सम्भवामि युगे युगे ॥”',
    trustName: 'श्री भगवती देवी देवस्थान चॅरिटेबल ट्रस्ट',
    registration: 'बॉम्बे सार्वजनिक ट्रस्ट्स एक्ट, 1950 अंतर्गत नोंदणीकृत | नोंदणी क्र. E-281 (रत्नागिरी)',
    copyright: '© {year} श्री भगवती देवी कुटुंब विश्वस्त. सर्व हक्क सुरक्षित.'
  },
  forms: {},
  accessibility: {
    skipToMain: 'मुख्य मजकूरावर जा',
    logoAlt: 'भगवती देवी ट्रस्ट लोगो',
    toggleMenu: 'नेव्हिगेशन मेनू टॉगल करा',
    biographyFor: 'या व्यक्तीचे चरित्र तपशील: {name}',
    documentViewerFor: 'दस्तऐवज दृश्यासाठी: {title}',
    timelineEventFor: 'वर्ष {year} साठी कालरेखा घटना: {title}'
  },
  metadata: {
    keywords: 'भगवती देवी, कुटुंब विश्वस्त, रत्नागिरी, कोकण मंदिर, वारसा आर्काइव्ह, पानपत्र हस्तलिखिते, वैदिक पठण, डिजिटल संग्रह',
    author: 'श्री भगवती देवी कुटुंब विश्वस्त'
  }
};

export default mr;
