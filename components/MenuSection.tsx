'use client';

import React, { useState, useMemo } from 'react';
import { MENU_ITEMS } from '@/data/menu';
import { MenuCategory, MenuItem } from '@/types/restaurant';
import { MenuCard } from './MenuCard';
import { Search, SlidersHorizontal, Flame, Sparkles, UtensilsCrossed } from 'lucide-react';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
}

const CATEGORIES: { id: MenuCategory; label: string; labelAr: string; count: number }[] = [
  { id: 'all', label: 'Toute la Carte', labelAr: 'الكل', count: MENU_ITEMS.length },
  { id: 'shawarma', label: 'Signature Shawarma', labelAr: 'شاورما', count: MENU_ITEMS.filter((i) => i.category === 'shawarma').length },
  { id: 'sandwiches', label: 'Sandwiches & Tacos', labelAr: 'سندويتشات وطاكوس', count: MENU_ITEMS.filter((i) => i.category === 'sandwiches').length },
  { id: 'platters', label: 'Plats & Grillades', labelAr: 'أطباق ومشاوي', count: MENU_ITEMS.filter((i) => i.category === 'platters').length },
  { id: 'sides', label: 'Sides & Salades', labelAr: 'مقبلات وسلطات', count: MENU_ITEMS.filter((i) => i.category === 'sides').length },
  { id: 'beverages', label: 'Boissons & Jus Frais', labelAr: 'مشروبات وعصائر', count: MENU_ITEMS.filter((i) => i.category === 'beverages').length },
];

export function MenuSection({ onSelectItem, onQuickAdd }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlySpecialties, setOnlySpecialties] = useState(false);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Specialty filter
      if (onlySpecialties && !item.isSpecialty && !item.isPopular) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesAr = item.nameAr?.includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesIngredients = item.ingredients.some((ing) => ing.toLowerCase().includes(query));
        return matchesName || matchesAr || matchesDesc || matchesIngredients;
      }
      return true;
    });
  }, [activeCategory, onlySpecialties, searchQuery]);

  return (
    <section id="menu" className="py-12 sm:py-16 border-b border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1 tracking-wide">
              <span>La Carte Gourmande</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span>1 à 50 MAD</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span>Préparé Minute</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Menu & Spécialités d’Ali Baba
            </h2>
            <p className="text-sm text-stone-400 mt-1 max-w-xl">
              Choisissez vos plats préférés, personnalisez les sauces et suppléments, et commandez pour retrait rapide au snack.
            </p>
          </div>

          {/* Search Input Bar */}
          <div className="w-full md:w-72 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher shawarma, kefta, jus..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-stone-900 border border-white/10 text-xs sm:text-sm text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-stone-400 hover:text-white"
              >
                Effacer
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs Bar (Horizontal scrolling on mobile) */}
        <div className="relative mb-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-amber-400 text-stone-950 shadow-md shadow-amber-500/20 font-bold'
                      : 'bg-stone-900/80 text-stone-300 hover:text-white hover:bg-stone-800 border border-white/5'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[11px] tabular-nums px-1.5 py-0.2 rounded-md ${
                      isActive ? 'bg-stone-950/20 text-stone-950 font-bold' : 'bg-white/5 text-stone-400'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}

            {/* Quick Filter: Incontournables Only */}
            <button
              onClick={() => setOnlySpecialties(!onlySpecialties)}
              className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer ml-auto ${
                onlySpecialties
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'bg-stone-900/60 text-stone-400 hover:text-stone-200 border border-white/5'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Coups de Cœur</span>
            </button>
          </div>
        </div>

        {/* Results Counter and Filter feedback */}
        <div className="flex items-center justify-between text-xs text-stone-400 mb-6 px-1">
          <span>
            Affichage de <strong className="text-stone-200 tabular-nums">{filteredItems.length}</strong> plats disponibles
          </span>
          {searchQuery && (
            <span>
              Résultats pour « <span className="text-amber-400">{searchQuery}</span> »
            </span>
          )}
        </div>

        {/* Food Items Grid (1-col mobile, 2-col tablet, 3-col desktop) */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredItems.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
                onSelect={onSelectItem}
                onQuickAdd={onQuickAdd}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center rounded-2xl bg-stone-900/50 border border-white/5 p-8 max-w-md mx-auto">
            <UtensilsCrossed className="w-10 h-10 text-stone-500 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white mb-1">Aucun plat trouvé</h3>
            <p className="text-xs text-stone-400 mb-4">
              Aucun élément ne correspond à votre recherche « {searchQuery} ».
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setOnlySpecialties(false);
              }}
              className="px-4 py-2 text-xs font-semibold text-stone-950 bg-amber-400 rounded-lg hover:bg-amber-300 transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
