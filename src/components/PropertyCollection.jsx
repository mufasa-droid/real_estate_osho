import React, { useState } from 'react';
import { PropertyCard } from './PropertyCard';
import { PROPERTIES, PROPERTY_CATEGORIES, NEIGHBORHOOD_FILTERS } from '../data/properties';
import { SlidersHorizontal } from 'lucide-react';

export const PropertyCollection = ({ onSelectProperty }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeNeighborhood, setActiveNeighborhood] = useState('all');

  const filteredProperties = PROPERTIES.filter((property) => {
    // Category filter
    let matchesCategory = true;
    if (activeCategory === 'for-sale') matchesCategory = property.status.toLowerCase().includes('sale');
    else if (activeCategory === 'for-rent') matchesCategory = property.status.toLowerCase().includes('rent') || property.status.toLowerCase().includes('lease');
    else if (activeCategory === 'residential') matchesCategory = property.type.toLowerCase() === 'residential';
    else if (activeCategory === 'commercial') matchesCategory = property.type.toLowerCase() === 'commercial';

    // Location filter
    let matchesLocation = true;
    if (activeNeighborhood !== 'all') {
      matchesLocation = property.neighborhood === activeNeighborhood || property.location.toLowerCase().includes(activeNeighborhood.toLowerCase());
    }

    return matchesCategory && matchesLocation;
  });

  return (
    <section id="collection" className="section-spacing">
      <div className="site-container">
        {/* Section Header */}
        <div style={{ maxWidth: '680px', marginBottom: '2.5rem' }}>
          <span className="eyebrow">Available Portfolio</span>
          <h2 className="editorial-heading" style={{ marginTop: '0.75rem' }}>
            The Collection
          </h2>
          <p className="body-lead" style={{ marginTop: '0.85rem' }}>
            Prime residences, duplex penthouses, and bespoke commercial spaces available for acquisition or lease in Lagos.
          </p>
        </div>

        {/* Filters Wrapper */}
        <div className="collection-filters-container">
          {/* Primary Status & Type Tabs */}
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

          {/* Secondary Subtle Location Filter */}
          <div className="location-filter-pills" role="tablist" aria-label="Location Filter">
            <span className="location-filter-label">
              <SlidersHorizontal size={12} color="var(--accent)" />
              Location:
            </span>
            {NEIGHBORHOOD_FILTERS.map((loc) => (
              <button
                key={loc.id}
                role="tab"
                aria-selected={activeNeighborhood === loc.id}
                className={`location-filter-btn ${activeNeighborhood === loc.id ? 'active' : ''}`}
                onClick={() => setActiveNeighborhood(loc.id)}
              >
                {loc.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter & Active Criteria */}
        <div className="collection-meta-bar">
          <span className="results-count">
            Showing {filteredProperties.length} {filteredProperties.length === 1 ? 'Residence' : 'Residences'}
          </span>
          {(activeCategory !== 'all' || activeNeighborhood !== 'all') && (
            <button
              onClick={() => { setActiveCategory('all'); setActiveNeighborhood('all'); }}
              className="reset-filter-btn"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Collection Grid */}
        {filteredProperties.length > 0 ? (
          <div className="property-collection-grid">
            {filteredProperties.map((property) => (
              <PropertyCard 
                key={property.id} 
                property={property} 
                onSelectProperty={onSelectProperty} 
              />
            ))}
          </div>
        ) : (
          <div className="no-results-box">
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              No residences found in this selection
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              We regularly represent off-market properties that match specific client criteria.
            </p>
            <button
              onClick={() => { setActiveCategory('all'); setActiveNeighborhood('all'); }}
              className="btn btn-secondary"
            >
              View All Properties
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
