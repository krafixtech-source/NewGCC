'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, ShieldCheck, Scroll, Landmark, Crown, Globe, Sparkles, ChevronRight, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';

export default function AboutPage() {
  const { language } = useLanguage();

  const pillars = [
    {
      number: '01',
      title: 'Dynastic & Royal Continuity',
      arabicTitle: 'استمرارية الأسر والبيوت الحاكمة',
      image: '/images/palaces/yamamah-palace.jpg',
      desc: 'Comprehensive genealogical lineages, succession trees, and reign records for the 8 ruling dynasties of the Arabian Peninsula across centuries.',
      badge: 'Genealogical Sovereignty'
    },
    {
      number: '02',
      title: 'Sovereign Arab Statehood',
      arabicTitle: 'توثيق الدول والسيادة الوطنية',
      image: '/images/arab-leaders-summit.jpg',
      desc: 'Exhaustive geopolitical, demographic, legal, and economic documentation for all 22 sovereign member states of the Arab League.',
      badge: 'Geopolitical Atlas'
    },
    {
      number: '03',
      title: 'Civilizational Heritage & Eras',
      arabicTitle: 'العصور والحضارات الإنسانية',
      image: '/images/history/islamic-golden-age.jpg',
      desc: 'From Dilmun, Magan, and Nabataean antiquity to the Umayyad, Abbasid Caliphates, and the Golden Age of scientific breakthroughs.',
      badge: 'Antiquity & Renaissance'
    },
    {
      number: '04',
      title: 'Intangible Cultural Legacy',
      arabicTitle: 'التراث الثقافي غير المادي',
      image: '/images/culture/gahwa.jpg',
      desc: 'Documenting architectural systems, Arabic calligraphy, Gahwa rituals, royal falconry, pearl diving, and classical poetry traditions.',
      badge: 'Living Heritage'
    }
  ];

  return (
    <div className="bg-[#FAF9F5] text-charcoal min-h-screen selection:bg-antiqueGold selection:text-black">
      
      {/* Archival Hero Section */}
      <section className="relative overflow-hidden bg-black text-white pt-24 pb-16 sm:pt-32 sm:pb-24 border-b border-[#E5C98E]/30">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/about/archival-library.jpg"
            alt="Institutional Archival Monograph"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-white/60 mb-6 font-serif">
            <Link href="/" className="hover:text-[#E5C98E] transition-colors">Archive</Link>
            <ChevronRight className="h-3 w-3 text-white/40" />
            <span className="text-[#E5C98E] font-semibold">Institutional Charter</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-[#E5C98E]/40 bg-[#123C33]/60 backdrop-blur-md px-3.5 py-1 text-xs font-serif uppercase tracking-widest text-[#E5C98E] font-semibold mb-4">
              <Scroll className="h-3.5 w-3.5 text-[#E5C98E]" />
              <span>{language === 'ar' ? 'الميثاق التأسيسي والمهمة' : 'Institutional Charter & Mandate'}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
              {language === 'ar' ? 'موسوعة مجلس التعاون والعالم العربي' : 'GCC: The Arab World, Documented'}
            </h1>

            <p className="font-serif text-base sm:text-lg text-[#E5C98E] italic mb-6">
              {language === 'ar' 
                ? '«التاريخ، السيادة، السلالات الحاكمة، والثقافة: ذاكرة رقمية متحفية شاملة»' 
                : '"History. Nations. Royalty. Culture. Legacy. A Permanent Archival Monograph."'}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-serif text-white/80">
              <span className="flex items-center gap-1.5 bg-black/60 border border-[#E5C98E]/30 px-3 py-1 text-[#E5C98E]">
                <ShieldCheck className="h-3.5 w-3.5" /> Peer-Reviewed Standards
              </span>
              <span className="flex items-center gap-1.5 bg-black/60 border border-[#E5C98E]/30 px-3 py-1 text-[#E5C98E]">
                <Crown className="h-3.5 w-3.5" /> 8 Dynasties Documented
              </span>
              <span className="flex items-center gap-1.5 bg-black/60 border border-[#E5C98E]/30 px-3 py-1 text-[#E5C98E]">
                <Globe className="h-3.5 w-3.5" /> 22 Sovereign Nations
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Narrative Treatise */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Institutional Mandate Statement */}
          <div className="lg:col-span-8 space-y-8">
            <div className="border border-[#E5C98E]/30 bg-white p-8 sm:p-12 shadow-sm relative">
              <div className="inline-block border-b-2 border-[#E5C98E] pb-2 mb-6">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-bold block mb-1">
                  {language === 'ar' ? 'الرسالة التأسيسية' : 'Archival Mission'}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#123C33]">
                  {language === 'ar' ? 'الرسالة والرؤية المؤسسية' : 'The Institutional Mandate'}
                </h2>
              </div>

              <div className="space-y-4 text-stone-700 font-light leading-relaxed text-sm sm:text-base">
                <p>
                  <strong className="text-[#123C33] font-serif font-bold">GCC</strong> is an authoritative, independent digital encyclopedia and archival repository dedicated exclusively to the rigorous documentation of the 22 nations of the Arab World, with specialized focus on the Gulf Cooperation Council (GCC) member states, their royal dynasties, governance structures, and deep civilizational lineage.
                </p>
                <p>
                  Unlike generalized open-edit wikis or commercial tourism portals, GCC operates under strict academic and archival protocols. Every historical claim, genealogical branch, and reign date is corroborated against primary state treaties, peer-reviewed university press publications, and official gazettes.
                </p>
                <p>
                  Our mission is to provide global scholars, diplomats, educators, and citizens with an immutable digital record of Arab history, statecraft, monumental architecture, and intangible cultural heritage.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-200 flex flex-wrap items-center gap-4">
                <Link
                  href="/sources"
                  className="px-5 py-2.5 bg-[#123C33] text-[#E5C98E] text-xs font-serif font-semibold hover:bg-[#1a4f44] transition-colors shadow-sm inline-flex items-center gap-2"
                >
                  <span>{language === 'ar' ? 'معايير المصادر والاستشهادات' : 'Sources & Taxonomy Policy'}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/editorial-standards"
                  className="px-5 py-2.5 bg-[#FAF9F5] text-[#123C33] border border-[#E5C98E]/60 text-xs font-serif font-semibold hover:bg-stone-100 transition-colors shadow-sm"
                >
                  {language === 'ar' ? 'المعايير التحريرية والنقل الحرفي' : 'Editorial Standards & Transliteration'}
                </Link>
              </div>
            </div>

            {/* The Four Archival Pillars */}
            <div className="space-y-6 pt-4">
              <div className="text-left border-b border-[#E5C98E]/30 pb-4">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-bold block mb-1">
                  {language === 'ar' ? 'الركائز التوثيقية الأربع' : 'Foundational Schema'}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#123C33]">
                  {language === 'ar' ? 'أعمدة التوثيق المنهجي' : 'The Four Archival Pillars'}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.number}
                    className="group relative overflow-hidden aspect-[3/4] border border-[#E5C98E]/30 bg-black shadow-md hover:border-[#E5C98E] transition-all duration-500 flex flex-col justify-end"
                  >
                    <div className="absolute inset-0 z-0">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 via-50% to-black/35" />
                    </div>

                    <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
                      <span className="font-serif text-[11px] font-bold text-[#E5C98E] tracking-wider uppercase bg-black/60 backdrop-blur-md px-2.5 py-1 border border-[#E5C98E]/30">
                        Pillar {pillar.number}
                      </span>
                      <span className="text-[10px] font-medium text-white/90 bg-[#123C33]/80 backdrop-blur-md px-2.5 py-1 border border-[#E5C98E]/20">
                        {pillar.badge}
                      </span>
                    </div>

                    <div className="relative z-10 p-5 space-y-1.5 text-white">
                      <h4 className="font-serif text-xl font-bold text-white group-hover:text-[#E5C98E] transition-colors">
                        {pillar.title}
                      </h4>
                      <div className="font-arabicHeading text-xs text-[#E5C98E] font-medium">
                        {pillar.arabicTitle}
                      </div>
                      <p className="text-xs text-stone-300 font-light leading-relaxed pt-2 border-t border-white/10 line-clamp-3">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side Drawer: Governance, Council & Key Stats */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Metrics Monograph */}
            <div className="border border-[#E5C98E]/40 bg-[#123C33] p-6 text-white space-y-4">
              <div className="flex items-center gap-2 border-b border-[#E5C98E]/30 pb-3">
                <Landmark className="h-4 w-4 text-[#E5C98E]" />
                <h4 className="font-serif text-base font-bold text-white">
                  {language === 'ar' ? 'إحصائيات السجل التوثيقي' : 'Repository Scope'}
                </h4>
              </div>

              <div className="space-y-3 text-xs font-serif">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-white/70">Sovereign Arab States:</span>
                  <span className="font-bold text-[#E5C98E]">22 Nations</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-white/70">Ruling Peninsula Dynasties:</span>
                  <span className="font-bold text-[#E5C98E]">8 Dynastic Houses</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-white/70">Historical Epochs:</span>
                  <span className="font-bold text-[#E5C98E]">5,000+ Years</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-white/70">Monarchs & Leaders:</span>
                  <span className="font-bold text-[#E5C98E]">150+ Biographies</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Intangible Heritage:</span>
                  <span className="font-bold text-[#E5C98E]">UNESCO Certified</span>
                </div>
              </div>
            </div>

            {/* Editorial Governance */}
            <div className="border border-[#E5C98E]/30 bg-white p-6 shadow-sm space-y-4">
              <h4 className="font-serif text-lg font-bold text-[#123C33] border-b border-stone-200 pb-2">
                {language === 'ar' ? 'مجلس التحرير والاعتماد' : 'Editorial Governance'}
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Maintained by an international consortium of historians, genealogists, and digital archivists spanning universities in Riyadh, Abu Dhabi, Doha, Cairo, Oxford, and Harvard.
              </p>

              <div className="space-y-2 pt-2 text-xs">
                <div className="p-3 bg-[#FAF9F5] border border-stone-200">
                  <div className="font-bold text-[#123C33] font-serif">Historical Verification Unit</div>
                  <div className="text-[11px] text-stone-500">Treaty transcription & primary gazettes</div>
                </div>
                <div className="p-3 bg-[#FAF9F5] border border-stone-200">
                  <div className="font-bold text-[#123C33] font-serif">Genealogical Board of the Peninsula</div>
                  <div className="text-[11px] text-stone-500">Dynastic successions & royal ancestry</div>
                </div>
                <div className="p-3 bg-[#FAF9F5] border border-stone-200">
                  <div className="font-bold text-[#123C33] font-serif">Architectural & Cultural Registry</div>
                  <div className="text-[11px] text-stone-500">Structural geometry & intangible arts</div>
                </div>
              </div>
            </div>

            {/* Direct Exploration Links */}
            <div className="border border-[#E5C98E]/30 bg-white p-6 shadow-sm space-y-3">
              <h4 className="font-serif text-sm font-bold text-[#123C33] uppercase tracking-wider">
                {language === 'ar' ? 'روابط السجل السريعة' : 'Explore The Archive'}
              </h4>
              <ul className="space-y-2 text-xs font-serif">
                <li>
                  <Link href="/countries" className="flex items-center justify-between text-stone-700 hover:text-[#C6A15B] py-1 border-b border-stone-100 transition-colors">
                    <span>Sovereign Countries Directory</span>
                    <span>→</span>
                  </Link>
                </li>
                <li>
                  <Link href="/royalty" className="flex items-center justify-between text-stone-700 hover:text-[#C6A15B] py-1 border-b border-stone-100 transition-colors">
                    <span>Dynastic Houses & Palaces</span>
                    <span>→</span>
                  </Link>
                </li>
                <li>
                  <Link href="/culture" className="flex items-center justify-between text-stone-700 hover:text-[#C6A15B] py-1 border-b border-stone-100 transition-colors">
                    <span>Cultural Pillars & Heritage</span>
                    <span>→</span>
                  </Link>
                </li>
                <li>
                  <Link href="/history" className="flex items-center justify-between text-stone-700 hover:text-[#C6A15B] py-1 transition-colors">
                    <span>Chronological History & Eras</span>
                    <span>→</span>
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
