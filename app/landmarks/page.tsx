import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Landmark, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { landmarksData } from '@/lib/data/landmarks';

export const metadata: Metadata = {
  title: 'Landmarks of the Arab World — Archaeological & Contemporary | GCC',
  description: 'Explore the monumental landmarks of the Arab world, from AlUla (Hegra) and Petra to Burj Khalifa, Sheikh Zayed Grand Mosque, and Diriyah.',
};

export default function LandmarksDirectoryPage() {
  return (
    <div className="pt-24 pb-24 bg-white text-ink min-h-screen selection:bg-gold selection:text-midnight">
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="py-12 border-b border-border text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-[#F9FAFB] px-4 py-1 text-xs font-serif uppercase tracking-widest text-forest font-semibold mb-4 shadow-sm">
            <Landmark className="h-3.5 w-3.5 text-antiqueGold" />
            <span>Archaeological & Architectural Treasures</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-ink mb-4">
            Monumental Landmarks
          </h1>
          <p className="text-base sm:text-lg text-ink-muted font-light leading-relaxed">
            Documenting the sacred sanctuaries, rock-hewn wonders of antiquity, fortified citadels, and contemporary structural masterpieces across the Arab world.
          </p>
        </div>

        {/* Landmarks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {landmarksData.map(lm => (
            <Link
              key={lm.id}
              href={`/landmarks/${lm.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-gold/30 bg-midnight shadow-royal hover:border-gold hover:shadow-gold transition-all duration-500 flex flex-col justify-end min-h-[380px]"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={lm.imageUrl}
                  alt={lm.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
              </div>

              <div className="relative z-10 p-6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-gold-light uppercase tracking-wider font-serif">
                    <MapPin className="h-3 w-3 text-gold" />
                    {lm.country}
                  </span>
                  <span className="rounded-full bg-emerald-dark/80 px-2.5 py-0.5 text-[10px] font-bold text-ivory border border-gold/30">
                    {lm.era}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-ivory group-hover:text-gold transition-colors">
                  {lm.name}
                </h3>
                <div className="font-arabicHeading text-xs text-gold/80 font-medium">
                  {lm.arabicName}
                </div>

                <p className="text-xs text-stone-light line-clamp-2 leading-relaxed pt-1">
                  {lm.overview}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs font-semibold text-gold group-hover:translate-x-1 transition-transform">
                  <span>Inspect Architectural Archive</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
