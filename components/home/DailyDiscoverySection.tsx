'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, Crown, Building2, Calendar, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageProvider';

export const DailyDiscoverySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 bg-ivory text-midnight border-b border-sand overflow-hidden">
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-sand/30 px-4 py-1 mb-3 text-xs font-serif uppercase tracking-widest text-emerald-dark font-semibold">
            <Compass className="h-3.5 w-3.5 text-gold-dark" />
            <span>Curated Daily Archival Gems</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-midnight">
            Daily Discovery
          </h2>
          <p className="text-xs sm:text-sm text-stone mt-2">
            Broaden your understanding with randomly selected knowledge nodes refreshed daily from the archive.
          </p>
        </div>

        {/* 5 Discovery Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          
          {/* Item 1: Ruler */}
          <Link
            href="/people/king-abdulaziz"
            className="group rounded-2xl border border-sand bg-white p-5 shadow-sm hover:shadow-lg hover:border-gold transition-all"
          >
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-gold-dark uppercase tracking-wider mb-2 font-serif">
              <Crown className="h-3 w-3 text-gold" />
              <span>Historic Ruler</span>
            </div>
            <h4 className="font-serif text-sm font-bold text-midnight group-hover:text-emerald line-clamp-1">
              King Abdulaziz Al Saud
            </h4>
            <span className="text-[10px] text-stone block font-arabicHeading">الملك عبد العزيز</span>
            <p className="text-[11px] text-stone mt-2 line-clamp-2">
              Founder and first King of modern Saudi Arabia (1875–1953).
            </p>
          </Link>

          {/* Item 2: City */}
          <Link
            href="/cities/muscat"
            className="group rounded-2xl border border-sand bg-white p-5 shadow-sm hover:shadow-lg hover:border-gold transition-all"
          >
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-gold-dark uppercase tracking-wider mb-2 font-serif">
              <Building2 className="h-3 w-3 text-gold" />
              <span>Historic City</span>
            </div>
            <h4 className="font-serif text-sm font-bold text-midnight group-hover:text-emerald line-clamp-1">
              Muscat, Oman
            </h4>
            <span className="text-[10px] text-stone block font-arabicHeading">مسقط، عُمان</span>
            <p className="text-[11px] text-stone mt-2 line-clamp-2">
              Historic frankincense port capital between rocky volcanic peaks and the sea.
            </p>
          </Link>

          {/* Item 3: Historical Event */}
          <Link
            href="/timeline"
            className="group rounded-2xl border border-sand bg-white p-5 shadow-sm hover:shadow-lg hover:border-gold transition-all"
          >
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-gold-dark uppercase tracking-wider mb-2 font-serif">
              <Calendar className="h-3 w-3 text-gold" />
              <span>Historic Moment</span>
            </div>
            <h4 className="font-serif text-sm font-bold text-midnight group-hover:text-emerald line-clamp-1">
              1981 GCC Charter
            </h4>
            <span className="text-[10px] text-stone block font-arabicHeading">ميثاق مجلس التعاون</span>
            <p className="text-[11px] text-stone mt-2 line-clamp-2">
              Founding summit of the Gulf Cooperation Council in Abu Dhabi.
            </p>
          </Link>

          {/* Item 4: Cultural Tradition */}
          <Link
            href="/culture/coffee-and-hospitality"
            className="group rounded-2xl border border-sand bg-white p-5 shadow-sm hover:shadow-lg hover:border-gold transition-all"
          >
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-gold-dark uppercase tracking-wider mb-2 font-serif">
              <Sparkles className="h-3 w-3 text-gold" />
              <span>Tradition</span>
            </div>
            <h4 className="font-serif text-sm font-bold text-midnight group-hover:text-emerald line-clamp-1">
              Gahwa & Diyafa
            </h4>
            <span className="text-[10px] text-stone block font-arabicHeading">القهوة العربية والضيافة</span>
            <p className="text-[11px] text-stone mt-2 line-clamp-2">
              UNESCO-inscribed ritual of cardamom coffee and Arabian hospitality.
            </p>
          </Link>

          {/* Item 5: Landmark */}
          <Link
            href="/landmarks/alula-hegra"
            className="group rounded-2xl border border-sand bg-white p-5 shadow-sm hover:shadow-lg hover:border-gold transition-all"
          >
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-gold-dark uppercase tracking-wider mb-2 font-serif">
              <MapPin className="h-3 w-3 text-gold" />
              <span>Landmark</span>
            </div>
            <h4 className="font-serif text-sm font-bold text-midnight group-hover:text-emerald line-clamp-1">
              Hegra (Al-Hijr)
            </h4>
            <span className="text-[10px] text-stone block font-arabicHeading">مدائن صالح بالعلَا</span>
            <p className="text-[11px] text-stone mt-2 line-clamp-2">
              Over 111 monumental rock-cut Nabataean tomb facades in sandstone desert.
            </p>
          </Link>

        </div>

      </div>
    </section>
  );
};
