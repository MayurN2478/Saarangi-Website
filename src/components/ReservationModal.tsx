import React, { useState } from 'react';
import { X, Calendar, Users, Clock, Phone, Send, Sparkles, MapPin, CheckCircle } from 'lucide-react';
import { RESTAURANT_INFO, SEATING_EXPERIENCES } from '../data/restaurantData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState('4');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('13:00');
  const [seatingPref, setSeatingPref] = useState('Hut-Style Private Seating');
  const [dietPref, setDietPref] = useState('Both Vegetarian & Non-Veg');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Format message for WhatsApp
    const message = `*Table Inquiry - Saarangi The Vintage Kitchen*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Guests:* ${guests}%0A*Date:* ${date || 'Today/Soon'}%0A*Time:* ${time}%0A*Seating:* ${encodeURIComponent(seatingPref)}%0A*Preference:* ${encodeURIComponent(dietPref)}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${message}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-vintage-ivory rounded-2xl overflow-hidden border border-vintage-gold/50 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-vintage-brown hover:bg-vintage-sand transition-colors"
          aria-label="Close reservation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="text-center mb-6">
              <span className="text-xs uppercase tracking-widest text-vintage-gold font-bold">
                Table Inquiry & Pre-booking
              </span>
              <h3 className="font-serif text-2xl font-bold text-vintage-brown mt-1">
                Reserve Your Vintage Dining Experience
              </h3>
              <p className="text-xs text-vintage-brown/70 mt-1">
                340+ capacity across 6 thematic seating zones in Vijayanagar, Mysuru.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-vintage-brown font-semibold mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Gowda"
                    className="w-full px-3 py-2 rounded-lg bg-white border border-vintage-gold/40 text-vintage-brown focus:outline-none focus:border-vintage-gold"
                  />
                </div>
                <div>
                  <label className="block text-vintage-brown font-semibold mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 98450 12345"
                    className="w-full px-3 py-2 rounded-lg bg-white border border-vintage-gold/40 text-vintage-brown focus:outline-none focus:border-vintage-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-vintage-brown font-semibold mb-1">Guests</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-vintage-gold/40 text-vintage-brown focus:outline-none focus:border-vintage-gold"
                  >
                    {[1, 2, 4, 6, 8, 10, 15, 20, 30].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-vintage-brown font-semibold mb-1">Preferred Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-vintage-gold/40 text-vintage-brown focus:outline-none focus:border-vintage-gold"
                  />
                </div>

                <div>
                  <label className="block text-vintage-brown font-semibold mb-1">Time</label>
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-vintage-gold/40 text-vintage-brown focus:outline-none focus:border-vintage-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-vintage-brown font-semibold mb-1">Preferred Seating Style</label>
                <select
                  value={seatingPref}
                  onChange={(e) => setSeatingPref(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-vintage-gold/40 text-vintage-brown focus:outline-none focus:border-vintage-gold"
                >
                  {SEATING_EXPERIENCES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-vintage-brown font-semibold mb-1">Culinary Preference</label>
                <select
                  value={dietPref}
                  onChange={(e) => setDietPref(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-vintage-gold/40 text-vintage-brown focus:outline-none focus:border-vintage-gold"
                >
                  <option value="Pure Vegetarian (Separate Kitchen)">Pure Vegetarian (Separate Kitchen)</option>
                  <option value="Non-Vegetarian Specialties">Non-Vegetarian Specialties</option>
                  <option value="Both Vegetarian & Non-Veg Group">Both Vegetarian & Non-Veg Group</option>
                  <option value="Chaat Ka Chaska Pure Veg Counter">Chaat Ka Chaska Counter</option>
                </select>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-vintage-gold hover:bg-vintage-goldLight text-vintage-darkest font-semibold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>

                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="w-full py-2.5 rounded-lg border border-vintage-maroon text-vintage-maroon hover:bg-vintage-maroon hover:text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>Or Call Directly: {RESTAURANT_INFO.phoneFormatted}</span>
                </a>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-vintage-brown">
              Inquiry Dispatched!
            </h3>
            <p className="text-xs sm:text-sm text-vintage-brown/80 max-w-sm mx-auto">
              Your table inquiry details have been opened in WhatsApp. Our hospitality captain will confirm availability shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-lg bg-vintage-maroon text-vintage-cream text-xs font-semibold hover:bg-vintage-brown transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
