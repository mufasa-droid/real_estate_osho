import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const About = ({ onOpenEnquiry }) => {
  return (
    <section id="about" className="section-spacing" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
      <div className="site-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          {/* Editorial Visual */}
          <div className="img-editorial" style={{ aspectRatio: '4/5', boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}>
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
              alt="Architectural detailing of modern residence"
              loading="lazy"
            />
          </div>

          {/* Editorial Copy */}
          <div>
            <span className="eyebrow">The Philosophy</span>
            <h2 className="editorial-heading" style={{ marginTop: '0.75rem', marginBottom: '1.75rem' }}>
              Curated for spatial integrity and enduring distinction.
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1rem' }}>
              <p>
                {BUSINESS_CONFIG.brandName} represents an uncompromising approach to real estate curation. We do not aggregate listings; we represent a restrained selection of properties defined by architectural pedigree, natural light, and structural permanence.
              </p>
              <p>
                From private waterfront sanctuaries to landmark duplex penthouses, each residence in our portfolio undergoes rigorous architectural and legal due diligence before representation.
              </p>
            </div>

            {/* Core Values Pillars */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--border-light)' }}>
              <div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  Architectural Rigor
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Representing spaces crafted by visionary architects with honest materials and exceptional proportion.
                </p>
              </div>

              <div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  Discreet Advisory
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Confidential representation tailored for private collectors, family offices, and institutions.
                </p>
              </div>
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              <button onClick={() => onOpenEnquiry(null)} className="btn btn-primary">
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
