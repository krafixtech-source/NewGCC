'use client';

import React from 'react';
import Link from 'next/link';
import { Crown, ArrowRight, ShieldCheck, MapPin, Compass, Building2 } from 'lucide-react';
import { royalFamiliesData } from '@/lib/data/royalty';
import { useLanguage } from '@/components/LanguageProvider';

export default function RoyaltyDirectoryPage() {
  const { language } = useLanguage();

  // Helper map for royal dynasty imagery and monarch portraits
  const dynastyAssets: Record<string, { palace: string; leaderImg: string }> = {
    'house-of-saud': { palace: '/images/palaces/yamamah-palace.jpg', leaderImg: '/images/leaders/king-salman.jpg' },
    'house-of-al-nahyan': { palace: '/images/landmarks/barjeel.jpg', leaderImg: '/images/leaders/mbz.jpg' },
    'house-of-al-maktoum': { palace: '/images/riyadh.jpg', leaderImg: '/images/leaders/mohammed-bin-rashid.jpg' },
    'house-of-al-thani': { palace: '/images/hero.jpg', leaderImg: '/images/leaders/tamim.jpg' },
    'house-of-al-said': { palace: '/images/craftsmanship.jpg', leaderImg: '/images/leaders/haitham-tariq.jpg' },
    'house-of-al-khalifa': { palace: '/images/hero-banner.jpg', leaderImg: '/images/leaders/hamad-khalifa.jpg' },
    'house-of-al-sabah': { palace: '/images/arab-leaders-summit.jpg', leaderImg: '/images/leaders/mishal-sabah.jpg' },
    'hashemite-dynasty': { palace: '/images/alula.jpg', leaderImg: '/images/leaders/abdullah-jordan.jpg' },
    'alaouite-dynasty': { palace: '/images/history/andalus.jpg', leaderImg: '/images/leaders/mohammed-vi.jpg' },
  };

  return (
    <div className="bg-canvas min-h-screen text-ink">
      
      {/* Royal Hero Banner */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-border overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-45 scale-105 transform duration-1000"
            style={{ backgroundImage: "url('/images/palaces/yamamah-palace.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-archival text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-mono uppercase tracking-[0.25em] text-antiqueGold-light font-bold mb-4">
            <Crown className="h-3.5 w-3.5 text-antiqueGold" />
            <span>{language === 'ar' ? 'السلالات والبيوت الملكية' : 'Dynastic Archives & Genealogies'}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
            {language === 'ar' ? 'البيوت الملكية في الجزيرة العربية' : 'Royal Houses of Arabia'}
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/80 font-sans leading-relaxed mb-6">
            {language === 'ar'
              ? 'سجل موسوعي يوثق السلالات الحاكمة، شجرات النسب الملكية، وقرون الحكم والسيادة في شبه الجزيرة العربية والعالم العربي.'
              : 'Documenting the sovereign ruling dynasties, genealogical lineages, and centuries of continuous governance across the Arabian Peninsula.'}
          </p>

          <Link
            href="/royalty/explorer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-antiqueGold text-forest text-xs font-mono uppercase tracking-wider font-bold hover:bg-antiqueGold-light transition-all shadow-lg cursor-pointer"
          >
            <Compass className="h-4 w-4" />
            <span>{language === 'ar' ? 'استعراض شجرة العائلات الحاكمة التفاعلية' : 'Open Peninsula Royalty Explorer'}</span>
          </Link>
        </div>
      </section>

      {/* Royal Houses Cards Grid */}
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {royalFamiliesData.map(rf => {
            const assets = dynastyAssets[rf.slug] || { palace: '/images/palaces/yamamah-palace.jpg', leaderImg: '/images/leaders/king-salman.jpg' };

            return (
              <Link
                key={rf.id}
                href={`/royalty/${rf.slug}`}
                className="group relative flex flex-col justify-between aspect-[3/4.2] sm:aspect-[3/4.4] w-full bg-slate-950 border border-border hover:border-antiqueGold transition-all duration-300 overflow-hidden shadow-sm hover:shadow-2xl"
              >
                {/* Background Palace Image with Zoom */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url('${assets.palace}')` }}
                />

                {/* Dark Vignette Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 via-50% to-black/35 group-hover:from-black transition-colors duration-300 pointer-events-none" />

                {/* Top Badges (Country & Founded Year) */}
                <div className="relative z-10 p-5 flex items-center justify-between">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-forest text-[10px] font-mono font-bold uppercase tracking-wider border border-white/20 shadow-sm flex items-center gap-1.5">
                    <MapPin className="h-3 w-3 text-antiqueGold" />
                    {rf.country}
                  </span>

                  <span className="px-2.5 py-1 bg-antiqueGold text-forest text-[9px] font-mono font-bold uppercase tracking-wider shadow-sm">
                    Est. {rf.foundedYear} CE
                  </span>
                </div>

                {/* Bottom Information Overlaid on Image */}
                <div className="relative z-10 p-6 flex flex-col justify-end">
                  
                  {/* Monarch Avatar + Dynasty Name */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-antiqueGold shadow-md flex-shrink-0 bg-slate-800">
                      <img
                        src={assets.leaderImg}
                        alt={rf.currentHead}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <span className="text-xs font-arabicHeading font-bold text-[#E5C98E] block leading-none mb-1">
                        {rf.arabicName}
                      </span>
                      <h3 className="font-serif font-bold text-2xl text-white group-hover:text-[#E5C98E] transition-colors leading-tight">
                        {rf.name}
                      </h3>
                    </div>
                  </div>

                  {/* Dynastic Details */}
                  <div className="space-y-1.5 text-xs text-white/85 font-sans mb-4 pt-3 border-t border-white/20">
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">{language === 'ar' ? 'المؤسس:' : 'Founder:'}</span>
                      <span className="font-semibold text-white truncate max-w-[170px]">{rf.founder}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">{language === 'ar' ? 'العاهل الحالي:' : 'Current Head:'}</span>
                      <span className="font-semibold text-white truncate max-w-[170px]">{rf.currentHead}</span>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs font-mono text-antiqueGold-light group-hover:text-white font-semibold transition-colors">
                    <span>{language === 'ar' ? 'استعراض شجرة النسب والسجل' : 'View Lineage & Monograph'}</span>
                    <span className="group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform duration-300">→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

    </div>
  );
}
