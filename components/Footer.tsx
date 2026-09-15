'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { useLanguage } from './LanguageProvider';
import { 
  ShieldCheck, 
  BookOpen, 
  Scale, 
  Globe2, 
  Sparkles, 
  Coins, 
  ArrowRight, 
  ChevronUp,
  Landmark,
  Crown,
  History,
  Lock
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-canvas-white border-t border-border text-ink relative overflow-hidden">
      {/* Main Navigation & Directory Grid */}
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-border">
          
          {/* Brand & Sovereign Custodianship (Col 1: Span 4) */}
          <div className="lg:col-span-4 space-y-5">
            <Logo variant="footer" isLight={false} />
            <p className="font-serif text-sm text-ink-muted italic leading-relaxed pt-1">
              &ldquo;{language === 'ar' 
                ? 'موسوعة رقمية مرجعية شاملة، مكرسة لتوثيق تاريخ ودول وتراث وحضارة العالم العربي وفق أعلى معايير البحث الأكاديمي.' 
                : 'A living, authoritative digital encyclopedia and historical repository dedicated exclusively to documenting the nations, dynasties, cultures, and civilizational legacy of the Arab world.'}&rdquo;
            </p>

            {/* Sovereign Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs font-mono">
              <div className="flex items-center gap-2 p-2.5 bg-canvas-paper border border-border rounded-xl hover:border-antiqueGold/60 transition-colors shadow-editorial">
                <ShieldCheck className="h-4 w-4 text-antiqueGold shrink-0" />
                <span className="text-[11px] text-ink font-medium leading-tight">Peer-Reviewed Level A/B</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-canvas-paper border border-border rounded-xl hover:border-antiqueGold/60 transition-colors shadow-editorial">
                <BookOpen className="h-4 w-4 text-antiqueGold shrink-0" />
                <span className="text-[11px] text-ink font-medium leading-tight">22 Sovereign Nations</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-canvas-paper border border-border rounded-xl hover:border-antiqueGold/60 transition-colors shadow-editorial">
                <Coins className="h-4 w-4 text-antiqueGold shrink-0" />
                <span className="text-[11px] text-ink font-medium leading-tight">Live Spot Bullion Data</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-canvas-paper border border-border rounded-xl hover:border-antiqueGold/60 transition-colors shadow-editorial">
                <Globe2 className="h-4 w-4 text-antiqueGold shrink-0" />
                <span className="text-[11px] text-ink font-medium leading-tight">DIN 31635 Standard</span>
              </div>
            </div>
          </div>

          {/* Col 2: Encyclopedia Chapters (Span 3) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-antiqueGold border-b border-border/80 pb-2 flex items-center gap-2">
              <Landmark className="w-3.5 h-3.5 text-antiqueGold" />
              {language === 'ar' ? 'أبواب الموسوعة' : 'Encyclopedia'}
            </h4>
            <ul className="space-y-2 text-xs text-ink-muted font-sans">
              <li>
                <Link href="/countries" className="hover:text-forest transition-colors flex items-center justify-between group py-0.5">
                  <span>{language === 'ar' ? 'الدول والسيادات العربية (22)' : 'Sovereign Nations (22)'}</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-antiqueGold" />
                </Link>
              </li>
              <li>
                <Link href="/gcc" className="hover:text-forest transition-colors flex items-center justify-between group py-0.5">
                  <span>{language === 'ar' ? 'مجلس التعاون لدول الخليج العربية' : 'GCC Cooperation Council'}</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-antiqueGold" />
                </Link>
              </li>
              <li>
                <Link href="/royalty" className="hover:text-forest transition-colors flex items-center justify-between group py-0.5">
                  <span>{language === 'ar' ? 'الأسر الحاكمة والسلالات الملكية' : 'Houses of Royalty & Dynasties'}</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-antiqueGold" />
                </Link>
              </li>
              <li>
                <Link href="/history" className="hover:text-forest transition-colors flex items-center justify-between group py-0.5">
                  <span>{language === 'ar' ? 'العصور والحضارات التاريخية' : 'Historical Eras & Antiquity'}</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-antiqueGold" />
                </Link>
              </li>
              <li>
                <Link href="/cities" className="hover:text-forest transition-colors flex items-center justify-between group py-0.5">
                  <span>{language === 'ar' ? 'الحواضر والمدن التاريخية' : 'Metropolitan & Historic Cities'}</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-antiqueGold" />
                </Link>
              </li>
              <li>
                <Link href="/landmarks" className="hover:text-forest transition-colors flex items-center justify-between group py-0.5">
                  <span>{language === 'ar' ? 'المعالم والصروح المعمارية' : 'Monumental Landmarks'}</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-antiqueGold" />
                </Link>
              </li>
              <li>
                <Link href="/culture" className="hover:text-forest transition-colors flex items-center justify-between group py-0.5">
                  <span>{language === 'ar' ? 'الثقافة، الخط والعمارة' : 'Culture, Calligraphy & Architecture'}</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-antiqueGold" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Intelligence & Markets (Span 3) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-antiqueGold border-b border-border/80 pb-2 flex items-center gap-2">
              <Coins className="w-3.5 h-3.5 text-antiqueGold" />
              {language === 'ar' ? 'المنصات المالية والتحليلية' : 'Market & Research Suites'}
            </h4>
            <ul className="space-y-2 text-xs text-ink-muted font-sans">
              <li>
                <Link href="/gold-rates" className="hover:text-forest transition-colors flex items-center justify-between group font-semibold text-ink py-0.5">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {language === 'ar' ? 'أسعار الذهب المباشرة (Live)' : 'Live Physical Gold Rates'}
                  </span>
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.2 bg-antiqueGold/15 rounded border border-antiqueGold/40 text-antiqueGold font-bold">
                    Live
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/currency-converter" className="hover:text-forest transition-colors flex items-center justify-between group font-semibold text-ink py-0.5">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {language === 'ar' ? 'محول العملات العربية (22)' : 'Arab Currency Converter'}
                  </span>
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.2 bg-antiqueGold/15 rounded border border-antiqueGold/40 text-antiqueGold font-bold">
                    22 FX
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-forest transition-colors flex items-center justify-between group py-0.5">
                  <span className="flex items-center gap-1.5">
                    <Scale className="h-3 w-3 text-antiqueGold" />
                    {language === 'ar' ? 'مصفوفة مقارنة الدول' : 'Compare Nations Matrix'}
                  </span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-antiqueGold" />
                </Link>
              </li>
              <li>
                <Link href="/explore" className="hover:text-forest transition-colors flex items-center justify-between group py-0.5">
                  <span className="flex items-center gap-1.5">
                    <Globe2 className="h-3 w-3 text-antiqueGold" />
                    {language === 'ar' ? 'مستكشف الرسم البياني المعرفي' : 'Knowledge Graph Visualizer'}
                  </span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-antiqueGold" />
                </Link>
              </li>
              <li>
                <Link href="/royalty/explorer" className="hover:text-forest transition-colors flex items-center justify-between group py-0.5">
                  <span className="flex items-center gap-1.5">
                    <Crown className="h-3 w-3 text-antiqueGold" />
                    {language === 'ar' ? 'مستكشف شجرة السلالات الملكية' : 'Royalty Map & Lineage'}
                  </span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-antiqueGold" />
                </Link>
              </li>
              <li>
                <Link href="/timeline" className="hover:text-forest transition-colors flex items-center justify-between group py-0.5">
                  <span className="flex items-center gap-1.5">
                    <History className="h-3 w-3 text-antiqueGold" />
                    {language === 'ar' ? 'الجدول الزمني التفاعلي' : 'Chronological Timeline'}
                  </span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-antiqueGold" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Governance & Ethics (Span 2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-antiqueGold border-b border-border/80 pb-2 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-antiqueGold" />
              {language === 'ar' ? 'الحوكمة والتوثيق' : 'Governance'}
            </h4>
            <ul className="space-y-2 text-xs text-ink-muted font-sans">
              <li>
                <Link href="/sources" className="hover:text-forest transition-colors block py-0.5">
                  {language === 'ar' ? 'المصادر والمراجع الأكاديمية' : 'Sources & Bibliography'}
                </Link>
              </li>
              <li>
                <Link href="/editorial-standards" className="hover:text-forest transition-colors block py-0.5">
                  {language === 'ar' ? 'المعايير التحريرية والتعريب' : 'Editorial Standards'}
                </Link>
              </li>
              <li>
                <Link href="/corrections" className="hover:text-forest transition-colors block py-0.5">
                  {language === 'ar' ? 'التدقيق ومراجعة الأقران' : 'Peer Review Council'}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-forest transition-colors block py-0.5">
                  {language === 'ar' ? 'الميثاق المؤسسي' : 'Institutional Charter'}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-forest transition-colors block py-0.5">
                  {language === 'ar' ? 'الاتصال والمكتب الأرشيفي' : 'Archival Liaison'}
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-forest transition-colors flex items-center gap-1.5 font-semibold text-forest py-0.5">
                  <Lock className="w-3 h-3 text-antiqueGold" />
                  <span>{language === 'ar' ? 'بوابة التحرير' : 'Editorial CMS'}</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Arabian Calligraphic & Cultural Inscription Ribbon */}
        <div className="py-6 border-b border-border flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3 text-antiqueGold">
            <div className="h-px w-8 bg-antiqueGold/30 hidden sm:block" />
            <span className="font-arabic text-base sm:text-lg text-forest font-semibold tracking-wide">
              « تاريخٌ يُروى، وحضارةٌ تُخلّد، ومستقبلٌ يُبنى على أصالة الماضي »
            </span>
            <div className="h-px w-8 bg-antiqueGold/30 hidden sm:block" />
          </div>
          
          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-2 px-4 py-2 bg-canvas-paper hover:bg-forest text-ink hover:text-canvas-white border border-border hover:border-forest rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
          >
            <span>{language === 'ar' ? 'إلى أعلى الصفحة' : 'Back to Top'}</span>
            <ChevronUp className="w-3.5 h-3.5 text-antiqueGold group-hover:text-canvas-white" />
          </button>
        </div>

        {/* Bottom Legal, ISO Archival & Copyright Bar */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-muted">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-center lg:text-left">
            <span>© {new Date().getFullYear()} GCC Encyclopedia · {language === 'ar' ? 'العالم العربي، موثقاً.' : 'The Arab World, Documented.'}</span>
            <span className="hidden sm:inline text-border-dark">•</span>
            <span className="text-[11px] text-antiqueGold font-medium">ISO 15489 Archival Compliant</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px]">
            <Link href="/about" className="hover:text-forest transition-colors">
              {language === 'ar' ? 'عن المؤسسة' : 'Institutional Archive'}
            </Link>
            <Link href="/sources" className="hover:text-forest transition-colors">
              {language === 'ar' ? 'المصادر والتوثيق' : 'Bibliography & Citations'}
            </Link>
            <Link href="/editorial-standards" className="hover:text-forest transition-colors">
              {language === 'ar' ? 'معايير النقل الصوتي DIN' : 'DIN 31635 Standard'}
            </Link>
            <Link href="/contact" className="hover:text-forest transition-colors">
              {language === 'ar' ? 'التواصل الأكاديمي' : 'Academic Inquiries'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};


