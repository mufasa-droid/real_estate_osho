import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProperties } from './components/FeaturedProperties';
import { PropertyCollection } from './components/PropertyCollection';
import { TrustSection } from './components/TrustSection';
import { About } from './components/About';
import { FeaturedVisual } from './components/FeaturedVisual';
import { PrivateSearch } from './components/PrivateSearch';
import { CTA } from './components/CTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PropertyModal } from './components/PropertyModal';
import { EnquiryModal } from './components/EnquiryModal';

export function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryProperty, setEnquiryProperty] = useState(null);
  const [enquiryIntent, setEnquiryIntent] = useState('general');

  const handleOpenProperty = (property) => {
    setSelectedProperty(property);
  };

  const handleCloseProperty = () => {
    setSelectedProperty(null);
  };

  const handleOpenEnquiry = (property = null, intent = 'general') => {
    setEnquiryProperty(property);
    setEnquiryIntent(intent);
    setEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setEnquiryModalOpen(false);
    setEnquiryProperty(null);
    setEnquiryIntent('general');
  };

  return (
    <div className="app-layout">
      {/* Sticky Minimal Navigation */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* Main Showcase Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenEnquiry={handleOpenEnquiry} />

        {/* 2. Featured Residences */}
        <FeaturedProperties onSelectProperty={handleOpenProperty} />

        {/* 3. The Property Collection & Filters */}
        <PropertyCollection onSelectProperty={handleOpenProperty} />

        {/* 4. Trust & Due Diligence Standard */}
        <TrustSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 5. About & Brand Philosophy */}
        <About onOpenEnquiry={handleOpenEnquiry} />

        {/* 6. Featured Full-Width Visual */}
        <FeaturedVisual />

        {/* 7. Private Bespoke Search Mandates */}
        <PrivateSearch onOpenEnquiry={handleOpenEnquiry} />

        {/* 8. Call to Action */}
        <CTA onOpenEnquiry={handleOpenEnquiry} />

        {/* 9. Contact & Private Advisory Desk */}
        <ContactSection />
      </main>

      {/* 10. Editorial Footer */}
      <Footer onOpenEnquiry={handleOpenEnquiry} />

      {/* Modals */}
      {selectedProperty && (
        <PropertyModal 
          property={selectedProperty} 
          onClose={handleCloseProperty} 
          onOpenEnquiry={handleOpenEnquiry}
        />
      )}

      {enquiryModalOpen && (
        <EnquiryModal 
          property={enquiryProperty} 
          initialIntent={enquiryIntent}
          onClose={handleCloseEnquiry} 
        />
      )}
    </div>
  );
}

export default App;
