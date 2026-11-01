'use client';

import React from 'react';
import { Flame, Clock, MapPin, Sparkles, ChevronRight, ChevronLeft, Phone, MessageSquare } from 'lucide-react';
import { RESTAURANT_INFO } from '@/data/menu';
import { Language, Translations } from '@/lib/i18n';

interface HeroProps {
  onScrollToMenu: () => void;
  onOpenQuickOrder: () => void;
  lang: Language;
  t: Translations;
}

export function Hero({ onScrollToMenu, onOpenQuickOrder, lang, t }: HeroProps) {
  const isRtl = lang === 'ar';

  return (
    <section id="top" className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-20 border-b border-white/5">
      {/* Background Ambient Glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-amber-500/15 via-orange-600/5 to-transparent blur-3xl opacity-70"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Unboxed Metadata Kicker (Anti-pill discipline: unboxed text with subtle separators) */}
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-amber-400 mb-4 tracking-wide">
          <span>{t.heroKickerLocation}</span>
          <span aria-hidden="true" className="text-stone-600">·</span>
          <span>{t.heroKickerType}</span>
          <span aria-hidden="true" className="text-stone-600">·</span>
          <span className="text-stone-300">{t.heroKickerPrice}</span>
        </div>

        {/* Hero Grid: Editorial Split on Desktop, Fast-action Flow on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2] text-balance">
              {t.heroTitleLead}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-orange-400">
                {t.heroTitleHighlight}
              </span>{' '}
              {t.heroTitleEnd}
            </h1>

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl">
              {t.heroDescription}
            </p>

            {/* Practical Quick Facts Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-2 text-xs sm:text-sm">
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                <div className="text-amber-400 font-semibold mb-0.5">{t.factExpressTitle}</div>
                <div className="text-stone-400">{t.factExpressDesc}</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                <div className="text-amber-400 font-semibold mb-0.5">{t.factChoicesTitle}</div>
                <div className="text-stone-400">{t.factChoicesDesc}</div>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                <div className="text-amber-400 font-semibold mb-0.5">{t.factOpenTitle}</div>
                <div className="text-stone-400">{t.factOpenDesc}</div>
              </div>
            </div>

            {/* Direct Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onScrollToMenu}
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-stone-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-lg shadow-amber-500/20 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
              >
                <span>{t.ctaExploreMenu}</span>
                {isRtl ? (
                  <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
                ) : (
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                )}
              </button>

              <button
                onClick={onOpenQuickOrder}
                className="flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-stone-200 hover:text-white bg-white/[0.07] hover:bg-white/[0.12] rounded-xl border border-white/10 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
              >
                <Clock className="w-4 h-4 text-amber-400" />
                <span>{t.ctaPreorder}</span>
              </button>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent(
                  lang === 'ar'
                    ? 'السلام عليكم سناك علي بابا أسفي، أريد تقديم طلب للاستلام السريع.'
                    : 'Salam Ali Baba, je souhaite passer une commande pour retrait à Safi.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/30 hover:bg-emerald-950/50 rounded-xl border border-emerald-500/30 active:scale-[0.98] transition-all whitespace-nowrap"
                title="Commander directement sur WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.ctaWhatsApp}</span>
              </a>
            </div>

            {/* Location context footer */}
            <div className="flex items-center gap-2 text-xs text-stone-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{t.heroLocationNote}</span>
            </div>
          </div>

          {/* Right Column: Culinary Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-stone-900 to-stone-950 border border-white/10 shadow-2xl p-6 sm:p-7">
              {/* Decorative culinary texture badge */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white">{t.heroSpecialtyBadge}</h2>
                    <p className="text-xs text-stone-400">{t.heroSpecialtySub}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xl font-extrabold text-amber-400 tabular-nums">
                    28 {lang === 'ar' ? 'درهم' : 'MAD'}
                  </span>
                  <div className="text-[11px] text-stone-400">{t.heroSpecialtyPriceNet}</div>
                </div>
              </div>

              {/* Dish Visual Preview Box */}
              <div className="my-5 relative rounded-xl h-52 sm:h-60 overflow-hidden bg-gradient-to-tr from-stone-950 via-stone-900 to-amber-950/60 border border-white/10 flex flex-col justify-end p-5">
                <div 
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(245, 158, 11, 0.4) 1px, transparent 0)',
                    backgroundSize: '16px 16px',
                  }}
                  aria-hidden="true"
                />

                <div className="relative z-10 space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-950/80 backdrop-blur-md text-amber-300 text-xs font-semibold border border-amber-500/30">
                    <Sparkles className="w-3 h-3" />
                    <span>{t.heroSpecialtyRanking}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {lang === 'ar' ? 'شاورما دجاج مميزة علي بابا' : 'Shawarma Poulet Spéciale Ali Baba'}
                  </h3>
                  <p className="text-xs text-stone-300 line-clamp-2">
                    {lang === 'ar' 
                      ? 'شرائح دجاج طازج محمرة على السيخ، بطاطس مقلية مقرمشة، ثومية، مخللات وخبز بيتا ساخن محمص.' 
                      : 'Broche dorée au feu de braise, frites fraîches, crème d’ail toum, pickles et pain pita libanais chaud pressé minute.'}
                  </p>
                </div>
              </div>

              {/* Card Footer Options Preview */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-stone-300 py-1 border-t border-white/5">
                  <span className="text-stone-400">{t.heroSaucesIncluded}</span>
                  <span className="font-medium text-stone-200">{t.heroSaucesList}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-stone-300 py-1 border-t border-white/5">
                  <span className="text-stone-400">{t.heroPortionFormat}</span>
                  <span className="font-medium text-stone-200">{t.heroPortionDesc}</span>
                </div>

                <button
                  onClick={onScrollToMenu}
                  className="w-full py-2.5 px-4 text-xs font-bold text-center text-amber-400 hover:text-stone-950 bg-amber-500/10 hover:bg-amber-400 rounded-lg border border-amber-500/30 transition-all cursor-pointer"
                >
                  {t.heroSpecialtyOrderCta}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
