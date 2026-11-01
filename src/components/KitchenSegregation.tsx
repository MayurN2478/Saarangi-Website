import React from 'react';
import { ShieldCheck, Droplets, UtensilsCrossed, Building2, CheckCircle2, Leaf, HeartHandshake } from 'lucide-react';
import { SEGREGATION_DATA } from '../data/restaurantData';

export const KitchenSegregation: React.FC = () => {
  const pillarIcons: Record<string, React.ReactNode> = {
    'Building2': <Building2 className="w-8 h-8 text-vintage-gold" />,
    'Droplets': <Droplets className="w-8 h-8 text-vintage-gold" />,
    'UtensilsCrossed': <UtensilsCrossed className="w-8 h-8 text-vintage-gold" />,
    'ShieldCheck': <ShieldCheck className="w-8 h-8 text-vintage-gold" />,
  };

  return (
    <section id="segregation" className="py-20 sm:py-28 bg-vintage-darkest text-vintage-ivory relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vintage-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Leaf className="w-3.5 h-3.5 text-emerald-400" />
            <span>{SEGREGATION_DATA.kannadaTitle}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-vintage-ivory tracking-tight">
            {SEGREGATION_DATA.title}
          </h2>

          <div className="ornament-line my-4">
            <span className="text-vintage-gold text-lg">✦</span>
          </div>

          <p className="text-sm sm:text-base text-vintage-cream/80 max-w-2xl mx-auto leading-relaxed">
            {SEGREGATION_DATA.description}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SEGREGATION_DATA.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-vintage-brown/60 border border-vintage-gold/25 hover:border-vintage-gold/70 transition-all duration-300 shadow-lg flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-vintage-darkest/80 border border-vintage-gold/40 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {pillarIcons[pillar.icon]}
                </div>
                <h3 className="font-serif text-xl font-bold text-vintage-cream mb-2 group-hover:text-vintage-gold transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-vintage-sand/80 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-vintage-gold/15 flex items-center gap-2 text-xs font-medium text-emerald-400">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Zero Cross-Contamination</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-vintage-brown/80 to-emerald-950/40 border border-emerald-500/30 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-900/60 text-emerald-300 mb-3 border border-emerald-400/40">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-vintage-cream mb-2">
            Peace of Mind for Families & Pure Vegetarians
          </h3>
          <p className="text-xs sm:text-sm text-vintage-sand/85 max-w-2xl mx-auto leading-relaxed">
            From storage bins to stove tops and washing sinks, every step is isolated. Vegetarians can dine in complete comfort while non-vegetarians savor Mysuru's finest wood-fired curries and biryanis.
          </p>
        </div>
      </div>
    </section>
  );
};
