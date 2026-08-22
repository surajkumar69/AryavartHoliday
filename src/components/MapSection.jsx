import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function MapSection() {
  return (
    <section className="py-12 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card wrapper */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-soft-md border border-brand-sand grid grid-cols-1 lg:grid-cols-12">
          
          {/* Info Banner on Left */}
          <div className="lg:col-span-4 p-7 sm:p-9 bg-brand-charcoal text-white flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold bg-white/10 px-3 py-1 rounded-full inline-block">
                Location Map
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                How to Reach Us
              </h3>
              <div className="w-14 h-1 bg-brand-gold rounded-full"></div>
              
              <div className="space-y-3 text-slate-200 text-xs sm:text-sm font-light pt-2">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong>Address:</strong><br />
                    {siteConfig.business.fullAddress}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2.5">
              <a
                href={siteConfig.business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-yellow-500 text-brand-charcoal font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-colors shadow-soft-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={siteConfig.business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 text-xs text-brand-goldLight hover:underline font-medium text-center"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

          {/* Embedded Google Map Iframe on Right */}
          <div className="lg:col-span-8 relative min-h-[350px] lg:min-h-[420px]">
            <iframe
              src={siteConfig.business.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SakalSari Farmhouse Location Map"
              className="w-full h-full min-h-[360px]"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
