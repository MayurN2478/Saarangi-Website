import React, { useState } from 'react';
import { Users, CheckCircle, Sparkles, ChevronRight, Trees, Home, Shield, Coffee, Sun } from 'lucide-react';
import { SEATING_EXPERIENCES, SeatingOption, RESTAURANT_INFO } from '../data/restaurantData';

export const SeatingExperience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const iconsMap: Record<string, React.ReactNode> = {
    'hut-style': <Home className="w-5 h-5 text-vintage-gold" />,
    'indoor-dining': <Shield className="w-5 h-5 text-vintage-gold" />,
    'outdoor-dining': <Trees className="w-5 h-5 text-vintage-gold" />,
    'first-floor': <Sun className="w-5 h-5 text-vintage-gold" />,
    'front-porch': <Coffee className="w-5 h-5 text-vintage-gold" />,
    'pdr': <Sparkles className="w-5 h-5 text-vintage-gold" />
  };

  return (
    <section id="seating" className="py-20 sm:py-28 bg-vintage-ivory text-vintage-brown relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vintage-sand/80 border border-vintage-gold/40 text-vintage-maroon text-xs font-semibold uppercase tracking-wider mb-3">
            <Users className="w-4 h-4 text-vintage-gold" />
            <span>340+ Total Seating Capacity</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-vintage-brown tracking-tight">
            Six Distinct Seating Experiences
          </h2>

          <div className="ornament-line my-4">
            <span className="text-vintage-gold text-lg">✦</span>
          </div>

          <p className="text-sm sm:text-base text-vintage-brown/80 max-w-2xl mx-auto leading-relaxed">
            Whether you seek intimate family moments under rustic thatched huts, regal indoor heritage banquets, or breezy outer deck views, Saarangi caters to every occasion.
          </p>
        </div>

        {/* 6 Seating Grid Cards with Consistent Dimensions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SEATING_EXPERIENCES.map((option, idx) => (
            <div
              key={option.id}
              className="group rounded-2xl overflow-hidden bg-vintage-sand/30 border border-vintage-gold/25 shadow-vintage hover:shadow-vintage-lg transition-all duration-300 flex flex-col hover:-translate-y-1.5"
            >
              {/* Card Image with Consistent Aspect Ratio */}
              <div className="relative h-60 w-full overflow-hidden bg-vintage-darkest">
                <img
                  src={option.image}
                  alt={option.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vintage-darkest/85 via-vintage-darkest/20 to-transparent" />
                
                {/* Number Badge */}
                <div className="absolute top-3 left-3 bg-vintage-darkest/80 backdrop-blur-sm border border-vintage-gold/40 text-vintage-gold font-serif font-bold text-xs px-2.5 py-1 rounded-md">
                  0{idx + 1}
                </div>

                {/* Capacity Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-vintage-ivory bg-vintage-darkest/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-vintage-gold/30">
                  <span className="flex items-center gap-1.5 font-medium text-vintage-cream">
                    <Users className="w-3.5 h-3.5 text-vintage-gold" />
                    <span>{option.capacity}</span>
                  </span>
                  <span className="text-[11px] text-vintage-gold uppercase tracking-wider font-semibold">
                    Mysuru
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    {iconsMap[option.id]}
                    <h3 className="font-serif text-xl font-bold text-vintage-brown group-hover:text-vintage-maroon transition-colors">
                      {option.title}
                    </h3>
                  </div>
                  
                  <p className="text-xs text-vintage-terracotta font-medium tracking-wide mb-3">
                    {option.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-vintage-brown/80 leading-relaxed mb-4">
                    {option.description}
                  </p>
                </div>

                {/* Features Pill List */}
                <div className="pt-3 border-t border-vintage-cream/80 space-y-1.5">
                  {option.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-vintage-brown/75">
                      <span className="w-1.5 h-1.5 rounded-full bg-vintage-gold flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-vintage-sand/50 border border-vintage-gold/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-lg sm:text-xl font-bold text-vintage-brown">
              Planning a Family Reunion or Celebration?
            </h4>
            <p className="text-xs sm:text-sm text-vintage-brown/75">
              Private Dining Rooms (PDR) and Hut cabanas are available for advance family bookings.
            </p>
          </div>

          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="flex-shrink-0 px-6 py-3 rounded-lg bg-vintage-maroon text-vintage-cream hover:bg-vintage-brown text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all shadow-md hover:shadow-lg flex items-center gap-2 border border-vintage-gold/40"
          >
            <span>Reserve Table via {RESTAURANT_INFO.phoneFormatted}</span>
            <ChevronRight className="w-4 h-4 text-vintage-gold" />
          </a>
        </div>
      </div>
    </section>
  );
};
