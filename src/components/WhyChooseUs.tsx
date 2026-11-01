import React from 'react';
import { Flame, Drumstick, Soup, ShieldCheck, Award, Users, Star, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/restaurantData';

export const WhyChooseUs: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    'Flame': <Flame className="w-6 h-6 text-amber-500" />,
    'Drumstick': <Drumstick className="w-6 h-6 text-red-500" />,
    'Soup': <Soup className="w-6 h-6 text-amber-600" />,
    'ShieldCheck': <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    'Award': <Award className="w-6 h-6 text-vintage-gold" />,
    'Users': <Users className="w-6 h-6 text-amber-600" />,
    'Star': <Star className="w-6 h-6 text-yellow-500 fill-yellow-500/20" />,
  };

  return (
    <section id="why-choose-us" className="py-20 sm:py-28 bg-vintage-sand/50 text-vintage-brown relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vintage-cream border border-vintage-gold/40 text-vintage-maroon text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-vintage-gold" />
            <span>The Saarangi Distinction</span>
            <Sparkles className="w-4 h-4 text-vintage-gold" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-vintage-brown tracking-tight">
            Why Choose Saarangi?
          </h2>

          <div className="ornament-line my-4">
            <span className="text-vintage-gold text-lg">✦</span>
          </div>

          <p className="text-sm sm:text-base text-vintage-brown/80 max-w-2xl mx-auto leading-relaxed">
            Preserving culinary heritage, honoring authentic slow-cooking arts, and creating memories across generations in Vijayanagar, Mysuru.
          </p>
        </div>

        {/* 7 Selling Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className={`p-7 rounded-2xl bg-vintage-ivory border border-vintage-gold/30 hover:border-vintage-gold hover:shadow-vintage-lg transition-all duration-300 group flex flex-col justify-between ${
                index === WHY_CHOOSE_ITEMS.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-vintage-cream/60 border border-vintage-gold/30 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                    {iconMap[item.iconName]}
                  </div>
                  <span className="text-xs font-serif font-bold text-vintage-gold/60">
                    0{index + 1}
                  </span>
                </div>

                <div className="mb-2">
                  <h3 className="font-serif text-xl font-bold text-vintage-brown group-hover:text-vintage-maroon transition-colors">
                    {item.title}
                  </h3>
                  {item.kannadaTitle && (
                    <p className="text-xs text-vintage-terracotta font-medium mt-0.5">
                      {item.kannadaTitle}
                    </p>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-vintage-brown/80 leading-relaxed mt-2.5">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-vintage-gold/15 flex items-center justify-between text-[11px] font-semibold text-vintage-gold uppercase tracking-wider">
                <span>Authentic Mysuru Heritage</span>
                <span>✦</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
