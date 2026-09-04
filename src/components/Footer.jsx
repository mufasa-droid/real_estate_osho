import React from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

// Clean inline SVGs for social brands
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export const Footer = ({ onOpenEnquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="site-container">
        {/* Main Footer Row */}
        <div className="footer-grid">
          {/* Brand Col */}
          <div>
            <div className="footer-brand-title">
              {BUSINESS_CONFIG.brandName}
            </div>
            <p className="footer-brand-desc">
              Private residence showcase and real-estate advisory representing distinguished properties across Lagos, Nigeria.
            </p>
            <div style={{ display: 'flex', gap: '1.25rem' }}>
              <a 
                href={BUSINESS_CONFIG.contact.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#FFFFFF', opacity: 0.75, transition: 'opacity 0.2s ease', display: 'flex', alignItems: 'center' }}
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a 
                href={BUSINESS_CONFIG.contact.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#FFFFFF', opacity: 0.75, transition: 'opacity 0.2s ease', display: 'flex', alignItems: 'center' }}
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a 
                href={BUSINESS_CONFIG.createWhatsAppLink()} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#FFFFFF', opacity: 0.75, transition: 'opacity 0.2s ease', display: 'flex', alignItems: 'center' }}
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <div className="footer-col-header">
              Navigation
            </div>
            <ul className="footer-links-list">
              <li>
                <a href="#hero" className="footer-link">Home</a>
              </li>
              <li>
                <a href="#featured" className="footer-link">Featured Residences</a>
              </li>
              <li>
                <a href="#collection" className="footer-link">The Collection</a>
              </li>
              <li>
                <a href="#about" className="footer-link">About The Advisory</a>
              </li>
              <li>
                <a href="#contact" className="footer-link">Private Services</a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <div className="footer-col-header">
              Advisory Presence
            </div>
            <p style={{ fontSize: '0.88rem', color: '#E5E4DE', marginBottom: '0.85rem', lineHeight: 1.6 }}>
              <strong style={{ color: '#FFFFFF' }}>Lagos Flagship Office:</strong><br />
              {BUSINESS_CONFIG.contact.officeAddress}
            </p>
            <p style={{ fontSize: '0.88rem', color: '#A3A29B', lineHeight: 1.6 }}>
              <strong style={{ color: '#E5E4DE' }}>UK & Diaspora Representation:</strong><br />
              {BUSINESS_CONFIG.contact.secondaryAddress}
            </p>
          </div>

          {/* Quick Consultation CTA */}
          <div>
            <div className="footer-col-header">
              Private Client Desk
            </div>
            <p style={{ fontSize: '0.85rem', color: '#A3A29B', marginBottom: '1.25rem', lineHeight: 1.6 }}>
              For bespoke acquisition mandates and confidential property dossiers.
            </p>
            <button 
              type="button"
              onClick={() => onOpenEnquiry(null, 'general')}
              className="btn btn-outline-white"
              style={{ width: '100%', padding: '0.85rem 1.25rem', fontSize: '0.72rem' }}
            >
              Enquire Directly
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} {BUSINESS_CONFIG.brandName}. Private Residences & Real Estate Advisory.
          </div>

          <button 
            type="button"
            onClick={scrollToTop}
            className="back-to-top-btn"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
