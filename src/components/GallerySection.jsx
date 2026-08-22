import React, { useState } from 'react';
import { Play, Video, X, Settings2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function GallerySection({ customVideoUrl, onOpenCustomizer }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const currentVideoUrl = customVideoUrl || siteConfig.gallery.featuredVideo.videoUrl;
  const categories = ['All', 'Villa', 'Jacuzzi', 'Garden', 'Video'];

  const filteredImages = activeCategory === 'All' 
    ? siteConfig.gallery.images 
    : siteConfig.gallery.images.filter(img => img.category === activeCategory);

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
            Take a visual tour of our private villa, hydro jacuzzi, and lush gardens.
          </p>
        </div>

        {/* Filter Pills & Owner Customizer */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-brand-sand/70">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
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

          <button
            onClick={onOpenCustomizer}
            className="inline-flex items-center gap-2 text-xs font-medium text-brand-sageDark hover:text-brand-charcoal bg-white px-3 py-1.5 rounded-full border border-brand-sand/70 shadow-soft-sm transition-colors"
            title="Upload or Replace Gallery Video"
          >
            <Settings2 className="w-3.5 h-3.5 text-brand-sage" />
            <span>Customize Video</span>
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* SPECIAL FEATURED VIDEO TILE */}
          {(activeCategory === 'All' || activeCategory === 'Video') && (
            <div className="md:col-span-2 lg:col-span-2 relative group rounded-3xl overflow-hidden shadow-soft-md bg-brand-charcoal border border-brand-sand flex flex-col justify-end min-h-[340px] sm:min-h-[400px]">
              <img
                src={siteConfig.gallery.featuredVideo.posterThumbnail}
                alt="Farmhouse Video Tour Preview"
                className="absolute inset-0 w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                <span className="inline-flex items-center gap-1.5 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wider">
                  <Video className="w-3.5 h-3.5" />
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
                <h3 className="font-serif text-2xl font-bold text-white group-hover:text-brand-goldLight transition-colors">
                  {siteConfig.gallery.featuredVideo.title}
                </h3>
                <p className="text-xs text-slate-200 font-light">
                  {siteConfig.gallery.featuredVideo.subtitle}
                </p>
              </div>
            </div>
          )}

          {/* Standard Photo Cards */}
          {activeCategory !== 'Video' && filteredImages.map((img) => (
            <div 
              key={img.id}
              onClick={() => setSelectedMedia({ type: 'image', src: img.src, title: img.title })}
              className="relative group rounded-3xl overflow-hidden shadow-soft-sm hover:shadow-soft-md bg-white border border-brand-sand/70 cursor-pointer h-64 transform hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-goldLight">
                  {img.category}
                </span>
                <h4 className="font-serif text-base font-bold text-white">
                  {img.title}
                </h4>
              </div>
            </div>
          ))}

        </div>

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
