'use client';

import React from 'react';
import Link from 'next/link';

export const Logo: React.FC<{ variant?: 'header' | 'footer'; isLight?: boolean }> = ({ 
  variant = 'header', 
  isLight = false 
}) => {
  const isFooter = variant === 'footer';

  return (
    <Link href="/" className="group flex items-center shrink-0">
      <img 
        src="/logo.png" 
        alt="GCC - Inform • Inspire • Impact" 
        className={`${
          isFooter 
            ? 'h-11 sm:h-13 md:h-15' 
            : 'h-8 sm:h-9 md:h-10'
        } w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
      />
    </Link>
  );
};
