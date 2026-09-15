'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, BookOpen, Compass } from 'lucide-react';
import { cultureTopicsData } from '@/lib/data/culture';
import { useLanguage } from '../LanguageProvider';

export const ExploreTopicsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 bg-white text-midnight overflow-hidden border-b border-sand/70">
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Split Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-sand/20 px-4 py-1 mb-3 text-xs font-serif uppercase tracking-widest text-emerald-dark font-semibold">
              <Sparkles className="h-3.5 w-3.5 text-gold-dark" />
              <span>Cultural Philosophy & Arts</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-midnight">
              Traditions, Arts & Cultural Patrimony
            </h2>
            <p className="text-base text-stone font-light mt-2 max-w-2xl">
              Immerse in the profound traditions of the Arab world—from UNESCO-inscribed calligraphy and courtyard architecture to hospitality rituals and maritime pearl songs.
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <Link
              href="/culture"
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-dark hover:text-gold-dark uppercase tracking-wider font-serif group"
            >
              <span>Explore All Cultural Topics</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Culture Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cultureTopicsData.map(topic => (
            <div
              key={topic.id}
              className="group flex flex-col justify-between rounded-xl border border-sand bg-ivory/40 p-6 shadow-sm hover:shadow-xl hover:border-gold transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-gold-dark bg-white px-2 py-0.5 rounded border border-sand">
                    {topic.category}
                  </span>
                </div>

                <h4 className="font-serif text-xl font-bold text-midnight group-hover:text-emerald transition-colors mb-1">
                  {topic.title}
                </h4>
                <div className="font-arabicHeading text-xs text-stone-dark font-semibold mb-3">
                  {topic.arabicName}
                </div>

                <p className="text-xs text-stone leading-relaxed line-clamp-3 mb-4">
                  {topic.leadParagraph}
                </p>

                <div className="border-t border-sand/50 pt-3 space-y-1.5 text-xs text-stone-dark mb-4">
                  <div>
                    <strong className="text-midnight text-[11px] block">Craftsmanship:</strong>
                    <span className="text-stone text-[11px] line-clamp-2">{topic.craftsmanship}</span>
                  </div>
                </div>
              </div>

              <Link
                href={`/culture/${topic.slug}`}
                className="inline-flex items-center justify-between border-t border-sand/40 pt-3 text-xs font-semibold text-emerald-dark group-hover:text-gold-dark"
              >
                <span>Read Topic Treatise</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
