'use client';

import React, { useState, useEffect } from 'react';
import { MenuItem, CustomizationOption, CartItem, ConfirmedOrder } from '@/types/restaurant';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SpecialtiesSection } from '@/components/SpecialtiesSection';
import { MenuSection } from '@/components/MenuSection';
import { SafiStorySection } from '@/components/SafiStorySection';
import { LocationHoursSection } from '@/components/LocationHoursSection';
import { Footer } from '@/components/Footer';
import { ItemModal } from '@/components/ItemModal';
import { CartDrawer } from '@/components/CartDrawer';
import { OrderSuccessModal } from '@/components/OrderSuccessModal';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { Language, TRANSLATIONS } from '@/lib/i18n';

export default function HomePage() {
  const [language, setLanguage] = useState<Language>('fr');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [modalItem, setModalItem] = useState<MenuItem | null>(null);
  const [confirmedOrder, setConfirmedOrder] = useState<ConfirmedOrder | null>(null);

  const t = TRANSLATIONS[language];

  // Keep document html lang and dir attributes in sync with active language
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'fr' ? 'ar' : 'fr'));
  };

  // Compute total count and amount
  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + item.totalPrice, 0);

  // Quick add without customization (uses default options)
  const handleQuickAdd = (item: MenuItem) => {
    const cartItemId = `${item.id}-quick-${Date.now()}`;
    const defaultBread = language === 'ar' ? 'خبز بيتا لبناني ساخن' : item.defaultBread;
    const defaultSauces = language === 'ar' 
      ? ['صلصة ثومية بيضاء (توم)', 'صلصة جزائرية'] 
      : ['Sauce Blanche à l\'Ail (Toum)', 'Sauce Algérienne'];

    const newItem: CartItem = {
      cartItemId,
      item,
      quantity: 1,
      customization: {
        bread: defaultBread,
        sauces: defaultSauces,
        extras: [],
      },
      unitPrice: item.price,
      totalPrice: item.price,
    };

    setCartItems((prev) => [...prev, newItem]);
  };

  // Add customized item from modal
  const handleAddToCart = (
    item: MenuItem,
    customization: CustomizationOption,
    quantity: number
  ) => {
    const extrasTotal = customization.extras.reduce((sum, extra) => sum + extra.price, 0);
    const unitPrice = item.price + extrasTotal;
    const totalPrice = unitPrice * quantity;
    const cartItemId = `${item.id}-${Date.now()}`;

    const newCartItem: CartItem = {
      cartItemId,
      item,
      quantity,
      customization,
      unitPrice,
      totalPrice,
    };

    setCartItems((prev) => [...prev, newCartItem]);
  };

  const handleUpdateQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }

    setCartItems((prev) =>
      prev.map((item) => {
        if (item.cartItemId === cartItemId) {
          return {
            ...item,
            quantity: newQuantity,
            totalPrice: item.unitPrice * newQuantity,
          };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      dir={language === 'ar' ? 'rtl' : 'ltr'} 
      lang={language}
      className="min-h-screen flex flex-col bg-[#0c0d10] text-stone-100 selection:bg-amber-500 selection:text-stone-950 transition-colors"
    >
      {/* 3-Zone Top Navigation Bar */}
      <Header
        cartItemCount={cartItemCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartOpen(true)}
        lang={language}
        onToggleLanguage={toggleLanguage}
        t={t}
      />

      <main className="flex-1">
        {/* Engaging Hero & Brand Showcase */}
        <Hero
          onScrollToMenu={scrollToMenu}
          onOpenQuickOrder={() => setIsCartOpen(true)}
          lang={language}
          t={t}
        />

        {/* Flagship Signature Dishes */}
        <SpecialtiesSection
          onSelectItem={(item) => setModalItem(item)}
          onQuickAdd={handleQuickAdd}
          lang={language}
          t={t}
        />

        {/* Full Interactive Menu with Tabs, Search, and 1-50 MAD pricing */}
        <MenuSection
          onSelectItem={(item) => setModalItem(item)}
          onQuickAdd={handleQuickAdd}
          lang={language}
          t={t}
        />

        {/* Story & Local Safi Snack Culture */}
        <SafiStorySection t={t} />

        {/* Location, Schedule, and Direct Touch Contact */}
        <LocationHoursSection lang={language} t={t} />
      </main>

      {/* Footer with Portfolio Disclaimer */}
      <Footer lang={language} t={t} />

      {/* Item Customizer Modal */}
      {modalItem && (
        <ItemModal
          key={modalItem.id}
          item={modalItem}
          onClose={() => setModalItem(null)}
          onAddToCart={handleAddToCart}
          lang={language}
          t={t}
        />
      )}

      {/* Pre-order & Cart Drawer (Web Order + WhatsApp Bridge) */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onOrderConfirmed={(order) => setConfirmedOrder(order)}
        lang={language}
        t={t}
      />

      {/* Order Confirmed Receipt Modal */}
      <OrderSuccessModal
        order={confirmedOrder}
        onClose={() => setConfirmedOrder(null)}
        lang={language}
        t={t}
      />

      {/* Ergonomic Sticky Bottom Bar for Mobile (<15% sticky height cap) */}
      <StickyMobileBar
        cartItemCount={cartItemCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartOpen(true)}
        onScrollToMenu={scrollToMenu}
        lang={language}
        t={t}
      />
    </div>
  );
}
