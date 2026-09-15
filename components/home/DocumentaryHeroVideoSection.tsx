'use client';

import React, { useRef, useState } from 'react';
import { Film } from 'lucide-react';
import { useLanguage } from '../LanguageProvider';

export const DocumentaryHeroVideoSection: React.FC = () => {
  const { language } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen w-full flex items-center justify-center overflow-hidden bg-black border-y border-[#244238]">
      {/* Full Screen Background Documentary Video (No Buttons, Continuous Muted Loop) */}
      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <video
            ref={videoRef}
            poster="/images/hero-banner.jpg"
            autoPlay
            loop
            muted
            playsInline
            onError={() => setVideoError(true)}
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
            <source src="/Create_a_premium_documentary_s.mp4" type="video/mp4" />
          </video>
        ) : (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero-banner.jpg')" }}
          />
        )}
      </div>

      {/* Subtle Top & Bottom Cinematic Edge Fades for Seamless Flow */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none z-[1]" />

      {/* Floating Monograph Badge at Top */}
      <div className="absolute top-6 left-6 sm:top-10 sm:left-10 z-10 flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs font-mono text-[#E5C98E] shadow-lg">
        <Film className="w-3.5 h-3.5 text-[#D4AF37]" />
        <span>{language === 'ar' ? 'الفيلم الوثائقي التأسيسي · سينما الأرشيف' : 'Archival Master Film · 4K Monograph'}</span>
      </div>

      {/* Floating Minimalist Title at Bottom */}
      <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 z-10 max-w-xl">
        <div className="bg-black/40 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/15 shadow-xl">
          <h2 className="font-serif text-xl sm:text-2xl text-[#FCFBF8] font-bold mb-1">
            {language === 'ar' ? 'العالم العربي: وثائقي مرئي شامل' : 'The Arab World: A Cinematic Monograph'}
          </h2>
          <p className="text-xs text-[#C5BBA8] font-sans">
            {language === 'ar'
              ? 'وثيقة بصرية ترصد جغرافية الأمة، ومعالمها التاريخية، وإرثها الإنساني الخالد.'
              : 'A continuous cinematic journey documenting the geography, sovereignty, and living heritage of the Arab world.'}
          </p>
        </div>
      </div>
    </section>
  );
};
