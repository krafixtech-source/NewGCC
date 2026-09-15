'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { searchEncyclopedia, SearchResultItem } from '@/lib/data';
import { useLanguage } from '@/components/LanguageProvider';

const categories = [
  'All',
  'Country',
  'Royalty',
  'Leader',
  'Person',
  'City',
  'Landmark',
  'Era',
  'Article',
  'Culture',
] as const;

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get('q') || '';
  const initialCat = searchParams.get('category') || 'All';

  const [query, setQuery] = useState(initialQuery);
  const [selectedCat, setSelectedCat] = useState<string>(initialCat);
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const { language, isRTL } = useLanguage();

  useEffect(() => {
    if (query.trim().length > 0) {
      const res = searchEncyclopedia(query);
      setResults(res);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    const params = new URLSearchParams(window.location.search);
    if (val) {
      params.set('q', val);
    } else {
      params.delete('q');
    }
    router.replace(`/search?${params.toString()}`);
  };

  const filteredResults = selectedCat === 'All' 
    ? results 
    : results.filter(r => r.category === selectedCat);

  const suggestedQueries = [
    'Kingdom of Saudi Arabia',
    'House of Saud',
    'Al Nahyan',
    'Petra',
    'Abbasid Caliphate',
    'Gahwa',
    'AlUla',
    'Sultan Haitham',
    'Sheikh Zayed',
    'Dubai',
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-antique-gold-700 font-semibold mb-2 block">
            {language === 'ar' ? 'البحث الشامل في الأرشيف' : 'Global Archival Search'}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-emerald-950 font-bold tracking-tight mb-4">
            {language === 'ar' ? 'ابحث في موسوعة العالم العربي' : 'Search the Arab World Encyclopedia'}
          </h1>
          <p className="text-stone-600 max-w-2xl mx-auto font-sans text-sm sm:text-base">
            {language === 'ar' 
              ? 'ابحث عبر 22 دولة، 8 بيوت ملكية، مئات الحكام، المدن التاريخية، المعالم الأثرية، والدراسات الموثقة.'
              : 'Explore across 22 sovereign nations, 8 royal houses, historical leaders, ancient landmarks, and peer-reviewed scholarly essays.'}
          </p>
        </div>

        {/* Search Bar Input */}
        <div className="relative max-w-3xl mx-auto mb-8">
          <div className="relative flex items-center">
            <svg 
              className={`absolute ${isRTL ? 'right-4' : 'left-4'} w-6 h-6 text-stone-400 pointer-events-none`}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={handleSearchChange}
              placeholder={language === 'ar' ? 'ابحث عن دولة، حاكم، معلَم، أو موضوع تراثي...' : 'Search for nations, rulers, dynasties, landmarks, culture...'}
              className={`w-full py-4 ${isRTL ? 'pr-14 pl-14' : 'pl-14 pr-14'} rounded-full border-2 border-stone-200 bg-white text-emerald-950 text-lg shadow-sm focus:outline-none focus:border-antique-gold-500 focus:ring-2 focus:ring-antique-gold-200 transition-all`}
              autoFocus
            />
            {query && (
              <button
                onClick={() => {
                  setQuery('');
                  router.replace('/search');
                }}
                className={`absolute ${isRTL ? 'left-5' : 'right-5'} text-stone-400 hover:text-stone-600`}
                title="Clear search"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Quick Suggestions */}
          {!query && (
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
              <span className="text-stone-500 font-medium">
                {language === 'ar' ? 'مقترحات شائعة:' : 'Popular searches:'}
              </span>
              {suggestedQueries.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setQuery(item);
                    router.replace(`/search?q=${encodeURIComponent(item)}`);
                  }}
                  className="px-3.5 py-1.5 bg-white border border-stone-200 rounded-full text-emerald-900 hover:bg-emerald-900 hover:text-white transition-colors shadow-sm font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Category Filter Pills */}
        {query && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 border-b border-stone-200 pb-4">
            {categories.map((cat) => {
              const count = cat === 'All' 
                ? results.length 
                : results.filter(r => r.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedCat === cat
                      ? 'bg-emerald-900 text-antique-gold-300 shadow-sm'
                      : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {cat === 'All' 
                    ? (language === 'ar' ? `الكل (${count})` : `All (${count})`)
                    : `${cat} (${count})`}
                </button>
              );
            })}
          </div>
        )}

        {/* Results Section */}
        {query ? (
          <div>
            <div className="mb-6 flex items-center justify-between text-xs text-stone-500">
              <span>
                {language === 'ar' 
                  ? `تم العثور على ${filteredResults.length} نتيجة بحث` 
                  : `Found ${filteredResults.length} archival matches`}
              </span>
            </div>

            {filteredResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResults.map((item) => (
                  <Link
                    key={item.id}
                    href={item.url}
                    className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:border-antique-gold-400 hover:shadow-xl transition-all flex flex-col justify-between"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-sand-100 text-emerald-900">
                          {item.category}
                        </span>
                        {item.arabicTitle && (
                          <span className="text-xs font-arabic text-stone-400">
                            {item.arabicTitle}
                          </span>
                        )}
                      </div>

                      <h3 className="font-serif text-lg font-bold text-emerald-950 group-hover:text-antique-gold-700 transition-colors mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="px-6 py-3 bg-sand-50/60 border-t border-stone-100 flex items-center justify-between text-xs text-antique-gold-700 font-medium">
                      <span>{language === 'ar' ? 'عرض الوثيقة' : 'View Record'}</span>
                      <span className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8 shadow-sm">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sand-100 flex items-center justify-center text-stone-400 text-2xl">
                  📜
                </div>
                <h3 className="font-serif text-xl font-bold text-emerald-950 mb-2">
                  {language === 'ar' ? 'لم يتم العثور على سجلات مطابقة' : 'No Archival Records Found'}
                </h3>
                <p className="text-sm text-stone-500 max-w-md mx-auto mb-6">
                  {language === 'ar'
                    ? 'يرجى تجربة كلمات بحث أخرى أو التأكد من سلامة الاسم المدخل.'
                    : 'Try checking your spelling or searching with broader keywords such as dynasty names or country titles.'}
                </p>
                <button
                  onClick={() => {
                    setQuery('');
                    router.replace('/search');
                  }}
                  className="px-5 py-2.5 bg-emerald-900 text-antique-gold-300 text-xs uppercase tracking-wider rounded-full font-semibold hover:bg-emerald-800 transition-colors shadow-sm"
                >
                  {language === 'ar' ? 'مسح البحث' : 'Clear Search'}
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Empty State / Browse Categories Showcase */
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { title: '22 Sovereign Nations', titleAr: '٢٢ دولة ذات سيادة', href: '/countries', icon: '🏛️' },
              { title: '8 Royal Dynasties', titleAr: '٨ أسر حاكمة', href: '/royalty', icon: '👑' },
              { title: 'Historical Eras', titleAr: 'العصور التاريخية', href: '/history', icon: '⏳' },
              { title: 'Monumental Landmarks', titleAr: 'المعالم الخالدة', href: '/landmarks', icon: '🕌' },
              { title: 'Major Cities', titleAr: 'المدن والحواضر', href: '/cities', icon: '🌆' },
              { title: 'Cultural Encyclopedia', titleAr: 'موسوعة الثقافة', href: '/culture', icon: '📜' },
              { title: 'Compare Nations Matrix', titleAr: 'مصفوفة المقارنة', href: '/compare', icon: '⚖️' },
              { title: 'Knowledge Graph Explorer', titleAr: 'مخطط المعرفة', href: '/explore', icon: '🌐' },
            ].map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="p-5 bg-white border border-stone-200 rounded-2xl hover:border-antique-gold-400 hover:shadow-lg transition-all text-center group shadow-sm"
              >
                <div className="text-2xl mb-2">{cat.icon}</div>
                <h4 className="font-serif font-bold text-sm text-emerald-950 group-hover:text-antique-gold-700 transition-colors">
                  {language === 'ar' ? cat.titleAr : cat.title}
                </h4>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white py-24 text-center">Loading Encyclopedia Search...</div>}>
      <SearchContent />
    </Suspense>
  );
}
