import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#F5F1EA",       // Main background (Ivory)
          sand: "#E7DED1",     // Secondary sections (Warm beige)
          charcoal: "#191816", // Text / Dark sections
          leather: "#8A6A48",  // Heritage Leather accent
          gold: "#B59A78",     // Gold / Tan accent
          white: "#FFFFFF",    // Product sections canvas
          muted: "#6E6256",    // Secondary text
          subtle: "#D6CBB9",   // Subtle borders and dividers
          darkCard: "#22201D"  // Rich dark atelier tone
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(25, 24, 22, 0.07)',
        'luxury-hover': '0 30px 60px -12px rgba(25, 24, 22, 0.12)',
        'inner-glow': 'inset 0 1px 2px 0 rgba(255, 255, 255, 0.4)',
      },
      letterSpacing: {
        'luxury-widest': '0.25em',
        'luxury-wide': '0.15em',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s infinite ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        }
      }
    },
  },
  plugins: [],
};

export default config;
