import React, { useEffect, useState } from 'react';
import { X, MessageCircle, Mail } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { PROPERTIES } from '../data/properties';

export const EnquiryModal = ({ property = null, initialIntent = 'general', onClose }) => {
  const [selectedPropertyId, setSelectedPropertyId] = useState(() => (property ? property.id : ''));
  const [intent, setIntent] = useState(() => initialIntent || 'general');
  const [fullName, setFullName] = useState('');
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [note, setNote] = useState('');

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

  const activeProperty = PROPERTIES.find((p) => p.id === selectedPropertyId) || (selectedPropertyId ? null : property);

  const handleWhatsAppDirect = () => {
    const url = BUSINESS_CONFIG.createWhatsAppLink(activeProperty, intent, {
      name: fullName,
      phoneOrEmail,
      preferredDate,
      note
    });
    window.open(url, '_blank');
    onClose();
  };

  const handleEmailDirect = () => {
    const url = BUSINESS_CONFIG.createEmailLink(activeProperty, intent, {
      name: fullName,
      phoneOrEmail,
      preferredDate,
      note
    });
    window.location.href = url;
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="enquiry-modal-title">
      <div className="modal-container enquiry-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close enquiry modal">
          <X size={20} />
        </button>

        <div className="enquiry-modal-body">
          <span className="eyebrow">Private Client Advisory</span>
          <h2 id="enquiry-modal-title" className="editorial-subheading" style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
            Direct Real Estate Enquiry
          </h2>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
            Connect with our Ikoyi advisory team via WhatsApp or Email regarding property viewings, title dossiers, or bespoke search mandates.
          </p>

          {/* Intent Toggle Pills */}
          <div className="intent-selector-grid" role="group" aria-label="Enquiry Intent">
            <button
              type="button"
              className={`intent-btn ${intent === 'general' ? 'active' : ''}`}
              onClick={() => setIntent('general')}
            >
              General Interest
            </button>
            <button
              type="button"
              className={`intent-btn ${intent === 'inspection' ? 'active' : ''}`}
              onClick={() => setIntent('inspection')}
            >
              Schedule Inspection
            </button>
            <button
              type="button"
              className={`intent-btn ${intent === 'dossier' ? 'active' : ''}`}
              onClick={() => setIntent('dossier')}
            >
              Title & Due Diligence
            </button>
            <button
              type="button"
              className={`intent-btn ${intent === 'search' ? 'active' : ''}`}
              onClick={() => setIntent('search')}
            >
              Bespoke Search Mandate
            </button>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); handleWhatsAppDirect(); }} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
            {/* Property Selector (hidden if bespoke search mandate) */}
            {intent !== 'search' && (
              <div>
                <label className="form-field-label">
                  Property Reference
                </label>
                <select
                  value={selectedPropertyId}
                  onChange={(e) => setSelectedPropertyId(e.target.value)}
                  className="form-input"
                >
                  <option value="">General Portfolio Enquiry (No specific property)</option>
                  {PROPERTIES.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title} — {p.price} ({p.location})
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Inspection Timing (if inspection intent) */}
            {intent === 'inspection' && (
              <div>
                <label className="form-field-label">
                  Preferred Inspection Date & Time
                </label>
                <input
                  type="text"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  placeholder="e.g. Thursday morning, 11:00 AM WAT"
                  className="form-input"
                />
              </div>
            )}

            {/* Name */}
            <div>
              <label className="form-field-label">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Chief Adeleke or Mrs. Danjuma"
                className="form-input"
              />
            </div>

            {/* Contact Phone or Email */}
            <div>
              <label className="form-field-label">
                Phone Number / WhatsApp Contact
              </label>
              <input
                type="text"
                value={phoneOrEmail}
                onChange={(e) => setPhoneOrEmail(e.target.value)}
                placeholder="+234 80... or your preferred line"
                className="form-input"
              />
            </div>

            {/* Note / Specific Questions */}
            <div>
              <label className="form-field-label">
                {intent === 'search' ? 'Acquisition Criteria & Budget' : 'Notes & Specific Questions'}
              </label>
              <textarea
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder={
                  intent === 'search'
                    ? 'Target location (e.g. Ikoyi/Banana Island), required bedrooms, budget range, and timeline...'
                    : 'Any specific access requirements, documentation requests, or acquisition timeline...'
                }
                className="form-input"
                style={{ resize: 'vertical' }}
              />
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="btn btn-primary"
                style={{ width: '100%', gap: '0.6rem' }}
              >
                <MessageCircle size={17} color="#25D366" />
                <span>
                  {intent === 'inspection'
                    ? 'Confirm Inspection via WhatsApp'
                    : intent === 'search'
                    ? 'Submit Bespoke Search via WhatsApp'
                    : 'Send Pre-Filled WhatsApp Enquiry'}
                </span>
              </button>

              <button
                type="button"
                onClick={handleEmailDirect}
                className="btn btn-secondary"
                style={{ width: '100%', gap: '0.6rem', backgroundColor: '#FFFFFF' }}
              >
                <Mail size={16} />
                <span>Send Enquiry via Email</span>
              </button>
            </div>

            <div className="enquiry-modal-footer-note">
              <span>Ikoyi Advisory Desk • Immediate confidential response during business hours</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
