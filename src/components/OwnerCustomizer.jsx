import React, { useState } from 'react';
import { X, Settings2, Video, QrCode, Save, Check, RefreshCw, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function OwnerCustomizer({ 
  isOpen, 
  onClose, 
  customVideoUrl, 
  setCustomVideoUrl,
  customQrImage,
  setCustomQrImage,
  customLogo,
  setCustomLogo,
  customHeroVideo,
  setCustomHeroVideo
}) {
  const [tempVideo, setTempVideo] = useState(customVideoUrl || siteConfig.gallery.featuredVideo.videoUrl);
  const [tempQr, setTempQr] = useState(customQrImage || siteConfig.payment.qrCodeImage);
  const [tempHeroVideo, setTempHeroVideo] = useState(customHeroVideo || siteConfig.hero.bgVideo);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const presetVideos = [
    { label: "Farmhouse Walkthrough Video 1 (Local MP4)", url: "/assets/farmhouse-video-1.mp4" },
    { label: "Farmhouse Garden & Tour Video 2 (Local MP4)", url: "/assets/farmhouse-video-2.mp4" },
    { label: "Custom External MP4 URL", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" }
  ];

  const handleSave = () => {
    setCustomVideoUrl(tempVideo);
    setCustomQrImage(tempQr);
    setCustomHeroVideo(tempHeroVideo);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleResetDefaults = () => {
    setTempVideo(siteConfig.gallery.featuredVideo.videoUrl);
    setTempQr(siteConfig.payment.qrCodeImage);
    setTempHeroVideo(siteConfig.hero.bgVideo);
    setCustomVideoUrl('');
    setCustomQrImage('');
    setCustomHeroVideo('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-brand-sand flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-brand-charcoal text-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-brand-gold text-brand-charcoal flex items-center justify-center font-bold">
              <Settings2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-white">Website Owner Customizer</h3>
              <p className="text-xs text-brand-goldLight">Replace Video, Payment QR &amp; Assets</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto bg-brand-cream/50">
          
          {/* Designated Firm Reviewer Info Card */}
          <div className="p-4 bg-brand-beige border border-brand-sand rounded-2xl flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-brand-sageDark block">
                {siteConfig.firmReviewer.role}
              </span>
              <span className="font-serif font-bold text-sm text-brand-charcoal">
                {siteConfig.firmReviewer.name}
              </span>
            </div>
            <span className="text-[11px] font-medium text-brand-sageDark bg-white px-3 py-1 rounded-full border border-brand-sand">
              Website Reviewer
            </span>
          </div>

          {/* Success Banner */}
          {savedSuccess && (
            <div className="p-3.5 bg-emerald-100 border border-emerald-300 text-emerald-800 rounded-2xl flex items-center gap-2.5 animate-fadeIn">
              <Check className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-semibold">Changes Applied Successfully! Updating website view...</span>
            </div>
          )}

          {/* Section 1: Gallery Video Field */}
          <div className="p-5 bg-white rounded-2xl border border-brand-sand shadow-soft-sm space-y-3">
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4 text-brand-sageDark" />
              <h4 className="font-serif font-bold text-brand-charcoal text-base">
                Upload / Replace Gallery Video
              </h4>
            </div>
            <p className="text-xs text-brand-mutedText">
              Enter any MP4 video URL or select from your uploaded farmhouse videos.
            </p>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-brand-charcoal block">Video MP4 URL or File Path:</label>
              <input
                type="text"
                value={tempVideo}
                onChange={(e) => setTempVideo(e.target.value)}
                placeholder="/assets/farmhouse-video-1.mp4 or https://..."
                className="w-full px-4 py-2 rounded-xl border border-brand-sand focus:border-brand-sage focus:outline-none text-xs font-mono"
              />
            </div>

            {/* Quick Preset Selector */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[11px] font-semibold text-brand-mutedText uppercase tracking-wider block">
                Quick Select Available Videos:
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {presetVideos.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setTempVideo(item.url)}
                    className={`text-left px-3 py-2 rounded-lg text-xs font-medium border transition-colors ${
                      tempVideo === item.url 
                        ? 'bg-brand-beige border-brand-sage text-brand-charcoal font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    ▶ {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2: Payment QR Code Replacement */}
          <div className="p-5 bg-white rounded-2xl border border-brand-sand shadow-soft-sm space-y-3">
            <div className="flex items-center gap-2">
              <QrCode className="w-4 h-4 text-brand-sageDark" />
              <h4 className="font-serif font-bold text-brand-charcoal text-base">
                Replace Payment UPI QR Code
              </h4>
            </div>
            <p className="text-xs text-brand-mutedText">
              Enter the image URL for your new UPI QR Code.
            </p>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-brand-charcoal block">QR Code Image URL:</label>
              <input
                type="text"
                value={tempQr}
                onChange={(e) => setTempQr(e.target.value)}
                placeholder="https://api.qrserver.com/... or /assets/qr.png"
                className="w-full px-4 py-2 rounded-xl border border-brand-sand focus:border-brand-sage focus:outline-none text-xs font-mono"
              />
            </div>

            <div className="flex items-center gap-4 pt-2">
              <div className="w-16 h-16 bg-slate-50 rounded-xl overflow-hidden border border-brand-sand p-1">
                <img src={tempQr} alt="Preview QR" className="w-full h-full object-contain" />
              </div>
              <div className="text-xs text-brand-mutedText">
                Live QR Code Image Preview
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-3.5 bg-brand-cream border-t border-brand-sand flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleResetDefaults}
            className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-red-600 font-semibold"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-2 bg-brand-charcoal hover:bg-black text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wider shadow-soft-sm transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>Apply Changes</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
