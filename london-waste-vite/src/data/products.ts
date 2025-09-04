export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  details: string[];
  maxWeight?: string;
  loadTime?: string;
  equivalent?: string;
  fullDescription?: string;
  features?: string[];
  specifications?: {
    dimensions?: string;
    weight?: string;
    material?: string;
    brand?: string;
  };
  gallery?: string[];
}

export const sofaChairProducts: Product[] = [
  {
    id: 'two-seater-sofa',
    name: '2 Seater Sofa Removal',
    category: 'Sofa & Chair Removal',
    price: '£45.00',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Professional 2 seater sofa removal service with eco-friendly disposal',
    fullDescription: 'Our 2 seater sofa removal service provides a hassle-free solution for disposing of your old furniture. We handle everything from careful removal from any floor of your property to environmentally responsible disposal or donation when possible.',
    details: [
      'Safe removal from any floor',
      'Eco-friendly disposal',
      'No hidden charges',
      'Same day service available',
      'Professional team',
      'Fully insured service'
    ],
    features: [
      'Door-to-door collection',
      'Careful handling to prevent property damage',
      'Donation to charity when furniture is in good condition',
      'Recycling of materials where possible',
      '2-hour time slot booking',
      'SMS and email confirmations'
    ],
    specifications: {
      dimensions: 'Up to 160cm length',
      weight: 'Up to 50kg',
      material: 'All upholstery types accepted'
    },
    gallery: [
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=400'
    ]
  },
  {
    id: 'three-seater-sofa',
    name: '3 Seater Sofa Removal',
    category: 'Sofa & Chair Removal',
    price: '£55.00',
    image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Professional 3 seater sofa removal service with comprehensive disposal',
    fullDescription: 'Our 3 seater sofa removal service is perfect for larger sofas and sectionals. Our experienced team will safely remove your furniture from any location in your home and ensure it is disposed of responsibly, including donation when the item is in suitable condition.',
    details: [
      'Safe removal from any floor',
      'Eco-friendly disposal',
      'No hidden charges',
      'Same day service available',
      'Professional team',
      'Fully insured service'
    ],
    features: [
      'Suitable for sectional sofas',
      'Dismantling service when required',
      'Protection of walls and doorframes',
      'Charity donation when appropriate',
      'Material separation for recycling',
      'Flexible booking times'
    ],
    specifications: {
      dimensions: 'Up to 220cm length',
      weight: 'Up to 80kg',
      material: 'All upholstery types including leather'
    },
    gallery: [
      'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=400'
    ]
  },
  {
    id: 'armchair',
    name: 'Armchair Removal',
    category: 'Sofa & Chair Removal',
    price: '£35.00',
    image: 'https://images.pexels.com/photos/586769/pexels-photo-586769.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Single armchair removal service with professional handling',
    fullDescription: 'Perfect for single armchairs, recliners, and accent chairs. Our armchair removal service includes careful extraction from your property and responsible disposal. We take extra care with antique and valuable pieces, offering donation services for chairs in good condition.',
    details: [
      'Quick and efficient removal',
      'Suitable for all types of chairs',
      'Recycling when possible',
      'Professional service',
      'Same day availability',
      'No call-out charges'
    ],
    features: [
      'Includes recliner chairs',
      'Antique chair handling expertise',
      'Upholstery material recycling',
      'Frame wood reclamation',
      'Office chair collection',
      'Bulk collection discounts available'
    ],
    specifications: {
      dimensions: 'Standard armchair size',
      weight: 'Up to 35kg',
      material: 'All chair types and materials'
    },
    gallery: [
      'https://images.pexels.com/photos/586769/pexels-photo-586769.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=400'
    ]
  },
  {
    id: 'corner-sofa',
    name: 'Corner Sofa Removal',
    category: 'Sofa & Chair Removal',
    price: '£95.00',
    image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Corner sofa removal service for larger furniture',
    fullDescription: 'Our corner sofa removal service handles large sectional sofas with up to 5 seats. Perfect for L-shaped and corner sofas, our team will safely dismantle and remove your furniture with professional care.',
    details: [
      'Up to 5 seats',
      'Heavy lifting included', 
      'Dismantling if required',
      'Professional handling',
      'Same day service available',
      'Fully insured service'
    ],
    features: [
      'Suitable for L-shaped sofas',
      'Professional dismantling service',
      'Heavy-duty removal equipment',
      'Multiple crew members for safety',
      'Donation when furniture is suitable',
      'Flexible scheduling'
    ],
    specifications: {
      dimensions: 'Up to 5 seats maximum',
      weight: 'Up to 150kg',
      material: 'All upholstery and frame types'
    },
    gallery: [
      'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=400'
    ]
  }
];

