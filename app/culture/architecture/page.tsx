'use client';

import React from 'react';
import Link from 'next/link';
import { Building2, Compass, Layers, ShieldCheck, Sparkles, ChevronRight, ArrowRight, MapPin } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';

export default function ArchitectureEncyclopediaPage() {
  const { language } = useLanguage();

  const elements = [
    {
      id: 'mashrabiya',
      name: 'Mashrabiya & Roshan',
      arabic: 'المشربية والرواشن',
      image: '/images/culture/mashrabiya.jpg',
      category: 'Thermal & Privacy Lattice',
      desc: 'Projecting oriel wooden lattice window screens engineered to provide natural ventilation, soft diffused lighting, and domestic privacy across coastal Arabia and Hijaz.',
      feature: 'Passive Convective Cooling'
    },
    {
      id: 'barjeel',
      name: 'Barjeel (Wind Towers)',
      arabic: 'البراجيل (ملاقف الهواء)',
      image: '/images/culture/barjeel.jpg',
      category: 'Atmospheric Air Catchers',
      desc: 'Traditional passive architectural cooling towers that capture high-altitude desert breezes and channel them downwards through interior courtyards and water basins.',
      feature: 'Natural Temperature Regulation'
    },
    {
      id: 'muqarnas',
      name: 'Muqarnas Vaulting',
      arabic: 'المقرنصات الهندسية الفاخرة',
      image: '/images/culture/muqarnas.jpg',
      category: 'Corbelled Honeycomb Geometry',
      desc: 'Three-dimensional geometric architectural vaulting creating transitional honeycombed brackets beneath domes and arches with delicate gold leaf and stucco.',
      feature: 'Sacred Structural Math'
    },
    {
      id: 'fina',
      name: 'Finā\' (Central Courtyard)',
      arabic: 'الفناء الداخلي ورياض الأندلس',
      image: '/images/history/andalus.jpg',
      category: 'Microclimatic Sanctuaries',
      desc: 'The private open-air heart of Arabian homes, functioning as a microclimatic thermal buffer, family gathering sanctuary, and central daylight source.',
      feature: 'Courtyard Thermal Buffer'
    },
    {
      id: 'arches',
      name: 'Horseshoe & Ogee Arches',
      arabic: 'العقود الأندلسية والإسلامية',
      image: '/images/history/andalus.jpg',
      category: 'Arcade Structural Load',
      desc: 'Iconic curved and pointed arch forms distributing ceiling loads across stone arcades with harmonic aesthetic elegance and polychrome voussoirs.',
      feature: 'Load-Bearing Symmetry'
    },
    {
      id: 'najdi',
      name: 'Najdi Crenellations',
      arabic: 'الشرفات والمثلثات النجدية',
      image: '/images/palaces/yamamah-palace.jpg',
      category: 'Adobe Fortification & Vent',
      desc: 'Distinctive triangular parapet perforations atop fortified mudbrick walls in central Arabia serving defensive sightlines, thermal ventilation, and Salmani identity.',
      feature: 'Rammed-Earth Fortification'
    }
  ];

  const eras = [
    {
      id: 'rock-cut',
      number: '01',
      era: 'Ancient Rock-Cut Masonry',
      arabic: 'العمارة النبطية والسبئية الصخرية',
      title: 'Nabataean & Sabaean Monolithic Feats',
      image: '/images/alula.jpg',
      location: 'AlUla (Hegra) & Petra',
      desc: 'Carved directly into soaring sandstone massifs, utilizing classical Hellenistic pediments blended with Arabian crowstep attics and sophisticated subterranean ceramic water pressure channels.'
    },
    {
      id: 'najdi-mudbrick',
      number: '02',
      era: 'Najdi Adobe Architecture',
      arabic: 'العمارة الطينية النجدية والتراث السلماني',
      title: 'At-Turaif Citadel & Salmani Renaissance',
      image: '/images/palaces/yamamah-palace.jpg',
      location: 'Diriyah & Riyadh',
      desc: 'Multi-story rammed-earth palaces of central Arabia engineered with thick thermal mass walls, courtyards, and triangular ventilation holes, revived today in Riyadh’s contemporary Salmani code.'
    },
    {
      id: 'coastal-vernacular',
      number: '03',
      era: 'Gulf Coastal Vernacular',
      arabic: 'العمارة الساحلية وملاقف الرياح',
      title: 'Coral Stone & Wind Catchers',
      image: '/images/culture/barjeel.jpg',
      location: 'Dubai, Muharraq & Kuwait City',
      desc: 'Maritime towns built with porous marine coral stone and gypsum (Juss), crowned by four-directional Barjeel wind catchers creating cooling draft circulation throughout intense summers.'
    },
    {
      id: 'modern-synthesis',
      number: '04',
      era: 'Neo-Futuristic Islamic Synthesis',
      arabic: 'الصروح المعمارية الحديثة وناطحات السحاب',
      title: 'Iconic Arabian Skyscraper Metropolises',
      image: '/images/riyadh.jpg',
      location: 'Riyadh, Dubai, Abu Dhabi & Doha',
      desc: 'Burj Khalifa, Museum of the Future, Louvre Abu Dhabi, and King Abdullah Financial District, harmonizing computational aerodynamics with classical Islamic sacred geometry.'
    }
  ];

  return (
    <div className="bg-[#FAF9F5] text-charcoal min-h-screen selection:bg-antiqueGold selection:text-black">
      
      {/* Editorial Archival Hero Header */}
      <section className="relative overflow-hidden bg-black text-white pt-24 pb-16 sm:pt-32 sm:pb-24 border-b border-[#E5C98E]/30">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/culture/mashrabiya.jpg"
            alt="Arabian Architecture Encyclopedia"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-white/60 mb-6 font-serif">
            <Link href="/" className="hover:text-[#E5C98E] transition-colors">Archive</Link>
            <ChevronRight className="h-3 w-3 text-white/40" />
            <Link href="/culture" className="hover:text-[#E5C98E] transition-colors">Culture</Link>
            <ChevronRight className="h-3 w-3 text-white/40" />
            <span className="text-[#E5C98E] font-semibold">Architecture Encyclopedia</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-[#E5C98E]/40 bg-[#123C33]/60 backdrop-blur-md px-3.5 py-1 text-xs font-serif uppercase tracking-widest text-[#E5C98E] font-semibold mb-4">
              <Building2 className="h-3.5 w-3.5 text-[#E5C98E]" />
              <span>{language === 'ar' ? 'الموسوعة المعمارية والهندسية' : 'Structural & Spatial Geometry'}</span>
            </div>
            
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
              {language === 'ar' ? 'موسوعة العمارة العربية والإسلامية' : 'Arabian Architecture Encyclopedia'}
            </h1>
            
            <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed mb-6">
              {language === 'ar'
                ? 'توثيق شامل لآلاف السنين من الابتكار الإنشائي، والحلول البيئية الفعالة، والزخارف الهندسية المقدسة، والصروح المعمارية المعاصرة في العالم العربي.'
                : 'A specialized archival monograph documenting millennia of structural innovations, passive thermal engineering, sacred geometries, and modern iconic megastructures across the Arab world.'}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-serif text-[#E5C98E]">
              <span className="flex items-center gap-1.5 bg-black/60 border border-[#E5C98E]/30 px-3 py-1">
                <span>🏛️</span> 6 Canonical Elements
              </span>
              <span className="flex items-center gap-1.5 bg-black/60 border border-[#E5C98E]/30 px-3 py-1">
                <span>📐</span> 4 Historical Eras
              </span>
              <span className="flex items-center gap-1.5 bg-black/60 border border-[#E5C98E]/30 px-3 py-1">
                <span>🌬️</span> Climate-Responsive Design
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Canonical Elements Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-bold block mb-1">
            {language === 'ar' ? 'العناصر الهندسية الأصيلة' : 'Spatial Vocabulary'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123C33]">
            {language === 'ar' ? 'الركائز المعمارية الكلاسيكية' : 'Canonical Architectural Elements'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2">
            {language === 'ar'
              ? 'مفردات البناء والحلول المناخية الفطرية التي شكلت الهوية العمرانية للجزيرة العربية والعالم الإسلامي.'
              : 'Structural vocabulary and climate-responsive innovations of traditional Arab and Islamic engineering.'}
          </p>
        </div>

        {/* 6 Full Photographic Cards with Gradient Overlays */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {elements.map((el, i) => (
            <div
              key={el.id}
              className="group relative overflow-hidden aspect-[3/4.2] sm:aspect-[3/4.4] border border-[#E5C98E]/30 bg-black shadow-md hover:shadow-2xl hover:border-[#E5C98E] transition-all duration-500 flex flex-col justify-end"
            >
              {/* Background Full Bleed Photo */}
              <div className="absolute inset-0 z-0">
                <img
                  src={el.image}
                  alt={el.name}
                  className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 via-50% to-black/35 group-hover:from-black/98 group-hover:via-black/60 transition-colors duration-500" />
              </div>

              {/* Top Meta Badges */}
              <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
                <span className="font-serif text-[11px] font-bold text-[#E5C98E] tracking-wider uppercase bg-black/60 backdrop-blur-md px-2.5 py-1 border border-[#E5C98E]/30">
                  Element 0{i + 1}
                </span>
                <span className="text-[10px] font-medium text-white/90 bg-[#123C33]/80 backdrop-blur-md px-2.5 py-1 border border-[#E5C98E]/20">
                  {el.feature}
                </span>
              </div>

              {/* Bottom Card Content */}
              <div className="relative z-10 p-5 space-y-2 text-white">
                <div className="text-[10px] uppercase font-serif tracking-widest text-[#E5C98E] font-medium">
                  {el.category}
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#E5C98E] transition-colors leading-tight">
                  {el.name}
                </h3>

                <div className="font-arabicHeading text-sm font-semibold text-[#E5C98E] leading-snug">
                  {el.arabic}
                </div>

                <p className="text-xs text-stone-300 font-light leading-relaxed line-clamp-3 pt-1 border-t border-white/10">
                  {el.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Architectural Eras Section */}
      <section className="bg-white border-t border-b border-[#E5C98E]/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-bold block mb-1">
              {language === 'ar' ? 'التسلسل التاريخي للعمارة' : 'Chronological Timeline'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123C33]">
              {language === 'ar' ? 'العصور والأنماط المعمارية الكبرى' : 'Architectural Eras & Typologies'}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              {language === 'ar'
                ? 'من المعابد المنحوتة في الصخور إلى مدن المستقبل وناطحات السحاب الشاهقة.'
                : 'From rock-carved sanctuaries of antiquity to soaring desert megastructures.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eras.map((era) => (
              <div
                key={era.id}
                className="group relative overflow-hidden border border-[#E5C98E]/30 bg-black min-h-[320px] shadow-lg hover:border-[#E5C98E] transition-all duration-500 flex flex-col justify-end"
              >
                {/* Background Photo */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={era.image}
                    alt={era.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />
                </div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
                  <span className="font-serif text-xs font-bold text-[#E5C98E] uppercase tracking-widest bg-black/70 px-3 py-1 border border-[#E5C98E]/30">
                    Era {era.number} · {era.era}
                  </span>
                  <span className="text-xs text-white/80 bg-[#123C33]/80 px-2.5 py-1 flex items-center gap-1 border border-[#E5C98E]/20">
                    <MapPin className="h-3 w-3 text-[#E5C98E]" />
                    {era.location}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 space-y-2 text-white">
                  <div className="font-arabicHeading text-xs text-[#E5C98E] font-medium">
                    {era.arabic}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#E5C98E] transition-colors">
                    {era.title}
                  </h3>
                  <p className="text-xs text-stone-300 font-light leading-relaxed pt-2 border-t border-white/10">
                    {era.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Explore Culture & History */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="border border-[#E5C98E]/40 bg-[#123C33] p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase font-serif tracking-widest text-[#E5C98E] font-semibold block">
              {language === 'ar' ? 'استكشف التراث الثقافي' : 'Continue Your Exploration'}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              {language === 'ar' ? 'التعمق في الفنون والتراث الحي' : 'Discover the Intangible Heritage of Arabia'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-light">
              {language === 'ar'
                ? 'تعرف على تقاليد القهوة، والصقارة، والخط العربي، والغوص على اللؤلؤ في سجلاتنا التوثيقية الشاملة.'
                : 'Explore Gahwa hospitality rituals, royal falconry, Arabic calligraphy, and pearl diving traditions in our archival monograph.'}
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/culture"
                className="px-6 py-3 bg-[#E5C98E] text-black font-serif font-bold text-xs hover:bg-[#d6b777] transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>{language === 'ar' ? 'تصفح ركائز الثقافة والتراث' : 'View Culture Archive'}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/landmarks"
                className="px-6 py-3 bg-transparent border border-[#E5C98E] text-[#E5C98E] font-serif font-semibold text-xs hover:bg-[#E5C98E]/10 transition-all inline-flex items-center gap-2"
              >
                <span>{language === 'ar' ? 'المعالم الأثرية والصروح' : 'Monumental Landmarks'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
