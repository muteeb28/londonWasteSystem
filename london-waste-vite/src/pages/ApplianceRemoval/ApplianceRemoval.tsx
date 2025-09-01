import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

interface ApplianceService {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  details: string[];
  specialNote?: string;
  warningNote?: string;
}

const ApplianceRemoval: React.FC = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState<string>('default');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;

  const applianceServices: ApplianceService[] = [
    {
      id: 'american-double-fridge',
      name: 'American (Double) Fridge',
      price: '£120.00',
      image: '/api/placeholder/300/200',
      description: 'Large American-style double door refrigerator removal',
      details: [
        'Your appliance must be disconnected and drained completely before collection',
        'The motor must be attached',
        'WEEE compliant disposal',
        'Environmental certification'
      ],
      warningNote: 'This item must be outside the property ready for collection if this is not possible we may be able to remove from inside but bear no responsibility for any damage that may occur during the removal due to the significant weight and size of the fridge'
    },
    {
      id: 'bbq-large',
      name: 'BBQ – Large',
      price: '£75.00',
      image: '/api/placeholder/300/200',
      description: 'Large barbecue removal service',
      details: [
        'Heavy lifting included',
        'Professional dismantling if required',
        'Same day service available',
        'All BBQ types accepted'
      ],
      specialNote: 'We cannot remove the gas canister'
    },
    {
      id: 'bbq-small',
      name: 'BBQ – Small',
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
      id: 'chest-freezer',
      name: 'Chest Freezer',
      price: '£80.00',
      image: '/api/placeholder/300/200',
      description: 'Chest freezer removal - Household only, NOT commercial',
      details: [
        'Household only, NOT commercial',
        'WEEE compliant disposal',
        'Refrigerant safely removed',
        'Environmental certification'
      ],
      warningNote: 'Your appliance must be disconnected and drained completely before collection. This item must be outside the property ready for collection if this is not possible we may be able to remove from inside but bear no responsibility for any damage that may occur during the removal'
    },
    {
      id: 'coffee-machine-small',
      name: 'Coffee Machine – Small',
      price: '£25.00',
      image: '/api/placeholder/300/200',
      description: 'Small coffee machine removal service',
      details: [
        'Home coffee machines',
        'Bean-to-cup machines',
        'Pod coffee makers',
        'WEEE compliant disposal'
      ]
    },
    {
      id: 'coffee-machine-medium',
      name: 'Coffee Machine – Medium',
      price: '£50.00',
      image: '/api/placeholder/300/200',
      description: 'Medium coffee machine removal service',
      details: [
        'Commercial coffee machines',
        'Large home units',
        'Built-in coffee systems',
        'Professional handling'
      ]
    },
    {
      id: 'commercial-fridge',
      name: 'Commercial Fridge',
      price: '£350.00',
      image: '/api/placeholder/300/200',
      description: 'Commercial fridge removal - Also known as "Display Fridges"',
      details: [
        'Display fridges',
        'Commercial refrigeration',
        'WEEE compliant disposal',
        'Professional handling'
      ],
      warningNote: 'Your appliance must be disconnected and drained completely before collection. This item must be outside the property ready for collection if this is not possible we may be able to remove from inside but bear no responsibility for any damage'
    },
    {
      id: 'cooker-oven',
      name: 'Cooker / Oven',
      price: '£45.00',
      image: '/api/placeholder/300/200',
      description: 'Standard cooker and oven removal service',
      details: [
        'Electric and gas cookers',
        'Built-in ovens',
        'Freestanding units',
        'Safe disconnection advice'
      ],
      specialNote: 'Your appliance must be disconnected before collection'
    },
    {
      id: 'cross-trainer',
      name: 'Cross Trainer',
      price: '£75.00',
      image: '/api/placeholder/300/200',
      description: 'Exercise cross trainer removal service',
      details: [
        'All cross trainer types',
        'Dismantling if required',
        'Heavy lifting included',
        'Same day service'
      ]
    },
    {
      id: 'dishwasher',
      name: 'Dishwasher',
      price: '£35.00',
      image: '/api/placeholder/300/200',
      description: 'Dishwasher removal and disposal service',
      details: [
        'Built-in and freestanding',
        'WEEE compliant disposal',
        'Water disconnection included',
        'Professional service'
      ],
      specialNote: 'Your appliance must be disconnected and drained completely before collection'
    },
    {
      id: 'double-cooker-oven',
      name: 'Double Cooker / Oven',
      price: '£90.00',
      image: '/api/placeholder/300/200',
      description: 'Double cooker with 5 or more hobs removal',
      details: [
        'A cooker with 5 or more hobs',
        'Heavy duty removal',
        'Professional dismantling',
        'All fuel types'
      ],
      warningNote: 'Your appliance must be disconnected before collection. This item must be outside the property ready for collection if this is not possible, we may be able to remove from inside but bear no responsibility for any damage that may occur'
    },
    // Additional services to reach 34 total
    {
      id: 'washing-machine',
      name: 'Washing Machine',
      price: '£40.00',
      image: '/api/placeholder/300/200',
      description: 'Washing machine removal service',
      details: [
        'All washing machine types',
        'Front and top loading',
        'WEEE compliant disposal',
        'Professional handling'
      ]
    },
    {
      id: 'tumble-dryer',
      name: 'Tumble Dryer',
      price: '£40.00',
      image: '/api/placeholder/300/200',
      description: 'Tumble dryer removal service',
      details: [
        'Vented and condenser dryers',
        'Heat pump dryers',
        'WEEE compliant disposal',
        'Quick collection'
      ]
    },
    {
      id: 'microwave',
      name: 'Microwave',
      price: '£15.00',
      image: '/api/placeholder/300/200',
      description: 'Microwave oven removal service',
      details: [
        'All microwave types',
        'Built-in and countertop',
        'WEEE compliant disposal',
        'Same day collection'
      ]
    },
    {
      id: 'hob',
      name: 'Hob',
      price: '£30.00',
      image: '/api/placeholder/300/200',
      description: 'Cooking hob removal service',
      details: [
        'Electric and gas hobs',
        'Induction hobs',
        'Built-in units',
        'Safe disconnection required'
      ]
    },
    {
      id: 'extractor-fan',
      name: 'Extractor Fan',
      price: '£20.00',
      image: '/api/placeholder/300/200',
      description: 'Kitchen extractor fan removal',
      details: [
        'Cooker hood extractors',
        'Wall mounted fans',
        'Electrical disconnection',
        'Quick removal'
      ]
    },
    {
      id: 'boiler',
      name: 'Boiler',
      price: '£150.00',
      image: '/api/placeholder/300/200',
      description: 'Central heating boiler removal',
      details: [
        'Gas and electric boilers',
        'Professional disconnection required',
        'Heavy lifting equipment',
        'Licensed disposal'
      ]
    },
    {
      id: 'radiator',
      name: 'Radiator',
      price: '£25.00',
      image: '/api/placeholder/300/200',
      description: 'Central heating radiator removal',
      details: [
        'All radiator types',
        'Panel and column radiators',
        'Drainage required',
        'Metal recycling'
      ]
    },
    {
      id: 'water-heater',
      name: 'Water Heater',
      price: '£80.00',
      image: '/api/placeholder/300/200',
      description: 'Water heater and immersion heater removal',
      details: [
        'Electric water heaters',
        'Immersion heaters',
        'Tank and tankless units',
        'Professional handling'
      ]
    },
    {
      id: 'dehumidifier',
      name: 'Dehumidifier',
      price: '£20.00',
      image: '/api/placeholder/300/200',
      description: 'Dehumidifier removal service',
      details: [
        'All dehumidifier types',
        'Portable and fixed units',
        'WEEE compliant disposal',
        'Quick collection'
      ]
    },
    {
      id: 'air-conditioner',
      name: 'Air Conditioner',
      price: '£60.00',
      image: '/api/placeholder/300/200',
      description: 'Air conditioning unit removal',
      details: [
        'Portable AC units',
        'Wall mounted units',
        'Refrigerant safe disposal',
        'Professional handling'
      ]
    },
    {
      id: 'vacuum-cleaner',
      name: 'Vacuum Cleaner',
      price: '£15.00',
      image: '/api/placeholder/300/200',
      description: 'Vacuum cleaner removal service',
      details: [
        'All vacuum types',
        'Upright and cylinder',
        'Robot vacuums',
        'WEEE compliant disposal'
      ]
    },
    {
      id: 'iron',
      name: 'Iron',
      price: '£10.00',
      image: '/api/placeholder/300/200',
      description: 'Iron and steam generator removal',
      details: [
        'Steam irons',
        'Steam generators',
        'Travel irons',
        'WEEE disposal'
      ]
    },
    {
      id: 'toaster',
      name: 'Toaster',
      price: '£10.00',
      image: '/api/placeholder/300/200',
      description: 'Toaster removal service',
      details: [
        'All toaster types',
        '2 and 4 slice toasters',
        'Toaster ovens',
        'Quick collection'
      ]
    },
    {
      id: 'kettle',
      name: 'Kettle',
      price: '£8.00',
      image: '/api/placeholder/300/200',
      description: 'Electric kettle removal service',
      details: [
        'Electric kettles',
        'All sizes and types',
        'WEEE compliant disposal',
        'Same day collection'
      ]
    },
    {
      id: 'blender',
      name: 'Blender',
      price: '£12.00',
      image: '/api/placeholder/300/200',
      description: 'Blender and food processor removal',
      details: [
        'Blenders and mixers',
        'Food processors',
        'Juicers',
        'Kitchen appliances'
      ]
    },
    {
      id: 'heater',
      name: 'Electric Heater',
      price: '£25.00',
      image: '/api/placeholder/300/200',
      description: 'Electric heater removal service',
      details: [
        'Portable electric heaters',
        'Panel heaters',
        'Storage heaters',
        'Safe disposal'
      ]
    },
    {
      id: 'fan',
      name: 'Fan',
      price: '£15.00',
      image: '/api/placeholder/300/200',
      description: 'Electric fan removal service',
      details: [
        'Ceiling fans',
        'Pedestal fans',
        'Tower fans',
        'All fan types'
      ]
    },
    {
      id: 'sewing-machine',
      name: 'Sewing Machine',
      price: '£20.00',
      image: '/api/placeholder/300/200',
      description: 'Sewing machine removal service',
      details: [
        'Electric sewing machines',
        'Overlock machines',
        'Vintage machines',
        'Professional handling'
      ]
    },
    {
      id: 'exercise-bike',
      name: 'Exercise Bike',
      price: '£50.00',
      image: '/api/placeholder/300/200',
      description: 'Exercise bike removal service',
      details: [
        'Stationary bikes',
        'Spin bikes',
        'Recumbent bikes',
        'Heavy lifting included'
      ]
    },
    {
      id: 'treadmill',
      name: 'Treadmill',
      price: '£100.00',
      image: '/api/placeholder/300/200',
      description: 'Treadmill removal service',
      details: [
        'Electric treadmills',
        'Manual treadmills',
        'Commercial grade',
        'Dismantling included'
      ]
    },
    {
      id: 'rowing-machine',
      name: 'Rowing Machine',
      price: '£60.00',
      image: '/api/placeholder/300/200',
      description: 'Rowing machine removal service',
      details: [
        'All rowing machine types',
        'Air and water resistance',
        'Folding models',
        'Professional handling'
      ]
    },
    {
      id: 'multi-gym',
      name: 'Multi Gym',
      price: '£120.00',
      image: '/api/placeholder/300/200',
      description: 'Multi gym equipment removal',
      details: [
        'Home gym equipment',
        'Weight stations',
        'Complete dismantling',
        'Heavy lifting team'
      ]
    }
  ];

  const sortedServices = [...applianceServices].sort((a, b) => {
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
      <section className="bg-gradient-to-r from-teal-400 to-teal-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="text-left max-w-lg">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Appliance Removal
              </h1>
              <p className="text-xl text-teal-100 leading-relaxed">
                Old washing machines, cookers or white goods to get rid of? Get in touch and we'll clear away your unwanted appliances.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                {/* Appliance Illustration */}
                <div className="w-96 h-64 flex items-center justify-center">
                  <div className="relative">
                    <div className="text-8xl">🔌</div>
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
                  <button className="w-full flex items-center p-3 rounded-lg text-left transition-colors bg-primary text-white">
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
                    onClick={() => navigate('/old-batteries-disposal')}
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
                    onClick={() => navigate('/table-removal')}
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
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:border-teal-300 transition-all duration-300 group"
                  >
                    {/* Service Image */}
                    <div className="h-48 bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center border-b border-teal-200 group-hover:from-teal-100 group-hover:to-teal-200 transition-all duration-300">
                      {service.id.includes('fridge') ? (
                        <div className="text-6xl">❄️</div>
                      ) : service.id.includes('bbq') ? (
                        <div className="text-6xl">🔥</div>
                      ) : service.id === 'bike' ? (
                        <div className="text-6xl">🚴‍♂️</div>
                      ) : service.id.includes('coffee-machine') ? (
                        <div className="text-6xl">☕</div>
                      ) : service.id.includes('cooker') || service.id.includes('oven') ? (
                        <div className="text-6xl">🔥</div>
                      ) : service.id === 'cross-trainer' ? (
                        <div className="text-6xl">🏃‍♂️</div>
                      ) : service.id === 'dishwasher' ? (
                        <div className="text-6xl">🍽️</div>
                      ) : service.id === 'washing-machine' ? (
                        <div className="text-6xl">🌀</div>
                      ) : service.id === 'tumble-dryer' ? (
                        <div className="text-6xl">💨</div>
                      ) : service.id === 'microwave' ? (
                        <div className="text-6xl">📦</div>
                      ) : service.id.includes('exercise') || service.id.includes('gym') || service.id.includes('trainer') || service.id.includes('treadmill') || service.id.includes('rowing') ? (
                        <div className="text-6xl">💪</div>
                      ) : service.id === 'vacuum-cleaner' ? (
                        <div className="text-6xl">🧹</div>
                      ) : (
                        <div className="text-6xl">🔌</div>
                      )}
                    </div>
                    
                    {/* Service Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
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
                          <p className="text-xs text-red-700 mt-1 line-clamp-3">{service.warningNote}</p>
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
                            <svg className="w-3 h-3 text-teal-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                            {detail}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-teal-600">
                          {service.price}
                        </div>
                        <button
                          onClick={() => navigate('/quote')}
                          className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-5 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-2"
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
                        ? 'bg-teal-500 text-white'
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
                        className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call Us
                      </button>
                      <button 
                        onClick={() => navigate('/quote')}
                        className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
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
              <div className="bg-teal-600 p-2 rounded-lg">
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
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApplianceRemoval;