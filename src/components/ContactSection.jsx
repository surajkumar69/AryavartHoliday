import React from 'react';
import { Phone, MapPin, MessageCircle, Navigation } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function ContactSection() {
  const phone = "918857949913";
  const message = "Hello SakalSari Farmhouse, I would like to get in touch regarding booking.";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="py-16 lg:py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-sageDark bg-brand-beige border border-brand-sand px-4 py-1.5 rounded-full inline-block mb-3">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
            Contact &amp; Location
          </h2>
          <div className="w-16 h-1 bg-brand-sage mx-auto mb-4 rounded-full"></div>
          <p className="text-brand-mutedText text-base sm:text-lg font-light">
            We are available to assist you. Call, message on WhatsApp, or visit us in Vadgaon, Sangli.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Phone */}
          <div className="bg-white rounded-3xl p-7 border border-brand-sand/70 shadow-soft-sm hover:shadow-soft-md transition-all text-center flex flex-col items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-brand-beige text-brand-charcoal flex items-center justify-center mb-5 border border-brand-sand">
              <Phone className="w-6 h-6 text-brand-sageDark" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-sageDark block mb-1">
                Direct Call
              </span>
              <h3 className="font-serif text-2xl font-bold text-brand-charcoal mb-2">
                {siteConfig.business.displayPhone}
              </h3>
              <p className="text-xs text-brand-mutedText mb-5">
                Available daily for enquiries
              </p>
            </div>
            <a
              href={`tel:${siteConfig.business.phone}`}
              className="w-full inline-flex items-center justify-center gap-2 bg-brand-charcoal hover:bg-black text-white font-semibold py-3 rounded-full text-xs uppercase tracking-wider transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-gold" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="bg-white rounded-3xl p-7 border border-brand-sand/70 shadow-soft-sm hover:shadow-soft-md transition-all text-center flex flex-col items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 border border-emerald-200">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 block mb-1">
                Instant Chat
              </span>
              <h3 className="font-serif text-2xl font-bold text-brand-charcoal mb-2">
                WhatsApp Chat
              </h3>
              <p className="text-xs text-brand-mutedText mb-5">
                Quick response for stay &amp; date details
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-full text-xs uppercase tracking-wider transition-colors shadow-soft-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Card 3: Location */}
          <div className="bg-white rounded-3xl p-7 border border-brand-sand/70 shadow-soft-sm hover:shadow-soft-md transition-all text-center flex flex-col items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-brand-beige text-brand-charcoal flex items-center justify-center mb-5 border border-brand-sand">
              <MapPin className="w-6 h-6 text-brand-sageDark" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-sageDark block mb-1">
                Farmhouse Address
              </span>
              <h3 className="font-serif text-xl font-bold text-brand-charcoal mb-2">
                Vadgaon, Sangli
              </h3>
              <p className="text-xs text-brand-mutedText mb-5 leading-relaxed">
                {siteConfig.business.fullAddress}
              </p>
            </div>
            <a
              href={siteConfig.business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-brand-beige hover:bg-brand-sand text-brand-charcoal border border-brand-sand font-semibold py-3 rounded-full text-xs uppercase tracking-wider transition-colors"
            >
              <Navigation className="w-4 h-4 text-brand-sageDark" />
              <span>Get Directions</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
