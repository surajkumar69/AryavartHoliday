import React from 'react';
import { QrCode, ShieldAlert, CheckCircle2, Copy, Settings2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function PaymentSection({ customQrImage, onOpenCustomizer }) {
  const qrImageSrc = customQrImage || siteConfig.payment.qrCodeImage;

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(siteConfig.payment.upiId);
    alert(`UPI ID (${siteConfig.payment.upiId}) copied to clipboard!`);
  };

  return (
    <section id="payment" className="py-20 lg:py-28 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Payment &amp; Advance Confirmation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            {siteConfig.payment.title}
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto mb-4 rounded-full"></div>
          <p className="text-brand-textMuted text-base sm:text-lg font-light">
            {siteConfig.payment.subtitle}
          </p>
        </div>

        {/* Central Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-brand-sand shadow-luxury relative overflow-hidden">
          
          {/* Note Banner */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-xl mb-8 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
              <strong>Note:</strong> {siteConfig.payment.note}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: QR Code Display Area (Easily Replaceable) */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative group p-4 bg-white rounded-2xl border-2 border-brand-gold/30 shadow-md flex flex-col items-center">
                
                {/* QR Code Image Container */}
                <div className="w-48 h-48 bg-slate-50 rounded-xl overflow-hidden flex items-center justify-center p-2 border border-slate-100">
                  <img
                    src={qrImageSrc}
                    alt="SakalSari Farmhouse Payment QR Code"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = siteConfig.payment.qrCodeImage;
                    }}
                  />
                </div>

                <div className="mt-3 text-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-forest">
                    Scan with Google Pay / PhonePe / Paytm / BHIM
                  </span>
                </div>

                {/* Owner Replace QR Code Button Overlay */}
                <button
                  onClick={onOpenCustomizer}
                  className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-brand-gold hover:text-brand-dark bg-brand-sand/80 px-3 py-1 rounded-full border border-brand-gold/30 transition-colors"
                >
                  <Settings2 className="w-3.5 h-3.5" />
                  <span>Replace QR Code Image</span>
                </button>

              </div>
            </div>

            {/* Right Column: Payment Details & Direct UPI Copy */}
            <div className="md:col-span-7 space-y-6">
              
              <div>
                <h3 className="font-serif text-2xl font-bold text-brand-dark mb-1">
                  UPI Payment Details
                </h3>
                <p className="text-xs text-brand-textMuted">
                  Pay directly via any UPI app or bank transfer.
                </p>
              </div>

              {/* UPI ID Copy Box */}
              <div className="bg-brand-sand/60 p-4 rounded-xl border border-brand-gold/30 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-brand-forest block">
                    Official UPI ID
                  </span>
                  <span className="font-mono text-sm font-bold text-brand-dark">
                    {siteConfig.payment.upiId}
                  </span>
                </div>
                <button
                  onClick={handleCopyUpi}
                  className="p-2.5 rounded-lg bg-brand-forest text-white hover:bg-brand-dark transition-colors flex items-center gap-1 text-xs font-semibold"
                  title="Copy UPI ID"
                >
                  <Copy className="w-4 h-4" />
                  <span className="hidden sm:inline">Copy</span>
                </button>
              </div>

              {/* Step Guide */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs font-medium text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span>Step 1: Submit your dates in the Enquiry section above</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-medium text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span>Step 2: Pay advance amount via QR Code or UPI</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-medium text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span>Step 3: Share screenshot on WhatsApp (+91 88579 49913) for instant receipt</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
