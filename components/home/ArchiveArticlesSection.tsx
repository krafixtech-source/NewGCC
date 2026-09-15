'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight, Clock, ShieldCheck, Tag } from 'lucide-react';
import { articlesData } from '@/lib/data/articles';
import { useLanguage } from '../LanguageProvider';

export const ArchiveArticlesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 bg-sand/40 text-charcoal overflow-hidden border-b border-sand">
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/70 px-4 py-1 mb-3 text-xs font-serif uppercase tracking-widest text-emerald-dark font-semibold">
              <BookOpen className="h-3.5 w-3.5 text-gold-dark" />
              <span>Editorial Repository</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-midnight">
              From the Archive
            </h2>
            <p className="text-base text-stone font-light mt-2 max-w-xl">
              Curated peer-reviewed historical treatises, long-form encyclopedia essays, and cultural analyses.
            </p>
          </div>

          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-xs font-bold text-emerald-dark hover:text-gold-dark uppercase tracking-wider font-serif group"
          >
            <span>Browse Complete Article Library</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Magazine-Style Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articlesData.map(art => (
            <div
              key={art.id}
              className="group flex flex-col justify-between rounded-2xl border border-sand bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-gold/60 transition-all duration-300"
            >
              <div>
                {/* Thumbnail with Category Tag */}
                <div className="relative aspect-[16/10] overflow-hidden bg-midnight">
                  <img
                    src={art.heroImageUrl}
                    alt={art.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-midnight/80 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold text-gold-light border border-gold/30">
                    {art.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-midnight/80 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] text-ivory/90 flex items-center gap-1">
                    <Clock className="h-3 w-3 text-gold" />
                    <span>{art.readTime} min read</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5">
                  <span className="text-[10px] uppercase font-semibold text-stone tracking-wider block mb-1">
                    Published {art.publishedAt}
                  </span>
                  <h4 className="font-serif text-base font-bold text-midnight group-hover:text-emerald transition-colors line-clamp-2 mb-2">
                    {art.title}
                  </h4>
                  <div className="font-arabicHeading text-xs text-stone-dark font-medium line-clamp-1 mb-3">
                    {art.arabicTitle}
                  </div>
                  <p className="text-xs text-stone line-clamp-3 leading-relaxed">
                    {art.leadParagraph}
                  </p>
                </div>
              </div>

              {/* Read Link */}
              <div className="p-5 pt-0">
                <Link
                  href={`/articles/${art.slug}`}
                  className="flex items-center justify-between border-t border-sand/40 pt-3 text-xs font-bold text-emerald-dark group-hover:text-gold-dark transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
