import React from 'react';
import { Calendar, Compass, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Hero({ onOpenBookingModal }) {
  const phone = "918857949913";
  const message = "Hello SakalSari Farmhouse, I would like to enquire about availability and rates.";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <section id="home" className="hero min-h-[80vh] sm:min-h-[88vh] lg:min-h-[92vh] pt-36 pb-24 lg:pt-48 lg:pb-36 flex items-end sm:items-center">
      
      {/* Background Video */}
      <video
        className="hero-background-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-poster.jpg"
      >
        <source
          src="/videos/farmhouse-background.mp4"
          type="video/mp4"
        />
      </video>

      {/* Subtle Dark Green Gradient Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-20">
        
        <div className="max-w-4xl lg:max-w-5xl space-y-5 text-left">
          
          {/* Tagline (Single Line) */}
          <div className="space-y-2">
            <h1 className="font-serif italic text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold drop-shadow-lg leading-tight tracking-tight whitespace-nowrap">
              Your Private Countryside Escape
            </h1>
          </div>

          {/* Action CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3 w-full max-w-md">
            
            {/* Primary Booking Modal CTA */}
            <button
              onClick={onOpenBookingModal}
              className="h-11 inline-flex items-center justify-center gap-2 bg-brand-charcoal hover:bg-black text-white px-5 rounded-full text-xs font-semibold tracking-wide shadow-soft-md transition-all duration-200 border border-white/20"
            >
              <Calendar className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <span>Book Your Stay</span>
            </button>

            {/* Primary WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 inline-flex items-center justify-center gap-1.5 bg-brand-green hover:bg-brand-greenHover text-white px-4 rounded-full text-xs font-semibold tracking-wide shadow-soft-md transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 flex-shrink-0" />
              <span>WhatsApp</span>
            </a>

            {/* Secondary Gallery Button */}
            <a
              href="#gallery"
              className="h-11 inline-flex items-center justify-center gap-1.5 bg-white/95 hover:bg-white text-brand-charcoal border border-brand-sand px-4 rounded-full text-xs font-semibold tracking-wide shadow-soft-sm transition-all duration-200"
            >
              <Compass className="w-4 h-4 text-brand-green flex-shrink-0" />
              <span>Gallery</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
