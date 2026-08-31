import React from 'react';

export const FeaturedVisual = () => {
  return (
    <section 
      style={{
        position: 'relative',
        height: '70vh',
        minHeight: '480px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#121212',
        color: '#FFFFFF'
      }}
    >
      {/* Visual Canvas with subtle zoom/fixed presence */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.72)',
          transform: 'scale(1.02)'
        }}
      />

      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(18, 18, 18, 0.45)'
        }}
      />

      <div className="site-container" style={{ position: 'relative', zIndex: 3, textAlign: 'center', maxWidth: '850px' }}>
        <span className="eyebrow" style={{ color: '#D4C4B1', marginBottom: '1.25rem', justifyContent: 'center' }}>
          Spatial Distinction
        </span>
        <h2 className="editorial-heading" style={{ color: '#FFFFFF', fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}>
          “Architecture that speaks for itself.”
        </h2>
        <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginTop: '1.5rem', fontSize: 'clamp(1rem, 1.2vw, 1.15rem)', fontWeight: 300 }}>
          Sculpted by proportion, illuminated by natural daylight, crafted for permanence.
        </p>
      </div>
    </section>
  );
};
