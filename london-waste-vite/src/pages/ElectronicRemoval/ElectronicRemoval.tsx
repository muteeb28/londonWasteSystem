import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const ElectronicRemoval: React.FC = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const services = [
    {
      id: 1,
      title: "BBQ Removal",
      subtitle: "BBQ – Large",
      description: "We cannot remove the gas canister.",
      price: "£75.00",
      image: "category image",
      notes: "Gas canister must be removed separately"
    },
    {
      id: 2,
      title: "BBQ – Small",
      subtitle: "Barbecue",
      description: "",
      price: "£25.00",
      image: "category image"
    },
    {
      id: 3,
      title: "Car Battery",
      subtitle: "",
      description: "",
      price: "£25.00",
      image: "category image"
    },
    {
      id: 4,
      title: "Coffee Machine – Small",
      subtitle: "coffee machine removal",
      description: "",
      price: "£25.00",
      image: "category image"
    },
    {
      id: 5,
      title: "Coffee Machine – Medium",
      subtitle: "coffee machine removal",
      description: "",
      price: "£50.00",
      image: "category image"
    },
    {
      id: 6,
      title: "Computer",
      subtitle: "",
      description: "– Does NOT include the monitor or keyboard and mouse – Please book these items in addition if required",
      price: "£10.00",
      image: "category image"
    },
    {
      id: 7,
      title: "Cross Trainer",
      subtitle: "cross trainer removal",
      description: "",
      price: "£75.00",
      image: "category image"
    },
    {
      id: 8,
      title: "DVD Players / Sky Box",
      subtitle: "dvd player removal",
      description: "",
      price: "£10.00",
      image: "category image"
    },
    {
      id: 9,
      title: "Exercise bike",
      subtitle: "",
      description: "",
      price: "£75.00",
      image: "category image"
    },
    {
      id: 10,
      title: "Fan",
      subtitle: "fan removal",
      description: "",
      price: "£15.00",
      image: "category image"
    },
    {
      id: 11,
      title: "Iron",
      subtitle: "",
      description: "",
      price: "£2.00",
      image: "category image"
    },
    {
      id: 12,
      title: "Keyboard and Mouse",
      subtitle: "",
      description: "",
      price: "£2.00",
      image: "category image"
    },
    {
      id: 13,
      title: "Laptop",
      subtitle: "",
      description: "",
      price: "£10.00",
      image: "category image"
    },
    {
      id: 14,
      title: "Mobile Phone",
      subtitle: "",
      description: "",
      price: "£2.00",
      image: "category image"
    },
    {
      id: 15,
      title: "Monitor – Small",
      subtitle: "Up to 19 inches",
      description: "",
      price: "£15.00",
      image: "category image"
    },
    {
      id: 16,
      title: "Monitor – Large",
      subtitle: "20 inches and above",
      description: "",
      price: "£25.00",
      image: "category image"
    },
    {
      id: 17,
      title: "Printer – Small",
      subtitle: "Desktop printer",
      description: "",
      price: "£15.00",
      image: "category image"
    },
    {
      id: 18,
      title: "Printer – Large",
      subtitle: "Floor standing printer",
      description: "",
      price: "£35.00",
      image: "category image"
    },
    {
      id: 19,
      title: "Radio",
      subtitle: "",
      description: "",
      price: "£5.00",
      image: "category image"
    },
    {
      id: 20,
      title: "Scanner",
      subtitle: "",
      description: "",
      price: "£15.00",
      image: "category image"
    },
    {
      id: 21,
      title: "Stereo System",
      subtitle: "",
      description: "",
      price: "£25.00",
      image: "category image"
    },
    {
      id: 22,
      title: "Tablet",
      subtitle: "",
      description: "",
      price: "£5.00",
      image: "category image"
    },
    {
      id: 23,
      title: "Television – Small",
      subtitle: "Up to 32 inches",
      description: "",
      price: "£25.00",
      image: "category image"
    },
    {
      id: 24,
      title: "Television – Large",
      subtitle: "33 inches and above",
      description: "",
      price: "£50.00",
      image: "category image"
    },
    {
      id: 25,
      title: "Toaster",
      subtitle: "",
      description: "",
      price: "£5.00",
      image: "category image"
    },
    {
      id: 26,
      title: "Vacuum Cleaner",
      subtitle: "",
      description: "",
      price: "£15.00",
      image: "category image"
    },
    {
      id: 27,
      title: "VHS Player",
      subtitle: "",
      description: "",
      price: "£10.00",
      image: "category image"
    },
    {
      id: 28,
      title: "Gaming Console",
      subtitle: "PlayStation, Xbox, Nintendo",
      description: "",
      price: "£15.00",
      image: "category image"
    }
  ];

  const categories = [
    { name: "Appliance Removal", path: "/appliance-removal" },
    { name: "Builders / Construction Waste Removal", path: "/services" },
    { name: "Electronic Removal", path: "/electronic-removal", active: true },
    { name: "Fridge Removal", path: "/fridge-removal" },
    { name: "Furniture Removal", path: "/services" },
    { name: "Garden Waste Removal", path: "/garden-waste-removal" },
    { name: "General Waste & Load Sizes", path: "/services" },
    { name: "Hazardous Waste Removal", path: "/services" },
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
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Electronic Removal</h1>
            <p className="text-xl mb-2">
              Is your old computer or printer causing clutter? Call London Waste Management to remove unwanted electronic devices.
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
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Same/Next Day Collection</h3>
              <p className="text-gray-600">Quick and efficient electronic waste removal service</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fixed Collection Prices</h3>
              <p className="text-gray-600">Transparent pricing with no hidden costs</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v0" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Collection From Indoors</h3>
              <p className="text-gray-600">We'll collect your electronics from inside your property</p>
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
                        ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="w-8 h-8 bg-indigo-100 rounded mr-3 flex items-center justify-center">
                      <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
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
                  <div className="h-48 bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                    <svg className="w-20 h-20 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
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
                    {service.notes && (
                      <div className="bg-yellow-50 border border-yellow-200 rounded-md p-2 mb-3">
                        <p className="text-sm text-yellow-800">⚠️ {service.notes}</p>
                      </div>
                    )}
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-indigo-600">{service.price}</span>
                      <button 
                        onClick={() => navigate(`/product/electronic-${service.id}`)}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                      >
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
                        ? 'bg-indigo-600 text-white'
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

            {/* WEEE Compliance Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">⚡ WEEE Compliance Notice</h3>
              <p className="text-blue-800">
                All electronic items are disposed of in accordance with WEEE (Waste Electrical and Electronic Equipment) regulations. 
                We ensure proper recycling and responsible disposal of all electronic waste to protect the environment.
              </p>
            </div>

            {/* Important Notes */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">📋 Important Collection Notes</h3>
              <ul className="space-y-2 text-amber-800">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Please ensure all personal data is removed from devices before collection
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Remove all batteries from electronic devices where possible
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Computer packages do not include monitors, keyboards, or mice unless specifically booked
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Large items may require dismantling for safe removal
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Fair Pricing Section */}
      <div className="bg-indigo-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Fair and simple pricing
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            London Waste Management strives to make the whole process of removing heavy items as simple and hassle-free as possible.
            If you are unsure, please give us a call, or upload a photo so we can give you an instant quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
              Call Us
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-medium">
              Request Quote
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ElectronicRemoval;