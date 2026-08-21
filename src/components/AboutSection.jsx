import React from 'react';
import { CheckCircle2, Shield, Heart, Users, Sparkles, Utensils, Bath, Home } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function AboutSection({ onOpenBookingModal }) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-brand-cream relative overflow-hidden">
      
      {/* Decorative subtle background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-forest/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-4 py-1.5 rounded-full inline-block mb-3">
            About SakalSari Farmhouse
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-4 leading-tight">
            {siteConfig.about.headline}
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto mb-4 rounded-full"></div>
          <p className="text-brand-textMuted text-base sm:text-lg font-light">
            {siteConfig.about.subheadline}
          </p>
        </div>

        {/* Split Layout: Image on Left + Content on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-luxury border-4 border-white bg-white group">
              <img
                src={siteConfig.about.image}
                alt="SakalSari Farmhouse Exterior & Green Lawns"
                className="w-full h-[450px] sm:h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent"></div>
              
              {/* Badge overlay on image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-dark rounded-2xl text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-brand-dark font-bold">
                    <Heart className="w-5 h-5 fill-brand-dark" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-white">100% Private Experience</h4>
                    <p className="text-xs text-slate-200">Exclusively reserved for you &amp; your loved ones</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Floating Accent Card */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 glass-card p-5 rounded-2xl shadow-xl max-w-xs items-center gap-4 border border-brand-gold/30">
              <div className="w-12 h-12 rounded-xl bg-brand-forest text-brand-gold flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-forest">24/7 Security</p>
                <p className="text-xs text-slate-600 font-medium">Exterior CCTV &amp; Gated Boundary</p>
              </div>
            </div>
          </div>

          {/* Right Column - Text & Feature Bullet Points */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-4">
              {siteConfig.about.descriptionParagraphs.map((para, idx) => (
                <p key={idx} className="text-brand-textDark text-base sm:text-lg leading-relaxed font-normal">
                  {para}
                </p>
              ))}
            </div>

            {/* Target Audience Highlight */}
            <div className="p-4 bg-brand-sand/60 rounded-2xl border-l-4 border-brand-gold flex items-start gap-3">
              <Users className="w-5 h-5 text-brand-forest flex-shrink-0 mt-0.5" />
              <p className="text-sm font-semibold text-brand-dark">
                {siteConfig.about.targetAudience}
              </p>
            </div>

            {/* Key Feature Bullet List */}
            <div className="pt-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-forest mb-4">
                What Makes Your Stay Special:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {siteConfig.about.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 bg-white p-3 rounded-xl shadow-sm border border-brand-sand">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-brand-dark">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Amenity Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-forest/10 text-brand-forest text-xs font-semibold">
                <Home className="w-3.5 h-3.5" /> 1BHK Private Villa
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-forest/10 text-brand-forest text-xs font-semibold">
                <Bath className="w-3.5 h-3.5" /> Private Jacuzzi
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-forest/10 text-brand-forest text-xs font-semibold">
                <Utensils className="w-3.5 h-3.5" /> Kitchen &amp; Laundry
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-forest/10 text-brand-forest text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold" /> Spacious Lawns
              </span>
            </div>

            {/* Action CTA */}
            <div className="pt-4">
              <button
                onClick={onOpenBookingModal}
                className="inline-flex items-center gap-2 bg-brand-forest hover:bg-brand-dark text-white px-7 py-3.5 rounded-full text-sm font-bold tracking-wider transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span>Book Your Stay at SakalSari</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
