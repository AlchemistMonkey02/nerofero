"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, ArrowLeft } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="py-24 bg-brand-bg min-h-[70vh] flex items-center justify-center px-4 text-center">
      <div className="max-w-md space-y-6 bg-brand-white p-8 rounded-xl border border-brand-sand shadow-2xl">
        <span className="text-[10px] font-bold uppercase tracking-luxury-widest text-brand-leather">
          Atelier System Notice
        </span>
        <h1 className="font-display text-3xl font-extrabold text-brand-charcoal">
          Something Went Wrong
        </h1>
        <p className="text-xs text-brand-muted font-light leading-relaxed">
          An unexpected error occurred while rendering this view. Click below to re-initialize the page components.
        </p>
        <div className="flex justify-center gap-3">
          <button
            onClick={() => reset()}
            className="inline-flex items-center space-x-2 bg-brand-leather text-brand-bg px-6 py-3 rounded text-xs uppercase tracking-luxury-wide font-semibold hover:bg-brand-charcoal transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-brand-sand/50 text-brand-charcoal px-6 py-3 rounded text-xs uppercase tracking-luxury-wide font-semibold hover:bg-brand-sand transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
