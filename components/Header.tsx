'use client';

import React from 'react';
import { Flame, ShoppingBag, Phone, Globe } from 'lucide-react';
import { RESTAURANT_INFO } from '@/data/menu';
import { Language, Translations } from '@/lib/i18n';

interface HeaderProps {
  cartItemCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  lang: Language;
  onToggleLanguage: () => void;
  t: Translations;
}

export function Header({
  cartItemCount,
  cartTotal,
  onOpenCart,
  lang,
  onToggleLanguage,
  t,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#0c0d10]/95 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Brand Wordmark (1-line, no secondary pill lockups) */}
        <a 
          href="#top" 
          className="flex items-center gap-2.5 text-stone-100 font-bold tracking-tight text-lg sm:text-xl whitespace-nowrap shrink-0 group"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-stone-950 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <Flame className="w-5 h-5 fill-current" />
          </div>
          <span className="font-extrabold tracking-tight">
            {t.brandName} <span className="text-amber-500 font-normal">{t.brandTagline}</span>
          </span>
        </a>

        {/* Zone 2: 4-5 single-line clean navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-300">
          <a href="#specialties" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            {t.navSpecialties}
          </a>
          <a href="#menu" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            {t.navMenu}
          </a>
          <a href="#story" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            {t.navStory}
          </a>
          <a href="#location" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            {t.navLocation}
          </a>
        </nav>

        {/* Zone 3: Language Toggle, Phone & Primary Action */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Language Switcher */}
          <button
            onClick={onToggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs font-bold text-stone-200 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
            title={lang === 'fr' ? 'التبديل إلى اللغة العربية' : 'Passer au Français'}
            aria-label="Changer de langue / تبديل اللغة"
          >
            <Globe className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="font-bold">{lang === 'fr' ? 'عربي' : 'FR'}</span>
          </button>

          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-stone-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all whitespace-nowrap"
            title="Appeler le snack à Safi"
          >
            <Phone className="w-3.5 h-3.5 text-amber-500" />
            <span className="tabular-nums">{t.callUs}</span>
          </a>

          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-stone-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:brightness-110 active:scale-[0.98] rounded-lg transition-all shadow-md shadow-amber-500/20 whitespace-nowrap shrink-0 cursor-pointer"
            aria-label={t.cartButton}
          >
            <ShoppingBag className="w-4 h-4 stroke-[2.2]" />
            <span className="hidden xs:inline">{t.cartButton}</span>
            <span className="xs:hidden">{t.cartShort}</span>
            {cartItemCount > 0 && (
              <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-bold bg-stone-950 text-amber-400 tabular-nums">
                {cartItemCount}
              </span>
            )}
            {cartTotal > 0 && (
              <span className="hidden sm:inline text-xs font-bold text-stone-900 border-l border-stone-950/20 pl-2 tabular-nums">
                {cartTotal} {lang === 'ar' ? 'درهم' : 'MAD'}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
