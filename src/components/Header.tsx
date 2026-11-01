import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Menu as MenuIcon, X, Flame } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeaderProps {
  onOpenReservation?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Firewood Kitchen', href: '#firewood-kitchen' },
    { name: 'Chaat Ka Chaska', href: '#chaat' },
    { name: 'Seating', href: '#seating' },
    { name: 'Segregation', href: '#segregation' },
    { name: 'Why Us', href: '#why-choose-us' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar with Contact Info */}
      <div 
        className={`text-xs transition-all duration-300 py-1.5 px-4 sm:px-8 ${
          isScrolled 
            ? 'bg-vintage-darkest text-vintage-cream border-b border-vintage-gold/20 shadow-sm' 
            : 'bg-black/30 backdrop-blur-[2px] text-vintage-cream/90 border-b border-white/10'
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-vintage-sand/90 flex-wrap whitespace-nowrap">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-vintage-gold flex-shrink-0" />
              <span>Vijayanagar 4th Stage, Mysuru</span>
            </span>
            <span className="hidden sm:inline-block text-vintage-gold/40">•</span>
            <span className="hidden sm:flex items-center gap-1.5 text-vintage-sand/80">
              <Clock className="w-3.5 h-3.5 text-vintage-gold flex-shrink-0" />
              <span>Open Daily: 11:30 AM – 11:00 PM</span>
            </span>
          </div>
          
          <div className="flex items-center gap-4 text-xs whitespace-nowrap">
            <a 
              href={`tel:${RESTAURANT_INFO.phone}`} 
              className="flex items-center gap-1.5 font-medium text-vintage-gold hover:text-white transition-colors"
              title="Call Saarangi"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{RESTAURANT_INFO.phoneFormatted}</span>
            </a>
            <span className="text-vintage-gold/40 hidden md:inline-block">•</span>
            <span className="hidden md:inline-flex items-center gap-1 text-[11px] text-vintage-cream/80 bg-vintage-maroon/70 px-2 py-0.5 rounded border border-vintage-gold/30">
              <Flame className="w-3 h-3 text-amber-400" />
              <span>100% Firewood Cooking</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`transition-all duration-300 px-4 sm:px-8 ${
          isScrolled 
            ? 'bg-vintage-brown/95 backdrop-blur-md shadow-vintage-lg py-2.5 border-b border-vintage-gold/20' 
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          {/* Logo & Identity */}
          <a href="#home" className="flex items-center gap-3 group flex-shrink-0 mr-2 xl:mr-6">
            <div className="w-10 h-10 rounded-full border border-vintage-gold flex items-center justify-center bg-vintage-darkest/80 text-vintage-gold shadow-inner group-hover:scale-105 transition-transform flex-shrink-0">
              <span className="font-serif font-bold text-lg tracking-wider">S</span>
            </div>
            <div className="whitespace-nowrap">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-vintage-ivory group-hover:text-vintage-gold transition-colors">
                  Saarangi
                </span>
                <span className="text-[11px] uppercase tracking-widest text-vintage-gold font-sans font-semibold">
                  Mysuru
                </span>
              </div>
              <p className="text-[10px] tracking-wider text-vintage-cream/80 uppercase font-sans -mt-0.5">
                The Vintage Kitchen
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links - Single Lined, Non-wrapping */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-5 text-xs xl:text-[13px] font-medium tracking-wide flex-shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="whitespace-nowrap text-vintage-sand/90 hover:text-vintage-gold transition-colors relative py-1 hover:after:w-full after:transition-all after:duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-vintage-gold"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Buttons - Single Lined */}
          <div className="hidden sm:flex items-center gap-2.5 xl:gap-3 flex-shrink-0">
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="px-3 py-1.5 rounded text-xs font-semibold tracking-wider text-vintage-ivory border border-vintage-gold/60 hover:bg-vintage-gold/15 transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-vintage-gold flex-shrink-0" />
              <span>Call Us</span>
            </a>
            <a
              href="#menu"
              className="px-3.5 py-1.5 rounded text-xs font-semibold tracking-wider uppercase bg-vintage-gold text-vintage-darkest hover:bg-vintage-goldLight transition-all shadow-md hover:shadow-vintage-glow whitespace-nowrap"
            >
              Explore Menu
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2 flex-shrink-0">
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="p-2 rounded bg-vintage-gold text-vintage-darkest sm:hidden"
              aria-label="Call restaurant"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-vintage-cream hover:text-vintage-gold hover:bg-vintage-darkest/40 focus:outline-none transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-vintage-gold/20 pb-4 bg-vintage-darkest/95 rounded-lg px-4 shadow-xl">
            <div className="flex flex-col space-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-vintage-sand hover:text-vintage-gold text-sm font-medium py-1.5 border-b border-vintage-gold/10 transition-colors flex items-center justify-between"
                >
                  <span className="whitespace-nowrap">{link.name}</span>
                  <span className="text-vintage-gold/40 text-xs">›</span>
                </a>
              ))}
              
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="w-full py-2.5 text-center text-xs font-semibold rounded border border-vintage-gold text-vintage-cream flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-vintage-gold" />
                  <span>Call {RESTAURANT_INFO.phoneFormatted}</span>
                </a>
                <a
                  href={RESTAURANT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 text-center text-xs font-semibold rounded bg-vintage-gold text-vintage-darkest uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Directions to Mysuru</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
