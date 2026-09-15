'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageProvider';

export const Logo: React.FC<{ variant?: 'header' | 'footer'; isLight?: boolean }> = ({ 
  variant = 'header', 
  isLight = false 
}) => {
  const { language } = useLanguage();

  return (
    <Link href="/" className="group flex items-center gap-3">
      {/* Restrained Architectural Emblem */}
      <div className={`relative flex h-9 w-9 items-center justify-center border border-antiqueGold rounded-xl transition-colors ${
        isLight 
          ? 'bg-black/30 backdrop-blur-md text-[#E5C98E]' 
          : 'bg-canvas-white text-forest shadow-editorial'
      }`}>
        <svg 
          viewBox="0 0 24 24" 
          className="h-5 w-5 text-antiqueGold"
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.25"
        >
          {/* Subtle Octagram & Arabian Arch Motif */}
          <rect x="5" y="5" width="14" height="14" transform="rotate(45 12 12)" stroke="currentColor" strokeWidth="1" />
          <path d="M12 3 L12 21" stroke="currentColor" strokeWidth="0.75" strokeDasharray="1 2" />
          <path d="M3 12 L21 12" stroke="currentColor" strokeWidth="0.75" strokeDasharray="1 2" />
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span className={`font-serif text-lg font-bold tracking-tight transition-colors leading-none ${
          isLight 
            ? 'text-white group-hover:text-[#E5C98E] drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]' 
            : 'text-ink group-hover:text-forest'
        }`}>
          GCC
        </span>
        <span className="text-[9px] font-mono tracking-[0.25em] text-antiqueGold uppercase mt-1 leading-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
          {language === 'ar' ? 'العالم العربي، موثقاً' : 'The Arab World, Documented'}
        </span>
      </div>
    </Link>
  );
};
