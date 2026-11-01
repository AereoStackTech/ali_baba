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

export default function HomePage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [modalItem, setModalItem] = useState<MenuItem | null>(null);
  const [confirmedOrder, setConfirmedOrder] = useState<ConfirmedOrder | null>(null);

  // Compute total count and amount
  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + item.totalPrice, 0);

  // Quick add without customization (uses default options)
  const handleQuickAdd = (item: MenuItem) => {
    const cartItemId = `${item.id}-quick-${Date.now()}`;
    const newItem: CartItem = {
      cartItemId,
      item,
      quantity: 1,
      customization: {
        bread: item.defaultBread,
        sauces: ['Sauce Blanche à l\'Ail (Toum)', 'Sauce Algérienne'],
        extras: [],
      },
      unitPrice: item.price,
      totalPrice: item.price,
    };

    setCartItems((prev) => [...prev, newItem]);
    // Optional brief feedback: open cart or trigger indicator
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
    <div className="min-h-screen flex flex-col bg-[#0c0d10] text-stone-100 selection:bg-amber-500 selection:text-stone-950">
      {/* 3-Zone Top Navigation Bar */}
      <Header
        cartItemCount={cartItemCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1">
        {/* Engaging Hero & Brand Showcase */}
        <Hero
          onScrollToMenu={scrollToMenu}
          onOpenQuickOrder={() => setIsCartOpen(true)}
        />

        {/* Flagship Signature Dishes */}
        <SpecialtiesSection
          onSelectItem={(item) => setModalItem(item)}
          onQuickAdd={handleQuickAdd}
        />

        {/* Full Interactive Menu with Tabs, Search, and 1-50 MAD pricing */}
        <MenuSection
          onSelectItem={(item) => setModalItem(item)}
          onQuickAdd={handleQuickAdd}
        />

        {/* Story & Local Safi Snack Culture */}
        <SafiStorySection />

        {/* Location, Schedule, and Direct Touch Contact */}
        <LocationHoursSection />
      </main>

      {/* Footer with Portfolio Disclaimer */}
      <Footer />

      {/* Item Customizer Modal */}
      {modalItem && (
        <ItemModal
          key={modalItem.id}
          item={modalItem}
          onClose={() => setModalItem(null)}
          onAddToCart={handleAddToCart}
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
      />

      {/* Order Confirmed Receipt Modal */}
      <OrderSuccessModal
        order={confirmedOrder}
        onClose={() => setConfirmedOrder(null)}
      />

      {/* Ergonomic Sticky Bottom Bar for Mobile (<15% sticky height cap) */}
      <StickyMobileBar
        cartItemCount={cartItemCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartOpen(true)}
        onScrollToMenu={scrollToMenu}
      />
    </div>
  );
}
