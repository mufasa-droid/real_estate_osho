import React, { useEffect, useState } from 'react';
import { X, MessageCircle, Mail, Phone, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { PROPERTIES } from '../data/properties';

export const EnquiryModal = ({ property = null, onClose }) => {
  const [selectedPropertyId, setSelectedPropertyId] = useState(property ? property.id : '');
  const [fullName, setFullName] = useState('');
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (property) setSelectedPropertyId(property.id);
  }, [property]);

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

  const activeProperty = PROPERTIES.find((p) => p.id === selectedPropertyId) || property;

  const handleWhatsAppDirect = () => {
    let customText = '';
    if (activeProperty) {
      customText = `Hello, I'm interested in this property:

Property:
${activeProperty.title}

Location:
${activeProperty.location}

Price:
${activeProperty.price}

${fullName ? `Name: ${fullName}\n` : ''}${phoneOrEmail ? `Contact: ${phoneOrEmail}\n` : ''}${note ? `Note: ${note}\n` : ''}
I would like more information about this property.

Thank you.`;
    } else {
      customText = `Hello Aurelia & Stone,

${fullName ? `My name is ${fullName}.\n` : ''}${phoneOrEmail ? `Contact: ${phoneOrEmail}\n` : ''}${note ? `Message: ${note}\n` : ''}
I would like to enquire about your available luxury property portfolio.

Thank you.`;
    }

    const url = `https://wa.me/${BUSINESS_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(customText)}`;
    window.open(url, '_blank');
    onClose();
  };

  const handleEmailDirect = () => {
    const email = BUSINESS_CONFIG.contact.enquiriesEmail;
    const subject = activeProperty ? `Private Enquiry: ${activeProperty.title}` : 'Private Real Estate Consultation Request';
    const body = `Hello Aurelia & Stone,\n\nName: ${fullName || 'N/A'}\nContact Info: ${phoneOrEmail || 'N/A'}\nInterested In: ${activeProperty ? `${activeProperty.title} (${activeProperty.price})` : 'General Portfolio'}\n\nNotes:\n${note || 'I would like to schedule a private viewing.'}\n\nKind regards,`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="enquiry-modal-title">
      <div className="modal-container" style={{ maxWidth: '640px' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close enquiry modal">
          <X size={20} />
        </button>

        <div style={{ padding: 'clamp(2rem, 5vw, 3rem)' }}>
          <span className="eyebrow">Direct Advisory</span>
          <h2 id="enquiry-modal-title" className="editorial-subheading" style={{ marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            Make a Private Enquiry
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Connect immediately with our team via WhatsApp or Email regarding any property or custom search mandate.
          </p>

          <form onSubmit={(e) => { e.preventDefault(); handleWhatsAppDirect(); }} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Property Selector */}
            <div>
              <label style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                Property of Interest (Optional)
              </label>
              <select
                value={selectedPropertyId}
                onChange={(e) => setSelectedPropertyId(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-light)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  color: 'var(--text-primary)',
                  borderRadius: '0px'
                }}
              >
                <option value="">General Portfolio Enquiry</option>
                {PROPERTIES.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.title} — {p.price} ({p.location})
                  </option>
                ))}
              </select>
            </div>

            {/* Name */}
            <div>
              <label style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Lord Sterling or Dr. Adeyemi"
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-light)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  color: 'var(--text-primary)',
                  borderRadius: '0px'
                }}
              />
            </div>

            {/* Contact Phone or Email */}
            <div>
              <label style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                Phone Number / Email
              </label>
              <input
                type="text"
                value={phoneOrEmail}
                onChange={(e) => setPhoneOrEmail(e.target.value)}
                placeholder="Your direct line or email"
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-light)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  color: 'var(--text-primary)',
                  borderRadius: '0px'
                }}
              />
            </div>

            {/* Note / Specific Questions */}
            <div>
              <label style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                Questions or Specific Requirements
              </label>
              <textarea
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Preferred viewing schedule, architectural questions, or acquisition timeline..."
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-light)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  color: 'var(--text-primary)',
                  borderRadius: '0px',
                  resize: 'vertical'
                }}
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
                <MessageCircle size={16} />
                <span>Send Pre-Filled WhatsApp Enquiry</span>
              </button>

              <button
                type="button"
                onClick={handleEmailDirect}
                className="btn btn-secondary"
                style={{ width: '100%', gap: '0.6rem' }}
              >
                <Mail size={16} />
                <span>Send via Email Client</span>
              </button>
            </div>

            <p style={{ textAlign: 'center', fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              Immediate confidential response during operating hours.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
