import React from 'react';

export const FeaturedVisual = () => {
  return (
    <section 
      className="featured-visual-section"
      style={{
        position: 'relative',
        height: '65vh',
        minHeight: '440px',
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
          filter: 'brightness(0.7)',
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

      <div className="site-container" style={{ position: 'relative', zIndex: 3, textAlign: 'center', maxWidth: '820px' }}>
        <span className="eyebrow" style={{ color: '#D4C4B1', marginBottom: '1.25rem', justifyContent: 'center' }}>
          Design & Proportion
        </span>
        <h2 className="editorial-heading" style={{ color: '#FFFFFF', fontSize: 'clamp(2.2rem, 5vw, 4.2rem)' }}>
          “Architecture that endures beyond trends.”
        </h2>
        <p style={{ color: 'rgba(255, 255, 255, 0.85)', marginTop: '1.25rem', fontSize: 'clamp(0.95rem, 1.2vw, 1.12rem)', fontWeight: 300, lineHeight: 1.6 }}>
          Carefully selected private residences situated in the most desirable coastal and urban quarters of Lagos.
        </p>
      </div>
    </section>
  );
};
