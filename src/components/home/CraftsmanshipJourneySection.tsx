"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Hammer, Sparkles, CheckCircle2 } from "lucide-react";
import { CRAFT_STEPS } from "@/data/products";

export const CraftsmanshipJourneySection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-brand-charcoal text-brand-bg relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 text-brand-gold bg-brand-bg/10 px-3.5 py-1 rounded-full border border-brand-gold/30">
            <Hammer className="w-3.5 h-3.5" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
              The Journey of a Bag
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-light text-brand-sand uppercase tracking-wide">
            Every piece begins with <span className="italic font-normal text-brand-gold">human hands.</span>
          </h2>

          <p className="text-xs sm:text-sm text-brand-bg/70 font-light leading-relaxed">
            In an era of high-speed automation, we choose slow craftsmanship. Discover the 5-stage creation sequence inside our Jaipur atelier.
          </p>
        </div>

        {/* Step Indicator Tabs Row */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 border-b border-brand-bg/15 pb-8">
          {CRAFT_STEPS.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-lg text-left transition-all duration-300 border ${
                activeStep === idx
                  ? "bg-brand-gold text-brand-charcoal border-brand-gold shadow-2xl scale-105"
                  : "bg-brand-bg/5 text-brand-bg/80 border-brand-bg/10 hover:border-brand-gold/50"
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className={`font-display text-lg font-bold ${activeStep === idx ? "text-brand-charcoal" : "text-brand-gold"}`}>
                  {step.num}
                </span>
                {activeStep === idx && <CheckCircle2 className="w-4 h-4 text-brand-charcoal" />}
              </div>
              <span className="text-xs font-bold uppercase tracking-wider block">{step.title}</span>
            </button>
          ))}
        </div>

        {/* Active Step Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-brand-darkCard p-8 rounded-xl border border-brand-bg/10 shadow-2xl">
          <div className="lg:col-span-6 relative aspect-video w-full rounded-lg overflow-hidden border border-brand-bg/20">
            <Image
              src={CRAFT_STEPS[activeStep].image}
              alt={CRAFT_STEPS[activeStep].title}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-brand-charcoal/90 text-brand-gold px-3 py-1 rounded text-xs font-display font-bold">
              Stage {CRAFT_STEPS[activeStep].num} / 05
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] font-semibold uppercase tracking-luxury-widest text-brand-gold">
              {CRAFT_STEPS[activeStep].subtitle}
            </span>

            <h3 className="font-display text-3xl font-bold text-brand-sand">
              {CRAFT_STEPS[activeStep].title}
            </h3>

            <p className="text-xs sm:text-sm text-brand-bg/80 leading-relaxed font-light">
              {CRAFT_STEPS[activeStep].desc}
            </p>

            <div className="pt-4 flex items-center justify-between border-t border-brand-bg/10">
              <Link
                href="/craftsmanship"
                className="text-xs uppercase tracking-luxury-wide font-semibold text-brand-gold hover:text-brand-sand flex items-center space-x-2"
              >
                <span>Read Full Craft Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
