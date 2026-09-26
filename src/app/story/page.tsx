"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Compass, Sparkles, ShieldCheck, Heart, ArrowRight } from "lucide-react";
import { IMAGES } from "@/lib/images";

export default function StoryPage() {
  return (
    <div className="py-16 bg-brand-bg space-y-20">
      
      {/* Editorial Hero */}
      <section className="max-w-5xl mx-auto px-4 text-center space-y-6">
        <div className="inline-flex items-center space-x-2 text-brand-leather bg-brand-sand/50 px-4 py-1.5 rounded-full">
          <Compass className="w-3.5 h-3.5 text-brand-gold" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em]">
            Brand Manifesto & Roots
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-light text-brand-charcoal leading-[1.15]">
          Born in India. <br />
          <span className="italic font-normal text-brand-leather">Designed for global journeys.</span>
        </h1>

        <p className="text-sm sm:text-base text-brand-muted max-w-2xl mx-auto font-light leading-relaxed">
          AURAA was founded on a singular conviction: luxury is not loud logos or seasonal trends, but quiet objects crafted by hand that gain character with every passing mile.
        </p>
      </section>

      {/* Large Atelier Banner Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[21/9] w-full rounded-xl overflow-hidden shadow-2xl border border-brand-sand">
          <Image
            src={IMAGES.craft.workshop}
            alt="Jaipur Leather Workshop"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-brand-bg flex justify-between items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-luxury-widest text-brand-gold">
                Jaipur Workshop, Rajasthan
              </span>
              <h3 className="font-display text-2xl font-bold">Where Ancestral Saddlery Meets Modern Proportion</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-leather">Our Philosophy</span>
          <h2 className="font-display text-3xl font-extrabold text-brand-charcoal uppercase">The Three Principles of AURAA</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-brand-white p-8 rounded-lg border border-brand-sand space-y-4 shadow-luxury">
            <Sparkles className="w-8 h-8 text-brand-gold" />
            <h3 className="font-display text-xl font-bold text-brand-charcoal">01. Quiet Confidence</h3>
            <p className="text-xs text-brand-muted font-light leading-relaxed">
              We reject ostentatious logos. Our identity is revealed through pristine saddlery stitching, heavy brass hardware, and the unmistakable feel of full-grain saddle hide.
            </p>
          </div>

          <div className="bg-brand-white p-8 rounded-lg border border-brand-sand space-y-4 shadow-luxury">
            <Heart className="w-8 h-8 text-brand-leather" />
            <h3 className="font-display text-xl font-bold text-brand-charcoal">02. Artisan Dignity</h3>
            <p className="text-xs text-brand-muted font-light leading-relaxed">
              Every bag is crafted under one roof in Jaipur by master leather artisans earning above-fair wages, provided with healthcare and healthcare for their families.
            </p>
          </div>

          <div className="bg-brand-white p-8 rounded-lg border border-brand-sand space-y-4 shadow-luxury">
            <ShieldCheck className="w-8 h-8 text-emerald-700" />
            <h3 className="font-display text-xl font-bold text-brand-charcoal">03. Zero-Waste Longevity</h3>
            <p className="text-xs text-brand-muted font-light leading-relaxed">
              Using organic vegetable-tanned hides and lifetime structural repair service, our objects are built to be passed down through generations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12">
        <Link
          href="/craftsmanship"
          className="inline-flex items-center space-x-3 bg-brand-charcoal text-brand-bg px-8 py-4 rounded text-xs font-semibold uppercase tracking-luxury-wide hover:bg-brand-leather transition-colors shadow-luxury group"
        >
          <span>Discover The Art of Craft</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>

    </div>
  );
}
