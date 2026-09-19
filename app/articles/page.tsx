'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, Clock, ArrowRight, ShieldCheck, Tag, ChevronRight } from 'lucide-react';
import { articlesData } from '@/lib/data/articles';
import { useLanguage } from '@/components/LanguageProvider';

export default function ArticlesDirectoryPage() {
  const { language } = useLanguage();

  return (
    <div className="bg-[#FAF9F5] text-charcoal min-h-screen selection:bg-antiqueGold selection:text-black">
      
      {/* Archival Hero Header */}
      <section className="relative overflow-hidden bg-black text-white pt-24 pb-16 sm:pt-32 sm:pb-24 border-b border-[#E5C98E]/30">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/about/archival-library.jpg"
            alt="The Archival Library"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-white/60 mb-6 font-serif">
            <Link href="/" className="hover:text-[#E5C98E] transition-colors">Archive</Link>
            <ChevronRight className="h-3 w-3 text-white/40" />
            <span className="text-[#E5C98E] font-semibold">Archival Essays</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-[#E5C98E]/40 bg-[#123C33]/60 backdrop-blur-md px-3.5 py-1 text-xs font-serif uppercase tracking-widest text-[#E5C98E] font-semibold mb-4">
              <BookOpen className="h-3.5 w-3.5 text-[#E5C98E]" />
              <span>{language === 'ar' ? 'أبحاث ودراسات تاريخية محكمة' : 'Peer-Reviewed Archival Essays'}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
              {language === 'ar' ? 'المكتبة التوثيقية والدراسات الأكاديمية' : 'The Archival Library'}
            </h1>

            <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed mb-6">
              {language === 'ar'
                ? 'أبحاث تاريخية معمقة، ودراسات سلالية، ومونوغرافات حضارية موثقة بإشراف مجلس التحرير الأكاديمي.'
                : 'In-depth scholarly analyses, historical deep-dives, and dynastic monographs documented by the GCC Historical Council.'}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-serif text-[#E5C98E]">
              <span className="flex items-center gap-1.5 bg-black/60 border border-[#E5C98E]/30 px-3 py-1">
                <ShieldCheck className="h-3.5 w-3.5" /> Primary Sources Cited
              </span>
              <span className="flex items-center gap-1.5 bg-black/60 border border-[#E5C98E]/30 px-3 py-1">
                <span>📜</span> Peer-Reviewed Monograph
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid: Full Photographic Bleed Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-bold block mb-1">
            {language === 'ar' ? 'الدراسات والمونوغرافات' : 'Curated Treatises'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123C33]">
            {language === 'ar' ? 'أحدث الأبحاث والدراسات الموثقة' : 'Published Archival Treatises'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2">
            {language === 'ar'
              ? 'تصفح المقالات العلمية الشاملة حول تأسيس الدول، والنهضة العمرانية، والحضارات القديمة.'
              : 'Scholarly treatises exploring sovereign state foundations, civilizational breakthroughs, and urban history.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articlesData.map(art => (
            <Link
              key={art.id}
              href={`/articles/${art.slug}`}
              className="group relative overflow-hidden aspect-[16/11] border border-[#E5C98E]/30 bg-black shadow-lg hover:border-[#E5C98E] hover:shadow-2xl transition-all duration-500 flex flex-col justify-end"
            >
              {/* Full Bleed Background Photo */}
              <div className="absolute inset-0 z-0">
                <img
                  src={art.heroImageUrl}
                  alt={art.title}
                  className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 via-45% to-black/30 group-hover:from-black/98 transition-colors duration-500" />
              </div>

              {/* Top Badges */}
              <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
                <span className="font-serif text-[11px] font-bold uppercase tracking-wider text-[#E5C98E] bg-black/70 backdrop-blur-md px-3 py-1 border border-[#E5C98E]/30">
                  {art.category}
                </span>
                <span className="text-[11px] text-white/90 bg-[#123C33]/80 backdrop-blur-md px-3 py-1 flex items-center gap-1.5 border border-[#E5C98E]/20">
                  <Clock className="h-3 w-3 text-[#E5C98E]" />
                  <span>{art.readTime} min read</span>
                </span>
              </div>

              {/* Overlaid Bottom Content */}
              <div className="relative z-10 p-6 sm:p-8 space-y-2 text-white">
                <span className="text-[10px] uppercase font-serif tracking-widest text-white/60 block">
                  Published {art.publishedAt}
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-[#E5C98E] transition-colors leading-tight">
                  {art.title}
                </h3>

                <div className="font-arabicHeading text-sm sm:text-base font-semibold text-[#E5C98E] leading-snug">
                  {art.arabicTitle}
                </div>

                <p className="text-xs sm:text-sm text-stone-300 font-light line-clamp-2 leading-relaxed pt-2 border-t border-white/10">
                  {art.leadParagraph}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs font-serif font-bold text-[#E5C98E] group-hover:translate-x-1 transition-transform">
                  <span>{language === 'ar' ? 'قراءة الدراسة التوثيقية الكاملة' : 'Read Full Archival Monograph'}</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
