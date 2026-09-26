"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/data/products";

export interface CartItem {
  product: Product;
  selectedColor: string;
  monogramText?: string;
  monogramStyle?: "Gold" | "Blind Emboss" | "Silver";
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  wishlist: string[];
  isCartOpen: boolean;
  currency: "INR" | "USD";
  currencySymbol: string;
  setCurrency: (curr: "INR" | "USD") => void;
  formatPrice: (amountInINR: number) => string;
  addToCart: (product: Product, selectedColor: string, monogramText?: string, monogramStyle?: "Gold" | "Blind Emboss" | "Silver") => void;
  removeFromCart: (index: number) => void;
  updateQuantity: (index: number, quantity: number) => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  openCart: () => void;
  closeCart: () => void;
  cartSubtotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  // Load cart and wishlist from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("auraa_cart");
      if (savedCart) setCart(JSON.parse(savedCart));
      const savedWishlist = localStorage.getItem("auraa_wishlist");
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("auraa_cart", JSON.stringify(cart));
      localStorage.setItem("auraa_wishlist", JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [cart, wishlist]);

  const currencySymbol = currency === "INR" ? "₹" : "$";

  const formatPrice = (amountInINR: number) => {
    if (currency === "USD") {
      const usdAmount = Math.round(amountInINR / 83.5);
      return `$${usdAmount.toLocaleString('en-US')}`;
    }
    return `₹${amountInINR.toLocaleString('en-IN')}`;
  };

  const addToCart = (
    product: Product,
    selectedColor: string,
    monogramText?: string,
    monogramStyle: "Gold" | "Blind Emboss" | "Silver" = "Gold"
  ) => {
    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedColor === selectedColor && item.monogramText === monogramText
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      }

      return [
        ...prev,
        {
          product,
          selectedColor,
          monogramText,
          monogramStyle,
          quantity: 1
        }
      ];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const updateQuantity = (index: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(index);
      return;
    }
    setCart((prev) => {
      const updated = [...prev];
      updated[index].quantity = quantity;
      return updated;
    });
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const cartSubtotal = cart.reduce((acc, item) => {
    const monogramCost = item.monogramText ? 500 : 0;
    return acc + (item.product.price + monogramCost) * item.quantity;
  }, 0);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        isCartOpen,
        currency,
        currencySymbol,
        setCurrency,
        formatPrice,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleWishlist,
        isInWishlist,
        openCart,
        closeCart,
        cartSubtotal,
        cartCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
