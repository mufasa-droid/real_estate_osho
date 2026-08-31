import React, { useEffect } from 'react';
import { X, MessageCircle, Mail, MapPin, Bed, Bath, Maximize2, Car, Calendar, ShieldCheck, Check } from 'lucide-react';
import { PropertyGallery } from './PropertyGallery';
import { BUSINESS_CONFIG } from '../config/business';

export const PropertyModal = ({ property, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!property) return null;

  const whatsappUrl = BUSINESS_CONFIG.createWhatsAppLink(property);
  const emailUrl = BUSINESS_CONFIG.createEmailLink(property);

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-property-title">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close property details">
          <X size={20} />
        </button>

        {/* Gallery */}
        <PropertyGallery images={property.images} title={property.title} />

        {/* Modal Body */}
        <div className="modal-body">
          <div className="modal-grid">
            {/* Left Column: Details & Description */}
            <div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span className="eyebrow">{property.type}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>•</span>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text-secondary)' }}>
                  {property.status}
                </span>
              </div>

              <h2 id="modal-property-title" className="editorial-subheading" style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>
                {property.title}
              </h2>

              <p style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                <MapPin size={16} color="var(--accent)" />
                <span>{property.location}</span>
              </p>

              <p className="body-lead" style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                {property.tagline}
              </p>

              <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                <p>{property.description}</p>
              </div>

              {/* Key Specs Grid */}
              <div className="specs-grid">
                {property.bedrooms && (
                  <div className="spec-item">
                    <span className="spec-label">Bedrooms</span>
                    <span className="spec-value">{property.bedrooms}</span>
                  </div>
                )}
                {property.bathrooms && (
                  <div className="spec-item">
                    <span className="spec-label">Bathrooms</span>
                    <span className="spec-value">{property.bathrooms}</span>
                  </div>
                )}
                {property.size && (
                  <div className="spec-item">
                    <span className="spec-label">Total Area</span>
                    <span className="spec-value">{property.size}</span>
                  </div>
                )}
                {property.parking && (
                  <div className="spec-item">
                    <span className="spec-label">Parking</span>
                    <span className="spec-value">{property.parking}</span>
                  </div>
                )}
                {property.yearBuilt && (
                  <div className="spec-item">
                    <span className="spec-label">Completed</span>
                    <span className="spec-value">{property.yearBuilt}</span>
                  </div>
                )}
              </div>

              {/* Architectural Highlights */}
              {property.highlights && property.highlights.length > 0 && (
                <div style={{ marginTop: '2rem' }}>
                  <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    Architectural Specifications & Highlights
                  </h4>
                  <ul className="highlights-list">
                    {property.highlights.map((highlight, idx) => (
                      <li key={idx}>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column: Pricing & Direct Enquiries Card */}
            <div>
              <div style={{ 
                backgroundColor: 'var(--bg-secondary)', 
                padding: '2rem', 
                border: '1px solid var(--border-light)',
                position: 'sticky',
                top: '2rem'
              }}>
                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                  Guide Price
                </span>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                  {property.price}
                </div>

                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <ShieldCheck size={16} color="var(--accent)" />
                    <span>Discreet, Private Client Service</span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Check size={16} color="var(--accent)" />
                    <span>Verified Architectural Title</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {/* WhatsApp Enquiry Button */}
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ width: '100%', gap: '0.6rem' }}
                  >
                    <MessageCircle size={16} />
                    <span>Enquire via WhatsApp</span>
                  </a>

                  {/* Email Brochure Request */}
                  <a 
                    href={emailUrl}
                    className="btn btn-secondary"
                    style={{ width: '100%', gap: '0.6rem', backgroundColor: '#FFFFFF' }}
                  >
                    <Mail size={16} />
                    <span>Email Private Brochure</span>
                  </a>
                </div>

                <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>
                    Direct Advisory: {BUSINESS_CONFIG.contact.phone}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
