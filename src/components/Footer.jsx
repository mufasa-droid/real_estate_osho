import React from 'react';
import { ArrowUp, MessageCircle, Mail } from 'lucide-react';
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
    <footer style={{ backgroundColor: 'var(--bg-dark)', color: '#FFFFFF', paddingTop: '5rem', paddingBottom: '3rem', borderTop: '1px solid #242424' }}>
      <div className="site-container">
        {/* Main Footer Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3.5rem', marginBottom: '4rem' }}>
          {/* Brand Col */}
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              {BUSINESS_CONFIG.brandName}
            </div>
            <p style={{ fontSize: '0.88rem', color: '#A3A29B', lineHeight: 1.7, maxWidth: '300px', marginBottom: '1.5rem', fontWeight: 300 }}>
              Curated architectural residences and prime real estate portfolio for discerning private clients.
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
            <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--accent)', marginBottom: '1.25rem', fontWeight: 600 }}>
              Navigation
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <li>
                <a href="#hero" style={{ color: '#E5E4DE', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}>Home</a>
              </li>
              <li>
                <a href="#featured" style={{ color: '#E5E4DE', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}>Featured Residences</a>
              </li>
              <li>
                <a href="#collection" style={{ color: '#E5E4DE', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}>The Collection</a>
              </li>
              <li>
                <a href="#about" style={{ color: '#E5E4DE', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}>Brand Philosophy</a>
              </li>
              <li>
                <a href="#contact" style={{ color: '#E5E4DE', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}>Private Advisory</a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--accent)', marginBottom: '1.25rem', fontWeight: 600 }}>
              Advisory Offices
            </div>
            <p style={{ fontSize: '0.88rem', color: '#E5E4DE', marginBottom: '0.75rem', lineHeight: 1.6 }}>
              <strong>Lagos Flagship:</strong><br />
              {BUSINESS_CONFIG.contact.officeAddress}
            </p>
            <p style={{ fontSize: '0.88rem', color: '#A3A29B', lineHeight: 1.6 }}>
              <strong>London Representation:</strong><br />
              {BUSINESS_CONFIG.contact.secondaryAddress}
            </p>
          </div>

          {/* Quick Consultation CTA */}
          <div>
            <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--accent)', marginBottom: '1.25rem', fontWeight: 600 }}>
              Private Client Desk
            </div>
            <p style={{ fontSize: '0.85rem', color: '#A3A29B', marginBottom: '1.25rem', lineHeight: 1.6 }}>
              For bespoke acquisition mandates and confidential listings.
            </p>
            <button 
              onClick={() => onOpenEnquiry(null)}
              className="btn btn-outline-white"
              style={{ width: '100%', padding: '0.85rem 1.25rem', fontSize: '0.72rem' }}
            >
              Enquire Directly
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: '1px solid #242424', 
          paddingTop: '2rem', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: '1rem',
          fontSize: '0.78rem',
          color: '#767676'
        }}>
          <div>
            © {new Date().getFullYear()} {BUSINESS_CONFIG.brandName}. All architectural rights reserved.
          </div>

          <button 
            onClick={scrollToTop}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: '#A3A29B', 
              cursor: 'pointer', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.4rem',
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.12em'
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
