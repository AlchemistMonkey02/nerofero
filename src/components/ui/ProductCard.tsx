"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Sparkles, Check } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, formatPrice, toggleWishlist, isInWishlist } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || "Default");
  const [addedToast, setAddedToast] = useState(false);

  const activeImage = isHovered && product.images[1] ? product.images[1] : product.images[0];
  const isFavorite = isInWishlist(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedColor);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2000);
  };

  return (
    <div
      className="group relative flex flex-col bg-brand-white rounded border border-brand-sand/60 hover:shadow-luxury-hover transition-all duration-500 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Container */}
      <div className="relative aspect-[4/5] w-full bg-[#FAF7F2] overflow-hidden">
        <Link href={`/products/${product.slug}`} className="block w-full h-full">
          <Image
            src={activeImage}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Tag Badge */}
        {product.tag && (
          <span className="absolute top-3 left-3 bg-brand-charcoal text-brand-bg text-[9px] uppercase tracking-luxury-widest px-2.5 py-1 rounded-sm font-semibold z-10 shadow-sm">
            {product.tag}
          </span>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all duration-300 z-10 ${
            isFavorite
              ? "bg-red-50 text-red-600 shadow"
              : "bg-white/80 text-brand-charcoal hover:bg-white hover:text-brand-leather"
          }`}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? "fill-red-600 stroke-red-600" : "stroke-[1.5]"}`} />
        </button>

        {/* Quick Add Overlay Drawer */}
        <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-between gap-2 z-10">
          <button
            onClick={handleQuickAdd}
            className="w-full bg-brand-bg text-brand-charcoal py-2.5 px-4 rounded text-[11px] font-semibold uppercase tracking-luxury-wide hover:bg-brand-leather hover:text-brand-bg transition-colors flex items-center justify-center space-x-1.5 shadow-md"
          >
            {addedToast ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-700" />
                <span>Added to Bag</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Quick Add</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3 bg-white">
        <div>
          <div className="flex justify-between items-start gap-2">
            <Link href={`/products/${product.slug}`}>
              <h3 className="font-display text-base font-bold text-brand-charcoal group-hover:text-brand-leather transition-colors leading-tight">
                {product.name}
              </h3>
            </Link>
            <span className="font-display text-base font-bold text-brand-charcoal whitespace-nowrap">
              {formatPrice(product.price)}
            </span>
          </div>

          <p className="text-xs text-brand-muted mt-1 font-light line-clamp-1">
            {product.subtitle}
          </p>
        </div>

        {/* Color Swatches & Monogram Indicator */}
        <div className="flex items-center justify-between pt-2 border-t border-brand-sand/40 text-[11px]">
          <div className="flex items-center space-x-1.5">
            {product.colors.map((col, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedColor(col.name)}
                title={col.name}
                className={`w-3.5 h-3.5 rounded-full border transition-transform ${
                  selectedColor === col.name ? "scale-125 border-brand-charcoal ring-1 ring-brand-leather" : "border-gray-300 opacity-80"
                }`}
                style={{ backgroundColor: col.hex }}
              />
            ))}
            <span className="text-[10px] text-brand-muted ml-1 font-medium">{product.colors.length} Shade{product.colors.length > 1 ? 's' : ''}</span>
          </div>

          {product.isPersonalizable && (
            <span className="flex items-center space-x-1 text-[10px] text-brand-leather font-medium bg-brand-sand/30 px-1.5 py-0.5 rounded">
              <Sparkles className="w-3 h-3 text-brand-gold" />
              <span>Personalizable</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
