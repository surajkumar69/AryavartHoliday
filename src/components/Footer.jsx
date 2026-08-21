import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, ExternalLink, Calendar } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Footer({ onOpenBookingModal, customLogo }) {
  const whatsappUrl = `https://wa.me/918857949913?text=${encodeURIComponent("Hello SakalSari Farmhouse, I would like to enquire about booking dates.")}`;
  const logoSrc = customLogo || siteConfig.business.logoUrl;

  return (
    <footer className="bg-brand-dark text-slate-300 border-t border-brand-gold/20 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-gold bg-white p-0.5 shadow-md">
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
                <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                  {siteConfig.business.name}
                </h3>
                <span className="text-[10px] uppercase tracking-widest text-brand-gold font-medium">
                  Private Countryside Villa &amp; Jacuzzi
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-sm">
              {siteConfig.business.shortDescription} Experience ultimate privacy, lush green lawns, hydro jacuzzi, and peaceful surroundings in Vadgaon, Sangli.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenBookingModal}
                className="bg-brand-gold hover:bg-yellow-500 text-brand-dark px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                Book Your Stay
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-lg font-bold text-white uppercase tracking-wider border-b border-brand-gold/30 pb-2 inline-block">
              Quick Links
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
                <a href="#villa" className="hover:text-brand-gold transition-colors flex items-center gap-1.5">
                  <span>•</span> 1BHK Private Villa
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
                <a href="#enquiry" className="hover:text-brand-gold transition-colors flex items-center gap-1.5">
                  <span>•</span> Booking Enquiry
                </a>
              </li>
              <li>
                <a href="#payment" className="hover:text-brand-gold transition-colors flex items-center gap-1.5">
                  <span>•</span> UPI QR Payment
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-brand-gold transition-colors flex items-center gap-1.5">
                  <span>•</span> Location &amp; Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white uppercase tracking-wider border-b border-brand-gold/30 pb-2 inline-block">
              Contact &amp; Location
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {siteConfig.business.fullAddress}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a href={`tel:${siteConfig.business.phone}`} className="hover:text-brand-gold transition-colors font-medium">
                  {siteConfig.business.displayPhone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a href={`mailto:${siteConfig.business.email}`} className="hover:text-brand-gold transition-colors">
                  {siteConfig.business.email}
                </a>
              </div>
            </div>

            {/* External Quick Action Links */}
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
        <div className="pt-8 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 SakalSari Farmhouse. All Rights Reserved.</p>
          <p className="text-slate-500">Vadgaon, Tal–Tasgaon, Dist–Sangli, Maharashtra – 416311</p>
        </div>

      </div>
    </footer>
  );
}
