"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, ShieldCheck, Truck, Gift } from "lucide-react";
import { ANNOUNCEMENTS } from "@/data/products";

const ICON_MAP = {
  Truck,
  Sparkles,
  ShieldCheck,
  Gift
};

export const AnnouncementBar = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const currentItem = ANNOUNCEMENTS[index];
  const CurrentIcon = ICON_MAP[currentItem.iconName as keyof typeof ICON_MAP] || Sparkles;

  return (
    <div className="bg-brand-charcoal text-brand-bg text-[11px] font-medium uppercase tracking-[0.18em] py-2 px-4 transition-colors duration-500 border-b border-brand-charcoal/30">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="hidden md:flex items-center space-x-6 text-[10px] text-brand-gold">
          <span>JAIPUR • LONDON • DUBAI</span>
        </div>

        <div className="flex-1 flex justify-center items-center text-center space-x-2 transition-all duration-700">
          <CurrentIcon className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
          <span>{ANNOUNCEMENTS[index].text}</span>
        </div>

        <div className="hidden md:flex items-center space-x-4 text-[10px]">
          <a href="/stores" className="hover:text-brand-gold transition-colors">Find a Boutique</a>
          <span className="text-brand-muted">•</span>
          <a href="/story" className="hover:text-brand-gold transition-colors">Our Guarantee</a>
        </div>
      </div>
    </div>
  );
};
