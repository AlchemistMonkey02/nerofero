"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, ArrowRight, Clock } from "lucide-react";
import { JOURNAL_POSTS } from "@/data/products";

export default function JournalPage() {
  return (
    <div className="py-16 bg-brand-bg space-y-16">
      
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 text-center space-y-4">
        <div className="inline-flex items-center space-x-2 text-brand-leather bg-brand-sand/50 px-4 py-1.5 rounded-full">
          <BookOpen className="w-3.5 h-3.5 text-brand-gold" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em]">
            Editorial Journal
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-light text-brand-charcoal uppercase tracking-wide">
          Stories, Craft & Travel Essays
        </h1>

        <p className="text-xs sm:text-sm text-brand-muted max-w-xl mx-auto font-light leading-relaxed">
          Reflections on leather care, artisan culture in Jaipur, architectural inspiration, and modern global travel.
        </p>
      </section>

      {/* Main Journal Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {JOURNAL_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-brand-white rounded-lg border border-brand-sand overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-all duration-500 flex flex-col justify-between group"
            >
              <div className="relative aspect-[16/9] w-full bg-brand-sand overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-brand-charcoal text-brand-bg text-[10px] uppercase tracking-widest px-3 py-1 rounded font-semibold">
                  {post.category}
                </span>
              </div>

              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 text-xs text-brand-muted font-medium">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-brand-gold" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-brand-charcoal group-hover:text-brand-leather transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-xs text-brand-muted font-light leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-sand/40">
                  <Link
                    href={`/journal/${post.slug}`}
                    className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-luxury-wide text-brand-leather group-hover:text-brand-charcoal"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
