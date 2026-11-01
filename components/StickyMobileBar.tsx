'use client';

import React from 'react';
import { ShoppingBag, Phone, ChevronRight } from 'lucide-react';
import { RESTAURANT_INFO } from '@/data/menu';

interface StickyMobileBarProps {
  cartItemCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  onScrollToMenu: () => void;
}

export function StickyMobileBar({
  cartItemCount,
  cartTotal,
  onOpenCart,
  onScrollToMenu,
}: StickyMobileBarProps) {
  // Respect the 15% sticky height cap: compact height ~56px
  return (
    <aside 
      aria-label="Actions rapides pour mobile"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-stone-950/95 backdrop-blur-md border-t border-white/10 shadow-2xl"
    >
      <div className="max-w-md mx-auto">
        {cartItemCount > 0 ? (
          <button
            onClick={onOpenCart}
            className="w-full h-12 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-stone-950 font-bold text-sm flex items-center justify-between px-4 shadow-lg shadow-amber-500/25 active:scale-[0.98] transition-all cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-stone-950 text-amber-400 flex items-center justify-center text-xs font-black tabular-nums">
                {cartItemCount}
              </div>
              <span className="font-extrabold tracking-tight">Voir la commande</span>
            </div>

            <div className="flex items-center gap-1.5 font-black tabular-nums">
              <span>{cartTotal} MAD</span>
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </button>
        ) : (
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={onScrollToMenu}
              className="h-11 rounded-xl bg-amber-400 text-stone-950 font-bold text-xs flex items-center justify-center gap-1.5 active:scale-[0.98] transition-all cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Commander (1-50 DH)</span>
            </button>

            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="h-11 rounded-xl bg-white/10 text-white font-semibold text-xs flex items-center justify-center gap-1.5 border border-white/10 active:scale-[0.98] transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Appeler le Snack</span>
            </a>
          </div>
        )}
      </div>
    </aside>
  );
}
