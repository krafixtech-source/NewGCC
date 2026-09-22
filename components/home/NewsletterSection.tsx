'use client';

import React, { useState } from 'react';
import { Mail, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../LanguageProvider';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { language } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().length > 0) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="bg-forest text-white py-24 px-4 sm:px-6 lg:px-8 border-b border-forest-dark">
      <div className="mx-auto max-w-archival">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
            {language === 'ar' ? 'النشرة الأرشيفية الدورية' : 'The Archival Dispatch'}
          </h2>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl mx-auto font-sans">
            {language === 'ar'
              ? 'تلقَّ رسائل شهرية تتضمن دراسات تاريخية محكمة، واكتشافات أثرية حديثة، وتحديثات شجرة الأنساب الملكية.'
              : 'Monthly scholarly dispatches covering newly transcribed manuscripts, archaeological excavations, and historical monographs.'}
          </p>

          {isSubmitted ? (
            <div className="inline-flex items-center gap-2 p-4 bg-forest-dark border border-antiqueGold text-xs font-mono font-semibold text-antiqueGold rounded-2xl shadow-md">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>You have been subscribed to the GCC Archival Dispatch.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="fellow@university.edu"
                className="flex-1 bg-forest-dark border border-white/20 px-5 py-3.5 text-xs text-white placeholder-white/50 focus:outline-none focus:border-antiqueGold font-mono rounded-full shadow-inner"
              />
              <button
                type="submit"
                className="px-7 py-3.5 bg-antiqueGold text-forest hover:bg-white transition-all text-xs font-mono uppercase tracking-wider font-bold shrink-0 rounded-full shadow-md hover:shadow-lg"
              >
                {language === 'ar' ? 'اشتراك' : 'Subscribe'}
              </button>
            </form>
          )}

          <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-white/60 pt-2">
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-antiqueGold" /> No promotional advertising
            </span>
            <span>•</span>
            <span>Strict academic ethics</span>
            <span>•</span>
            <span>Unsubscribe at any time</span>
          </div>
        </div>
      </div>
    </section>
  );
};
