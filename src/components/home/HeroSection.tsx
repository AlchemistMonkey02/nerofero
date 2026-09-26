"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass, Sparkles, Play } from "lucide-react";
import { IMAGES } from "@/lib/images";

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[88vh] flex items-center justify-center overflow-hidden bg-brand-charcoal text-brand-bg">
      {/* Background Image / Video Fallback */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.hero.main}
          alt="AURAA Luxury Leather Journey"
          fill
          priority
          className="object-cover object-center opacity-65 scale-105 animate-pulse-subtle"
        />
        {/* Soft Luxury Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-brand-charcoal/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 py-20">
        
        {/* Top Editorial Label */}
        <div className="inline-flex items-center space-x-3 bg-brand-bg/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-brand-sand/30 shadow-luxury">
          <Compass className="w-3.5 h-3.5 text-brand-gold" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-sand">
            CRAFTED FOR THE JOURNEY • HANDMADE IN JAIPUR
          </span>
        </div>

        {/* Main Serif Headline */}
        <div className="space-y-4">
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light tracking-wide text-brand-bg leading-[1.1]">
            Objects that grow <br />
            <span className="italic font-normal text-brand-gold">more beautiful</span> with time.
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-brand-bg/80 font-light tracking-wide leading-relaxed">
            Merging 18th-century Indian saddlery techniques with minimalist modern design. 
            Full-grain vegetable-tanned leather goods tailored for modern global living.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/shop"
            className="w-full sm:w-auto bg-brand-gold text-brand-charcoal px-8 py-4 rounded text-xs font-semibold uppercase tracking-[0.2em] hover:bg-brand-sand transition-all duration-300 shadow-luxury flex items-center justify-center space-x-3 group"
          >
            <span>Explore Collection</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/craftsmanship"
            className="w-full sm:w-auto bg-brand-bg/10 backdrop-blur-md text-brand-bg border border-brand-sand/40 px-8 py-4 rounded text-xs font-semibold uppercase tracking-[0.2em] hover:bg-brand-bg hover:text-brand-charcoal transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Sparkles className="w-4 h-4 text-brand-gold" />
            <span>Discover The Craft</span>
          </Link>
        </div>

        {/* Floating Atelier Badge Footer */}
        <div className="pt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-3xl mx-auto border-t border-brand-bg/15 text-left text-xs text-brand-bg/70">
          <div>
            <span className="block font-display text-lg font-bold text-brand-gold">100% Full Grain</span>
            <span className="text-[10px] uppercase tracking-wider text-brand-sand/70">Vegetable-Tanned Hide</span>
          </div>
          <div>
            <span className="block font-display text-lg font-bold text-brand-gold">24k Gold Foil</span>
            <span className="text-[10px] uppercase tracking-wider text-brand-sand/70">Bespoke Monogramming</span>
          </div>
          <div className="hidden sm:block">
            <span className="block font-display text-lg font-bold text-brand-gold">Lifetime Service</span>
            <span className="text-[10px] uppercase tracking-wider text-brand-sand/70">Master Artisan Guarantee</span>
          </div>
        </div>

      </div>
    </section>
  );
};
