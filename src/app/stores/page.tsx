"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { IMAGES } from "@/lib/images";

const STORES = [
  {
    city: "Jaipur Flagship & Workshop",
    address: "C-Scheme, Ashok Nagar, Jaipur, Rajasthan 302001, India",
    hours: "Monday - Sunday: 10:30 AM - 8:00 PM",
    phone: "+91 141 400 9821",
    email: "jaipur@auraa.com",
    image: IMAGES.stores.jaipur,
    desc: "Our sanctuary and master leather workshop. Features live saddlery stitching demonstrations, custom hide selection, and 24k gold monogramming bar."
  },
  {
    city: "New Delhi Khan Market",
    address: "Khan Market, Rabindra Nagar, New Delhi 110003, India",
    hours: "Monday - Sunday: 11:00 AM - 8:30 PM",
    phone: "+91 11 4100 2938",
    email: "delhi@auraa.com",
    image: IMAGES.stores.delhi,
    desc: "Set within Delhi's heritage shopping promenade, showcasing our complete travel luggage & small leather goods collection."
  },
  {
    city: "Mumbai Kala Ghoda",
    address: "Kala Ghoda, Fort, Mumbai, Maharashtra 400001, India",
    hours: "Monday - Sunday: 11:00 AM - 9:00 PM",
    phone: "+91 22 2288 1902",
    email: "mumbai@auraa.com",
    image: IMAGES.stores.mumbai,
    desc: "Artistic sanctuary housed in a restored 19th-century Victorian building."
  },
  {
    city: "London Mayfair Boutique",
    address: "South Molton Street, Mayfair, London W1K 5SL, United Kingdom",
    hours: "Monday - Saturday: 10:00 AM - 7:00 PM",
    phone: "+44 20 7493 1820",
    email: "london@auraa.com",
    image: IMAGES.stores.london,
    desc: "Our international flagship store bringing contemporary Indian saddle craftsmanship to the heart of Mayfair."
  }
];

export default function StoresPage() {
  return (
    <div className="py-16 bg-brand-bg space-y-16">
      
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 text-center space-y-4">
        <div className="inline-flex items-center space-x-2 text-brand-gold bg-brand-charcoal px-4 py-1.5 rounded-full text-brand-bg">
          <MapPin className="w-3.5 h-3.5 text-brand-gold" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em]">
            Boutique Directory
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-light text-brand-charcoal uppercase tracking-wide">
          Our Flagship Sanctuaries
        </h1>

        <p className="text-xs sm:text-sm text-brand-muted max-w-xl mx-auto font-light leading-relaxed">
          Experience the scent of full-grain saddle leather, inspect hand-stitching up close, and enjoy complimentary 24k gold monogram embossing while you wait.
        </p>
      </section>

      {/* Stores List Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {STORES.map((store, idx) => (
          <div
            key={idx}
            className="bg-brand-white rounded-xl border border-brand-sand overflow-hidden shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 lg:p-8 items-center"
          >
            <div className="lg:col-span-6 relative aspect-video w-full rounded-lg overflow-hidden border border-brand-sand">
              <Image src={store.image} alt={store.city} fill className="object-cover" />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-luxury-widest text-brand-gold">
                  Boutique 0{idx + 1}
                </span>
                <h2 className="font-display text-3xl font-extrabold text-brand-charcoal">
                  {store.city}
                </h2>
                <p className="text-xs text-brand-muted mt-2 font-light leading-relaxed">
                  {store.desc}
                </p>
              </div>

              <div className="space-y-2 text-xs text-brand-charcoal border-t border-brand-sand pt-4">
                <p className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-brand-leather flex-shrink-0 mt-0.5" />
                  <span>{store.address}</span>
                </p>
                <p className="flex items-start space-x-2">
                  <Clock className="w-4 h-4 text-brand-leather flex-shrink-0 mt-0.5" />
                  <span>{store.hours}</span>
                </p>
                <p className="flex items-start space-x-2">
                  <Phone className="w-4 h-4 text-brand-leather flex-shrink-0 mt-0.5" />
                  <span>{store.phone} • {store.email}</span>
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(store.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-brand-sand/50 text-brand-charcoal px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider hover:bg-brand-leather hover:text-white transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions on Maps</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}
