import React from 'react';
import { Sparkles, CheckCircle2, Utensils, Heart } from 'lucide-react';
import { CHAAT_DATA } from '../data/restaurantData';

export const ChaatSection: React.FC = () => {
  return (
    <section id="chaat" className="py-20 sm:py-28 bg-vintage-sand/40 text-vintage-brown relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>100% Pure Vegetarian Destination</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-vintage-brown tracking-tight">
            {CHAAT_DATA.title}
          </h2>

          <div className="ornament-line my-4">
            <span className="text-vintage-gold text-lg">✦</span>
          </div>

          <p className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-vintage-terracotta mb-2">
            {CHAAT_DATA.tagline}
          </p>
          <p className="text-sm sm:text-base text-vintage-maroon/80 font-medium">
            {CHAAT_DATA.subtitle}
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-vintage-lg border-4 border-vintage-cream bg-vintage-darkest">
              <img
                src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80"
                alt="Chaat Ka Chaska Pure Vegetarian Delhi Chaat at Saarangi"
                className="w-full h-[400px] sm:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vintage-darkest/90 via-vintage-darkest/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-vintage-darkest/85 backdrop-blur-md border border-vintage-gold/30 text-vintage-ivory">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-serif font-bold text-lg text-vintage-gold">Chaat Ka Chaska</p>
                    <p className="text-xs text-vintage-cream/80">Chandni Chowk Flavors in Vijayanagar, Mysuru</p>
                  </div>
                  <span className="p-2 rounded-full bg-emerald-700/80 text-emerald-200">
                    <Sparkles className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>

            {/* Pure Veg Badge Pill */}
            <div className="absolute -top-3 -left-3 bg-emerald-800 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider shadow-md flex items-center gap-1.5 border border-emerald-400">
              <div className="w-2.5 h-2.5 rounded-full border border-white flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
              <span>100% PURE VEG COUNTER</span>
            </div>
          </div>

          {/* Text & Feature Highlights */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <p className="text-vintage-brown/90 leading-relaxed text-base sm:text-lg">
              {CHAAT_DATA.description}
            </p>

            {/* Key Pillars */}
            <div className="space-y-3 pt-2">
              {CHAAT_DATA.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-vintage-cream/50 border border-vintage-gold/20">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base font-medium text-vintage-brown">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* Popular Street Food Favorites */}
            <div className="pt-4 border-t border-vintage-cream">
              <h4 className="text-xs font-bold uppercase tracking-wider text-vintage-maroon mb-3 flex items-center gap-2">
                <Utensils className="w-4 h-4 text-vintage-gold" />
                <span>Beloved Street Food Specialties</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CHAAT_DATA.popularItems.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-vintage-ivory border border-vintage-gold/30 shadow-sm">
                    <p className="font-serif font-bold text-sm text-vintage-brown">{item.name}</p>
                    <p className="text-xs text-vintage-brown/75 mt-1 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
