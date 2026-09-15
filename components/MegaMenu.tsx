'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Globe, Crown, User, Building2, BookOpen, Clock, Landmark, Compass, Sparkles, Scale, Network, ArrowRight } from 'lucide-react';
import { countriesData } from '@/lib/data/countries';
import { royalFamiliesData } from '@/lib/data/royalty';
import { articlesData } from '@/lib/data/articles';
import { useLanguage } from './LanguageProvider';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  const { t, isRTL } = useLanguage();

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-x-0 top-[65px] z-40 bg-white/98 backdrop-blur-2xl border-b border-[#E5E7EB] rounded-b-3xl shadow-2xl animate-fadeIn transition-all max-h-[85vh] overflow-y-auto"
      onMouseLeave={onClose}
    >
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Column 1: Countries & GCC Focus */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-forest font-serif text-sm font-semibold tracking-wider uppercase border-b border-border pb-2">
              <Globe className="h-4 w-4 text-antiqueGold" />
              <span>{t.countries}</span>
            </div>
            <ul className="space-y-2 text-xs">
              <li className="font-semibold text-antiqueGold tracking-wide text-[11px] uppercase">
                GCC Member States
              </li>
              {countriesData.filter(c => c.isGCC).map(c => (
                <li key={c.id}>
                  <Link 
                    href={`/countries/${c.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between text-ink/80 hover:text-forest hover:translate-x-1 transition-all py-0.5"
                  >
                    <span>{c.name}</span>
                    <span className="text-[10px] text-ink-muted font-arabicHeading">{c.arabicName}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/countries"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 text-xs text-forest font-semibold hover:underline"
                >
                  <span>View All 22 Arab Nations</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Royal Families & Dynasties */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-forest font-serif text-sm font-semibold tracking-wider uppercase border-b border-border pb-2">
              <Crown className="h-4 w-4 text-antiqueGold" />
              <span>{t.royalty}</span>
            </div>
            <ul className="space-y-2 text-xs">
              {royalFamiliesData.map(rf => (
                <li key={rf.id}>
                  <Link 
                    href={`/royalty/${rf.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between text-ink/80 hover:text-forest hover:translate-x-1 transition-all py-0.5"
                  >
                    <span>{rf.name}</span>
                    <span className="text-[10px] text-ink-muted">{rf.country}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/royalty/explorer"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 text-xs text-forest font-semibold hover:underline"
                >
                  <Compass className="h-3.5 w-3.5" />
                  <span>Royalty Map Explorer</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: History & Civilizations */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-forest font-serif text-sm font-semibold tracking-wider uppercase border-b border-border pb-2">
              <Clock className="h-4 w-4 text-antiqueGold" />
              <span>{t.history}</span>
            </div>
            <ul className="space-y-2 text-xs text-ink/80">
              <li>
                <Link href="/history/nabataean-civilization" onClick={onClose} className="hover:text-forest block py-0.5">
                  Nabataean Civilization
                </Link>
              </li>
              <li>
                <Link href="/history/umayyad-caliphate" onClick={onClose} className="hover:text-forest block py-0.5">
                  Umayyad Caliphate (Damascus)
                </Link>
              </li>
              <li>
                <Link href="/history/abbasid-caliphate" onClick={onClose} className="hover:text-forest block py-0.5">
                  Abbasid Golden Age (Baghdad)
                </Link>
              </li>
              <li>
                <Link href="/history/andalusian-civilization" onClick={onClose} className="hover:text-forest block py-0.5">
                  Andalusian Civilization (Iberia)
                </Link>
              </li>
              <li>
                <Link href="/history/modern-gulf-renaissance" onClick={onClose} className="hover:text-forest block py-0.5">
                  Modern Gulf Renaissance
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/timeline" onClick={onClose} className="inline-flex items-center gap-1.5 text-xs text-forest font-semibold hover:underline">
                  <Clock className="h-3.5 w-3.5" />
                  <span>Chronological Timeline</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Culture, Cities & Tools */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-forest font-serif text-sm font-semibold tracking-wider uppercase border-b border-border pb-2">
              <Sparkles className="h-4 w-4 text-antiqueGold" />
              <span>Culture & Tools</span>
            </div>
            <ul className="space-y-2 text-xs text-ink/80">
              <li>
                <Link href="/culture/architecture" onClick={onClose} className="hover:text-forest block py-0.5">
                  Arabian Architecture & Geometry
                </Link>
              </li>
              <li>
                <Link href="/culture/calligraphy" onClick={onClose} className="hover:text-forest block py-0.5">
                  Arabic Calligraphy (Khatt)
                </Link>
              </li>
              <li>
                <Link href="/culture/pearl-diving" onClick={onClose} className="hover:text-forest block py-0.5">
                  Pearl Diving & Maritime Trade
                </Link>
              </li>
              <li>
                <Link href="/cities" onClick={onClose} className="hover:text-forest block py-0.5">
                  Major Historic & Modern Cities
                </Link>
              </li>
              <li className="pt-2 border-t border-border space-y-1.5">
                <Link href="/compare" onClick={onClose} className="flex items-center gap-1.5 text-ink-muted hover:text-forest">
                  <Scale className="h-3.5 w-3.5" />
                  <span>Compare Nations Matrix</span>
                </Link>
                <Link href="/explore" onClick={onClose} className="flex items-center gap-1.5 text-ink-muted hover:text-forest">
                  <Network className="h-3.5 w-3.5" />
                  <span>Interactive Knowledge Graph</span>
                </Link>
                <Link href="/random" onClick={onClose} className="flex items-center gap-1.5 text-ink-muted hover:text-forest">
                  <Compass className="h-3.5 w-3.5" />
                  <span>Random Encyclopedia Article</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Featured Archival Articles with Thumbnails */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-forest font-serif text-sm font-semibold tracking-wider uppercase border-b border-border pb-2">
              <BookOpen className="h-4 w-4 text-antiqueGold" />
              <span>Featured Articles</span>
            </div>
            <div className="space-y-3">
              {articlesData.slice(0, 2).map(art => (
                <Link
                  key={art.id}
                  href={`/articles/${art.slug}`}
                  onClick={onClose}
                  className="group block rounded-2xl border border-border bg-[#F9FAFB] p-2.5 hover:border-antiqueGold transition-all shadow-sm"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl mb-2">
                    <img 
                      src={art.heroImageUrl} 
                      alt={art.title} 
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-1.5 left-1.5 bg-white/90 backdrop-blur-sm text-[9px] uppercase px-2 py-0.5 rounded-full text-forest border border-border font-bold">
                      {art.category}
                    </span>
                  </div>
                  <h4 className="font-serif text-xs font-semibold text-ink group-hover:text-forest transition-colors line-clamp-2">
                    {art.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
