"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Heart, Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { MegaMenu } from "./MegaMenu";
import { AnnouncementBar } from "./AnnouncementBar";

export const Header = () => {
  const { cartCount, wishlist, openCart, currency, setCurrency } = useCart();
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Lock body scroll when mobile menu or search is open
  React.useEffect(() => {
    if (isMobileMenuOpen || isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen, isSearchOpen]);

  return (
    <header className="sticky top-0 z-40 w-full bg-brand-bg border-b border-brand-sand/70 transition-all duration-300">
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Left: Mobile Menu Toggle & Currency Selector */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden p-2 text-brand-charcoal hover:text-brand-leather transition-colors rounded-md hover:bg-brand-sand/40"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Currency Selector */}
            <div className="hidden sm:flex items-center space-x-1 text-xs font-semibold uppercase tracking-wider text-brand-charcoal bg-brand-sand/40 px-2.5 py-1 rounded border border-brand-sand">
              <button
                onClick={() => setCurrency("INR")}
                className={`px-1.5 py-0.5 rounded ${currency === "INR" ? "bg-brand-charcoal text-brand-bg" : "text-brand-muted hover:text-brand-charcoal"}`}
              >
                ₹ INR
              </button>
              <span className="text-brand-muted">/</span>
              <button
                onClick={() => setCurrency("USD")}
                className={`px-1.5 py-0.5 rounded ${currency === "USD" ? "bg-brand-charcoal text-brand-bg" : "text-brand-muted hover:text-brand-charcoal"}`}
              >
                $ USD
              </button>
            </div>
          </div>

          {/* Center: Brand Logo */}
          <div className="text-center">
            <Link href="/" className="group inline-block">
              <span className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-brand-charcoal group-hover:text-brand-leather transition-colors">
                AURAA
              </span>
              <span className="block text-[8px] sm:text-[9px] uppercase tracking-[0.25em] sm:tracking-[0.35em] text-brand-leather font-medium mt-0.5">
                Modern Heritage Luxury
              </span>
            </Link>
          </div>

          {/* Right: Quick Actions (Search, Wishlist, Cart) */}
          <div className="flex items-center space-x-2 sm:space-x-6">
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search Catalog"
              className="p-2 text-brand-charcoal hover:text-brand-leather transition-colors flex items-center space-x-1.5 text-xs font-medium"
            >
              <Search className="w-5 h-5 sm:w-4 sm:h-4" />
              <span className="hidden md:inline uppercase tracking-widest text-[11px]">Search</span>
            </button>

            <Link
              href="/shop?wishlist=true"
              aria-label="View Wishlist"
              className="relative p-2 text-brand-charcoal hover:text-brand-leather transition-colors"
            >
              <Heart className="w-5 h-5 stroke-[1.5]" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 bg-brand-leather text-brand-bg text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <button
              onClick={openCart}
              aria-label="Open Shopping Bag"
              className="relative p-2 text-brand-charcoal hover:text-brand-leather transition-colors flex items-center space-x-2"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
              <span className="hidden sm:inline font-display text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                Bag
              </span>
              {cartCount > 0 && (
                <span className="bg-brand-charcoal text-brand-bg text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Desktop Navigation Row */}
        <nav className="hidden lg:flex items-center justify-center space-x-10 py-3 border-t border-brand-sand/50 text-xs font-medium uppercase tracking-[0.18em] text-brand-charcoal relative">
          <div
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            className="h-full flex items-center cursor-pointer py-1 hover:text-brand-leather transition-colors group"
          >
            <Link href="/shop" className="flex items-center space-x-1">
              <span>Shop</span>
              <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
            </Link>
          </div>

          <Link href="/shop?category=Travel" className="hover:text-brand-leather transition-colors py-1">
            Travel
          </Link>
          <Link href="/story" className="hover:text-brand-leather transition-colors py-1">
            Our Story
          </Link>
          <Link href="/craftsmanship" className="hover:text-brand-leather transition-colors py-1 flex items-center space-x-1">
            <Sparkles className="w-3 h-3 text-brand-gold" />
            <span>Craftsmanship</span>
          </Link>
          <Link href="/journal" className="hover:text-brand-leather transition-colors py-1">
            Journal
          </Link>
          <Link href="/gifting" className="hover:text-brand-leather transition-colors py-1">
            Gifting
          </Link>
          <Link href="/stores" className="hover:text-brand-leather transition-colors py-1">
            Boutiques
          </Link>
        </nav>
      </div>

      {/* Mega Menu Dropdown */}
      <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />

      {/* Search Modal Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[110] bg-brand-charcoal/80 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 px-4">
          <div className="bg-brand-bg w-full max-w-2xl rounded-lg p-5 sm:p-6 shadow-2xl space-y-4 border border-brand-sand">
            <div className="flex justify-between items-center border-b border-brand-sand pb-4">
              <div className="flex items-center space-x-3 w-full">
                <Search className="w-5 h-5 text-brand-leather" />
                <input
                  type="text"
                  placeholder="Search Tote Bags, Weekenders, Wallets..."
                  autoFocus
                  className="w-full bg-transparent text-sm sm:text-base font-display focus:outline-none text-brand-charcoal"
                />
              </div>
              <button onClick={() => setIsSearchOpen(false)} className="text-brand-muted hover:text-brand-charcoal p-1">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-brand-muted font-semibold">Popular Searches:</span>
              <div className="flex flex-wrap gap-2 text-xs">
                <Link href="/shop?search=Tote" onClick={() => setIsSearchOpen(false)} className="px-3 py-1.5 bg-brand-sand/50 rounded-full hover:bg-brand-leather hover:text-white transition-colors">
                  The Nomad Tote
                </Link>
                <Link href="/shop?search=Weekender" onClick={() => setIsSearchOpen(false)} className="px-3 py-1.5 bg-brand-sand/50 rounded-full hover:bg-brand-leather hover:text-white transition-colors">
                  Heritage Weekender
                </Link>
                <Link href="/shop?search=Passport" onClick={() => setIsSearchOpen(false)} className="px-3 py-1.5 bg-brand-sand/50 rounded-full hover:bg-brand-leather hover:text-white transition-colors">
                  Passport Holder
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Fullscreen Opaque Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] bg-[#F5F1EA] w-screen h-screen min-h-[100dvh] flex flex-col p-6 space-y-6 overflow-y-auto shadow-2xl">
          {/* Drawer Header */}
          <div className="flex justify-between items-center border-b border-brand-sand/80 pb-4">
            <div>
              <span className="font-display text-xl font-bold uppercase tracking-widest text-brand-charcoal">
                Navigation
              </span>
              <span className="block text-[9px] uppercase tracking-[0.2em] text-brand-leather font-medium">
                AURAA • Jaipur Atelier
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-brand-charcoal hover:bg-brand-sand/50 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Currency Toggle in Mobile Drawer */}
          <div className="flex items-center justify-between bg-brand-sand/40 p-3 rounded border border-brand-sand text-xs">
            <span className="font-semibold uppercase tracking-wider text-brand-muted text-[10px]">Select Currency:</span>
            <div className="flex items-center space-x-1 font-semibold">
              <button
                onClick={() => setCurrency("INR")}
                className={`px-3 py-1 rounded transition-colors ${currency === "INR" ? "bg-brand-charcoal text-brand-bg" : "text-brand-charcoal hover:bg-brand-sand"}`}
              >
                ₹ INR
              </button>
              <button
                onClick={() => setCurrency("USD")}
                className={`px-3 py-1 rounded transition-colors ${currency === "USD" ? "bg-brand-charcoal text-brand-bg" : "text-brand-charcoal hover:bg-brand-sand"}`}
              >
                $ USD
              </button>
            </div>
          </div>

          {/* Mobile Navigation Items */}
          <nav className="flex-1 space-y-2 py-2">
            <Link
              href="/shop"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 px-4 rounded-md font-display text-xl uppercase tracking-wider text-brand-charcoal hover:bg-brand-sand/50 hover:text-brand-leather transition-colors border-b border-brand-sand/40"
            >
              Shop All Products
            </Link>

            <Link
              href="/shop?category=Bags"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2.5 px-6 font-sans text-sm text-brand-charcoal/80 hover:text-brand-leather transition-colors"
            >
              • Handbags & Totes
            </Link>
            <Link
              href="/shop?category=Travel"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2.5 px-6 font-sans text-sm text-brand-charcoal/80 hover:text-brand-leather transition-colors"
            >
              • Voyage & Travel Weekenders
            </Link>
            <Link
              href="/shop?category=Small+Goods"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2.5 px-6 font-sans text-sm text-brand-charcoal/80 hover:text-brand-leather transition-colors border-b border-brand-sand/40 pb-3"
            >
              • Small Leather Goods
            </Link>

            <Link
              href="/story"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 px-4 rounded-md font-display text-xl uppercase tracking-wider text-brand-charcoal hover:bg-brand-sand/50 hover:text-brand-leather transition-colors border-b border-brand-sand/40"
            >
              Our Story & Philosophy
            </Link>
            <Link
              href="/craftsmanship"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 px-4 rounded-md font-display text-xl uppercase tracking-wider text-brand-charcoal hover:bg-brand-sand/50 hover:text-brand-leather transition-colors border-b border-brand-sand/40 flex items-center justify-between"
            >
              <span>Art of Craftsmanship</span>
              <Sparkles className="w-4 h-4 text-brand-gold" />
            </Link>
            <Link
              href="/journal"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 px-4 rounded-md font-display text-xl uppercase tracking-wider text-brand-charcoal hover:bg-brand-sand/50 hover:text-brand-leather transition-colors border-b border-brand-sand/40"
            >
              Editorial Journal
            </Link>
            <Link
              href="/gifting"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 px-4 rounded-md font-display text-xl uppercase tracking-wider text-brand-charcoal hover:bg-brand-sand/50 hover:text-brand-leather transition-colors border-b border-brand-sand/40"
            >
              Bespoke Gifting & Monogram
            </Link>
            <Link
              href="/stores"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 px-4 rounded-md font-display text-xl uppercase tracking-wider text-brand-charcoal hover:bg-brand-sand/50 hover:text-brand-leather transition-colors"
            >
              Flagship Boutiques
            </Link>
          </nav>

          {/* Mobile Drawer Bottom Info */}
          <div className="pt-4 border-t border-brand-sand text-xs text-brand-muted space-y-1">
            <p className="font-semibold text-brand-leather uppercase tracking-wider">Complimentary Shipping Across India</p>
            <p className="text-[10px]">Express Dispatch from Jaipur • 24k Gold Monogramming</p>
          </div>
        </div>
      )}
    </header>
  );
};
