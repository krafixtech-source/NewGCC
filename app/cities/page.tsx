import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Building2, MapPin, ArrowRight, Globe, Users } from 'lucide-react';
import { citiesData } from '@/lib/data/cities';

export const metadata: Metadata = {
  title: 'Major Cities of the Arab World — Capitals, History & Districts | GCC',
  description: 'Explore the great metropolises and historic cities of the Arab world, from Riyadh, Abu Dhabi, and Dubai to Doha, Muscat, and Cairo.',
};

export default function CitiesDirectoryPage() {
  return (
    <div className="pt-24 pb-24 bg-white text-charcoal min-h-screen selection:bg-gold selection:text-midnight">
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="py-12 border-b border-sand/60 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-sand/30 px-4 py-1 text-xs font-serif uppercase tracking-widest text-emerald-dark font-semibold mb-4">
            <Building2 className="h-3.5 w-3.5 text-gold-dark" />
            <span>Urban Heritage & Metropolises</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-midnight mb-4">
            Cities of the Arab World
          </h1>
          <p className="text-base sm:text-lg text-stone font-light leading-relaxed">
            From historic walled citadels and ancient desert caravan crossroads to soaring modern futuristic skylines along the Arabian Gulf.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {citiesData.map(city => (
            <div
              key={city.id}
              className="group flex flex-col justify-between rounded-2xl border border-sand bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-gold transition-all duration-300"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-midnight">
                  <img
                    src={city.imageUrl}
                    alt={city.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-midnight/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-serif uppercase font-bold text-gold-light border border-gold/30">
                    {city.country}
                  </div>
                  {city.isCapital && (
                    <div className="absolute top-3 right-3 bg-emerald-dark/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-ivory">
                      National Capital
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-serif text-2xl font-bold text-midnight group-hover:text-emerald transition-colors">
                      {city.name}
                    </h3>
                    <span className="font-arabicHeading text-sm font-semibold text-emerald-dark">
                      {city.arabicName}
                    </span>
                  </div>

                  <p className="text-xs text-stone line-clamp-3 leading-relaxed mb-4">
                    {city.shortDescription}
                  </p>

                  <div className="border-t border-sand/40 pt-3 flex justify-between text-xs">
                    <span className="text-stone">Population:</span>
                    <span className="font-semibold text-midnight">{(city.population / 1000000).toFixed(1)} Million</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/cities/${city.slug}`}
                  className="inline-flex items-center justify-between w-full border-t border-sand/40 pt-3 text-xs font-semibold text-emerald-dark hover:text-gold-dark transition-colors"
                >
                  <span>Explore City History & Districts</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
