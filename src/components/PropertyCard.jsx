import React from 'react';
import { ArrowUpRight, Bed, Bath, Maximize2 } from 'lucide-react';

export const PropertyCard = ({ property, onSelectProperty }) => {
  return (
    <article 
      className="property-card"
      onClick={() => onSelectProperty(property)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelectProperty(property);
        }
      }}
      aria-label={`View details for ${property.title}`}
    >
      {/* Visual Canvas */}
      <div className="property-card-image">
        <img 
          src={property.coverImage} 
          alt={property.title}
          loading="lazy" 
        />
        <div className="property-card-badge">
          {property.status}
        </div>
      </div>

      {/* Editorial Content */}
      <div className="property-card-info">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="property-card-type">{property.type}</span>
          {property.size && (
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              {property.size}
            </span>
          )}
        </div>

        <h3 className="property-card-title">{property.title}</h3>
        <p className="property-card-location">{property.location}</p>

        {/* Minimal Specs bar */}
        <div style={{ display: 'flex', gap: '1.25rem', marginTop: '0.25rem', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
          {property.bedrooms && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Bed size={14} color="var(--accent)" />
              <span>{property.bedrooms.replace(' En-suite Bedrooms', ' Beds').replace(' Master Suites', ' Suites')}</span>
            </div>
          )}
          {property.bathrooms && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Bath size={14} color="var(--accent)" />
              <span>{property.bathrooms.replace(' Bathrooms', ' Baths')}</span>
            </div>
          )}
        </div>

        {/* Bottom bar */}
        <div className="property-card-bottom">
          <div>
            <span style={{ display: 'block', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)' }}>
              Guide Price
            </span>
            <span className="property-card-price">{property.price}</span>
          </div>

          <span className="link-editorial" style={{ fontSize: '0.72rem' }}>
            <span>View Property</span>
            <ArrowUpRight size={13} />
          </span>
        </div>
      </div>
    </article>
  );
};
