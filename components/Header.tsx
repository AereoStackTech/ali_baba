'use client';

import React from 'react';
import { Flame, ShoppingBag, Phone, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '@/data/menu';

interface HeaderProps {
  cartItemCount: number;
  cartTotal: number;
  onOpenCart: () => void;
}

export function Header({ cartItemCount, cartTotal, onOpenCart }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#0c0d10]/95 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (1-line, no secondary pill lockups) */}
        <a 
          href="#top" 
          className="flex items-center gap-2.5 text-stone-100 font-bold tracking-tight text-lg sm:text-xl whitespace-nowrap shrink-0 group"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-stone-950 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <Flame className="w-5 h-5 fill-current" />
          </div>
          <span className="font-extrabold tracking-tight">
            Ali Baba <span className="text-amber-500 font-normal">Grill & Shawarma</span>
          </span>
        </a>

        {/* Zone 2: 4-5 single-line clean navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-300">
          <a href="#specialties" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Spécialités
          </a>
          <a href="#menu" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Menu (1–50 MAD)
          </a>
          <a href="#story" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Notre Histoire
          </a>
          <a href="#location" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Accès & Horaires
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-stone-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all whitespace-nowrap"
            title="Appeler le snack à Safi"
          >
            <Phone className="w-3.5 h-3.5 text-amber-500" />
            <span className="tabular-nums">05 24 62 18 90</span>
          </a>

          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2.5 px-4 py-2 text-xs sm:text-sm font-semibold text-stone-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:brightness-110 active:scale-[0.98] rounded-lg transition-all shadow-md shadow-amber-500/20 whitespace-nowrap shrink-0 cursor-pointer"
            aria-label="Voir le panier de commande"
          >
            <ShoppingBag className="w-4 h-4 stroke-[2.2]" />
            <span className="hidden xs:inline">Commande / Retrait</span>
            <span className="xs:hidden">Panier</span>
            {cartItemCount > 0 && (
              <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-bold bg-stone-950 text-amber-400 tabular-nums">
                {cartItemCount}
              </span>
            )}
            {cartTotal > 0 && (
              <span className="hidden sm:inline text-xs font-bold text-stone-900 border-l border-stone-950/20 pl-2 tabular-nums">
                {cartTotal} MAD
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
