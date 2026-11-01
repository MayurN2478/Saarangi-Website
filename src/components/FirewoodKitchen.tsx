import React from 'react';
import { Flame, Sparkles, Leaf, Egg, Drumstick, ShieldCheck, Clock } from 'lucide-react';
import { FIREWOOD_KITCHEN_DATA } from '../data/restaurantData';

export const FirewoodKitchen: React.FC = () => {
  return (
    <section id="firewood-kitchen" className="py-20 sm:py-28 bg-vintage-darkest text-vintage-ivory relative overflow-hidden">
      {/* Background Subtle Firewood Ambiance */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80"
          alt="Firewood Live Kitchen Background"
          className="w-full h-full object-cover filter blur-sm"
        />
        <div className="absolute inset-0 bg-vintage-darkest/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-vintage-terracotta/40 border border-amber-500/40 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Flame className="w-4 h-4 text-amber-400" />
            <span>{FIREWOOD_KITCHEN_DATA.kannadaTitle}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-vintage-ivory tracking-tight">
            {FIREWOOD_KITCHEN_DATA.title}
          </h2>

          <div className="ornament-line my-4">
            <span className="text-vintage-gold text-lg">✦</span>
          </div>

          <p className="text-sm sm:text-base text-vintage-cream/80 max-w-2xl mx-auto leading-relaxed">
            {FIREWOOD_KITCHEN_DATA.description}
          </p>
        </div>

        {/* Live Kitchen Showcase Banner */}
        <div className="mb-16 rounded-2xl overflow-hidden border border-vintage-gold/30 bg-gradient-to-r from-vintage-brown via-vintage-darkest to-vintage-brown shadow-vintage-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-vintage-gold text-xs uppercase tracking-wider font-bold">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>Ancestral Culinary Science</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-vintage-cream leading-snug">
                Why 100% Firewood Makes Every Bite Incomparable
              </h3>
              <p className="text-vintage-sand/80 text-sm sm:text-base leading-relaxed">
                When clay vessels and seasoned iron cauldrons sit atop smoldering hardwood embers, food cooks evenly from within. Essential spice oils caramelize without scorching, creating a deep smoky aroma, delicate tenderness, and an earthy flavor profile that modern gas stoves simply cannot match.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-vintage-sand">
                <span className="flex items-center gap-1.5 bg-vintage-darkest/70 px-3 py-1.5 rounded-full border border-vintage-gold/30">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>Wood-Fired Hearth Stoves</span>
                </span>
                <span className="flex items-center gap-1.5 bg-vintage-darkest/70 px-3 py-1.5 rounded-full border border-vintage-gold/30">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>No Artificial Flavors or Smoke</span>
                </span>
                <span className="flex items-center gap-1.5 bg-vintage-darkest/70 px-3 py-1.5 rounded-full border border-vintage-gold/30">
                  <Clock className="w-3.5 h-3.5 text-vintage-gold" />
                  <span>Slow Overnight Simmering</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-vintage-gold/40">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                  alt="Live Firewood Cooking Cauldrons at Saarangi"
                  className="w-full h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vintage-darkest/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-vintage-cream/90 bg-vintage-darkest/85 p-2 rounded backdrop-blur-sm border border-vintage-gold/30">
                  <span className="font-semibold text-vintage-gold">Live Kitchen in Mysuru:</span> Handcrafted firewood hearths operated twice daily
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Specialties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. Firewood Cooking */}
          <div className="rounded-xl p-6 bg-vintage-brown/70 border border-vintage-gold/30 hover:border-vintage-gold transition-all duration-300 hover:-translate-y-1 shadow-lg group">
            <div className="w-12 h-12 rounded-lg bg-vintage-terracotta/40 border border-amber-500/40 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
              <Flame className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-lg font-bold text-vintage-cream mb-2">
              100% Real Firewood Cooking
            </h4>
            <p className="text-xs sm:text-sm text-vintage-sand/80 leading-relaxed">
              No shortcuts or LPG ranges for our hallmark gravies and biryanis. Genuine wood fire delivers uniform heat and irreplaceable rustic aroma.
            </p>
          </div>

          {/* 2. Authentic Vegetarian Cuisine */}
          <div className="rounded-xl p-6 bg-vintage-brown/70 border border-vintage-gold/30 hover:border-vintage-gold transition-all duration-300 hover:-translate-y-1 shadow-lg group">
            <div className="w-12 h-12 rounded-lg bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
              <Leaf className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-lg font-bold text-vintage-cream mb-2">
              Authentic Vegetarian Cuisine
            </h4>
            <p className="text-xs sm:text-sm text-vintage-sand/80 leading-relaxed">
              Prepared in our strictly segregated pure vegetarian kitchen: traditional Mysore saaru, wood-fired paneer, lentil dals, and heritage thalis.
            </p>
          </div>

          {/* 3. Egg Specialties */}
          <div className="rounded-xl p-6 bg-vintage-brown/70 border border-vintage-gold/30 hover:border-vintage-gold transition-all duration-300 hover:-translate-y-1 shadow-lg group">
            <div className="w-12 h-12 rounded-lg bg-amber-950/60 border border-amber-500/40 flex items-center justify-center text-amber-300 mb-4 group-hover:scale-110 transition-transform">
              <Egg className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-lg font-bold text-vintage-cream mb-2">
              Heritage Egg Specialties
            </h4>
            <p className="text-xs sm:text-sm text-vintage-sand/80 leading-relaxed">
              Smoky egg roasts, egg fry piece pulaos, and country egg curries simmered with freshly ground coriander and black pepper.
            </p>
          </div>

          {/* 4. Non-Vegetarian Specialties */}
          <div className="rounded-xl p-6 bg-vintage-brown/70 border border-vintage-gold/30 hover:border-vintage-gold transition-all duration-300 hover:-translate-y-1 shadow-lg group">
            <div className="w-12 h-12 rounded-lg bg-red-950/60 border border-red-500/40 flex items-center justify-center text-red-400 mb-4 group-hover:scale-110 transition-transform">
              <Drumstick className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-lg font-bold text-vintage-cream mb-2">
              Non-Vegetarian Specialties
            </h4>
            <p className="text-xs sm:text-sm text-vintage-sand/80 leading-relaxed">
              Nati Koli (country chicken) saaru, wood-fired mutton fry biryani, juicy mutton chops, and coastal fish fry cooked over glowing coals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
