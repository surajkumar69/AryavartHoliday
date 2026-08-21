import React from 'react';
import { Home, Sparkles, Trees, Utensils, Shirt, Maximize, Camera, Lock, Compass, Key } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

const iconMap = {
  Home,
  Sparkles,
  Trees,
  Utensils,
  Shirt,
  Maximize,
  Camera,
  Lock,
  Compass,
  Key
};

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-sand px-4 py-1.5 rounded-full inline-block mb-3 border border-brand-gold/20">
            Comfort &amp; Facilities
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            Farmhouse Amenities
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto mb-4 rounded-full"></div>
          <p className="text-brand-textMuted text-base sm:text-lg font-light">
            Everything you need for a comfortable, secure, and memorable holiday.
          </p>
        </div>

        {/* 10 Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {siteConfig.amenities.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Home;
            return (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-brand-cream/60 border border-brand-sand hover:border-brand-gold/50 hover:bg-brand-forest hover:text-white transition-all duration-300 shadow-sm hover:shadow-luxury text-center flex flex-col items-center justify-center transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-white/10 text-brand-forest group-hover:text-brand-gold flex items-center justify-center mb-4 shadow-sm border border-slate-100 transition-colors">
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-dark group-hover:text-white mb-1 transition-colors">
                  {item.name}
                </h3>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-gold group-hover:text-brand-goldLight opacity-90">
                  {item.category}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
