import React from 'react';
import { Home, Sparkles, Trees, Utensils, Shirt, Maximize, Shield } from 'lucide-react';

const mainAmenities = [
  { name: "1 BHK Villa", desc: "Private, spacious master bedroom villa", icon: Home },
  { name: "Private Jacuzzi", desc: "Luxury hydro-jets for relaxing baths", icon: Sparkles },
  { name: "Garden", desc: "Lush outdoor lawn and nature walks", icon: Trees },
  { name: "Kitchen", desc: "Equipped for home-cooked meals", icon: Utensils },
  { name: "Washing Machine", desc: "In-house laundry facilities", icon: Shirt },
  { name: "Spacious Green Area", desc: "Expansive private open grounds", icon: Maximize },
  { name: "CCTV / Security", desc: "24/7 exterior gated safety", icon: Shield }
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="py-16 lg:py-24 bg-brand-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-sageDark bg-brand-beige border border-brand-sand px-4 py-1.5 rounded-full inline-block mb-3">
            Essential Comforts
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
            Farmhouse Amenities
          </h2>
          <div className="w-16 h-1 bg-brand-sage mx-auto mb-4 rounded-full"></div>
          <p className="text-brand-mutedText text-base sm:text-lg font-light">
            Everything provided for a comfortable, peaceful, and private stay.
          </p>
        </div>

        {/* Clean Icon-Based Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {mainAmenities.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-white border border-brand-sand/70 hover:border-brand-sage/60 hover:shadow-soft-md transition-all duration-300 text-center flex flex-col items-center justify-center transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-sageLight text-brand-sageDark flex items-center justify-center mb-4 transition-colors group-hover:bg-brand-sage group-hover:text-white">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-charcoal mb-1">
                  {item.name}
                </h3>
                <p className="text-xs text-brand-mutedText font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
