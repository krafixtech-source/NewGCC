'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Landmark, Award } from 'lucide-react';
import { useLanguage } from '../LanguageProvider';

export const FeaturedCountrySection: React.FC = () => {
  const { language, isRTL } = useLanguage();

  return (
    <section 
      className="relative w-full min-h-[100dvh] bg-white flex flex-col justify-between overflow-hidden border-b border-border"
      aria-label="Kingdom Spotlight — Saudi Arabia"
    >
      {/* Full Screen Edge-to-Edge Split Stage */}
      <div className="relative w-full h-full flex-1 flex flex-col lg:flex-row items-stretch overflow-hidden">
        
        {/* LEFT SIDE: Full-Height Documentary Photograph */}
        <div className="relative w-full lg:w-[50%] xl:w-[52%] 2xl:w-[55%] min-h-[45vh] lg:min-h-full flex-shrink-0 bg-[#1A1A18] overflow-hidden group">
          <img
            src="/images/alula.jpg"
            alt="Qasr al-Farid, Hegra & At-Turaif District, Saudi Arabia"
            className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
          />

          {/* Atmospheric Gradient Fades */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
          <div className="hidden lg:block absolute inset-y-0 right-0 w-36 bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none rtl:right-auto rtl:left-0 rtl:bg-gradient-to-r" />
          <div className="lg:hidden absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />
        </div>

        {/* RIGHT SIDE: Full-Bleed Magazine Editorial Dossier */}
        <div className="w-full flex-1 flex flex-col justify-between p-6 sm:p-10 lg:p-12 xl:p-16 2xl:p-20 bg-white relative overflow-y-auto lg:overflow-visible">
          
          <div className="space-y-6 max-w-2xl">
            
            {/* Kicker & Title Header */}
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-2 h-2 rounded-full bg-antiqueGold shadow-[0_0_6px_rgba(184,154,97,0.6)]" />
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-antiqueGold font-bold">
                  {language === 'ar' ? 'دولة تحت الضوء' : 'Kingdom Spotlight'}
                </span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-ink tracking-tight leading-none mb-2">
                SAUDI ARABIA
              </h2>
              
              <div className="font-arabicHeading text-2xl sm:text-3xl lg:text-4xl text-forest font-bold mb-4">
                المملكة العربية السعودية
              </div>

              <p className="text-xs sm:text-sm lg:text-base text-ink-muted leading-relaxed font-sans">
                {language === 'ar'
                  ? 'مهد الدولة العربية والتراث الإسلامي، يمتد تاريخها من دروب التجارة النبطية في الحِجر إلى تأسيس الدولة السعودية الأولى في الدرعية عام ١٧٢٧م وصولاً إلى الريادة العالمية المعاصرة.'
                  : 'The historic cradle of Arab statehood and Islamic heritage, spanning from the ancient Nabataean trade paths of Hegra to the founding of Diriyah in 1727 and modern global leadership.'}
              </p>
            </div>

            {/* Geopolitical & Constitutional Data Table */}
            <div className="border-t border-border divide-y divide-border text-xs sm:text-sm font-mono bg-[#FAF8F5] rounded-2xl p-4 sm:p-5 border border-border/80">
              <div className="py-2.5 flex items-center justify-between gap-4">
                <span className="text-ink-muted uppercase text-[11px]">Capital</span>
                <span className="font-sans font-bold text-ink text-xs sm:text-sm text-right">Riyadh (الرياض)</span>
              </div>

              <div className="py-2.5 flex items-center justify-between gap-4">
                <span className="text-ink-muted uppercase text-[11px]">Established</span>
                <span className="font-sans font-bold text-ink text-xs sm:text-sm text-right">1727 CE (Founding) · 1932 CE (Unification)</span>
              </div>

              <div className="py-2.5 flex items-center justify-between gap-4">
                <span className="text-ink-muted uppercase text-[11px]">Geographic Region</span>
                <span className="font-sans font-bold text-ink text-xs sm:text-sm text-right">Arabian Peninsula · GCC</span>
              </div>

              <div className="py-2.5 flex items-center justify-between gap-4">
                <span className="text-ink-muted uppercase text-[11px]">System of Governance</span>
                <span className="font-sans font-bold text-ink text-xs sm:text-sm text-right">Absolute Monarchy</span>
              </div>

              <div className="py-2.5 flex items-center justify-between gap-4">
                <span className="text-ink-muted uppercase text-[11px]">Custodian of Two Holy Mosques</span>
                <span className="font-sans font-bold text-forest text-xs sm:text-sm text-right">King Salman bin Abdulaziz</span>
              </div>

              <div className="py-2.5 flex items-center justify-between gap-4">
                <span className="text-ink-muted uppercase text-[11px]">Crown Prince & Prime Minister</span>
                <span className="font-sans font-bold text-forest text-xs sm:text-sm text-right">Mohammed bin Salman</span>
              </div>
            </div>
          </div>

          {/* Action Button Link */}
          <div className="pt-6 mt-4 border-t border-border flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/countries/saudi-arabia"
              className="inline-flex items-center gap-3 px-8 py-4 bg-forest text-white hover:bg-forest-light text-xs font-mono uppercase tracking-wider font-semibold group transition-all rounded-full shadow-museum hover:shadow-lg"
            >
              <span>{language === 'ar' ? 'استعراض الموسوعة الشاملة للمملكة' : 'Explore Complete Saudi Monograph'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Link>

            <span className="text-xs font-mono text-ink-muted uppercase tracking-wider">
              GCC Encyclopedia · Record #SA-01
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
