"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import { JOURNAL_POSTS } from "@/data/products";

export const JournalHighlightsSection = () => {
  return (
    <section className="py-24 bg-brand-bg border-b border-brand-sand/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-brand-sand/80 pb-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-brand-leather">
              <BookOpen className="w-4 h-4 text-brand-gold" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em]">
                The Editorial Journal
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-charcoal uppercase tracking-wide">
              Stories from the Atelier & Travel Essays
            </h2>
          </div>
          <Link
            href="/journal"
            className="text-xs font-semibold uppercase tracking-luxury-wide text-brand-leather hover:text-brand-charcoal flex items-center space-x-2 mt-4 md:mt-0"
          >
            <span>Explore All Journal Stories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Journal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {JOURNAL_POSTS.map((post) => (
            <Link
              key={post.id}
              href={`/journal/${post.slug}`}
              className="group bg-brand-white rounded-lg border border-brand-sand/60 overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-all duration-500 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/9] w-full bg-brand-sand overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-brand-charcoal text-brand-bg text-[10px] uppercase tracking-luxury-widest px-3 py-1 rounded font-semibold">
                  {post.category}
                </span>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 text-[11px] text-brand-muted font-medium mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-brand-charcoal group-hover:text-brand-leather transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-brand-muted mt-2 font-light line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-sand/40 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-brand-leather group-hover:text-brand-charcoal">
                  <span>Read Essay</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
