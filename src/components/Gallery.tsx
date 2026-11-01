import React, { useState } from 'react';
import { Camera, X, ZoomIn, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/restaurantData';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const categories = ['All', 'Food', 'Interiors', 'Dining spaces', 'Kitchen', 'Ambience'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handleOpenModal = (index: number) => {
    setActiveImageIndex(index);
  };

  const handleCloseModal = () => {
    setActiveImageIndex(null);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-vintage-darkest text-vintage-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vintage-brown/80 border border-vintage-gold/40 text-vintage-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <Camera className="w-4 h-4 text-vintage-gold" />
            <span>Visual Heritage & Ambiance</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-vintage-ivory tracking-tight">
            The Saarangi Gallery
          </h2>

          <div className="ornament-line my-4">
            <span className="text-vintage-gold text-lg">✦</span>
          </div>

          <p className="text-sm sm:text-base text-vintage-cream/80 max-w-2xl mx-auto leading-relaxed">
            A glimpse into our live firewood hearths, rustic dining cabanas, rich aromas, and vintage Mysuru architecture.
          </p>
        </div>

        {/* Gallery Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-vintage-gold text-vintage-darkest shadow-md'
                  : 'bg-vintage-brown/60 text-vintage-sand/80 hover:bg-vintage-brown hover:text-vintage-ivory border border-vintage-gold/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-Style Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenModal(index)}
              className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden cursor-pointer bg-vintage-brown/50 border border-vintage-gold/20 shadow-lg hover:border-vintage-gold transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vintage-darkest/95 via-vintage-darkest/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Category Pill */}
              <div className="absolute top-3 left-3 bg-vintage-darkest/80 text-vintage-gold text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md border border-vintage-gold/30">
                {item.category}
              </div>

              {/* Zoom Action Icon */}
              <div className="absolute top-3 right-3 p-2 rounded-full bg-vintage-darkest/70 text-vintage-ivory opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-vintage-gold" />
              </div>

              {/* Title & Description Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <h3 className="font-serif font-bold text-base sm:text-lg text-vintage-ivory group-hover:text-vintage-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-vintage-sand/80 line-clamp-2 mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Lightbox */}
        {activeImageIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
            onClick={handleCloseModal}
          >
            <div
              className="relative max-w-4xl w-full bg-vintage-darkest rounded-2xl overflow-hidden border border-vintage-gold/40 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:text-vintage-gold transition-colors"
                aria-label="Close image viewer"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Main Image with Navigation Arrows */}
              <div className="relative h-[400px] sm:h-[500px] w-full bg-black">
                <img
                  src={filteredItems[activeImageIndex].image}
                  alt={filteredItems[activeImageIndex].title}
                  className="w-full h-full object-contain"
                />

                {/* Left Arrow */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white hover:text-vintage-gold transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white hover:text-vintage-gold transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Caption */}
              <div className="p-6 bg-vintage-brown border-t border-vintage-gold/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <span className="text-xs uppercase tracking-widest text-vintage-gold font-semibold">
                    {filteredItems[activeImageIndex].category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-vintage-ivory">
                    {filteredItems[activeImageIndex].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-vintage-sand/80 mt-1">
                    {filteredItems[activeImageIndex].description}
                  </p>
                </div>

                <div className="text-xs text-vintage-gold/60 font-serif font-bold">
                  {activeImageIndex + 1} / {filteredItems.length}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
