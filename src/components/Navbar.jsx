import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const Navbar = ({ onOpenEnquiry }) => {
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : 'dark-hero'}`}>
        <div className="site-container nav-container">
          <a href="#" className="nav-brand" aria-label="Osho Properties Homepage">
            <span className="nav-brand-title">{BUSINESS_CONFIG.brandName}</span>
            <span className="nav-brand-sub">Private Residences · Lagos</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="nav-menu" aria-label="Main Navigation">
            <a href="#hero" className="nav-link">Home</a>
            <a href="#featured" className="nav-link">Featured</a>
            <a href="#collection" className="nav-link">Collection</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          {/* Nav Actions */}
          <div className="nav-actions">
            <button 
              type="button"
              onClick={() => onOpenEnquiry(null, 'general')}
              className="btn btn-primary nav-cta"
              style={{ padding: '0.75rem 1.4rem', fontSize: '0.72rem' }}
            >
              <span>Enquire</span>
              <ArrowUpRight size={14} />
            </button>

            <button 
              className="hamburger-btn" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div className="nav-brand-title" style={{ color: '#FFFFFF' }}>{BUSINESS_CONFIG.brandName}</div>
            <div className="nav-brand-sub" style={{ color: '#A3A29B' }}>Private Residences · Lagos</div>
          </div>
          <button 
            onClick={closeMenu} 
            style={{ background: 'none', border: 'none', color: '#FFFFFF', cursor: 'pointer' }}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        <nav className="mobile-nav-links">
          <a href="#hero" className="mobile-nav-link" onClick={closeMenu}>01. Home</a>
          <a href="#featured" className="mobile-nav-link" onClick={closeMenu}>02. Featured</a>
          <a href="#collection" className="mobile-nav-link" onClick={closeMenu}>03. Collection</a>
          <a href="#about" className="mobile-nav-link" onClick={closeMenu}>04. About</a>
          <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>05. Contact</a>
        </nav>

        <div style={{ borderTop: '1px solid #2A2A2A', paddingTop: '1.5rem' }}>
          <p style={{ fontSize: '0.78rem', color: '#A3A29B', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.14em' }}>
            Private Enquiries & Advisory
          </p>
          <button 
            type="button"
            onClick={() => { closeMenu(); onOpenEnquiry(null, 'general'); }}
            className="btn btn-white"
            style={{ width: '100%' }}
          >
            Make an Enquiry
          </button>
        </div>
      </div>
    </>
  );
};
