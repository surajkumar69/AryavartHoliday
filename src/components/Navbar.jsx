import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Navbar({ onOpenBookingModal, customLogo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Villa', href: '#villa' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Enquiry', href: '#enquiry' },
  ];

  const logoSrc = customLogo || siteConfig.business.logoUrl;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-header py-3 shadow-luxury text-white' 
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-gold/60 p-0.5 bg-white shadow-md transition-transform duration-300 group-hover:scale-105">
              <img 
                src={logoSrc} 
                alt="SakalSari Farmhouse Logo" 
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/assets/logo.jpg';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-white group-hover:text-brand-goldLight transition-colors">
                {siteConfig.business.name}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-brand-goldLight font-medium">
                Vadgaon • Sangli
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium tracking-wide text-slate-100 hover:text-brand-goldLight transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-brand-gold after:transition-all after:duration-300 hover:after:w-3/4"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href={`tel:${siteConfig.business.phone}`} 
              className="hidden lg:flex items-center gap-2 text-xs font-semibold text-white/90 hover:text-brand-gold px-3 py-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>{siteConfig.business.phone}</span>
            </a>

            <button
              onClick={onOpenBookingModal}
              className="flex items-center gap-2 bg-gradient-to-r from-brand-gold to-yellow-600 hover:from-yellow-600 hover:to-brand-gold text-brand-dark px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-gold-glow transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBookingModal}
              className="bg-brand-gold text-brand-dark px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:text-brand-gold hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden glass-header border-t border-white/10 px-4 pt-3 pb-6 space-y-2 mt-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-md text-base font-medium text-white hover:bg-brand-gold/20 hover:text-brand-goldLight transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a 
              href={`tel:${siteConfig.business.phone}`} 
              className="flex items-center justify-center gap-2 text-sm font-medium text-white bg-white/10 py-2.5 rounded-lg"
            >
              <Phone className="w-4 h-4 text-brand-gold" />
              <span>Call: {siteConfig.business.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full text-center bg-brand-gold text-brand-dark py-3 rounded-lg text-sm font-bold uppercase tracking-wider"
            >
              Book Your Stay Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