// Appliance Products
export const applianceProducts: Product[] = [
  {
    id: 'american-double-fridge',
    name: 'American (Double) Fridge',
    category: 'Appliance Removal',
    price: '£120.00',
    image: '/api/placeholder/300/200',
    description: 'Large American-style double door refrigerator removal',
    fullDescription: 'Professional removal of large American-style double door refrigerators. Our team handles the heavy lifting and ensures WEEE compliant disposal.',
    details: [
      'Your appliance must be disconnected and drained completely before collection',
      'The motor must be attached',
      'WEEE compliant disposal',
      'Environmental certification',
      'Heavy lifting equipment used',
      'Professional handling'
    ],
    features: [
      'Suitable for large American-style fridges',
      'WEEE regulation compliance',
      'Environmental certification provided',
      'Professional disconnection advice',
      'Heavy lifting equipment',
      'Same day service available'
    ],
    specifications: {
      weight: 'Up to 200kg',
      material: 'All refrigeration units'
    },
    gallery: ['/api/placeholder/300/200']
  },
  {
    id: 'washing-machine',
    name: 'Washing Machine',
    category: 'Appliance Removal',
    price: '£40.00',
    image: '/api/placeholder/300/200',
    description: 'Washing machine removal service',
    fullDescription: 'Professional washing machine removal service including safe disconnection advice and eco-friendly disposal.',
    details: [
      'All washing machine types',
      'Front and top loading',
      'WEEE compliant disposal',
      'Professional handling',
      'Same day service',
      'No hidden charges'
    ],
    features: [
      'All washing machine brands',
      'Safe disconnection included',
      'Heavy lifting service',
      'Eco-friendly disposal',
      'Professional team',
      'Insurance included'
    ],
    specifications: {
      weight: 'Up to 85kg',
      material: 'All washing machine types'
    },
    gallery: ['/api/placeholder/300/200']
  },
  {
    id: 'dishwasher',
    name: 'Dishwasher',
    category: 'Appliance Removal',
    price: '£35.00',
    image: '/api/placeholder/300/200',
    description: 'Dishwasher removal and disposal service',
    fullDescription: 'Complete dishwasher removal service including water disconnection and professional disposal.',
    details: [
      'Built-in and freestanding',
      'WEEE compliant disposal',
      'Water disconnection included',
      'Professional service',
      'Same day available',
      'Eco-friendly disposal'
    ],
    features: [
      'All dishwasher types',
      'Professional disconnection',
      'Safe removal process',
      'Recycling included',
      'No additional charges',
      'Fully insured service'
    ],
    specifications: {
      weight: 'Up to 60kg',
      material: 'All dishwasher brands'
    },
    gallery: ['/api/placeholder/300/200']
  }
];

