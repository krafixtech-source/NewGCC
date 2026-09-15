export interface VideoPromptItem {
  id: string;
  title: string;
  section: string;
  aspectRatio: '16:9' | '4:5' | '3:4' | '21:9';
  recommendedFileSlot: string;
  prompt: string;
  notes?: string;
}

export const NEGATIVE_PROMPT = `Avoid AI-generated appearance, fantasy architecture, surreal structures, fake Arabic writing, excessive gold, artificial glow, oversaturated orange tones, dramatic fantasy clouds, duplicated architectural elements, malformed geometric patterns, plastic textures, impossible buildings, unrealistic symmetry, luxury advertising aesthetic, cyberpunk elements, futuristic fantasy, floating objects, stereotypical desert imagery, fake historical people and excessive HDR processing.`;

export const videoPromptsCatalog: VideoPromptItem[] = [
  {
    id: 'hero-video',
    title: 'Hero — The Arab World, Documented',
    section: '02 / Full-screen Documentary Hero',
    aspectRatio: '16:9',
    recommendedFileSlot: '/public/videos/hero.mp4',
    prompt: `Create a premium documentary-style cinematic video representing the Arab world through authentic architecture, landscapes and cultural heritage. Begin with a slow sunrise aerial over historic Arabian architecture, transition to calm Arabian Gulf coastline, close-up architectural details of carved stone and geometric craftsmanship, sophisticated modern Gulf skyline, historic fortress exterior, ancient Arabic manuscripts in an archival environment and finish with a vast Arabian mountain and desert landscape. Natural sunlight, restrained color grading, realistic camera movement, high-end documentary cinematography, museum editorial aesthetic, no fantasy architecture, no artificial gold glow, no text, no logos, no stereotypical imagery, photorealistic, 4K, cinematic 16:9.`,
    notes: 'Sequence: 7 documentary shots, 1.5–2.5s per shot. Loops seamlessly.'
  },
  {
    id: 'land-video',
    title: 'A Land of Stories — 01 Land',
    section: '06 / A Land of Stories',
    aspectRatio: '16:9',
    recommendedFileSlot: '/public/videos/land.mp4',
    prompt: `Create a slow observational documentary film of the Arabian Peninsula and wider Arab landscapes. Show dramatic Omani mountains, Saudi desert formations, Jordanian sandstone landscapes, Gulf coastline and historic settlement architecture. Natural morning and evening sunlight, slow drone movement, authentic geography, restrained documentary color grading, sophisticated cultural film aesthetic, photorealistic, no people posing for camera, no text, 16:9.`,
    notes: 'Observational landscapes of Peninsula and wider Arab world.'
  },
  {
    id: 'people-video',
    title: 'A Land of Stories — 02 People',
    section: '06 / A Land of Stories',
    aspectRatio: '16:9',
    recommendedFileSlot: '/public/videos/people.mp4',
    prompt: `Create an authentic editorial documentary sequence about everyday Arab cultural heritage without focusing on identifiable individuals. Show hands creating traditional crafts, Arabic calligraphy being written, coffee being prepared, textile craftsmanship, traditional doors being restored, books being studied in a library and artisans working with wood and metal. Natural window light, observational cinematography, close-up textures, sophisticated documentary photography in motion, understated luxury, culturally respectful, no staged smiles, no text, 16:9.`,
    notes: 'Focus on craftsmanship, hands, manuscripts, and hospitality.'
  },
  {
    id: 'legacy-video',
    title: 'A Land of Stories — 03 Legacy',
    section: '06 / A Land of Stories',
    aspectRatio: '16:9',
    recommendedFileSlot: '/public/videos/legacy.mp4',
    prompt: `Create a museum-quality documentary film illustrating Arab historical legacy through preserved architecture, ancient manuscripts, archaeological ruins, historic forts, mosque architectural details, old maps and scholarly archives. Slow camera movement, realistic museum lighting, subtle film grain, restrained warm tones, historically respectful, academic documentary aesthetic, photorealistic, no fantasy scenes, no generated readable text, 16:9.`,
    notes: 'Preserved ruins, ancient treaties, historical stone forts.'
  },
  {
    id: 'royalty-video',
    title: 'Dynasties, Leadership & Legacy',
    section: '09 / Royalty Documentary Break',
    aspectRatio: '16:9',
    recommendedFileSlot: '/public/videos/royalty.mp4',
    prompt: `Create a sophisticated museum documentary sequence representing Arabian dynasties without showing identifiable real rulers. Show historic palace corridors, intricately carved doors, archival documents, royal seals displayed in museum cases, traditional ceremonial architecture, empty formal halls and historic exterior residences. Restrained natural and museum lighting, archival documentary feeling, elegant slow camera movement, deep but natural colors, no fantasy palace, no people, no crowns floating in scene, no text, 16:9.`,
    notes: 'No AI fake rulers. Real monarchs use verified official photography only.'
  },
  {
    id: 'history-video',
    title: 'The Arab World Through Time',
    section: '13 / History Full-Screen Film',
    aspectRatio: '16:9',
    recommendedFileSlot: '/public/videos/history.mp4',
    prompt: `Create an elegant historical documentary sequence moving conceptually through Arab history using real-world visual environments rather than recreated battles. Ancient desert archaeological sites, Nabataean stone architecture, old mosque courtyards, medieval manuscript details, preserved city walls, Ottoman-era architectural remnants, historical Gulf forts and early twentieth-century urban heritage buildings. Slow camera motion, natural light, cinematic documentary realism, subtle film texture, historically respectful, no actors, no battle recreation, no text, no fantasy, 16:9.`,
    notes: 'Full-width cinematic break with subtle text overlay.'
  },
  {
    id: 'alula-video',
    title: 'Landmark Stories — AlUla',
    section: '16 / Landmark Stories',
    aspectRatio: '16:9',
    recommendedFileSlot: '/public/videos/alula.mp4',
    prompt: `Observational archaeological documentary footage of AlUla Saudi Arabia, slow movement around monumental sandstone formations and preserved Nabataean tomb architecture, gentle early morning sunlight, authentic natural textures, minimal visitors, restrained film color grading, museum heritage documentary aesthetic, no dramatic artificial lighting, no text, 16:9.`,
    notes: 'Authentic Hegra sandstone tombs at golden dawn.'
  },
  {
    id: 'petra-video',
    title: 'Landmark Stories — Petra',
    section: '16 / Landmark Stories',
    aspectRatio: '16:9',
    recommendedFileSlot: '/public/videos/petra.mp4',
    prompt: `Slow cinematic documentary video moving toward the Treasury at Petra through the narrow Siq canyon, authentic rose-colored sandstone textures, natural daylight, realistic scale, minimal visitors, subtle handheld and stabilized camera feel, archaeological documentary aesthetic, natural colors, no dramatic fantasy lighting, no text, photorealistic, 16:9.`,
    notes: 'Siq canyon into the Treasury facade.'
  },
  {
    id: 'diriyah-video',
    title: 'Landmark Stories — Diriyah (At-Turaif)',
    section: '16 / Landmark Stories',
    aspectRatio: '16:9',
    recommendedFileSlot: '/public/videos/diriyah.mp4',
    prompt: `Premium architectural documentary film of historic At-Turaif Diriyah in Saudi Arabia, slow movement through authentic Najdi mudbrick structures, courtyards and narrow passageways, soft morning sunlight, realistic earth textures, heritage preservation atmosphere, sophisticated architectural cinematography, no staged actors, no fantasy reconstruction, no text, 16:9.`,
    notes: 'UNESCO World Heritage Najdi mudbrick architecture.'
  },
  {
    id: 'riyadh-video',
    title: 'City Portrait — Riyadh',
    section: '17 / Cities',
    aspectRatio: '16:9',
    recommendedFileSlot: '/public/videos/riyadh.mp4',
    prompt: `Authentic contemporary documentary film of Riyadh Saudi Arabia combining historic Najdi architectural heritage with modern urban development. Begin with traditional Diriyah mudbrick architecture, transition to clean contemporary streets, distinctive modern Saudi architecture and finish with a wide Riyadh skyline at sunset. Realistic city atmosphere, sophisticated architectural documentary cinematography, natural lighting, restrained color grading, no futuristic fantasy skyline, no text, 16:9.`,
    notes: 'Diriyah into modern architectural skyline.'
  },
  {
    id: 'muscat-video',
    title: 'City Portrait — Muscat',
    section: '17 / Cities',
    aspectRatio: '16:9',
    recommendedFileSlot: '/public/videos/muscat.mp4',
    prompt: `Premium documentary film of Muscat Oman, showing white low-rise Omani architecture, rocky mountains, historic forts, coastline and traditional architectural details. Soft morning sunlight, slow cinematic movement, natural muted colors, sophisticated travel-documentary aesthetic without tourism advertising style, realistic city atmosphere, no text, 16:9.`,
    notes: 'Low-rise white coastal architecture against rugged mountains.'
  },
  {
    id: 'abudhabi-video',
    title: 'City Portrait — Abu Dhabi',
    section: '17 / Cities',
    aspectRatio: '16:9',
    recommendedFileSlot: '/public/videos/abudhabi.mp4',
    prompt: `Elegant architectural documentary video of Abu Dhabi United Arab Emirates, refined waterfront, contemporary cultural architecture, traditional Emirati architectural details and wide city views. Clean natural daylight, restrained color palette, slow controlled camera movement, sophisticated editorial film aesthetic, realistic atmosphere, no excessive luxury imagery, no supercars, no text, 16:9.`,
    notes: 'Saadiyat cultural district and coastal architecture.'
  }
];

