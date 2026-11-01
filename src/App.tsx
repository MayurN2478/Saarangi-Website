import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ReservationModal } from './components/ReservationModal';
import { Calendar, Phone, MessageSquare } from 'lucide-react';
import { RESTAURANT_INFO } from './data/restaurantData';

export const App: React.FC = () => {
  const [reservationOpen, setReservationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-vintage-ivory text-vintage-brown font-sans flex flex-col selection:bg-vintage-gold selection:text-vintage-darkest">
      {/* Navigation Header */}
      <Header onOpenReservation={() => setReservationOpen(true)} />

      {/* Main Page Content */}
      <Home />

      {/* Footer */}
      <Footer />

      {/* Reservation & Table Inquiry Modal */}
      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />

      {/* Floating Action Pill for Quick Table Booking & Call */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5 items-end">
        <a
          href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hello%20Saarangi,%20I%20would%20like%20to%20inquire%20about%20a%20table%20reservation.`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center border border-emerald-400/40"
          title="WhatsApp Inquiry"
          aria-label="Chat with Saarangi on WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
        </a>

        <button
          onClick={() => setReservationOpen(true)}
          className="px-4 py-2.5 rounded-full bg-vintage-maroon hover:bg-vintage-brown text-vintage-cream shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2 border border-vintage-gold/50 text-xs sm:text-sm font-semibold tracking-wide"
          aria-label="Book a table"
        >
          <Calendar className="w-4 h-4 text-vintage-gold" />
          <span>Book a Table</span>
        </button>
      </div>
    </div>
  );
};

export default App;
