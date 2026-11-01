'use client';

import React from 'react';
import { ConfirmedOrder } from '@/types/restaurant';
import { RESTAURANT_INFO } from '@/data/menu';
import { CheckCircle2, Clock, MapPin, Phone, X } from 'lucide-react';
import { Language, Translations } from '@/lib/i18n';

interface OrderSuccessModalProps {
  order: ConfirmedOrder | null;
  onClose: () => void;
  lang: Language;
  t: Translations;
}

export function OrderSuccessModal({ order, onClose, lang, t }: OrderSuccessModalProps) {
  if (!order) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-md rounded-2xl bg-stone-900 border border-white/10 shadow-2xl p-6 text-stone-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-stone-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer rtl:right-auto rtl:left-4"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Header */}
        <div className="text-center pb-4 border-b border-white/10">
          <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">
            {t.orderConfirmedBadge}
          </span>
          <h2 className="text-2xl font-black text-white mt-1">
            {t.orderTicketLabel} {order.orderId}
          </h2>
          <p className="text-xs text-stone-300 mt-1">
            {lang === 'ar' ? (
              <>
                شكراً <strong className="text-white">{order.customer.customerName}</strong>، فريق سناك علي بابا بأسفي يقوم بتحضير وجباتك الساخنة الآن!
              </>
            ) : (
              <>
                Merci <strong className="text-white">{order.customer.customerName}</strong>, l’équipe d’Ali Baba prépare vos plats chauds !
              </>
            )}
          </p>
        </div>

        {/* Estimated Timing Box */}
        <div className="my-4 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Clock className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <div className="text-xs font-bold text-amber-300">{t.orderReadyAtLabel}</div>
              <div className="text-xs text-stone-300">{order.customer.pickupTime}</div>
            </div>
          </div>
          <span className="text-xs font-bold px-2.5 py-1 rounded bg-amber-400 text-stone-950 tabular-nums">
            ~{order.estimatedMinutes} {lang === 'ar' ? 'دقيقة' : 'min'}
          </span>
        </div>

        {/* Order Summary details */}
        <div className="space-y-2 py-2 max-h-48 overflow-y-auto pr-1 text-xs">
          <div className="text-stone-400 font-semibold uppercase text-[10px] tracking-wider">
            {t.orderSummaryLabel}
          </div>
          {order.items.map((item, idx) => {
            const itemTitle = lang === 'ar' ? (item.item.nameAr || item.item.name) : item.item.name;

            return (
              <div key={idx} className="flex items-start justify-between py-1 border-b border-white/5">
                <div>
                  <span className="font-semibold text-white">{item.quantity}x {itemTitle}</span>
                  {item.customization.bread && (
                    <div className="text-[10px] text-stone-400">{t.labelBread} {item.customization.bread}</div>
                  )}
                  {item.customization.sauces.length > 0 && (
                    <div className="text-[10px] text-stone-400">{t.labelSauces} {item.customization.sauces.join('، ')}</div>
                  )}
                </div>
                <span className="font-bold text-amber-400 tabular-nums shrink-0 ml-2 rtl:ml-0 rtl:mr-2">
                  {item.totalPrice} {lang === 'ar' ? 'درهم' : 'MAD'}
                </span>
              </div>
            );
          })}
        </div>

        {/* Total to pay at pickup */}
        <div className="flex items-center justify-between pt-3 pb-4 border-t border-white/10 text-sm">
          <span className="font-medium text-stone-300">{t.orderTotalToPay}</span>
          <span className="text-xl font-extrabold text-amber-400 tabular-nums">
            {order.total} {lang === 'ar' ? 'درهم' : 'MAD'}
          </span>
        </div>

        {/* Address and Direct Contact Action */}
        <div className="p-3 rounded-xl bg-stone-950 border border-white/10 space-y-2.5 text-xs">
          <div className="flex items-center gap-2 text-stone-300">
            <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
            <span>{RESTAURANT_INFO.address}</span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-stone-200 font-semibold border border-white/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.btnCallSnack}</span>
            </a>
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-stone-200 font-semibold border border-white/10 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.btnGpsDirections}</span>
            </a>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-4 w-full py-2.5 text-xs font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors cursor-pointer"
        >
          {t.btnCloseSuccess}
        </button>
      </div>
    </div>
  );
}
