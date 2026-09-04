import React, { useEffect, useRef } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { gsap } from 'gsap';

export const Hero = ({ onOpenEnquiry }) => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const eyebrowRef = useRef(null);
  const descRef = useRef(null);
  const ctasRef = useRef(null);
  const locationTagRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.2 } });

      tl.fromTo(
        imageRef.current,
        { scale: 1.12, opacity: 0.75 },
        { scale: 1.04, opacity: 1, duration: 2.2, ease: 'power2.out' }
      )
      .fromTo(
        eyebrowRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 },
        '-=1.6'
      )
      .fromTo(
        headlineRef.current,
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.3 },
        '-=0.9'
      )
      .fromTo(
        descRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0 },
        '-=0.9'
      )
      .fromTo(
        locationTagRef.current,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.8'
      )
      .fromTo(
        ctasRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0 },
        '-=0.8'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="hero-section" ref={heroRef}>
      {/* Background Architectural Visual */}
      <div className="hero-bg">
        <img 
          ref={imageRef}
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85" 
          alt="Modernist luxury waterfront residence in Banana Island, Lagos"
          loading="eager"
        />
      </div>

      <div className="hero-overlay" />

      {/* Hero Content */}
      <div className="site-container hero-content">
        <div className="hero-grid">
          <div>
            <div ref={eyebrowRef} className="eyebrow" style={{ color: '#D4C4B1' }}>
              Curated Private Residences · Lagos, Nigeria
            </div>
            <h1 ref={headlineRef} className="hero-headline">
              Spaces worth<br />coming home to.
            </h1>
          </div>

          <div className="hero-aside">
            <p ref={descRef} className="hero-desc">
              A private portfolio of distinguished homes and commercial spaces across Ikoyi, Banana Island, and Victoria Island, represented with discretion and rigorous title due diligence.
            </p>

            <div ref={locationTagRef} className="hero-location-pills">
              <span className="location-pill">
                <MapPin size={12} color="var(--accent)" />
                Ikoyi
              </span>
              <span className="location-pill">Banana Island</span>
              <span className="location-pill">Victoria Island</span>
              <span className="location-pill">Lekki</span>
            </div>

            <div ref={ctasRef} className="hero-ctas">
              <a href="#collection" className="btn btn-white">
                <span>Explore Residences</span>
                <ArrowRight size={15} />
              </a>
              <button 
                type="button"
                onClick={() => onOpenEnquiry(null, 'general')} 
                className="btn btn-outline-white"
              >
                <span>Private Advisory</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
