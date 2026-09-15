'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { landmarksData } from '@/lib/data/landmarks';
import { useLanguage } from '../LanguageProvider';

export const LandmarksGallerySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 bg-[#081210] text-ivory overflow-hidden border-b border-gold/20">
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-midnight/80 px-4 py-1 mb-3 text-xs font-serif uppercase tracking-widest text-gold-light font-semibold">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              <span>Architectural & Archaeological Heritage</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ivory">
              Monumental Landmarks
            </h2>
            <p className="text-base text-sand-light/80 font-light mt-2 max-w-xl">
              From rock-hewn wonders of antiquity to soaring 21st-century engineering marvels across the Arab world.
            </p>
          </div>

          <Link
            href="/landmarks"
            className="inline-flex items-center gap-2 text-xs font-bold text-gold hover:text-gold-light uppercase tracking-wider font-serif group"
          >
            <span>View All Historical Landmarks</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Immersive Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {landmarksData.map(lm => (
            <Link
              key={lm.id}
              href={`/landmarks/${lm.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-gold/30 bg-midnight shadow-royal hover:border-gold hover:shadow-gold transition-all duration-500 flex flex-col justify-end min-h-[340px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={lm.imageUrl}
                  alt={lm.name}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
              </div>

              {/* Overlay Content */}
              <div className="relative z-10 p-6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-gold-light uppercase tracking-wider">
                    <MapPin className="h-3 w-3 text-gold" />
                    {lm.country}
                  </span>
                  <span className="rounded bg-emerald-dark/80 backdrop-blur-sm px-2 py-0.5 text-[10px] font-bold text-ivory border border-gold/30">
                    {lm.architectureStyle}
                  </span>
                </div>

                <h4 className="font-serif text-2xl font-bold text-ivory group-hover:text-gold transition-colors">
                  {lm.name}
                </h4>
                <div className="font-arabicHeading text-xs text-gold/80 font-medium">
                  {lm.arabicName}
                </div>

                <p className="text-xs text-stone-light line-clamp-2 leading-relaxed pt-1">
                  {lm.overview}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs font-semibold text-gold group-hover:translate-x-1 transition-transform">
                  <span>Explore Architectural Archive</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
