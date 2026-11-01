'use client';

import React from 'react';
import { Flame, Heart, ShieldCheck } from 'lucide-react';
import { Translations } from '@/lib/i18n';

interface SafiStorySectionProps {
  t: Translations;
}

export function SafiStorySection({ t }: SafiStorySectionProps) {
  return (
    <section id="story" className="py-14 sm:py-20 border-b border-white/5 bg-[#0a0b0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Column: Brand Story */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wide">
              <span>{t.storyBadge}</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span>Safi, Maroc</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight text-balance">
              {t.storyTitle}
            </h2>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
              {t.storyP1}
            </p>

            <p className="text-sm sm:text-base text-stone-400 leading-relaxed">
              {t.storyP2}
            </p>

            {/* Quality Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-stone-900 border border-white/5 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Flame className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white">{t.storyPillar1Title}</h3>
                <p className="text-xs text-stone-400">
                  {t.storyPillar1Desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-900 border border-white/5 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white">{t.storyPillar2Title}</h3>
                <p className="text-xs text-stone-400">
                  {t.storyPillar2Desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-900 border border-white/5 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Heart className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white">{t.storyPillar3Title}</h3>
                <p className="text-xs text-stone-400">
                  {t.storyPillar3Desc}
                </p>
              </div>
            </div>
          </div>

          {/* Secondary Column: Safi Local Context Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-br from-stone-900 via-stone-950 to-amber-950/40 border border-white/10 p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {t.storyLocationBadge}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {t.storyLocationTitle}
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {t.storyLocationDesc}
                </p>
              </div>

              {/* Local Key Metrics */}
              <div className="space-y-3 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-400">{t.metricOpenLabel}</span>
                  <span className="font-bold text-stone-200">{t.metricOpenVal}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-400">{t.metricCapacityLabel}</span>
                  <span className="font-bold text-stone-200">{t.metricCapacityVal}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-400">{t.metricAvgTimeLabel}</span>
                  <span className="font-bold text-amber-400 tabular-nums">{t.metricAvgTimeVal}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-400">{t.metricPriceRangeLabel}</span>
                  <span className="font-bold text-amber-400 tabular-nums">{t.metricPriceRangeVal}</span>
                </div>
              </div>

              {/* Customer Quote */}
              <blockquote className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-stone-300 italic">
                {t.storyQuote}
                <span className="block mt-2 font-semibold not-italic text-amber-400">
                  {t.storyQuoteAuthor}
                </span>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
