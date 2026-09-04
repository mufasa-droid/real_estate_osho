import React from 'react';
import { ArrowUpRight, Bed, Bath, Maximize2, MapPin } from 'lucide-react';

export const PropertyCard = ({ property, onSelectProperty }) => {
  // Extract number of beds/baths cleanly for concise badge
  const getShortBed = (bedrooms) => {
    if (!bedrooms) return null;
    const match = bedrooms.match(/\d+/);
    return match ? `${match[0]} Beds` : bedrooms;
  };

  const getShortBath = (bathrooms) => {
    if (!bathrooms) return null;
    const match = bathrooms.match(/[\d.]+/);
    return match ? `${match[0]} Baths` : bathrooms;
  };

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
      aria-label={`View details for ${property.title}, located in ${property.location}, priced at ${property.price}`}
    >
      {/* Visual Canvas */}
      <div className="property-card-image">
        <img 
          src={property.coverImage} 
          alt={`${property.title} in ${property.location}`}
          loading="lazy" 
        />
        <div className="property-card-badge">
          {property.status}
        </div>
        <div className="property-card-type-tag">
          {property.type}
        </div>
      </div>

      {/* Editorial Content & Commercial Information */}
      <div className="property-card-info">
        <div className="property-card-header">
          <h3 className="property-card-title">{property.title}</h3>
          <p className="property-card-location">
            <MapPin size={13} color="var(--accent)" style={{ flexShrink: 0 }} />
            <span>{property.location}</span>
          </p>
        </div>

        {/* Commercial Specifications Row */}
        <div className="property-card-specs">
          {property.bedrooms && (
            <div className="card-spec-item">
              <Bed size={13} color="var(--accent)" />
              <span>{getShortBed(property.bedrooms)}</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="card-spec-item">
              <Bath size={13} color="var(--accent)" />
              <span>{getShortBath(property.bathrooms)}</span>
            </div>
          )}
          {property.size && (
            <div className="card-spec-item">
              <Maximize2 size={13} color="var(--accent)" />
              <span>{property.size}</span>
            </div>
          )}
        </div>

        {/* Pricing and Action Bottom Bar */}
        <div className="property-card-bottom">
          <div className="price-container">
            <span className="price-label">
              Guide Price
            </span>
            <span className="property-card-price">{property.price}</span>
          </div>

          <span className="link-editorial card-action-link">
            <span>View Details</span>
            <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </article>
  );
};
