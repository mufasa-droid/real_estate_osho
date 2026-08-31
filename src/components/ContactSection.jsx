import React from 'react';
import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const ContactSection = () => {
  const whatsappUrl = BUSINESS_CONFIG.createWhatsAppLink();
  const emailUrl = BUSINESS_CONFIG.createEmailLink();

  return (
    <section id="contact" className="section-spacing" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
      <div className="site-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
          {/* Left Column: Heading & Context */}
          <div>
            <span className="eyebrow">Private Client Services</span>
            <h2 className="editorial-heading" style={{ marginTop: '0.75rem', marginBottom: '1.25rem' }}>
              Connect with our advisory.
            </h2>
            <p className="body-lead" style={{ marginBottom: '2rem' }}>
              We offer discreet, confidential representation for clients seeking to acquire, lease, or divest prime architectural real estate.
            </p>

            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ gap: '0.6rem' }}
            >
              <MessageCircle size={16} />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>

          {/* Right Column: Structured Contact Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
            {/* Phone & WhatsApp */}
            <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', border: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <Phone size={18} color="var(--accent)" />
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text-muted)' }}>
                  Telephone & Inquiries
                </span>
              </div>
              <a 
                href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`} 
                style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--text-primary)', textDecoration: 'none', display: 'block' }}
              >
                {BUSINESS_CONFIG.contact.phone}
              </a>
            </div>

            {/* Email */}
            <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', border: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <Mail size={18} color="var(--accent)" />
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text-muted)' }}>
                  Email Advisory
                </span>
              </div>
              <a 
                href={emailUrl} 
                style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--text-primary)', textDecoration: 'none', display: 'block' }}
              >
                {BUSINESS_CONFIG.contact.email}
              </a>
            </div>

            {/* Office & Hours */}
            <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', border: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <MapPin size={18} color="var(--accent)" />
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text-muted)' }}>
                  Private Advisory Office
                </span>
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
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
