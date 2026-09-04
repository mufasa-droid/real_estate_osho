import React, { useEffect } from 'react';
import { X, MessageCircle, Mail, MapPin, ShieldCheck, Check, Zap, FileText, Clock } from 'lucide-react';
import { PropertyGallery } from './PropertyGallery';
import { BUSINESS_CONFIG } from '../config/business';

export const PropertyModal = ({ property, onClose, onOpenEnquiry }) => {
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

  const whatsappGeneralUrl = BUSINESS_CONFIG.createWhatsAppLink(property, 'general');
  const emailUrl = BUSINESS_CONFIG.createEmailLink(property, 'general');

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
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                <span className="eyebrow">{property.type}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>•</span>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--accent)', fontWeight: 600 }}>
                  {property.status}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>•</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Ref: {property.id}</span>
              </div>

              <h2 id="modal-property-title" className="editorial-subheading" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', marginBottom: '0.5rem' }}>
                {property.title}
              </h2>

              <p style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                <MapPin size={16} color="var(--accent)" />
                <span style={{ fontWeight: 500 }}>{property.location}</span>
              </p>

              <p className="body-lead" style={{ fontSize: '1.02rem', color: 'var(--text-primary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                {property.tagline}
              </p>

              <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
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
                    <span className="spec-label">Year Completed</span>
                    <span className="spec-value">{property.yearBuilt}</span>
                  </div>
                )}
                {property.furnishing && (
                  <div className="spec-item">
                    <span className="spec-label">Furnishing</span>
                    <span className="spec-value" style={{ fontSize: '0.95rem', fontFamily: 'var(--font-sans)', fontWeight: 500 }}>
                      {property.furnishing}
                    </span>
                  </div>
                )}
              </div>

              {/* Infrastructure & Title Metadata Box */}
              <div className="property-infra-card">
                {property.powerInfrastructure && (
                  <div className="infra-row">
                    <Zap size={16} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <span className="infra-label">Power & Infrastructure:</span>
                      <span className="infra-val">{property.powerInfrastructure}</span>
                    </div>
                  </div>
                )}
                {property.documentation && (
                  <div className="infra-row" style={{ marginTop: '0.75rem' }}>
                    <FileText size={16} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <span className="infra-label">Documentation Due Diligence:</span>
                      <span className="infra-val">{property.documentation}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Architectural Highlights */}
              {property.highlights && property.highlights.length > 0 && (
                <div style={{ marginTop: '2rem' }}>
                  <h4 style={{ fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 600 }}>
                    Residence Specifications & Features
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
              <div className="modal-sticky-card">
                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                  Guide Price
                </span>
                <div className="modal-price-display">
                  {property.price}
                </div>

                <div className="modal-card-trust-points">
                  <div className="trust-point-item">
                    <ShieldCheck size={16} color="var(--accent)" />
                    <span>Direct Private Advisory Representation</span>
                  </div>
                  <div className="trust-point-item">
                    <Check size={16} color="var(--accent)" />
                    <span>Title & Survey Records Reviewed</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {/* Schedule Inspection Button */}
                  <button 
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenEnquiry(property, 'inspection');
                    }}
                    className="btn btn-primary"
                    style={{ width: '100%', gap: '0.6rem' }}
                  >
                    <Clock size={16} />
                    <span>Schedule Private Inspection</span>
                  </button>

                  {/* Direct WhatsApp Chat */}
                  <a 
                    href={whatsappGeneralUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ width: '100%', gap: '0.6rem', backgroundColor: '#FFFFFF' }}
                  >
                    <MessageCircle size={16} color="#25D366" />
                    <span>WhatsApp Inquiry</span>
                  </a>

                  {/* Email Brochure Request */}
                  <a 
                    href={emailUrl}
                    className="btn btn-secondary"
                    style={{ width: '100%', gap: '0.6rem', backgroundColor: '#FFFFFF', fontSize: '0.72rem' }}
                  >
                    <Mail size={15} />
                    <span>Request Title Dossier via Email</span>
                  </a>
                </div>

                <div className="modal-advisory-note">
                  <span style={{ display: 'block', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                    Ikoyi Advisory Desk
                  </span>
                  <span>{BUSINESS_CONFIG.contact.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
