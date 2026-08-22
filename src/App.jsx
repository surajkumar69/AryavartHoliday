import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import AmenitiesSection from './components/AmenitiesSection';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import EnquirySection, { BookingFormCard } from './components/EnquirySection';
import PaymentSection from './components/PaymentSection';
import ContactSection from './components/ContactSection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import BookingModal from './components/BookingModal';
import OwnerCustomizer from './components/OwnerCustomizer';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  // Dynamic state for customizable media (video, QR, hero video)
  const [customVideoUrl, setCustomVideoUrl] = useState('');
  const [customQrImage, setCustomQrImage] = useState('');
  const [customLogo, setCustomLogo] = useState('');
  const [customHeroVideo, setCustomHeroVideo] = useState('');

  const handleOpenBookingModal = () => setIsBookingModalOpen(true);
  const handleCloseBookingModal = () => setIsBookingModalOpen(false);

  const handleOpenCustomizer = () => setIsCustomizerOpen(true);
  const handleCloseCustomizer = () => setIsCustomizerOpen(false);

  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal font-sans relative selection:bg-brand-sageLight selection:text-brand-charcoal pb-14 sm:pb-0">
      
      {/* Sticky Header Navigation */}
      <Navbar 
        onOpenBookingModal={handleOpenBookingModal}
        customLogo={customLogo}
      />

      {/* Split Hero Banner Section */}
      <Hero 
        onOpenBookingModal={handleOpenBookingModal}
        heroBgVideo={customHeroVideo}
      />

      {/* Main Content Layout with Sticky Desktop Booking Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Main Left Content Column */}
          <div className="lg:col-span-8 space-y-12 lg:space-y-16">
            
            {/* About SakalSari Section */}
            <AboutSection 
              onOpenBookingModal={handleOpenBookingModal}
            />

            {/* Farmhouse Amenities Section (Appears ONLY ONCE) */}
            <AmenitiesSection />

            {/* Photo & Video Gallery Section */}
            <GallerySection 
              customVideoUrl={customVideoUrl}
              onOpenCustomizer={handleOpenCustomizer}
            />

            {/* Guest Reviews Section */}
            <ReviewsSection />

            {/* Reservation / Enquiry Section */}
            <EnquirySection />

            {/* UPI QR Payment Section */}
            <PaymentSection 
              customQrImage={customQrImage}
              onOpenCustomizer={handleOpenCustomizer}
            />

            {/* Contact & Address Section */}
            <ContactSection />

            {/* Google Maps Section */}
            <MapSection />

          </div>

          {/* Right Column: Sticky Booking / Enquiry Form for Desktop */}
          <div className="hidden lg:block lg:col-span-4 sticky top-24 self-start">
            <div className="space-y-4">
              <div className="bg-brand-sageLight/50 p-3 rounded-2xl border border-brand-sand text-center text-xs font-semibold text-brand-sageDark">
                ✨ Direct Booking &amp; Availability Form
              </div>
              <BookingFormCard isSticky={true} />
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <Footer 
        onOpenBookingModal={handleOpenBookingModal}
        customLogo={customLogo}
      />

      {/* Floating / Sticky Mobile WhatsApp & Enquiry Widget */}
      <WhatsAppWidget onOpenBookingModal={handleOpenBookingModal} />

      {/* Booking Form Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={handleCloseBookingModal}
      />

      {/* Website Owner Content Customizer Drawer */}
      <OwnerCustomizer
        isOpen={isCustomizerOpen}
        onClose={handleCloseCustomizer}
        customVideoUrl={customVideoUrl}
        setCustomVideoUrl={setCustomVideoUrl}
        customQrImage={customQrImage}
        setCustomQrImage={setCustomQrImage}
        customLogo={customLogo}
        setCustomLogo={setCustomLogo}
        customHeroVideo={customHeroVideo}
        setCustomHeroVideo={setCustomHeroVideo}
      />

    </div>
  );
}
