"use client";

import React from "react";
import Link from "next/link";
import { Compass, ArrowRight, ArrowLeft, Sparkles, ShoppingBag, MapPin, BookOpen } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";

export default function NotFound() {
  const suggestedProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="py-20 bg-brand-bg min-h-screen space-y-20">
      {/* Editorial 404 Header Box */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-8">
        
        {/* Rotating Compass Seal */}
        <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-dashed border-brand-gold/50 animate-spin" style={{ animationDuration: '20s' }} />
          <div className="w-16 h-16 rounded-full bg-brand-charcoal text-brand-gold flex items-center justify-center shadow-2xl">
            <Compass className="w-8 h-8" />
          </div>
        </div>

        {/* Headline */}
        <div className="space-y-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-leather bg-brand-sand/50 px-4 py-1 rounded-full inline-block">
            404 • Uncharted Sanctuary
          </span>

          <h1 className="font-display text-4xl sm:text-6xl font-light text-brand-charcoal leading-[1.15]">
            You have wandered <br />
            <span className="italic font-normal text-brand-leather">beyond the map.</span>
          </h1>

          <p className="text-xs sm:text-sm text-brand-muted max-w-xl mx-auto font-light leading-relaxed">
            The bespoke page, article, or product you are searching for is unavailable or has been relocated within our Jaipur atelier archives.
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto bg-brand-charcoal text-brand-bg px-8 py-4 rounded text-xs font-semibold uppercase tracking-luxury-wide hover:bg-brand-leather transition-all shadow-luxury flex items-center justify-center space-x-2 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/shop"
            className="w-full sm:w-auto bg-brand-sand/60 border border-brand-sand text-brand-charcoal px-8 py-4 rounded text-xs font-semibold uppercase tracking-luxury-wide hover:bg-brand-white transition-all flex items-center justify-center space-x-2"
          >
            <ShoppingBag className="w-4 h-4 text-brand-leather" />
            <span>Explore Handcrafted Catalog</span>
          </Link>
        </div>

        {/* Quick Links Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs pt-8 border-t border-brand-sand/80 max-w-3xl mx-auto text-brand-charcoal">
          <Link href="/shop?category=Bags" className="p-3 bg-brand-white rounded border border-brand-sand/60 hover:border-brand-leather transition-colors flex flex-col items-center space-y-1">
            <ShoppingBag className="w-4 h-4 text-brand-leather" />
            <span className="font-semibold uppercase tracking-wider text-[10px]">Totes & Bags</span>
          </Link>
          <Link href="/shop?category=Travel" className="p-3 bg-brand-white rounded border border-brand-sand/60 hover:border-brand-leather transition-colors flex flex-col items-center space-y-1">
            <Compass className="w-4 h-4 text-brand-leather" />
            <span className="font-semibold uppercase tracking-wider text-[10px]">Travel Duffels</span>
          </Link>
          <Link href="/craftsmanship" className="p-3 bg-brand-white rounded border border-brand-sand/60 hover:border-brand-leather transition-colors flex flex-col items-center space-y-1">
            <Sparkles className="w-4 h-4 text-brand-gold" />
            <span className="font-semibold uppercase tracking-wider text-[10px]">Art of Craft</span>
          </Link>
          <Link href="/stores" className="p-3 bg-brand-white rounded border border-brand-sand/60 hover:border-brand-leather transition-colors flex flex-col items-center space-y-1">
            <MapPin className="w-4 h-4 text-brand-leather" />
            <span className="font-semibold uppercase tracking-wider text-[10px]">Flagship Boutiques</span>
          </Link>
        </div>
      </section>

      {/* Suggested Signature Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 border-t border-brand-sand/60 pt-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-brand-sand pb-4 gap-2">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-luxury-widest text-brand-leather">
              Curated Essentials
            </span>
            <h2 className="font-display text-2xl font-extrabold uppercase text-brand-charcoal">
              Discover Signature Bestsellers
            </h2>
          </div>
          <Link href="/shop" className="text-xs uppercase tracking-wider font-semibold text-brand-leather hover:text-brand-charcoal flex items-center space-x-1">
            <span>View Full Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {suggestedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
