import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

interface BedService {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  details: string[];
  specialNote?: string;
  warningNote?: string;
}

const MattressBedRemoval: React.FC = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState<string>('default');

  const bedServices: BedService[] = [
    {
      id: 'bedding',
      name: 'Bedding',
      price: '£13.00',
      image: '/api/placeholder/300/200',
      description: 'Max. 3 bin liners worth of duvets, pillows, and sheets',
      details: [
        'Max. 3 bin liners worth of duvets, pillows, and sheets',
        'Hygienic disposal',
        'Textile recycling when possible',
        'Quick collection service'
      ],
      specialNote: 'Max. 3 bin liners worth'
    },
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
      id: 'cots',
      name: 'Cots',
      price: '£45.00',
      image: '/api/placeholder/300/200',
      description: 'Baby cot removal - Includes baby mattress',
      details: [
        'Includes baby mattress',
        'All cot types and sizes',
        'Safety dismantling',
        'Professional handling'
      ],
      specialNote: 'Includes baby mattress'
    },
    {
      id: 'cushions',
      name: 'Cushions',
      price: '£1.50',
      image: '/api/placeholder/300/200',
      description: 'Individual cushion removal service',
      details: [
        'Per cushion pricing',
        'All types of cushions',
        'Bulk removal available',
        'Hygienic disposal'
      ]
    },
    {
      id: 'double-bed-base',
      name: 'Double Bed Base (Divan)',
      price: '£25.00',
      image: '/api/placeholder/300/200',
      description: 'Double divan bed base removal service',
      details: [
        'Divan style bed bases',
        'Storage drawers included',
        'Heavy lifting service',
        'Professional dismantling if required'
      ]
    },
    {
      id: 'double-bed-frame',
      name: 'Double Bed Frame',
      price: '£25.00',
      image: '/api/placeholder/300/200',
      description: 'Double bed frame removal service',
      details: [
        'All frame types and materials',
        'Dismantling included',
        'Metal and wood recycling',
        'Complete removal service'
      ]
    },
    {
      id: 'double-mattress',
      name: 'Double Mattress',
      price: '£35.00',
      image: '/api/placeholder/300/200',
      description: 'Double mattress removal with special infestation protocols',
      details: [
        'All double mattress types',
        'Hygienic removal service',
        'Eco-friendly disposal',
        'Same day collection available'
      ],
      warningNote: 'If the mattress is infested, you will be required to wrap it in plastic and leave it outside 3 days prior to collection. You may also be subject to additional charges. Please inform us prior to booking.'
    },
    {
      id: 'emperor-mattress',
      name: 'Emperor Mattress',
      price: '£60.00',
      image: '/api/placeholder/300/200',
      description: 'Emperor size mattress removal with special protocols',
      details: [
        'Extra large emperor mattresses',
        'Heavy lifting equipment',
        'Specialist handling required',
        'Professional removal team'
      ],
      warningNote: 'If the mattress is infested, you will be required to wrap it in plastic and leave it outside 3 days prior to collection. You may also be subject to additional charges. Please inform us prior to booking.'
    },
    {
      id: 'king-queen-bed-base',
      name: 'King / Queen Bed Base (Divan)',
      price: '£35.00',
      image: '/api/placeholder/300/200',
      description: 'King or Queen size divan bed base removal',
      details: [
        'King and Queen size bed bases',
        'Divan style with storage',
        'Heavy duty lifting',
        'Professional service'
      ]
    },
    {
      id: 'king-queen-bed-frame',
      name: 'King / Queen Bed Frame',
      price: '£35.00',
      image: '/api/placeholder/300/200',
      description: 'King or Queen size bed frame removal',
      details: [
        'Large bed frames',
        'All materials accepted',
        'Complete dismantling',
        'Recycling components'
      ]
    },
    {
      id: 'king-queen-mattress',
      name: 'King / Queen Mattress',
      price: '£40.00',
      image: '/api/placeholder/300/200',
      description: 'King or Queen mattress removal with infestation protocols',
      details: [
        'King and Queen size mattresses',
        'Memory foam and spring types',
        'Hygienic handling',
        'Environmental disposal'
      ],
      warningNote: 'If the mattress is infested, you will be required to wrap it in plastic and leave it outside 3 days prior to collection. You may also be subject to additional charges. Please inform us prior to booking.'
    },
    {
      id: 'mattress-topper',
      name: 'Mattress Topper',
      price: '£10.00',
      image: '/api/placeholder/300/200',
      description: 'Mattress topper and protector removal',
      details: [
        'All sizes of toppers',
        'Memory foam and fiber fill',
        'Hygienic collection',
        'Quick removal service'
      ]
    }
  ];

  const sortedServices = [...bedServices].sort((a, b) => {
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
      <section className="bg-gradient-to-r from-purple-400 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="text-left max-w-lg">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Mattress & Bed Removal
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                Professional mattress and bed removal service. Hygienic collection with special protocols for infested mattresses and complete bed disposal solutions.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                {/* Bed Illustration */}
                <div className="w-96 h-64 flex items-center justify-center">
                  <div className="relative">
                    <div className="text-8xl">🛏️</div>
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
                <div className="text-3xl">🧼</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Hygienic Handling
              </h3>
              <p className="text-gray-600">
                Professional hygienic handling of all mattresses and bedding with special protocols for infested items.
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
                  
                  <button className="w-full flex items-center p-3 rounded-lg text-left transition-colors bg-primary text-white">
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
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:border-purple-300 transition-all duration-300 group"
                  >
                    {/* Service Image */}
                    <div className="h-48 bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center border-b border-purple-200 group-hover:from-purple-100 group-hover:to-purple-200 transition-all duration-300">
                      {service.id === 'bedding' ? (
                        <div className="text-6xl">🛏️</div>
                      ) : service.id === 'bedside-table' ? (
                        <div className="text-6xl">🗄️</div>
                      ) : service.id === 'cots' ? (
                        <div className="text-6xl">👶</div>
                      ) : service.id === 'cushions' ? (
                        <div className="text-6xl">🪑</div>
                      ) : service.id.includes('bed-base') ? (
                        <div className="text-center">
                          <div className="text-4xl mb-2">🛏️</div>
                          <div className="text-xs text-gray-600 font-medium">BASE</div>
                        </div>
                      ) : service.id.includes('bed-frame') ? (
                        <div className="text-center">
                          <div className="text-4xl mb-2">🛏️</div>
                          <div className="text-xs text-gray-600 font-medium">FRAME</div>
                        </div>
                      ) : service.id.includes('mattress') ? (
                        <div className="text-center">
                          <div className="text-5xl mb-2">🛌</div>
                          <div className="text-xs text-gray-600 font-medium">MATTRESS</div>
                        </div>
                      ) : (
                        <div className="text-6xl">🛏️</div>
                      )}
                    </div>
                    
                    {/* Service Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
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
                          <p className="text-xs text-red-800 font-medium">⚠️ Important Notice:</p>
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
                            <svg className="w-3 h-3 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                            {detail}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-purple-600">
                          {service.price}
                        </div>
                        <button
                          onClick={() => navigate('/quote')}
                          className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-5 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-2"
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
              <div className="bg-red-50 border border-red-200 rounded-xl p-8 mb-8">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.98-.833-2.75 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  Infested Mattress Protocol
                </h3>
                <ul className="space-y-2 text-red-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    If your mattress is infested, it must be wrapped in plastic
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Wrapped mattresses must be left outside 3 days prior to collection
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Additional charges may apply for infested mattresses
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Please inform us prior to booking if you suspect infestation
                  </li>
                </ul>
              </div>

              {/* Fair and Simple Pricing Section */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                  <div className="lg:w-1/2 mb-6 lg:mb-0">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Hygienic & Professional Service
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      We handle all mattresses and bedding with the highest hygiene standards. Our team is equipped to deal with all types of bed removals safely and professionally.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      For infested mattresses, we have special protocols to ensure safe collection and disposal. Please inform us in advance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button 
                        onClick={() => window.location.href = 'tel:02081234567'}
                        className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call Us
                      </button>
                      <button 
                        onClick={() => navigate('/quote')}
                        className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
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
              <div className="bg-purple-600 p-2 rounded-lg">
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
            className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MattressBedRemoval;