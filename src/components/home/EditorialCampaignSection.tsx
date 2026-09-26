"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass } from "lucide-react";
import { IMAGES } from "@/lib/images";

export const EditorialCampaignSection = () => {
  return (
    <section className="relative w-full py-28 bg-brand-sand/40 border-b border-brand-sand overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Editorial Photography Stack */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-2xl border border-brand-sand">
              <Image
                src={IMAGES.hero.travelHero}
                alt="Designed to Travel Editorial"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-brand-bg">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-gold">
                  Voyage Edition 2026
                </span>
                <p className="font-display text-xl font-bold">The Heritage Weekender in Saddle Tan</p>
              </div>
            </div>

            {/* Overlapping Secondary Detail Card */}
            <div className="hidden sm:block absolute -bottom-10 -right-6 w-56 aspect-square rounded-md overflow-hidden shadow-luxury border-2 border-brand-bg">
              <Image
                src={IMAGES.products.nomadTote.detail2}
                alt="Leather Craft Detail"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Text & Story Content */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 text-brand-leather">
              <Compass className="w-4 h-4 text-brand-gold" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em]">
                Editorial Story
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-light text-brand-charcoal leading-[1.15]">
              Designed for the journey, <br />
              <span className="italic font-normal text-brand-leather">built to endure.</span>
            </h2>

            <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
              True luxury does not fear passage of time. From early morning airport departures to quiet weekends in Rajasthan, our travel weekenders absorb every mile, transforming friction into character.
            </p>

            <div className="p-4 bg-brand-bg rounded border border-brand-sand space-y-1">
              <span className="text-[10px] uppercase tracking-wider text-brand-gold font-bold">Artisan Note:</span>
              <p className="text-xs text-brand-charcoal font-serif italic">
                &quot;We hand-wax each canvas panel three times using organic beeswax and jojoba oil to ensure moisture rolls off like water on lotus leaves.&quot;
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/shop?category=Travel"
                className="inline-flex items-center space-x-3 bg-brand-charcoal text-brand-bg px-8 py-4 rounded text-xs font-semibold uppercase tracking-luxury-wide hover:bg-brand-leather transition-colors shadow-luxury group"
              >
                <span>Shop Travel Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
