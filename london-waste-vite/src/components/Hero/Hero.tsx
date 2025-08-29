import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const serviceCategories = [
    { name: 'House Clearance', icon: '🏠' },
    { name: 'Garden Clearance', icon: '🌿' },
    { name: 'Office Clearance', icon: '🏢' },
    { name: 'Construction Waste', icon: '🚧' },
    { name: 'Rubbish Removal', icon: '🗑️' },
    { name: 'Commercial Waste', icon: '🏭' },
  ];

  return (
    <section className="bg-gradient-to-br from-light-blue to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            London's Premier
            <span className="text-primary block">Waste Management Service</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Fast, reliable, and eco-friendly waste removal services across London. 
            Same-day collection available with transparent pricing and professional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => navigate('/quote')}
              className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Request Free Quote
            </button>
            <button 
              onClick={() => window.location.href = 'tel:02081234567'}
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Call Now: 020 8123 4567
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {serviceCategories.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow cursor-pointer border hover:border-primary"
            >
              <div className="text-3xl mb-2">{service.icon}</div>
              <div className="text-sm font-medium text-gray-700">{service.name}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-primary rounded-full p-4 mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Same Day Service</h3>
              <p className="text-gray-600">Quick response within 2 hours</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary rounded-full p-4 mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully certified waste carriers</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary rounded-full p-4 mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">95% recycling rate guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;