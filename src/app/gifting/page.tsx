"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Gift, Sparkles, Check, Send } from "lucide-react";
import { IMAGES } from "@/lib/images";

export default function GiftingPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="py-16 bg-brand-bg space-y-20">
      
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 text-center space-y-6">
        <div className="inline-flex items-center space-x-2 text-brand-gold bg-brand-charcoal px-4 py-1.5 rounded-full text-brand-bg">
          <Gift className="w-3.5 h-3.5 text-brand-gold" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em]">
            The Art of Giving
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-light text-brand-charcoal leading-[1.15]">
          Unforgettable Gifts, <br />
          <span className="italic font-normal text-brand-leather">Handcrafted to Be Treasured.</span>
        </h1>

        <p className="text-sm sm:text-base text-brand-muted max-w-2xl mx-auto font-light leading-relaxed">
          Every gift item includes our signature rigid gift box, cotton linen dust bag, wax-sealed handwritten message card, and 24k gold monogram embossing option.
        </p>
      </section>

      {/* Gift Guides Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[10px] uppercase tracking-luxury-widest text-brand-leather font-bold">Curated Collections</span>
          <h2 className="font-display text-3xl font-bold uppercase text-brand-charcoal">Gift Guides By Persona</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-brand-white rounded-lg border border-brand-sand overflow-hidden shadow-luxury p-6 space-y-4 text-center group">
            <div className="relative aspect-[4/3] w-full rounded overflow-hidden">
              <Image src={IMAGES.categories.women} alt="For Her" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="font-display text-2xl font-bold text-brand-charcoal">For Her</h3>
            <p className="text-xs text-brand-muted font-light">Elegantly contoured saddle leather shoulder totes, crossbody bags & slim cardholders.</p>
            <Link href="/shop?category=Women" className="inline-block bg-brand-charcoal text-brand-bg px-6 py-2.5 rounded text-xs uppercase tracking-wider font-semibold hover:bg-brand-leather transition-colors">
              Explore Gifts For Her
            </Link>
          </div>

          <div className="bg-brand-white rounded-lg border border-brand-sand overflow-hidden shadow-luxury p-6 space-y-4 text-center group">
            <div className="relative aspect-[4/3] w-full rounded overflow-hidden">
              <Image src={IMAGES.categories.men} alt="For Him" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="font-display text-2xl font-bold text-brand-charcoal">For Him</h3>
            <p className="text-xs text-brand-muted font-light">Architectural laptop sleeves, classic bifold wallets, and oil leather travel weekender duffels.</p>
            <Link href="/shop?category=Men" className="inline-block bg-brand-charcoal text-brand-bg px-6 py-2.5 rounded text-xs uppercase tracking-wider font-semibold hover:bg-brand-leather transition-colors">
              Explore Gifts For Him
            </Link>
          </div>

          <div className="bg-brand-white rounded-lg border border-brand-sand overflow-hidden shadow-luxury p-6 space-y-4 text-center group">
            <div className="relative aspect-[4/3] w-full rounded overflow-hidden">
              <Image src={IMAGES.categories.travel} alt="For The Traveller" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="font-display text-2xl font-bold text-brand-charcoal">For The Traveller</h3>
            <p className="text-xs text-brand-muted font-light">Monogrammed passport sleeves, luggage tags, and water-waxed heavy canvas voyage bags.</p>
            <Link href="/shop?category=Travel" className="inline-block bg-brand-charcoal text-brand-bg px-6 py-2.5 rounded text-xs uppercase tracking-wider font-semibold hover:bg-brand-leather transition-colors">
              Explore Travel Gifts
            </Link>
          </div>

        </div>
      </section>

      {/* Corporate Gifting Inquiry */}
      <section className="max-w-4xl mx-auto px-4 bg-brand-white p-8 sm:p-12 rounded-xl border border-brand-sand shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <Sparkles className="w-6 h-6 text-brand-gold mx-auto" />
          <h2 className="font-display text-3xl font-bold uppercase text-brand-charcoal">Corporate & Executive Custom Orders</h2>
          <p className="text-xs text-brand-muted font-light max-w-lg mx-auto">
            We partner with premier global corporations, private wealth firms, and luxury events to create bespoke brass die logo embossed leather goods.
          </p>
        </div>

        {formSubmitted ? (
          <div className="p-6 bg-emerald-50 border border-emerald-200 rounded text-center space-y-2 text-emerald-800">
            <Check className="w-8 h-8 mx-auto text-emerald-600" />
            <h3 className="font-display text-xl font-bold">Inquiry Received</h3>
            <p className="text-xs">Our Client Concierge lead will contact you within 24 hours with volume pricing & physical swatch kits.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <input
              type="text"
              required
              placeholder="Your Full Name"
              className="bg-brand-bg border border-brand-sand rounded px-4 py-3 text-brand-charcoal focus:outline-none focus:border-brand-leather"
            />
            <input
              type="email"
              required
              placeholder="Company Email Address"
              className="bg-brand-bg border border-brand-sand rounded px-4 py-3 text-brand-charcoal focus:outline-none focus:border-brand-leather"
            />
            <input
              type="text"
              placeholder="Company Name & Designation"
              className="bg-brand-bg border border-brand-sand rounded px-4 py-3 text-brand-charcoal focus:outline-none focus:border-brand-leather sm:col-span-2"
            />
            <textarea
              rows={3}
              required
              placeholder="Estimated Units (e.g. 50 Passport Sleeves with Custom Logo)"
              className="bg-brand-bg border border-brand-sand rounded px-4 py-3 text-brand-charcoal focus:outline-none focus:border-brand-leather sm:col-span-2"
            />
            <button
              type="submit"
              className="sm:col-span-2 bg-brand-charcoal text-brand-bg py-4 rounded text-xs uppercase tracking-luxury-wide font-semibold hover:bg-brand-leather transition-colors flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Bespoke Corporate Inquiry</span>
            </button>
          </form>
        )}
      </section>

    </div>
  );
}
