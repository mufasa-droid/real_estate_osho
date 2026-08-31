import React from 'react';
import { PropertyCard } from './PropertyCard';
import { PROPERTIES } from '../data/properties';
import { ArrowRight } from 'lucide-react';

export const FeaturedProperties = ({ onSelectProperty }) => {
  const featured = PROPERTIES.filter((p) => p.featured);

  return (
    <section id="featured" className="section-spacing" style={{ borderBottom: '1px solid var(--border-light)' }}>
      <div className="site-container">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <span className="eyebrow">Curated Selection</span>
            <h2 className="editorial-heading" style={{ marginTop: '0.75rem' }}>
              Featured Residences
            </h2>
          </div>
          <a href="#collection" className="link-editorial">
            <span>View Full Portfolio</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem 2.5rem' }}>
          {featured.map((property) => (
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
