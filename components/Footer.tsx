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
    <footer className="bg-canvas-white border-t border-border/80 text-ink relative overflow-hidden">
      {/* Main Navigation & Directory Grid */}
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8 pt-12 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand & Sovereign Overview (Col 1: Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="footer" isLight={false} />
            <p className="font-serif text-xs sm:text-sm text-ink-muted italic leading-relaxed pt-1 max-w-md">
              &ldquo;{language === 'ar' 
                ? 'موسوعة رقمية مرجعية شاملة، مكرسة لتوثيق تاريخ ودول وتراث وحضارة العالم العربي وفق أعلى معايير البحث الأكاديمي.' 
                : 'A living, authoritative digital encyclopedia and historical repository dedicated exclusively to documenting the nations, dynasties, cultures, and civilizational legacy of the Arab world.'}&rdquo;
            </p>
          </div>

          {/* Col 2: Encyclopedia Chapters (Span 3) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-antiqueGold border-b border-border/60 pb-2 flex items-center gap-2">
              <Landmark className="w-3.5 h-3.5 text-antiqueGold" />
              {language === 'ar' ? 'أبواب الموسوعة' : 'Encyclopedia'}
            </h4>
            <ul className="space-y-2 text-xs text-ink-muted font-sans">
              <li>
                <Link href="/countries" className="hover:text-forest transition-colors flex items-center justify-between group py-0.5">
                  <span>{language === 'ar' ? 'الدول والسيادات العربية' : 'Sovereign Nations'}</span>
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

          {/* Col 3: Research & Analytics (Span 3) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-antiqueGold border-b border-border/60 pb-2 flex items-center gap-2">
              <Globe2 className="w-3.5 h-3.5 text-antiqueGold" />
              {language === 'ar' ? 'الأدوات والتحليل' : 'Research Suites'}
            </h4>
            <ul className="space-y-2 text-xs text-ink-muted font-sans">
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
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-antiqueGold border-b border-border/60 pb-2 flex items-center gap-2">
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
      </div>
    </footer>
  );
};