// Fridge Products
export const fridgeProducts: Product[] = [
  {
    id: 'fridge-freezer',
    name: 'Fridge/Freezer',
    category: 'Fridge Removal',
    price: '£45.00',
    image: '/api/placeholder/300/200',
    description: 'WEEE compliant fridge and freezer removal',
    fullDescription: 'Professional fridge and freezer removal service with WEEE compliant disposal and environmental certification.',
    details: [
      'WEEE compliant disposal',
      'Refrigerant safely removed',
      'Free collection',
      'Environmental certification provided',
      'Professional handling',
      'Same day service'
    ],
    features: [
      'All fridge and freezer sizes',
      'WEEE regulation compliance',
      'Safe refrigerant removal',
      'Environmental certification',
      'Professional disconnection advice',
      'Heavy lifting included'
    ],
    specifications: {
      weight: 'Up to 120kg',
      material: 'All refrigeration brands'
    },
    gallery: ['/api/placeholder/300/200']
  },
  {
    id: 'standard-fridge-freezer',
    name: 'Standard Fridge Freezer',
    category: 'Fridge Removal',
    price: '£65.00',
    image: '/api/placeholder/300/200',
    description: 'Standard household fridge freezer removal service',
    fullDescription: 'Professional standard fridge freezer removal with WEEE compliant disposal and environmental certification.',
    details: [
      'The motor must be attached',
      'Your appliance must be disconnected and drained completely before collection',
      'WEEE compliant disposal',
      'Environmental certification provided',
      'Professional handling',
      'Same day service'
    ],
    features: [
      'All standard fridge freezer sizes',
      'WEEE regulation compliance',
      'Safe refrigerant removal',
      'Environmental certification',
      'Professional disconnection advice',
      'Heavy lifting included'
    ],
    specifications: {
      weight: 'Up to 120kg',
      material: 'All refrigeration brands'
    },
    gallery: ['/api/placeholder/300/200']
  },
  {
    id: 'mini-fridge',
    name: 'Mini Fridge',
    category: 'Fridge Removal',
    price: '£45.00',
    image: '/api/placeholder/300/200',
    description: 'Small mini fridge removal service',
    fullDescription: 'Quick and efficient mini fridge removal service with proper disposal and recycling.',
    details: [
      'The motor must be attached',
      'The fridge must be disconnected prior to collection',
      'WEEE compliant disposal',
      'Same day service',
      'Professional handling',
      'Eco-friendly disposal'
    ],
    features: [
      'All mini fridge brands',
      'Quick collection service',
      'Professional handling',
      'Recycling included',
      'No call-out charges',
      'Flexible scheduling'
    ],
    specifications: {
      weight: 'Up to 40kg',
      material: 'All mini fridge types'
    },
    gallery: ['/api/placeholder/300/200']
  }
];

