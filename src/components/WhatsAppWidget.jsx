import React, { useState } from 'react';
import { MessageCircle, Calendar, X } from 'lucide-react';

export default function WhatsAppWidget({ onOpenBookingModal }) {
  const [showTooltip, setShowTooltip] = useState(true);

  const phone = "918857949913";
  const message = "Hello SakalSari Farmhouse, I would like to enquire about availability and rates for a private stay.";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* MOBILE STICKY BOTTOM BAR (Visible only on small screens) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-brand-sand px-4 py-2.5 flex items-center justify-between gap-3 shadow-sticky animate-fadeIn">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-brand-green active:bg-brand-greenHover text-white font-semibold py-2.5 rounded-full text-xs tracking-wide shadow-soft-sm"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Chat</span>
        </a>

        <button
          onClick={onOpenBookingModal}
          className="flex-1 flex items-center justify-center gap-2 bg-brand-charcoal active:bg-black text-white font-semibold py-2.5 rounded-full text-xs tracking-wide shadow-soft-sm"
        >
          <Calendar className="w-3.5 h-3.5 text-brand-gold" />
          <span>Enquire Now</span>
        </button>
      </div>

      {/* DESKTOP FLOATING WHATSAPP BUTTON (Visible on sm and larger) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2 group">
        {showTooltip && (
          <div className="flex items-center gap-2 bg-white text-brand-charcoal px-4 py-2 rounded-2xl shadow-soft-md border border-brand-sand text-xs font-medium animate-bounce">
            <span>Quick booking info? Chat on WhatsApp!</span>
            <button 
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-600 ml-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-brand-green hover:bg-brand-greenHover text-white flex items-center justify-center shadow-soft-lg transform hover:scale-105 transition-all duration-200"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </>
  );
}
