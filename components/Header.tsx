'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  MoreVertical, 
  Search, 
  Globe, 
  X, 
  Scale, 
  BookOpen, 
  Clock, 
  Network, 
  Compass, 
  Building2, 
  ChevronRight, 
  Sparkles,
  Layers,
  FileText,
  Coins,
  ArrowRightLeft,
  Check
} from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { Logo } from './Logo';
import { MegaMenu } from './MegaMenu';
import { SearchModal } from './SearchModal';
import { LanguageToggle } from './LanguageToggle';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const { language, setLanguage, isRTL } = useLanguage();
  const pathname = usePathname();
  const moreMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close 3-dot menu on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setIsMoreMenuOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMoreMenuOpen(false);
      }
    };

    if (isMoreMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMoreMenuOpen]);

  // Close menus on route change
  useEffect(() => {
    setIsMoreMenuOpen(false);
    setIsMegaMenuOpen(false);
  }, [pathname]);

  // Navigation Links
  const navLinks = [
    { name: 'Nations', nameAr: 'الدول', href: '/countries' },
    { name: 'Royalty', nameAr: 'الأسر الحاكمة', href: '/royalty' },
    { name: 'GCC Council', nameAr: 'مجلس التعاون', href: '/gcc' },
    { name: 'History', nameAr: 'التاريخ', href: '/history' },
    { name: 'Culture', nameAr: 'الثقافة', href: '/culture' },
  ];

  return (
    <>
      <header
        dir="ltr"
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-[#E2D9C8] shadow-sm py-3"
      >
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex items-center justify-between">
            
            {/* Left Zone: Architectural Logo with dedicated margin */}
            <div className="flex items-center flex-shrink-0 me-6 lg:me-8 xl:me-12">
              <Logo isLight={false} />
            </div>

            {/* Center Zone: Editorial Navigation Menu with generous spacing */}
            <nav className="hidden lg:flex items-center justify-center gap-3 lg:gap-6 xl:gap-8 flex-1 px-4 xl:px-8">
              {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`editorial-link text-xs lg:text-[12.5px] xl:text-[13px] tracking-wider uppercase transition-all px-3.5 lg:px-4.5 py-2 rounded-full font-semibold whitespace-nowrap ${
                      isActive
                        ? 'text-[#123C33] font-bold bg-[#F4EFE6] border border-[#E5C98E]/50 shadow-xs'
                        : 'text-[#5C5850] hover:text-[#181816] hover:bg-[#FAF8F5]'
                    }`}
                  >
                    <span>{language === 'ar' ? link.nameAr : link.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Zone: Distinct spacing before Language Switcher and 3-Dot Action Bar (Always fixed at right) */}
            <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0 ms-6 lg:ms-8 xl:ms-12">
              
              {/* Animated Rounded Language Toggle */}
              <LanguageToggle />

              {/* 3-Dot Archival Tools Trigger */}
              <div className="relative" ref={moreMenuRef}>
                <button
                  onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                  className={`flex items-center justify-center h-[34px] sm:h-[36px] w-[34px] sm:w-[36px] border-[1.5px] bg-white transition-all duration-200 cursor-pointer shrink-0 ${
                    isMoreMenuOpen
                      ? 'border-[#253858] text-[#253858] shadow-sm'
                      : 'border-[#D5CDBC] text-[#181816] hover:border-[#253858] hover:text-[#253858] hover:bg-[#FAF8F5] shadow-xs'
                  }`}
                  aria-label="More archival options"
                  aria-expanded={isMoreMenuOpen}
                  title={language === 'ar' ? 'أدوات الأرشيف الإضافية' : 'Archival Navigation & Tools'}
                >
                  {isMoreMenuOpen ? (
                    <X className="h-4 w-4 stroke-[2.2]" />
                  ) : (
                    <MoreVertical className="h-4 w-4 stroke-[2.2]" />
                  )}
                </button>

                {/* 3-Dot Dropdown / Popover Drawer */}
                {isMoreMenuOpen && (
                  <div 
                    dir={isRTL ? 'rtl' : 'ltr'}
                    style={{ backgroundColor: '#FFFFFF', opacity: 1 }}
                    className="absolute right-0 mt-2.5 w-72 sm:w-80 rounded-2xl bg-white border border-[#D5CDBC] shadow-[0_20px_60px_rgba(0,0,0,0.22),0_4px_16px_rgba(0,0,0,0.08)] p-3 text-xs z-50 animate-fadeIn"
                  >
                    {/* Header in dropdown */}
                    <div className="flex items-center justify-between px-3 py-2 border-b border-[#F3F4F6] mb-1.5">
                      <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#C6A15B]">
                        {language === 'ar' ? 'أدوات وفهرس الأرشيف' : 'Archival Navigation & Tools'}
                      </span>
                      <span className="text-[10px] text-stone-400 font-mono">GCC v1.0</span>
                    </div>

                    {/* Mobile Navigation Links (Visible only on mobile/tablet) */}
                    <div className="lg:hidden pb-2 mb-2 border-b border-[#F3F4F6] space-y-0.5">
                      <div className="px-3 py-1 text-[10px] font-mono uppercase text-stone-500">
                        {language === 'ar' ? 'الأقسام الرئيسية' : 'Main Sections'}
                      </div>
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsMoreMenuOpen(false)}
                          className="flex items-center justify-between px-3 py-2 rounded-xl text-stone-800 font-semibold hover:bg-[#FAF8F5] hover:text-[#123C33] transition-colors"
                        >
                          <span>{language === 'ar' ? link.nameAr : link.name}</span>
                          <ChevronRight className="h-3 w-3 text-stone-400" />
                        </Link>
                      ))}
                    </div>

                    {/* Secondary Archival Tools & Shortcuts */}
                    <div className="space-y-1">
                      {/* Search Tool */}
                      <button
                        onClick={() => {
                          setIsMoreMenuOpen(false);
                          setIsSearchOpen(true);
                        }}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#FAF8F5] text-stone-800 hover:text-[#123C33] transition-colors text-left"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 rounded-lg bg-[#FAF8F5] text-[#123C33] border border-stone-200">
                            <Search className="h-3.5 w-3.5" />
                          </div>
                          <span className="font-medium">
                            {language === 'ar' ? 'البحث في الموسوعة' : 'Search Encyclopedia'}
                          </span>
                        </div>
                        <kbd className="px-1.5 py-0.5 border border-[#E5E7EB] bg-white rounded text-[10px] font-mono text-stone-500">
                          ⌘K
                        </kbd>
                      </button>

                      {/* Encyclopedia Index (MegaMenu) */}
                      <button
                        onClick={() => {
                          setIsMoreMenuOpen(false);
                          setIsMegaMenuOpen(true);
                        }}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#FAF8F5] text-stone-800 hover:text-[#123C33] transition-colors text-left"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 rounded-lg bg-[#FAF8F5] text-[#123C33] border border-stone-200">
                            <Layers className="h-3.5 w-3.5" />
                          </div>
                          <span className="font-medium">
                            {language === 'ar' ? 'فهرس الموسوعة الشامل' : 'Full Encyclopedia Index'}
                          </span>
                        </div>
                        <span className="text-[10px] text-[#C6A15B] font-semibold uppercase font-mono">
                          {language === 'ar' ? 'الفهرس' : 'Index'}
                        </span>
                      </button>

                      {/* Compare Tool */}
                      <Link
                        href="/compare"
                        onClick={() => setIsMoreMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#FAF8F5] text-stone-800 hover:text-[#123C33] transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 rounded-lg bg-[#FAF8F5] text-[#123C33] border border-stone-200">
                            <Scale className="h-3.5 w-3.5" />
                          </div>
                          <span className="font-medium">
                            {language === 'ar' ? 'مصفوفة مقارنة الدول' : 'Compare Nations Matrix'}
                          </span>
                        </div>
                        <ChevronRight className="h-3 w-3 text-stone-400" />
                      </Link>

                      {/* Gold Rates Tool */}
                      <Link
                        href="/gold-rates"
                        onClick={() => setIsMoreMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#FAF8F5] text-stone-800 hover:text-[#123C33] transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 rounded-lg bg-[#FAF8F5] text-[#123C33] border border-stone-200">
                            <Coins className="h-3.5 w-3.5 text-[#C6A15B]" />
                          </div>
                          <span className="font-medium">
                            {language === 'ar' ? 'أسعار الذهب والمعادن الثمينة' : 'Live Gold & Bullion Rates'}
                          </span>
                        </div>
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-emerald-100 text-emerald-800">
                          LIVE
                        </span>
                      </Link>

                      {/* Currency Converter Tool */}
                      <Link
                        href="/currency-converter"
                        onClick={() => setIsMoreMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#FAF8F5] text-stone-800 hover:text-[#123C33] transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 rounded-lg bg-[#FAF8F5] text-[#123C33] border border-stone-200">
                            <ArrowRightLeft className="h-3.5 w-3.5 text-[#123C33]" />
                          </div>
                          <span className="font-medium">
                            {language === 'ar' ? 'محول العملات وأسعار الصرف' : 'Live Currency Converter'}
                          </span>
                        </div>
                        <ChevronRight className="h-3 w-3 text-stone-400" />
                      </Link>

                      {/* Articles / Archive */}
                      <Link
                        href="/articles"
                        onClick={() => setIsMoreMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#FAF8F5] text-stone-800 hover:text-[#123C33] transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 rounded-lg bg-[#FAF8F5] text-[#123C33] border border-stone-200">
                            <BookOpen className="h-3.5 w-3.5" />
                          </div>
                          <span className="font-medium">
                            {language === 'ar' ? 'المقالات والبحوث التوثيقية' : 'Archival Research Articles'}
                          </span>
                        </div>
                        <ChevronRight className="h-3 w-3 text-stone-400" />
                      </Link>

                      {/* Chronological Timeline */}
                      <Link
                        href="/timeline"
                        onClick={() => setIsMoreMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#FAF8F5] text-stone-800 hover:text-[#123C33] transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 rounded-lg bg-[#FAF8F5] text-[#123C33] border border-stone-200">
                            <Clock className="h-3.5 w-3.5" />
                          </div>
                          <span className="font-medium">
                            {language === 'ar' ? 'الجدول الزمني للحضارات' : 'Chronological Timeline'}
                          </span>
                        </div>
                        <ChevronRight className="h-3 w-3 text-stone-400" />
                      </Link>

                      {/* Interactive Knowledge Graph */}
                      <Link
                        href="/explore"
                        onClick={() => setIsMoreMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#FAF8F5] text-stone-800 hover:text-[#123C33] transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 rounded-lg bg-[#FAF8F5] text-[#123C33] border border-stone-200">
                            <Network className="h-3.5 w-3.5" />
                          </div>
                          <span className="font-medium">
                            {language === 'ar' ? 'شبكة العلاقات المعرفية' : 'Interactive Knowledge Graph'}
                          </span>
                        </div>
                        <ChevronRight className="h-3 w-3 text-stone-400" />
                      </Link>

                      {/* Major Cities */}
                      <Link
                        href="/cities"
                        onClick={() => setIsMoreMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#FAF8F5] text-stone-800 hover:text-[#123C33] transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 rounded-lg bg-[#FAF8F5] text-[#123C33] border border-stone-200">
                            <Building2 className="h-3.5 w-3.5" />
                          </div>
                          <span className="font-medium">
                            {language === 'ar' ? 'المدن والحواضر التاريخية' : 'Historic & Modern Cities'}
                          </span>
                        </div>
                        <ChevronRight className="h-3 w-3 text-stone-400" />
                      </Link>

                      {/* Random Article */}
                      <Link
                        href="/random"
                        onClick={() => setIsMoreMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#FAF8F5] text-stone-800 hover:text-[#123C33] transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 rounded-lg bg-[#FAF8F5] text-[#123C33] border border-stone-200">
                            <Sparkles className="h-3.5 w-3.5 text-[#C6A15B]" />
                          </div>
                          <span className="font-medium">
                            {language === 'ar' ? 'مقالة عشوائية من الأرشيف' : 'Random Encyclopedia Entry'}
                          </span>
                        </div>
                        <ChevronRight className="h-3 w-3 text-stone-400" />
                      </Link>
                    </div>

                    {/* Footer in dropdown */}
                    <div className="mt-2 pt-2 border-t border-[#F3F4F6] flex items-center justify-between px-2 text-[10px] text-stone-500 font-serif">
                      <Link
                        href="/editorial-standards"
                        onClick={() => setIsMoreMenuOpen(false)}
                        className="hover:text-[#123C33] flex items-center gap-1"
                      >
                        <FileText className="h-3 w-3" />
                        <span>{language === 'ar' ? 'المعايير التحريرية' : 'Editorial Standards'}</span>
                      </Link>
                      <Link
                        href="/about"
                        onClick={() => setIsMoreMenuOpen(false)}
                        className="hover:text-[#123C33]"
                      >
                        {language === 'ar' ? 'عن الموسوعة' : 'About'}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* MegaMenu Drawer Component */}
      <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};
