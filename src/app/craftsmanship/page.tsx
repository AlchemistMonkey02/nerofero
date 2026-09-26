"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Hammer, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { IMAGES } from "@/lib/images";
import { CraftsmanshipJourneySection } from "@/components/home/CraftsmanshipJourneySection";

export default function CraftsmanshipPage() {
  return (
    <div className="py-16 bg-brand-bg space-y-20">
      
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 text-center space-y-6">
        <div className="inline-flex items-center space-x-2 text-brand-gold bg-brand-charcoal px-4 py-1.5 rounded-full text-brand-bg">
          <Hammer className="w-3.5 h-3.5 text-brand-gold" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em]">
            Jaipur Atelier Heritage
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-light text-brand-charcoal leading-[1.15]">
          MADE BY HAND. <br />
          <span className="italic font-normal text-brand-leather">MADE TO LAST.</span>
        </h1>

        <p className="text-sm sm:text-base text-brand-muted max-w-2xl mx-auto font-light leading-relaxed">
          Every piece carries the subtle marks of human hands that shaped it. Explore our zero-compromise materials, saddlery stitching techniques, and organic vegetable-tanning process.
        </p>
      </section>

      {/* Material Comparison Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-brand-white p-8 rounded-xl border border-brand-sand shadow-luxury">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-luxury-widest text-brand-leather font-bold">
              Material Excellence
            </span>
            <h2 className="font-display text-3xl font-extrabold text-brand-charcoal">
              Full-Grain Hide vs Mass Chrome Leather
            </h2>
            <p className="text-xs text-brand-muted font-light leading-relaxed">
              Most fast-fashion brands use chrome-tanned plastic-coated leather that peels after 12 months. We exclusively use full-grain vegetable-tanned hide processed with natural mimosa and chestnut barks.
            </p>
            <ul className="space-y-2 text-xs text-brand-charcoal font-medium">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Absorbs natural oils to develop a rich golden amber patina</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Hand-stitched with double waxed linen thread</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Solid cast antique brass hardware that never corrodes</span>
              </li>
            </ul>
          </div>

          <div className="relative aspect-square w-full rounded-lg overflow-hidden border border-brand-sand">
            <Image
              src={IMAGES.craft.selection}
              alt="Full Grain Leather Texture"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 5-Step Process Timeline */}
      <CraftsmanshipJourneySection />

      {/* CTA */}
      <section className="text-center py-12">
        <Link
          href="/shop"
          className="inline-flex items-center space-x-3 bg-brand-charcoal text-brand-bg px-8 py-4 rounded text-xs font-semibold uppercase tracking-luxury-wide hover:bg-brand-leather transition-colors shadow-luxury group"
        >
          <span>Explore Products Crafted by Hand</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>

    </div>
  );
}
