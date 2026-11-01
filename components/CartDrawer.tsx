'use client';

import React, { useState } from 'react';
import { CartItem, ConfirmedOrder } from '@/types/restaurant';
import { RESTAURANT_INFO } from '@/data/menu';
import { 
  X, Trash2, Plus, Minus, ShoppingBag, MessageSquare, 
  Clock, User, Phone, CheckCircle2, AlertCircle 
} from 'lucide-react';
import { Language, Translations } from '@/lib/i18n';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartItemId: string, quantity: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
  onOrderConfirmed: (order: ConfirmedOrder) => void;
  lang: Language;
  t: Translations;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOrderConfirmed,
  lang,
  t,
}: CartDrawerProps) {
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [serviceType, setServiceType] = useState<'takeaway' | 'dinein'>('takeaway');
  const [pickupTime, setPickupTime] = useState(t.timeOption1);
  const [notes, setNotes] = useState('');
  const [validationError, setValidationError] = useState('');

  if (!isOpen) return null;

  const totalAmount = items.reduce((sum, item) => sum + item.totalPrice, 0);

  // Validate form
  const validateForm = () => {
    if (!customerName.trim()) {
      setValidationError(t.errorNameRequired);
      return false;
    }
    if (!phoneNumber.trim() || phoneNumber.length < 9) {
      setValidationError(t.errorPhoneRequired);
      return false;
    }
    setValidationError('');
    return true;
  };

  // WhatsApp Pre-order bridge (bilingual formatting)
  const handleWhatsAppOrder = () => {
    if (!validateForm()) return;

    let message = '';
    if (lang === 'ar') {
      message += `🌯 *طلب جديد - سناك علي بابا للمشويات والشاورما (أسفي)*\n`;
      message += `-------------------------------------------\n`;
      message += `👤 *الزبون:* ${customerName.trim()}\n`;
      message += `📞 *الهاتف:* ${phoneNumber.trim()}\n`;
      message += `📍 *الخدمة:* ${serviceType === 'takeaway' ? 'طلب سفري للأخذ (Takeaway)' : 'تناول الطعام بالمطعم (Sur Place)'}\n`;
      message += `⏱ *وقت الاستلام المفضل:* ${pickupTime}\n`;
      message += `-------------------------------------------\n`;
      message += `📋 *تفاصيل الوجبات:*\n`;

      items.forEach((item, idx) => {
        const itemName = item.item.nameAr || item.item.name;
        message += `\n${idx + 1}. *${item.quantity}x ${itemName}* (${item.totalPrice} درهم)\n`;
        if (item.customization.bread) {
          message += `   • نوع الخبز: ${item.customization.bread}\n`;
        }
        if (item.customization.sauces.length > 0) {
          message += `   • الصلصات: ${item.customization.sauces.join('، ')}\n`;
        }
        if (item.customization.extras.length > 0) {
          message += `   • الإضافات: ${item.customization.extras.map((e) => e.name).join('، ')}\n`;
        }
        if (item.customization.instructions) {
          message += `   • ملاحظة خاصة: ${item.customization.instructions}\n`;
        }
      });

      if (notes.trim()) {
        message += `\n📝 *ملاحظات عامة للمطبخ:* ${notes.trim()}\n`;
      }

      message += `-------------------------------------------\n`;
      message += `💰 *المجموع للأداء عند الاستلام: ${totalAmount} درهم*\n`;
      message += `📍 *الموقع:* شارع كينيدي، حي البلاطو، أسفي\n`;
      message += `_شكراً جزيلاً علي بابا!_`;
    } else {
      message += `🌯 *COMMANDE ALI BABA GRILL & SHAWARMA - SAFI*\n`;
      message += `-------------------------------------------\n`;
      message += `👤 *Client :* ${customerName.trim()}\n`;
      message += `📞 *Téléphone :* ${phoneNumber.trim()}\n`;
      message += `📍 *Service :* ${serviceType === 'takeaway' ? 'À Emporter (Takeaway)' : 'Sur Place (Dine-in)'}\n`;
      message += `⏱ *Retrait prévu :* ${pickupTime}\n`;
      message += `-------------------------------------------\n`;
      message += `📋 *DÉTAIL DE LA COMMANDE :*\n`;

      items.forEach((item, idx) => {
        message += `\n${idx + 1}. *${item.quantity}x ${item.item.name}* (${item.totalPrice} MAD)\n`;
        if (item.customization.bread) {
          message += `   • Pain : ${item.customization.bread}\n`;
        }
        if (item.customization.sauces.length > 0) {
          message += `   • Sauces : ${item.customization.sauces.join(', ')}\n`;
        }
        if (item.customization.extras.length > 0) {
          message += `   • Suppléments : ${item.customization.extras.map((e) => e.name).join(', ')}\n`;
        }
        if (item.customization.instructions) {
          message += `   • Note : ${item.customization.instructions}\n`;
        }
      });

      if (notes.trim()) {
        message += `\n📝 *Notes générales :* ${notes.trim()}\n`;
      }

      message += `-------------------------------------------\n`;
      message += `💰 *TOTAL À PAYER AU RETRAIT : ${totalAmount} MAD*\n`;
      message += `📍 *Retrait :* Bd Kennedy, Plateau, Safi\n`;
      message += `_Merci Ali Baba ! Chokran bzaf._`;
    }

    const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
    
    // Also record order locally so the customer sees confirmation
    const orderId = `AB-${Math.floor(1000 + Math.random() * 9000)}`;
    const confirmed: ConfirmedOrder = {
      orderId,
      timestamp: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
      customer: { customerName, phoneNumber, serviceType, pickupTime, notes },
      items: [...items],
      subtotal: totalAmount,
      total: totalAmount,
      estimatedMinutes: serviceType === 'takeaway' ? 15 : 20,
    };
    onOrderConfirmed(confirmed);
    onClearCart();
    onClose();

    window.open(whatsappUrl, '_blank');
  };

  // Direct Web order submission
  const handleDirectWebOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const orderId = `AB-${Math.floor(1000 + Math.random() * 9000)}`;
    const confirmed: ConfirmedOrder = {
      orderId,
      timestamp: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
      customer: { customerName, phoneNumber, serviceType, pickupTime, notes },
      items: [...items],
      subtotal: totalAmount,
      total: totalAmount,
      estimatedMinutes: serviceType === 'takeaway' ? 15 : 20,
    };

    onOrderConfirmed(confirmed);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="fixed inset-y-0 right-0 max-w-full flex pl-10 rtl:pl-0 rtl:pr-10 rtl:right-auto rtl:left-0"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <div className="w-screen max-w-md bg-stone-900 border-l rtl:border-l-0 rtl:border-r border-white/10 shadow-2xl flex flex-col text-stone-100">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-stone-950">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-500" />
              <div>
                <h2 className="text-base font-bold text-white">{t.cartTitle}</h2>
                <p className="text-xs text-stone-400">
                  {items.length} {items.length > 1 ? t.cartItemsCount : t.cartItemSingular}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-stone-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Fermer le panier"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-stone-500 mb-4">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">{t.cartEmptyTitle}</h3>
              <p className="text-xs text-stone-400 max-w-xs mb-6">
                {t.cartEmptyDesc}
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-bold text-stone-950 bg-amber-400 rounded-xl hover:bg-amber-300 transition-colors cursor-pointer"
              >
                {t.cartEmptyCta}
              </button>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto divide-y divide-white/5 p-4 sm:p-5 space-y-4">
              {/* Items List */}
              <div className="space-y-3">
                {items.map((cartItem) => {
                  const itemTitle = lang === 'ar' ? (cartItem.item.nameAr || cartItem.item.name) : cartItem.item.name;

                  return (
                    <div
                      key={cartItem.cartItemId}
                      className="p-3.5 rounded-xl bg-stone-950/60 border border-white/5 flex flex-col gap-2"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-sm font-bold text-white leading-tight">
                            {itemTitle}
                          </h4>
                          <div className="text-xs text-amber-400 font-semibold tabular-nums mt-0.5">
                            {cartItem.unitPrice} {lang === 'ar' ? 'درهم' : 'MAD'} <span className="text-[10px] text-stone-400 font-normal">{t.perUnit}</span>
                          </div>
                        </div>

                        <button
                          onClick={() => onRemoveItem(cartItem.cartItemId)}
                          className="text-stone-500 hover:text-rose-400 p-1 transition-colors cursor-pointer"
                          title="Supprimer l'article"
                          aria-label="Supprimer l'article"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Customization Details */}
                      {(cartItem.customization.bread || 
                        cartItem.customization.sauces.length > 0 || 
                        cartItem.customization.extras.length > 0 || 
                        cartItem.customization.instructions) && (
                        <div className="text-[11px] text-stone-400 space-y-0.5 bg-black/20 p-2 rounded-lg">
                          {cartItem.customization.bread && (
                            <div>{t.labelBread} <span className="text-stone-300 font-medium">{cartItem.customization.bread}</span></div>
                          )}
                          {cartItem.customization.sauces.length > 0 && (
                            <div>{t.labelSauces} <span className="text-stone-300 font-medium">{cartItem.customization.sauces.join('، ')}</span></div>
                          )}
                          {cartItem.customization.extras.length > 0 && (
                            <div>{t.labelExtras} <span className="text-amber-300">{cartItem.customization.extras.map((e) => e.name).join('، ')}</span></div>
                          )}
                          {cartItem.customization.instructions && (
                            <div className="italic text-stone-400">« {cartItem.customization.instructions} »</div>
                          )}
                        </div>
                      )}

                      {/* Stepper & Line Total */}
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-1.5 bg-stone-900 px-2 py-1 rounded-lg border border-white/10">
                          <button
                            onClick={() => onUpdateQuantity(cartItem.cartItemId, cartItem.quantity - 1)}
                            className="w-5 h-5 flex items-center justify-center text-stone-400 hover:text-white cursor-pointer"
                            aria-label="Moins"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold tabular-nums">
                            {cartItem.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(cartItem.cartItemId, cartItem.quantity + 1)}
                            className="w-5 h-5 flex items-center justify-center text-stone-400 hover:text-white cursor-pointer"
                            aria-label="Plus"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="text-sm font-extrabold text-white tabular-nums">
                          {cartItem.totalPrice} {lang === 'ar' ? 'درهم' : 'MAD'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Pre-order Information Form */}
              <div className="pt-4 space-y-3.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {t.preorderSectionTitle}
                </h3>

                {validationError && (
                  <div className="p-3 rounded-lg bg-rose-950/50 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{validationError}</span>
                  </div>
                )}

                <div>
                  <label htmlFor="customerName" className="block text-xs font-medium text-stone-300 mb-1">
                    {t.labelName} <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-stone-500 absolute left-3 top-3 pointer-events-none rtl:left-auto rtl:right-3" />
                    <input
                      id="customerName"
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder={t.namePlaceholder}
                      className="w-full pl-8 pr-3 py-2 text-xs rounded-lg bg-stone-950 border border-white/10 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 rtl:pl-3 rtl:pr-8"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-xs font-medium text-stone-300 mb-1">
                    {t.labelPhone} <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-stone-500 absolute left-3 top-3 pointer-events-none rtl:left-auto rtl:right-3" />
                    <input
                      id="phoneNumber"
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder={t.phonePlaceholder}
                      className="w-full pl-8 pr-3 py-2 text-xs rounded-lg bg-stone-950 border border-white/10 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 rtl:pl-3 rtl:pr-8 text-left rtl:text-right"
                    />
                  </div>
                </div>

                {/* Service Mode Selector */}
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    {t.labelServiceMode}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setServiceType('takeaway')}
                      className={`p-2 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                        serviceType === 'takeaway'
                          ? 'border-amber-500 bg-amber-500/10 text-amber-300'
                          : 'border-white/10 bg-white/[0.02] text-stone-400 hover:border-white/20'
                      }`}
                    >
                      {t.serviceTakeaway}
                    </button>
                    <button
                      type="button"
                      onClick={() => setServiceType('dinein')}
                      className={`p-2 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                        serviceType === 'dinein'
                          ? 'border-amber-500 bg-amber-500/10 text-amber-300'
                          : 'border-white/10 bg-white/[0.02] text-stone-400 hover:border-white/20'
                      }`}
                    >
                      {t.serviceDineIn}
                    </button>
                  </div>
                </div>

                {/* Pickup Time Choice */}
                <div>
                  <label htmlFor="pickupTime" className="block text-xs font-medium text-stone-300 mb-1">
                    {t.labelPickupTime}
                  </label>
                  <select
                    id="pickupTime"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-stone-950 border border-white/10 text-white focus:outline-none focus:border-amber-500 cursor-pointer"
                  >
                    <option value={t.timeOption1}>{t.timeOption1}</option>
                    <option value={t.timeOption2}>{t.timeOption2}</option>
                    <option value={t.timeOption3}>{t.timeOption3}</option>
                    <option value={t.timeOption4}>{t.timeOption4}</option>
                    <option value={t.timeOption5}>{t.timeOption5}</option>
                    <option value={t.timeOption6}>{t.timeOption6}</option>
                  </select>
                </div>

                {/* Additional Note */}
                <div>
                  <label htmlFor="orderNotes" className="block text-xs font-medium text-stone-300 mb-1">
                    {t.labelKitchenNotes}
                  </label>
                  <input
                    id="orderNotes"
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={t.kitchenNotesPlaceholder}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-stone-950 border border-white/10 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Footer Actions (when cart has items) */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-white/10 bg-stone-950 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-stone-400">{t.totalAtCounter}</span>
                <span className="text-xl font-black text-amber-400 tabular-nums">
                  {totalAmount} {lang === 'ar' ? 'درهم' : 'MAD'}
                </span>
              </div>

              {/* Action 1: WhatsApp instant pre-order bridge */}
              <button
                type="button"
                onClick={handleWhatsAppOrder}
                className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.btnSendWhatsApp}</span>
              </button>

              {/* Action 2: Direct Web Pre-order */}
              <button
                type="button"
                onClick={handleDirectWebOrder}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-stone-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>{t.btnDirectWebOrder}</span>
              </button>

              <p className="text-[10px] text-center text-stone-500 leading-tight">
                {t.paymentDisclaimer}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
