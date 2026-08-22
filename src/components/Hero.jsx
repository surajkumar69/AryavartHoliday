import React from 'react';
import { Compass, MessageCircle, Play } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Hero({ onOpenBookingModal }) {
  const phone = "918857949913";
  const message = "Hello SakalSari Farmhouse, I would like to enquire about availability and rates.";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <section id="home" className="hero pt-28 pb-16 lg:pt-36 lg:pb-24">
      
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
      <div className="hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-14">
        
        <div className="max-w-xl space-y-5 text-left">
          
          {/* Tagline */}
          <div className="space-y-2">
            <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-white font-semibold drop-shadow-md leading-snug">
              "{siteConfig.hero.subheading}"
            </p>
          </div>

          {/* Compact Side-by-Side Action Buttons */}
          <div className="pt-2 grid grid-cols-2 gap-2.5 max-w-md">
            
            {/* Primary WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 bg-brand-green hover:bg-brand-greenHover text-white px-3.5 py-3 rounded-full text-xs font-semibold tracking-wide shadow-soft-md transition-all duration-200 truncate"
            >
              <MessageCircle className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">WhatsApp Chat</span>
            </a>

            {/* Secondary Gallery Button */}
            <a
              href="#gallery"
              className="inline-flex items-center justify-center gap-1.5 bg-white/95 hover:bg-white text-brand-charcoal border border-brand-sand px-3.5 py-3 rounded-full text-xs font-semibold tracking-wide shadow-soft-sm transition-all duration-200 truncate"
            >
              <Compass className="w-4 h-4 text-brand-green flex-shrink-0" />
              <span className="truncate">View Gallery</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
