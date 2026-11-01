'use client';

import React from 'react';
import { RESTAURANT_INFO } from '@/data/menu';
import { MapPin, Phone, Clock, MessageSquare, ExternalLink, Navigation, UtensilsCrossed, ShoppingBag, Bike } from 'lucide-react';
import { Language, Translations } from '@/lib/i18n';

interface LocationHoursSectionProps {
  lang: Language;
  t: Translations;
}

export function LocationHoursSection({ lang, t }: LocationHoursSectionProps) {
  return (
    <section id="location" className="py-14 sm:py-20 border-b border-white/5 bg-[#0c0d10] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold border border-amber-500/20 mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.locBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {t.locTitle}
          </h2>
          <p className="text-sm text-stone-300 mt-2">
            {t.locDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Column: Address & Quick Contact Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-stone-900 border border-white/10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{t.locAddressTitle}</h3>
                  <p className="text-xs sm:text-sm text-stone-300 mt-0.5">
                    {RESTAURANT_INFO.address}
                  </p>
                  <p className="text-xs text-stone-400 mt-1">
                    {t.locLandmark}
                  </p>
                </div>
              </div>

              {/* Service Badges */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5 text-center">
                <div className="p-2.5 rounded-lg bg-stone-950 border border-white/5">
                  <UtensilsCrossed className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                  <div className="text-xs font-bold text-white">{t.locDineIn}</div>
                  <div className="text-[10px] text-stone-400">{t.locDineInSub}</div>
                </div>
                <div className="p-2.5 rounded-lg bg-stone-950 border border-white/5">
                  <ShoppingBag className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                  <div className="text-xs font-bold text-white">{t.locTakeaway}</div>
                  <div className="text-[10px] text-stone-400">{t.locTakeawaySub}</div>
                </div>
                <div className="p-2.5 rounded-lg bg-stone-950 border border-white/5">
                  <Bike className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                  <div className="text-xs font-bold text-white">{t.locDelivery}</div>
                  <div className="text-[10px] text-stone-400">{t.locDeliverySub}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t.locCallButton} {RESTAURANT_INFO.phoneDisplay}</span>
                </a>

                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent(
                    lang === 'ar'
                      ? 'السلام عليكم سناك علي بابا أسفي، أرغب في الاستفسار عن القائمة والطلبات.'
                      : 'Salam Ali Baba Safi, je souhaite des informations sur le menu et les disponibilités.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.locWhatsAppButton} {RESTAURANT_INFO.whatsappDisplay}</span>
                </a>
              </div>

              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-stone-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.locGpsButton}</span>
                <ExternalLink className="w-3 h-3 ml-1 rtl:ml-0 rtl:mr-1 text-stone-500" />
              </a>
            </div>
          </div>

          {/* Schedule Table */}
          <div className="lg:col-span-6">
            <div className="p-6 rounded-2xl bg-stone-900 border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-amber-400" />
                  <h3 className="text-base font-bold text-white">{t.locHoursTitle}</h3>
                </div>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                  {t.locOpenTodayBadge}
                </span>
              </div>

              {/* Schedule list with tabular numbers */}
              <div className="divide-y divide-white/5 text-xs sm:text-sm">
                {RESTAURANT_INFO.openingHours.map((schedule, idx) => {
                  const dayName = lang === 'ar' ? (schedule.dayAr || schedule.day) : schedule.day;
                  return (
                    <div key={idx} className="py-2.5 flex items-center justify-between">
                      <span className="font-medium text-stone-300">{dayName}</span>
                      <span className="tabular-nums font-semibold text-stone-100">
                        {schedule.hours}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-stone-400">
                <span>{t.locContinuousService}</span>
                <span className="text-amber-400 font-semibold">{t.locSevenDays}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