export const photoPromptsCatalog = [
  {
    category: 'Architecture',
    aspectRatio: '4:5',
    prompt: `High-end editorial architectural photograph of authentic Islamic and Arabian architectural craftsmanship, close-up stone archway with precise geometric details, naturally aged materials, soft directional daylight, quiet composition, realistic texture, museum architecture publication aesthetic, subtle neutral color grading, no artificial gold, no people, no text, 4:5.`
  },
  {
    category: 'Calligraphy',
    aspectRatio: '4:5',
    prompt: `Documentary close-up photograph of an Arabic calligrapher's workspace, handmade paper, traditional reed pen, natural ink, writing tools arranged organically, hand partially visible creating calligraphy, warm natural side light, shallow depth of field, authentic materials, sophisticated cultural editorial photography, no staged luxury props, no generated readable words, photorealistic, 4:5.`
  },
  {
    category: 'Craftsmanship',
    aspectRatio: '4:5',
    prompt: `Premium documentary photography of an Arab artisan working by hand on traditional metal or wood craftsmanship, close-up focus on hands and authentic tools, workshop environment, natural ambient light, realistic material texture, understated colors, observational museum documentary style, no posing, no text, photorealistic, 4:5.`
  },
  {
    category: 'Arabic Coffee (Gahwa)',
    aspectRatio: '4:5',
    prompt: `Sophisticated editorial documentary photograph of traditional Arabic coffee preparation, authentic dallah coffee pot and small finjan cups on a simple natural surface, soft window sunlight, realistic metal texture, minimal styling, cultural documentation aesthetic rather than commercial product photography, warm neutral palette, no text, photorealistic, 4:5.`
  },
  {
    category: 'Textile Craftsmanship',
    aspectRatio: '4:5',
    prompt: `Macro editorial documentary photograph of authentic handwoven Arab textile craftsmanship, natural woven fibers and intricate traditional pattern, visible handmade imperfections, soft natural side light, premium museum textile archive aesthetic, subtle earthy color palette, extremely realistic texture, no text, 4:5.`
  },
  {
    category: 'At-Turaif Diriyah Featured Spread',
    aspectRatio: '3:4',
    prompt: `Premium architectural documentary photograph of At-Turaif district in Diriyah, Saudi Arabia, authentic Najdi mudbrick architecture, quiet atmospheric morning, soft natural sunlight revealing material texture, carefully composed architectural photography, minimal people, realistic proportions, sophisticated museum publication aesthetic, neutral restrained color grading, no dramatic artificial sky, no fantasy structures, no text, ultra-realistic, 3:4.`
  },
  {
    category: 'Archive Research Table',
    aspectRatio: '16:9',
    prompt: `Top-down editorial photograph of a historical research archive table containing aged maps, archival photographs, manuscript fragments, cotton gloves, simple magnifying glass and preservation folders, carefully spaced rather than cluttered, neutral museum lighting, natural paper textures, academic archival atmosphere, no artificially generated readable writing, no fantasy props, photorealistic, 16:9.`
  }
];
