/**
 * Centralized Business & Brand Configuration
 * Update brand details, contact information, and WhatsApp pre-fill logic in one place.
 */

export const BUSINESS_CONFIG = {
  brandName: 'AURELIA & STONE',
  shortBrandName: 'A&S',
  tagline: 'Spaces worth coming home to.',
  subTagline: 'Curated Architectural Residences & Luxury Real Estate',
  
  // Contact details (Placeholders easily replaceable with live company data)
  contact: {
    phone: '+234 (0) 800 287 3542',
    phoneRaw: '+2348002873542',
    whatsappNumber: '2348002873542', // Format without + or spaces for api.whatsapp.com
    email: 'private@aureliastone.com',
    enquiriesEmail: 'enquiries@aureliastone.com',
    instagram: '@aureliastone.properties',
    instagramUrl: 'https://instagram.com',
    linkedinUrl: 'https://linkedin.com',
    officeAddress: '14 Alexander Boulevard, Ikoyi, Lagos',
    secondaryAddress: 'Mayfair, London W1K',
    openingHours: 'Monday – Saturday: 9:00 AM – 6:00 PM (By Private Appointment)',
  },

  // Helper to build pre-filled WhatsApp enquiry message as per master specification
  createWhatsAppLink: (property = null) => {
    const number = BUSINESS_CONFIG.contact.whatsappNumber;
    
    if (property) {
      const message = `Hello, I'm interested in this property:

Property:
${property.title}

Location:
${property.location}

Price:
${property.price}

I would like more information about this property.

Thank you.`;
      return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    }

    const genericMessage = `Hello Aurelia & Stone,

I would like to enquire about your available luxury property portfolio.

Thank you.`;
    return `https://wa.me/${number}?text=${encodeURIComponent(genericMessage)}`;
  },

  // Helper to build mailto link
  createEmailLink: (property = null) => {
    const email = BUSINESS_CONFIG.contact.enquiriesEmail;
    if (property) {
      const subject = `Enquiry: ${property.title} (${property.location})`;
      const body = `Hello Aurelia & Stone,\n\nI am writing to request a private portfolio brochure and viewing information for:\n\nProperty: ${property.title}\nLocation: ${property.location}\nPrice: ${property.price}\nReference ID: ${property.id}\n\nPlease contact me at your earliest convenience.\n\nKind regards,`;
      return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    return `mailto:${email}?subject=${encodeURIComponent('General Property Portfolio Enquiry')}`;
  }
};
