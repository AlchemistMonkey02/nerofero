"use client";

import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { LifestyleCategorySection } from "@/components/home/LifestyleCategorySection";
import { SignatureCollectionSection } from "@/components/home/SignatureCollectionSection";
import { EditorialCampaignSection } from "@/components/home/EditorialCampaignSection";
import { CraftsmanshipJourneySection } from "@/components/home/CraftsmanshipJourneySection";
import { MonogramPreviewer } from "@/components/ui/MonogramPreviewer";
import { JournalHighlightsSection } from "@/components/home/JournalHighlightsSection";
import { StoreLocatorSection } from "@/components/home/StoreLocatorSection";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Shop By Lifestyle */}
      <LifestyleCategorySection />

      {/* 3. Signature Products Collection */}
      <SignatureCollectionSection />

      {/* 4. Editorial Campaign Banner */}
      <EditorialCampaignSection />

      {/* 5. Craftsmanship Journey Timeline */}
      <CraftsmanshipJourneySection />

      {/* 6. Interactive Personalization Studio Feature */}
      <section className="py-24 bg-brand-bg border-b border-brand-sand/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-leather">
              Bespoke Personalization Studio
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-charcoal uppercase tracking-wide">
              Make It Yours Before Dispatch
            </h2>
            <p className="text-xs text-brand-muted font-light">
              Try our real-time monogramming tool below. Your initials will be hand-stamped in 24k gold leaf foil or deep blind press by Jaipur artisans.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <MonogramPreviewer />
          </div>
        </div>
      </section>

      {/* 7. Editorial Journal Stories */}
      <JournalHighlightsSection />

      {/* 8. Flagship Store Locator */}
      <StoreLocatorSection />

      {/* 9. Final Call to Action Banner */}
      <section className="py-20 bg-brand-charcoal text-brand-bg text-center space-y-6">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <Sparkles className="w-6 h-6 text-brand-gold mx-auto animate-pulse" />
          <h2 className="font-display text-3xl sm:text-5xl font-light text-brand-sand">
            Ready to begin your journey?
          </h2>
          <p className="text-xs sm:text-sm text-brand-bg/70 font-light max-w-xl mx-auto">
            Discover pieces crafted to accompany you across decades of travel, work, and personal evolution.
          </p>
          <div className="pt-2">
            <Link
              href="/shop"
              className="inline-flex items-center space-x-3 bg-brand-gold text-brand-charcoal px-8 py-4 rounded text-xs font-semibold uppercase tracking-luxury-wide hover:bg-brand-sand transition-all shadow-2xl group"
            >
              <span>Explore Complete Collection</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
