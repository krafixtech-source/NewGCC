'use client';

import React from 'react';
import Link from 'next/link';
import { Building2, MapPin, ArrowRight, Globe, Users, ChevronRight, Sparkles } from 'lucide-react';
import { citiesData } from '@/lib/data/cities';
import { useLanguage } from '@/components/LanguageProvider';

export default function CitiesDirectoryPage() {
  const { language } = useLanguage();

  return (
    <div className="bg-[#FAF9F5] text-charcoal min-h-screen selection:bg-antiqueGold selection:text-black">
      
      {/* Archival Hero Header */}
      <section className="relative overflow-hidden bg-black text-white pt-24 pb-16 sm:pt-32 sm:pb-24 border-b border-[#E5C98E]/30">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/riyadh.jpg"
            alt="Cities of the Arab World"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-white/60 mb-6 font-serif">
            <Link href="/" className="hover:text-[#E5C98E] transition-colors">Archive</Link>
            <ChevronRight className="h-3 w-3 text-white/40" />
            <span className="text-[#E5C98E] font-semibold">Cities & Metropolises</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-[#E5C98E]/40 bg-[#123C33]/60 backdrop-blur-md px-3.5 py-1 text-xs font-serif uppercase tracking-widest text-[#E5C98E] font-semibold mb-4">
              <Building2 className="h-3.5 w-3.5 text-[#E5C98E]" />
              <span>{language === 'ar' ? 'العواصم والحواضر التاريخية' : 'Urban Heritage & Metropolises'}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
              {language === 'ar' ? 'حواضر ومدن العالم العربي' : 'Cities of the Arab World'}
            </h1>

            <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed mb-6">
              {language === 'ar'
                ? 'من الأسوار الطينية والواحات القديمة ومراكز الإشعاع الحضاري إلى ناطحات السحاب والموانئ العالمية على ضفاف الخليج العربي والنيل.'
                : 'From historic walled citadels and ancient desert caravan crossroads to soaring modern futuristic skylines along the Arabian Gulf.'}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-serif text-[#E5C98E]">
              <span className="flex items-center gap-1.5 bg-black/60 border border-[#E5C98E]/30 px-3 py-1">
                <Globe className="h-3.5 w-3.5" /> Major Arab Capitals
              </span>
              <span className="flex items-center gap-1.5 bg-black/60 border border-[#E5C98E]/30 px-3 py-1">
                <Users className="h-3.5 w-3.5" /> Urban Demographics
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Grid: Full Bleed Photographic Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-bold block mb-1">
            {language === 'ar' ? 'الحواضر الكبرى' : 'Metropolitan Index'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123C33]">
            {language === 'ar' ? 'دليل المدن والحواضر العربية' : 'Featured Arab Metropolises'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2">
            {language === 'ar'
              ? 'استكشف التاريخ، والنمو الديموغرافي، والأحياء التاريخية، والصروح المعمارية لكل حاضرة.'
              : 'Explore urban history, demographic metrics, historic districts, and iconic architecture.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {citiesData.map(city => (
            <Link
              key={city.id}
              href={`/cities/${city.slug}`}
              className="group relative overflow-hidden aspect-[3/4.2] sm:aspect-[3/4.4] border border-[#E5C98E]/30 bg-black shadow-md hover:shadow-2xl hover:border-[#E5C98E] transition-all duration-500 flex flex-col justify-end"
            >
              {/* Full Bleed Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={city.imageUrl}
                  alt={city.name}
                  className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 via-50% to-black/35 group-hover:from-black/98 transition-colors duration-500" />
              </div>

              {/* Top Badges */}
              <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
                <span className="font-serif text-[11px] font-bold uppercase tracking-wider text-[#E5C98E] bg-black/60 backdrop-blur-md px-2.5 py-1 border border-[#E5C98E]/30">
                  {city.country}
                </span>
                {city.isCapital && (
                  <span className="text-[10px] font-bold text-white/90 bg-[#123C33]/80 backdrop-blur-md px-2.5 py-1 border border-[#E5C98E]/20">
                    National Capital
                  </span>
                )}
              </div>

              {/* Overlaid Bottom Content */}
              <div className="relative z-10 p-5 space-y-2 text-white">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#E5C98E] transition-colors">
                    {city.name}
                  </h3>
                  <span className="font-arabicHeading text-base font-semibold text-[#E5C98E]">
                    {city.arabicName}
                  </span>
                </div>

                <p className="text-xs text-stone-300 font-light line-clamp-2 leading-relaxed pt-1 border-t border-white/10">
                  {city.shortDescription}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs text-white/80 border-t border-white/10">
                  <span className="text-[11px] text-stone-400">
                    Pop: <strong className="text-[#E5C98E]">{(city.population / 1000000).toFixed(1)}M</strong>
                  </span>
                  <span className="text-xs font-serif font-semibold text-[#E5C98E] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    <span>{language === 'ar' ? 'استكشف المدينة' : 'Explore City'}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
