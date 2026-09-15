'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  MoreHorizontal, 
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
  ArrowRightLeft
} from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { Logo } from './Logo';
import { MegaMenu } from './MegaMenu';
import { SearchModal } from './SearchModal';

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

  // Navigation Links - Landmarks replaced with Gold Rates & Currency Converter
  const navLinks = [
    { name: 'Nations', nameAr: 'الدول', href: '/countries' },
    { name: 'Royalty', nameAr: 'الأسر الحاكمة', href: '/royalty' },
    { name: 'GCC Council', nameAr: 'مجلس التعاون', href: '/gcc' },
    { name: 'History', nameAr: 'التاريخ', href: '/history' },
    { name: 'Culture', nameAr: 'الثقافة', href: '/culture' },
    { name: 'Gold Rates', nameAr: 'أسعار الذهب', href: '/gold-rates' },
    { name: 'Currency Converter', nameAr: 'محول العملات', href: '/currency-converter' },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-[#D8D0C1] shadow-sm py-3.5"
      >
        <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Left Zone: Architectural Logo */}
            <div className="flex items-center flex-shrink-0">
              <Logo isLight={false} />
            </div>

            {/* Center Zone: Editorial Navigation Menu */}
            <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-2 flex-1">
              {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`editorial-link text-xs tracking-wider uppercase transition-all px-3.5 py-1.5 rounded-full font-medium ${
                      isActive
                        ? 'text-[#153B32] font-bold bg-[#F4EFE6]'
                        : 'text-[#706C64] hover:text-[#20201E] hover:bg-[#FAF8F5]'
                    }`}
                  >
                    <span>{language === 'ar' ? link.nameAr : link.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Zone: Redesigned Language Switcher & 3-Dot Action Button */}
            <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
              
              {/* Redesigned Language Changer (Tactile Dual Pill Design) */}
              <div 
                className="flex items-center p-1 rounded-full border border-[#D8D0C1] bg-[#FAF8F5] transition-all duration-200"
                role="radiogroup"
                aria-label="Language Selector"
              >
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-2.5 py-1 text-[11px] font-mono font-bold rounded-full transition-all duration-200 ${
                    language === 'en'
                      ? 'bg-[#153B32] text-white shadow-sm'
                      : 'text-[#706C64] hover:text-[#20201E]'
                  }`}
                  aria-checked={language === 'en'}
                  role="radio"
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('ar')}
                  className={`px-2.5 py-1 text-[11px] font-arabicHeading font-bold rounded-full transition-all duration-200 ${
                    language === 'ar'
                      ? 'bg-[#153B32] text-white shadow-sm'
                      : 'text-[#706C64] hover:text-[#20201E]'
                  }`}
                  aria-checked={language === 'ar'}
                  role="radio"
                >
                  عربي
                </button>
              </div>

              {/* 3-Dot Menu Trigger */}
              <div className="relative" ref={moreMenuRef}>
                <button
                  onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                  className={`flex items-center justify-center h-9 w-9 border rounded-full transition-all duration-200 ${
                    isMoreMenuOpen
                      ? 'border-[#153B32] bg-[#153B32] text-white shadow-md'
                      : 'border-[#D8D0C1] bg-[#FCFBF8] hover:bg-[#EFE9DC] text-[#20201E]'
                  }`}
                  aria-label="More archival options"
                  aria-expanded={isMoreMenuOpen}
                >
                  {isMoreMenuOpen ? (
                    <X className="h-4 w-4" />
                  ) : (
                    <MoreHorizontal className="h-4 w-4" />
                  )}
                </button>

                {/* 3-Dot Dropdown / Popover Drawer */}
                {isMoreMenuOpen && (
                  <div 
                    className={`absolute ${isRTL ? 'left-0' : 'right-0'} mt-2.5 w-72 sm:w-80 rounded-2xl bg-white/98 backdrop-blur-xl border border-[#E5E7EB] shadow-2xl p-3 text-xs z-50 animate-fadeIn`}
                  >
                    {/* Header in dropdown */}
                    <div className="flex items-center justify-between px-3 py-2 border-b border-[#F3F4F6] mb-1.5">
                      <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-antiqueGold">
                        {language === 'ar' ? 'أدوات وفهرس الأرشيف' : 'Archival Navigation & Tools'}
                      </span>
                      <span className="text-[10px] text-ink-muted">GCC v1.0</span>
                    </div>

                    {/* Mobile Navigation Links (Visible only on mobile/tablet) */}
                    <div className="lg:hidden pb-2 mb-2 border-b border-[#F3F4F6] space-y-0.5">
                      <div className="px-3 py-1 text-[10px] font-mono uppercase text-ink-muted">
                        {language === 'ar' ? 'الأقسام الرئيسية' : 'Main Sections'}
                      </div>
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsMoreMenuOpen(false)}
                          className="flex items-center justify-between px-3 py-2 rounded-xl text-ink font-semibold hover:bg-[#FAF8F5] hover:text-forest transition-colors"
                        >
                          <span>{language === 'ar' ? link.nameAr : link.name}</span>
                          <ChevronRight className="h-3 w-3 text-ink-muted" />
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
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#FAF8F5] text-ink hover:text-forest transition-colors text-left"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 rounded-lg bg-[#FAF8F5] text-forest">
                            <Search className="h-3.5 w-3.5" />
                          </div>
                          <span className="font-medium">
                            {language === 'ar' ? 'البحث في الموسوعة' : 'Search Encyclopedia'}
                          </span>
                        </div>
                        <kbd className="px-1.5 py-0.5 border border-[#E5E7EB] bg-white rounded text-[10px] font-mono text-ink-muted">
                          ⌘K
                        </kbd>
                      </button>

                      {/* Encyclopedia Index (MegaMenu) */}
                      <button
                        onClick={() => {
                          setIsMoreMenuOpen(false);
                          setIsMegaMenuOpen(true);
                        }}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#FAF8F5] text-ink hover:text-forest transition-colors text-left"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 rounded-lg bg-[#FAF8F5] text-forest">
                            <Layers className="h-3.5 w-3.5" />
                          </div>
                          <span className="font-medium">
                            {language === 'ar' ? 'فهرس الموسوعة الشامل' : 'Full Encyclopedia Index'}
                          </span>
                        </div>
                        <span className="text-[10px] text-antiqueGold font-semibold uppercase font-mono">
                          {language === 'ar' ? 'الفهرس' : 'Index'}
                        </span>
                      </button>

                      {/* Compare Tool */}
                      <Link
                        href="/compare"
                        onClick={() => setIsMoreMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#FAF8F5] text-ink hover:text-forest transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 rounded-lg bg-[#FAF8F5] text-forest">
                            <Scale className="h-3.5 w-3.5" />
                          </div>
                          <span className="font-medium">
                            {language === 'ar' ? 'مصفوفة مقارنة الدول' : 'Compare Nations Matrix'}
                          </span>
                        </div>
                        <ChevronRight className="h-3 w-3 text-ink-muted" />
                      </Link>

                      {/* Gold Rates Tool */}
                      <Link
                        href="/gold-rates"
                        onClick={() => setIsMoreMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#FAF8F5] text-ink hover:text-forest transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 rounded-lg bg-[#FAF8F5] text-forest">
                            <Coins className="h-3.5 w-3.5 text-antiqueGold" />
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
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#FAF8F5] text-ink hover:text-forest transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 rounded-lg bg-[#FAF8F5] text-forest">
                            <ArrowRightLeft className="h-3.5 w-3.5 text-forest" />
                          </div>
                          <span className="font-medium">
                            {language === 'ar' ? 'محول العملات وأسعار الصرف' : 'Live Currency Converter'}
                          </span>
                        </div>
                        <ChevronRight className="h-3 w-3 text-ink-muted" />
                      </Link>

                      {/* Articles / Archive */}
                      <Link
                        href="/articles"
                        onClick={() => setIsMoreMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#FAF8F5] text-ink hover:text-forest transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 rounded-lg bg-[#FAF8F5] text-forest">
                            <BookOpen className="h-3.5 w-3.5" />
                          </div>
                          <span className="font-medium">
                            {language === 'ar' ? 'المقالات والبحوث التوثيقية' : 'Archival Research Articles'}
                          </span>
                        </div>
                        <ChevronRight className="h-3 w-3 text-ink-muted" />
                      </Link>

                      {/* Chronological Timeline */}
                      <Link
                        href="/timeline"
                        onClick={() => setIsMoreMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#FAF8F5] text-ink hover:text-forest transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 rounded-lg bg-[#FAF8F5] text-forest">
                            <Clock className="h-3.5 w-3.5" />
                          </div>
                          <span className="font-medium">
                            {language === 'ar' ? 'الجدول الزمني للحضارات' : 'Chronological Timeline'}
                          </span>
                        </div>
                        <ChevronRight className="h-3 w-3 text-ink-muted" />
                      </Link>

                      {/* Interactive Knowledge Graph */}
                      <Link
                        href="/explore"
                        onClick={() => setIsMoreMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#FAF8F5] text-ink hover:text-forest transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 rounded-lg bg-[#FAF8F5] text-forest">
                            <Network className="h-3.5 w-3.5" />
                          </div>
                          <span className="font-medium">
                            {language === 'ar' ? 'شبكة العلاقات المعرفية' : 'Interactive Knowledge Graph'}
                          </span>
                        </div>
                        <ChevronRight className="h-3 w-3 text-ink-muted" />
                      </Link>

                      {/* Major Cities */}
                      <Link
                        href="/cities"
                        onClick={() => setIsMoreMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#FAF8F5] text-ink hover:text-forest transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 rounded-lg bg-[#FAF8F5] text-forest">
                            <Building2 className="h-3.5 w-3.5" />
                          </div>
                          <span className="font-medium">
                            {language === 'ar' ? 'المدن والحواضر التاريخية' : 'Historic & Modern Cities'}
                          </span>
                        </div>
                        <ChevronRight className="h-3 w-3 text-ink-muted" />
                      </Link>

                      {/* Random Article */}
                      <Link
                        href="/random"
                        onClick={() => setIsMoreMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#FAF8F5] text-ink hover:text-forest transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 rounded-lg bg-[#FAF8F5] text-forest">
                            <Sparkles className="h-3.5 w-3.5 text-antiqueGold" />
                          </div>
                          <span className="font-medium">
                            {language === 'ar' ? 'مقالة عشوائية من الأرشيف' : 'Random Encyclopedia Entry'}
                          </span>
                        </div>
                        <ChevronRight className="h-3 w-3 text-ink-muted" />
                      </Link>
                    </div>

                    {/* Footer in dropdown */}
                    <div className="mt-2 pt-2 border-t border-[#F3F4F6] flex items-center justify-between px-2 text-[10px] text-ink-muted">
                      <Link
                        href="/editorial-standards"
                        onClick={() => setIsMoreMenuOpen(false)}
                        className="hover:text-forest flex items-center gap-1"
                      >
                        <FileText className="h-3 w-3" />
                        <span>{language === 'ar' ? 'المعايير التحريرية' : 'Editorial Standards'}</span>
                      </Link>
                      <Link
                        href="/about"
                        onClick={() => setIsMoreMenuOpen(false)}
                        className="hover:text-forest"
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
