import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

interface SofaService {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  details?: string[];
}

const SofaChairRemoval: React.FC = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState<string>('default');

  const sofaServices: SofaService[] = [
    {
      id: 'two-seater-sofa',
      name: '2 Seater Sofa',
      price: '£60.00',
      image: '/api/placeholder/300/200',
      description: 'Professional 2 seater sofa removal service',
      details: ['Safe removal from any floor', 'Eco-friendly disposal', 'No hidden charges', 'Same day service available']
    },
    {
      id: 'three-seater-sofa',
      name: '3 Seater Sofa',
      price: '£70.00',
      image: '/api/placeholder/300/200',
      description: 'Professional 3 seater sofa removal service',
      details: ['Safe removal from any floor', 'Eco-friendly disposal', 'No hidden charges', 'Same day service available']
    },
    {
      id: 'armchair',
      name: 'Armchair',
      price: '£50.00',
      image: '/api/placeholder/300/200',
      description: 'Single armchair removal service',
      details: ['Quick and efficient removal', 'Suitable for all types of chairs', 'Recycling when possible', 'Professional service']
    },
    {
      id: 'corner-sofa',
      name: 'Corner Sofa',
      price: '£95.00',
      image: '/api/placeholder/300/200',
      description: 'Maximum 5 seats - Book a "Large Corner Sofa" if you have more than 5 seats',
      details: ['Up to 5 seats', 'Heavy lifting included', 'Dismantling if required', 'Professional handling']
    },
    {
      id: 'cushions',
      name: 'Cushions',
      price: '£1.50',
      image: '/api/placeholder/300/200',
      description: 'Individual cushion removal service',
      details: ['Per cushion pricing', 'Bulk removal available', 'Eco-friendly disposal', 'Quick collection']
    },
    {
      id: 'dining-chair',
      name: 'Dining Chair',
      price: '£7.50',
      image: '/api/placeholder/300/200',
      description: 'Single dining chair removal',
      details: ['All chair types', 'Bulk discounts available', 'Safe handling', 'Quick service']
    },
    {
      id: 'footstool',
      name: 'Footstool',
      price: '£20.00',
      image: '/api/placeholder/300/200',
      description: 'Footstool and ottoman removal',
      details: ['All sizes accepted', 'Matching set discounts', 'Professional handling', 'Same day service']
    },
    {
      id: 'garden-chair',
      name: 'Garden Chair',
      price: '£5.00',
      image: '/api/placeholder/300/200',
      description: 'Includes folding and non-folding outdoor chairs',
      details: ['Weather damaged chairs welcome', 'Bulk collection available', 'Metal recycling', 'Quick removal']
    },
    {
      id: 'large-corner-sofa',
      name: 'Large Corner Sofa',
      price: '£110.00',
      image: '/api/placeholder/300/200',
      description: 'More than 5 seats',
      details: ['6+ seat sofas', 'Heavy duty removal', 'Dismantling included', 'Professional team']
    },
    {
      id: 'office-chair',
      name: 'Office Chair',
      price: '£10.00',
      image: '/api/placeholder/300/200',
      description: 'Office and desk chair removal',
      details: ['All office chair types', 'Bulk office clearance', 'Recycling components', 'Quick collection']
    },
    {
      id: 'sofa-bed',
      name: 'Sofa Bed',
      price: '£75.00',
      image: '/api/placeholder/300/200',
      description: 'Does your sofa convert into a bed?',
      details: ['Convertible sofas', 'Heavy lifting included', 'Mechanism handling', 'Professional service']
    }
  ];

  const sortedServices = [...sofaServices].sort((a, b) => {
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
      <section className="bg-gradient-to-r from-blue-400 to-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="text-left max-w-lg">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Sofa & Chair Removal
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Looking forward to lovely new sofa and chairs, but can't shift your old, heavy furniture? Get in touch and we'll ease it out of your way.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                {/* Sofa Illustration */}
                <div className="w-96 h-64 flex items-center justify-center">
                  <div className="relative">
                    <div className="text-8xl">🛋️</div>
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
                <div className="text-3xl">£</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Fixed Collection Prices
              </h3>
              <p className="text-gray-600">
                Transparent pricing with no hidden costs. Know exactly what you'll pay before we arrive.
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
                    onClick={() => navigate('/services')}
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
                    onClick={() => navigate('/services')}
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
                  
                  <button className="w-full flex items-center p-3 rounded-lg text-left transition-colors bg-primary text-white">
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
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300 group"
                  >
                    {/* Service Image */}
                    <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center border-b border-blue-200 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                      {service.id === 'two-seater-sofa' ? (
                        <div className="text-6xl">🛋️</div>
                      ) : service.id === 'three-seater-sofa' ? (
                        <div className="text-6xl">🛏️</div>
                      ) : service.id === 'armchair' ? (
                        <div className="text-6xl">🪑</div>
                      ) : service.id === 'corner-sofa' ? (
                        <div className="text-6xl">🛋️</div>
                      ) : service.id === 'cushions' ? (
                        <div className="text-6xl">🪑</div>
                      ) : service.id === 'dining-chair' ? (
                        <div className="text-6xl">🪑</div>
                      ) : service.id === 'footstool' ? (
                        <div className="text-6xl">🪑</div>
                      ) : service.id === 'garden-chair' ? (
                        <div className="text-6xl">🪑</div>
                      ) : service.id === 'large-corner-sofa' ? (
                        <div className="text-6xl">🛋️</div>
                      ) : service.id === 'office-chair' ? (
                        <div className="text-6xl">🪑</div>
                      ) : service.id === 'sofa-bed' ? (
                        <div className="text-6xl">🛏️</div>
                      ) : (
                        <div className="text-6xl">🛋️</div>
                      )}
                    </div>
                    
                    {/* Service Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {service.name}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {service.description}
                      </p>
                      
                      {service.details && (
                        <ul className="space-y-2 mb-6">
                          {service.details.slice(0, 3).map((detail, index) => (
                            <li key={index} className="text-xs text-gray-600 flex items-start">
                              <svg className="w-3 h-3 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-blue-600">
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
                        Request Quote
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

export default SofaChairRemoval;