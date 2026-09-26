"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { PRODUCTS, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { MonogramPreviewer } from "@/components/ui/MonogramPreviewer";
import { ProductCard } from "@/components/ui/ProductCard";
import { Heart, ShoppingBag, ShieldCheck, Truck, RefreshCw, Sparkles, ChevronDown, ChevronUp, Star, ArrowRight } from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const product: Product | undefined = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];

  const { addToCart, formatPrice, toggleWishlist, isInWishlist } = useCart();
  const [selectedImage, setSelectedImage] = useState<string>(product.images[0]);
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]?.name || "Heritage Tan");
  const [monogramText, setMonogramText] = useState<string>("");
  const [monogramStyle, setMonogramStyle] = useState<"Gold" | "Blind Emboss" | "Silver">("Gold");
  const [activeAccordion, setActiveAccordion] = useState<string | null>("craft");
  const [addedToast, setAddedToast] = useState(false);

  const isFavorite = isInWishlist(product.id);

  const handleColorChange = (colName: string, colImage: string) => {
    setSelectedColor(colName);
    setSelectedImage(colImage);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedColor, monogramText.trim() || undefined, monogramStyle);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="py-12 bg-brand-bg min-h-screen space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb Navigation */}
        <div className="text-xs text-brand-muted space-x-2">
          <Link href="/" className="hover:text-brand-leather">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-brand-leather">Shop</Link>
          <span>/</span>
          <Link href={`/shop?category=${product.category}`} className="hover:text-brand-leather">{product.category}</Link>
          <span>/</span>
          <span className="text-brand-charcoal font-semibold">{product.name}</span>
        </div>

        {/* Main PDP Grid (Left Gallery, Right Purchase Info) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Gallery Stack */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Active Image Box */}
            <div className="relative aspect-[4/5] w-full rounded-lg bg-brand-white border border-brand-sand overflow-hidden shadow-luxury">
              <Image
                src={selectedImage}
                alt={product.name}
                fill
                priority
                className="object-cover"
              />
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md shadow-md transition-all ${
                  isFavorite ? "bg-red-50 text-red-600" : "bg-white/80 text-brand-charcoal hover:bg-white"
                }`}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? "fill-red-600" : ""}`} />
              </button>
            </div>

            {/* Thumbnail Carousel Row */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative aspect-square rounded border-2 overflow-hidden transition-all ${
                    selectedImage === img ? "border-brand-leather scale-105 shadow" : "border-brand-sand/60 opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt={`${product.name} View ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Purchase Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Title & Rating */}
            <div className="border-b border-brand-sand pb-4 space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-leather">
                    {product.subCategory} • {product.gender}
                  </span>
                  <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-charcoal">
                    {product.name}
                  </h1>
                </div>
                <div className="text-right">
                  <span className="font-display text-2xl font-bold text-brand-charcoal">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="block text-xs text-brand-muted line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-2 text-xs">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                  ))}
                </div>
                <span className="font-bold text-brand-charcoal">{product.rating}</span>
                <span className="text-brand-muted">({product.reviewsCount} Artisan Reviews)</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
              {product.description}
            </p>

            {/* Color Swatch Selection */}
            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold uppercase tracking-wider text-brand-charcoal">
                  Selected Shade: <strong className="text-brand-leather">{selectedColor}</strong>
                </span>
              </div>
              <div className="flex space-x-3">
                {product.colors.map((col, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleColorChange(col.name, col.image)}
                    className={`flex items-center space-x-2 p-2 rounded-md border text-xs transition-all ${
                      selectedColor === col.name
                        ? "border-brand-leather bg-brand-white ring-1 ring-brand-leather font-bold"
                        : "border-brand-sand bg-brand-sand/30 text-brand-muted hover:border-brand-leather"
                    }`}
                  >
                    <span className="w-4 h-4 rounded-full border border-gray-400" style={{ backgroundColor: col.hex }} />
                    <span>{col.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Monogram Personalization Section */}
            {product.isPersonalizable && (
              <div className="pt-2">
                <MonogramPreviewer
                  initialText={monogramText}
                  initialStyle={monogramStyle}
                  onApply={(text, st) => {
                    setMonogramText(text);
                    setMonogramStyle(st);
                  }}
                />
              </div>
            )}

            {/* Add to Bag CTA */}
            <div className="space-y-3 pt-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-brand-charcoal text-brand-bg py-4 px-8 rounded text-xs font-semibold uppercase tracking-luxury-wide hover:bg-brand-leather transition-all shadow-luxury flex items-center justify-center space-x-3 group"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>
                  {addedToast ? "Added to Your Bag!" : `Add to Bag • ${formatPrice(product.price + (monogramText ? 500 : 0))}`}
                </span>
              </button>

              <p className="text-[10px] text-center text-brand-muted font-light">
                Complimentary worldwide shipping & 14-day exchange guarantee included.
              </p>
            </div>

            {/* Accordion Specs */}
            <div className="border-t border-brand-sand pt-4 space-y-2 text-xs">
              
              {/* Accordion Item 1: Craftsmanship Story */}
              <div className="border border-brand-sand rounded overflow-hidden">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === "craft" ? null : "craft")}
                  className="w-full p-3.5 bg-brand-white text-left font-display font-bold uppercase tracking-wider text-brand-charcoal flex justify-between items-center"
                >
                  <span>Artisan Craft & Story</span>
                  {activeAccordion === "craft" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {activeAccordion === "craft" && (
                  <div className="p-4 bg-brand-sand/20 text-brand-muted leading-relaxed font-light border-t border-brand-sand/60">
                    {product.craftStory}
                  </div>
                )}
              </div>

              {/* Accordion Item 2: Dimensions & Weight */}
              <div className="border border-brand-sand rounded overflow-hidden">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === "specs" ? null : "specs")}
                  className="w-full p-3.5 bg-brand-white text-left font-display font-bold uppercase tracking-wider text-brand-charcoal flex justify-between items-center"
                >
                  <span>Dimensions & Hardware Specs</span>
                  {activeAccordion === "specs" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {activeAccordion === "specs" && (
                  <div className="p-4 bg-brand-sand/20 text-brand-muted space-y-2 border-t border-brand-sand/60">
                    <p><strong>Dimensions:</strong> {product.dimensions}</p>
                    <p><strong>Material:</strong> {product.material}</p>
                    <p><strong>Hardware:</strong> {product.hardware}</p>
                    <p><strong>Weight:</strong> {product.weight}</p>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

        {/* Journey of This Bag (Horizontal Process) */}
        {product.journeySteps && product.journeySteps.length > 0 && (
          <div className="py-12 bg-brand-white rounded-xl border border-brand-sand p-8 space-y-8 shadow-luxury">
            <div className="text-center space-y-2 max-w-xl mx-auto">
              <span className="text-[10px] uppercase tracking-luxury-widest text-brand-leather font-bold">
                Jaipur Workshop Creation Flow
              </span>
              <h3 className="font-display text-2xl font-bold uppercase text-brand-charcoal">
                The Journey of {product.name}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {product.journeySteps.map((j, i) => (
                <div key={i} className="p-4 bg-brand-bg rounded border border-brand-sand space-y-2">
                  <span className="font-display text-xl font-bold text-brand-leather">{j.step}</span>
                  <h4 className="font-display text-base font-bold text-brand-charcoal">{j.title}</h4>
                  <p className="text-[11px] text-brand-muted font-light">{j.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Cross-sell Products */}
        <div className="space-y-6">
          <div className="flex justify-between items-end border-b border-brand-sand pb-4">
            <h3 className="font-display text-2xl font-bold uppercase text-brand-charcoal">
              Complete The Look
            </h3>
            <Link href="/shop" className="text-xs uppercase tracking-wider font-semibold text-brand-leather hover:text-brand-charcoal">
              View All Products →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
