import React from 'react';
import { ShieldAlert, CheckCircle2, Copy, Settings2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function PaymentSection({ customQrImage, onOpenCustomizer }) {
  const qrImageSrc = customQrImage || siteConfig.payment.qrCodeImage;

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(siteConfig.payment.upiId);
    alert(`UPI ID (${siteConfig.payment.upiId}) copied to clipboard!`);
  };

  return (
    <section id="payment" className="py-16 lg:py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-sageDark bg-brand-beige border border-brand-sand px-4 py-1.5 rounded-full inline-block mb-3">
            Payment &amp; Confirmation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
            {siteConfig.payment.title}
          </h2>
          <div className="w-16 h-1 bg-brand-sage mx-auto mb-4 rounded-full"></div>
          <p className="text-brand-mutedText text-base sm:text-lg font-light">
            {siteConfig.payment.subtitle}
          </p>
        </div>

        {/* Central Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-brand-sand shadow-soft-md relative overflow-hidden">
          
          {/* Note Banner */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-3.5 rounded-xl mb-8 flex items-start gap-3">
            <ShieldAlert className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-medium">
              <strong>Note:</strong> {siteConfig.payment.note}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: QR Code Display Area */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative group p-4 bg-brand-cream/60 rounded-2xl border border-brand-sand shadow-soft-sm flex flex-col items-center">
                
                <div className="w-44 h-44 bg-white rounded-xl overflow-hidden flex items-center justify-center p-2 border border-brand-sand/60">
                  <img
                    src={qrImageSrc}
                    alt="SakalSari Payment QR Code"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = siteConfig.payment.qrCodeImage;
                    }}
                  />
                </div>

                <div className="mt-3 text-center">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-sageDark">
                    Google Pay / PhonePe / Paytm / BHIM
                  </span>
                </div>

                <button
                  onClick={onOpenCustomizer}
                  className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium text-brand-mutedText hover:text-brand-charcoal bg-white px-3 py-1 rounded-full border border-brand-sand/80 transition-colors"
                >
                  <Settings2 className="w-3 h-3 text-brand-sage" />
                  <span>Replace QR</span>
                </button>

              </div>
            </div>

            {/* Right Column: Payment Details & Direct UPI Copy */}
            <div className="md:col-span-7 space-y-5">
              
              <div>
                <h3 className="font-serif text-2xl font-bold text-brand-charcoal mb-1">
                  UPI Payment Details
                </h3>
                <p className="text-xs text-brand-mutedText">
                  Pay directly via any UPI app or bank transfer.
                </p>
              </div>

              {/* UPI ID Copy Box */}
              <div className="bg-brand-beige/70 p-4 rounded-2xl border border-brand-sand flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-brand-sageDark block">
                    Official UPI ID
                  </span>
                  <span className="font-mono text-sm font-bold text-brand-charcoal">
                    {siteConfig.payment.upiId}
                  </span>
                </div>
                <button
                  onClick={handleCopyUpi}
                  className="p-2.5 rounded-xl bg-brand-charcoal text-white hover:bg-black transition-colors flex items-center gap-1.5 text-xs font-semibold"
                  title="Copy UPI ID"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </button>
              </div>

              {/* Step Guide */}
              <div className="space-y-2.5 pt-1 text-xs font-medium text-brand-charcoal">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-sage flex-shrink-0" />
                  <span>Step 1: Submit your dates in Enquiry section</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-sage flex-shrink-0" />
                  <span>Step 2: Pay advance amount via QR Code or UPI</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-sage flex-shrink-0" />
                  <span>Step 3: Share screenshot on WhatsApp (+91 88579 49913)</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
