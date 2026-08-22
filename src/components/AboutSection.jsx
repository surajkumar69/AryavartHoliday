import React from 'react';
import { Heart, Users, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function AboutSection({ onOpenBookingModal }) {
  const phone = "918857949913";
  const message = "Hello SakalSari Farmhouse, I am interested in booking a private stay.";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <section id="about" className="py-16 lg:py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-sageDark bg-brand-beige border border-brand-sand px-4 py-1.5 rounded-full inline-block mb-3">
            About SakalSari Farmhouse
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
            {siteConfig.about.headline}
          </h2>
          <div className="w-16 h-1 bg-brand-sage mx-auto mb-4 rounded-full"></div>
          <p className="text-brand-mutedText text-base sm:text-lg font-light">
            {siteConfig.about.subheadline}
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column - Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-soft-lg border-2 border-white bg-white group">
              <img
                src={siteConfig.about.image}
                alt="SakalSari Farmhouse Veranda & Porch Seating"
                className="w-full h-[400px] sm:h-[480px] lg:h-[500px] object-cover rounded-3xl transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Bottom Floating Card */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 glass-dark rounded-2xl text-white backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-green text-white flex items-center justify-center flex-shrink-0 font-bold">
                    <Heart className="w-4 h-4 fill-white text-white" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm sm:text-base font-bold text-white">100% Private Exclusive Stay</h4>
                    <p className="text-xs text-slate-200">Entire villa reserved solely for you and your guests</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Concise Description */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-4">
              {siteConfig.about.descriptionParagraphs.map((para, idx) => (
                <p key={idx} className="text-brand-charcoal text-base sm:text-lg leading-relaxed font-light">
                  {para}
                </p>
              ))}
            </div>

            {/* Target Audience Highlight */}
            <div className="p-4 bg-brand-beige/80 rounded-2xl border border-brand-sand flex items-start gap-3">
              <Users className="w-5 h-5 text-brand-sageDark flex-shrink-0 mt-0.5" />
              <p className="text-sm font-medium text-brand-charcoal">
                {siteConfig.about.targetAudience}
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-greenHover text-white px-6 py-3 rounded-full text-xs font-semibold tracking-wider transition-colors shadow-soft-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Quick WhatsApp Enquiry</span>
              </a>

              <button
                onClick={onOpenBookingModal}
                className="inline-flex items-center gap-2 bg-brand-charcoal hover:bg-black text-white px-6 py-3 rounded-full text-xs font-semibold tracking-wider transition-colors"
              >
                <span>Book Stay</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
