# Translation Audit

This file lists all remaining hardcoded user-facing strings found across components.
Each entry includes: file path, extracted strings, and proposed translation keys (group.key).

---

## App.tsx
- "Skip to main content" -> `accessibility.skipToMain`
- "Loading heritage experience…" -> `common.loading`
- Meta: `meta.keywords` (comma list), `meta.author` (proper noun; keep as-is)

## Navbar.tsx
- `aria-label="Main Navigation"` (keep static)
- "Bhagavati Devi Trust Logo" -> `accessibility.logoAlt`
- "भगवती देवस्थान" (nav title) -> `nav.title`
- Mobile toggle aria: "Toggle Navigation Menu" -> `accessibility.toggleMenu`
- Language switch aria-template "Switch language to ..." -> use programmatic template in code

## Hero.tsx
- Sanskrit/English quotes are in `mockTrustData` currently. Consider moving `englishQuote` to `hero.quoteEnglish` and `sanskritQuote` to `hero.sanskrit`.
- Diya aria-label "Scroll to explore heritage" -> `hero.exploreCta`

## AboutTrust.tsx
- "About The Family Trust" -> `sections.about.title` (already exists)
- "Core Virtues" -> `about.coreVirtues.title`
- "Trust Stewardship" -> `about.stewardship.title`

## BhagavatiDevi.tsx
- "Divine Mother" -> `deity.label`
- "Bhagavati Devi" (proper noun — do not translate) -> keep in content keys or in mockData
- "Sacred Iconography" -> `deity.iconography.title`
- alt text: "Bhagavati Devi Sacred Iconography Artwork" -> `deity.imageAlt` (keep proper noun unchanged)

## BiographyDrawer.tsx
- aria-label template "Biography details for {name}" -> `accessibility.biographyFor`
- "Close details" -> `common.close`
- "Historical Narrative" -> `biography.narrativeTitle`
- "Key Contributions" -> `biography.contributionsTitle`
- "Archived Anecdotes" -> `biography.anecdotesTitle`
- "Lineage Context" -> `biography.lineageTitle`
- "Parentage" -> `biography.parentageLabel`
- "Offspring" -> `biography.offspringLabel`
- Generation prefix: "Generation {n}" -> `biography.generationPrefix`

## Archive.tsx
- "Heritage Museum" -> `sections.archive.label`
- "The Digital Archive Room" -> `archive.title`
- Archive intro sentence -> `archive.intro`
- Input placeholder: "Search manuscripts, transcriptions, letters..." -> `archive.searchPlaceholder`
- docCategories: ['All','Manuscripts','Letters','Certificates','Records'] -> `archive.filters`
- "Author: {name}" -> `archive.authorLabel`
- "View Document" -> `archive.viewDoc`
- "PDF File Document" -> `archive.pdfLabel`
- "No manuscripts or documents matched your search query." -> `archive.noResults`
- Modal aria-label template: "Document viewer for {title}" -> `accessibility.documentViewerFor`
- "Attached Document: {title}" -> `archive.attachedDocument`
- "Historical Record Scan" -> `archive.historicalRecordFallback`
- "Archived Document Scan" -> `archive.documentAltFallback`
- "Steward/Author:" -> `archive.stewardLabel`
- "Format:" -> `archive.formatLabel`
- "English Translation Excerpt" -> `archive.translationExcerpt`
- "Download Archive Scan" -> `archive.downloadScan`
- Alert text for simulated download -> `archive.downloadAlert`

## Gallery.tsx
- Section label/title/intro moved already to `gallery.*`.
- Filter categories come from `gallery.filters`.
- aria-label for image -> template `gallery.viewImageFor`
- Lightbox close/prev/next -> `gallery.lightbox.close`, `.previous`, `.next`
- Meta labels: `common.category`, `common.year` already added.

## Donation.tsx
- "Trust Support" -> `sections.donation.label`
- "Support the Endowment" -> `donation.title`
- Donation intro paragraph -> `donation.intro`
- "UPI Scan to Offer" -> `donation.upiTitle`
- alt text: "Endowment Donation UPI QR Code" -> `donation.qrAlt`
- "Scan via any BHIM, UPI, GPAY or PhonePe application" -> `donation.scanInstructions`
- Bank labels: `donation.bankNameLabel`, `donation.accountNameLabel`, `donation.accountNumberLabel`, `donation.ifscLabel`, `donation.branchLabel`
- "Direct Bank Remittance" -> `donation.directRemittanceTitle`
- "Transparency Pledge" -> `donation.transparencyTitle`

## FamilyLegacy.tsx
- "Ancestral Continuity" -> `sections.legacy.label`
- "The Family Legacy" -> `legacy.title`
- "Gen {n}" generation label -> `legacy.generationPrefix`
- "Click to view archive & stories" -> `legacy.clickToView`
- Drawer open aria-template already captured in BiographyDrawer keys

