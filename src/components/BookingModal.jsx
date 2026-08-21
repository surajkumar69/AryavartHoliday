import React, { useState } from 'react';
import { X, Calendar, ExternalLink, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function BookingModal({ isOpen, onClose }) {
  const [iframeLoading, setIframeLoading] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl overflow-hidden shadow-2xl border border-brand-gold/30 flex flex-col">
        
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-brand-forest text-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center font-bold">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-white">Book Your Stay at SakalSari</h3>
              <p className="text-xs text-brand-goldLight">Vadgaon • Sangli, Maharashtra</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.business.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-brand-gold hover:underline font-semibold bg-white/10 px-3 py-1.5 rounded-full"
            >
              <span>Open Google Form</span>
              <ExternalLink className="w-3.5 h-3.5" />
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
        <div className="relative flex-1 bg-brand-cream/40 p-2 sm:p-4 overflow-y-auto">
          
          {iframeLoading && (
            <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center z-10">
              <div className="w-12 h-12 rounded-full border-4 border-brand-gold border-t-transparent animate-spin mb-4"></div>
              <p className="font-serif font-bold text-brand-dark text-lg">Loading SakalSari Booking Form...</p>
              <p className="text-xs text-brand-textMuted mt-1">Directly connected to official Google Form.</p>
            </div>
          )}

          <div className="w-full h-[650px] rounded-2xl overflow-hidden shadow-inner border border-slate-200 bg-white">
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
        <div className="px-6 py-3 bg-brand-cream border-t border-slate-200 flex items-center justify-between text-xs text-brand-textMuted">
          <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Direct Official Reservation</span>
          </div>
          <button
            onClick={onClose}
            className="text-xs font-semibold text-brand-forest hover:underline"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
