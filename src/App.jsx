import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProperties } from './components/FeaturedProperties';
import { PropertyCollection } from './components/PropertyCollection';
import { About } from './components/About';
import { FeaturedVisual } from './components/FeaturedVisual';
import { CTA } from './components/CTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PropertyModal } from './components/PropertyModal';
import { EnquiryModal } from './components/EnquiryModal';

export function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryProperty, setEnquiryProperty] = useState(null);

  const handleOpenProperty = (property) => {
    setSelectedProperty(property);
  };

  const handleCloseProperty = () => {
    setSelectedProperty(null);
  };

  const handleOpenEnquiry = (property = null) => {
    setEnquiryProperty(property);
    setEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setEnquiryModalOpen(false);
    setEnquiryProperty(null);
  };

  return (
    <div className="app-layout">
      {/* Sticky Minimal Navigation */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* Main Showcase Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenEnquiry={handleOpenEnquiry} />

        {/* 2. Featured Properties */}
        <FeaturedProperties onSelectProperty={handleOpenProperty} />

        {/* 3. The Property Collection & Filters */}
        <PropertyCollection onSelectProperty={handleOpenProperty} />

        {/* 4. About & Brand Philosophy */}
        <About onOpenEnquiry={handleOpenEnquiry} />

        {/* 5. Featured Full-Width Visual */}
        <FeaturedVisual />

        {/* 6. Call to Action */}
        <CTA onOpenEnquiry={handleOpenEnquiry} />

        {/* 7. Contact & Private Advisory */}
        <ContactSection />
      </main>

      {/* 8. Editorial Footer */}
      <Footer onOpenEnquiry={handleOpenEnquiry} />

      {/* Modals */}
      {selectedProperty && (
        <PropertyModal 
          property={selectedProperty} 
          onClose={handleCloseProperty} 
        />
      )}

      {enquiryModalOpen && (
        <EnquiryModal 
          property={enquiryProperty} 
          onClose={handleCloseEnquiry} 
        />
      )}
    </div>
  );
}

export default App;
