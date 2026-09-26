"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { IMAGES } from "@/lib/images";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="absolute top-full left-0 w-full bg-brand-bg/98 backdrop-blur-xl border-b border-brand-sand shadow-luxury transition-all duration-300 z-50 py-10 px-8"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
        {/* Column 1: Bags */}
        <div className="col-span-3 space-y-4">
          <h4 className="text-xs font-semibold uppercase tracking-luxury-wide text-brand-leather border-b border-brand-sand/60 pb-2">
            Handbags & Carry
          </h4>
          <ul className="space-y-2.5 text-sm font-medium text-brand-charcoal/90">
            <li>
              <Link href="/shop?category=Bags&sub=Tote+Bags" onClick={onClose} className="hover:text-brand-leather transition-colors flex items-center justify-between group">
                <span>Tote Bags</span>
                <span className="text-[10px] text-brand-muted opacity-0 group-hover:opacity-100 transition-opacity">Explore →</span>
              </Link>
            </li>
            <li>
              <Link href="/shop?category=Bags&sub=Sling+Bags" onClick={onClose} className="hover:text-brand-leather transition-colors flex items-center justify-between group">
                <span>Shoulder & Sling Bags</span>
              </Link>
            </li>
            <li>
              <Link href="/shop?category=Bags&sub=Laptop+Bags" onClick={onClose} className="hover:text-brand-leather transition-colors flex items-center justify-between group">
                <span>Laptop Folios & Sleeves</span>
              </Link>
            </li>
            <li>
              <Link href="/shop?category=Bags" onClick={onClose} className="hover:text-brand-leather font-semibold text-brand-leather pt-2 inline-block">
                View All Bags →
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2: Small Goods */}
        <div className="col-span-3 space-y-4">
          <h4 className="text-xs font-semibold uppercase tracking-luxury-wide text-brand-leather border-b border-brand-sand/60 pb-2">
            Small Leather Goods
          </h4>
          <ul className="space-y-2.5 text-sm font-medium text-brand-charcoal/90">
            <li>
              <Link href="/shop?category=Small+Goods&sub=Wallets" onClick={onClose} className="hover:text-brand-leather transition-colors">
                Bifold & Card Wallets
              </Link>
            </li>
            <li>
              <Link href="/shop?category=Travel&sub=Passport+Holders" onClick={onClose} className="hover:text-brand-leather transition-colors">
                Passport & Travel Holders
              </Link>
            </li>
            <li>
              <Link href="/shop?category=Small+Goods" onClick={onClose} className="hover:text-brand-leather transition-colors">
                Belts & Key Accessories
              </Link>
            </li>
            <li>
              <Link href="/shop?category=Small+Goods" onClick={onClose} className="hover:text-brand-leather font-semibold text-brand-leather pt-2 inline-block">
                Explore Small Goods →
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Lifestyle & Travel */}
        <div className="col-span-3 space-y-4">
          <h4 className="text-xs font-semibold uppercase tracking-luxury-wide text-brand-leather border-b border-brand-sand/60 pb-2">
            Voyage & Travel
          </h4>
          <ul className="space-y-2.5 text-sm font-medium text-brand-charcoal/90">
            <li>
              <Link href="/shop?category=Travel&sub=Weekenders" onClick={onClose} className="hover:text-brand-leather transition-colors">
                The Heritage Weekender
              </Link>
            </li>
            <li>
              <Link href="/gifting" onClick={onClose} className="hover:text-brand-leather transition-colors flex items-center space-x-1.5 text-brand-gold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Bespoke Monogramming</span>
              </Link>
            </li>
            <li>
              <Link href="/gifting" onClick={onClose} className="hover:text-brand-leather transition-colors">
                The Art of Luxury Gifting
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Editorial Highlight Box */}
        <div className="col-span-3 relative rounded-lg overflow-hidden bg-brand-sand/40 border border-brand-sand p-4 group">
          <div className="relative h-44 w-full rounded overflow-hidden mb-3">
            <Image
              src={IMAGES.categories.women}
              alt="Editorial Collection"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-brand-bg">
              <span className="text-[10px] tracking-widest uppercase font-semibold text-brand-gold">Campaign 2026</span>
              <h5 className="font-display text-lg font-bold leading-tight">The Desert Collection</h5>
            </div>
          </div>
          <Link
            href="/shop?collection=desert"
            onClick={onClose}
            className="text-xs uppercase tracking-wider font-semibold text-brand-charcoal hover:text-brand-leather flex items-center justify-between"
          >
            <span>Discover Story</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
