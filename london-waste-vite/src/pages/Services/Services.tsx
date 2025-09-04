import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

interface Service {
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
}

const Services: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('default');

  const services: Service[] = [
    // Load Sizes
    {
      id: 'medium-load',
      name: '1/2 Load',
      category: 'General Waste & Load Sizes',
      price: '£225.00',
      image: '/api/placeholder/300/200',
      description: 'Half van Load - Medium load',
      details: [
        'Half van Load',
        'Medium load',
        'Max. weight 500kg',
        'Equivalent space to 16 washing machines',
        'Includes labour for up to 45 minutes'
      ],
      maxWeight: '500kg',
      loadTime: '45 minutes',
      equivalent: '16 washing machines'
    },
    {
      id: 'quarter-load',
      name: '1/4 Load',
      category: 'General Waste & Load Sizes',
      price: '£127.99',
      image: '/api/placeholder/300/200',
      description: 'Quarter Load - Max. weight 250kg',
      details: [
        'Quarter Load',
        'Max. weight 250kg',
        'Equivalent space to 8 washing machines',
        'Includes labour for 30 minutes'
      ],
      maxWeight: '250kg',
      loadTime: '30 minutes',
      equivalent: '8 washing machines'
    },
    {
      id: 'bin-1100',
      name: '1100 Litre Bin',
      category: 'General Waste & Load Sizes',
      price: '£80.00',
      image: '/api/placeholder/300/200',
      description: 'Max. weight 200kg - No Garden or Construction Waste',
      details: [
        'Max. weight 200kg',
        'No Garden or Construction Waste',
        'Perfect for household waste',
        'Weekly collection available'
      ],
      maxWeight: '200kg'
    },
    {
      id: 'three-quarter-load',
      name: '3/4 Load',
      category: 'General Waste & Load Sizes',
      price: '£285.00',
      image: '/api/placeholder/300/200',
      description: 'Three quarter van Load - Max. weight 750kg',
      details: [
        'Three quarter van Load',
        'Max. weight 750kg',
        'Equivalent space to 24 washing machines',
        'Includes labour for up to 60 minutes'
      ],
      maxWeight: '750kg',
      loadTime: '60 minutes',
      equivalent: '24 washing machines'
    },

    // Furniture
    {
      id: 'two-seater-sofa',
      name: '2 Seater Sofa',
      category: 'Sofa & Chair Removal',
      price: '£45.00',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Professional 2 seater sofa removal service',
      details: [
        'Safe removal from any floor',
        'Eco-friendly disposal',
        'No hidden charges',
        'Same day service available'
      ]
    },
    {
      id: 'three-seater-sofa',
      name: '3 Seater Sofa',
      category: 'Sofa & Chair Removal',
      price: '£55.00',
      image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Professional 3 seater sofa removal service',
      details: [
        'Safe removal from any floor',
        'Eco-friendly disposal',
        'No hidden charges',
        'Same day service available'
      ]
    },
    {
      id: 'armchair',
      name: 'Armchair',
      category: 'Sofa & Chair Removal',
      price: '£35.00',
      image: 'https://images.pexels.com/photos/586769/pexels-photo-586769.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Single armchair removal service',
      details: [
        'Quick and efficient removal',
        'Suitable for all types of chairs',
        'Recycling when possible',
        'Professional service'
      ]
    },

    // Appliances
    {
      id: 'fridge-freezer',
      name: 'Fridge/Freezer',
      category: 'Fridge Removal',
      price: '£45.00',
      image: '/api/placeholder/300/200',
      description: 'WEEE compliant fridge and freezer removal',
      details: [
        'WEEE compliant disposal',
        'Refrigerant safely removed',
        'Free collection',
        'Environmental certification provided'
      ]
    },
    {
      id: 'washing-machine',
      name: 'Washing Machine',
      category: 'Appliance Removal',
      price: '£40.00',
      image: '/api/placeholder/300/200',
      description: 'Professional washing machine removal',
      details: [
        'Safe disconnection if needed',
        'Heavy lifting included',
        'Eco-friendly disposal',
        'Same day service'
      ]
    },
    {
      id: 'dishwasher',
      name: 'Dishwasher',
      category: 'Appliance Removal',
      price: '£40.00',
      image: '/api/placeholder/300/200',
      description: 'Dishwasher removal and disposal service',
      details: [
        'Professional disconnection',
        'Safe removal',
        'Recycling included',
        'No additional charges'
      ]
    },

    // Electronics
    {
      id: 'tv-removal',
      name: 'TV Removal',
      category: 'Electronic Removal',
      price: '£25.00',
      image: '/api/placeholder/300/200',
      description: 'Television and monitor removal service',
      details: [
        'All sizes accepted',
        'WEEE compliant disposal',
        'Data destruction for smart TVs',
        'Environmental certificate'
      ]
    },
    {
      id: 'computer-removal',
      name: 'Computer Equipment',
      category: 'Electronic Removal',
      price: '£30.00',
      image: '/api/placeholder/300/200',
      description: 'Computer and IT equipment removal',
      details: [
        'Secure data destruction',
        'All types of computers',
        'WEEE compliance',
        'Certificate of disposal'
      ]
    },

    // Furniture
    {
      id: 'dining-table',
      name: 'Dining Table',
      category: 'Table Removal',
      price: '£50.00',
      image: '/api/placeholder/300/200',
      description: 'Dining table removal service',
      details: [
        'All sizes and materials',
        'Dismantling if required',
        'Donation to charity when possible',
        'Professional handling'
      ]
    },
    {
      id: 'office-desk',
      name: 'Office Desk',
      category: 'Table Removal',
      price: '£40.00',
      image: '/api/placeholder/300/200',
      description: 'Office desk and furniture removal',
      details: [
        'Commercial grade furniture',
        'Dismantling service',
        'Bulk discounts available',
        'Same day collection'
      ]
    },

    // Mattress & Beds
    {
      id: 'single-mattress',
      name: 'Single Mattress',
      category: 'Mattress & Bed Removal',
      price: '£35.00',
      image: '/api/placeholder/300/200',
      description: 'Single mattress removal and disposal',
      details: [
        'Hygienic removal',
        'Recycling when possible',
        'All types of mattresses',
        'Same day service'
      ]
    },
    {
      id: 'double-bed',
      name: 'Double Bed Frame',
      category: 'Mattress & Bed Removal',
      price: '£55.00',
      image: '/api/placeholder/300/200',
      description: 'Complete bed frame removal',
      details: [
        'Full dismantling included',
        'All bed frame types',
        'Mattress removal extra',
        'Professional service'
      ]
    },

    // Specialized
    {
      id: 'car-batteries',
      name: 'Car Batteries',
      category: 'Old Batteries Disposal',
      price: '£15.00',
      image: '/api/placeholder/300/200',
      description: 'Safe car battery disposal',
      details: [
        'Environmentally safe disposal',
        'All battery types',
        'Bulk collection available',
        'Certification provided'
      ]
    },
    {
      id: 'garden-waste',
      name: 'Garden Waste',
      category: 'Garden Waste Removal',
      price: '£80.00',
      image: '/api/placeholder/300/200',
      description: 'Garden waste and green waste removal',
      details: [
        'Tree branches and logs',
        'Grass cuttings',
        'Garden furniture',
        'Composting when possible'
      ]
    },
    {
      id: 'hazardous-waste',
      name: 'Hazardous Waste',
      category: 'Hazardous Waste Removal',
      price: 'POA',
      image: '/api/placeholder/300/200',
      description: 'Licensed hazardous waste disposal',
      details: [
        'Fully licensed disposal',
        'Asbestos removal',
        'Chemical waste',
        'Certification included'
      ]
    },
    {
      id: 'construction-waste',
      name: 'Construction Waste',
      category: 'Builders & Construction Waste Removal',
      price: '£150.00',
      image: '/api/placeholder/300/200',
      description: 'Construction and building waste removal',
      details: [
        'Rubble and concrete',
        'Plasterboard',
        'Timber and metal',
        'Skip hire alternative'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: '🏠' },
    { id: 'Appliance Removal', name: 'Appliance Removal', icon: '🔌' },
    { id: 'Builders & Construction Waste Removal', name: 'Builders / Construction Waste Removal', icon: '🏗️' },
    { id: 'Electronic Removal', name: 'Electronic Removal', icon: '📺' },
    { id: 'Fridge Removal', name: 'Fridge Removal', icon: '❄️' },
    { id: 'Furniture Removal', name: 'Furniture Removal', icon: '🪑' },
    { id: 'Garden Waste Removal', name: 'Garden Waste Removal', icon: '🌿' },
    { id: 'General Waste & Load Sizes', name: 'General Waste & Load Sizes', icon: '🗑️' },
    { id: 'Hazardous Waste Removal', name: 'Hazardous Waste Removal', icon: '☢️' },
    { id: 'Mattress & Bed Removal', name: 'Mattress & Bed Removal', icon: '🛏️' },
    { id: 'Old Batteries Disposal', name: 'Old Batteries Disposal', icon: '🔋' },
    { id: 'Sofa & Chair Removal', name: 'Sofa & Chair Removal', icon: '🛋️' },
    { id: 'Table Removal', name: 'Table Removal', icon: '📋' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const sortedServices = [...filteredServices].sort((a, b) => {
    if (sortBy === 'price-low') {
      const priceA = parseFloat(a.price.replace('£', '').replace('POA', '999'));
      const priceB = parseFloat(b.price.replace('£', '').replace('POA', '999'));
      return priceA - priceB;
    } else if (sortBy === 'price-high') {
      const priceA = parseFloat(a.price.replace('£', '').replace('POA', '999'));
      const priceB = parseFloat(b.price.replace('£', '').replace('POA', '999'));
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
            <div className="text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Services
              </h1>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                {/* Illustration placeholder - you can replace with actual illustration */}
                <div className="w-96 h-64 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚛</div>
                    <div className="text-white font-medium">Professional Waste Removal</div>
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
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        if (category.id === 'all') {
                          setSelectedCategory('all');
                        } else if (category.id === 'Appliance Removal') {
                          navigate('/appliance-removal');
                        } else if (category.id === 'Electronic Removal') {
                          navigate('/electronic-removal');
                        } else if (category.id === 'Fridge Removal') {
                          navigate('/fridge-removal');
                        } else if (category.id === 'Garden Waste Removal') {
                          navigate('/garden-waste-removal');
                        } else if (category.id === 'Mattress & Bed Removal') {
                          navigate('/mattress-bed-removal');
                        } else if (category.id === 'Old Batteries Disposal') {
                          navigate('/old-batteries-disposal');
                        } else if (category.id === 'Sofa & Chair Removal') {
                          navigate('/sofa-chair-removal');
                        } else if (category.id === 'Table Removal') {
                          navigate('/table-removal');
                        } else {
                          // For categories without dedicated pages, filter on current page
                          setSelectedCategory(category.id);
                        }
                      }}
                      className={`w-full flex items-center p-3 rounded-lg text-left transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-primary text-white'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <span className="mr-3 text-lg">{category.icon}</span>
                      <span className="text-sm font-medium">{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Results Header */}
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  Showing 1-{sortedServices.length} of {sortedServices.length} results
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedServices.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300 group"
                  >
                    {/* Service Image */}
                    <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center border-b border-blue-200 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                      {service.id === 'medium-load' ? (
                        <div className="text-center">
                          <div className="text-5xl mb-2">🚚</div>
                          <div className="text-xs text-gray-600 font-medium">1/2 LOAD</div>
                        </div>
                      ) : service.id === 'quarter-load' ? (
                        <div className="text-center">
                          <div className="text-5xl mb-2">🚐</div>
                          <div className="text-xs text-gray-600 font-medium">QUARTER LOAD</div>
                        </div>
                      ) : service.id === 'bin-1100' ? (
                        <div className="text-center">
                          <div className="text-5xl mb-2">🗂️</div>
                          <div className="text-xs text-gray-600 font-medium">1100 LITRE BIN</div>
                        </div>
                      ) : service.id === 'three-quarter-load' ? (
                        <div className="text-center">
                          <div className="text-5xl mb-2">🚛</div>
                          <div className="text-xs text-gray-600 font-medium">3/4 LOAD</div>
                        </div>
                      ) : service.id === 'two-seater-sofa' ? (
                        <div className="text-5xl">🛋️</div>
                      ) : service.id === 'three-seater-sofa' ? (
                        <div className="text-5xl">🛏️</div>
                      ) : service.id === 'armchair' ? (
                        <div className="text-5xl">🪑</div>
                      ) : service.id === 'fridge-freezer' ? (
                        <div className="text-5xl">🧊</div>
                      ) : service.id === 'washing-machine' ? (
                        <div className="text-5xl">🌀</div>
                      ) : service.id === 'dishwasher' ? (
                        <div className="text-5xl">🍽️</div>
                      ) : service.id === 'tv-removal' ? (
                        <div className="text-5xl">📺</div>
                      ) : service.id === 'computer-removal' ? (
                        <div className="text-5xl">💻</div>
                      ) : service.id === 'dining-table' ? (
                        <div className="text-5xl">🪑</div>
                      ) : service.id === 'office-desk' ? (
                        <div className="text-5xl">🖥️</div>
                      ) : service.id === 'single-mattress' ? (
                        <div className="text-5xl">🛏️</div>
                      ) : service.id === 'double-bed' ? (
                        <div className="text-5xl">🛌</div>
                      ) : service.id === 'car-batteries' ? (
                        <div className="text-5xl">🔋</div>
                      ) : service.id === 'garden-waste' ? (
                        <div className="text-5xl">🌱</div>
                      ) : service.id === 'hazardous-waste' ? (
                        <div className="text-5xl">⚠️</div>
                      ) : service.id === 'construction-waste' ? (
                        <div className="text-5xl">🏗️</div>
                      ) : (
                        <div className="text-5xl">🗑️</div>
                      )}
                    </div>
                    
                    {/* Service Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {service.name}
                        </h3>
                        <div className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
                          {service.category.split(' ')[0]}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {service.description}
                      </p>
                      
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
                      
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-blue-600">
                          {service.price}
                        </div>
                        <button
                          onClick={() => navigate(`/product/${service.id}`)}
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;