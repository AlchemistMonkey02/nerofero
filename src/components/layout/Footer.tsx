"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Instagram, Youtube, Sparkles, ShieldCheck, Truck, RefreshCw } from "lucide-react";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-brand-charcoal text-brand-bg pt-20 pb-12 border-t border-brand-charcoal/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Trust Value Badges Banner */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-brand-bg/10 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-1">
              <Truck className="w-5 h-5" />
            </div>
            <h5 className="font-display text-base font-bold uppercase tracking-wider text-brand-sand">Complimentary Shipping</h5>
            <p className="text-xs text-brand-bg/60">Express door delivery across India & global dispatch.</p>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-1">
              <Sparkles className="w-5 h-5" />
            </div>
            <h5 className="font-display text-base font-bold uppercase tracking-wider text-brand-sand">24k Gold Monogramming</h5>
            <p className="text-xs text-brand-bg/60">Bespoke foil embossing by master artisans.</p>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-1">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h5 className="font-display text-base font-bold uppercase tracking-wider text-brand-sand">Lifetime Guarantee</h5>
            <p className="text-xs text-brand-bg/60">Free repair service on all structural saddle stitching.</p>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-1">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h5 className="font-display text-base font-bold uppercase tracking-wider text-brand-sand">Seamless Returns</h5>
            <p className="text-xs text-brand-bg/60">14-day exchange window with doorstep collection.</p>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand Vision & Newsletter */}
          <div className="md:col-span-4 space-y-6">
            <div>
              <span className="font-display text-3xl font-extrabold uppercase tracking-[0.25em] text-brand-sand">
                AURAA
              </span>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-brand-gold font-medium mt-1">
                Modern Heritage Luxury
              </span>
            </div>

            <p className="text-xs text-brand-bg/70 leading-relaxed font-light max-w-sm">
              Objects designed to grow more beautiful with time. Merging ancestral Indian saddlery craftsmanship with quiet contemporary luxury.
            </p>

            {/* Newsletter Form */}
            <div className="space-y-3 pt-2">
              <h5 className="text-xs uppercase tracking-luxury-wide font-semibold text-brand-gold">
                Join The Journal
              </h5>
              <p className="text-[11px] text-brand-bg/60">Receive stories from our Jaipur workshop, private previews & new collection launches.</p>
              
              {subscribed ? (
                <div className="p-3 bg-brand-gold/15 border border-brand-gold/30 rounded text-xs text-brand-gold">
                  Thank you for subscribing to The Journal.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex space-x-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-brand-bg/10 border border-brand-bg/20 rounded px-3 py-2.5 text-xs text-brand-bg placeholder:text-brand-bg/40 focus:outline-none focus:border-brand-gold"
                  />
                  <button
                    type="submit"
                    className="bg-brand-gold text-brand-charcoal px-4 py-2.5 rounded text-xs font-semibold uppercase tracking-wider hover:bg-brand-sand transition-colors flex items-center justify-center"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Shop Column */}
            <div className="space-y-4">
              <h5 className="text-xs font-semibold uppercase tracking-luxury-wide text-brand-gold">Shop</h5>
              <ul className="space-y-2 text-xs text-brand-bg/70">
                <li><Link href="/shop" className="hover:text-brand-gold transition-colors">All Products</Link></li>
                <li><Link href="/shop?category=Bags" className="hover:text-brand-gold transition-colors">Handbags & Totes</Link></li>
                <li><Link href="/shop?category=Travel" className="hover:text-brand-gold transition-colors">Travel Weekenders</Link></li>
                <li><Link href="/shop?category=Small+Goods" className="hover:text-brand-gold transition-colors">Small Leather Goods</Link></li>
                <li><Link href="/gifting" className="hover:text-brand-gold transition-colors">Bespoke Monogram</Link></li>
              </ul>
            </div>

            {/* Brand Column */}
            <div className="space-y-4">
              <h5 className="text-xs font-semibold uppercase tracking-luxury-wide text-brand-gold">Our World</h5>
              <ul className="space-y-2 text-xs text-brand-bg/70">
                <li><Link href="/story" className="hover:text-brand-gold transition-colors">Our Story</Link></li>
                <li><Link href="/craftsmanship" className="hover:text-brand-gold transition-colors">The Art of Craft</Link></li>
                <li><Link href="/journal" className="hover:text-brand-gold transition-colors">Editorial Journal</Link></li>
                <li><Link href="/stores" className="hover:text-brand-gold transition-colors">Flagship Boutiques</Link></li>
                <li><Link href="/gifting" className="hover:text-brand-gold transition-colors">Corporate Gifting</Link></li>
              </ul>
            </div>

            {/* Assistance Column */}
            <div className="space-y-4">
              <h5 className="text-xs font-semibold uppercase tracking-luxury-wide text-brand-gold">Assistance</h5>
              <ul className="space-y-2 text-xs text-brand-bg/70">
                <li><a href="#" className="hover:text-brand-gold transition-colors">Client Services</a></li>
                <li><a href="#" className="hover:text-brand-gold transition-colors">Leather Care Guide</a></li>
                <li><a href="#" className="hover:text-brand-gold transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-brand-gold transition-colors">Track Your Order</a></li>
                <li><a href="#" className="hover:text-brand-gold transition-colors">Monogramming FAQ</a></li>
              </ul>
            </div>

            {/* Stores & Social Column */}
            <div className="space-y-4">
              <h5 className="text-xs font-semibold uppercase tracking-luxury-wide text-brand-gold">Boutiques</h5>
              <p className="text-xs text-brand-bg/70 leading-relaxed">
                Delhi • Mumbai • Jaipur • London • Dubai
              </p>
              <div className="pt-2 space-y-2">
                <h6 className="text-[10px] uppercase tracking-wider text-brand-gold font-semibold">Follow Our Journey</h6>
                <div className="flex space-x-3 text-brand-bg/80">
                  <a href="#" className="p-2 bg-brand-bg/10 rounded hover:text-brand-gold transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 bg-brand-bg/10 rounded hover:text-brand-gold transition-colors">
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-12 border-t border-brand-bg/10 flex flex-col md:flex-row justify-between items-center text-[11px] text-brand-bg/50 space-y-4 md:space-y-0">
          <p>© 2026 AURAA MODERN HERITAGE LUXURY PVT. LTD. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
