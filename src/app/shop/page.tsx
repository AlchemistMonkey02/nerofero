"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCTS, Product } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { Filter, SlidersHorizontal, RefreshCw, Sparkles, Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const initialSearch = searchParams.get("search") || "";
  const isWishlistMode = searchParams.get("wishlist") === "true";

  const { wishlist } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedGender, setSelectedGender] = useState<string>("All");
  const [selectedSort, setSelectedSort] = useState<string>("featured");
  const [maxPrice, setMaxPrice] = useState<number>(30000);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Wishlist Filter Mode
      if (isWishlistMode && !wishlist.includes(product.id)) {
        return false;
      }

      // Category Filter
      if (selectedCategory !== "All" && product.category !== selectedCategory) {
        return false;
      }

      // Gender Filter
      if (selectedGender !== "All" && product.gender !== selectedGender && product.gender !== "Unisex") {
        return false;
      }

      // Price Filter
      if (product.price > maxPrice) {
        return false;
      }

      // Search Query Filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesSub = product.subtitle.toLowerCase().includes(query);
        const matchesCat = product.category.toLowerCase().includes(query);
        if (!matchesName && !matchesSub && !matchesCat) return false;
      }

      return true;
    }).sort((a, b) => {
      if (selectedSort === "price-low") return a.price - b.price;
      if (selectedSort === "price-high") return b.price - a.price;
      if (selectedSort === "rating") return b.rating - a.rating;
      return 0; // featured default
    });
  }, [selectedCategory, selectedGender, selectedSort, maxPrice, searchQuery, isWishlistMode, wishlist]);

  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedGender("All");
    setSelectedSort("featured");
    setMaxPrice(30000);
    setSearchQuery("");
  };

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  return (
    <div className="py-6 sm:py-12 bg-brand-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Page Banner Header */}
        <div className="border-b border-brand-sand/80 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-leather">
              {isWishlistMode ? "Saved Favorites" : "Handcrafted Catalog"}
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-brand-charcoal uppercase tracking-wide">
              {isWishlistMode ? "Your Wishlist Collection" : "Explore All Products"}
            </h1>
          </div>
          <p className="text-xs text-brand-muted max-w-md font-light">
            {isWishlistMode
              ? `You have saved ${wishlist.length} item${wishlist.length !== 1 ? 's' : ''} to your personal curation.`
              : "Full-grain saddle leather bags, weekender duffels, and small accessories. Free shipping on orders over ₹5,000."}
          </p>
        </div>

        {/* Mobile Filter Toggle Button */}
        <div className="lg:hidden flex items-center justify-between bg-brand-white p-4 rounded-lg border border-brand-sand shadow-sm">
          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-charcoal"
          >
            <Filter className="w-4 h-4 text-brand-leather" />
            <span>{isMobileFilterOpen ? "Hide Filters" : "Filter & Refine Collection"}</span>
          </button>
          <span className="text-xs text-brand-muted font-semibold">{filteredProducts.length} Items</span>
        </div>

        {/* Main Catalog Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Filter Sidebar (Collapsible on Mobile, Permanent on Desktop) */}
          <aside className={`lg:col-span-3 space-y-6 bg-brand-white p-6 rounded-lg border border-brand-sand shadow-luxury h-fit ${
            isMobileFilterOpen ? "block" : "hidden lg:block"
          }`}>
            <div className="flex justify-between items-center border-b border-brand-sand pb-4">
              <div className="flex items-center space-x-2 text-brand-charcoal font-display font-bold uppercase text-sm">
                <Filter className="w-4 h-4 text-brand-leather" />
                <span>Filter Collection</span>
              </div>
              <button
                onClick={resetFilters}
                className="text-[10px] text-brand-muted hover:text-brand-leather flex items-center space-x-1 uppercase tracking-wider"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            {/* Category Filter */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-leather">Category</h4>
              <div className="space-y-1 text-xs">
                {["All", "Bags", "Travel", "Small Goods", "Accessories"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-3 py-2 rounded transition-colors flex justify-between items-center ${
                      selectedCategory === cat
                        ? "bg-brand-sand text-brand-charcoal font-bold"
                        : "text-brand-muted hover:bg-brand-sand/30 hover:text-brand-charcoal"
                    }`}
                  >
                    <span>{cat}</span>
                    <span className="text-[10px] opacity-60">
                      {cat === "All"
                        ? PRODUCTS.length
                        : PRODUCTS.filter((p) => p.category === cat).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Gender Filter */}
            <div className="space-y-3 pt-4 border-t border-brand-sand">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-leather">Style & Gender</h4>
              <div className="grid grid-cols-2 gap-1.5 text-xs">
                {["All", "Women", "Men", "Unisex"].map((gen) => (
                  <button
                    key={gen}
                    onClick={() => setSelectedGender(gen)}
                    className={`py-1.5 px-2 rounded border text-center transition-all ${
                      selectedGender === gen
                        ? "bg-brand-charcoal text-brand-bg border-brand-charcoal font-bold"
                        : "bg-white text-brand-muted border-brand-sand hover:border-brand-leather"
                    }`}
                  >
                    {gen}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="space-y-3 pt-4 border-t border-brand-sand">
              <div className="flex justify-between items-center text-xs">
                <h4 className="font-semibold uppercase tracking-wider text-brand-leather">Max Price</h4>
                <span className="font-bold font-display text-brand-charcoal">₹{maxPrice.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min={3000}
                max={30000}
                step={500}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-brand-leather cursor-pointer"
              />
            </div>
          </aside>

          {/* Right Product Grid Area */}
          <main className="lg:col-span-9 space-y-6">
            
            {/* Top Toolbar */}
            <div className="bg-brand-white p-4 rounded-lg border border-brand-sand flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
              <div className="flex items-center space-x-2 text-brand-muted font-medium">
                <SlidersHorizontal className="w-4 h-4 text-brand-leather" />
                <span>Showing <strong className="text-brand-charcoal">{filteredProducts.length}</strong> Products</span>
                {(selectedCategory !== "All" || searchQuery) && (
                  <span className="bg-brand-gold/15 text-brand-leather px-2 py-0.5 rounded font-semibold text-[10px]">
                    Filtered
                  </span>
                )}
              </div>

              {/* Sorting Selection */}
              <div className="flex items-center space-x-2">
                <span className="text-brand-muted uppercase tracking-wider text-[10px] font-semibold">Sort By:</span>
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="bg-brand-bg border border-brand-sand rounded px-3 py-1.5 text-xs text-brand-charcoal font-semibold focus:outline-none focus:border-brand-leather cursor-pointer"
                >
                  <option value="featured">Featured Collection</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="bg-brand-white p-12 rounded-lg border border-brand-sand text-center space-y-4">
                <Heart className="w-12 h-12 text-brand-muted mx-auto stroke-1" />
                <h3 className="font-display text-xl font-bold text-brand-charcoal">No products match your criteria</h3>
                <p className="text-xs text-brand-muted max-w-sm mx-auto">
                  Try clearing your filter parameters or selecting another category.
                </p>
                <button
                  onClick={resetFilters}
                  className="bg-brand-charcoal text-brand-bg px-6 py-2.5 rounded text-xs font-semibold uppercase tracking-wider hover:bg-brand-leather transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>

        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="py-24 text-center">Loading Shop...</div>}>
      <ShopContent />
    </Suspense>
  );
}
