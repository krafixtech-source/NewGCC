import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BookOpen, Clock, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { articlesData } from '@/lib/data/articles';

export const metadata: Metadata = {
  title: 'Archival Articles & Essays — Arab World Encyclopedia | GCC',
  description: 'Scholarly peer-reviewed articles and historical treatises on Arab history, dynasties, civilizational breakthroughs, and culture.',
};

export default function ArticlesDirectoryPage() {
  return (
    <div className="pt-24 pb-24 bg-white text-charcoal min-h-screen selection:bg-gold selection:text-midnight">
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="py-12 border-b border-sand/60 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white px-4 py-1 text-xs font-serif uppercase tracking-widest text-emerald-dark font-semibold mb-4">
            <BookOpen className="h-3.5 w-3.5 text-gold-dark" />
            <span>Peer-Reviewed Archival Essays</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-midnight mb-4">
            The Archival Library
          </h1>
          <p className="text-base sm:text-lg text-stone font-light leading-relaxed">
            In-depth scholarly analyses, historical deep-dives, and biographical monographs documented by the GCC Historical Council.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {articlesData.map(art => (
            <div
              key={art.id}
              className="group flex flex-col justify-between rounded-2xl border border-sand bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-gold transition-all duration-300"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-midnight">
                  <img
                    src={art.heroImageUrl}
                    alt={art.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-midnight/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase font-bold text-gold-light border border-gold/30">
                    {art.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-midnight/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-ivory/90 flex items-center gap-1">
                    <Clock className="h-3 w-3 text-gold" />
                    <span>{art.readTime} min read</span>
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-[10px] uppercase font-semibold text-stone tracking-wider block mb-1">
                    Published {art.publishedAt}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-midnight group-hover:text-emerald transition-colors mb-2">
                    {art.title}
                  </h3>
                  <div className="font-arabicHeading text-xs text-stone-dark font-medium mb-3">
                    {art.arabicTitle}
                  </div>
                  <p className="text-xs text-stone line-clamp-3 leading-relaxed">
                    {art.leadParagraph}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/articles/${art.slug}`}
                  className="flex items-center justify-between border-t border-sand/40 pt-3 text-xs font-bold text-emerald-dark hover:text-gold-dark transition-colors"
                >
                  <span>Read Archival Article</span>
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
