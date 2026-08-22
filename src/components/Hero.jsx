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

      {/* Soft Light Warm Pastel Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8">
        
        <div className="max-w-3xl space-y-6 text-left">
          
          {/* Small Location Badge */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-brand-sand text-brand-green px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-soft-sm">
            <MapPin className="w-3.5 h-3.5 text-brand-green" />
            <span>{siteConfig.hero.badge}</span>
          </div>

          {/* Title & Tagline */}
          <div className="space-y-3">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-charcoal tracking-tight leading-[1.15]">
              {siteConfig.hero.title}
            </h1>
            <p className="font-serif italic text-xl sm:text-2xl text-brand-green font-semibold">
              "{siteConfig.hero.subheading}"
            </p>
          </div>

          {/* Short Description */}
          <p className="text-brand-mutedText text-base sm:text-lg font-light leading-relaxed max-w-xl">
            {siteConfig.hero.description}
          </p>

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
              className="inline-flex items-center justify-center gap-2 bg-white/95 hover:bg-white text-brand-charcoal border border-brand-sand px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide shadow-soft-sm transition-all duration-200"
            >
              <Compass className="w-4 h-4 text-brand-green" />
              <span>View Gallery</span>
            </a>

          </div>

          {/* 3 Minimal Features Aligned at Bottom */}
          <div className="pt-6 border-t border-brand-sand/80 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-semibold text-brand-charcoal">
            <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3.5 py-2 rounded-lg border border-brand-sand/60 shadow-soft-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-green" />
              <span>Private 1BHK Villa</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3.5 py-2 rounded-lg border border-brand-sand/60 shadow-soft-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-green" />
              <span>Private Jacuzzi</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3.5 py-2 rounded-lg border border-brand-sand/60 shadow-soft-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-green" />
              <span>Green Garden Area</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
