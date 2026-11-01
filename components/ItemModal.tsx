'use client';

import React, { useState } from 'react';
import { MenuItem, CustomizationOption } from '@/types/restaurant';
import { 
  BREAD_OPTIONS_DETAILED, 
  SAUCE_OPTIONS_DETAILED, 
  EXTRA_OPTIONS_DETAILED 
} from '@/data/menu';
import { X, Plus, Minus, Check } from 'lucide-react';
import { Language, Translations } from '@/lib/i18n';

interface ItemModalProps {
  item: MenuItem;
  onClose: () => void;
  onAddToCart: (item: MenuItem, customization: CustomizationOption, quantity: number) => void;
  lang: Language;
  t: Translations;
}

export function ItemModal({ item, onClose, onAddToCart, lang, t }: ItemModalProps) {
  const isSandwichOrShawarma = item.category === 'shawarma' || item.category === 'sandwiches';

  const defaultBreadChoice = lang === 'ar' 
    ? BREAD_OPTIONS_DETAILED[0].nameAr 
    : BREAD_OPTIONS_DETAILED[0].nameFr;

  const [selectedBread, setSelectedBread] = useState<string>(
    isSandwichOrShawarma ? defaultBreadChoice : ''
  );
  
  const [selectedSauces, setSelectedSauces] = useState<string[]>([
    lang === 'ar' ? SAUCE_OPTIONS_DETAILED[2].nameAr : SAUCE_OPTIONS_DETAILED[2].nameFr, // Toum
    lang === 'ar' ? SAUCE_OPTIONS_DETAILED[0].nameAr : SAUCE_OPTIONS_DETAILED[0].nameFr, // Algerienne
  ]);
  
  const [selectedExtras, setSelectedExtras] = useState<{ name: string; price: number }[]>([]);
  const [instructions, setInstructions] = useState('');
  const [quantity, setQuantity] = useState(1);

  const toggleSauce = (sauceName: string) => {
    if (selectedSauces.includes(sauceName)) {
      setSelectedSauces(selectedSauces.filter((s) => s !== sauceName));
    } else {
      if (selectedSauces.length < 3) {
        setSelectedSauces([...selectedSauces, sauceName]);
      }
    }
  };

  const toggleExtra = (extra: { name: string; price: number }) => {
    const exists = selectedExtras.some((e) => e.name === extra.name);
    if (exists) {
      setSelectedExtras(selectedExtras.filter((e) => e.name !== extra.name));
    } else {
      setSelectedExtras([...selectedExtras, extra]);
    }
  };

  const extrasTotal = selectedExtras.reduce((sum, extra) => sum + extra.price, 0);
  const unitPrice = item.price + extrasTotal;
  const totalPrice = unitPrice * quantity;

  const displayName = lang === 'ar' ? (item.nameAr || item.name) : item.name;
  const displayDesc = lang === 'ar' ? (item.descriptionAr || item.description) : item.description;

  const handleConfirm = () => {
    onAddToCart(
      item,
      {
        bread: selectedBread,
        sauces: selectedSauces,
        extras: selectedExtras,
        instructions: instructions.trim() || undefined,
      },
      quantity
    );
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-stone-900 border border-white/10 shadow-2xl p-6 text-stone-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-stone-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer rtl:right-auto rtl:left-4"
          aria-label="Fermer la modalité"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-8 space-y-1 pb-4 border-b border-white/10 rtl:pr-0 rtl:pl-8">
          <div className="flex items-center gap-2 text-xs font-medium text-amber-400">
            <span>{t.modalCustomization}</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span>{item.price} {lang === 'ar' ? 'درهم' : 'MAD'}</span>
          </div>
          <h2 className="text-xl font-bold text-white leading-tight">{displayName}</h2>
          <p className="text-xs text-stone-300 pt-1">{displayDesc}</p>
        </div>

        {/* Form Options Body */}
        <div className="py-4 space-y-5 text-sm">
          {/* Bread Choice (if applicable) */}
          {isSandwichOrShawarma && (
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-300">
                {t.stepBread} <span className="text-amber-400">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {BREAD_OPTIONS_DETAILED.map((bread) => {
                  const breadLabel = lang === 'ar' ? bread.nameAr : bread.nameFr;
                  const isChecked = selectedBread === breadLabel;
                  return (
                    <button
                      key={bread.id}
                      type="button"
                      onClick={() => setSelectedBread(breadLabel)}
                      className={`flex items-center justify-between p-3 rounded-xl border text-xs font-semibold text-left rtl:text-right transition-all cursor-pointer ${
                        isChecked
                          ? 'border-amber-500 bg-amber-500/10 text-amber-300'
                          : 'border-white/10 bg-white/[0.02] text-stone-300 hover:border-white/20'
                      }`}
                    >
                      <span>{breadLabel}</span>
                      {isChecked && <Check className="w-4 h-4 text-amber-400 shrink-0 ml-1 rtl:ml-0 rtl:mr-1" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Sauces Selection */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-300">
                {t.stepSauces}
              </label>
              <span className="text-[11px] text-stone-400 tabular-nums">
                {selectedSauces.length}/3 {t.saucesSelected}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {SAUCE_OPTIONS_DETAILED.map((sauce) => {
                const sauceLabel = lang === 'ar' ? sauce.nameAr : sauce.nameFr;
                const isChecked = selectedSauces.includes(sauceLabel);
                return (
                  <button
                    key={sauce.id}
                    type="button"
                    onClick={() => toggleSauce(sauceLabel)}
                    className={`flex items-center justify-between p-2.5 rounded-lg border text-xs transition-all cursor-pointer ${
                      isChecked
                        ? 'border-amber-500 bg-amber-500/10 text-amber-300 font-semibold'
                        : 'border-white/10 bg-white/[0.02] text-stone-300 hover:border-white/20'
                    }`}
                  >
                    <span className="truncate">{sauceLabel}</span>
                    {isChecked && <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 ml-1 rtl:ml-0 rtl:mr-1" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Optional Extras */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-300">
              {t.stepExtras}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {EXTRA_OPTIONS_DETAILED.map((extra) => {
                const extraLabel = lang === 'ar' ? extra.nameAr : extra.nameFr;
                const isSelected = selectedExtras.some((e) => e.name === extraLabel);
                return (
                  <button
                    key={extra.id}
                    type="button"
                    onClick={() => toggleExtra({ name: extraLabel, price: extra.price })}
                    className={`flex items-center justify-between p-2.5 rounded-lg border text-xs transition-all cursor-pointer ${
                      isSelected
                        ? 'border-amber-500 bg-amber-500/10 text-amber-300 font-semibold'
                        : 'border-white/10 bg-white/[0.02] text-stone-300 hover:border-white/20'
                    }`}
                  >
                    <span className="truncate">{extraLabel}</span>
                    <span className="tabular-nums font-bold text-amber-400 shrink-0 ml-1.5 rtl:ml-0 rtl:mr-1.5">
                      +{extra.price} {lang === 'ar' ? 'درهم' : 'MAD'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Custom Kitchen Notes */}
          <div className="space-y-1.5">
            <label htmlFor="notes" className="block text-xs font-bold uppercase tracking-wider text-stone-300">
              {t.stepInstructions}
            </label>
            <input
              id="notes"
              type="text"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder={t.instructionsPlaceholder}
              className="w-full px-3.5 py-2.5 rounded-lg bg-stone-950/70 border border-white/10 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>
        </div>

        {/* Modal Footer with Stepper & Confirm */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
          {/* Stepper */}
          <div className="flex items-center gap-2 bg-stone-950 p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-stone-400 hover:text-white bg-white/5 transition-colors cursor-pointer"
              aria-label="Diminuer la quantité"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-8 text-center font-bold text-sm tabular-nums text-white">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-stone-400 hover:text-white bg-white/5 transition-colors cursor-pointer"
              aria-label="Augmenter la quantité"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Add CTA */}
          <button
            onClick={handleConfirm}
            className="flex-1 py-3 px-5 text-sm font-bold text-stone-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-lg shadow-amber-500/20 active:scale-[0.98] transition-all flex items-center justify-between cursor-pointer"
          >
            <span>{t.addToOrder}</span>
            <span className="tabular-nums font-extrabold">{totalPrice} {lang === 'ar' ? 'درهم' : 'MAD'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
