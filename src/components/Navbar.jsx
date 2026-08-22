import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MessageCircle, Phone } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Navbar({ onOpenBookingModal, customLogo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const phone = "918857949913";
  const message = "Hello SakalSari Farmhouse, I would like to enquire about availability and stay details.";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const logoSrc = customLogo || siteConfig.business.logoUrl;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-header py-3 shadow-soft-sm text-brand-charcoal' 
          : 'bg-brand-cream/80 backdrop-blur-md py-4 text-brand-charcoal border-b border-brand-sand/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-brand-sand bg-white p-0.5 shadow-sm transition-transform duration-300 group-hover:scale-105">
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
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-brand-charcoal group-hover:text-brand-sageDark transition-colors">
                {siteConfig.business.name}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-brand-sageDark font-semibold">
                Vadgaon • Sangli
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wide text-brand-charcoal hover:text-brand-sageDark transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-sage after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3.5 py-2 rounded-full transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenBookingModal}
              className="inline-flex items-center gap-1.5 bg-brand-charcoal hover:bg-black text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 shadow-sm hover:shadow"
            >
              <Calendar className="w-3.5 h-3.5 text-brand-gold" />
              <span>Enquire Now</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white p-2 rounded-full shadow-sm"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-brand-charcoal hover:bg-brand-beige/50 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-brand-cream border-t border-brand-sand px-4 pt-3 pb-6 space-y-2 mt-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-base font-medium text-brand-charcoal hover:bg-brand-beige transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-brand-sand flex flex-col gap-2.5">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm font-semibold text-emerald-800 bg-emerald-100/70 border border-emerald-300 py-3 rounded-xl"
            >
              <MessageCircle className="w-4 h-4 text-emerald-700" />
              <span>Chat on WhatsApp (+91 88579 49913)</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full text-center bg-brand-charcoal text-white py-3 rounded-xl text-sm font-semibold tracking-wider"
            >
              Enquire / Book Stay
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
