'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../LanguageProvider';

interface GulfEra {
  id: string;
  number: string;
  title: string;
  titleAr: string;
  period: string;
  description: string;
  imageUrl: string;
  caption: string;
}

const gulfEras: GulfEra[] = [
  {
    id: 'era-1',
    number: '01',
    title: 'Before Oil',
    titleAr: 'ما قبل عصر النفط: تراث الغوص والتجارة',
    period: 'Antiquity — 1930s',
    description: 'Centuries of subsistence grounded in seasonal pearl diving (Ghows), maritime dhow trade with India and East Africa, camel pastoralism in Najd, and date palm agriculture.',
    imageUrl: '/images/craftsmanship.jpg',
    caption: 'Historical coastal dhow harbor and traditional coral-stone maritime settlements.',
  },
  {
    id: 'era-2',
    number: '02',
    title: 'The Discovery',
    titleAr: 'عصر الاكتشاف وبدايات النهضة',
    period: '1932 — 1960s',
    description: 'First commercial strikes at Dammam Well No. 7 (Prosperity Well) in Saudi Arabia (1938), Bahrain (1932), Kuwait (1938), and Abu Dhabi, unleashing the foundational capital for modern state-building.',
    imageUrl: '/images/hero.jpg',
    caption: 'Early geological exploration and industrial infrastructure in Eastern Arabia.',
  },
  {
    id: 'era-3',
    number: '03',
    title: 'Transformation & Union',
    titleAr: 'التحول الشامل والاتحاد الإقليمي',
    period: '1970s — 1990s',
    description: 'The formation of the UAE in 1971, the establishment of the Gulf Cooperation Council (GCC) in Abu Dhabi in 1981, and rapid construction of universities, modern ports, and federal health institutions.',
    imageUrl: '/images/alula.jpg',
    caption: 'Diplomatic summits and rapid nationwide civil infrastructure modernization.',
  },
  {
    id: 'era-4',
    number: '04',
    title: 'The Modern Era & Vision 2030',
    titleAr: 'العصر الحديث والتنويع الاقتصادي المستدام',
    period: '2000s — Present',
    description: 'Pioneering global economic diversification, sovereign investment funds, futuristic sustainable urbanism (NEOM, King Abdullah Financial District), renewable energy, and world cultural institutions.',
    imageUrl: '/images/riyadh.jpg',
    caption: 'Contemporary architectural skyline and sustainable cultural masterplans.',
  },
];

export const ModernGulfStorySection: React.FC = () => {
  const { language } = useLanguage();
  const [activeEraIndex, setActiveEraIndex] = useState(0);

  const active = gulfEras[activeEraIndex];

  return (
    <section className="bg-antiqueGold py-24 px-4 sm:px-6 lg:px-8 border-b border-forest/20">
      <div className="mx-auto max-w-archival">
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-forest/20">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-forest tracking-tight">
            {language === 'ar' ? 'صناعة الخليج الحديث: أربعة عصور' : 'The Making of the Modern Gulf'}
          </h2>
          <p className="text-xs sm:text-sm text-forest/80 mt-2 max-w-2xl font-medium">
            A chronological retrospective tracing the economic and geopolitical evolution of the Arabian Gulf from maritime pearl banking to global architectural leadership.
          </p>
        </div>

        {/* Story Composition: Interactive Stages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-14 items-center">
          {/* Left 55%: Visual Canvas */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-forest-dark border border-forest/30 rounded-2xl shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out"
                style={{ backgroundImage: `url('${active.imageUrl}')` }}
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 bg-forest-dark/95 backdrop-blur-sm border border-white/20 p-3 text-xs font-mono text-white flex items-center justify-between rounded-xl shadow-lg">
                <span>Phase {active.number} · {active.period}</span>
                <span className="text-antiqueGold text-[11px] font-sans">{active.caption}</span>
              </div>
            </div>
          </div>

          {/* Right 45%: Timeline Stages */}
          <div className="lg:col-span-5 space-y-4">
            {gulfEras.map((era, index) => {
              const isCurrent = index === activeEraIndex;

              return (
                <div
                  key={era.id}
                  onClick={() => setActiveEraIndex(index)}
                  className={`cursor-pointer p-5 border rounded-xl transition-all text-left rtl:text-right shadow-sm ${
                    isCurrent
                      ? 'bg-forest text-white border-forest shadow-lg ring-2 ring-forest/30'
                      : 'bg-white/90 text-forest border-forest/20 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`font-mono text-xs font-bold ${isCurrent ? 'text-antiqueGold' : 'text-forest'}`}>
                      {era.number} / {era.period}
                    </span>
                    {isCurrent && (
                      <span className="text-[10px] font-mono px-2.5 py-0.5 bg-antiqueGold text-forest font-extrabold rounded-full">
                        ACTIVE
                      </span>
                    )}
                  </div>

                  <h3 className={`font-serif font-bold text-lg mb-1 ${isCurrent ? 'text-white' : 'text-forest'}`}>
                    {language === 'ar' ? era.titleAr : era.title}
                  </h3>

                  <p className={`text-xs leading-relaxed font-sans line-clamp-2 ${isCurrent ? 'text-white/80' : 'text-forest/80'}`}>
                    {era.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
