import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, ExternalLink } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Footer({ onOpenBookingModal, customLogo }) {
  const phone = "918857949913";
  const message = "Hello SakalSari Farmhouse, I would like to enquire about stay details.";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  const logoSrc = customLogo || siteConfig.business.logoUrl;

  return (
    <footer className="bg-brand-charcoal text-slate-300 pt-16 pb-8 relative overflow-hidden border-t border-brand-sand/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-brand-sand bg-white p-0.5 shadow-sm">
                <img 
                  src={logoSrc} 
                  alt="SakalSari Logo" 
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/logo.jpg';
                  }}
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
                  {siteConfig.business.name}
                </h3>
                <span className="text-[10px] uppercase tracking-widest text-brand-gold font-semibold">
                  Private Countryside Stay
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-sm">
              {siteConfig.business.shortDescription}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenBookingModal}
                className="bg-brand-gold hover:bg-yellow-500 text-brand-charcoal px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-soft-sm"
              >
                Book Your Stay
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider border-b border-brand-gold/30 pb-2 inline-block">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#home" className="hover:text-brand-gold transition-colors flex items-center gap-1.5">
                  <span>•</span> Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-gold transition-colors flex items-center gap-1.5">
                  <span>•</span> About SakalSari
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-brand-gold transition-colors flex items-center gap-1.5">
                  <span>•</span> Amenities
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-brand-gold transition-colors flex items-center gap-1.5">
                  <span>•</span> Photo &amp; Video Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-gold transition-colors flex items-center gap-1.5">
                  <span>•</span> Contact &amp; Location
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider border-b border-brand-gold/30 pb-2 inline-block">
              Contact Us
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {siteConfig.business.fullAddress}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a href={`tel:${siteConfig.business.phone}`} className="hover:text-brand-gold transition-colors font-medium">
                  {siteConfig.business.displayPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a href={`mailto:${siteConfig.business.email}`} className="hover:text-brand-gold transition-colors">
                  {siteConfig.business.email}
                </a>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href={siteConfig.business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold border border-white/20 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-brand-gold" />
                <span>Google Maps</span>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} SakalSari Farmhouse. All Rights Reserved.</p>
          <p className="text-slate-500">Vadgaon, Tal–Tasgaon, Dist–Sangli, Maharashtra – 416311</p>
        </div>

      </div>
    </footer>
  );
}
