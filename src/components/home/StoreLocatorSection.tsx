"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Phone, ArrowRight } from "lucide-react";
import { BOUTIQUES } from "@/data/products";

export const StoreLocatorSection = () => {
  const [selectedBoutique, setSelectedBoutique] = useState(0);

  return (
    <section className="py-24 bg-brand-sand/30 border-b border-brand-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-brand-sand/80 pb-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-brand-leather">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em]">
                Flagship Boutiques
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-charcoal uppercase tracking-wide">
              Visit Our Worldwide Sanctuaries
            </h2>
          </div>
          <Link
            href="/stores"
            className="text-xs font-semibold uppercase tracking-luxury-wide text-brand-leather hover:text-brand-charcoal flex items-center space-x-2 mt-4 md:mt-0"
          >
            <span>View All 5 Boutique Locations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Interactive Boutique Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Boutique Buttons List */}
          <div className="lg:col-span-5 space-y-3">
            {BOUTIQUES.map((b, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedBoutique(idx)}
                className={`w-full p-5 rounded-lg text-left transition-all duration-300 border flex flex-col space-y-1.5 ${
                  selectedBoutique === idx
                    ? "bg-brand-white border-brand-leather shadow-luxury ring-1 ring-brand-leather"
                    : "bg-brand-bg/60 border-brand-sand hover:bg-brand-white"
                }`}
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-display text-lg font-bold text-brand-charcoal">
                    {b.city}
                  </h4>
                  {selectedBoutique === idx && (
                    <span className="text-[10px] uppercase font-bold text-brand-gold bg-brand-charcoal px-2 py-0.5 rounded">
                      Active
                    </span>
                  )}
                </div>
                <p className="text-xs text-brand-muted font-light line-clamp-1">{b.address}</p>
              </button>
            ))}
          </div>

          {/* Active Boutique Details Card */}
          <div className="lg:col-span-7 bg-brand-white rounded-lg border border-brand-sand p-6 shadow-luxury space-y-6">
            <div className="relative aspect-video w-full rounded overflow-hidden border border-brand-sand">
              <Image
                src={BOUTIQUES[selectedBoutique].image}
                alt={BOUTIQUES[selectedBoutique].city}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-display text-2xl font-bold text-brand-charcoal">
                  {BOUTIQUES[selectedBoutique].city}
                </h3>
                <p className="text-xs text-brand-muted mt-1">{BOUTIQUES[selectedBoutique].desc}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-brand-charcoal border-t border-brand-sand pt-4">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-brand-leather flex-shrink-0 mt-0.5" />
                  <span>{BOUTIQUES[selectedBoutique].address}</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Clock className="w-4 h-4 text-brand-leather flex-shrink-0 mt-0.5" />
                  <span>{BOUTIQUES[selectedBoutique].hours}</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Phone className="w-4 h-4 text-brand-leather flex-shrink-0 mt-0.5" />
                  <span>{BOUTIQUES[selectedBoutique].phone}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
