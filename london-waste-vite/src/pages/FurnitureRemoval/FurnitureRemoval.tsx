import React, { useState } from 'react';
import Header from '../../components/Header/Header';

const FurnitureRemoval: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const services = [
    {
      id: 1,
      title: "2 Seater Sofa",
      subtitle: "",
      description: "",
      price: "£60.00",
      image: "category image"
    },
    {
      id: 2,
      title: "3 Seater Sofa",
      subtitle: "",
      description: "",
      price: "£70.00",
      image: "category image"
    },
    {
      id: 3,
      title: "Armchair",
      subtitle: "",
      description: "",
      price: "£50.00",
      image: "category image"
    },
    {
      id: 4,
      title: "Bedside Table",
      subtitle: "",
      description: "",
      price: "£10.00",
      image: "category image"
    },
    {
      id: 5,
      title: "Bookshelf *LARGE SIZE*",
      subtitle: "Width 60cm or wider",
      description: "",
      price: "£55.00",
      image: "category image"
    },
    {
      id: 6,
      title: "Bookshelf *SMALL SIZE*",
      subtitle: "Max. width 60cm",
      description: "Max. height 6ft",
      price: "£20.00",
      image: "category image"
    },
    {
      id: 7,
      title: "Chest of Drawers",
      subtitle: "",
      description: "",
      price: "£20.00",
      image: "category image"
    },
    {
      id: 8,
      title: "Coffee Table",
      subtitle: "",
      description: "",
      price: "£20.00",
      image: "category image"
    },
    {
      id: 9,
      title: "Corner Sofa",
      subtitle: "– Maximum 5 seats",
      description: "– Book a \"Large Corner Sofa\" if you have more than 5 seats",
      price: "£95.00",
      image: "category image"
    },
    {
      id: 10,
      title: "Cots",
      subtitle: "Includes baby mattress",
      description: "",
      price: "£45.00",
      image: "category image"
    },
    {
      id: 11,
      title: "Cushions",
      subtitle: "",
      description: "",
      price: "£1.50",
      image: "category image"
    },
    {
      id: 12,
      title: "Dining Chair",
      subtitle: "",
      description: "",
      price: "£7.50",
      image: "category image"
    },
    {
      id: 13,
      title: "Dining Table – Small",
      subtitle: "2-4 seater dining table",
      description: "",
      price: "£35.00",
      image: "category image"
    },
    {
      id: 14,
      title: "Dining Table – Large",
      subtitle: "6+ seater dining table",
      description: "",
      price: "£65.00",
      image: "category image"
    },
    {
      id: 15,
      title: "Dresser",
      subtitle: "Bedroom dresser with drawers",
      description: "",
      price: "£50.00",
      image: "category image"
    },
    {
      id: 16,
      title: "Entertainment Unit",
      subtitle: "TV stand or entertainment center",
      description: "",
      price: "£35.00",
      image: "category image"
    },
    {
      id: 17,
      title: "Filing Cabinet",
      subtitle: "Office filing cabinet",
      description: "",
      price: "£25.00",
      image: "category image"
    },
    {
      id: 18,
      title: "Footstool",
      subtitle: "Small footstool or ottoman",
      description: "",
      price: "£15.00",
      image: "category image"
    },
    {
      id: 19,
      title: "Large Corner Sofa",
      subtitle: "More than 5 seats",
      description: "",
      price: "£120.00",
      image: "category image"
    },
    {
      id: 20,
      title: "Office Chair",
      subtitle: "Desk or office chair",
      description: "",
      price: "£20.00",
      image: "category image"
    },
    {
      id: 21,
      title: "Office Desk",
      subtitle: "Standard office desk",
      description: "",
      price: "£40.00",
      image: "category image"
    },
    {
      id: 22,
      title: "Rocking Chair",
      subtitle: "Traditional rocking chair",
      description: "",
      price: "£35.00",
      image: "category image"
    },
    {
      id: 23,
      title: "Shelving Unit",
      subtitle: "Standalone shelving unit",
      description: "",
      price: "£30.00",
      image: "category image"
    },
    {
      id: 24,
      title: "Side Table",
      subtitle: "Small side or end table",
      description: "",
      price: "£15.00",
      image: "category image"
    },
    {
      id: 25,
      title: "Storage Chest",
      subtitle: "Wooden or fabric storage chest",
      description: "",
      price: "£25.00",
      image: "category image"
    },
    {
      id: 26,
      title: "Wardrobe – Small",
      subtitle: "Single door wardrobe",
      description: "",
      price: "£50.00",
      image: "category image"
    },
    {
      id: 27,
      title: "Wardrobe – Large",
      subtitle: "Double or triple door wardrobe",
      description: "",
      price: "£85.00",
      image: "category image"
    },
    {
      id: 28,
      title: "Wine Rack",
      subtitle: "Wooden or metal wine rack",
      description: "",
      price: "£18.00",
      image: "category image"
    }
  ];

  const categories = [
    { name: "Appliance Removal", path: "/appliance-removal" },
    { name: "Builders / Construction Waste Removal", path: "/services" },
    { name: "Electronic Removal", path: "/electronic-removal" },
    { name: "Fridge Removal", path: "/fridge-removal" },
    { name: "Furniture Removal", path: "/furniture-removal", active: true },
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
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Furniture Removal</h1>
            <p className="text-xl mb-2">
              Does the thought of removing heavy furniture do your back in? Get in touch and we'll take care of all your furniture removal needs.
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
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Same/Next Day Collection</h3>
              <p className="text-gray-600">Quick furniture removal when you need it most</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fixed Collection Prices</h3>
              <p className="text-gray-600">No hidden fees or surprise charges</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v0" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Collection From Indoors</h3>
              <p className="text-gray-600">We'll carry your furniture from inside your home</p>
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
                        ? 'bg-orange-50 text-orange-700 border border-orange-200' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="w-8 h-8 bg-orange-100 rounded mr-3 flex items-center justify-center">
                      <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v0" />
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
                  <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                    <svg className="w-20 h-20 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v0" />
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
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-orange-600">{service.price}</span>
                      <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors">
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
                        ? 'bg-orange-600 text-white'
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

            {/* Important Notes */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">📋 Important Collection Notes</h3>
              <ul className="space-y-2 text-amber-800">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Large furniture items may need to be dismantled for removal
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Please ensure clear access routes for our collection team
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Heavy items may require additional handling charges if access is restricted
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  We can collect furniture from any room in your property
                </li>
              </ul>
            </div>

            {/* Weight Restrictions */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-red-900 mb-3">⚠️ Weight and Size Restrictions</h3>
              <ul className="space-y-2 text-red-800">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Items over 100kg may require special handling arrangements
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Piano removal requires a separate specialist service quote
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Built-in furniture may require additional dismantling charges
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Fair Pricing Section */}
      <div className="bg-orange-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Fair and simple pricing
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            London Waste Management strives to make the whole process of removing heavy items as simple and hassle-free as possible.
            If you are unsure, please give us a call, or upload a photo so we can give you an instant quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium">
              Call Us
            </button>
            <button className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors font-medium">
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
              <p className="text-gray-400">Professional furniture removal services across London.</p>
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
                <li><a href="/furniture-removal" className="hover:text-white">Furniture Removal</a></li>
                <li><a href="/appliance-removal" className="hover:text-white">Appliance Removal</a></li>
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

export default FurnitureRemoval;