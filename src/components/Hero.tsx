import React from 'react';
import { Flame, Compass, MapPin, ChevronDown, Utensils, Award } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-36 sm:pt-40 md:pt-44 pb-16 px-4 sm:px-6 lg:px-8 bg-vintage-darkest overflow-hidden"
    >
      {/* Background Image with Warm Vintage Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85"
          alt="Saarangi Vintage Kitchen Ambience"
          className="w-full h-full object-cover object-center transform scale-105 filter brightness-50 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-vintage-darkest via-vintage-darkest/75 to-vintage-brown/80" />
        {/* Subtle patterned vignette */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C49A55_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Vintage Top Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-vintage-maroon/80 border border-vintage-gold/50 text-vintage-cream text-xs sm:text-sm font-medium tracking-wider mb-6 shadow-lg backdrop-blur-sm animate-fade-in">
          <Award className="w-4 h-4 text-vintage-gold" />
          <span>Legacy Since 1998 • Sacred Narayanagiri to Mysuru</span>
        </div>

        {/* Restaurant Name */}
        <div className="mb-2">
          <p className="text-vintage-gold text-xs sm:text-sm md:text-base uppercase tracking-[0.25em] font-sans font-semibold mb-2">
            The Vintage Kitchen • Mysuru
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-vintage-ivory tracking-tight drop-shadow-md">
            Saarangi
          </h1>
          <p className="text-vintage-cream/80 font-serif italic text-lg sm:text-2xl mt-1 tracking-wide">
            ಸಾರಂಗಿ – ದ ವಿಂಟೇಜ್ ಕಿಚನ್
          </p>
        </div>

        {/* Ornamental Divider */}
        <div className="flex items-center justify-center gap-3 my-6 text-vintage-gold">
          <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-vintage-gold" />
          <Flame className="w-5 h-5 text-vintage-gold fill-vintage-gold/20" />
          <span className="text-xs tracking-widest uppercase font-semibold text-vintage-gold">
            100% Firewood Cooking
          </span>
          <Flame className="w-5 h-5 text-vintage-gold fill-vintage-gold/20" />
          <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-vintage-gold" />
        </div>

        {/* Tagline */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-vintage-cream/90 font-sans font-normal leading-relaxed mb-8">
          Relish the lost art of wood-fired gastronomy, pure flavors, and timeless hospitality. Six unique dining experiences across 340+ seats in the royal heritage city of Mysuru.
        </p>

        {/* Feature Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl w-full mb-10 text-xs sm:text-sm text-vintage-sand/90">
          <div className="p-2.5 rounded-lg bg-vintage-darkest/60 border border-vintage-gold/30 backdrop-blur-sm flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>ಸೌದೆ ಒಲೆ ಊಟ</span>
          </div>
          <div className="p-2.5 rounded-lg bg-vintage-darkest/60 border border-vintage-gold/30 backdrop-blur-sm flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>100% Segregated Kitchens</span>
          </div>
          <div className="col-span-2 sm:col-span-1 p-2.5 rounded-lg bg-vintage-darkest/60 border border-vintage-gold/30 backdrop-blur-sm flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-vintage-gold" />
            <span>Chaat Ka Chaska Counter</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-3.5 rounded bg-vintage-gold text-vintage-darkest hover:bg-vintage-goldLight text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-vintage-glow flex items-center justify-center gap-2"
          >
            <Utensils className="w-4 h-4" />
            <span>Explore Our Menu</span>
          </a>

          <a
            href={RESTAURANT_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded border border-vintage-gold text-vintage-ivory hover:bg-vintage-gold/15 text-sm font-semibold tracking-wider uppercase transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4 text-vintage-gold" />
            <span>Get Directions</span>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3.5 rounded bg-vintage-maroon/70 border border-vintage-gold/40 text-vintage-cream hover:bg-vintage-maroon text-sm font-semibold tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-vintage-gold" />
            <span>Visit Us</span>
          </a>
        </div>

        {/* Scroll Prompt */}
        <a
          href="#about"
          className="mt-14 inline-flex flex-col items-center text-vintage-sand/60 hover:text-vintage-gold transition-colors text-xs tracking-widest uppercase gap-1"
          aria-label="Scroll to learn more about Saarangi"
        >
          <span>Discover Our Story</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-vintage-gold" />
        </a>
      </div>
    </section>
  );
};
