import React from 'react';
import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const ContactSection = () => {
  const whatsappUrl = BUSINESS_CONFIG.createWhatsAppLink();
  const emailUrl = BUSINESS_CONFIG.createEmailLink();

  return (
    <section id="contact" className="section-spacing contact-section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
      <div className="site-container">
        <div className="contact-grid">
          {/* Left Column: Heading & Context */}
          <div>
            <span className="eyebrow">Private Client Services</span>
            <h2 className="editorial-heading" style={{ marginTop: '0.75rem', marginBottom: '1.25rem' }}>
              Connect with our advisory desk.
            </h2>
            <p className="body-lead" style={{ marginBottom: '2rem', fontSize: '1.05rem' }}>
              We provide discreet, confidential representation for clients acquiring, leasing, or divesting prime residential and commercial real estate across Lagos.
            </p>

            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ gap: '0.65rem' }}
            >
              <MessageCircle size={16} color="#25D366" />
              <span>Direct WhatsApp Concierge</span>
            </a>
          </div>

          {/* Right Column: Structured Contact Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }}>
            {/* Phone & Direct Telephone */}
            <div className="contact-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                <Phone size={17} color="var(--accent)" />
                <span className="contact-card-label">
                  Telephone & Inquiries
                </span>
              </div>
              <a 
                href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`} 
                className="contact-card-value font-serif"
              >
                {BUSINESS_CONFIG.contact.phone}
              </a>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.25rem' }}>
                Direct line to senior property advisors
              </span>
            </div>

            {/* Email */}
            <div className="contact-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                <Mail size={17} color="var(--accent)" />
                <span className="contact-card-label">
                  Email Advisory
                </span>
              </div>
              <a 
                href={emailUrl} 
                className="contact-card-value font-serif"
              >
                {BUSINESS_CONFIG.contact.email}
              </a>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.25rem' }}>
                Confidential title dossiers and private viewing coordination
              </span>
            </div>

            {/* Office & Hours */}
            <div className="contact-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                <MapPin size={17} color="var(--accent)" />
                <span className="contact-card-label">
                  Lagos Advisory Office
                </span>
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 500, marginBottom: '0.5rem' }}>
                {BUSINESS_CONFIG.contact.officeAddress}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                <Clock size={13} color="var(--accent)" />
                <span>{BUSINESS_CONFIG.contact.openingHours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
