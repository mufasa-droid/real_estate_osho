import React, { useState } from 'react';
import { PropertyCard } from './PropertyCard';
import { PROPERTIES, PROPERTY_CATEGORIES } from '../data/properties';

export const PropertyCollection = ({ onSelectProperty }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProperties = PROPERTIES.filter((property) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'for-sale') return property.status.toLowerCase().includes('sale');
    if (activeCategory === 'for-rent') return property.status.toLowerCase().includes('rent') || property.status.toLowerCase().includes('lease');
    if (activeCategory === 'residential') return property.type.toLowerCase() === 'residential';
    if (activeCategory === 'commercial') return property.type.toLowerCase() === 'commercial';
    return true;
  });

  return (
    <section id="collection" className="section-spacing">
      <div className="site-container">
        {/* Section Header */}
        <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
          <span className="eyebrow">Property Showcase</span>
          <h2 className="editorial-heading" style={{ marginTop: '0.75rem' }}>
            The Collection
          </h2>
          <p className="body-lead" style={{ marginTop: '1rem' }}>
            Explore our curated inventory of prime architectural estates, duplex penthouses, and bespoke commercial pavilions.
          </p>
        </div>

        {/* Minimal Category Filter Tabs */}
        <div className="filter-tabs" role="tablist" aria-label="Property Categories">
          {PROPERTY_CATEGORIES.map((category) => (
            <button
              key={category.id}
              role="tab"
              aria-selected={activeCategory === category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Results Counter */}
        <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            Showing {filteredProperties.length} {filteredProperties.length === 1 ? 'Property' : 'Properties'}
          </span>
        </div>

        {/* Collection Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '3.5rem 2.5rem' }}>
          {filteredProperties.map((property) => (
            <PropertyCard 
              key={property.id} 
              property={property} 
              onSelectProperty={onSelectProperty} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
