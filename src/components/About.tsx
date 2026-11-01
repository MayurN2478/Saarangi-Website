import React from 'react';
import { Calendar, Award, Flame, Users, Sparkles, MapPin } from 'lucide-react';
import { STORY_DETAILS, RESTAURANT_INFO } from '../data/restaurantData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-vintage-ivory text-vintage-brown relative">
      {/* Decorative top border flourish */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-vintage-gold/20 via-vintage-gold to-vintage-gold/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-vintage-terracotta text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4 text-vintage-gold" />
            <span>Our Roots & Philosophy</span>
            <Sparkles className="w-4 h-4 text-vintage-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-vintage-brown tracking-tight">
            {STORY_DETAILS.title}
          </h2>
          <div className="ornament-line my-4">
            <span className="text-vintage-gold text-lg">✦</span>
          </div>
          <p className="text-sm sm:text-base text-vintage-maroon/80 font-medium italic">
            {STORY_DETAILS.subtitle}
          </p>
        </div>

        {/* Two Column Layout: Story Content & Heritage Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story Narration */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 p-3.5 rounded-lg bg-vintage-cream/60 border-l-4 border-vintage-gold text-vintage-brown">
              <Award className="w-6 h-6 text-vintage-gold flex-shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-vintage-maroon">
                  A 28-Year Legacy of Divine Taste
                </p>
                <p className="text-sm font-serif font-bold text-vintage-brown">
                  From Tirumala's Narayanagiri Hills (1998) to Mysuru (22 June 2025)
                </p>
              </div>
            </div>

            {STORY_DETAILS.paragraphs.map((p, idx) => (
              <p key={idx} className="text-vintage-brown/85 leading-relaxed text-base sm:text-lg">
                {idx === 0 && (
                  <span className="float-left text-5xl leading-none font-serif font-bold text-vintage-maroon pr-3 pt-1">
                    T
                  </span>
                )}
                {p}
              </p>
            ))}

            {/* Address mention in narrative */}
            <div className="pt-2 flex items-start gap-2.5 text-sm text-vintage-maroon/90">
              <MapPin className="w-4 h-4 text-vintage-gold flex-shrink-0 mt-0.5" />
              <span>
                Located at <strong>16 & 17, 2nd Phase Badavane, 4th Stage, Vijayanagar, Mysuru</strong>, welcoming food lovers with genuine vintage grandeur.
              </span>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-vintage-cream">
              {STORY_DETAILS.stats.map((stat, i) => (
                <div key={i} className="text-center p-3 rounded-lg bg-vintage-sand/50 border border-vintage-gold/20">
                  <span className="block font-serif text-2xl sm:text-3xl font-bold text-vintage-terracotta">
                    {stat.value}
                  </span>
                  <span className="block text-[11px] sm:text-xs text-vintage-brown/70 font-medium mt-1 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Frame with Vintage Border */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative frame */}
              <div className="absolute -inset-4 rounded-2xl border-2 border-vintage-gold/40 transform rotate-1 pointer-events-none" />
              <div className="absolute -inset-4 rounded-2xl border border-vintage-maroon/20 transform -rotate-1 pointer-events-none" />

              {/* Main Restaurant Ambience Image */}
              <div className="relative rounded-xl overflow-hidden shadow-vintage-lg border-4 border-vintage-sand">
                <img
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Saarangi Vintage Kitchen Dining Hall"
                  className="w-full h-[440px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Heritage Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-vintage-darkest/90 backdrop-blur-md p-4 rounded-lg border border-vintage-gold/40 text-vintage-ivory shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-vintage-maroon flex items-center justify-center text-vintage-gold flex-shrink-0 border border-vintage-gold/40">
                      <Flame className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-vintage-gold font-bold">
                        100% Firewood Cooking
                      </p>
                      <p className="text-xs text-vintage-cream/80">
                        Reviving authentic smoky recipes since 1998
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Side Floating Tag */}
              <div className="absolute -top-4 -right-4 bg-vintage-maroon text-vintage-ivory px-4 py-2 rounded-lg shadow-lg border border-vintage-gold flex items-center gap-2">
                <Calendar className="w-4 h-4 text-vintage-gold" />
                <span className="text-xs font-semibold tracking-wider">Est. 1998</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
