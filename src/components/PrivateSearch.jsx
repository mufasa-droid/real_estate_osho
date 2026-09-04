import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const PrivateSearch = ({ onOpenEnquiry }) => {
  return (
    <section className="private-search-section">
      <div className="site-container">
        <div className="private-search-banner">
          <div className="private-search-text">
            <span className="eyebrow" style={{ color: 'var(--accent)' }}>
              Bespoke Property Mandates
            </span>
            <h2 className="editorial-subheading" style={{ marginTop: '0.5rem', marginBottom: '0.75rem', fontSize: 'clamp(1.75rem, 3vw, 2.3rem)' }}>
              Looking for a specific residence or off-market asset?
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65, maxWidth: '560px' }}>
              If your ideal property is not currently listed in our public portfolio, our private advisory team can discreetly source unlisted residential homes and commercial spaces across Lagos to match your specific criteria.
            </p>
          </div>

          <div className="private-search-actions">
            <button 
              type="button"
              onClick={() => onOpenEnquiry(null, 'search')}
              className="btn btn-primary"
              style={{ gap: '0.65rem' }}
            >
              <span>Start a Private Search</span>
              <ArrowRight size={15} />
            </button>
            <a 
              href={BUSINESS_CONFIG.createWhatsAppLink(null, 'search')}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <span>WhatsApp Brief</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
