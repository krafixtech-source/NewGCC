'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, Globe, Crown, User, Building, MapPin, BookOpen, Clock, Sparkles } from 'lucide-react';
import { searchEncyclopedia, SearchResultItem } from '@/lib/data';
import { useLanguage } from './LanguageProvider';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (query.trim().length > 0) {
      const allResults = searchEncyclopedia(query);
      if (selectedCategory === 'All') {
        setResults(allResults);
      } else {
        setResults(allResults.filter(r => r.category === selectedCategory));
      }
    } else {
      setResults([]);
    }
  }, [query, selectedCategory]);

  const handleSelect = (url: string) => {
    router.push(url);
    onClose();
  };

  if (!isOpen) return null;

  const categories = ['All', 'Country', 'Royalty', 'Leader', 'City', 'Landmark', 'Era', 'Article'];

  const quickPicks = [
    { label: 'Saudi Arabia', query: 'Saudi' },
    { label: 'House of Saud', query: 'House of Saud' },
    { label: 'AlUla & Hegra', query: 'AlUla' },
    { label: 'Abbasid Caliphate', query: 'Abbasid' },
    { label: 'Sheikh Zayed', query: 'Zayed' },
    { label: 'Petra', query: 'Petra' },
    { label: 'Doha', query: 'Doha' },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Country': return <Globe className="h-4 w-4 text-gold" />;
      case 'Royalty': return <Crown className="h-4 w-4 text-gold-light" />;
      case 'Leader':
      case 'Person': return <User className="h-4 w-4 text-emerald-light" />;
      case 'City': return <Building className="h-4 w-4 text-sand" />;
      case 'Landmark': return <MapPin className="h-4 w-4 text-gold" />;
      case 'Era': return <Clock className="h-4 w-4 text-stone-light" />;
      case 'Article': return <BookOpen className="h-4 w-4 text-ivory" />;
      default: return <Sparkles className="h-4 w-4 text-gold" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 bg-black/50 backdrop-blur-md px-4 transition-all animate-fadeIn">
      <div 
        className="w-full max-w-3xl rounded-3xl border border-border bg-white shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Bar Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-border bg-[#F9FAFB]">
          <Search className="h-5 w-5 text-antiqueGold shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full bg-transparent text-base sm:text-lg text-ink placeholder-ink-muted/50 focus:outline-none font-sans"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-ink-muted hover:text-ink transition-colors p-1 rounded-full"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="rounded-full border border-border px-3 py-1 text-xs text-ink-muted hover:border-antiqueGold hover:text-forest transition-colors font-mono"
          >
            ESC
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 px-5 py-2.5 bg-white border-b border-border overflow-x-auto text-xs scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1 rounded-full whitespace-nowrap transition-all font-mono text-xs ${
                selectedCategory === cat
                  ? 'bg-forest text-white font-semibold shadow-sm'
                  : 'text-ink-muted hover:text-ink hover:bg-[#F3F4F6]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results / Suggestions Container */}
        <div className="overflow-y-auto p-4 flex-1 divide-y divide-border/60 bg-white">
          {query.trim().length === 0 ? (
            <div className="py-8 text-center">
              <p className="text-sm text-ink-muted mb-4">{t.searchPrompt}</p>
              <div className="flex flex-wrap justify-center gap-2 max-w-lg mx-auto">
                <span className="text-xs text-antiqueGold flex items-center gap-1 mr-2 font-mono font-semibold">
                  <Sparkles className="h-3 w-3" /> Quick Archive Search:
                </span>
                {quickPicks.map(p => (
                  <button
                    key={p.label}
                    onClick={() => setQuery(p.query)}
                    className="text-xs bg-[#F9FAFB] border border-border hover:border-antiqueGold text-ink px-3.5 py-1 rounded-full transition-colors font-sans shadow-sm"
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            results.map(item => (
              <div
                key={item.id}
                onClick={() => handleSelect(item.url)}
                className="group flex items-start gap-4 p-3 hover:bg-[#F9FAFB] rounded-2xl cursor-pointer transition-all"
              >
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-xl bg-[#F3F4F6] border border-border shrink-0 group-hover:border-antiqueGold">
                  {getCategoryIcon(item.category)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-base font-bold text-ink group-hover:text-forest transition-colors">
                      {item.title}
                    </span>
                    {item.arabicTitle && (
                      <span className="font-arabic text-xs text-antiqueGold font-medium">
                        {item.arabicTitle}
                      </span>
                    )}
                    <span className="ml-auto text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-border bg-[#F3F4F6] text-ink-muted font-mono font-semibold">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-ink-muted line-clamp-1 mt-0.5 font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="py-12 text-center text-ink-muted">
              <p className="text-base font-serif italic text-ink">{t.noResults}</p>
              <p className="text-xs mt-1 text-ink-muted">Try exploring countries, royal houses, or historical eras.</p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-5 py-2.5 bg-[#F9FAFB] border-t border-border text-[11px] font-mono text-ink-muted flex items-center justify-between">
          <span>GCC Archival Intelligence Index</span>
          <span className="flex items-center gap-2">
            <span>Navigate: <kbd className="px-2 py-0.5 bg-white border border-border rounded-full font-mono text-[10px]">↑</kbd> <kbd className="px-2 py-0.5 bg-white border border-border rounded-full font-mono text-[10px]">↓</kbd></span>
            <span>Select: <kbd className="px-2 py-0.5 bg-white border border-border rounded-full font-mono text-[10px]">↵</kbd></span>
          </span>
        </div>
      </div>
    </div>
  );
};
