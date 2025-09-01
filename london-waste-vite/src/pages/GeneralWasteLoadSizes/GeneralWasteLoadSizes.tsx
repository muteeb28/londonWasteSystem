import React, { useState } from 'react';
import Header from '../../components/Header/Header';

const GeneralWasteLoadSizes: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const services = [
    {
      id: 1,
      title: "1/2 Load",
      subtitle: "– Half van Load",
      description: "– Medium Load\n– Max. weight 500kg\n– Equivalent space to 16 washing machines\n– Includes labour for up to 45 minutes",
      price: "£225.00",
      image: "category image"
    },
    {
      id: 2,
      title: "1/4 Load",
      subtitle: "– Quarter Load",
      description: "– Max. weight 250kg\n– Equivalent space to 8 washing machines\n– Includes labour for 30 minutes",
      price: "£127.99",
      image: "category image"
    },
    {
      id: 3,
      title: "1100 Litre Bin",
      subtitle: "– Max. weight 200kg",
      description: "– No Garden or Construction Waste",
      price: "£80.00",
      image: "category image"
    },
    {
      id: 4,
      title: "3/4 Load",
      subtitle: "– Three quarter van Load",
      description: "– Max. weight 750kg\n– Equivalent space to 24 washing machines\n– Includes labour for up to 60 minutes",
      price: "£285.00",
      image: "category image"
    },
    {
      id: 5,
      title: "660 Litre Bin",
      subtitle: "– Max. weight 100kg",
      description: "– No Garden or Construction Waste",
      price: "£50.00",
      image: "category image"
    },
    {
      id: 6,
      title: "Empty flattened cardboard box",
      subtitle: "Adjust quantity accordingly",
      description: "",
      price: "£2.00",
      image: "category image"
    },
    {
      id: 7,
      title: "Garden Waste Bag",
      subtitle: "Max. weight per bag is 25kg",
      description: "Does not include Tonne bags, if unsure email photos to hello@londonwastemanagement.com",
      price: "£20.00",
      image: "category image"
    },
    {
      id: 8,
      title: "General Waste Bags",
      subtitle: "– Max. weight per bag 5kg",
      description: "– Price per bag (adjust quantity accordingly)",
      price: "£5.00",
      image: "category image"
    },
    {
      id: 9,
      title: "Household Wheelie Bin",
      subtitle: "– Household general waste only",
      description: "– No Garden or Construction Waste",
      price: "£30.00",
      image: "category image"
    },
    {
      id: 10,
      title: "Large Load",
      subtitle: "– Bigger than most skips",
      description: "– Includes labour for 75 minutes\n– Equivalent space to 32 washing machines\n– Max. weight limit 1000kg",
      price: "£350.00",
      image: "category image"
    },
    {
      id: 11,
      title: "Mirror",
      subtitle: "If it can't be carried by one person please request a quote",
      description: "",
      price: "£7.50",
      image: "category image"
    },
    {
      id: 12,
      title: "Suitcase",
      subtitle: "suitcase removal",
      description: "-Must be empty",
      price: "£10.00",
      image: "category image"
    },
    {
      id: 13,
      title: "Full Load",
      subtitle: "– Complete van load",
      description: "– Max. weight 1200kg\n– Equivalent space to 40 washing machines\n– Includes labour for up to 90 minutes",
      price: "£420.00",
      image: "category image"
    },
    {
      id: 14,
      title: "Small Items Collection",
      subtitle: "– Miscellaneous small items",
      description: "– Perfect for small clearances\n– Max. weight 50kg",
      price: "£35.00",
      image: "category image"
    },
    {
      id: 15,
      title: "Single Item Collection",
      subtitle: "– One-off item removal",
      description: "– For items not listed elsewhere\n– Quote based on size and weight",
      price: "POA",
      image: "category image"
    }
  ];

  const categories = [
    { name: "Appliance Removal", path: "/appliance-removal" },
    { name: "Builders / Construction Waste Removal", path: "/services" },
    { name: "Electronic Removal", path: "/electronic-removal" },
    { name: "Fridge Removal", path: "/fridge-removal" },
    { name: "Furniture Removal", path: "/furniture-removal" },
    { name: "Garden Waste Removal", path: "/garden-waste-removal" },
    { name: "General Waste & Load Sizes", path: "/general-waste-load-sizes", active: true },
    { name: "Hazardous Waste Removal", path: "/hazardous-waste-removal" },
    { name: "Mattress & Bed Removal", path: "/mattress-bed-removal" },
    { name: "Old Batteries Disposal", path: "/old-batteries-disposal" },
    { name: "Sofa & Chair Removal", path: "/sofa-chair-removal" },
    { name: "Table Removal", path: "/table-removal" }
  ];

  const totalPages = Math.ceil(services.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentServices = services.slice(startIndex, endIndex);
  const totalResults = services.length;
  const startResult = startIndex + 1;
  const endResult = Math.min(endIndex, totalResults);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-600 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">General Waste & Load Sizes</h1>
            <p className="text-xl mb-2">
              Can't decide how to deal with heavy or light rubbish? Call the experts in waste management today to clear that rubbish out of your way!
            </p>
          </div>
        </div>
      </div>

      {/* Why Book Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why book your removal with LWM?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Same/Next Day Collection</h3>
              <p className="text-gray-600">Fast waste removal service for any load size</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fixed Collection Prices</h3>
              <p className="text-gray-600">Transparent pricing for all load sizes</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v0" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Collection From Indoors</h3>
              <p className="text-gray-600">We'll collect your waste from inside your property</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Search By Category</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <a
                    key={index}
                    href={category.path}
                    className={`flex items-center p-3 rounded-lg transition-colors ${
                      category.active 
                        ? 'bg-gray-50 text-gray-700 border border-gray-200' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="w-8 h-8 bg-gray-100 rounded mr-3 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">{category.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Results Info */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing {startResult}–{endResult} of {totalResults} results
              </p>
              <select className="border border-gray-300 rounded-md px-3 py-2 bg-white">
                <option>Default sorting</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Name: A to Z</option>
              </select>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
              {currentServices.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                    <svg className="w-20 h-20 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                    {service.subtitle && (
                      <p className="text-sm text-gray-600 mb-2 font-medium">{service.subtitle}</p>
                    )}
                    {service.description && (
                      <div className="text-sm text-gray-600 mb-3">
                        {service.description.split('\n').map((line, index) => (
                          <p key={index} className="mb-1">{line}</p>
                        ))}
                      </div>
                    )}
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-gray-600">{service.price}</span>
                      <button className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
                        View Product
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center space-x-2 mb-8">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-md ${
                      currentPage === page
                        ? 'bg-gray-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                {currentPage < totalPages && (
                  <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="px-4 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
                  >
                    →
                  </button>
                )}
              </div>
            )}

            {/* Load Size Guide */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">📏 Load Size Guide</h3>
              <div className="grid md:grid-cols-2 gap-4 text-blue-800">
                <div>
                  <h4 className="font-semibold mb-2">Van Load Sizes:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• 1/4 Load = 8 washing machines equivalent</li>
                    <li>• 1/2 Load = 16 washing machines equivalent</li>
                    <li>• 3/4 Load = 24 washing machines equivalent</li>
                    <li>• Full Load = 40 washing machines equivalent</li>
                    <li>• Large Load = 32+ washing machines equivalent</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Weight Limits:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• 1/4 Load: Max 250kg</li>
                    <li>• 1/2 Load: Max 500kg</li>
                    <li>• 3/4 Load: Max 750kg</li>
                    <li>• Large Load: Max 1000kg</li>
                    <li>• Full Load: Max 1200kg</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">⚠️ Important Collection Notes</h3>
              <ul className="space-y-2 text-amber-800">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Bins and wheelie bin services exclude garden waste and construction waste
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Garden waste bags have a maximum weight of 25kg per bag
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  General waste bags have a maximum weight of 5kg per bag
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Suitcases must be completely empty for collection
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Labour time is included with van load services
                </li>
              </ul>
            </div>

            {/* Pricing Information */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-3">💰 Pricing Information</h3>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  All load prices include collection, disposal, and labour time
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Bag services are priced per individual bag - adjust quantity as needed
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  For items requiring quotes, email photos to hello@londonwastemanagement.com
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Bin services are for household waste only
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Fair Pricing Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Fair and simple pricing
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            London Waste Management strives to make the whole process of removing heavy items as simple and hassle-free as possible.
            If you are unsure, please give us a call, or upload a photo so we can give you an instant quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium">
              Call Us
            </button>
            <button className="border-2 border-gray-600 text-gray-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Request Quote
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">London Waste Management</h3>
              <p className="text-gray-400">Professional general waste removal services across London.</p>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="/services" className="hover:text-white">Services</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/general-waste-load-sizes" className="hover:text-white">General Waste & Load Sizes</a></li>
                <li><a href="/hazardous-waste-removal" className="hover:text-white">Hazardous Waste Removal</a></li>
                <li><a href="/furniture-removal" className="hover:text-white">Furniture Removal</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Contact Info</h4>
              <p className="text-gray-400 mb-2">📞 020 8123 4567</p>
              <p className="text-gray-400">📧 hello@londonwastemanagement.com</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 London Waste Management. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneralWasteLoadSizes;