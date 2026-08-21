import React from 'react';
import { MapPin, ChevronDown, Sparkles, Calendar, Compass } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Hero({ onOpenBookingModal, heroBgVideo }) {
  const bgVideo = heroBgVideo || siteConfig.hero.bgVideo;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
      
      {/* Background Video / Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          poster={siteConfig.hero.fallbackBgImage}
          className="w-full h-full object-cover scale-105 filter brightness-90"
        >
          <source src={bgVideo} type="video/mp4" />
          <img src={siteConfig.hero.fallbackBgImage} alt="Farmhouse Nature Background" className="w-full h-full object-cover" />
        </video>
        
        {/* Gradients & Vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-black/60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black/80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 flex flex-col items-center">
        
        {/* Location Indicator Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-brand-gold/40 text-brand-goldLight px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wider mb-6 shadow-lg animate-pulse-subtle">
          <MapPin className="w-4 h-4 text-brand-gold" />
          <span>{siteConfig.hero.badge}</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[1.1] mb-4 drop-shadow-md">
          {siteConfig.hero.title}
        </h1>

        {/* Subheading */}
        <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-brand-goldLight font-medium mb-6 tracking-wide drop-shadow">
          "{siteConfig.hero.subheading}"
        </p>

        {/* Description */}
        <p className="max-w-2xl text-slate-200 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-10 drop-shadow-sm">
          {siteConfig.hero.description}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          {/* Primary CTA */}
          <button
            onClick={onOpenBookingModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-gold via-amber-500 to-yellow-600 hover:from-yellow-500 hover:to-brand-gold text-brand-dark px-8 py-4 rounded-full text-sm sm:text-base font-bold uppercase tracking-wider shadow-gold-glow hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <Calendar className="w-5 h-5" />
            <span>{siteConfig.hero.primaryCtaText}</span>
          </button>

          {/* Secondary CTA */}
          <a
            href="#villa"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 hover:border-brand-gold px-8 py-4 rounded-full text-sm sm:text-base font-semibold tracking-wider transition-all duration-300 transform hover:-translate-y-1"
          >
            <Compass className="w-5 h-5 text-brand-gold" />
            <span>{siteConfig.hero.secondaryCtaText}</span>
          </a>
        </div>

        {/* Feature Pill Highlights */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-300 font-medium max-w-3xl">
          <div className="bg-black/30 backdrop-blur-sm border border-white/10 px-3 py-2 rounded-lg flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Private Jacuzzi</span>
          </div>
          <div className="bg-black/30 backdrop-blur-sm border border-white/10 px-3 py-2 rounded-lg flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>1BHK Villa</span>
          </div>
          <div className="bg-black/30 backdrop-blur-sm border border-white/10 px-3 py-2 rounded-lg flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Lush Green Lawns</span>
          </div>
          <div className="bg-black/30 backdrop-blur-sm border border-white/10 px-3 py-2 rounded-lg flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>CCTV Security</span>
          </div>
        </div>

      </div>

      {/* Subtle Scroll Down Animation */}
      <a 
        href="#about" 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-slate-300 hover:text-brand-gold transition-colors group cursor-pointer"
        aria-label="Scroll to About section"
      >
        <span className="text-[11px] uppercase tracking-widest font-semibold mb-1 opacity-80 group-hover:opacity-100">
          Scroll Down
        </span>
        <div className="w-6 h-10 border-2 border-slate-300/60 group-hover:border-brand-gold rounded-full flex justify-center p-1 transition-colors">
          <ChevronDown className="w-4 h-4 animate-bounce text-brand-gold" />
        </div>
      </a>

    </section>
  );
}
