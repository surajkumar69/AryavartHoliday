import React, { useState } from 'react';
import { ShieldAlert, CheckCircle2, Copy, Check, QrCode } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function PaymentSection({ customQrImage, onOpenCustomizer, onOpenBookingModal }) {
  const [copied, setCopied] = useState(false);
  const qrImageSrc = customQrImage || siteConfig.payment.qrCodeImage;

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(siteConfig.payment.upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="payment" className="py-16 lg:py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-green bg-brand-greenLight border border-brand-green/20 px-4 py-1.5 rounded-full inline-block mb-3">
            Payment &amp; Confirmation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
            {siteConfig.payment.title}
          </h2>
          <div className="w-16 h-1 bg-brand-green mx-auto mb-4 rounded-full"></div>
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
            <div className="md:col-span-6 flex flex-col items-center">
              <div className="relative group p-4 sm:p-5 bg-[#fcfbf8] rounded-3xl border border-brand-sand/70 shadow-soft-sm flex flex-col items-center w-full max-w-[320px]">
                
                {/* Scan to Pay Badge */}
                <div className="mb-3.5 inline-flex items-center gap-1.5 bg-brand-green text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-soft-sm">
                  <QrCode className="w-4 h-4 text-white" />
                  <span>Scan to Pay</span>
                </div>

                {/* Prominent QR Code Image - Uncropped Natural Aspect Ratio */}
                <div className="w-full max-w-[260px] bg-white rounded-2xl overflow-hidden p-3 border border-brand-sand/60 shadow-soft-sm flex items-center justify-center">
                  <img
                    src={qrImageSrc}
                    alt="SakalSari UPI Payment QR Code"
                    className="w-full h-auto object-contain rounded-xl"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = siteConfig.payment.qrCodeImage;
                    }}
                  />
                </div>

                {/* Account Holder & Apps Label */}
                <div className="mt-3.5 text-center space-y-0.5">
                  <p className="text-xs font-bold text-brand-charcoal">
                    {siteConfig.payment.accountHolder}
                  </p>
                  <p className="text-[11px] text-brand-mutedText">
                    Accepted via Google Pay, PhonePe, Paytm, BHIM &amp; UPI
                  </p>
                </div>

              </div>
            </div>

            {/* Right Column: Payment Details & Direct UPI Copy */}
            <div className="md:col-span-6 space-y-5">
              
              <div>
                <h3 className="font-serif text-2xl font-bold text-brand-charcoal mb-1">
                  UPI Payment Details
                </h3>
                <p className="text-xs text-brand-mutedText leading-relaxed">
                  Scan the QR code or copy the UPI ID below to pay directly from any bank app.
                </p>
              </div>

              {/* UPI ID Box with Copy Button */}
              <div className="bg-[#f8f5ee] p-4 rounded-2xl border border-brand-sand flex items-center justify-between gap-3 shadow-soft-sm">
                <div>
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-brand-green block mb-0.5">
                    Official UPI ID
                  </span>
                  <span className="font-mono text-sm font-bold text-brand-charcoal tracking-wide select-all">
                    {siteConfig.payment.upiId}
                  </span>
                </div>
                
                <button
                  onClick={handleCopyUpi}
                  className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 text-xs font-semibold shadow-soft-sm ${
                    copied
                      ? 'bg-emerald-600 text-white'
                      : 'bg-brand-green hover:bg-brand-greenHover text-white'
                  }`}
                  title="Copy UPI ID"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-white" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Account Name Details */}
              <div className="p-3.5 bg-white rounded-xl border border-brand-sand/60 text-xs space-y-1">
                <div className="flex justify-between">
                  <span className="text-brand-mutedText">Payee Name:</span>
                  <span className="font-semibold text-brand-charcoal">{siteConfig.payment.accountHolder}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-mutedText">Property:</span>
                  <span className="font-semibold text-brand-charcoal">SakalSari Farmhouse</span>
                </div>
              </div>

              {/* Step Guide */}
              <div className="space-y-2.5 pt-1 text-xs font-medium text-brand-charcoal">
                <button
                  onClick={onOpenBookingModal}
                  className="flex items-center gap-2.5 text-left font-semibold text-brand-charcoal hover:text-brand-sageDark transition-colors group"
                >
                  <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="underline underline-offset-2 decoration-brand-sand hover:decoration-brand-sageDark">Step 1: Enquire requested dates</span>
                </button>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                  <span>Step 2: Pay advance amount via QR / UPI</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                  <span>Step 3: Receive instant WhatsApp booking receipt</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
