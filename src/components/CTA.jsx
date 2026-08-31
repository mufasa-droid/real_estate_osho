import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const CTA = ({ onOpenEnquiry }) => {
  return (
    <section className="section-spacing" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-light)' }}>
      <div className="site-container">
        <div style={{
          backgroundColor: 'var(--bg-dark)',
          color: '#FFFFFF',
          padding: 'clamp(3.5rem, 6vw, 6rem) clamp(2rem, 5vw, 5rem)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <span className="eyebrow" style={{ color: '#C8B29B', marginBottom: '1.25rem', justifyContent: 'center' }}>
            Next Chapter
          </span>

          <h2 className="editorial-heading" style={{ color: '#FFFFFF', maxWidth: '780px' }}>
            Looking for your next property?
          </h2>

          <p style={{ color: 'rgba(255, 255, 255, 0.75)', maxWidth: '580px', marginTop: '1.25rem', marginBottom: '2.75rem', fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.7 }}>
            Explore our curated collection or speak directly with our private advisory team to discuss your acquisitions and confidential mandates.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <button 
              onClick={() => onOpenEnquiry(null)}
              className="btn btn-white"
            >
              <span>Make an Enquiry</span>
              <ArrowRight size={15} />
            </button>

            <a 
              href="#collection"
              className="btn btn-outline-white"
            >
              <span>View Properties</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
