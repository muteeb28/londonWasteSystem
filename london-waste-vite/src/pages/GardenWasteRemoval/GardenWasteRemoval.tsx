import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

interface GardenService {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  details: string[];
  specialNote?: string;
}

const GardenWasteRemoval: React.FC = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState<string>('default');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;

  const gardenServices: GardenService[] = [
    {
      id: 'bbq-large',
      name: 'BBQ - Large',
      price: '£75.00',
      image: '/api/placeholder/300/200',
      description: 'Large barbecue removal service',
      details: [
        'We cannot remove the gas canister',
        'Heavy lifting included',
        'Professional dismantling if required',
        'Same day service available'
      ],
      specialNote: 'We cannot remove the gas canister'
    },
    {
      id: 'bbq-small',
      name: 'BBQ - Small',
      price: '£25.00',
      image: '/api/placeholder/300/200',
      description: 'Small barbecue removal service',
      details: [
        'Portable barbecues',
        'Quick collection',
        'Eco-friendly disposal',
        'All small BBQ types'
      ]
    },
    {
      id: 'bike',
      name: 'Bike',
      price: '£10.00',
      image: '/api/placeholder/300/200',
      description: 'Bicycle removal service',
      details: [
        'All bike types',
        'Adult and children\'s bikes',
        'Recycling of metal parts',
        'Quick collection'
      ]
    },
    {
      id: 'concrete-slabs',
      name: 'Concrete Slabs / Posts',
      price: '£10.00',
      image: '/api/placeholder/300/200',
      description: 'Average weight 10–15kg - Price per slab (adjust quantity accordingly)',
      details: [
        'Average weight 10–15kg',
        'Price per slab (adjust quantity accordingly)',
        'Heavy lifting included',
        'Proper disposal'
      ]
    },
    {
      id: 'fence-panel',
      name: 'Fence Panel',
      price: '£15.00',
      image: '/api/placeholder/300/200',
      description: 'Price per panel - Must not be broken down otherwise will be charged as a load size',
      details: [
        'Price per panel',
        'Must not be broken down otherwise will be charged as a load size',
        'If you would also like to remove concrete fence posts, please note we would charge an additional fee'
      ],
      specialNote: 'Must not be broken down otherwise will be charged as a load size'
    },
    {
      id: 'garden-chair',
      name: 'Garden Chair',
      price: '£5.00',
      image: '/api/placeholder/300/200',
      description: 'Includes folding and non-folding outdoor chairs',
      details: [
        'Includes folding and non-folding outdoor chairs',
        'Weather damaged chairs welcome',
        'Bulk collection available',
        'Metal recycling'
      ]
    },
    {
      id: 'garden-table',
      name: 'Garden Table',
      price: '£15.00',
      image: '/api/placeholder/300/200',
      description: 'Garden table removal - Does NOT include parasol',
      details: [
        'Does NOT include parasol',
        'Parasol can be added separately',
        'All materials accepted',
        'Professional handling'
      ],
      specialNote: 'Does NOT include parasol - Parasol can be added separately'
    },
    {
      id: 'garden-waste-bag',
      name: 'Garden Waste Bag',
      price: '£20.00',
      image: '/api/placeholder/300/200',
      description: 'Max. weight per bag is 25kg - Does not include Tonne bags',
      details: [
        'Max. weight per bag is 25kg',
        'Does not include Tonne bags',
        'If unsure email photos to hello@londonwastemanagement.com',
        'Organic waste disposal'
      ],
      specialNote: 'Max. weight per bag is 25kg - Does not include Tonne bags'
    },
    {
      id: 'large-plant-pot',
      name: 'Large Plant Pot',
      price: '£15.00',
      image: '/api/placeholder/300/200',
      description: 'Empty clay pot ONLY - Does NOT include Troughs',
      details: [
        'Empty clay pot ONLY',
        'Does NOT include Troughs',
        'All sizes of pots',
        'Recycling when possible'
      ],
      specialNote: 'Empty clay pot ONLY - Does NOT include Troughs'
    },
    {
      id: 'large-plant-pot-with-soil',
      name: 'Large Plant Pot (including plant and soil)',
      price: '£30.00',
      image: '/api/placeholder/300/200',
      description: 'This includes soil, plant and pot - Does NOT include Troughs',
      details: [
        'This includes soil, plant and pot',
        'Does NOT include Troughs',
        'Complete plant removal',
        'Soil and organic matter disposal'
      ],
      specialNote: 'Does NOT include Troughs'
    },
    {
      id: 'lawnmower',
      name: 'Lawnmower',
      price: '£10.00',
      image: '/api/placeholder/300/200',
      description: 'Lawnmower removal service',
      details: [
        'All types of lawnmowers',
        'Electric and petrol mowers',
        'WEEE compliant disposal',
        'Metal recycling'
      ]
    },
    {
      id: 'paint',
      name: 'Paint',
      price: '£5.00',
      image: '/api/placeholder/300/200',
      description: 'Paint Tins / Cans 1 Litre or LESS',
      details: [
        'Paint Tins / Cans 1 Litre or LESS',
        'If you have larger paint cans please get in touch',
        'Hazardous waste disposal',
        'Environmental compliance'
      ],
      specialNote: 'If you have larger paint cans please get in touch via email: hello@londonwastemanagement.com'
    },
    // Additional services to make 18 total
    {
      id: 'garden-shed-small',
      name: 'Garden Shed - Small',
      price: '£150.00',
      image: '/api/placeholder/300/200',
      description: 'Small garden shed dismantling and removal',
      details: [
        'Up to 6ft x 4ft',
        'Dismantling included',
        'All materials removed',
        'Site clearance'
      ]
    },
    {
      id: 'garden-shed-large',
      name: 'Garden Shed - Large',
      price: '£250.00',
      image: '/api/placeholder/300/200',
      description: 'Large garden shed dismantling and removal',
      details: [
        'Over 6ft x 4ft',
        'Professional dismantling',
        'Heavy lifting equipment',
        'Complete site clearance'
      ]
    },
    {
      id: 'greenhouse',
      name: 'Greenhouse',
      price: '£120.00',
      image: '/api/placeholder/300/200',
      description: 'Greenhouse dismantling and removal service',
      details: [
        'Safe glass handling',
        'Frame dismantling',
        'All materials removed',
        'Professional service'
      ]
    },
    {
      id: 'tree-branches',
      name: 'Tree Branches',
      price: '£40.00',
      image: '/api/placeholder/300/200',
      description: 'Tree branch and pruning waste removal',
      details: [
        'Cut branches only',
        'Bulk collection available',
        'Composting when possible',
        'Per load pricing'
      ]
    },
    {
      id: 'artificial-grass',
      name: 'Artificial Grass',
      price: '£80.00',
      image: '/api/placeholder/300/200',
      description: 'Artificial turf removal service per 10m²',
      details: [
        'Per 10m² pricing',
        'Removal from surface',
        'Heavy lifting included',
        'Proper disposal'
      ]
    },
    {
      id: 'garden-waste-general',
      name: 'General Garden Waste',
      price: '£60.00',
      image: '/api/placeholder/300/200',
      description: 'Mixed garden waste collection service',
      details: [
        'Mixed organic waste',
        'Leaves and grass cuttings',
        'Small branches',
        'Composting disposal'
      ]
    }
  ];

  const sortedServices = [...gardenServices].sort((a, b) => {
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

  // Pagination
  const totalPages = Math.ceil(sortedServices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedServices = sortedServices.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-400 to-green-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="text-left max-w-lg">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Garden Waste Removal
              </h1>
              <p className="text-xl text-green-100 leading-relaxed">
                Professional garden waste collection service. From BBQs and furniture to plant pots and organic waste - we handle all your garden clearance needs.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                {/* Garden Illustration */}
                <div className="w-96 h-64 flex items-center justify-center">
                  <div className="relative">
                    <div className="text-8xl">🌱</div>
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
                <div className="text-3xl">♻️</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Eco-Friendly Disposal
              </h3>
              <p className="text-gray-600">
                Composting and recycling where possible. Environmentally responsible disposal of all garden waste.
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
                  
                  <button className="w-full flex items-center p-3 rounded-lg text-left transition-colors bg-primary text-white">
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
                    onClick={() => navigate('/services')}
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
                  
                  <button 
                    onClick={() => navigate('/services')}
                    className="w-full flex items-center p-3 rounded-lg text-left transition-colors hover:bg-gray-100 text-gray-700"
                  >
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
                  Showing {startIndex + 1}–{Math.min(startIndex + itemsPerPage, sortedServices.length)} of {sortedServices.length} results
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {paginatedServices.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:border-green-300 transition-all duration-300 group"
                  >
                    {/* Service Image */}
                    <div className="h-48 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center border-b border-green-200 group-hover:from-green-100 group-hover:to-green-200 transition-all duration-300">
                      {service.id === 'bbq-large' || service.id === 'bbq-small' ? (
                        <div className="text-6xl">🔥</div>
                      ) : service.id === 'bike' ? (
                        <div className="text-6xl">🚴‍♂️</div>
                      ) : service.id === 'concrete-slabs' ? (
                        <div className="text-6xl">🪨</div>
                      ) : service.id === 'fence-panel' ? (
                        <div className="text-6xl">🏠</div>
                      ) : service.id === 'garden-chair' ? (
                        <div className="text-6xl">🪑</div>
                      ) : service.id === 'garden-table' ? (
                        <div className="text-6xl">🪑</div>
                      ) : service.id === 'garden-waste-bag' ? (
                        <div className="text-6xl">🗑️</div>
                      ) : service.id.includes('plant-pot') ? (
                        <div className="text-6xl">🪴</div>
                      ) : service.id === 'lawnmower' ? (
                        <div className="text-6xl">🏡</div>
                      ) : service.id === 'paint' ? (
                        <div className="text-6xl">🎨</div>
                      ) : service.id.includes('shed') ? (
                        <div className="text-6xl">🏠</div>
                      ) : service.id === 'greenhouse' ? (
                        <div className="text-6xl">🏡</div>
                      ) : service.id === 'tree-branches' ? (
                        <div className="text-6xl">🌳</div>
                      ) : service.id === 'artificial-grass' ? (
                        <div className="text-6xl">🌱</div>
                      ) : (
                        <div className="text-6xl">🌿</div>
                      )}
                    </div>
                    
                    {/* Service Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                          {service.name}
                        </h3>
                        {service.specialNote && (
                          <div className="bg-yellow-100 text-yellow-600 text-xs font-medium px-2 py-1 rounded-full">
                            Note
                          </div>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {service.description}
                      </p>
                      
                      {service.specialNote && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                          <p className="text-xs text-yellow-800">{service.specialNote}</p>
                        </div>
                      )}
                      
                      <ul className="space-y-2 mb-6 max-h-32 overflow-y-auto">
                        {service.details.slice(0, 3).map((detail, index) => (
                          <li key={index} className="text-xs text-gray-600 flex items-start">
                            <svg className="w-3 h-3 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                            {detail}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-green-600">
                          {service.price}
                        </div>
                        <button
                          onClick={() => navigate('/quote')}
                          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-5 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-2"
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

              {/* Pagination */}
              <div className="flex justify-center items-center space-x-2 mb-12">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === page
                        ? 'bg-green-500 text-white'
                        : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  Next
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Fair and Simple Pricing Section */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                  <div className="lg:w-1/2 mb-6 lg:mb-0">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Fair and simple pricing
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      London Waste Management strives to make the whole process of removing heavy items as simple and hassle-free as possible.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      If you are unsure, please give us a call, or upload a photo so we can give you an instant quote.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button 
                        onClick={() => window.location.href = 'tel:02081234567'}
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call Us
                      </button>
                      <button 
                        onClick={() => navigate('/quote')}
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Upload Photo for Quote
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
              <div className="bg-green-600 p-2 rounded-lg">
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
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GardenWasteRemoval;