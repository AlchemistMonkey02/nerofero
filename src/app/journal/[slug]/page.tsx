"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { JOURNAL_POSTS } from "@/data/products";
import { ArrowLeft, Clock, User, Share2 } from "lucide-react";

export default function JournalArticlePage() {
  const params = useParams();
  const slug = params.slug as string;

  const post = JOURNAL_POSTS.find((p) => p.slug === slug) || JOURNAL_POSTS[0];

  return (
    <article className="py-16 bg-brand-bg min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Back Link */}
        <Link href="/journal" className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold text-brand-leather hover:text-brand-charcoal">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Journal</span>
        </Link>

        {/* Header */}
        <header className="space-y-4 border-b border-brand-sand pb-8">
          <span className="text-xs font-semibold uppercase tracking-luxury-widest text-brand-leather bg-brand-sand/50 px-3 py-1 rounded">
            {post.category}
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-brand-charcoal leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between text-xs text-brand-muted pt-2 gap-4">
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <User className="w-3.5 h-3.5 text-brand-gold" />
                <strong className="text-brand-charcoal">{post.author}</strong>
              </span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-brand-gold" />
                <span>{post.readTime}</span>
              </span>
            </div>

            <button className="flex items-center space-x-1 hover:text-brand-charcoal">
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Story</span>
            </button>
          </div>
        </header>

        {/* Featured Header Image */}
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden shadow-2xl border border-brand-sand">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>

        {/* Content Body */}
        <div className="prose prose-stone max-w-none text-brand-charcoal text-sm leading-relaxed space-y-6 font-light">
          <p className="text-base font-serif italic text-brand-leather border-l-2 border-brand-leather pl-4">
            {post.excerpt}
          </p>
          <div className="whitespace-pre-line text-sm leading-loose">
            {post.content}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="pt-8 border-t border-brand-sand flex justify-between items-center text-xs font-semibold uppercase tracking-wider">
          <Link href="/journal" className="text-brand-leather hover:text-brand-charcoal flex items-center space-x-2">
            <ArrowLeft className="w-4 h-4" />
            <span>More Stories</span>
          </Link>
          <Link href="/shop" className="bg-brand-charcoal text-brand-bg px-6 py-3 rounded hover:bg-brand-leather transition-colors">
            Shop Featured Products
          </Link>
        </div>

      </div>
    </article>
  );
}
