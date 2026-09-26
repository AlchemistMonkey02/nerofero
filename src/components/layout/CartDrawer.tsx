"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const CartDrawer = () => {
  const { isCartOpen, closeCart, cart, removeFromCart, updateQuantity, cartSubtotal, formatPrice, cartCount } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);

  if (!isCartOpen) return null;

  const freeShippingThreshold = 5000;
  const progressToFreeShipping = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);

  const finalTotal = discountApplied ? cartSubtotal * 0.9 : cartSubtotal;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "HERITAGE10" || promoCode.trim().toUpperCase() === "AURAA") {
      setDiscountApplied(true);
    }
  };

  return (
    <div className="fixed inset-0 z-[105] overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-charcoal/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-full sm:w-screen max-w-md bg-brand-bg shadow-2xl flex flex-col border-l border-brand-sand">
          {/* Header */}
          <div className="p-6 border-b border-brand-sand flex items-center justify-between bg-brand-sand/30">
            <div className="flex items-center space-x-3">
              <ShoppingBag className="w-5 h-5 text-brand-leather" />
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-brand-charcoal">
                Your Carry Bag ({cartCount})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-2 rounded-full hover:bg-brand-sand/60 text-brand-charcoal transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="bg-brand-sand/40 p-4 border-b border-brand-sand text-xs text-brand-charcoal">
            {amountNeededForFreeShipping > 0 ? (
              <p className="mb-2">
                Add <span className="font-semibold text-brand-leather">{formatPrice(amountNeededForFreeShipping)}</span> more for <span className="font-semibold">Complimentary Express Shipping</span>
              </p>
            ) : (
              <p className="mb-2 text-emerald-800 font-medium flex items-center space-x-1">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-emerald-700" />
                You have unlocked Complimentary Express Shipping!
              </p>
            )}
            <div className="w-full bg-brand-sand h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-brand-leather h-full transition-all duration-500 rounded-full"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-brand-sand/60 flex items-center justify-center mx-auto text-brand-muted">
                  <ShoppingBag className="w-8 h-8 stroke-1" />
                </div>
                <h3 className="font-display text-lg text-brand-charcoal font-semibold">Your bag is currently empty</h3>
                <p className="text-xs text-brand-muted max-w-xs mx-auto">
                  Explore our handcrafted saddle leather bags, weekender travel duffels and small accessories.
                </p>
                <Link
                  href="/shop"
                  onClick={closeCart}
                  className="inline-block mt-4 bg-brand-charcoal text-brand-bg px-6 py-3 text-xs font-semibold uppercase tracking-luxury-wide hover:bg-brand-leather transition-colors rounded-sm"
                >
                  Explore Collection
                </Link>
              </div>
            ) : (
              cart.map((item, idx) => (
                <div key={idx} className="flex space-x-4 border-b border-brand-sand/60 pb-6">
                  <div className="relative w-20 h-24 bg-white rounded border border-brand-sand overflow-hidden flex-shrink-0">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-display text-base font-bold text-brand-charcoal leading-tight">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(idx)}
                        className="text-brand-muted hover:text-red-700 p-1 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-xs text-brand-muted">{item.selectedColor}</p>

                    {/* Monogram Badge if personalized */}
                    {item.monogramText && (
                      <div className="inline-flex items-center space-x-1 text-[10px] bg-brand-gold/15 text-brand-leather px-2 py-0.5 rounded border border-brand-gold/30 mt-1">
                        <Sparkles className="w-3 h-3 text-brand-gold" />
                        <span>Monogram: &quot;{item.monogramText}&quot; ({item.monogramStyle || 'Gold'}) (+₹500)</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-brand-sand rounded bg-white">
                        <button
                          onClick={() => updateQuantity(idx, item.quantity - 1)}
                          className="px-2 py-1 text-brand-charcoal hover:bg-brand-sand/50 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs font-semibold text-brand-charcoal">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(idx, item.quantity + 1)}
                          className="px-2 py-1 text-brand-charcoal hover:bg-brand-sand/50 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-display text-base font-bold text-brand-charcoal">
                        {formatPrice((item.product.price + (item.monogramText ? 500 : 0)) * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer / Summary */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-brand-sand bg-brand-sand/30 space-y-4">
              {/* Promo Code */}
              <form onSubmit={handleApplyPromo} className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Promo Code (Try AURAA)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs border border-brand-sand rounded bg-white focus:outline-none focus:border-brand-leather"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-brand-sand text-brand-charcoal font-semibold text-xs rounded hover:bg-brand-leather hover:text-white transition-colors"
                >
                  Apply
                </button>
              </form>
              {discountApplied && (
                <p className="text-xs text-emerald-700 font-medium">10% Heritage discount applied!</p>
              )}

              {/* Subtotal */}
              <div className="space-y-1.5 text-xs text-brand-charcoal pt-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold">{formatPrice(cartSubtotal)}</span>
                </div>
                {discountApplied && (
                  <div className="flex justify-between text-emerald-800">
                    <span>Discount (10%)</span>
                    <span>-{formatPrice(cartSubtotal * 0.1)}</span>
                  </div>
                )}
                <div className="flex justify-between text-brand-muted">
                  <span>Shipping & Duties</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between font-display text-lg font-bold pt-2 border-t border-brand-sand">
                  <span>Total</span>
                  <span className="text-brand-leather">{formatPrice(finalTotal)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Link
                href="/checkout"
                onClick={closeCart}
                className="w-full bg-brand-charcoal text-brand-bg py-3.5 px-6 rounded text-xs font-semibold uppercase tracking-luxury-wide hover:bg-brand-leather transition-colors flex items-center justify-center space-x-2 group shadow-luxury"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
