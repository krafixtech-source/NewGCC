'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { VideoPlayer } from '../VideoPlayer';
import { useLanguage } from '../LanguageProvider';

export const LandOfStoriesSection: React.FC = () => {
  const { language } = useLanguage();
  const [activeChapter, setActiveChapter] = useState<'land' | 'people' | 'legacy'>('land');

  const chapters = [
    {
      id: 'land',
      number: '01',
      title: 'Land',
      titleAr: 'الأرض والتضاريس',
      description: 'The dramatic geography of the Arabian Peninsula and wider Arab world — from sacred mountains to vast deserts and turquoise coastlines.',
      videoSrc: '/videos/land.mp4',
      alternateSrc: '/videos/Create_a_slow_observational_do (1) (online-video-cutter.com).mp4',
      posterImage: '/images/alula.jpg',
      caption: 'Dramatic sandstone topography and ancient desert routes across Saudi Arabia, Jordan, and Oman.',
      promptId: 'land-video',
    },
    {
      id: 'people',
      number: '02',
      title: 'People',
      titleAr: 'الإنسان والتراث',
      description: 'Everyday cultural heritage and living memory — master calligraphers, textile artisans, coffee rituals, and historic craftsmanship.',
      videoSrc: '/videos/people.mp4',
      alternateSrc: '/videos/3rd.mp4',
      posterImage: '/images/craftsmanship.jpg',
      caption: 'Living artisanal lineages of calligraphy, metalworking, and traditional Majlis hospitality.',
      promptId: 'people-video',
    },
    {
      id: 'legacy',
      number: '03',
      title: 'Legacy',
      titleAr: 'الإرث والوثائق',
      description: 'Centuries of preserved architecture, archaeological citadels, illuminated manuscripts, and treaty archives.',
      videoSrc: '/videos/legacy.mp4',
      alternateSrc: '/videos/Create_a_museum_quality_docume.mp4',
      posterImage: '/images/riyadh.jpg',
      caption: 'Preserved state treaties, ancient fortified citadels, and imperial architectural landmarks.',
      promptId: 'legacy-video',
    },
  ];

  const current = chapters.find((c) => c.id === activeChapter) || chapters[0];

  return (
    <section className="bg-canvas-white py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="mx-auto max-w-archival">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          {/* Left 35%: Editorial Heading & Description */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink tracking-tight leading-[1.05]">
                {language === 'ar' ? (
                  <>أَرْضُ<br />الحِكَايَات</>
                ) : (
                  <>A LAND OF<br />STORIES</>
                )}
              </h2>
            </div>

            <p className="text-sm text-ink-muted leading-relaxed font-sans">
              {language === 'ar'
                ? 'ثلاثة فصول بصرية وثائقية تستكشف التضاريس الجغرافية، والتراث الإنساني الحي، والوثائق التاريخية المحفوظة.'
                : 'An observational documentary series capturing the geography, intangible human heritage, and monumental legacy of the Arab world.'}
            </p>

            {/* Current Chapter Description Panel */}
            <div className="p-6 bg-canvas-paper border border-border rounded-2xl space-y-3 shadow-sm">
              <span className="text-[11px] font-mono text-antiqueGold uppercase tracking-wider font-bold block">
                Chapter {current.number} · {current.title}
              </span>
              <p className="text-xs text-ink leading-relaxed font-sans">
                {current.description}
              </p>

              <div className="pt-2 border-t border-border/70 flex items-center justify-between text-[11px] font-mono text-ink-muted">
                <span>File: {current.videoSrc}</span>
                <Link href="/prompts" className="text-antiqueGold hover:underline">
                  View Prompt ↗
                </Link>
              </div>
            </div>
          </div>

          {/* Right 65%: Large Cinematic Video & Chapter Selectors */}
          <div className="lg:col-span-8 space-y-6">
            {/* Cinematic Video Component */}
            <VideoPlayer
              key={current.id}
              src={current.videoSrc}
              alternateSrc={current.alternateSrc}
              posterImage={current.posterImage}
              aspectRatio="16/9"
              caption={current.caption}
              editorialLabel={`A Land of Stories — ${current.number}`}
              autoPlayInView={true}
              loop={true}
              showControls={true}
            />

            {/* Chapter Selection Tabs */}
            <div className="grid grid-cols-3 gap-4 border-t border-border pt-4">
              {chapters.map((ch) => {
                const isActive = ch.id === activeChapter;
                return (
                  <button
                    key={ch.id}
                    onClick={() => setActiveChapter(ch.id as any)}
                    className={`text-left rtl:text-right p-4 border rounded-xl transition-all shadow-sm ${
                      isActive
                        ? 'bg-canvas-paper border-antiqueGold ring-1 ring-antiqueGold/40'
                        : 'bg-canvas-white border-border hover:bg-canvas-paper/60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-xs font-bold text-antiqueGold">
                        {ch.number}
                      </span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-forest" />
                      )}
                    </div>
                    <div className="font-serif font-bold text-base text-ink">
                      {language === 'ar' ? ch.titleAr : ch.title}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
