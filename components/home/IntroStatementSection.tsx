'use client';

import React from 'react';
import { useLanguage } from '../LanguageProvider';

export const IntroStatementSection: React.FC = () => {
  const { language } = useLanguage();

  const stats = [
    {
      value: '1981',
      valueAr: '١٩٨١',
      label: 'FOUNDED IN ABU DHABI',
      labelAr: 'تأسس في أبوظبي',
    },
    {
      value: '6 Nations',
      valueAr: '٦ دول',
      label: 'SOVEREIGN MEMBER STATES',
      labelAr: 'دول أعضاء ذات سيادة',
    },
    {
      value: '$2.2 Trillion',
      valueAr: '٢.٢ تريليون دولار',
      label: 'COMBINED NOMINAL GDP',
      labelAr: 'الناتج المحلي الإجمالي المجمع',
    },
    {
      value: '59.5 Million',
      valueAr: '٥٩.٥ مليون نسمة',
      label: 'COMBINED POPULATION',
      labelAr: 'إجمالي التعداد السكاني',
    },
  ];

  return (
    <section className="bg-canvas-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="mx-auto max-w-archival">
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-14">
          {/* Huge Typography */}
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-ink tracking-tight leading-[1.15]">
            {language === 'ar' ? (
              <>٢٢ دَوْلَة. آلاف السِّنِين.<br />مَلايِينُ الحِكَايَات.</>
            ) : (
              <>22 NATIONS. THOUSANDS OF YEARS.<br />MILLIONS OF STORIES.</>
            )}
          </h2>

          {/* Hairline Divider */}
          <div className="w-16 h-[1px] bg-antiqueGold mx-auto" />

          {/* Subtitle Statement */}
          <p className="font-serif text-lg sm:text-2xl text-ink-muted italic leading-relaxed max-w-2xl mx-auto">
            {language === 'ar'
              ? 'توثق موسوعة GCC الشخصيات، والأماكن، والسلالات الحاكمة، والحضارات التي تواصل صياغة ملامح العالم العربي.'
              : 'GCC documents the people, places, dynasties and civilizations that continue to shape the Arab world.'}
          </p>
        </div>

        {/* 4 GCC Sovereign Milestone Cards Row (Exact Match to Reference) */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white border border-border py-8 px-6 text-center shadow-sm hover:border-antiqueGold hover:shadow-md transition-all flex flex-col justify-center items-center min-h-[120px]"
              >
                <div className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1E2E] mb-2 tracking-tight">
                  {language === 'ar' ? stat.valueAr : stat.value}
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.18em] text-[#154E6D] font-bold">
                  {language === 'ar' ? stat.labelAr : stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


