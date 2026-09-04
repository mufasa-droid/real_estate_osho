/**
 * Centralized Business & Brand Configuration — OSHO PROPERTIES
 * Advisory contacts, Lagos office details, and structured WhatsApp/Email pre-fills.
 */

export const BUSINESS_CONFIG = {
  brandName: 'OSHO PROPERTIES',
  shortBrandName: 'OSHO',
  tagline: 'Spaces worth coming home to.',
  subTagline: 'Curated Private Residences · Lagos, Nigeria',
  marketLabel: 'Lagos, Nigeria',
  
  // Real Estate Advisory Contact Details
  contact: {
    phone: '+234 (0) 800 287 3542',
    phoneRaw: '+2348002873542',
    whatsappNumber: '2348002873542', // Format for wa.me URL
    email: 'advisory@oshoproperties.com',
    enquiriesEmail: 'enquiries@oshoproperties.com',
    instagram: '@oshoproperties.ng',
    instagramUrl: 'https://instagram.com',
    linkedinUrl: 'https://linkedin.com',
    officeAddress: '14 Alexander Boulevard, Ikoyi, Lagos, Nigeria',
    secondaryAddress: 'Mayfair, London W1K (Diaspora Representation)',
    openingHours: 'Monday – Saturday: 9:00 AM – 6:00 PM WAT (By Private Appointment)',
  },

  // Helper to build pre-filled WhatsApp enquiry message based on intent
  createWhatsAppLink: (property = null, intent = 'general', customDetails = {}) => {
    const number = BUSINESS_CONFIG.contact.whatsappNumber;
    const { name, phoneOrEmail, note, preferredDate } = customDetails;

    if (intent === 'inspection' && property) {
      const message = `Hello Osho Properties Advisory,

I would like to schedule a private inspection for:

Property: ${property.title}
Location: ${property.location}
Price: ${property.price}
${preferredDate ? `Preferred Date/Time: ${preferredDate}\n` : ''}${name ? `Name: ${name}\n` : ''}${phoneOrEmail ? `Contact: ${phoneOrEmail}\n` : ''}${note ? `Note: ${note}\n` : ''}
Please let me know the available viewing schedule.

Thank you.`;
      return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    }

    if (intent === 'dossier' && property) {
      const message = `Hello Osho Properties Advisory,

I would like to request the due diligence dossier and private brochure for:

Property: ${property.title}
Location: ${property.location}
Price: ${property.price}
${name ? `Name: ${name}\n` : ''}${phoneOrEmail ? `Contact: ${phoneOrEmail}\n` : ''}
Please share the documentation when available.

Thank you.`;
      return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    }

    if (intent === 'search') {
      const message = `Hello Osho Properties Advisory,

I would like to initiate a bespoke property search mandate.

Requirements:
${name ? `Name: ${name}\n` : ''}${phoneOrEmail ? `Contact: ${phoneOrEmail}\n` : ''}${note ? `Criteria: ${note}\n` : 'Looking for prime residential property in Lagos.'}
Please connect me with a private client advisor.

Thank you.`;
      return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    }

    if (property) {
      const message = `Hello Osho Properties Advisory,

I am interested in this property:

Property: ${property.title}
Location: ${property.location}
Price: ${property.price}
${name ? `Name: ${name}\n` : ''}${phoneOrEmail ? `Contact: ${phoneOrEmail}\n` : ''}${note ? `Message: ${note}\n` : ''}
I would like more information on availability and terms.

Thank you.`;
      return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    }

    const genericMessage = `Hello Osho Properties Advisory,

I would like to enquire about your available luxury property portfolio in Lagos.
${name ? `Name: ${name}\n` : ''}${phoneOrEmail ? `Contact: ${phoneOrEmail}\n` : ''}
Thank you.`;
    return `https://wa.me/${number}?text=${encodeURIComponent(genericMessage)}`;
  },

  // Helper to build mailto link
  createEmailLink: (property = null, intent = 'general', customDetails = {}) => {
    const email = BUSINESS_CONFIG.contact.enquiriesEmail;
    const { name, phoneOrEmail, note, preferredDate } = customDetails;

    if (intent === 'inspection' && property) {
      const subject = `Private Inspection Request: ${property.title} (${property.location})`;
      const body = `Hello Osho Properties Advisory,\n\nI would like to schedule a private inspection for the following property:\n\nProperty: ${property.title}\nLocation: ${property.location}\nGuide Price: ${property.price}\nReference: ${property.id}\n${preferredDate ? `Preferred Timing: ${preferredDate}\n` : ''}\nClient Name: ${name || 'N/A'}\nContact: ${phoneOrEmail || 'N/A'}\n\nAdditional Notes:\n${note || 'Please confirm available appointment slots.'}\n\nKind regards,`;
      return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    if (intent === 'search') {
      const subject = `Bespoke Acquisition Mandate Request — Lagos Portfolio`;
      const body = `Hello Osho Properties Advisory,\n\nI would like to initiate a private search for properties matching my criteria.\n\nClient Name: ${name || 'N/A'}\nContact: ${phoneOrEmail || 'N/A'}\n\nAcquisition Brief / Specifications:\n${note || 'Please reach out to discuss my requirements.'}\n\nKind regards,`;
      return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    if (property) {
      const subject = `Enquiry: ${property.title} (${property.location})`;
      const body = `Hello Osho Properties Advisory,\n\nI am requesting information regarding:\n\nProperty: ${property.title}\nLocation: ${property.location}\nPrice: ${property.price}\nReference: ${property.id}\n\nClient Name: ${name || 'N/A'}\nContact: ${phoneOrEmail || 'N/A'}\n\nNotes:\n${note || 'Please provide details on purchase terms and due diligence.'}\n\nKind regards,`;
      return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    return `mailto:${email}?subject=${encodeURIComponent('Private Client Portfolio Enquiry — Osho Properties')}`;
  }
};
