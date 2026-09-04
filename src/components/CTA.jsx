import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const CTA = ({ onOpenEnquiry }) => {
  return (
    <section className="section-spacing cta-section" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-light)' }}>
      <div className="site-container">
        <div className="cta-box">
          <span className="eyebrow" style={{ color: '#D4C4B1', marginBottom: '1.25rem', justifyContent: 'center' }}>
            Private Real Estate Advisory
          </span>

          <h2 className="editorial-heading" style={{ color: '#FFFFFF', maxWidth: '780px' }}>
            Looking for your next property in Lagos?
          </h2>

          <p style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '580px', marginTop: '1.25rem', marginBottom: '2.5rem', fontSize: '1.02rem', fontWeight: 300, lineHeight: 1.7 }}>
            Explore our curated collection or speak directly with our Ikoyi advisory team to discuss private acquisitions, property viewings, or confidential mandates.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <button 
              type="button"
              onClick={() => onOpenEnquiry(null, 'general')}
              className="btn btn-white"
            >
              <span>Make an Enquiry</span>
              <ArrowRight size={15} />
            </button>

            <a 
              href={BUSINESS_CONFIG.createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-white"
              style={{ gap: '0.6rem' }}
            >
              <MessageCircle size={16} color="#25D366" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