// Electronic Products
export const electronicProducts: Product[] = [
  {
    id: 'tv-removal',
    name: 'TV Removal',
    category: 'Electronic Removal',
    price: '£25.00',
    image: '/api/placeholder/300/200',
    description: 'Television and monitor removal service',
    fullDescription: 'Professional television and monitor removal service with WEEE compliant disposal and data destruction for smart TVs.',
    details: [
      'All sizes accepted',
      'WEEE compliant disposal',
      'Data destruction for smart TVs',
      'Environmental certificate',
      'Professional handling',
      'Same day service'
    ],
    features: [
      'All TV sizes and brands',
      'Smart TV data destruction',
      'Monitor removal included',
      'WEEE regulation compliance',
      'Certificate of disposal',
      'Environmentally responsible'
    ],
    specifications: {
      weight: 'Up to 50kg',
      material: 'All TV and monitor brands'
    },
    gallery: ['/api/placeholder/300/200']
  },
  {
    id: 'computer-removal',
    name: 'Computer Equipment',
    category: 'Electronic Removal',
    price: '£30.00',
    image: '/api/placeholder/300/200',
    description: 'Computer and IT equipment removal',
    fullDescription: 'Professional computer and IT equipment removal with secure data destruction and WEEE compliance.',
    details: [
      'Secure data destruction',
      'All types of computers',
      'WEEE compliance',
      'Certificate of disposal',
      'Professional handling',
      'Same day service'
    ],
    features: [
      'Desktop and laptop computers',
      'Secure data destruction',
      'IT equipment included',
      'WEEE regulation compliance',
      'Certificate provided',
      'Environmentally responsible'
    ],
    specifications: {
      weight: 'Up to 30kg',
      material: 'All computer equipment'
    },
    gallery: ['/api/placeholder/300/200']
  },
  {
    id: 'electronic-13',
    name: 'Laptop',
    category: 'Electronic Removal',
    price: '£10.00',
    image: '/api/placeholder/300/200',
    description: 'Laptop removal service',
    fullDescription: 'Professional laptop removal with secure data destruction and WEEE compliant disposal.',
    details: [
      'All laptop brands and sizes',
      'Secure data destruction',
      'WEEE compliant disposal',
      'Environmental certification',
      'Same day collection',
      'Professional handling'
    ],
    features: [
      'Data destruction included',
      'All laptop types accepted',
      'WEEE regulation compliance',
      'Certificate of disposal',
      'Environmentally responsible',
      'Quick collection service'
    ],
    specifications: {
      weight: 'Up to 5kg',
      material: 'All laptop brands'
    },
    gallery: ['/api/placeholder/300/200']
  },
  {
    id: 'electronic-23',
    name: 'Television – Small',
    category: 'Electronic Removal',
    price: '£25.00',
    image: '/api/placeholder/300/200',
    description: 'Television removal service for TVs up to 32 inches',
    fullDescription: 'Professional TV removal service with WEEE compliant disposal for televisions up to 32 inches.',
    details: [
      'Up to 32 inches',
      'All TV brands accepted',
      'WEEE compliant disposal',
      'Data destruction for smart TVs',
      'Environmental certificate',
      'Professional handling'
    ],
    features: [
      'All small TV sizes',
      'Smart TV data destruction',
      'Professional collection',
      'WEEE regulation compliance',
      'Certificate provided',
      'Same day service'
    ],
    specifications: {
      dimensions: 'Up to 32 inches',
      weight: 'Up to 25kg',
      material: 'All TV brands'
    },
    gallery: ['/api/placeholder/300/200']
  }
];

// Mattress & Bed Products
export const bedProducts: Product[] = [
  {
    id: 'single-mattress',
    name: 'Single Mattress',
    category: 'Mattress & Bed Removal',
    price: '£35.00',
    image: '/api/placeholder/300/200',
    description: 'Single mattress removal and disposal',
    fullDescription: 'Professional single mattress removal with hygienic handling and recycling when possible.',
    details: [
      'Hygienic removal',
      'Recycling when possible',
      'All types of mattresses',
      'Same day service',
      'Professional handling',
      'Eco-friendly disposal'
    ],
    features: [
      'All mattress brands',
      'Hygienic collection',
      'Material recycling',
      'Professional service',
      'Same day availability',
      'Fully insured'
    ],
    specifications: {
      dimensions: 'Single bed size',
      weight: 'Up to 25kg',
      material: 'All mattress types'
    },
    gallery: ['/api/placeholder/300/200']
  },
  {
    id: 'double-bed-frame',
    name: 'Double Bed Frame',
    category: 'Mattress & Bed Removal',
    price: '£25.00',
    image: '/api/placeholder/300/200',
    description: 'Double bed frame removal service',
    fullDescription: 'Complete double bed frame removal with dismantling service and material recycling.',
    details: [
      'All frame types and materials',
      'Dismantling included',
      'Metal and wood recycling',
      'Complete removal service',
      'Professional handling',
      'Same day service'
    ],
    features: [
      'All bed frame materials',
      'Professional dismantling',
      'Material separation',
      'Recycling included',
      'Heavy lifting service',
      'No additional charges'
    ],
    specifications: {
      dimensions: 'Double bed size',
      weight: 'Up to 80kg',
      material: 'All frame materials'
    },
    gallery: ['/api/placeholder/300/200']
  }
];

