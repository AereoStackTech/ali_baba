'use client';

import React from 'react';
import { Flame, Clock, MapPin, Sparkles, ChevronRight, Phone, MessageSquare } from 'lucide-react';
import { RESTAURANT_INFO } from '@/data/menu';

interface HeroProps {
  onScrollToMenu: () => void;
  onOpenQuickOrder: () => void;
}

export function Hero({ onScrollToMenu, onOpenQuickOrder }: HeroProps) {
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
          <span>Safi, Maroc</span>
          <span aria-hidden="true" className="text-stone-600">·</span>
          <span>Snack & Grillades de Quartier</span>
          <span aria-hidden="true" className="text-stone-600">·</span>
          <span className="text-stone-300">Prix Doux : 1 à 50 MAD</span>
        </div>

        {/* Hero Grid: Editorial Split on Desktop, Fast-action Flow on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] text-balance">
              L’Authentique Goût du{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-orange-400">
                Shawarma & Grillades
              </span>{' '}
              à Safi
            </h1>

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl">
              Viandes marinées chaque matin aux épices traditionnelles, broche croustillante, 
              sauces maison et générosité marocaine. À déguster sur place au Plateau ou à emporter en quelques minutes.
            </p>

            {/* Practical Quick Facts Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-2 text-xs sm:text-sm">
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                <div className="text-amber-400 font-semibold mb-0.5">Préparation Express</div>
                <div className="text-stone-400">Prêt en 10 à 15 minutes</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                <div className="text-amber-400 font-semibold mb-0.5">Large Choix</div>
                <div className="text-stone-400">Shawarma, Tacos, Plats</div>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                <div className="text-amber-400 font-semibold mb-0.5">Ouvert 7j/7</div>
                <div className="text-stone-400">11h30 – 01h00 non-stop</div>
              </div>
            </div>

            {/* Direct Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onScrollToMenu}
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-stone-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-lg shadow-amber-500/20 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Explorer le Menu Complet</span>
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={onOpenQuickOrder}
                className="flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-stone-200 hover:text-white bg-white/[0.07] hover:bg-white/[0.12] rounded-xl border border-white/10 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
              >
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Pré-commander pour Retrait</span>
              </button>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent('Salam Ali Baba, je souhaite passer une commande pour retrait à Safi.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/30 hover:bg-emerald-950/50 rounded-xl border border-emerald-500/30 active:scale-[0.98] transition-all whitespace-nowrap"
                title="Commander directement sur WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Direct</span>
              </a>
            </div>

            {/* Location context footer */}
            <div className="flex items-center gap-2 text-xs text-stone-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>Boulevard Kennedy, Quartier Plateau, Safi (en face des écoles & lycées)</span>
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
                    <h2 className="text-sm font-bold text-white">Spécialité Maison du Jour</h2>
                    <p className="text-xs text-stone-400">Recette signature Ali Baba</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xl font-extrabold text-amber-400 tabular-nums">28 MAD</span>
                  <div className="text-[11px] text-stone-400">Prix net garanti</div>
                </div>
              </div>

              {/* Dish Visual Preview Box (Resilient fallback container complying with Zero-Broken-Image Policy) */}
              <div className="my-5 relative rounded-xl h-52 sm:h-60 overflow-hidden bg-gradient-to-tr from-stone-950 via-stone-900 to-amber-950/60 border border-white/10 flex flex-col justify-end p-5">
                {/* Subtle graphic grill pattern */}
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
                    <span>N°1 des ventes à Safi</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Shawarma Poulet Spéciale Ali Baba
                  </h3>
                  <p className="text-xs text-stone-300 line-clamp-2">
                    Broche dorée au feu de braise, frites fraîches, crème d’ail toum, pickles et pain pita libanais chaud pressé minute.
                  </p>
                </div>
              </div>

              {/* Card Footer Options Preview */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-stone-300 py-1 border-t border-white/5">
                  <span className="text-stone-400">Sauces incluses :</span>
                  <span className="font-medium text-stone-200">Blanche Toum, Algérienne, Harissa</span>
                </div>
                <div className="flex items-center justify-between text-xs text-stone-300 py-1 border-t border-white/5">
                  <span className="text-stone-400">Format :</span>
                  <span className="font-medium text-stone-200">Généreux avec frites</span>
                </div>

                <button
                  onClick={onScrollToMenu}
                  className="w-full py-2.5 px-4 text-xs font-bold text-center text-amber-400 hover:text-stone-950 bg-amber-500/10 hover:bg-amber-400 rounded-lg border border-amber-500/30 transition-all cursor-pointer"
                >
                  Commander ou Personnaliser ce Plat &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
