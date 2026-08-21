import React, { useState } from 'react';
import { Calendar, CheckCircle2, Phone, ExternalLink, ShieldCheck, Clock } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function EnquirySection() {
  const [iframeLoading, setIframeLoading] = useState(true);

  return (
    <section id="enquiry" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-sand/40 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-sand px-4 py-1.5 rounded-full inline-block mb-3 border border-brand-gold/20">
            Booking &amp; Availability
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            Enquire / Book Your Stay
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto mb-4 rounded-full"></div>
          <p className="text-brand-textMuted text-base sm:text-lg font-light">
            Fill out the official enquiry form below to check availability and reserve your private stay at SakalSari Farmhouse.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Quick Info & Benefits */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-forest rounded-3xl p-8 text-white shadow-luxury space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                  Instant Response
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Reservation Process
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
                  We process enquiries promptly. Once submitted, our manager will get in touch with you via call/WhatsApp to confirm dates and details.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-white text-sm">Direct Owner Booking</h4>
                    <p className="text-xs text-slate-300">No middleman fees or hidden commissions.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-white text-sm">Flexible Timings</h4>
                    <p className="text-xs text-slate-300">Standard &amp; custom check-in options available.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-white text-sm">100% Secure Privacy</h4>
                    <p className="text-xs text-slate-300">Your details are kept strictly confidential.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <p className="text-xs text-brand-goldLight font-medium">
                  Need immediate confirmation? Call or WhatsApp us:
                </p>
                <a
                  href={`tel:${siteConfig.business.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-dark px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-yellow-500 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {siteConfig.business.phone}</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Embedded Google Form Container */}
          <div className="lg:col-span-7">
            <div className="bg-brand-cream/80 rounded-3xl p-4 sm:p-6 border-2 border-brand-sand shadow-luxury relative min-h-[680px] flex flex-col justify-between">
              
              {/* Top Form Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-brand-sand">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-brand-forest" />
                  <span className="font-serif font-bold text-brand-dark text-base">SakalSari Booking Form</span>
                </div>
                <a
                  href={siteConfig.business.googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-forest hover:text-brand-gold font-semibold flex items-center gap-1"
                >
                  <span>Open in New Tab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Loading Skeleton */}
              {iframeLoading && (
                <div className="absolute inset-x-6 top-20 bottom-6 bg-white rounded-2xl flex flex-col items-center justify-center p-6 text-center animate-pulse z-10">
                  <div className="w-12 h-12 rounded-full border-4 border-brand-gold border-t-transparent animate-spin mb-4"></div>
                  <p className="font-serif font-bold text-brand-dark text-lg">Loading Official Enquiry Form...</p>
                  <p className="text-xs text-brand-textMuted mt-1">Please wait a moment while the Google Form initializes.</p>
                </div>
              )}

              {/* Google Form Iframe Integration */}
              <div className="w-full h-[620px] rounded-2xl overflow-hidden bg-white shadow-inner border border-slate-200">
                <iframe
                  src={siteConfig.business.googleFormEmbedUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="SakalSari Farmhouse Enquiry Form"
                  onLoad={() => setIframeLoading(false)}
                  className="w-full h-full"
                >
                  Loading Enquiry Form...
                </iframe>
              </div>

              <div className="mt-3 text-center text-xs text-brand-textMuted">
                Form secured by Google Forms • Official SakalSari Booking Service
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