// Table Products  
export const tableProducts: Product[] = [
  {
    id: 'dining-table',
    name: 'Dining Table',
    category: 'Table Removal',
    price: '£35.00',
    image: '/api/placeholder/300/200',
    description: 'Dining table removal service',
    fullDescription: 'Professional dining table removal service for tables up to 30kg with dismantling if required.',
    details: [
      'All sizes up to 30kg',
      'Extension tables included',
      'Dismantling if required',
      'Professional service',
      'Same day availability',
      'Material recycling'
    ],
    features: [
      'All table materials',
      'Extension table handling',
      'Professional dismantling',
      'Wood recycling',
      'Heavy lifting included',
      'Donation when suitable'
    ],
    specifications: {
      weight: 'Up to 30kg',
      material: 'All table materials'
    },
    gallery: ['/api/placeholder/300/200']
  },
  {
    id: 'coffee-table',
    name: 'Coffee Table',
    category: 'Table Removal',
    price: '£20.00',
    image: '/api/placeholder/300/200',
    description: 'Coffee table and side table removal',
    fullDescription: 'Professional coffee table removal service including glass top tables and storage compartments.',
    details: [
      'All styles and materials',
      'Glass top tables included',
      'Storage compartments cleared',
      'Professional handling',
      'Same day service',
      'Recycling included'
    ],
    features: [
      'All coffee table styles',
      'Glass handling expertise',
      'Storage clearing included',
      'Professional service',
      'Material recycling',
      'Quick collection'
    ],
    specifications: {
      weight: 'Up to 50kg',
      material: 'All materials including glass'
    },
    gallery: ['/api/placeholder/300/200']
  }
];

// Garden Waste Products
export const gardenProducts: Product[] = [
  {
    id: 'garden-waste',
    name: 'Garden Waste',
    category: 'Garden Waste Removal',
    price: '£80.00',
    image: '/api/placeholder/300/200',
    description: 'Garden waste and green waste removal',
    fullDescription: 'Comprehensive garden waste removal service including tree branches, grass cuttings, and garden furniture.',
    details: [
      'Tree branches and logs',
      'Grass cuttings',
      'Garden furniture',
      'Composting when possible',
      'Bulk collection available',
      'Professional service'
    ],
    features: [
      'All garden waste types',
      'Large branch handling',
      'Bulk collection service',
      'Composting facility',
      'Eco-friendly disposal',
      'Same day service'
    ],
    specifications: {
      weight: 'Up to 500kg per load',
      material: 'All organic garden waste'
    },
    gallery: ['/api/placeholder/300/200']
  }
];

// Battery Products
export const batteryProducts: Product[] = [
  {
    id: 'car-batteries',
    name: 'Car Batteries',
    category: 'Old Batteries Disposal',
    price: '£15.00',
    image: '/api/placeholder/300/200',
    description: 'Safe car battery disposal',
    fullDescription: 'Professional car battery disposal service with environmental certification and safe handling.',
    details: [
      'Environmentally safe disposal',
      'All battery types',
      'Bulk collection available',
      'Certification provided',
      'Professional handling',
      'Same day service'
    ],
    features: [
      'All car battery types',
      'Environmental certification',
      'Hazardous material handling',
      'Bulk discounts available',
      'Professional disposal',
      'Recycling included'
    ],
    specifications: {
      weight: 'Up to 30kg each',
      material: 'Lead acid batteries'
    },
    gallery: ['/api/placeholder/300/200']
  }
];

export const getAllProducts = (): Product[] => {
  return [
    ...sofaChairProducts,
    ...applianceProducts,
    ...fridgeProducts,
    ...electronicProducts,
    ...bedProducts,
    ...tableProducts,
    ...gardenProducts,
    ...batteryProducts
  ];
};

export const getProductById = (id: string): Product | undefined => {
  return getAllProducts().find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return getAllProducts().filter(product => product.category === category);
};