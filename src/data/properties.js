/**
 * Curated Property Catalog
 * Structure adheres strictly to real estate showcase specifications.
 * All image links use high-resolution architectural photography with clean aspect ratios.
 */

export const PROPERTIES = [
  {
    id: 'prop-001',
    title: 'The Solstice Pavilion',
    location: 'Banana Island, Lagos',
    type: 'Residential',
    status: 'For Sale',
    category: 'residential',
    price: '₦1,850,000,000',
    featured: true,
    tagline: 'Waterfront modernist residence with floating travertine terraces',
    description: 'A masterclass in tropical brutalism and refined coastal living. The Solstice Pavilion merges monolithic fair-faced concrete with warm teak wood and expansive floor-to-ceiling glass, offering uninterrupted panoramic water views and seamless indoor-outdoor courtyards.',
    bedrooms: '5 En-suite Bedrooms',
    bathrooms: '6 Bathrooms',
    size: '1,120 sqm',
    parking: '6 Underground bays',
    yearBuilt: '2024',
    highlights: [
      'Cantilevered heated infinity pool overlooking the lagoon',
      'Private 40-foot deepwater yacht jetty',
      'Double-height formal gallery atrium with skylights',
      'Custom Boffi kitchen with integrated Gaggenau appliances',
      'Smart home climate, shading, and biometric security integration'
    ],
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85'
    ]
  },
  {
    id: 'prop-002',
    title: 'The Skybridge Duplex Penthouse',
    location: 'Victoria Island, Lagos',
    type: 'Residential',
    status: 'For Sale',
    category: 'residential',
    price: '₦1,200,000,000',
    featured: true,
    tagline: 'Crown penthouse commanding 360-degree Atlantic & skyline horizons',
    description: 'Perched on the top two tiers of an iconic residential tower, this duplex penthouse features double-volume ceilings, private rooftop plunge pool, wrap-around sunset terraces, and bespoke architectural woodwork tailored for the discerning collector.',
    bedrooms: '4 Master Suites',
    bathrooms: '5 Bathrooms',
    size: '820 sqm',
    parking: '4 Dedicated spaces',
    yearBuilt: '2023',
    highlights: [
      'Private high-speed elevator with keyless biometric entry',
      '7.2-meter double-height glass living salon',
      'Rooftop cedar sundeck with private plunge pool and wet bar',
      'Temperature-controlled 300-bottle wine cellar',
      '24/7 dedicated concierge and private staff quarters'
    ],
    coverImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=85'
    ]
  },
  {
    id: 'prop-003',
    title: 'Villa Monochrome',
    location: 'Ikoyi, Lagos',
    type: 'Residential',
    status: 'For Sale',
    category: 'residential',
    price: '₦950,000,000',
    featured: true,
    tagline: 'Minimalist sanctuary framed by private botanical gardens',
    description: 'Designed around central reflecting pools and ancient palms, Villa Monochrome pairs stark geometric purity with organic stone textures. Every room opens directly onto serene outdoor courtyards, creating a tranquil oasis within the city.',
    bedrooms: '4 Bedrooms',
    bathrooms: '4.5 Bathrooms',
    size: '690 sqm',
    parking: '5 Vehicles',
    yearBuilt: '2024',
    highlights: [
      'Japanese-inspired internal zen courtyard with reflecting pond',
      'Full-perimeter floor-to-ceiling Schuco thermal glazing',
      'Custom minimalist Italian marble bathrooms',
      'Solar energy micro-grid with zero-noise battery backup',
      'Dedicated wellness wing with sauna and cold plunge'
    ],
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85'
    ]
  },
  {
    id: 'prop-004',
    title: 'The Luminary Commercial Atelier',
    location: 'Victoria Island, Lagos',
    type: 'Commercial',
    status: 'For Lease',
    category: 'commercial',
    price: '₦85,000,000 / year',
    featured: false,
    tagline: 'Flagship architectural office headquarters with executive terrace',
    description: 'An exceptional commercial asset engineered for private equity firms, luxury headquarters, or design institutions. Features open-span flexible layouts, acoustic timber ceilings, private executive boardroom, and rooftop garden.',
    bedrooms: null,
    bathrooms: '8 Executive Restrooms',
    size: '1,450 sqm',
    parking: '20 Underground secure bays',
    yearBuilt: '2023',
    highlights: [
      'LEED-certified green building facade with passive shading',
      'High-speed fiber connectivity with dual redundant power grids',
      'Private rooftop entertainment pavilion and boardroom suite',
      'Dedicated ground-floor VIP reception lobby and security gatehouse'
    ],
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=85'
    ]
  },
  {
    id: 'prop-005',
    title: 'The Horizon Beachfront Villa',
    location: 'Lekki Coastal Corridor, Lagos',
    type: 'Residential',
    status: 'For Sale',
    category: 'residential',
    price: '₦780,000,000',
    featured: false,
    tagline: 'Private coastal estate surrounded by landscaped dune gardens',
    description: 'A secluded private retreat positioned right at the ocean’s edge. Designed with natural limestone, aged zinc accents, and sprawling teak verandas that capture continuous ocean breezes.',
    bedrooms: '5 Bedrooms',
    bathrooms: '5 Bathrooms',
    size: '950 sqm',
    parking: '4 Vehicles',
    yearBuilt: '2024',
    highlights: [
      'Direct private access to white sand beachfront',
      '25-meter linear lap pool with recessed fire pit lounge',
      'Chef-grade open entertaining kitchen and separate prep pantry',
      'Master wing with open-air rainwater shower and ocean veranda'
    ],
    coverImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85'
    ]
  },
  {
    id: 'prop-006',
    title: 'The Glass Pavilion Penthouse',
    location: 'Old Ikoyi, Lagos',
    type: 'Residential',
    status: 'For Rent',
    category: 'residential',
    price: '₦55,000,000 / year',
    featured: false,
    tagline: 'High-floor garden terrace residence enveloped by historic tree canopy',
    description: 'An impeccably styled rental residence for discerning international executives. Flooded with natural morning light through continuous floor-to-ceiling glass, featuring custom walnut millwork and private elevator lobby.',
    bedrooms: '3 En-suite Suites',
    bathrooms: '3.5 Bathrooms',
    size: '480 sqm',
    parking: '3 Secured spaces',
    yearBuilt: '2023',
    highlights: [
      'Fully furnished with curated modernist European design pieces',
      'Private 120-sqm terrace with lush perimeter landscaping',
      'Bang & Olufsen multi-room acoustic audio integration',
      'Full service 24/7 security, backup power, and dedicated facility manager'
    ],
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    images: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85'
    ]
  }
];

export const PROPERTY_CATEGORIES = [
  { id: 'all', label: 'All Properties' },
  { id: 'for-sale', label: 'For Sale' },
  { id: 'for-rent', label: 'For Rent / Lease' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
];
