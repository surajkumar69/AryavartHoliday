import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import VillaSection from './components/VillaSection';
import JacuzziSection from './components/JacuzziSection';
import GardenSection from './components/GardenSection';
import AmenitiesSection from './components/AmenitiesSection';
import GallerySection from './components/GallerySection';
import EnquirySection from './components/EnquirySection';
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
    <div className="min-h-screen bg-brand-cream text-brand-textDark font-sans relative selection:bg-brand-gold selection:text-white">
      
      {/* Sticky Header Navigation */}
      <Navbar 
        onOpenBookingModal={handleOpenBookingModal}
        customLogo={customLogo}
      />

      {/* Hero Banner Section */}
      <Hero 
        onOpenBookingModal={handleOpenBookingModal}
        heroBgVideo={customHeroVideo}
      />

      {/* About SakalSari Section */}
      <AboutSection 
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* Villa Features Section */}
      <VillaSection 
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* Luxury Private Jacuzzi Feature Section */}
      <JacuzziSection 
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* Green Space / Outdoor Garden Section */}
      <GardenSection 
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* 10 Farmhouse Amenities Section */}
      <AmenitiesSection />

      {/* Photo & Video Gallery Section (with Dynamic Replaceable Video Tile) */}
      <GallerySection 
        customVideoUrl={customVideoUrl}
        onOpenCustomizer={handleOpenCustomizer}
      />

      {/* Enquiry / Booking Section (Google Form Embed) */}
      <EnquirySection />

      {/* Secure Payment QR Section (Replaceable QR) */}
      <PaymentSection 
        customQrImage={customQrImage}
        onOpenCustomizer={handleOpenCustomizer}
      />

      {/* Contact & Address Section */}
      <ContactSection />

      {/* Google Maps Section */}
      <MapSection />

      {/* Premium Dark Green Footer */}
      <Footer 
        onOpenBookingModal={handleOpenBookingModal}
        customLogo={customLogo}
      />

      {/* Floating WhatsApp Quick Chat Widget */}
      <WhatsAppWidget />

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
