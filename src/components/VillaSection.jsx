import React from 'react';
import { Bed, Bath, Trees, UtensilsCrossed, Shirt, Sun, ShieldCheck, Video, Check } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

const iconMap = {
  Bed,
  Bath,
  Trees,
  UtensilsCrossed,
  Shirt,
  Sun,
  ShieldCheck,
  Video
};

export default function VillaSection({ onOpenBookingModal }) {
  return (
    <section id="villa" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-sand px-4 py-1.5 rounded-full inline-block mb-3 border border-brand-gold/20">
            Exclusive Living Space
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            {siteConfig.villa.title}
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto mb-4 rounded-full"></div>
          <p className="text-brand-textMuted text-base sm:text-lg font-light">
            {siteConfig.villa.subtitle}
          </p>
        </div>

        {/* Feature Banner - 1BHK Highlight */}
        <div className="mb-16 bg-gradient-to-r from-brand-forest via-brand-dark to-brand-moss rounded-3xl p-8 sm:p-12 text-white shadow-luxury relative overflow-hidden">
          
          <div className="absolute right-0 top-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block px-3 py-1 bg-brand-gold text-brand-dark rounded-full text-xs font-bold tracking-widest uppercase">
                Featured Villa Accommodation
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Spacious 1BHK Private Villa Experience
              </h3>
              <p className="text-slate-200 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
                Thoughtfully designed with warm interior finishes, natural sunlight, a master bedroom, fully accessible private kitchen, washing machine, and direct step-out access to your private jacuzzi and lush garden lawns.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-sm text-brand-goldLight font-medium">
                  <Check className="w-4 h-4 text-brand-gold" />
                  <span>Master Bedroom Suite</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-brand-goldLight font-medium">
                  <Check className="w-4 h-4 text-brand-gold" />
                  <span>Private Hydro Jacuzzi</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-brand-goldLight font-medium">
                  <Check className="w-4 h-4 text-brand-gold" />
                  <span>Exclusive Lawn Access</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                onClick={onOpenBookingModal}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-gold hover:bg-yellow-500 text-brand-dark font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider shadow-gold-glow transition-all duration-300 transform hover:scale-105"
              >
                Reserve 1BHK Villa Now
              </button>
            </div>

          </div>
        </div>

        {/* Feature Cards Grid (8 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.villa.features.map((feature) => {
            const IconComponent = iconMap[feature.icon] || Bed;
            return (
              <div 
                key={feature.id}
                className="group p-6 rounded-2xl bg-brand-cream/60 border border-brand-sand hover:border-brand-gold/50 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-soft-lg flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-forest/10 group-hover:bg-brand-forest text-brand-forest group-hover:text-brand-gold flex items-center justify-center mb-5 transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-forest transition-colors">
                    {feature.name}
                  </h4>
                  <p className="text-brand-textMuted text-xs sm:text-sm font-normal leading-relaxed">
                    {feature.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center text-[11px] uppercase tracking-wider font-semibold text-brand-gold group-hover:translate-x-1 transition-transform">
                  <span>Included in your stay</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
