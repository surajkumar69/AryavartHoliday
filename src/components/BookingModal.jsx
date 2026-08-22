import React, { useState } from 'react';
import { X, Calendar, ExternalLink, ShieldCheck, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function BookingModal({ isOpen, onClose }) {
  const [iframeLoading, setIframeLoading] = useState(true);

  if (!isOpen) return null;

  const phone = "918857949913";
  const message = "Hello SakalSari Farmhouse, I would like to enquire about availability and rates.";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl overflow-hidden shadow-2xl border border-brand-sand flex flex-col">
        
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-brand-charcoal text-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-gold text-brand-charcoal flex items-center justify-center font-bold">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-white">Book Your Stay at SakalSari</h3>
              <p className="text-xs text-brand-goldLight">Vadgaon • Sangli, Maharashtra</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-emerald-300 hover:text-emerald-200 font-semibold bg-emerald-950/60 border border-emerald-500/40 px-3 py-1.5 rounded-full"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Chat</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Body Container */}
        <div className="relative flex-1 bg-brand-cream p-2 sm:p-4 overflow-y-auto">
          
          {iframeLoading && (
            <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center z-10">
              <div className="w-10 h-10 rounded-full border-3 border-brand-sage border-t-transparent animate-spin mb-3"></div>
              <p className="font-serif font-bold text-brand-charcoal text-lg">Loading SakalSari Booking Form...</p>
              <p className="text-xs text-brand-mutedText mt-1">Connected to official Google Form.</p>
            </div>
          )}

          <div className="w-full h-[650px] rounded-2xl overflow-hidden shadow-inner border border-brand-sand bg-white">
            <iframe
              src={siteConfig.business.googleFormEmbedUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="SakalSari Booking Form Modal"
              onLoad={() => setIframeLoading(false)}
              className="w-full h-full"
            >
              Loading Booking Form...
            </iframe>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-brand-cream border-t border-brand-sand flex items-center justify-between text-xs text-brand-mutedText">
          <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Direct Official Reservation</span>
          </div>
          <button
            onClick={onClose}
            className="text-xs font-semibold text-brand-charcoal hover:underline"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
