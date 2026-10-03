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
      className={`relative inline-flex items-center h-[36px] sm:h-[38px] w-[100px] sm:w-[108px] bg-[#F7F5F0] border-[1.5px] border-[#123C33] overflow-hidden cursor-pointer select-none shrink-0 shadow-xs transition-all hover:shadow-md hover:border-[#1a4a3e] p-[2px] ${className}`}
      style={{ borderRadius: '9999px' }}
    >
      {/* Sliding Active Pill Background */}
      <motion.div
        layout
        initial={false}
        animate={{
          left: isEn ? '2px' : 'calc(50% + 1px)',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
        className="absolute top-[2px] bottom-[2px] w-[calc(50%-3px)] bg-[#123C33] shadow-sm"
        style={{ borderRadius: '9999px' }}
      />

      {/* English Label (Left Half) */}
      <div 
        className={`relative z-10 w-1/2 h-full flex items-center justify-center text-[12px] sm:text-[13px] font-sans font-bold tracking-wider transition-colors duration-200 select-none ${
          isEn ? 'text-white font-extrabold' : 'text-[#123C33] hover:text-[#1a4a3e]'
        }`}
      >
        EN
      </div>

      {/* Arabic / Secondary Label (Right Half) */}
      <div 
        className={`relative z-10 w-1/2 h-full flex items-center justify-center text-[12px] sm:text-[13px] font-sans font-bold tracking-wider transition-colors duration-200 select-none ${
          !isEn ? 'text-white font-extrabold' : 'text-[#123C33] hover:text-[#1a4a3e]'
        }`}
      >
        AR
      </div>
    </button>
  );
};
