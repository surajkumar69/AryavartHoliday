import React, { useState } from 'react';
import { Play, Video, Image as ImageIcon, X, Sparkles, Settings2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function GallerySection({ customVideoUrl, onOpenCustomizer }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedMedia, setSelectedMedia] = useState(null); // { type: 'image'|'video', src, title }
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Dynamic video source (takes owner customizer override if present, else siteConfig default)
  const currentVideoUrl = customVideoUrl || siteConfig.gallery.featuredVideo.videoUrl;

  const categories = ['All', 'Villa', 'Jacuzzi', 'Garden', 'Video'];

  const filteredImages = activeCategory === 'All' 
    ? siteConfig.gallery.images 
    : siteConfig.gallery.images.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Visual Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            Farmhouse Gallery &amp; Video Tour
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto mb-4 rounded-full"></div>
          <p className="text-brand-textMuted text-base sm:text-lg font-light">
            Take a visual tour of our private 1BHK villa, hydro jacuzzi, and lush garden lawns.
          </p>
        </div>

        {/* Category Filter Pills & Owner Customizer Quick Action */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-brand-sand">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-brand-forest text-white shadow-md'
                    : 'bg-white text-brand-dark hover:bg-brand-sand border border-brand-sand'
                }`}
              >
                {cat === 'Video' ? '🎬 Video Tour' : cat}
              </button>
            ))}
          </div>

          {/* Owner Quick Customizer Link */}
          <button
            onClick={onOpenCustomizer}
            className="inline-flex items-center gap-2 text-xs font-semibold text-brand-forest hover:text-brand-gold bg-white px-3.5 py-2 rounded-lg border border-brand-sand shadow-sm transition-colors"
            title="Upload or Replace Gallery Video / Media"
          >
            <Settings2 className="w-4 h-4 text-brand-gold" />
            <span>Upload / Replace Gallery Video</span>
          </button>
        </div>

        {/* Gallery Grid including Special Large Video Tile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* SPECIAL LARGE VIDEO TILE - Rendered prominently */}
          {(activeCategory === 'All' || activeCategory === 'Video') && (
            <div className="md:col-span-2 lg:col-span-2 relative group rounded-3xl overflow-hidden shadow-luxury bg-brand-dark border-2 border-brand-gold/40 flex flex-col justify-end min-h-[380px] sm:min-h-[440px]">
              
              {/* Video Thumbnail Background */}
              <img
                src={siteConfig.gallery.featuredVideo.posterThumbnail}
                alt="Farmhouse Video Tour Preview"
                className="absolute inset-0 w-full h-full object-cover filter brightness-75 group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>

              {/* Top Video Badge & Customize Button */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                <span className="inline-flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                  <Video className="w-3.5 h-3.5" />
                  Featured Video Tour
                </span>
                <span className="bg-black/60 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                  {siteConfig.gallery.featuredVideo.duration}
                </span>
              </div>

              {/* Center Animated Play Button */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-brand-gold hover:bg-yellow-500 text-brand-dark flex items-center justify-center shadow-gold-glow transform group-hover:scale-110 transition-all duration-300 focus:outline-none"
                  aria-label="Play Farmhouse Video"
                >
                  <Play className="w-10 h-10 ml-1 fill-brand-dark" />
                </button>
              </div>

              {/* Bottom Video Metadata */}
              <div className="relative z-10 p-6 sm:p-8 text-white space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-brand-goldLight transition-colors">
                  {siteConfig.gallery.featuredVideo.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 font-light">
                  {siteConfig.gallery.featuredVideo.subtitle}
                </p>
                <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-brand-gold">
                  <span className="hover:underline cursor-pointer" onClick={() => setIsVideoModalOpen(true)}>
                    ▶ Click to Play Full Video
                  </span>
                  <span>•</span>
                  <span className="hover:underline cursor-pointer text-slate-300" onClick={onOpenCustomizer}>
                    ⚙️ Replace Video URL
                  </span>
                </div>
              </div>

            </div>
          )}

          {/* Standard Photo Cards */}
          {activeCategory !== 'Video' && filteredImages.map((img) => (
            <div 
              key={img.id}
              onClick={() => setSelectedMedia({ type: 'image', src: img.src, title: img.title })}
              className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-luxury bg-white border border-brand-sand cursor-pointer h-72 transform hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">
                  {img.category}
                </span>
                <h4 className="font-serif text-lg font-bold text-white">
                  {img.title}
                </h4>
              </div>
            </div>
          ))}

        </div>

      </div>

      {/* Video Modal Player */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-brand-dark rounded-2xl overflow-hidden shadow-2xl border border-brand-gold/30">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-brand-dark">
              <div className="flex items-center gap-2 text-white">
                <Video className="w-5 h-5 text-brand-gold" />
                <h3 className="font-serif font-bold text-lg">{siteConfig.gallery.featuredVideo.title}</h3>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Responsive Video Player */}
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

            {/* Modal Footer with Customizer Option */}
            <div className="p-4 bg-brand-dark/95 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
              <span>Playing: <strong className="text-white">{currentVideoUrl}</strong></span>
              <button
                onClick={() => {
                  setIsVideoModalOpen(false);
                  onOpenCustomizer();
                }}
                className="text-brand-gold hover:underline font-semibold"
              >
                Change or Upload Different Video →
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Photo Lightbox Modal */}
      {selectedMedia && selectedMedia.type === 'image' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-brand-gold transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src={selectedMedia.src} 
              alt={selectedMedia.title}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl border-2 border-white/20 shadow-2xl"
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
