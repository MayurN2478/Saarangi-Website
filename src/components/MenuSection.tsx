import React, { useState } from 'react';
import { Utensils, Flame, Leaf, Coffee, Sun, Moon, Sparkles, Check } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../data/restaurantData';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'brunch' | 'lunch' | 'dinner'>('brunch');
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'non-veg'>('all');

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesDiet = 
      dietFilter === 'all' || 
      (dietFilter === 'veg' && item.isVeg) || 
      (dietFilter === 'non-veg' && !item.isVeg);
    return matchesCategory && matchesDiet;
  });

  return (
    <section id="menu" className="py-20 sm:py-28 bg-vintage-ivory text-vintage-brown relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vintage-sand/80 border border-vintage-gold/40 text-vintage-maroon text-xs font-semibold uppercase tracking-wider mb-3">
            <Utensils className="w-4 h-4 text-vintage-gold" />
            <span>Curated Culinary Heritage</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-vintage-brown tracking-tight">
            Our Menu Offerings
          </h2>

          <div className="ornament-line my-4">
            <span className="text-vintage-gold text-lg">✦</span>
          </div>

          <p className="text-sm sm:text-base text-vintage-brown/80 max-w-2xl mx-auto leading-relaxed">
            Crafted with genuine firewood cooking, hand-ground spices, and generational recipes. Explore our three signature daily menus.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
          <button
            onClick={() => setActiveCategory('brunch')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 ${
              activeCategory === 'brunch'
                ? 'bg-vintage-brown text-vintage-gold shadow-vintage border border-vintage-gold'
                : 'bg-vintage-sand/60 text-vintage-brown hover:bg-vintage-sand border border-vintage-gold/20'
            }`}
          >
            <Coffee className="w-4 h-4" />
            <span>Brunch & Morning Naati</span>
          </button>

          <button
            onClick={() => setActiveCategory('lunch')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 ${
              activeCategory === 'lunch'
                ? 'bg-vintage-brown text-vintage-gold shadow-vintage border border-vintage-gold'
                : 'bg-vintage-sand/60 text-vintage-brown hover:bg-vintage-sand border border-vintage-gold/20'
            }`}
          >
            <Sun className="w-4 h-4" />
            <span>Lunch & Biryanis</span>
          </button>

          <button
            onClick={() => setActiveCategory('dinner')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 ${
              activeCategory === 'dinner'
                ? 'bg-vintage-brown text-vintage-gold shadow-vintage border border-vintage-gold'
                : 'bg-vintage-sand/60 text-vintage-brown hover:bg-vintage-sand border border-vintage-gold/20'
            }`}
          >
            <Moon className="w-4 h-4" />
            <span>Dinner & Evening Flavors</span>
          </button>
        </div>

        {/* Dietary Sub-filter */}
        <div className="flex items-center justify-center gap-3 mb-12 text-xs">
          <span className="text-vintage-brown/60 font-medium">Filter by:</span>
          <button
            onClick={() => setDietFilter('all')}
            className={`px-3 py-1 rounded-md transition-colors ${
              dietFilter === 'all'
                ? 'bg-vintage-maroon text-vintage-ivory font-bold'
                : 'bg-vintage-cream/60 text-vintage-brown hover:bg-vintage-cream'
            }`}
          >
            All Dishes
          </button>
          <button
            onClick={() => setDietFilter('veg')}
            className={`px-3 py-1 rounded-md transition-colors flex items-center gap-1.5 ${
              dietFilter === 'veg'
                ? 'bg-emerald-700 text-white font-bold'
                : 'bg-vintage-cream/60 text-emerald-800 hover:bg-emerald-50'
            }`}
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Pure Veg Only</span>
          </button>
          <button
            onClick={() => setDietFilter('non-veg')}
            className={`px-3 py-1 rounded-md transition-colors flex items-center gap-1.5 ${
              dietFilter === 'non-veg'
                ? 'bg-red-800 text-white font-bold'
                : 'bg-vintage-cream/60 text-red-800 hover:bg-red-50'
            }`}
          >
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <span>Non-Veg Specialties</span>
          </button>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden bg-vintage-sand/25 border border-vintage-gold/25 shadow-sm hover:shadow-vintage transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Food Image with Veg / Non-Veg Indicator */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-vintage-darkest">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vintage-darkest/80 via-transparent to-transparent" />

                {/* Dietary Veg / Non-Veg Icon */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm p-1.5 rounded-md shadow-sm border border-stone-200">
                  <div
                    className={`w-3.5 h-3.5 border-2 rounded-sm flex items-center justify-center ${
                      item.isVeg ? 'border-emerald-600' : 'border-red-600'
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        item.isVeg ? 'bg-emerald-600' : 'bg-red-600'
                      }`}
                    />
                  </div>
                </div>

                {/* Tags */}
                <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5">
                  {item.firewoodCooked && (
                    <span className="inline-flex items-center gap-1 bg-vintage-darkest/90 text-amber-400 text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded-full border border-vintage-gold/40 shadow-sm backdrop-blur-sm">
                      <Flame className="w-3 h-3 text-amber-400 fill-amber-400/20" />
                      <span>Firewood</span>
                    </span>
                  )}
                  {item.tag && (
                    <span className="bg-vintage-maroon/90 text-vintage-cream text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded border border-vintage-gold/30">
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Category Indicator Pill */}
                <div className="absolute bottom-2.5 left-3 text-[11px] text-vintage-sand/90 font-medium uppercase tracking-wider">
                  {item.category.toUpperCase()} SELECTION
                </div>
              </div>

              {/* Dish Description & Kannada Name */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-vintage-brown group-hover:text-vintage-maroon transition-colors">
                    {item.name}
                  </h3>
                  {item.kannadaName && (
                    <p className="text-xs text-vintage-terracotta font-medium mt-0.5">
                      {item.kannadaName}
                    </p>
                  )}
                  <p className="text-xs sm:text-sm text-vintage-brown/75 leading-relaxed mt-2.5">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-vintage-cream/80 flex items-center justify-between text-xs text-vintage-maroon font-semibold">
                  <span>Prepared Daily in Mysuru</span>
                  <span className="text-vintage-gold">100% Authentic</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Menu Authenticity */}
        <div className="mt-12 text-center text-xs text-vintage-brown/70 italic">
          * Prepared fresh daily using authentic local cold-pressed oils, hand-pounded spices, and genuine firewood stoves.
        </div>
      </div>
    </section>
  );
};
