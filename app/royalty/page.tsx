import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Crown, ArrowRight, ShieldCheck, MapPin, Compass } from 'lucide-react';
import { royalFamiliesData } from '@/lib/data/royalty';

export const metadata: Metadata = {
  title: 'Royal Houses of Arabia — Monarchies, Dynasties & Lineages | GCC',
  description: 'Explore the royal dynasties, monarchies, and ruling families of the Arabian Peninsula and wider Arab world, from the House of Saud to the Hashemite dynasty.',
};

export default function RoyaltyDirectoryPage() {
  return (
    <div className="pt-24 pb-24 bg-white text-ink min-h-screen selection:bg-gold selection:text-midnight">
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8">
        
        {/* Hero Header */}
        <div className="py-12 border-b border-border text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-[#F9FAFB] px-4 py-1 text-xs font-serif uppercase tracking-widest text-forest font-semibold mb-4 shadow-sm">
            <Crown className="h-3.5 w-3.5 text-antiqueGold" />
            <span>Dynastic Archives & Genealogies</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-ink mb-4">
            Royal Houses of Arabia
          </h1>
          <p className="text-base sm:text-lg text-ink-muted font-light leading-relaxed">
            Explore the monarchies, rulers, and ruling dynasties that shaped the Arabian Peninsula and wider Arab world across centuries of governance.
          </p>

          <div className="pt-6">
            <Link
              href="/royalty/explorer"
              className="inline-flex items-center gap-2 rounded-full border border-antiqueGold bg-forest px-6 py-2.5 text-xs font-bold text-white hover:bg-forest-light transition-all shadow-md"
            >
              <Compass className="h-4 w-4 text-antiqueGold" />
              <span>Open Interactive Peninsula Royalty Explorer</span>
            </Link>
          </div>
        </div>

        {/* Royal Houses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {royalFamiliesData.map(rf => (
            <div
              key={rf.id}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-white p-6 hover:border-antiqueGold hover:shadow-lg transition-all duration-300 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-antiqueGold font-serif">
                    <MapPin className="h-3.5 w-3.5 text-antiqueGold" />
                    {rf.country}
                  </span>
                  <span className="rounded-full bg-[#F9FAFB] px-3 py-0.5 text-[11px] font-bold text-forest border border-border">
                    Est. {rf.foundedYear} CE
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-ink group-hover:text-forest transition-colors">
                  {rf.name}
                </h3>
                <div className="font-arabicHeading text-sm text-antiqueGold font-semibold mb-3">
                  {rf.arabicName}
                </div>

                <p className="text-xs text-ink-muted line-clamp-3 leading-relaxed mb-4">
                  {rf.overview}
                </p>

                <div className="border-t border-border pt-3 space-y-1 text-xs text-ink-muted mb-6">
                  <div>
                    <span className="text-ink-subtle">Founder:</span>{' '}
                    <span className="font-semibold text-ink">{rf.founder}</span>
                  </div>
                  <div>
                    <span className="text-ink-subtle">Current Head:</span>{' '}
                    <span className="font-semibold text-ink">{rf.currentHead}</span>
                  </div>
                </div>
              </div>

              <Link
                href={`/royalty/${rf.slug}`}
                className="inline-flex items-center justify-between rounded-full border border-border bg-[#F9FAFB] px-4 py-2.5 text-xs font-semibold text-forest hover:bg-forest hover:text-white transition-all shadow-sm"
              >
                <span>View Full Lineage & Monograph</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
