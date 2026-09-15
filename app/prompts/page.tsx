'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { videoPromptsCatalog, photoPromptsCatalog, NEGATIVE_PROMPT } from '@/lib/videoPrompts';
import { Copy, Check, Video, Camera, ArrowLeft } from 'lucide-react';

export default function PromptsGuidePage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="min-h-screen bg-canvas py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 pb-6 border-b border-border">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-ink-muted hover:text-ink transition-colors mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Encyclopedia
          </Link>

          <h1 className="font-serif text-3xl sm:text-5xl text-ink font-bold tracking-tight mb-3">
            Documentary Video & Photography Prompts
          </h1>
          <p className="text-ink-muted max-w-3xl text-sm sm:text-base leading-relaxed">
            Exact prompts formatted for Runway Gen-3, Luma Dream Machine, Sora, Kling, and Midjourney v6. 
            All videos should be dropped in the corresponding <code className="px-1.5 py-0.5 bg-canvas-paper border border-border text-xs font-mono">/public/videos/</code> directory.
          </p>
        </div>

        {/* Negative Prompt Master Box */}
        <div className="p-6 bg-canvas-white border-2 border-antiqueGold rounded-2xl mb-12 shadow-editorial">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono font-bold tracking-widest text-antiqueGold uppercase">
              Mandatory Master Negative Prompt (Apply to all generations)
            </span>
            <button
              onClick={() => copyToClipboard(NEGATIVE_PROMPT, 'neg-prompt')}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-canvas-paper hover:bg-border text-xs font-mono font-bold text-ink transition-colors border border-border rounded-full"
            >
              {copiedId === 'neg-prompt' ? <Check className="w-3.5 h-3.5 text-forest" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedId === 'neg-prompt' ? 'Copied' : 'Copy Negative Prompt'}</span>
            </button>
          </div>
          <p className="text-xs text-ink-muted font-mono leading-relaxed bg-canvas-paper/60 p-4 border border-border rounded-xl">
            {NEGATIVE_PROMPT}
          </p>
        </div>

        {/* Video Prompts Section */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Video className="w-5 h-5 text-antiqueGold" />
            <h2 className="font-serif text-2xl font-bold text-ink">
              Cinematic Documentary Video Prompts (16:9 / 4K)
            </h2>
          </div>

          <div className="space-y-6">
            {videoPromptsCatalog.map((item) => (
              <div 
                key={item.id}
                className="p-6 bg-canvas-white border border-border hover:border-antiqueGold rounded-2xl transition-colors shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3 pb-3 border-b border-border/60">
                  <div>
                    <span className="text-[11px] font-mono text-antiqueGold tracking-wider uppercase block">
                      {item.section}
                    </span>
                    <h3 className="font-serif font-bold text-lg text-ink">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 bg-canvas-paper text-ink-muted font-mono text-xs border border-border rounded-full">
                      {item.aspectRatio}
                    </span>
                    <span className="px-2.5 py-0.5 bg-forest/10 text-forest font-mono text-xs font-bold border border-forest/20 rounded-full">
                      {item.recommendedFileSlot}
                    </span>
                  </div>
                </div>

                <div className="relative mb-3">
                  <p className="text-xs text-ink font-sans leading-relaxed bg-canvas-paper/40 p-4 border border-border font-normal rounded-xl">
                    {item.prompt}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-ink-muted font-sans italic">
                    {item.notes}
                  </span>
                  <button
                    onClick={() => copyToClipboard(item.prompt, item.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-forest text-canvas-white hover:bg-forest-light transition-colors font-mono text-xs font-semibold rounded-full shadow-sm"
                  >
                    {copiedId === item.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === item.id ? 'Copied to Clipboard' : 'Copy Prompt'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photography Prompts Section */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Camera className="w-5 h-5 text-antiqueGold" />
            <h2 className="font-serif text-2xl font-bold text-ink">
              Editorial Photography Prompts (4:5 / 3:4)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {photoPromptsCatalog.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 bg-canvas-white border border-border hover:border-antiqueGold rounded-2xl transition-colors flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif font-bold text-base text-ink">
                      {item.category}
                    </h3>
                    <span className="px-2.5 py-0.5 bg-canvas-paper text-ink-muted font-mono text-[11px] border border-border rounded-full">
                      {item.aspectRatio}
                    </span>
                  </div>
                  <p className="text-xs text-ink-muted font-sans leading-relaxed mb-4 bg-canvas-paper/30 p-3.5 border border-border/80 rounded-xl">
                    {item.prompt}
                  </p>
                </div>

                <button
                  onClick={() => copyToClipboard(item.prompt, `photo-${idx}`)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 bg-canvas-paper hover:bg-border text-ink transition-colors font-mono text-xs font-semibold border border-border rounded-full"
                >
                  {copiedId === `photo-${idx}` ? <Check className="w-3.5 h-3.5 text-forest" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === `photo-${idx}` ? 'Copied' : 'Copy Image Prompt'}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
