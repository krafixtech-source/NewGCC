'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { peopleData } from '@/lib/data';
import { useLanguage } from '../LanguageProvider';

export const CurrentLeadershipSection: React.FC = () => {
  const { language } = useLanguage();

  // Current ruling monarchs & leaders
  const currentRulers = peopleData.filter(p => p.isCurrent && p.isRuler);

  return (
    <section className="bg-canvas py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="mx-auto max-w-archival">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-border gap-4">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl text-ink font-bold tracking-tight">
              {language === 'ar' ? 'سجل الحكام ورؤساء الدول المعاصرين' : 'Current Monarchs & Heads of State'}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/people"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-antiqueGold hover:text-forest font-bold transition-colors"
            >
              <span>{language === 'ar' ? 'استعراض كافة السير الرسمية' : 'View All Biographies'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Museum Portrait Catalogue Grid in 4:5 Aspect Ratio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentRulers.map((leader) => (
            <Link
              key={leader.id}
              href={`/people/${leader.slug}`}
              className="group flex flex-col bg-canvas-white border border-border hover:border-antiqueGold transition-all rounded-2xl overflow-hidden shadow-sm hover:shadow-lg"
            >
              {/* 4:5 Official Portrait Frame with thin 1px border */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-canvas-paper border-b border-border">
                <div
                  className="absolute inset-0 bg-cover bg-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  style={{ backgroundImage: `url('${leader.portraitUrl || "/images/riyadh.jpg"}')` }}
                />

                {/* Status Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 bg-canvas-white/95 text-forest text-[10px] font-mono font-bold tracking-wider uppercase border border-border rounded-full shadow-sm">
                    Reigning
                  </span>
                </div>
              </div>

              {/* Portrait Catalogue Monograph Info */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-[10px] font-mono text-antiqueGold uppercase tracking-wider mb-1 font-semibold">
                    {leader.title.includes('King') || leader.title.includes('Sultan') ? 'H.M.' : 'H.H.'} · {leader.country}
                  </div>

                  <h3 className="font-serif font-bold text-lg text-ink group-hover:text-forest transition-colors mb-1 line-clamp-1">
                    {leader.name}
                  </h3>

                  <div className="font-arabic text-xs text-ink-muted mb-3 line-clamp-1">
                    {leader.arabicName}
                  </div>

                  <p className="text-[11px] text-ink-muted leading-relaxed line-clamp-2 font-sans mb-3">
                    {leader.title}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/70 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-ink-muted">Reign: <strong className="text-ink font-semibold">{leader.reign || 'Present'}</strong></span>
                  <span className="text-antiqueGold group-hover:text-forest font-bold">Profile →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
