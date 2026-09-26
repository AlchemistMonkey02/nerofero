"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";

export const SignatureCollectionSection = () => {
  const [activeTab, setActiveTab] = useState<"All" | "Bestseller" | "Travel" | "Small Goods">("All");

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeTab === "All") return true;
    if (activeTab === "Bestseller") return p.tag === "Bestseller";
    if (activeTab === "Travel") return p.category === "Travel";
    if (activeTab === "Small Goods") return p.category === "Small Goods";
    return true;
  });

  return (
    <section className="py-24 bg-brand-white border-b border-brand-sand/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-sand/60 pb-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-brand-leather">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em]">
                The Signature Series
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-charcoal uppercase tracking-wide">
              Timeless Crafted Essentials
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-brand-bg p-1.5 rounded-md border border-brand-sand">
            {(["All", "Bestseller", "Travel", "Small Goods"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-all ${
                  activeTab === tab
                    ? "bg-brand-charcoal text-brand-bg shadow"
                    : "text-brand-muted hover:text-brand-charcoal"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Footer Link */}
        <div className="text-center pt-6">
          <Link
            href="/shop"
            className="inline-flex items-center space-x-3 bg-brand-sand/40 border border-brand-sand text-brand-charcoal px-8 py-4 rounded text-xs font-semibold uppercase tracking-luxury-wide hover:bg-brand-leather hover:text-white transition-all duration-300 group shadow-sm"
          >
            <span>View Complete Catalog ({PRODUCTS.length} Items)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};
