import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const handleGetQuote = () => {
    // Navigate to quote form page
    navigate('/quote');
    setIsMenuOpen(false);
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:02081234567';
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <div className="flex items-center space-x-3">
              <div className="bg-green-600 p-2 rounded-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-green-600">
                London Waste Management
              </div>
            </div>
          </div>

          <nav className="hidden md:flex space-x-2">
            <button onClick={() => navigate('/')} className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg font-medium transition-colors">
              Home
            </button>
            <div className="relative group">
              <button className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg font-medium flex items-center transition-colors">
                Services
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-200">
                <div className="py-2">
                  <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600">House Clearance</button>
                  <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600">Garden Clearance</button>
                  <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600">Office Clearance</button>
                  <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600">Construction Waste</button>
                  <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600">Rubbish Removal</button>
                  <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600">Commercial Waste</button>
                  <hr className="my-1 border-gray-200" />
                  <button onClick={() => navigate('/moving-services')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 font-medium">Moving Services</button>
                </div>
              </div>
            </div>
            <button onClick={() => scrollToSection('about')} className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg font-medium transition-colors">
              About
            </button>
            <button onClick={() => navigate('/contact')} className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg font-medium transition-colors">
              Contact
            </button>
            <button onClick={() => navigate('/blog')} className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg font-medium transition-colors">
              Blog
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={handlePhoneClick}
              className="text-lg font-bold text-green-600 hover:text-green-700 transition-colors cursor-pointer flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              020 8123 4567
            </button>
            <button 
              onClick={handleGetQuote}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium shadow-md hover:shadow-lg"
            >
              Get Quote
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              <button onClick={() => navigate('/')} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium rounded-lg">Home</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium rounded-lg">Services</button>
              <button onClick={() => navigate('/moving-services')} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium rounded-lg">Moving Services</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium rounded-lg">About</button>
              <button onClick={() => navigate('/contact')} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium rounded-lg">Contact</button>
              <button onClick={() => navigate('/blog')} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium rounded-lg">Blog</button>
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <button 
                  onClick={handlePhoneClick}
                  className="text-lg font-bold text-green-600 hover:text-green-700 transition-colors flex items-center px-4"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  020 8123 4567
                </button>
                <button 
                  onClick={handleGetQuote}
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium shadow-md"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;