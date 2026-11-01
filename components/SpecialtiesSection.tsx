'use client';

import React from 'react';
import { MenuItem } from '@/types/restaurant';
import { MENU_ITEMS } from '@/data/menu';
import { Flame, Star, Plus, ArrowRight, ShieldCheck, Clock, Heart } from 'lucide-react';

interface SpecialtiesSectionProps {
  onSelectItem: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
}

export function SpecialtiesSection({ onSelectItem, onQuickAdd }: SpecialtiesSectionProps) {
  // Curate the 4 top flagship dishes
  const signatureItems = MENU_ITEMS.filter((i) => 
    ['sh-01', 'sh-04', 'sw-01', 'pl-01'].includes(i.id)
  );

  return (
    <section id="specialties" className="py-12 sm:py-16 bg-stone-950/60 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold border border-amber-500/20 mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span>Fierté Culinaire de Safi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight text-balance">
            Les Incontournables de notre Broche & Grill
          </h2>
          <p className="text-sm text-stone-300 mt-2">
            Des recettes éprouvées, préparées à la commande selon la tradition marocaine des snacks gourmands.
          </p>
        </div>

        {/* 4 Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {signatureItems.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between p-5 rounded-2xl bg-stone-900 border border-white/10 hover:border-amber-500/50 transition-all shadow-md hover:shadow-xl hover:shadow-amber-950/30"
            >
              <div>
                {/* Visual Preview Box */}
                <div className={`relative h-40 rounded-xl overflow-hidden mb-4 bg-gradient-to-br ${item.imagePlaceholderColor} border border-white/10 p-4 flex flex-col justify-between`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-amber-300 bg-stone-950/80 backdrop-blur-md px-2 py-0.5 rounded border border-amber-500/30">
                      Signature
                    </span>
                    <span className="text-lg font-black text-amber-400 tabular-nums bg-stone-950/80 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                      {item.price} <span className="text-xs">MAD</span>
                    </span>
                  </div>

                  <div>
                    {item.nameAr && (
                      <p className="text-xs text-stone-200/90 font-medium text-right mb-1" dir="rtl">
                        {item.nameAr}
                      </p>
                    )}
                    <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                      {item.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-stone-300 leading-relaxed line-clamp-3 mb-3">
                  {item.description}
                </p>

                <div className="flex items-center gap-2 text-[11px] text-stone-400">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  <span>Prêt en {item.preparationTime || '10 min'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-2">
                <button
                  onClick={() => onSelectItem(item)}
                  className="flex-1 py-2 px-3 text-xs font-semibold text-stone-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors text-center cursor-pointer"
                >
                  Personnaliser
                </button>
                <button
                  onClick={() => onQuickAdd(item)}
                  className="p-2 text-xs font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center cursor-pointer shrink-0"
                  title="Ajout rapide"
                  aria-label="Ajouter au panier"
                >
                  <Plus className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
