import React from 'react';
import { FileCheck, Users2, Building2, ShieldCheck } from 'lucide-react';

export const TrustSection = ({ onOpenEnquiry }) => {
  return (
    <section className="section-spacing trust-section">
      <div className="site-container">
        {/* Section Header */}
        <div className="trust-header">
          <span className="eyebrow">The Advisory Standard</span>
          <h2 className="editorial-heading" style={{ marginTop: '0.75rem', marginBottom: '1rem' }}>
            Considered. Reviewed. Represented.
          </h2>
          <p className="body-lead" style={{ maxWidth: '640px' }}>
            We represent a disciplined selection of residential and commercial assets in Lagos, combining architectural distinction with thorough documentation due diligence.
          </p>
        </div>

        {/* 3 Core Trust Pillars */}
        <div className="trust-grid">
          {/* Pillar 1: Curation */}
          <div className="trust-card">
            <div className="trust-icon-box">
              <Building2 size={24} color="var(--accent)" />
            </div>
            <h3 className="trust-card-title">Rigorous Curation</h3>
            <p className="trust-card-desc">
              We do not aggregate hundreds of indiscriminate listings. Every residence in our portfolio is personally inspected to ensure architectural caliber, construction quality, and prime location.
            </p>
          </div>

          {/* Pillar 2: Due Diligence */}
          <div className="trust-card">
            <div className="trust-icon-box">
              <FileCheck size={24} color="var(--accent)" />
            </div>
            <h3 className="trust-card-title">Documentation Review</h3>
            <p className="trust-card-desc">
              Before listing, our advisory reviews survey plans, land registry records, and title history so our clients can proceed into transaction discussions with absolute clarity.
            </p>
          </div>

          {/* Pillar 3: Representation */}
          <div className="trust-card">
            <div className="trust-icon-box">
              <Users2 size={24} color="var(--accent)" />
            </div>
            <h3 className="trust-card-title">Private Client Discretion</h3>
            <p className="trust-card-desc">
              We advise high-net-worth individuals, diaspora investors, and family offices with complete confidentiality, offering bespoke private viewings and dedicated negotiation support.
            </p>
          </div>
        </div>

        {/* Advisory Assurance Footer Bar */}
        <div className="trust-footer-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ShieldCheck size={20} color="var(--accent)" style={{ flexShrink: 0 }} />
            <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Direct access to our Ikoyi private advisory desk for confidential acquisition mandates.
            </span>
          </div>
          <button 
            type="button"
            onClick={() => onOpenEnquiry(null, 'general')}
            className="link-editorial"
            style={{ fontSize: '0.76rem', whiteSpace: 'nowrap' }}
          >
            <span>Consult Our Team</span>
          </button>
        </div>
      </div>
    </section>
  );
};
