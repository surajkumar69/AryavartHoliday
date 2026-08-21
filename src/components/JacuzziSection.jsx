import React from 'react';
import { Sparkles, Waves, Moon, Heart } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function JacuzziSection({ onOpenBookingModal }) {
  return (
    <section className="relative py-24 lg:py-32 bg-brand-dark text-white overflow-hidden">
      
      {/* Background Image with Dark Gradient Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteConfig.jacuzzi.image}
          alt="Private Jacuzzi at SakalSari Farmhouse"
          className="w-full h-full object-cover filter brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40 text-brand-goldLight px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span>Luxury Hydro-Therapy Feature</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              {siteConfig.jacuzzi.headline}
            </h2>

            <p className="font-serif italic text-2xl sm:text-3xl text-brand-goldLight font-medium">
              {siteConfig.jacuzzi.subheadline}
            </p>

            <div className="w-24 h-1 bg-brand-gold rounded-full"></div>

            <p className="text-slate-200 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
              {siteConfig.jacuzzi.description}
            </p>

            {/* Feature Bullets Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <Waves className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif font-bold text-white text-base">Gentle Hydro Jets</h4>
                  <p className="text-xs text-slate-300">Targeted water massage for deep muscle relaxation</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <Moon className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif font-bold text-white text-base">Evening Stargazing</h4>
                  <p className="text-xs text-slate-300">Enjoy warm open-air baths under clear countryside skies</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button
                onClick={onOpenBookingModal}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-gold to-yellow-600 hover:from-yellow-500 hover:to-brand-gold text-brand-dark font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider shadow-gold-glow transition-all duration-300 transform hover:-translate-y-1"
              >
                <Heart className="w-4 h-4 fill-brand-dark" />
                <span>Book Your Jacuzzi Retreat</span>
              </button>
            </div>

          </div>

          {/* Visual Showcase Glass Card */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="glass-dark p-6 rounded-3xl border border-brand-gold/30 shadow-luxury space-y-6">
              <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/20">
                <img
                  src={siteConfig.jacuzzi.image}
                  alt="Jacuzzi detail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-forest/20"></div>
              </div>

              <div className="space-y-3 text-center">
                <h3 className="font-serif text-2xl font-bold text-brand-goldLight">
                  Exclusive &amp; Temperature Controlled
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Cleaned and sanitized before every check-in. Designed exclusively for your private group during your stay.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
