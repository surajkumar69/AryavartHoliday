import React, { useState, useRef } from 'react';
import { Play, Video, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function GallerySection({ customVideoUrl, onOpenCustomizer }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Swipe / Drag Touch Tracking State
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const isDragging = useRef(false);

  const currentVideoUrl = customVideoUrl || siteConfig.gallery.featuredVideo.videoUrl;
  const categories = ['All', 'Villa', 'Garden', 'Video'];

  const filteredImages = activeCategory === 'All' 
    ? siteConfig.gallery.images 
    : siteConfig.gallery.images.filter(img => img.category === activeCategory);

  const totalPhotos = filteredImages.length;
  const currentPhoto = filteredImages[currentIndex] || filteredImages[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPhotos - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalPhotos - 1 ? 0 : prev + 1));
  };

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(e.targetTouches[0].clientX);
    isDragging.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 40;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-sageDark bg-brand-beige border border-brand-sand px-4 py-1.5 rounded-full inline-block mb-3">
            Visual Tour
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
            Farmhouse Gallery
          </h2>
          <div className="w-16 h-1 bg-brand-sage mx-auto mb-4 rounded-full"></div>
          <p className="text-brand-mutedText text-base sm:text-lg font-light">
            Swipe left or right to explore real photos of SakalSari Farmhouse.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 pb-4 border-b border-brand-sand/70">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentIndex(0);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-brand-charcoal text-white shadow-soft-sm'
                  : 'bg-white text-brand-charcoal hover:bg-brand-beige border border-brand-sand/60'
              }`}
            >
              {cat === 'Video' ? '🎬 Video Tour' : cat}
            </button>
          ))}
        </div>

        {/* SPECIAL FEATURED VIDEO TOUR SECTION */}
        {activeCategory === 'Video' ? (
          <div className="max-w-4xl mx-auto relative group rounded-3xl overflow-hidden shadow-soft-md bg-brand-charcoal border border-brand-sand flex flex-col justify-end min-h-[380px] sm:min-h-[460px]">
            <img
              src={siteConfig.gallery.featuredVideo.posterThumbnail}
              alt="Farmhouse Video Tour Preview"
              className="absolute inset-0 w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
              <span className="inline-flex items-center gap-1.5 bg-red-600 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider">
                <Video className="w-4 h-4" />
                Farmhouse Video Tour
              </span>
              <span className="bg-black/50 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                {siteConfig.gallery.featuredVideo.duration}
              </span>
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-10">
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 hover:bg-white text-brand-charcoal flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300 focus:outline-none"
                aria-label="Play Farmhouse Video"
              >
                <Play className="w-8 h-8 ml-1 fill-brand-charcoal text-brand-charcoal" />
              </button>
            </div>

            <div className="relative z-10 p-6 text-white space-y-1">
              <h3 className="font-serif text-2xl font-bold text-white">
                {siteConfig.gallery.featuredVideo.title}
              </h3>
              <p className="text-xs text-slate-200 font-light">
                {siteConfig.gallery.featuredVideo.subtitle}
              </p>
            </div>
          </div>
        ) : (
          /* SINGLE PHOTO SWIPEABLE CAROUSEL CARD */
          <div className="max-w-3xl mx-auto space-y-6">
            
            {/* Main Interactive Single-Photo Card */}
            <div 
              className="relative rounded-3xl overflow-hidden shadow-soft-lg bg-white border border-brand-sand/70 p-3 sm:p-4 select-none touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Top Card Info Bar */}
              <div className="flex items-center justify-between pb-3 px-2 text-xs font-semibold text-brand-sageDark border-b border-brand-sand/50 mb-3">
                <div className="flex items-center gap-2">
                  <span className="bg-brand-beige px-3 py-1 rounded-full border border-brand-sand/60 text-[11px]">
                    {currentPhoto.category}
                  </span>
                  <span className="font-serif text-brand-charcoal text-sm font-bold truncate max-w-[200px] sm:max-w-[320px]">
                    {currentPhoto.title}
                  </span>
                </div>
                
                {/* Photo Counter Badge */}
                <span className="bg-brand-charcoal text-white px-3 py-1 rounded-full text-[11px] font-medium tracking-wider">
                  {currentIndex + 1} / {totalPhotos}
                </span>
              </div>

              {/* Photo Display Box (Maintains Original Aspect Ratio with object-contain) */}
              <div className="relative w-full h-[340px] sm:h-[460px] rounded-2xl overflow-hidden bg-brand-beige/30 flex items-center justify-center group">
                <img
                  src={currentPhoto.src}
                  alt={currentPhoto.title}
                  className="w-full h-full object-contain p-2 transition-all duration-300"
                />

                {/* Left Arrow Button */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-brand-charcoal shadow-soft-md flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
                  aria-label="Previous Photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right Arrow Button */}
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-brand-charcoal shadow-soft-md flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
                  aria-label="Next Photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Lightbox Trigger Button */}
                <button
                  onClick={() => setSelectedMedia({ type: 'image', src: currentPhoto.src, title: currentPhoto.title })}
                  className="absolute bottom-3 right-3 bg-black/70 hover:bg-black text-white p-2.5 rounded-full backdrop-blur-md transition-colors shadow-soft-sm z-10"
                  title="View Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Swipe Hint & Navigation Dots */}
              <div className="pt-4 flex flex-col items-center gap-3">
                <p className="text-[11px] text-brand-mutedText font-light flex items-center gap-1">
                  <span>👈 Swipe left or right to view all photos 👉</span>
                </p>

                {/* Pagination Dots */}
                <div className="flex items-center gap-2">
                  {filteredImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        currentIndex === idx
                          ? 'w-7 bg-brand-charcoal'
                          : 'w-2.5 bg-brand-sand hover:bg-brand-sage'
                      }`}
                      aria-label={`Go to photo ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>

            {/* Thumbnail Strip beneath the card */}
            <div className="flex items-center gap-2.5 overflow-x-auto pb-2 no-scrollbar px-1">
              {filteredImages.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    currentIndex === idx
                      ? 'border-brand-charcoal ring-2 ring-brand-sand scale-105'
                      : 'border-brand-sand/60 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

          </div>
        )}

      </div>

      {/* Video Modal Player */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-brand-charcoal rounded-3xl overflow-hidden shadow-2xl border border-brand-sand/20">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-white">
                <Video className="w-5 h-5 text-brand-gold" />
                <h3 className="font-serif font-bold text-lg">{siteConfig.gallery.featuredVideo.title}</h3>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-2 rounded-full text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="relative aspect-video bg-black">
              <video 
                controls 
                autoPlay 
                playsInline
                className="w-full h-full object-contain"
                src={currentVideoUrl}
              >
                Your browser does not support video playback.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Photo Lightbox Modal */}
      {selectedMedia && selectedMedia.type === 'image' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-4xl w-full flex flex-col items-center">
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-brand-gold transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src={selectedMedia.src} 
              alt={selectedMedia.title}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl border border-white/20 shadow-2xl"
            />
            <p className="font-serif text-xl font-bold text-white mt-4 text-center">
              {selectedMedia.title}
            </p>
          </div>
        </div>
      )}

    </section>
  );
}
