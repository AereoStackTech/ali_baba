'use client';

import React from 'react';
import { MenuItem } from '@/types/restaurant';
import { Plus, Flame, Sparkles, Utensils, Crown, Layers } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
  onSelect: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
}

export function MenuCard({ item, onSelect, onQuickAdd }: MenuCardProps) {
  const getIcon = () => {
    switch (item.iconName) {
      case 'Flame': return <Flame className="w-4 h-4 text-amber-400" />;
      case 'Crown': return <Crown className="w-4 h-4 text-amber-400" />;
      case 'Layers': return <Layers className="w-4 h-4 text-amber-400" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-amber-400" />;
      default: return <Utensils className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <article className="group flex flex-col justify-between p-5 rounded-2xl bg-stone-900/70 hover:bg-stone-900/90 border border-white/[0.08] hover:border-amber-500/40 transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-amber-950/20">
      <div>
        {/* Visual Graphic Header Container (Resilient fallback container with subtle gradients) */}
        <div className={`relative w-full h-36 rounded-xl overflow-hidden mb-4 bg-gradient-to-br ${item.imagePlaceholderColor || 'from-amber-600/30 to-stone-950'} border border-white/5 flex flex-col justify-between p-3.5`}>
          {/* Subtle grill mesh overlay */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.2) 1px, transparent 0)',
              backgroundSize: '12px 12px',
            }}
          />

          {/* Top row: Icon & quiet editorial tag */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="w-8 h-8 rounded-lg bg-stone-950/70 backdrop-blur-md flex items-center justify-center border border-white/10">
              {getIcon()}
            </div>
            {item.isSpecialty ? (
              <span className="text-[11px] font-semibold text-amber-300 bg-stone-950/80 backdrop-blur-md px-2 py-0.5 rounded border border-amber-500/30">
                Spécialité Safi
              </span>
            ) : item.isPopular ? (
              <span className="text-[11px] font-semibold text-stone-200 bg-stone-950/80 backdrop-blur-md px-2 py-0.5 rounded border border-white/20">
                Populaire
              </span>
            ) : null}
          </div>

          {/* Bottom row: Arabic dish name */}
          <div className="relative z-10 text-right">
            {item.nameAr && (
              <span className="text-xs font-medium text-stone-200/90 drop-shadow-sm font-sans" dir="rtl">
                {item.nameAr}
              </span>
            )}
          </div>
        </div>

        {/* Primary Title (Cards lead directly with primary title, no pill badge sandwich) */}
        <div className="space-y-1.5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
              {item.name}
            </h3>
            <span className="text-lg font-extrabold text-amber-400 tabular-nums shrink-0 whitespace-nowrap">
              {item.price} <span className="text-xs font-semibold text-amber-500/80">MAD</span>
            </span>
          </div>

          <p className="text-xs sm:text-sm text-stone-400 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Ingredients Unboxed Text with Separators */}
        <div className="mt-3 flex flex-wrap items-center gap-1.5 text-[11px] text-stone-400">
          {item.ingredients.slice(0, 3).map((ingredient, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <span aria-hidden="true" className="text-stone-700">·</span>}
              <span>{ingredient}</span>
            </React.Fragment>
          ))}
          {item.ingredients.length > 3 && (
            <span className="text-stone-500">+{item.ingredients.length - 3}</span>
          )}
        </div>
      </div>

      {/* Action Row */}
      <div className="mt-5 pt-3.5 border-t border-white/5 flex items-center gap-2">
        <button
          onClick={() => onSelect(item)}
          className="flex-1 py-2 px-3 text-xs font-semibold text-stone-200 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors text-center cursor-pointer"
        >
          Personnaliser
        </button>

        <button
          onClick={() => onQuickAdd(item)}
          className="p-2 sm:px-3 sm:py-2 text-xs font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer shrink-0"
          title={`Ajouter ${item.name} au panier`}
          aria-label={`Ajouter ${item.name} au panier`}
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
          <span className="hidden sm:inline">Ajouter</span>
        </button>
      </div>
    </article>
  );
}
