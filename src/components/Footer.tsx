import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Flame, ChevronRight, Heart, ExternalLink, ShieldCheck, FileText, X } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story (Est. 1998)', href: '#about' },
    { name: '100% Firewood Kitchen', href: '#firewood-kitchen' },
    { name: 'Chaat Ka Chaska', href: '#chaat' },
    { name: 'Seating Experiences (6 Styles)', href: '#seating' },
    { name: 'Veg & Non-Veg Segregation', href: '#segregation' },
    { name: 'Why Choose Saarangi', href: '#why-choose-us' },
    { name: 'Our Menu (Brunch, Lunch, Dinner)', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Blog & Articles', href: '#blog' },
  ];

  return (
    <footer id="contact" className="bg-vintage-darkest text-vintage-cream border-t border-vintage-gold/25 relative overflow-hidden">
      {/* Decorative top gold line */}
      <div className="h-1 bg-gradient-to-r from-vintage-gold/20 via-vintage-gold to-vintage-gold/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-vintage-gold/15">
          {/* Column 1: Restaurant Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-vintage-gold flex items-center justify-center bg-vintage-brown/80 text-vintage-gold shadow-md">
                <span className="font-serif font-bold text-xl">S</span>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wide text-vintage-ivory">
                  Saarangi
                </span>
                <p className="text-[11px] uppercase tracking-widest text-vintage-gold font-sans font-semibold">
                  The Vintage Kitchen • Mysuru
                </p>
              </div>
            </div>

            <p className="text-xs text-vintage-gold font-serif italic">
              {RESTAURANT_INFO.kannadaName}
            </p>

            <p className="text-xs sm:text-sm text-vintage-sand/80 leading-relaxed">
              Reviving authentic 100% firewood cooking (ಸೌದೆ ಒಲೆ ಊಟ) and traditional Indian hospitality. Born in sacred Narayanagiri in 1998, proudly serving Mysuru with 340+ seat comfort and strict kitchen segregation.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-vintage-maroon/60 border border-vintage-gold/30 text-amber-300">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>100% Firewood Cooking</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Separate Veg Kitchen</span>
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base sm:text-lg font-bold text-vintage-gold tracking-wider uppercase">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.slice(0, 7).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-vintage-sand/80 hover:text-vintage-gold transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-vintage-gold/60" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hours & Seating (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base sm:text-lg font-bold text-vintage-gold tracking-wider uppercase">
              Dining Hours
            </h4>
            <div className="space-y-3 text-xs text-vintage-sand/85">
              <div>
                <p className="font-semibold text-vintage-cream flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-vintage-gold" />
                  <span>Mon – Sun:</span>
                </p>
                <p className="mt-0.5 text-vintage-sand/75">{RESTAURANT_INFO.timings.weekdays}</p>
              </div>

              <div>
                <p className="font-semibold text-vintage-cream">Special Weekend Brunch:</p>
                <p className="mt-0.5 text-vintage-sand/75">{RESTAURANT_INFO.timings.weekends}</p>
              </div>

              <div className="pt-2 border-t border-vintage-gold/15">
                <p className="font-semibold text-vintage-cream">Total Capacity:</p>
                <p className="mt-0.5 text-vintage-gold">{RESTAURANT_INFO.seatingCapacity}</p>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Directions (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base sm:text-lg font-bold text-vintage-gold tracking-wider uppercase">
              Contact & Location
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm">
              {/* Address */}
              <div className="flex items-start gap-2.5 text-vintage-sand/90">
                <MapPin className="w-4 h-4 text-vintage-gold flex-shrink-0 mt-1" />
                <address className="not-italic leading-relaxed">
                  {RESTAURANT_INFO.address.line1},<br />
                  {RESTAURANT_INFO.address.line2},<br />
                  {RESTAURANT_INFO.address.city}, {RESTAURANT_INFO.address.state} – {RESTAURANT_INFO.address.pincode}
                </address>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-vintage-gold flex-shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="font-medium text-vintage-cream hover:text-vintage-gold transition-colors"
                >
                  {RESTAURANT_INFO.phoneFormatted}
                </a>
              </div>

              {/* WhatsApp Link */}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hello%20Saarangi%20The%20Vintage%20Kitchen,%20I%20would%20like%20to%20inquire%20about%20table%20reservation`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 text-white text-xs font-semibold tracking-wider flex items-center justify-center gap-2 border border-emerald-500/40 transition-colors shadow-sm"
                >
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {/* Get Directions Link */}
                <a
                  href={RESTAURANT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-lg bg-vintage-gold hover:bg-vintage-goldLight text-vintage-darkest text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Get Directions on Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-vintage-sand/70">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Saarangi – The Vintage Kitchen. All Rights Reserved. Vijayanagar, Mysuru.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveModal('privacy')}
              className="hover:text-vintage-gold transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setActiveModal('terms')}
              className="hover:text-vintage-gold transition-colors underline-offset-4 hover:underline"
            >
              Terms and Conditions
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy / Terms Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative max-w-lg w-full bg-vintage-ivory text-vintage-brown rounded-2xl p-6 sm:p-8 border border-vintage-gold/50 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-vintage-cream">
              <h3 className="font-serif text-xl font-bold text-vintage-brown flex items-center gap-2">
                <FileText className="w-5 h-5 text-vintage-gold" />
                <span>{activeModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}</span>
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1 rounded-full text-vintage-brown hover:bg-vintage-sand transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs sm:text-sm text-vintage-brown/85 space-y-3 leading-relaxed max-h-[60vh] overflow-y-auto pr-1">
              {activeModal === 'privacy' ? (
                <>
                  <p>
                    <strong>Saarangi – The Vintage Kitchen</strong> respects the privacy of our patrons and website visitors. This privacy notice outlines our practices regarding information collected during dining inquiries, table reservations, and digital interactions.
                  </p>
                  <p>
                    Any contact details (such as phone numbers or email addresses provided during bookings) are utilized strictly for table confirmation, order assistance, and guest hospitality services. We do not sell or share customer contact records with external marketers.
                  </p>
                  <p>
                    For inquiries concerning our privacy practices, contact us at <strong>{RESTAURANT_INFO.phoneFormatted}</strong> or visit our establishment at Vijayanagar 4th Stage, Mysuru.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Welcome to <strong>Saarangi – The Vintage Kitchen</strong>. By accessing our premises or using our website, you agree to our dining and hospitality terms.
                  </p>
                  <p>
                    <strong>Table Reservations:</strong> Seating in our Hut cabanas and Private Dining Rooms (PDR) is subject to availability and advance confirmation. We kindly request guests to arrive promptly for reserved timings.
                  </p>
                  <p>
                    <strong>Food Preparation:</strong> We maintain strict 100% segregation between vegetarian and non-vegetarian kitchens. Guests with acute allergies are encouraged to inform our staff prior to placing orders.
                  </p>
                  <p>
                    All content, imagery, and culinary descriptions are proprietary to Saarangi – The Vintage Kitchen, Mysuru.
                  </p>
                </>
              )}
            </div>

            <div className="pt-3 border-t border-vintage-cream flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-lg bg-vintage-maroon text-vintage-cream text-xs font-semibold hover:bg-vintage-brown transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
