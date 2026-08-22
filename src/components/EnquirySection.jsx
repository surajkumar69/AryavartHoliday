import React, { useState } from 'react';
import { Calendar, CheckCircle2, MessageCircle, ExternalLink, ShieldCheck, Clock, Maximize2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export function BookingFormCard({ isSticky = false, onOpenBookingModal }) {
  const [iframeLoading, setIframeLoading] = useState(true);

  const phone = "918857949913";
  const message = "Hello SakalSari Farmhouse, I would like to check availability and book dates.";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className={`h-full bg-white rounded-3xl p-4 sm:p-6 border border-brand-sand shadow-soft-md flex flex-col justify-between ${isSticky ? 'max-h-[84vh]' : 'min-h-[580px]'}`}>
      
      {/* Top Header Bar */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-brand-sand/70">
        <div className="flex items-center gap-2">
          <Calendar className="w-4.5 h-4.5 text-brand-green" />
          <span className="font-serif font-bold text-brand-charcoal text-base sm:text-lg">Book / Enquire</span>
        </div>

        <div className="flex items-center gap-2">
          {onOpenBookingModal && (
            <button
              onClick={onOpenBookingModal}
              className="inline-flex items-center gap-1 text-xs text-brand-charcoal bg-brand-beige hover:bg-brand-sand/60 font-semibold px-3 py-1 rounded-full border border-brand-sand transition-colors"
              title="Open full screen booking popup"
            >
              <Maximize2 className="w-3 h-3 text-brand-sageDark" />
              <span>Expand</span>
            </button>
          )}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-brand-green bg-brand-greenLight font-semibold px-3 py-1 rounded-full border border-brand-green/20 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-brand-green" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Embedded Google Form Container - Clean iframe rendering */}
      <div className="relative w-full flex-1 min-h-[460px] rounded-2xl overflow-hidden bg-[#fdfbf7] border border-brand-sand/50 shadow-inner">
        {iframeLoading && (
          <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center z-10">
            <div className="w-10 h-10 rounded-full border-3 border-brand-green border-t-transparent animate-spin mb-3"></div>
            <p className="font-serif font-bold text-brand-charcoal text-base">Loading Enquiry Form...</p>
            <p className="text-xs text-brand-mutedText mt-1">Official SakalSari Reservation</p>
          </div>
        )}

        <iframe
          src={siteConfig.business.googleFormEmbedUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="SakalSari Farmhouse Enquiry Form"
          onLoad={() => setIframeLoading(false)}
          className="w-full h-full min-h-[460px] rounded-2xl border-0"
        >
          Loading...
        </iframe>
      </div>

      {/* Footer Info */}
      <div className="mt-3 flex items-center justify-between text-[11px] text-brand-mutedText pt-2 border-t border-brand-sand/40">
        <span className="flex items-center gap-1 text-emerald-700 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Direct Booking
        </span>
        
        <div className="flex items-center gap-3">
          {onOpenBookingModal && (
            <button
              onClick={onOpenBookingModal}
              className="hover:underline flex items-center gap-1 text-brand-charcoal font-medium text-[11px]"
            >
              <span>Popup Form</span>
              <Maximize2 className="w-3 h-3 text-brand-sageDark" />
            </button>
          )}
          <a
            href={siteConfig.business.googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center gap-1 text-brand-charcoal text-[11px]"
          >
            <span>Google Form</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

    </div>
  );
}

export default function EnquirySection({ onOpenBookingModal }) {
  const phone = "918857949913";
  const message = "Hello SakalSari Farmhouse, I would like to enquire about availability and rates.";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <section id="enquiry" className="py-16 lg:py-24 bg-brand-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-sageDark bg-brand-beige border border-brand-sand px-4 py-1.5 rounded-full inline-block mb-3">
            Reservation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
            Enquire &amp; Book Your Stay
          </h2>
          <div className="w-16 h-1 bg-brand-sage mx-auto mb-4 rounded-full"></div>
          <p className="text-brand-mutedText text-base sm:text-lg font-light">
            Fill out the form below or chat on WhatsApp for instant confirmation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Quick Info */}
          <div className="lg:col-span-5">
            <div className="h-full bg-white rounded-3xl p-6 sm:p-7 border border-brand-sand shadow-soft-sm flex flex-col justify-between space-y-5">
              
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-green block">
                  Direct Owner Response
                </span>
                <h3 className="font-serif text-2xl font-bold text-brand-charcoal">
                  How Reservation Works
                </h3>
                <p className="text-xs sm:text-sm text-brand-mutedText font-light leading-relaxed">
                  Submit your requested dates. We will get in touch promptly via WhatsApp/Call to confirm your booking details.
                </p>

                <div className="space-y-3.5 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-brand-greenLight text-brand-green flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-brand-charcoal text-sm">Direct Owner Booking</h4>
                      <p className="text-xs text-brand-mutedText">No commission or hidden fees.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-brand-greenLight text-brand-green flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-brand-charcoal text-sm">Flexible Timings</h4>
                      <p className="text-xs text-brand-mutedText">Custom check-in available upon request.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-brand-greenLight text-brand-green flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-brand-charcoal text-sm">100% Privacy &amp; Security</h4>
                      <p className="text-xs text-brand-mutedText">Your details are kept confidential.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-brand-sand/60 mt-auto space-y-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-greenHover text-white font-semibold py-3 rounded-full text-xs uppercase tracking-wider transition-colors shadow-soft-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp (+91 88579 49913)</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Embedded Form */}
          <div className="lg:col-span-7">
            <BookingFormCard onOpenBookingModal={onOpenBookingModal} />
          </div>

        </div>

      </div>
    </section>
  );
}
