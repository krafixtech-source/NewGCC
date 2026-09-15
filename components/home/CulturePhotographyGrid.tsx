'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageProvider';

interface CultureTile {
  title: string;
  arabicTitle: string;
  category: string;
  slug: string;
  imageUrl: string;
  aspectClass: string;
  spanClass: string;
  description: string;
}

const cultureTiles: CultureTile[] = [
  {
    title: 'Arabian Architecture',
    arabicTitle: 'العمارة العربية والإسلامية',
    category: 'Architecture',
    slug: 'architecture',
    imageUrl: '/images/alula.jpg',
    aspectClass: 'aspect-[4/5]',
    spanClass: 'lg:col-span-4 lg:row-span-2',
    description: 'Najdi mudbrick, Hegra rock masonry, Mashrabiya latticework, and Muqarnas vaulting.'
  },
  {
    title: 'Arabic Calligraphy (Khatt)',
    arabicTitle: 'فن الخط العربي',
    category: 'Calligraphy',
    slug: 'calligraphy',
    imageUrl: '/images/craftsmanship.jpg',
    aspectClass: 'aspect-[3/4]',
    spanClass: 'lg:col-span-4',
    description: 'The supreme sacred geometry of the reed pen (Qalam) across six canonical scripts.'
  },
  {
    title: 'Gahwa & Hospitality (Diyafa)',
    arabicTitle: 'القهوة العربية وكرم الضيافة',
    category: 'Hospitality',
    slug: 'coffee-and-hospitality',
    imageUrl: '/images/hero.jpg',
    aspectClass: 'aspect-square',
    spanClass: 'lg:col-span-4',
    description: 'The UNESCO-inscribed ritual of the brass Dallah, cardamom infusion, and Majlis diplomacy.'
  },
  {
    title: 'Master Artisanal Craftsmanship',
    arabicTitle: 'الحرف اليدوية والصناعات التقليدية',
    category: 'Craftsmanship',
    slug: 'craftsmanship',
    imageUrl: '/images/craftsmanship.jpg',
    aspectClass: 'aspect-[4/3]',
    spanClass: 'lg:col-span-4',
    description: 'Hammered brass, carved gypsum, geometric timber joinery, and Sadu hand-weaving.'
  },
  {
    title: 'Traditional Attire & Royal Regalia',
    arabicTitle: 'الأزياء التقليدية والبشت الملكي',
    category: 'Dress',
    slug: 'traditional-attire',
    imageUrl: '/images/riyadh.jpg',
    aspectClass: 'aspect-[3/4]',
    spanClass: 'lg:col-span-4',
    description: 'Gold-embroidered Bisht robes, fine camel-wool cloaks, and regional textile identities.'
  },
  {
    title: 'Classical Arabic Poetry & Mu\'allaqat',
    arabicTitle: 'الشعر العربي والمعلقات السبع',
    category: 'Poetry',
    slug: 'poetry',
    imageUrl: '/images/alula.jpg',
    aspectClass: 'aspect-square',
    spanClass: 'lg:col-span-4',
    description: 'The eternal verbal monument of the desert — from Souq Okaz to modern lyrical masters.'
  },
  {
    title: 'Traditional Arabian Music & Oud',
    arabicTitle: 'الموسيقى التقليدية ومقامات العود',
    category: 'Music',
    slug: 'music',
    imageUrl: '/images/hero.jpg',
    aspectClass: 'aspect-[3/4]',
    spanClass: 'lg:col-span-4',
    description: 'Microtonal Maqam systems, the royal lute (Oud), and oceanic Fijiri sea shanties.'
  },
  {
    title: 'Arabian Culinary Heritage',
    arabicTitle: 'فنون الطهي والمائدة العربية',
    category: 'Cuisine',
    slug: 'cuisine',
    imageUrl: '/images/riyadh.jpg',
    aspectClass: 'aspect-[4/3]',
    spanClass: 'lg:col-span-4',
    description: 'Saffron-infused Kabsa, heritage grains, Arabian dates, and frankincense aromatics.'
  }
];

export const CulturePhotographyGrid: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="bg-canvas-white py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="mx-auto max-w-archival">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-border gap-4">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl text-ink font-bold tracking-tight">
              {language === 'ar' ? 'موسوعة التراث والثقافة العربية' : 'Pillars of Arab Culture'}
            </h2>
          </div>
          <Link
            href="/culture"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-antiqueGold hover:text-forest font-bold transition-colors"
          >
            <span>{language === 'ar' ? 'استعراض كافة الأبواب الثقافية' : 'Explore Cultural Encyclopedia'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Asymmetric Photography Grid with Diverse Aspect Ratios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {cultureTiles.map((tile, idx) => (
            <Link
              key={idx}
              href={`/culture/${tile.slug}`}
              className={`group relative overflow-hidden bg-canvas-paper border border-border hover:border-antiqueGold transition-all flex flex-col justify-end p-6 rounded-2xl shadow-sm hover:shadow-lg ${tile.spanClass}`}
            >
              {/* Image with subtle zoom on hover */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.025]`}
                style={{ backgroundImage: `url('${tile.imageUrl}')` }}
              />

              {/* Light translucent panel at bottom on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Editorial Content */}
              <div className="relative z-10 text-white space-y-1">
                <span className="text-[10px] font-mono text-antiqueGold-light uppercase tracking-widest font-bold block">
                  {tile.category}
                </span>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight">
                  {tile.title}
                </h3>

                <div className="font-arabic text-xs text-sand-light">
                  {tile.arabicTitle}
                </div>

                <p className="text-xs text-stone-300 font-sans leading-relaxed line-clamp-2 pt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tile.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
