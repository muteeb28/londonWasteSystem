import React, { useState } from 'react';
import Header from '../../components/Header/Header';

const HazardousWasteRemoval: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const services = [
    {
      id: 1,
      title: "Asbestos Removal",
      subtitle: "Licensed asbestos disposal",
      description: "Requires specialist handling and certification",
      price: "POA",
      image: "category image",
      specialHandling: "Licensed disposal only"
    },
    {
      id: 2,
      title: "Paint Tins",
      subtitle: "Oil-based and water-based paints",
      description: "",
      price: "£5.00",
      image: "category image"
    },
    {
      id: 3,
      title: "Chemical Containers",
      subtitle: "Household cleaning products",
      description: "",
      price: "£8.00",
      image: "category image"
    },
    {
      id: 4,
      title: "Fluorescent Tubes",
      subtitle: "Light tubes and bulbs",
      description: "",
      price: "£3.00",
      image: "category image"
    },
    {
      id: 5,
      title: "Motor Oil",
      subtitle: "Used engine oil containers",
      description: "",
      price: "£6.00",
      image: "category image"
    },
    {
      id: 6,
      title: "Gas Cylinders",
      subtitle: "Empty gas bottles",
      description: "Must be completely empty",
      price: "£25.00",
      image: "category image",
      notes: "Must be empty and valve accessible"
    },
    {
      id: 7,
      title: "Fire Extinguishers",
      subtitle: "Used or expired extinguishers",
      description: "",
      price: "£15.00",
      image: "category image"
    },
    {
      id: 8,
      title: "Pesticides/Herbicides",
      subtitle: "Garden chemicals",
      description: "",
      price: "£10.00",
      image: "category image"
    },
    {
      id: 9,
      title: "Aerosol Cans",
      subtitle: "Empty aerosol containers",
      description: "",
      price: "£2.00",
      image: "category image"
    },
    {
      id: 10,
      title: "Medical Waste",
      subtitle: "Sharps and medical supplies",
      description: "Requires special disposal protocol",
      price: "POA",
      image: "category image",
      specialHandling: "Medical waste license required"
    },
    {
      id: 11,
      title: "Thermostats",
      subtitle: "Mercury-containing thermostats",
      description: "",
      price: "£8.00",
      image: "category image"
    },
    {
      id: 12,
      title: "Antifreeze",
      subtitle: "Used antifreeze containers",
      description: "",
      price: "£7.00",
      image: "category image"
    },
    {
      id: 13,
      title: "Smoke Detectors",
      subtitle: "Radioactive smoke alarms",
      description: "",
      price: "£12.00",
      image: "category image"
    },
    {
      id: 14,
      title: "Mercury Items",
      subtitle: "Mercury-containing devices",
      description: "Thermometers, switches, etc.",
      price: "£15.00",
      image: "category image"
    },
    {
      id: 15,
      title: "Heavy Heater",
      subtitle: "Large heating units",
      description: "Property ready for collection required. If removal from inside needed, we bear no responsibility for damage due to significant weight and size",
      price: "£75.00",
      image: "category image",
      notes: "Must be positioned for easy access"
    },
    {
      id: 16,
      title: "Solvent Containers",
      subtitle: "Paint thinners and solvents",
      description: "",
      price: "£9.00",
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
    { name: "General Waste & Load Sizes", path: "/services" },
    { name: "Hazardous Waste Removal", path: "/hazardous-waste-removal", active: true },
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
      <div className="bg-gradient-to-r from-red-600 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Hazardous Waste Removal</h1>
            <p className="text-xl mb-2">
              Removing hazardous waste can be a heavy responsibility. Our team is trained in the safe removal of hazardous waste.
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
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Same/Next Day Collection</h3>
              <p className="text-gray-600">Urgent hazardous waste removal when you need it</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fixed Collection Prices</h3>
              <p className="text-gray-600">Clear pricing for hazardous material disposal</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.8-6.4a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Collection From Indoors</h3>
              <p className="text-gray-600">Safe collection from your property with proper handling</p>
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
                        ? 'bg-red-50 text-red-700 border border-red-200' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="w-8 h-8 bg-red-100 rounded mr-3 flex items-center justify-center">
                      <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
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
                  <div className="h-48 bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center">
                    <svg className="w-20 h-20 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                    {service.subtitle && (
                      <p className="text-sm text-gray-600 mb-2">{service.subtitle}</p>
                    )}
                    {service.description && (
                      <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                    )}
                    {service.specialHandling && (
                      <div className="bg-red-50 border border-red-200 rounded-md p-2 mb-3">
                        <p className="text-sm text-red-800">🚨 {service.specialHandling}</p>
                      </div>
                    )}
                    {service.notes && (
                      <div className="bg-yellow-50 border border-yellow-200 rounded-md p-2 mb-3">
                        <p className="text-sm text-yellow-800">⚠️ {service.notes}</p>
                      </div>
                    )}
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-red-600">{service.price}</span>
                      <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
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
                        ? 'bg-red-600 text-white'
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

            {/* Safety Warning */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-red-900 mb-3">🚨 Safety Requirements</h3>
              <ul className="space-y-2 text-red-800">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  All hazardous materials must be properly contained and labeled
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Gas cylinders and pressurized containers must be completely empty
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Some materials require special licensing and may incur additional costs
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Medical waste and asbestos require specialist collection services
                </li>
              </ul>
            </div>

            {/* Legal Compliance */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">📋 Legal Compliance</h3>
              <p className="text-blue-800">
                All hazardous waste is disposed of in accordance with UK Environmental Regulations and waste management laws. 
                We hold appropriate waste carrier licenses and ensure proper documentation for all hazardous material disposal.
                Certificates of disposal can be provided upon request.
              </p>
            </div>

            {/* Important Notes */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">⚠️ Important Collection Notes</h3>
              <ul className="space-y-2 text-amber-800">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Please provide detailed information about hazardous materials when booking
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Heavy items must be accessible for collection team safety
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Additional charges may apply for items requiring special handling
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  We reserve the right to refuse collection of improperly prepared materials
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Fair Pricing Section */}
      <div className="bg-red-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Fair and simple pricing
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            London Waste Management strives to make the whole process of removing heavy items as simple and hassle-free as possible.
            If you are unsure, please give us a call, or upload a photo so we can give you an instant quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium">
              Call Us
            </button>
            <button className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg hover:bg-red-50 transition-colors font-medium">
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
              <p className="text-gray-400">Professional hazardous waste removal services across London.</p>
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
                <li><a href="/hazardous-waste-removal" className="hover:text-white">Hazardous Waste Removal</a></li>
                <li><a href="/furniture-removal" className="hover:text-white">Furniture Removal</a></li>
                <li><a href="/electronic-removal" className="hover:text-white">Electronic Removal</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Contact Info</h4>
              <p className="text-gray-400 mb-2">📞 020 8123 4567</p>
              <p className="text-gray-400">📧 info@londonwastemanagement.co.uk</p>
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

export default HazardousWasteRemoval;