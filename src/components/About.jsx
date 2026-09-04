import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const About = ({ onOpenEnquiry }) => {
  return (
    <section id="about" className="section-spacing about-section">
      <div className="site-container">
        <div className="about-grid">
          {/* Editorial Visual */}
          <div className="img-editorial about-visual">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
              alt="Architectural detailing of modern residence in Ikoyi"
              loading="lazy"
            />
            <div className="about-visual-overlay">
              <span className="about-visual-tag">Ikoyi Flagship Desk</span>
            </div>
          </div>

          {/* Editorial Copy */}
          <div className="about-content">
            <span className="eyebrow">About The Advisory</span>
            <h2 className="editorial-heading" style={{ marginTop: '0.75rem', marginBottom: '1.5rem' }}>
              Built on discretion, design, and thorough market knowledge.
            </h2>

            <div className="about-paragraphs">
              <p>
                {BUSINESS_CONFIG.brandName} is a private real-estate advisory based in Ikoyi, Lagos. Rather than operating as an open listing directory, we work closely with a select group of property owners, developers, and private buyers who value high-grade architectural design and verified documentation.
              </p>
              <p>
                Whether securing a waterfront residence on Banana Island, an executive duplex penthouse in Victoria Island, or a commercial headquarters, our team ensures every acquisition is handled with personal attention, confidentiality, and sound legal diligence.
              </p>
            </div>

            {/* Core Values Pillars */}
            <div className="about-pillars">
              <div className="about-pillar-item">
                <h4 className="about-pillar-title">
                  Curated Inventory
                </h4>
                <p className="about-pillar-desc">
                  Focused exclusively on well-proportioned homes and prime commercial spaces with clear architectural character.
                </p>
              </div>

              <div className="about-pillar-item">
                <h4 className="about-pillar-title">
                  Direct Representation
                </h4>
                <p className="about-pillar-desc">
                  One-on-one advisory for local executives, diaspora investors, and international clients seeking trusted local guidance.
                </p>
              </div>
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              <button 
                type="button"
                onClick={() => onOpenEnquiry(null, 'general')} 
                className="btn btn-primary"
              >
                <span>Request Private Consultation</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
