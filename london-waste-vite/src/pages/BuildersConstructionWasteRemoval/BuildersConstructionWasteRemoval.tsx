import React, { useState } from 'react';
import Header from '../../components/Header/Header';

const BuildersConstructionWasteRemoval: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const services = [
    {
      id: 1,
      title: "External Door",
      subtitle: "",
      description: "",
      price: "£50.00",
      image: "category image"
    },
    {
      id: 2,
      title: "Flooring",
      subtitle: "Price per plank (adjust quantity accordingly)",
      description: "",
      price: "£1.00",
      image: "category image"
    },
    {
      id: 3,
      title: "Fluorescent Tube",
      subtitle: "Price per tube/bulb (adjust quantity accordingly)",
      description: "",
      price: "£2.00",
      image: "category image"
    },
    {
      id: 4,
      title: "Insulation",
      subtitle: "– Max. length of roll 18ft",
      description: "– Price per roll (adjust quantity accordingly)",
      price: "£10.00",
      image: "category image"
    },
    {
      id: 5,
      title: "Internal Wooden Door",
      subtitle: "We have a separate option for Fire Doors",
      description: "",
      price: "£10.00",
      image: "category image"
    },
    {
      id: 6,
      title: "Fire Door",
      subtitle: "Specialist fire door disposal",
      description: "",
      price: "£25.00",
      image: "category image"
    },
    {
      id: 7,
      title: "Plasterboard",
      subtitle: "Price per sheet (adjust quantity accordingly)",
      description: "",
      price: "£3.00",
      image: "category image"
    },
    {
      id: 8,
      title: "Timber/Wood Waste",
      subtitle: "General construction timber",
      description: "Price per cubic meter",
      price: "£45.00",
      image: "category image"
    },
    {
      id: 9,
      title: "Concrete Blocks",
      subtitle: "Construction concrete waste",
      description: "Price per tonne",
      price: "£65.00",
      image: "category image"
    },
    {
      id: 10,
      title: "Bricks",
      subtitle: "Clean brick waste",
      description: "Price per tonne",
      price: "£55.00",
      image: "category image"
    },
    {
      id: 11,
      title: "Roofing Tiles",
      subtitle: "Clay or concrete tiles",
      description: "Price per square meter",
      price: "£8.00",
      image: "category image"
    },
    {
      id: 12,
      title: "Window Frame",
      subtitle: "Single window frame",
      description: "",
      price: "£20.00",
      image: "category image"
    },
    {
      id: 13,
      title: "Carpet/Underlay",
      subtitle: "Construction site carpet waste",
      description: "Price per square meter",
      price: "£2.50",
      image: "category image"
    },
    {
      id: 14,
      title: "Metal Waste",
      subtitle: "Construction metal scraps",
      description: "Price per kg",
      price: "£0.50",
      image: "category image"
    },
    {
      id: 15,
      title: "Plastic Waste",
      subtitle: "Construction plastic materials",
      description: "Price per bag",
      price: "£8.00",
      image: "category image"
    },
    {
      id: 16,
      title: "Mixed Construction Waste",
      subtitle: "General building waste",
      description: "Price per cubic meter",
      price: "£75.00",
      image: "category image"
    },
    {
      id: 17,
      title: "Bathroom Suite",
      subtitle: "Complete bathroom removal",
      description: "",
      price: "£150.00",
      image: "category image"
    },
    {
      id: 18,
      title: "Kitchen Units",
      subtitle: "Kitchen cabinet removal",
      description: "Price per unit",
      price: "£15.00",
      image: "category image"
    },
    {
      id: 19,
      title: "Scaffolding Boards",
      subtitle: "Used scaffolding planks",
      description: "Price per board",
      price: "£5.00",
      image: "category image"
    },
    {
      id: 20,
      title: "Paint Tins",
      subtitle: "Empty construction paint containers",
      description: "",
      price: "£3.00",
      image: "category image"
    },
    {
      id: 21,
      title: "Rubble/Aggregate",
      subtitle: "Construction rubble waste",
      description: "Price per tonne",
      price: "£35.00",
      image: "category image"
    }
  ];

  const categories = [
    { name: "Appliance Removal", path: "/appliance-removal" },
    { name: "Builders / Construction Waste Removal", path: "/builders-construction-waste-removal", active: true },
    { name: "Electronic Removal", path: "/electronic-removal" },
    { name: "Fridge Removal", path: "/fridge-removal" },
    { name: "Furniture Removal", path: "/furniture-removal" },
    { name: "Garden Waste Removal", path: "/garden-waste-removal" },
    { name: "General Waste & Load Sizes", path: "/general-waste-load-sizes" },
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
      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Builders / Construction Waste Removal</h1>
            <p className="text-xl mb-2">
              Is builders waste piling up? Call us for speedy and efficient construction waste removal.
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
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Same/Next Day Collection</h3>
              <p className="text-gray-600">Rapid construction waste clearance to keep your site moving</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fixed Collection Prices</h3>
              <p className="text-gray-600">Transparent pricing for all construction materials</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Collection From Indoors</h3>
              <p className="text-gray-600">We'll collect construction waste from inside your property</p>
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
                        ? 'bg-yellow-50 text-yellow-700 border border-yellow-200' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="w-8 h-8 bg-yellow-100 rounded mr-3 flex items-center justify-center">
                      <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
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
                  <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                    <svg className="w-20 h-20 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
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
                      <span className="text-2xl font-bold text-yellow-600">{service.price}</span>
                      <button className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition-colors">
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
                        ? 'bg-yellow-600 text-white'
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

            {/* Construction Compliance */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">🏗️ Construction Waste Compliance</h3>
              <p className="text-blue-800">
                All construction waste is disposed of in accordance with UK construction industry regulations and environmental standards. 
                We provide proper documentation and certificates for commercial construction projects as required.
              </p>
            </div>

            {/* Important Notes */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">⚠️ Important Collection Notes</h3>
              <ul className="space-y-2 text-amber-800">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Pricing for per-unit items (planks, tubes, rolls) - adjust quantity accordingly
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Insulation rolls maximum length is 18 feet
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Fire doors require separate disposal from regular internal doors
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Heavy construction materials may require special access arrangements
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Asbestos materials require specialist licensed removal - contact us for quotes
                </li>
              </ul>
            </div>

            {/* Material Types */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-3">🔨 Construction Materials We Accept</h3>
              <div className="grid md:grid-cols-3 gap-4 text-green-800">
                <div>
                  <h4 className="font-semibold mb-2">Structural Materials:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Timber and wood waste</li>
                    <li>• Concrete blocks</li>
                    <li>• Bricks and rubble</li>
                    <li>• Metal waste and scraps</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Interior Materials:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Doors and window frames</li>
                    <li>• Flooring and carpet</li>
                    <li>• Plasterboard</li>
                    <li>• Kitchen and bathroom units</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Specialized Items:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Insulation materials</li>
                    <li>• Roofing tiles</li>
                    <li>• Scaffolding boards</li>
                    <li>• Paint containers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fair Pricing Section */}
      <div className="bg-yellow-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Fair and simple pricing
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            London Waste Management strives to make the whole process of removing heavy items as simple and hassle-free as possible.
            If you are unsure, please give us a call, or upload a photo so we can give you an instant quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-600 text-white px-8 py-3 rounded-lg hover:bg-yellow-700 transition-colors font-medium">
              Call Us
            </button>
            <button className="border-2 border-yellow-600 text-yellow-600 px-8 py-3 rounded-lg hover:bg-yellow-50 transition-colors font-medium">
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
              <p className="text-gray-400">Professional construction waste removal services across London.</p>
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
                <li><a href="/builders-construction-waste-removal" className="hover:text-white">Construction Waste Removal</a></li>
                <li><a href="/general-waste-load-sizes" className="hover:text-white">General Waste & Load Sizes</a></li>
                <li><a href="/hazardous-waste-removal" className="hover:text-white">Hazardous Waste Removal</a></li>
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

export default BuildersConstructionWasteRemoval;