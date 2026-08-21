import React from 'react';
import { Trees, Sun, Compass, Sparkles, Feather } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function GardenSection({ onOpenBookingModal }) {
  return (
    <section className="py-20 lg:py-28 bg-brand-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Side */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-luxury border-4 border-white group">
              <img
                src={siteConfig.garden.image}
                alt="SakalSari Farmhouse Lush Green Garden & Surroundings"
                className="w-full h-[450px] sm:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-5 glass-dark rounded-2xl text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-moss text-white flex items-center justify-center">
                    <Trees className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-white">Private Green Sanctuary</h4>
                    <p className="text-xs text-slate-200">Surrounded by nature &amp; fresh countryside air</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-brand-forest/10 text-brand-forest px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              <Trees className="w-4 h-4 text-brand-moss" />
              <span>Outdoors &amp; Recreation</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
              {siteConfig.garden.headline}
            </h2>

            <p className="font-serif italic text-xl sm:text-2xl text-brand-olive font-medium">
              {siteConfig.garden.subheadline}
            </p>

            <div className="w-20 h-1 bg-brand-gold rounded-full"></div>

            <p className="text-brand-textDark text-base sm:text-lg leading-relaxed font-normal">
              {siteConfig.garden.description}
            </p>

            {/* Outdoor highlights list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-brand-sand shadow-sm">
                <Sun className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <span className="text-sm font-semibold text-brand-dark">Morning Sun &amp; Dew Walks</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-brand-sand shadow-sm">
                <Feather className="w-5 h-5 text-brand-moss flex-shrink-0" />
                <span className="text-sm font-semibold text-brand-dark">Unpolluted Fresh Air</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-brand-sand shadow-sm">
                <Compass className="w-5 h-5 text-brand-forest flex-shrink-0" />
                <span className="text-sm font-semibold text-brand-dark">Spacious Outdoor Seating</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-brand-sand shadow-sm">
                <Sparkles className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <span className="text-sm font-semibold text-brand-dark">Private &amp; Peaceful Atmosphere</span>
              </div>
            </div>

            {/* CTA button */}
            <div className="pt-4">
              <button
                onClick={onOpenBookingModal}
                className="inline-flex items-center gap-2 bg-brand-forest hover:bg-brand-dark text-white font-bold px-7 py-3.5 rounded-full text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
              >
                <span>Experience SakalSari Outdoor Grounds</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
