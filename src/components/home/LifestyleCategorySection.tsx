"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/data/products";

export const LifestyleCategorySection = () => {
  return (
    <section className="py-24 bg-brand-bg border-b border-brand-sand/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-brand-sand/80 pb-6">
          <div className="space-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-leather">
              Discover Your World
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-charcoal uppercase tracking-wide">
              Shop By Lifestyle & Category
            </h2>
          </div>
          <p className="text-xs text-brand-muted max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            Architectural silhouettes designed for daily urban commutes, global expeditions, and quiet personal desk rituals.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <Link
              key={idx}
              href={`/shop?category=${encodeURIComponent(cat.name)}`}
              className="group relative aspect-[3/4] w-full rounded-lg overflow-hidden bg-brand-sand border border-brand-sand shadow-luxury hover:shadow-2xl transition-all duration-700 flex flex-col justify-end p-6"
            >
              {/* Category Photography */}
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-108"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/30 to-transparent transition-opacity duration-500 group-hover:opacity-95" />

              {/* Content Box */}
              <div className="relative z-10 space-y-2 text-brand-bg">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-luxury-widest text-brand-gold font-semibold">
                    {cat.count}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-brand-bg/10 backdrop-blur-md flex items-center justify-center text-brand-sand group-hover:bg-brand-gold group-hover:text-brand-charcoal transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold uppercase tracking-wide leading-tight">
                  {cat.name}
                </h3>

                <p className="text-xs text-brand-sand/80 font-light opacity-90 group-hover:opacity-100 transition-opacity">
                  {cat.desc}
                </p>

                <div className="pt-2 border-t border-brand-sand/20">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-gold flex items-center space-x-1">
                    <span>Explore Collection</span>
                    <span>→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
