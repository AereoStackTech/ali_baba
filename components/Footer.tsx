'use client';

import React from 'react';
import { Flame, Shield } from 'lucide-react';
import { RESTAURANT_INFO } from '@/data/menu';
import { Language, Translations } from '@/lib/i18n';

interface FooterProps {
  lang: Language;
  t: Translations;
}

export function Footer({ lang, t }: FooterProps) {
  return (
    <footer className="bg-stone-950 border-t border-white/10 text-stone-400 text-xs py-12 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-stone-100 font-bold text-base">
              <div className="w-7 h-7 rounded-lg bg-amber-500 text-stone-950 flex items-center justify-center">
                <Flame className="w-4 h-4 fill-current" />
              </div>
              <span>{t.brandName} {t.brandTagline}</span>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              {t.footerDesc}
            </p>
            <div className="text-stone-500 text-[11px] pt-1">
              {lang === 'ar' ? 'شارع كينيدي، حي البلاطو · أسفي 46000، المغرب' : 'Plateau, Boulevard Kennedy · Safi 46000, Maroc'}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200">
              {t.footerNavTitle}
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#specialties" className="hover:text-amber-400 transition-colors">
                  {t.navSpecialties}
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  {t.navMenu}
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-amber-400 transition-colors">
                  {t.navStory}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition-colors">
                  {t.navLocation}
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Ordering & Contact */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200">
              {t.footerOrdersTitle}
            </h4>
            <p className="text-xs text-stone-400">
              {t.footerOrdersPrompt}
            </p>
            <div className="space-y-1.5 pt-1 text-xs">
              <div>
                {t.footerPhoneLabel}{' '}
                <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="text-stone-200 hover:text-amber-400 font-semibold tabular-nums">
                  {RESTAURANT_INFO.phoneDisplay}
                </a>
              </div>
              <div>
                {t.footerWhatsAppLabel}{' '}
                <a 
                  href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-emerald-400 hover:text-emerald-300 font-semibold tabular-nums"
                >
                  {RESTAURANT_INFO.whatsappDisplay}
                </a>
              </div>
              <div className="text-stone-400">
                {t.footerHoursLabel} {t.footerHoursVal}
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Independent Portfolio Disclaimer */}
        <div className="pt-6 border-t border-white/5 space-y-2">
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3 text-[11px] text-stone-400 leading-relaxed">
            <Shield className="w-4 h-4 text-amber-500/80 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-300">{t.footerDisclaimerTitle}</strong>{' '}
              {t.footerDisclaimerText}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-stone-500 pt-2">
            <div>
              &copy; {new Date().getFullYear()} {t.footerCopyright}
            </div>
            <div className="flex items-center gap-1 text-stone-400">
              <span>{t.footerMadeWithLove}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
