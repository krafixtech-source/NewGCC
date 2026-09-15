import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Sparkles, ArrowRight, BookOpen, Compass, Building2 } from 'lucide-react';
import { cultureTopicsData } from '@/lib/data/culture';

export const metadata: Metadata = {
  title: 'Cultures & Traditions of the Arab World — Arts & Heritage | GCC',
  description: 'Explore the arts, architecture, calligraphy, hospitality, literature, poetry, and traditions of the Arab world.',
};

export default function CultureDirectoryPage() {
  return (
    <div className="pt-24 pb-24 bg-white text-charcoal min-h-screen selection:bg-gold selection:text-midnight">
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="py-12 border-b border-sand/60 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-sand/30 px-4 py-1 text-xs font-serif uppercase tracking-widest text-emerald-dark font-semibold mb-4">
            <Sparkles className="h-3.5 w-3.5 text-gold-dark" />
            <span>Patrimony & Living Traditions</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-midnight mb-4">
            The Cultures of the Arab World
          </h1>
          <p className="text-base sm:text-lg text-stone font-light leading-relaxed">
            From the geometric mastery of Islamic architecture and the sacred art of Arabic calligraphy to desert hospitality, epic poetry, and maritime pearl diving.
          </p>

          <div className="pt-6">
            <Link
              href="/culture/architecture"
              className="inline-flex items-center gap-2 rounded-full border border-gold bg-emerald px-6 py-2.5 text-xs font-bold text-ivory hover:bg-emerald-light transition-all shadow-md"
            >
              <Building2 className="h-4 w-4 text-gold" />
              <span>Explore Dedicated Architecture Encyclopedia</span>
            </Link>
          </div>
        </div>

        {/* Culture Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {cultureTopicsData.map(topic => (
            <div
              key={topic.id}
              className="group flex flex-col justify-between rounded-2xl border border-sand bg-white p-6 shadow-sm hover:shadow-xl hover:border-gold transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-gold-dark bg-ivory-muted px-3 py-1 rounded-full border border-sand">
                    {topic.category}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-midnight group-hover:text-emerald transition-colors mb-1">
                  {topic.title}
                </h3>
                <div className="font-arabicHeading text-sm text-stone-dark font-semibold mb-3">
                  {topic.arabicName}
                </div>

                <p className="text-xs text-stone leading-relaxed line-clamp-3 mb-4">
                  {topic.leadParagraph}
                </p>

                <div className="border-t border-sand/40 pt-3 space-y-1.5 text-xs text-stone-dark mb-4">
                  <div>
                    <strong className="text-midnight block text-[11px]">Craftsmanship:</strong>
                    <span className="text-stone text-[11px] line-clamp-2">{topic.craftsmanship}</span>
                  </div>
                </div>
              </div>

              <Link
                href={`/culture/${topic.slug}`}
                className="inline-flex items-center justify-between border-t border-sand/40 pt-3 text-xs font-semibold text-emerald-dark hover:text-gold-dark transition-colors"
              >
                <span>Read Full Cultural Treatise</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
