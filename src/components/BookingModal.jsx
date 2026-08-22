import React, { useState, useEffect } from 'react';
import { X, Calendar, MessageCircle, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function BookingModal({ isOpen, onClose }) {
  const [iframeLoading, setIframeLoading] = useState(true);

  // Lock background body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close popup when user presses Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const phone = "918857949913";
  const message = "Hello SakalSari Farmhouse, I would like to check availability and book dates for stay.";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      {/* Modal Card Box */}
      <div 
        className="relative w-full max-w-5xl h-[94vh] sm:h-[90vh] bg-[#141416] rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col my-auto transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Dark Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 bg-[#141416] text-white border-b border-white/10 flex-shrink-0">
          
          {/* Header Left: Calendar Icon, Title, Location */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold flex-shrink-0 shadow-soft-sm">
              <Calendar className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="min-w-0">
              <h3 className="font-serif font-bold text-base sm:text-xl text-white tracking-tight truncate">
                Book Your Stay at SakalSari
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light flex items-center gap-1.5 truncate mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 inline" />
                <span>Vadgaon • Sangli, Maharashtra</span>
              </p>
            </div>
          </div>

          {/* Header Right: WhatsApp Chat Button & Close X */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 ml-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-white bg-[#25D366] hover:bg-[#20bd5a] font-semibold px-3 sm:px-4 py-2 rounded-full shadow-soft-sm transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
              <span className="hidden xs:inline">WhatsApp Chat</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Close booking modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Body: Large Clean White Card with Embedded Google Form */}
        <div className="relative flex-1 bg-[#fdfbf7] p-2.5 sm:p-5 overflow-hidden flex flex-col min-h-0">
          
          {iframeLoading && (
            <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center z-20">
              <div className="w-10 h-10 rounded-full border-3 border-emerald-600 border-t-transparent animate-spin mb-3"></div>
              <p className="font-serif font-bold text-brand-charcoal text-lg">Loading SakalSari Booking Form...</p>
              <p className="text-xs text-brand-mutedText mt-1">Official SakalSari Reservation System</p>
            </div>
          )}

          {/* Clean White Embedded Form Card with Internal Scrolling */}
          <div className="w-full h-full flex-1 bg-white rounded-2xl sm:rounded-3xl border border-brand-sand/70 shadow-soft-md overflow-hidden relative">
            <iframe
              src={siteConfig.business.googleFormEmbedUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Book Your Stay at SakalSari"
              onLoad={() => setIframeLoading(false)}
              className="w-full h-[calc(100%+56px)] -mt-14 sm:-mt-16 rounded-2xl sm:rounded-3xl"
            >
              Loading Booking Form...
            </iframe>
          </div>

        </div>

        {/* Subtle Footer Bar */}
        <div className="px-4 sm:px-6 py-2.5 bg-[#141416] border-t border-white/10 flex items-center justify-between text-xs text-slate-300 flex-shrink-0">
          <div className="flex items-center gap-1.5 text-emerald-400 font-medium text-[11px] sm:text-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Direct Official Reservation</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={siteConfig.business.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1 text-slate-300 hover:text-white text-[11px] sm:text-xs"
            >
              <span>Full Screen Form</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={onClose}
              className="text-[11px] sm:text-xs font-semibold text-slate-300 hover:text-white hover:underline"
            >
              Close Window
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
