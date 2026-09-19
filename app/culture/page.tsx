'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, BookOpen, Compass, Building2 } from 'lucide-react';
import { cultureTopicsData } from '@/lib/data/culture';
import { useLanguage } from '@/components/LanguageProvider';

export default function CultureDirectoryPage() {
  const { language } = useLanguage();

  return (
    <div className="bg-canvas min-h-screen text-ink">
      
      {/* Cultural Hero Banner */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-border overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-45 scale-105 transform duration-1000"
            style={{ backgroundImage: "url('/images/culture/calligraphy.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-archival text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-mono uppercase tracking-[0.25em] text-antiqueGold-light font-bold mb-4">
            <Sparkles className="h-3.5 w-3.5 text-antiqueGold" />
            <span>{language === 'ar' ? 'التراث الثقافي والفنون الحية' : 'Patrimony & Living Traditions'}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
            {language === 'ar' ? 'ثقافات وتقاليد العالم العربي' : 'The Cultures of the Arab World'}
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/80 font-sans leading-relaxed mb-6">
            {language === 'ar'
              ? 'من عبقرية العمارة الإسلامية وفنون الخط العربي إلى كرم الضيافة بالقهوة العربية، وتراث الصيد بالصقور والغوص على اللؤلؤ.'
              : 'From the geometric mastery of Islamic architecture and sacred Arabic calligraphy to desert hospitality, epic poetry, falconry, and maritime pearl diving.'}
          </p>

          <Link
            href="/culture/architecture"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-antiqueGold text-forest text-xs font-mono uppercase tracking-wider font-bold hover:bg-antiqueGold-light transition-all shadow-lg cursor-pointer"
          >
            <Building2 className="h-4 w-4" />
            <span>{language === 'ar' ? 'استعراض موسوعة العمارة العربية' : 'Explore Dedicated Architecture Encyclopedia'}</span>
          </Link>
        </div>
      </section>

      {/* Cultural Topics Grid */}
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cultureTopicsData.map(topic => (
            <Link
              key={topic.id}
              href={`/culture/${topic.slug}`}
              className="group relative flex flex-col justify-between aspect-[3/4.2] sm:aspect-[3/4.4] w-full bg-slate-950 border border-border hover:border-antiqueGold transition-all duration-300 overflow-hidden shadow-sm hover:shadow-2xl"
            >
              {/* Background Culture Image with Zoom */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('${topic.imageUrl || "/images/craftsmanship.jpg"}')` }}
              />

              {/* Dark Vignette Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 via-50% to-black/35 group-hover:from-black transition-colors duration-300 pointer-events-none" />

              {/* Top Category Badge */}
              <div className="relative z-10 p-5 flex items-center justify-between">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-forest text-[10px] font-mono font-bold uppercase tracking-wider border border-white/20 shadow-sm">
                  {topic.category}
                </span>
              </div>

              {/* Bottom Information Overlaid on Image */}
              <div className="relative z-10 p-6 flex flex-col justify-end">
                <div className="mb-2">
                  <span className="text-sm font-arabicHeading font-bold text-[#E5C98E] block mb-1">
                    {topic.arabicName}
                  </span>
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white group-hover:text-[#E5C98E] transition-colors leading-tight">
                    {topic.title}
                  </h3>
                </div>

                <p className="text-xs text-white/75 font-sans leading-relaxed line-clamp-2 mb-4">
                  {topic.leadParagraph}
                </p>

                {/* Craftsmanship Highlights */}
                <div className="text-xs text-white/85 font-sans mb-4 pt-3 border-t border-white/20">
                  <span className="text-white/60 block text-[10px] uppercase font-mono mb-0.5">
                    {language === 'ar' ? 'الحرفية والأصالة:' : 'Craftsmanship & Technique:'}
                  </span>
                  <span className="font-medium text-white/90 line-clamp-1">
                    {topic.craftsmanship}
                  </span>
                </div>

                {/* Action Link */}
                <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs font-mono text-antiqueGold-light group-hover:text-white font-semibold transition-colors">
                  <span>{language === 'ar' ? 'قراءة الدراسة الثقافية الكاملة' : 'Read Full Cultural Treatise'}</span>
                  <span className="group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform duration-300">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
