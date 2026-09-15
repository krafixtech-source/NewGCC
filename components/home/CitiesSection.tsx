'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { citiesData } from '@/lib/data';
import { useLanguage } from '../LanguageProvider';

export const CitiesSection: React.FC = () => {
  const { language } = useLanguage();

  const featuredCities = citiesData.slice(0, 6);

  return (
    <section className="bg-canvas py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="mx-auto max-w-archival">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-border gap-4">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl text-ink font-bold tracking-tight">
              {language === 'ar' ? 'حواضر وعواصم العالم العربي' : 'Major Arab Cities'}
            </h2>
          </div>
          <Link
            href="/cities"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-antiqueGold hover:text-forest font-bold transition-colors"
          >
            <span>{language === 'ar' ? 'استعراض كافة المدن' : 'Explore All Cities'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Cities Grid with 16:9 Photos / Video Header Support */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCities.map((city) => (
            <Link
              key={city.id}
              href={`/cities/${city.slug}`}
              className="group flex flex-col bg-canvas-white border border-border hover:border-antiqueGold transition-all overflow-hidden shadow-editorial rounded-2xl hover:shadow-lg"
            >
              {/* 16:9 Photography / Video Frame */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-canvas-paper border-b border-border">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  style={{ backgroundImage: `url('${city.imageUrl || "/images/riyadh.jpg"}')` }}
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 bg-canvas-white/95 text-ink text-[10px] font-mono uppercase tracking-wider border border-border rounded-full shadow-sm">
                    {city.country}
                  </span>
                </div>
              </div>

              {/* City Monograph Information below video */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-serif font-bold text-2xl text-ink group-hover:text-forest transition-colors">
                      {city.name}
                    </h3>
                    <span className="font-arabic text-sm text-forest font-semibold">
                      {city.arabicName}
                    </span>
                  </div>

                  <p className="text-xs text-ink-muted leading-relaxed font-sans line-clamp-2 my-3">
                    {city.shortDescription}
                  </p>

                  <div className="border-t border-border/70 pt-3 space-y-1 text-xs font-mono text-ink-muted">
                    <div className="flex justify-between">
                      <span>Population:</span>
                      <strong className="text-ink font-sans">{(city.population / 1000000).toFixed(1)}M</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Capital:</span>
                      <strong className="text-ink font-sans">{city.isCapital ? 'National Capital' : 'Metropolis'}</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-border/40 flex items-center justify-between text-xs font-mono text-antiqueGold group-hover:text-forest font-semibold">
                  <span>Explore City Profile</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
