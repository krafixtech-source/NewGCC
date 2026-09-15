'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  MapPin,
  Building2,
  Calendar,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../LanguageProvider';

interface LandmarkStory {
  id: string;
  name: string;
  arabicName: string;
  country: string;
  period: string;
  civilization: string;
  slug: string;
  context: string;
  imageUrl: string;
  caption: string;
  architectureStyle: string;
  significance: string;
}

const landmarkStories: LandmarkStory[] = [
  {
    id: 'alula',
    name: 'AlUla & Hegra (Madain Salih)',
    arabicName: 'العلا والحِجْر (مدائن صالح)',
    country: 'Saudi Arabia',
    period: '1st Century BCE — 1st Century CE',
    civilization: 'Nabataean Kingdom & Dadanite',
    slug: 'alula-hegra',
    context: 'Monumental sandstone rock-cut facades preserving the southern capital of the Nabataean incense kingdom and Saudi Arabia’s first UNESCO World Heritage Site.',
    imageUrl: '/images/alula.jpg',
    caption: 'Qasr al-Farid sandstone tomb rising monolithically from the AlUla desert valley.',
    architectureStyle: 'Nabataean Rock-Cut Monumental Architecture',
    significance: 'One of the most monumental archaeological preserves on the planet, representing 200,000 years of human heritage.'
  },
  {
    id: 'petra',
    name: 'Petra (The Rose City)',
    arabicName: 'البتراء (المدينة الوردية)',
    country: 'Jordan',
    period: '4th Century BCE — 106 CE',
    civilization: 'Nabataean Kingdom',
    slug: 'petra',
    context: 'The monumental cliff-carved capital city entered through the narrow Siq canyon, engineered with sophisticated hydraulic water conduits.',
    imageUrl: '/images/hero.jpg',
    caption: 'Al-Khazneh (The Treasury) glowing in soft morning sandstone illumination.',
    architectureStyle: 'Hellenistic-Nabataean Rock-Cut Architecture',
    significance: 'An unrivaled testament to ancient Arab engineering, hydraulic mastery, and rock architecture.'
  },
  {
    id: 'diriyah',
    name: 'At-Turaif District in Diriyah',
    arabicName: 'حي الطريف بالدرعية التاريخية',
    country: 'Saudi Arabia',
    period: '1744 CE — 1818 CE',
    civilization: 'First Saudi State (Najdi Architecture)',
    slug: 'diriyah-at-turaif',
    context: 'The fortified mudbrick citadel of Najd that served as the original seat of power of the House of Saud and cradle of Saudi statehood.',
    imageUrl: '/images/craftsmanship.jpg',
    caption: 'UNESCO World Heritage Najdi earthen defensive walls and royal palaces.',
    architectureStyle: 'Najdi Earthen & Mud-Brick Citadel Architecture',
    significance: 'The cradle of modern Saudi governance and authentic Najdi architectural heritage.'
  },
  {
    id: 'muscat',
    name: 'Sultan Qaboos Grand Mosque & Mutrah',
    arabicName: 'جامع السلطان قابوس الأكبر ومطرح',
    country: 'Oman',
    period: '2001 CE / Historic Maritime Era',
    civilization: 'Omani Maritime Architecture',
    slug: 'sultan-qaboos-grand-mosque',
    context: 'Masterpiece of contemporary Islamic architectural engineering blending Omani, Persian, and Moorish craftsmanship with 300,000 tonnes of Indian sandstone.',
    imageUrl: '/images/riyadh.jpg',
    caption: 'Handcrafted crystal chandeliers, hand-woven carpet, and white Omani marble colonnades.',
    architectureStyle: 'Contemporary Omani Islamic Architecture',
    significance: 'Emblematic of Omani restrained elegance, peaceful contemplation, and fine stone carving.'
  },
  {
    id: 'cairo',
    name: 'Historic Cairo & Citadel of Saladin',
    arabicName: 'القاهرة التاريخية وقلعة صلاح الدين',
    country: 'Egypt',
    period: '969 CE — 1805 CE',
    civilization: 'Fatimid, Ayyubid & Mamluk Eras',
    slug: 'historic-cairo',
    context: 'One of the oldest Islamic cities in the world, renowned for its fortified gates, soaring minarets, and medieval madrasas along Al-Muizz Street.',
    imageUrl: '/images/hero.jpg',
    caption: 'Medieval minarets and stone-domed mausoleums overlooking the Nile valley.',
    architectureStyle: 'Mamluk & Ayyubid Stone Masonry',
    significance: 'The intellectual, theological, and architectural beacon of the medieval Islamic world.'
  },
  {
    id: 'fez',
    name: 'Fes el-Bali Medina & Al-Qarawiyyin',
    arabicName: 'فاس البالي وجامعة القرويين',
    country: 'Morocco',
    period: '789 CE — Present',
    civilization: 'Idrisid & Marinid Dynasties',
    slug: 'fes-el-bali',
    context: 'The world\'s oldest continually operating university and pristine car-free medieval walled medina with 9,000 historic alleys.',
    imageUrl: '/images/craftsmanship.jpg',
    caption: 'Carved cedarwood courtyard archways and hand-cut Zellij mosaic tiles.',
    architectureStyle: 'Moorish & Andalusian-Islamic Architecture',
    significance: 'Pristine living medieval architectural preserve and cradle of Islamic higher education.'
  }
];

