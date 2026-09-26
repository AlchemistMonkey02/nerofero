"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShieldCheck, Lock, CheckCircle2, ShoppingBag, CreditCard, ArrowLeft, Sparkles } from "lucide-react";

export default function CheckoutPage() {
  const { cart, cartSubtotal, formatPrice, currencySymbol } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<"razorpay" | "card" | "cod">("razorpay");
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "Rajasthan",
    pincode: "",
    giftMessage: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
    }, 2000);
  };

  if (orderComplete) {
    return (
      <div className="py-24 bg-brand-bg min-h-screen flex items-center justify-center px-4">
        <div className="max-w-xl w-full bg-brand-white p-8 sm:p-12 rounded-xl border border-brand-sand shadow-2xl text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-luxury-widest text-brand-gold">
            Order Confirmed • #AUR-89210
          </span>
          <h1 className="font-display text-3xl font-extrabold text-brand-charcoal">
            Thank You For Your Order!
          </h1>
          <p className="text-xs text-brand-muted font-light leading-relaxed">
            We have sent your order confirmation receipt to <strong className="text-brand-charcoal">{formData.email || "your email"}</strong>. Our Jaipur master artisans are now preparing hide panels for hand stitching.
          </p>

          <div className="p-4 bg-brand-bg rounded border border-brand-sand text-xs text-left space-y-2">
            <div className="flex justify-between">
              <span>Estimated Delivery:</span>
              <span className="font-bold text-brand-charcoal">3 - 5 Business Days</span>
            </div>
            <div className="flex justify-between">
              <span>Dispatch Boutique:</span>
              <span className="font-bold text-brand-charcoal">Jaipur Atelier</span>
            </div>
            <div className="flex justify-between">
              <span>Payment Status:</span>
              <span className="font-bold text-emerald-700">Verified & Paid</span>
            </div>
          </div>

          <Link
            href="/"
            className="inline-block bg-brand-charcoal text-brand-bg px-8 py-3.5 rounded text-xs uppercase tracking-luxury-wide font-semibold hover:bg-brand-leather transition-colors w-full"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-brand-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Navigation */}
        <div className="flex justify-between items-center border-b border-brand-sand pb-4">
          <Link href="/shop" className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold text-brand-leather hover:text-brand-charcoal">
            <ArrowLeft className="w-4 h-4" />
            <span>Continue Shopping</span>
          </Link>
          <div className="flex items-center space-x-2 text-xs text-emerald-800 bg-emerald-50 px-3 py-1 rounded border border-emerald-200">
            <Lock className="w-3.5 h-3.5" />
            <span>256-Bit SSL Encrypted Secure Checkout</span>
          </div>
        </div>

        {/* Main Checkout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Form: Shipping & Payment */}
          <form onSubmit={handlePlaceOrder} className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Customer Details */}
            <div className="bg-brand-white p-6 rounded-lg border border-brand-sand shadow-luxury space-y-4">
              <h2 className="font-display text-xl font-bold uppercase text-brand-charcoal border-b border-brand-sand pb-3">
                1. Shipping Address & Contact
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <input
                  type="text"
                  name="firstName"
                  required
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="bg-brand-bg border border-brand-sand rounded px-3.5 py-2.5 text-brand-charcoal focus:outline-none focus:border-brand-leather"
                />
                <input
                  type="text"
                  name="lastName"
                  required
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="bg-brand-bg border border-brand-sand rounded px-3.5 py-2.5 text-brand-charcoal focus:outline-none focus:border-brand-leather"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address (for tracking updates) *"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-brand-bg border border-brand-sand rounded px-3.5 py-2.5 text-brand-charcoal focus:outline-none focus:border-brand-leather"
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Mobile Phone Number *"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-brand-bg border border-brand-sand rounded px-3.5 py-2.5 text-brand-charcoal focus:outline-none focus:border-brand-leather"
                />
                <input
                  type="text"
                  name="address"
                  required
                  placeholder="Street Address / Building / Flat *"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="bg-brand-bg border border-brand-sand rounded px-3.5 py-2.5 text-brand-charcoal focus:outline-none focus:border-brand-leather sm:col-span-2"
                />
                <input
                  type="text"
                  name="city"
                  required
                  placeholder="City *"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="bg-brand-bg border border-brand-sand rounded px-3.5 py-2.5 text-brand-charcoal focus:outline-none focus:border-brand-leather"
                />
                <input
                  type="text"
                  name="pincode"
                  required
                  placeholder="Pincode / Zip Code *"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="bg-brand-bg border border-brand-sand rounded px-3.5 py-2.5 text-brand-charcoal focus:outline-none focus:border-brand-leather"
                />
                <textarea
                  name="giftMessage"
                  rows={2}
                  placeholder="Handwritten Message Card Note (Optional for Gifting)"
                  value={formData.giftMessage}
                  onChange={handleInputChange}
                  className="bg-brand-bg border border-brand-sand rounded px-3.5 py-2.5 text-brand-charcoal focus:outline-none focus:border-brand-leather sm:col-span-2"
                />
              </div>
            </div>

            {/* Step 2: Payment Method Selection */}
            <div className="bg-brand-white p-6 rounded-lg border border-brand-sand shadow-luxury space-y-4">
              <h2 className="font-display text-xl font-bold uppercase text-brand-charcoal border-b border-brand-sand pb-3">
                2. Select Secure Payment Gateway
              </h2>

              <div className="space-y-3">
                <label
                  onClick={() => setPaymentMethod("razorpay")}
                  className={`flex items-center justify-between p-4 rounded border cursor-pointer transition-all ${
                    paymentMethod === "razorpay" ? "border-brand-leather bg-brand-sand/30 font-bold" : "border-brand-sand"
                  }`}
                >
                  <div className="flex items-center space-x-3 text-xs">
                    <CreditCard className="w-5 h-5 text-brand-leather" />
                    <div>
                      <span className="block font-semibold">Razorpay Secure (UPI, GPay, Cards, NetBanking)</span>
                      <span className="text-[10px] text-brand-muted">Instant payment with 100% buyer protection</span>
                    </div>
                  </div>
                  <input type="radio" name="pay" checked={paymentMethod === "razorpay"} onChange={() => {}} className="accent-brand-leather" />
                </label>

                <label
                  onClick={() => setPaymentMethod("card")}
                  className={`flex items-center justify-between p-4 rounded border cursor-pointer transition-all ${
                    paymentMethod === "card" ? "border-brand-leather bg-brand-sand/30 font-bold" : "border-brand-sand"
                  }`}
                >
                  <div className="flex items-center space-x-3 text-xs">
                    <Lock className="w-5 h-5 text-brand-leather" />
                    <div>
                      <span className="block font-semibold">Credit / Debit Card (Visa, MasterCard, Amex)</span>
                      <span className="text-[10px] text-brand-muted">International cards accepted</span>
                    </div>
                  </div>
                  <input type="radio" name="pay" checked={paymentMethod === "card"} onChange={() => {}} className="accent-brand-leather" />
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isProcessing || cart.length === 0}
              className="w-full bg-brand-charcoal text-brand-bg py-4 px-8 rounded text-xs uppercase tracking-luxury-wide font-semibold hover:bg-brand-leather transition-colors shadow-2xl disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              {isProcessing ? (
                <span>Processing Order...</span>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Place Order • {formatPrice(cartSubtotal)}</span>
                </>
              )}
            </button>
          </form>

          {/* Right Summary Sidebar */}
          <aside className="lg:col-span-5 space-y-6 bg-brand-white p-6 rounded-lg border border-brand-sand shadow-luxury h-fit">
            <h2 className="font-display text-xl font-bold uppercase text-brand-charcoal border-b border-brand-sand pb-3">
              Order Summary ({cart.length})
            </h2>

            {/* Cart Items */}
            <div className="space-y-4 max-h-80 overflow-y-auto pr-1">
              {cart.map((item, idx) => (
                <div key={idx} className="flex space-x-3 text-xs border-b border-brand-sand/40 pb-3">
                  <div className="relative w-14 h-16 rounded border border-brand-sand overflow-hidden flex-shrink-0">
                    <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-brand-charcoal">{item.product.name}</h4>
                    <span className="text-brand-muted block">{item.selectedColor}</span>
                    {item.monogramText && (
                      <span className="inline-flex items-center space-x-1 text-[9px] text-brand-leather font-bold bg-brand-sand/50 px-1.5 py-0.5 rounded mt-1">
                        <Sparkles className="w-2.5 h-2.5 text-brand-gold" />
                        <span>Monogram &quot;{item.monogramText}&quot;</span>
                      </span>
                    )}
                    <span className="block mt-1 font-bold">{formatPrice((item.product.price + (item.monogramText ? 500 : 0)) * item.quantity)}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Calculations */}
            <div className="space-y-2 text-xs border-t border-brand-sand pt-4 text-brand-charcoal">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatPrice(cartSubtotal)}</span>
              </div>
              <div className="flex justify-between text-emerald-700">
                <span>Shipping</span>
                <span>FREE (Express Doorway)</span>
              </div>
              <div className="flex justify-between font-display text-lg font-bold border-t border-brand-sand pt-3">
                <span>Total Payable</span>
                <span className="text-brand-leather">{formatPrice(cartSubtotal)}</span>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