## FamilyTree.tsx
- "Interactive Lineage" -> `sections.familyTree.label`
- "The Vamshavriksha" -> `familyTree.title` (Vamshavriksha may be treated as a proper name)
- Instruction: "*Scroll horizontally on mobile viewports to explore full lineages." -> `familyTree.mobileHint`
- Node name splitting may need localization for display strategy

## Festivals.tsx
- "Ancestral Festivities" -> `sections.festivals.label`
- "Ritual Gatherings & Festivals" -> `festivals.title`
- Intro paragraph -> `festivals.intro`
- Festival data (names, timings, descriptions, heritageStory) -> `festivals.items[]` (content should be localized)
- "Family Heritage Story" -> `festivals.heritageLabel`

## Footer.tsx
- Sacred quote (Devanagari) -> `footer.sacredQuoteDevanagari`
- Footer trust name/registration/copyright -> `footer.*` (already added)

## Gallery/VideoArchive
- Video section labels -> `video.title`, `video.label`, `video.intro`
- Video fallback: "Your browser does not support the video tag." -> `video.fallback`
- "Video Clip ({duration} mins)" -> template `video.clipLabel`

## OralHistory.tsx
- "Oral Heritage" -> `sections.oral.label`
- "Elders' Oral History Archive" -> `oral.title`
- Intro paragraph -> `oral.intro`
- "Duration:" -> `oral.durationLabel`
- Play/Pause aria-labels -> `audio.play`, `audio.pause`
- "English Transcript" -> `oral.transcript.englishTab`
- "Marathi Translation" -> `oral.transcript.marathiTab`
- Transcript tab labels and other UI strings

## Location.tsx
- "Pilgrimage" -> `sections.location.label`
- "Temple Location & Visiting Hours" -> `location.title`
- Intro paragraph -> `location.intro`
- "Address" -> `location.addressLabel`
- "Visiting Hours" -> `location.visitingHoursLabel`
- "Landmarks" -> `location.landmarksLabel`
- "Environment & Parking" -> `location.environmentLabel`
- iframe title -> `location.mapTitle`

## Timeline.tsx
- "Chronology of Grace" -> `sections.timeline.label`
- "History & Milestones" -> `timeline.title`
- Intro paragraph -> `timeline.intro`
- "Attached Document: {title}" -> `timeline.attachedDocument`
- "Historical Record Scan" -> `timeline.recordFallback`
- "Archived Document Scan" -> `timeline.archiveDocAlt`
- "Oral History Soundclip Excerpt" -> `timeline.audioLabel`

## Temple.tsx
- Button title/aria/title "Ring temple bell" -> `temple.ringBell`
- Alt text: "Temple Red Laterite Architecture" -> `temple.imageAlt`
- Small note: "*Click the bell icon to ring. Sacred incense smoke rises from the courtyard below." -> `temple.bellNote`
- "Temple Architecture" -> `sections.temple.label`
- "The Sacred Sanctuary" -> `temple.title`
- "Daily Nitya Vidhi" -> `temple.dailyTitle`

## VideoArchive.tsx
- (covered above)

## Contact.tsx
- Section label/title already added in translations.
- "Available Mon – Sat: 09:00 AM – 05:00 PM" -> moved to translations
- "We respond to heritage queries within 48 hours" -> moved
- "Located directly adjacent to the temple hall" replaced with landmarks (consider translation)

---

Notes & Recommendations
- Many content-rich items currently live in `src/constants/mockData.ts` (aboutStory, trustValues, deityDescription, timelineEvents, familyMembers, galleryItems, festivalData, oralHistories, videoArchive, donationDetails, locationDetails). These should be merged into the translation schema under relevant groups (e.g., `about.story`, `trust.values`, `deity.description`, `timeline.events[]`, `family.members[]`, `gallery.items[]`, `festivals.items[]`, `oral.histories[]`, `video.items[]`, `donation.details`, `location.details`).
- Maintain identical structure between `en.json` and `mr.json`. For large arrays (timelineEvents, familyMembers) provide localized equivalents in Marathi JSON; where Marathi versions already exist (e.g., `marathiName` in mockData), preserve them.
- Do NOT translate proper nouns: `Shree Bhagavati Devi`, `Ratnadurg Fort`, `Ratnagiri`, `Chhatrapati Shivaji Maharaj`, `Kanhoji Angre` — ensure these appear identical in both translation files.

Next steps (per new strategy):
1. Create a single clean translation schema JSON (empty strings for Marathi where not available) covering all keys above.
2. Migrate content from `mockData` that is user-facing into `en.json` under appropriate groups.
3. Create matching keys in `mr.json` (populate where Marathi content already exists, otherwise duplicate English as placeholder) to keep structure identical.
4. Leave `mockData.ts` for non-translatable technical data (image URLs, IDs) and remove duplicate textual content from it (or keep as fallback). We'll update components to consume translations only after step 3 is complete.

Audit generated on 2026-08-05.
