import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Clock, Landmark, ArrowRight, Sparkles, BookOpen, Compass } from 'lucide-react';
import { historicalErasData } from '@/lib/data/history';

export const metadata: Metadata = {
  title: 'History of the Arab World — Civilizations, Empires & Eras | GCC',
  description: 'Centuries of Arab and Islamic civilizations documented: from the ancient Nabataeans and Umayyads to the Islamic Golden Age in Baghdad, Al-Andalus, and the Modern Gulf Renaissance.',
};

export default function HistoryPage() {
  return (
    <div className="pt-24 pb-24 bg-white text-ink min-h-screen selection:bg-gold selection:text-midnight">
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="py-12 border-b border-border text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-[#F9FAFB] px-4 py-1 text-xs font-serif uppercase tracking-widest text-forest font-semibold mb-4 shadow-sm">
            <Clock className="h-3.5 w-3.5 text-antiqueGold" />
            <span>A History Without Borders</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-ink mb-4">
            Centuries of Civilizations
          </h1>
          <p className="text-base sm:text-lg text-ink-muted font-light leading-relaxed">
            Explore centuries of civilizations, empires, scientific renaissances, and historical transformations across the Arab world.
          </p>

          <div className="pt-6">
            <Link
              href="/timeline"
              className="inline-flex items-center gap-2 rounded-full border border-antiqueGold bg-forest px-6 py-2.5 text-xs font-bold text-white hover:bg-forest-light transition-all shadow-md"
            >
              <Compass className="h-4 w-4" />
              <span>Launch Chronological Timeline Explorer</span>
            </Link>
          </div>
        </div>

        {/* Historical Eras Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {historicalErasData.map(era => (
            <div
              key={era.id}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-white p-6 hover:border-antiqueGold hover:shadow-lg transition-all duration-300 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-antiqueGold font-serif">
                    <Clock className="h-3.5 w-3.5" />
                    {era.startYear < 0 ? `${Math.abs(era.startYear)} BCE` : `${era.startYear} CE`} — {typeof era.endYear === 'number' && era.endYear < 0 ? `${Math.abs(era.endYear)} BCE` : era.endYear}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-ink group-hover:text-forest transition-colors">
                  {era.name}
                </h3>
                <div className="font-arabicHeading text-sm text-antiqueGold font-semibold mb-3">
                  {era.arabicName}
                </div>

                <p className="text-xs text-ink-muted line-clamp-3 leading-relaxed mb-4">
                  {era.overview}
                </p>

                <div className="border-t border-border pt-3 space-y-1.5 text-xs text-ink-muted mb-6">
                  <div>
                    <span className="text-ink-subtle block text-[10px]">Science & Intellectual Heritage:</span>
                    <span className="font-medium text-ink line-clamp-1">{era.science}</span>
                  </div>
                  <div>
                    <span className="text-ink-subtle block text-[10px]">Architectural Monuments:</span>
                    <span className="font-medium text-ink line-clamp-1">{era.architecture}</span>
                  </div>
                </div>
              </div>

              <Link
                href={`/history/${era.slug}`}
                className="inline-flex items-center justify-between rounded-full border border-border bg-[#F9FAFB] px-4 py-2.5 text-xs font-semibold text-forest hover:bg-forest hover:text-white transition-all shadow-sm"
              >
                <span>Explore Historical Era Treatise</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
