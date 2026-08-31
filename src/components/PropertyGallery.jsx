import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const PropertyGallery = ({ images = [], title = 'Property Gallery' }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="property-gallery-wrapper">
      {/* Main Image Frame */}
      <div className="gallery-hero">
        <img 
          src={images[activeIndex]} 
          alt={`${title} - View ${activeIndex + 1}`}
        />

        {images.length > 1 && (
          <>
            <button 
              className="gallery-nav-btn gallery-nav-prev" 
              onClick={handlePrev}
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>
            <button 
              className="gallery-nav-btn gallery-nav-next" 
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>
            <div style={{
              position: 'absolute',
              bottom: '1rem',
              right: '1rem',
              backgroundColor: 'rgba(18, 18, 18, 0.75)',
              color: '#FFFFFF',
              fontSize: '0.75rem',
              padding: '0.35rem 0.75rem',
              letterSpacing: '0.1em',
              backdropFilter: 'blur(4px)'
            }}>
              {activeIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {/* Thumbnails strip */}
      {images.length > 1 && (
        <div className="gallery-thumbnails" role="tablist" aria-label="Gallery thumbnails">
          {images.map((img, idx) => (
            <button
              key={idx}
              role="tab"
              aria-selected={activeIndex === idx}
              className={`gallery-thumb ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Show photo ${idx + 1}`}
            >
              <img src={img} alt={`Thumbnail ${idx + 1}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
