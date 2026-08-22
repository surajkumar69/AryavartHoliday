import React from 'react';
import { MapPin, Compass, MessageCircle, Sparkles } from 'lucide-react';
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

      {/* Subtle Dark Green Gradient Overlay for Readable Text */}
      <div className="hero-overlay"></div>

      {/* Hero Content (Only Title, Subheading, and 2 CTA Buttons) */}
      <div className="hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        
        <div className="max-w-2xl space-y-6 text-left">
          
          {/* Tagline */}
          <div className="space-y-3">
            <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-white font-semibold drop-shadow-md leading-snug">
              "{siteConfig.hero.subheading}"
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            
            {/* Primary WhatsApp Button (Using Logo Green) */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-brand-green hover:bg-brand-greenHover text-white px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide shadow-soft-md transition-all duration-200"
            >
              <MessageCircle className="w-4.5 h-4.5" />
              <span>Enquire via WhatsApp</span>
            </a>

            {/* Secondary Gallery Button */}
            <a
              href="#gallery"
              className="inline-flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-brand-charcoal border border-brand-sand px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide shadow-soft-sm transition-all duration-200"
            >
              <Compass className="w-4 h-4 text-brand-green" />
              <span>View Gallery</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
