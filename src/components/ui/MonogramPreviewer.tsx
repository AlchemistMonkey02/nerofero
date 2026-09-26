"use client";

import React, { useState } from "react";
import { Sparkles, Check, Info } from "lucide-react";

interface MonogramPreviewerProps {
  onApply?: (initials: string, style: "Gold" | "Blind Emboss" | "Silver") => void;
  initialText?: string;
  initialStyle?: "Gold" | "Blind Emboss" | "Silver";
}

export const MonogramPreviewer: React.FC<MonogramPreviewerProps> = ({
  onApply,
  initialText = "",
  initialStyle = "Gold"
}) => {
  const [initials, setInitials] = useState(initialText);
  const [style, setStyle] = useState<"Gold" | "Blind Emboss" | "Silver">(initialStyle);
  const [isApplied, setIsApplied] = useState(false);

  const handleApply = () => {
    if (onApply) {
      onApply(initials, style);
      setIsApplied(true);
      setTimeout(() => setIsApplied(false), 2500);
    }
  };

  return (
    <div className="bg-brand-sand/30 border border-brand-sand rounded-lg p-6 space-y-6">
      <div className="flex items-center justify-between border-b border-brand-sand pb-4">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-brand-gold animate-pulse" />
          <h4 className="font-display text-lg font-bold text-brand-charcoal uppercase tracking-wider">
            Make It Yours: Monogram Personalization
          </h4>
        </div>
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-leather bg-brand-gold/15 px-2.5 py-1 rounded">
          +₹500
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Real-time Embossed Leather Preview Window */}
        <div className="md:col-span-6 relative aspect-video rounded-md bg-[#5A402D] shadow-inner flex flex-col items-center justify-center p-6 border-2 border-brand-leather/40 overflow-hidden group">
          {/* Leather Grain Texture Background */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60" />

          {/* Stamp Seal Backdrop */}
          <div className="relative z-10 text-center space-y-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-sand/70 font-semibold block">
              Jaipur Atelier Emboss Preview
            </span>

            {/* Embossed Text Rendering */}
            <div className="min-h-[50px] flex items-center justify-center">
              {initials.trim().length > 0 ? (
                <span
                  className={`font-display text-4xl sm:text-5xl font-extrabold tracking-[0.25em] transition-all duration-300 drop-shadow-md ${
                    style === "Gold"
                      ? "text-[#E6C687] [text-shadow:0_1px_2px_rgba(0,0,0,0.8),0_0_10px_rgba(230,198,135,0.4)]"
                      : style === "Silver"
                      ? "text-[#D1D5DB] [text-shadow:0_1px_2px_rgba(0,0,0,0.8),0_0_10px_rgba(209,213,219,0.4)]"
                      : "text-[#3D2B1E] [text-shadow:inset_0_2px_4px_rgba(0,0,0,0.9),0_1px_1px_rgba(255,255,255,0.1)]"
                  }`}
                >
                  {initials.toUpperCase()}
                </span>
              ) : (
                <span className="font-display text-2xl text-brand-sand/40 italic">
                  [ Your Initials ]
                </span>
              )}
            </div>

            <p className="text-[9px] uppercase tracking-widest text-brand-gold/80">
              Hand-pressed with brass heated die
            </p>
          </div>
        </div>

        {/* Input & Controls */}
        <div className="md:col-span-6 space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-brand-charcoal block">
              1. Enter Initials (1-3 Letters)
            </label>
            <input
              type="text"
              maxLength={3}
              placeholder="e.g. A.V."
              value={initials}
              onChange={(e) => setInitials(e.target.value.toUpperCase())}
              className="w-full bg-white border border-brand-sand rounded px-4 py-2.5 text-base font-display tracking-widest text-brand-charcoal font-bold uppercase focus:outline-none focus:border-brand-leather shadow-sm"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-brand-charcoal block">
              2. Select Embossing Finish
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setStyle("Gold")}
                className={`py-2 px-3 text-xs font-semibold rounded border transition-all ${
                  style === "Gold"
                    ? "bg-brand-gold text-brand-charcoal border-brand-gold shadow"
                    : "bg-white text-brand-charcoal border-brand-sand hover:border-brand-leather"
                }`}
              >
                24k Gold Foil
              </button>
              <button
                type="button"
                onClick={() => setStyle("Blind Emboss")}
                className={`py-2 px-3 text-xs font-semibold rounded border transition-all ${
                  style === "Blind Emboss"
                    ? "bg-brand-charcoal text-brand-bg border-brand-charcoal shadow"
                    : "bg-white text-brand-charcoal border-brand-sand hover:border-brand-leather"
                }`}
              >
                Blind Press
              </button>
              <button
                type="button"
                onClick={() => setStyle("Silver")}
                className={`py-2 px-3 text-xs font-semibold rounded border transition-all ${
                  style === "Silver"
                    ? "bg-gray-300 text-brand-charcoal border-gray-400 shadow"
                    : "bg-white text-brand-charcoal border-brand-sand hover:border-brand-leather"
                }`}
              >
                Silver Foil
              </button>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={handleApply}
              disabled={!initials.trim()}
              className="w-full bg-brand-leather text-brand-bg py-3 px-6 rounded text-xs font-semibold uppercase tracking-luxury-wide hover:bg-brand-charcoal transition-colors disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              {isApplied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Personalization Saved</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Apply Monogram (+₹500)</span>
                </>
              )}
            </button>
          </div>

          <p className="text-[10px] text-brand-muted flex items-center space-x-1 pt-1">
            <Info className="w-3 h-3 text-brand-leather flex-shrink-0" />
            <span>Monogrammed custom items add 1 extra business day for hand embossing.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
