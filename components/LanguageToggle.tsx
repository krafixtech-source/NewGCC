'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageProvider';

interface LanguageToggleProps {
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ 
  className = ''
}) => {
  const { language, setLanguage } = useLanguage();
  const isEn = language === 'en';

  const handleToggle = () => {
    setLanguage(isEn ? 'ar' : 'en');
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isEn ? 'Switch to Arabic language' : 'Switch to English language'}
      title={isEn ? 'Switch to Arabic (AR)' : 'Switch to English (EN)'}
      dir="ltr"
      className={`relative inline-flex items-center h-[34px] sm:h-[36px] w-[96px] sm:w-[104px] bg-white border-[1.5px] border-[#253858] overflow-hidden cursor-pointer select-none shrink-0 shadow-xs transition-opacity hover:opacity-95 ${className}`}
    >
      {/* Sliding Active Pill Background */}
      <motion.div
        layout
        initial={false}
        animate={{
          left: isEn ? '0%' : '50%',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
        className="absolute top-0 bottom-0 w-1/2 bg-[#253858]"
      />

      {/* English Label (Left Half) */}
      <div 
        className={`relative z-10 w-1/2 h-full flex items-center justify-center text-[12px] sm:text-[13px] font-sans font-bold tracking-wide transition-colors duration-200 select-none ${
          isEn ? 'text-white' : 'text-[#253858]'
        }`}
      >
        EN
      </div>

      {/* Arabic / Secondary Label (Right Half) */}
      <div 
        className={`relative z-10 w-1/2 h-full flex items-center justify-center text-[12px] sm:text-[13px] font-sans font-bold tracking-wide transition-colors duration-200 select-none ${
          !isEn ? 'text-white' : 'text-[#253858]'
        }`}
      >
        AR
      </div>
    </button>
  );
};