export const LandmarkStoriesSection: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const DURATION = 3500; // 3.5 seconds per slide

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % landmarkStories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + landmarkStories.length) % landmarkStories.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Continuous auto slide effect (never pauses on hover)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % landmarkStories.length);
    }, DURATION);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const active = landmarkStories[currentIndex];

  return (
    <section 
      className="relative w-full min-h-[100dvh] h-[100dvh] bg-black overflow-hidden flex flex-col justify-between border-b border-border"
      aria-label="Landmark Stories Full Screen Showcase"
    >
      {/* 100% Full-Screen Background Landmark Image (Pure natural image, no dark gradient) */}
      <div className="absolute inset-0 z-0">
        <img
          key={active.id}
          src={active.imageUrl}
          alt={active.name}
          className="w-full h-full object-cover object-center transform scale-100 transition-all duration-1000 ease-out"
        />
      </div>

      {/* Top Location Selector Pills Row */}
      <div className="relative z-20 pt-10 sm:pt-14 px-4 sm:px-6 lg:px-12 mx-auto max-w-archival w-full">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {landmarkStories.map((lm, idx) => {
            const isCurrent = idx === currentIndex;
            return (
              <button
                key={lm.id}
                onClick={() => goToSlide(idx)}
                className={`px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all whitespace-nowrap rounded-full cursor-pointer backdrop-blur-md ${
                  isCurrent
                    ? 'bg-antiqueGold text-forest font-bold shadow-lg ring-2 ring-antiqueGold/40 scale-105'
                    : 'bg-black/45 text-white/80 hover:text-white hover:bg-black/65 border border-white/20'
                }`}
              >
                {lm.name.split(' (')[0]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Editorial Content Overlay (Floating directly on full-screen image) */}
      <div className="relative z-20 mx-auto max-w-archival w-full px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        <div className="max-w-3xl space-y-5 lg:space-y-6">
          
          {/* Badge: Country & Civilization */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs font-mono text-[#E5C98E] shadow-xl">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-bold uppercase tracking-wider">{active.country}</span>
            </div>
            <span className="px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-xs font-mono border border-white/15">
              {active.civilization}
            </span>
          </div>

          {/* Grand Headline & Arabic Title */}
          <div className="space-y-2">
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] [text-shadow:_0_3px_20px_rgba(0,0,0,0.9)]">
              {active.name}
            </h2>
            
            {active.arabicName && (
              <div className="font-arabicHeading text-2xl sm:text-3xl lg:text-4xl text-[#E5C98E] font-bold drop-shadow-md">
                {active.arabicName}
              </div>
            )}
          </div>

          {/* Architectural Context Synopsis */}
          <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed font-sans max-w-2xl [text-shadow:_0_2px_12px_rgba(0,0,0,0.9)]">
            {active.context}
          </p>

          {/* Metadata Specs Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl pt-1">
            <div className="p-3.5 rounded-xl bg-black/50 backdrop-blur-md border border-white/15">
              <span className="block text-[#E5C98E] uppercase text-[10px] font-mono font-bold mb-0.5">
                {language === 'ar' ? 'الحقبة التاريخية' : 'Historical Era'}
              </span>
              <span className="font-bold text-white font-sans text-xs sm:text-sm">
                {active.period}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-black/50 backdrop-blur-md border border-white/15">
              <span className="block text-[#E5C98E] uppercase text-[10px] font-mono font-bold mb-0.5">
                {language === 'ar' ? 'الطراز المعماري' : 'Architectural Style'}
              </span>
              <span className="font-bold text-white font-sans text-xs sm:text-sm">
                {active.architectureStyle}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href={`/landmarks/${active.slug}`}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-antiqueGold hover:bg-[#c9aa6d] text-forest font-mono text-xs uppercase tracking-wider font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
            >
              <span>{language === 'ar' ? 'استعراض سجل المعلم' : 'Explore Landmark Monograph'}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>

            <Link
              href="/landmarks"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-white/15 hover:bg-white/25 text-white font-mono text-xs uppercase tracking-wider font-semibold rounded-full border border-white/25 hover:border-white/50 backdrop-blur-md transition-all duration-300 shadow-lg"
            >
              <Building2 className="w-4 h-4 text-[#E5C98E]" />
              <span>{language === 'ar' ? 'كافة المعالم' : 'All Landmarks Index'}</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Floating Edge Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-black/50 hover:bg-antiqueGold text-white hover:text-forest border border-white/25 hover:border-antiqueGold shadow-2xl hover:scale-105 backdrop-blur-md transition-all duration-200 cursor-pointer"
        aria-label="Previous Landmark"
      >
        <ChevronLeft className="w-6 h-6 rtl:rotate-180" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-black/50 hover:bg-antiqueGold text-white hover:text-forest border border-white/25 hover:border-antiqueGold shadow-2xl hover:scale-105 backdrop-blur-md transition-all duration-200 cursor-pointer"
        aria-label="Next Landmark"
      >
        <ChevronRight className="w-6 h-6 rtl:rotate-180" />
      </button>

      {/* Bottom Pagination Dots */}
      <div className="relative z-20 pb-6 flex items-center justify-center gap-2" role="tablist" aria-label="Landmark Slides">
        {landmarkStories.map((lm, idx) => {
          const isActive = currentIndex === idx;
          return (
            <button
              key={lm.id}
              onClick={() => goToSlide(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                isActive
                  ? 'w-8 h-2 bg-antiqueGold shadow-lg ring-1 ring-antiqueGold/50'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${idx + 1}: ${lm.name}`}
              aria-selected={isActive}
              role="tab"
            />
          );
        })}
      </div>
    </section>
  );
};
