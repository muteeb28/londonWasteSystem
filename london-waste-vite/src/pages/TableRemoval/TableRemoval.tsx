import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

interface TableService {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  details: string[];
  specialNote?: string;
  warningNote?: string;
}

const TableRemoval: React.FC = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState<string>('default');

  const tableServices: TableService[] = [
    {
      id: 'bedside-table',
      name: 'Bedside Table',
      price: '£10.00',
      image: '/api/placeholder/300/200',
      description: 'Bedside table and nightstand removal service',
      details: [
        'All sizes and materials',
        'Drawers and contents included',
        'Heavy lifting included',
        'Same day service available'
      ]
    },
    {
      id: 'coffee-table',
      name: 'Coffee Table',
      price: '£20.00',
      image: '/api/placeholder/300/200',
      description: 'Coffee table and side table removal',
      details: [
        'All styles and materials',
        'Glass top tables included',
        'Storage compartments cleared',
        'Professional handling'
      ]
    },
    {
      id: 'dining-chair',
      name: 'Dining Chair',
      price: '£7.50',
      image: '/api/placeholder/300/200',
      description: 'Single dining chair removal service',
      details: [
        'All chair types and styles',
        'Upholstered and wooden chairs',
        'Bulk discounts available',
        'Quick collection'
      ]
    },
    {
      id: 'dining-table',
      name: 'Dining Table',
      price: '£35.00',
      image: '/api/placeholder/300/200',
      description: 'Dining table removal service',
      details: [
        'All sizes up to 30kg',
        'Extension tables included',
        'Dismantling if required',
        'Professional service'
      ],
      warningNote: 'If your table weighs OVER 30kg please contact us for a custom quote'
    },
    {
      id: 'dressing-table',
      name: 'Dressing Table',
      price: '£45.00',
      image: '/api/placeholder/300/200',
      description: 'Dressing table and vanity removal',
      details: [
        'Mirrors included',
        'Drawers and storage',
        'All vanity accessories',
        'Careful handling of glass'
      ]
    },
    {
      id: 'filing-cabinet-small',
      name: 'Filing Cabinet Small',
      price: '£50.00',
      image: '/api/placeholder/300/200',
      description: 'Up to waist height - Office furniture - Metal cabinet',
      details: [
        'Up to waist height',
        'Office furniture',
        'Metal cabinet',
        'Contents removal included'
      ],
      specialNote: 'Up to waist height - Metal cabinet'
    },
    {
      id: 'filing-cabinet-tall',
      name: 'Filing Cabinet Tall',
      price: '£75.00',
      image: '/api/placeholder/300/200',
      description: 'Bigger than waist height - Office furniture - Metal cabinet',
      details: [
        'Bigger than waist height',
        'Office furniture',
        'Metal cabinet',
        'Heavy duty removal'
      ],
      specialNote: 'Bigger than waist height - Metal cabinet'
    },
    {
      id: 'garden-table',
      name: 'Garden Table',
      price: '£15.00',
      image: '/api/placeholder/300/200',
      description: 'Garden table removal - Does NOT include parasol',
      details: [
        'All outdoor table types',
        'Weather damaged accepted',
        'Parasol can be added separately',
        'Quick removal service'
      ],
      specialNote: 'Does NOT include parasol - Parasol can be added separately'
    },
    {
      id: 'lamp',
      name: 'Lamp',
      price: '£5.00',
      image: '/api/placeholder/300/200',
      description: 'Tall lamps and Desk lamps removal',
      details: [
        'Tall lamps and Desk lamps',
        'All lamp types accepted',
        'Electrical components included',
        'WEEE compliant disposal'
      ]
    },
    {
      id: 'large-office-desk',
      name: 'Large Office Desk',
      price: '£55.00',
      image: '/api/placeholder/300/200',
      description: 'Large office desk removal service',
      details: [
        'Executive and large desks',
        'Heavy duty removal',
        'Dismantling included',
        'Professional service'
      ],
      warningNote: 'If you are not sure on the size please email a photo to hello@londonwastemanagement.com for confirmation before creating your booking'
    },
    {
      id: 'office-desk',
      name: 'Office Desk',
      price: '£35.00',
      image: '/api/placeholder/300/200',
      description: 'Standard office desk removal - Does NOT include office chair or computer',
      details: [
        'Standard office desks',
        'Up to 30kg weight',
        'Drawers and contents included',
        'Quick collection'
      ],
      specialNote: 'Does NOT include office chair or computer',
      warningNote: 'If your desk weighs OVER 30kg please contact us for a custom quote'
    },
    {
      id: 'pool-snooker-table',
      name: 'Pool / Snooker Table',
      price: '£150.00',
      image: '/api/placeholder/300/200',
      description: 'Pool and snooker table removal service',
      details: [
        'Professional dismantling',
        'Heavy lifting equipment',
        'Slate removal included',
        'Complete table removal'
      ],
      warningNote: 'If your table is 250kg or more please call/email to create the booking instead. You may be subject to a higher fee.'
    }
  ];

  const sortedServices = [...tableServices].sort((a, b) => {
    if (sortBy === 'price-low') {
      const priceA = parseFloat(a.price.replace('£', ''));
      const priceB = parseFloat(b.price.replace('£', ''));
      return priceA - priceB;
    } else if (sortBy === 'price-high') {
      const priceA = parseFloat(a.price.replace('£', ''));
      const priceB = parseFloat(b.price.replace('£', ''));
      return priceB - priceA;
    } else if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-400 to-amber-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="text-left max-w-lg">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Table Removal
              </h1>
              <p className="text-xl text-amber-100 leading-relaxed">
                Professional table and furniture removal service. From dining tables to office desks, garden furniture to pool tables - we handle all table removals with care.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                {/* Table Illustration */}
                <div className="w-96 h-64 flex items-center justify-center">
                  <div className="relative">
                    <div className="text-8xl">📋</div>
                    {/* Workers illustration placeholder */}
                    <div className="absolute -left-20 -top-10 text-6xl">👷‍♂️</div>
                    <div className="absolute -right-20 -top-10 text-6xl">👷‍♀️</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Book Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Why Book Your Removal With LWM?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-3xl">⏰</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Same/Next Day Collection
              </h3>
              <p className="text-gray-600">
                Quick and efficient service when you need it most. Same day and next day collection available.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-3xl">🔧</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Dismantling Included
              </h3>
              <p className="text-gray-600">
                Professional dismantling service for large tables and complex furniture pieces when required.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-3xl">🏠</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Collection From Indoors
              </h3>
              <p className="text-gray-600">
                We'll collect from anywhere in your property - upstairs, downstairs, or from difficult access areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar - Categories */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Search By Category</h3>
                
                <div className="space-y-2">
                  <button 
                    onClick={() => navigate('/services')}
                    className="w-full flex items-center p-3 rounded-lg text-left transition-colors hover:bg-gray-100 text-gray-700"
                  >
                    <span className="mr-3 text-lg">🔌</span>
                    <span className="text-sm font-medium">Appliance Removal</span>
                  </button>
                  
                  <button 
                    onClick={() => navigate('/services')}
                    className="w-full flex items-center p-3 rounded-lg text-left transition-colors hover:bg-gray-100 text-gray-700"
                  >
                    <span className="mr-3 text-lg">🏗️</span>
                    <span className="text-sm font-medium">Builders / Construction Waste Removal</span>
                  </button>
                  
                  <button 
                    onClick={() => navigate('/services')}
                    className="w-full flex items-center p-3 rounded-lg text-left transition-colors hover:bg-gray-100 text-gray-700"
                  >
                    <span className="mr-3 text-lg">📺</span>
                    <span className="text-sm font-medium">Electronic Removal</span>
                  </button>
                  
                  <button 
                    onClick={() => navigate('/fridge-removal')}
                    className="w-full flex items-center p-3 rounded-lg text-left transition-colors hover:bg-gray-100 text-gray-700"
                  >
                    <span className="mr-3 text-lg">❄️</span>
                    <span className="text-sm font-medium">Fridge Removal</span>
                  </button>
                  
                  <button 
                    onClick={() => navigate('/services')}
                    className="w-full flex items-center p-3 rounded-lg text-left transition-colors hover:bg-gray-100 text-gray-700"
                  >
                    <span className="mr-3 text-lg">🪑</span>
                    <span className="text-sm font-medium">Furniture Removal</span>
                  </button>
                  
                  <button 
                    onClick={() => navigate('/garden-waste-removal')}
                    className="w-full flex items-center p-3 rounded-lg text-left transition-colors hover:bg-gray-100 text-gray-700"
                  >
                    <span className="mr-3 text-lg">🌿</span>
                    <span className="text-sm font-medium">Garden Waste Removal</span>
                  </button>
                  
                  <button 
                    onClick={() => navigate('/services')}
                    className="w-full flex items-center p-3 rounded-lg text-left transition-colors hover:bg-gray-100 text-gray-700"
                  >
                    <span className="mr-3 text-lg">🗑️</span>
                    <span className="text-sm font-medium">General Waste & Load Sizes</span>
                  </button>
                  
                  <button 
                    onClick={() => navigate('/services')}
                    className="w-full flex items-center p-3 rounded-lg text-left transition-colors hover:bg-gray-100 text-gray-700"
                  >
                    <span className="mr-3 text-lg">☢️</span>
                    <span className="text-sm font-medium">Hazardous Waste Removal</span>
                  </button>
                  
                  <button 
                    onClick={() => navigate('/mattress-bed-removal')}
                    className="w-full flex items-center p-3 rounded-lg text-left transition-colors hover:bg-gray-100 text-gray-700"
                  >
                    <span className="mr-3 text-lg">🛏️</span>
                    <span className="text-sm font-medium">Mattress & Bed Removal</span>
                  </button>
                  
                  <button 
                    onClick={() => navigate('/services')}
                    className="w-full flex items-center p-3 rounded-lg text-left transition-colors hover:bg-gray-100 text-gray-700"
                  >
                    <span className="mr-3 text-lg">🔋</span>
                    <span className="text-sm font-medium">Old Batteries Disposal</span>
                  </button>
                  
                  <button 
                    onClick={() => navigate('/sofa-chair-removal')}
                    className="w-full flex items-center p-3 rounded-lg text-left transition-colors hover:bg-gray-100 text-gray-700"
                  >
                    <span className="mr-3 text-lg">🛋️</span>
                    <span className="text-sm font-medium">Sofa & Chair Removal</span>
                  </button>
                  
                  <button className="w-full flex items-center p-3 rounded-lg text-left transition-colors bg-primary text-white">
                    <span className="mr-3 text-lg">📋</span>
                    <span className="text-sm font-medium">Table Removal</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Results Header */}
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  Showing all {sortedServices.length} results
                </p>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="default">Default sorting</option>
                  <option value="name">Sort by name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {sortedServices.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:border-amber-300 transition-all duration-300 group"
                  >
                    {/* Service Image */}
                    <div className="h-48 bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center border-b border-amber-200 group-hover:from-amber-100 group-hover:to-amber-200 transition-all duration-300">
                      {service.id === 'bedside-table' ? (
                        <div className="text-6xl">🗄️</div>
                      ) : service.id === 'coffee-table' ? (
                        <div className="text-6xl">☕</div>
                      ) : service.id === 'dining-chair' ? (
                        <div className="text-6xl">🪑</div>
                      ) : service.id === 'dining-table' ? (
                        <div className="text-6xl">🍽️</div>
                      ) : service.id === 'dressing-table' ? (
                        <div className="text-6xl">🪞</div>
                      ) : service.id.includes('filing-cabinet') ? (
                        <div className="text-center">
                          <div className="text-5xl mb-2">🗃️</div>
                          <div className="text-xs text-gray-600 font-medium">
                            {service.id.includes('small') ? 'SMALL' : 'TALL'}
                          </div>
                        </div>
                      ) : service.id === 'garden-table' ? (
                        <div className="text-6xl">🌿</div>
                      ) : service.id === 'lamp' ? (
                        <div className="text-6xl">💡</div>
                      ) : service.id.includes('office-desk') ? (
                        <div className="text-center">
                          <div className="text-5xl mb-2">🖥️</div>
                          <div className="text-xs text-gray-600 font-medium">
                            {service.id.includes('large') ? 'LARGE DESK' : 'OFFICE DESK'}
                          </div>
                        </div>
                      ) : service.id === 'pool-snooker-table' ? (
                        <div className="text-6xl">🎱</div>
                      ) : (
                        <div className="text-6xl">📋</div>
                      )}
                    </div>
                    
                    {/* Service Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                          {service.name}
                        </h3>
                        {(service.specialNote || service.warningNote) && (
                          <div className={`text-xs font-medium px-2 py-1 rounded-full ${
                            service.warningNote ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'
                          }`}>
                            {service.warningNote ? 'Warning' : 'Note'}
                          </div>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {service.description}
                      </p>
                      
                      {service.warningNote && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                          <p className="text-xs text-red-800 font-medium">⚠️ Important:</p>
                          <p className="text-xs text-red-700 mt-1">{service.warningNote}</p>
                        </div>
                      )}
                      
                      {service.specialNote && !service.warningNote && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                          <p className="text-xs text-yellow-800">{service.specialNote}</p>
                        </div>
                      )}
                      
                      <ul className="space-y-2 mb-6 max-h-32 overflow-y-auto">
                        {service.details.slice(0, 3).map((detail, index) => (
                          <li key={index} className="text-xs text-gray-600 flex items-start">
                            <svg className="w-3 h-3 text-amber-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                            {detail}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-amber-600">
                          {service.price}
                        </div>
                        <button
                          onClick={() => navigate('/quote')}
                          className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-5 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-2"
                        >
                          <span>View Product</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Important Notice Section */}
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-8 mb-8">
                <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.98-.833-2.75 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  Weight & Size Restrictions
                </h3>
                <ul className="space-y-2 text-orange-700">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Tables over 30kg require custom quotes - contact us before booking
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Pool/Snooker tables over 250kg must be booked via phone/email
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Large office desks - email photos for size confirmation
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Office desk prices do NOT include chairs or computers
                  </li>
                </ul>
              </div>

              {/* Fair and Simple Pricing Section */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                  <div className="lg:w-1/2 mb-6 lg:mb-0">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Professional Table Removal
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      From small bedside tables to large pool tables, we handle all furniture with care. Dismantling included for complex pieces.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      Unsure about weight or size? Email us photos at hello@londonwastemanagement.com for accurate quotes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button 
                        onClick={() => window.location.href = 'tel:02081234567'}
                        className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call Us
                      </button>
                      <button 
                        onClick={() => window.location.href = 'mailto:hello@londonwastemanagement.com'}
                        className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email Photos
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Get Started Section */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-3">
              <div className="bg-amber-600 p-2 rounded-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-white">
                London Waste Management
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready To Get Started ?
          </h2>
          <button
            onClick={() => navigate('/quote')}
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TableRemoval;