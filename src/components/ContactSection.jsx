import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Navigation, Clock } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function ContactSection() {
  const whatsappUrl = `https://wa.me/918857949913?text=${encodeURIComponent("Hello SakalSari Farmhouse, I would like to enquire about booking dates and details.")}`;

  return (
    <section id="location" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-sand px-4 py-1.5 rounded-full inline-block mb-3 border border-brand-gold/20">
            Reach Out To Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            Contact &amp; Location
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto mb-4 rounded-full"></div>
          <p className="text-brand-textMuted text-base sm:text-lg font-light">
            We are always here to assist you. Call, message on WhatsApp, or visit us in Vadgaon, Sangli.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: Phone */}
          <div className="bg-brand-cream/60 rounded-3xl p-8 border border-brand-sand shadow-sm hover:shadow-soft-lg transition-all text-center flex flex-col items-center justify-between">
            <div className="w-14 h-14 rounded-2xl bg-brand-forest text-brand-gold flex items-center justify-center mb-6 shadow-md">
              <Phone className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold block mb-1">
                Direct Call
              </span>
              <h3 className="font-serif text-2xl font-bold text-brand-dark mb-2">
                {siteConfig.business.phone}
              </h3>
              <p className="text-xs text-brand-textMuted mb-6">
                Available daily from 8:00 AM to 10:00 PM for enquiries
              </p>
            </div>
            <a
              href={`tel:${siteConfig.business.phone}`}
              className="w-full inline-flex items-center justify-center gap-2 bg-brand-forest hover:bg-brand-dark text-white font-bold py-3 rounded-full text-xs uppercase tracking-wider transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="bg-brand-cream/60 rounded-3xl p-8 border border-brand-sand shadow-sm hover:shadow-soft-lg transition-all text-center flex flex-col items-center justify-between">
            <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-md">
              <MessageCircle className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                Instant Chat
              </span>
              <h3 className="font-serif text-2xl font-bold text-brand-dark mb-2">
                WhatsApp Chat
              </h3>
              <p className="text-xs text-brand-textMuted mb-6">
                Quick responses for date checking, photos &amp; pricing
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-full text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Card 3: Location / Map */}
          <div className="bg-brand-cream/60 rounded-3xl p-8 border border-brand-sand shadow-sm hover:shadow-soft-lg transition-all text-center flex flex-col items-center justify-between">
            <div className="w-14 h-14 rounded-2xl bg-brand-gold text-brand-dark flex items-center justify-center mb-6 shadow-md">
              <MapPin className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold block mb-1">
                Farmhouse Address
              </span>
              <h3 className="font-serif text-xl font-bold text-brand-dark mb-2">
                Vadgaon, Sangli
              </h3>
              <p className="text-xs text-brand-textMuted mb-6 leading-relaxed">
                {siteConfig.business.fullAddress}
              </p>
            </div>
            <a
              href={siteConfig.business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-yellow-500 text-brand-dark font-bold py-3 rounded-full text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
