import React from 'react';
import { useNavigate } from 'react-router-dom';

const Services: React.FC = () => {
  const navigate = useNavigate();
  const services = [
    {
      title: 'House Clearance',
      description: 'Complete property clearance service for homes of all sizes',
      icon: '🏠',
      features: ['Full or partial clearance', 'Same day service', 'Clean up included']
    },
    {
      title: 'Garden Clearance',
      description: 'Professional garden waste removal and landscaping cleanup',
      icon: '🌿',
      features: ['Garden waste removal', 'Tree cutting service', 'Soil & turf removal']
    },
    {
      title: 'Office Clearance',
      description: 'Commercial office clearance and furniture disposal',
      icon: '🏢',
      features: ['IT equipment disposal', 'Furniture removal', 'Document shredding']
    },
    {
      title: 'Construction Waste',
      description: 'Safe removal of construction and renovation debris',
      icon: '🚧',
      features: ['Skip hire alternative', 'Heavy materials', 'Licensed disposal']
    },
    {
      title: 'Rubbish Removal',
      description: 'General household and commercial rubbish collection',
      icon: '🗑️',
      features: ['Any type of waste', 'Load and go service', 'Eco-friendly disposal']
    },
    {
      title: 'Commercial Waste',
      description: 'Regular commercial waste management solutions',
      icon: '🏭',
      features: ['Scheduled collections', 'Bulk discounts', 'Compliance certificates']
    },
    {
      title: 'Furniture Disposal',
      description: 'Responsible furniture removal and donation service',
      icon: '🪑',
      features: ['Heavy lifting', 'Donation options', 'Upholstery recycling']
    },
    {
      title: 'Appliance Removal',
      description: 'Safe disposal of electrical appliances and white goods',
      icon: '📺',
      features: ['WEEE compliant', 'Refrigerant removal', 'Metal recycling']
    },
    {
      title: 'Loft Clearance',
      description: 'Complete attic and loft space clearance service',
      icon: '🏠',
      features: ['Safe access', 'Insulation removal', 'Storage solutions']
    },
    {
      title: 'Garage Clearance',
      description: 'Garage and shed clearance including hazardous items',
      icon: '🚗',
      features: ['Chemical disposal', 'Metal recycling', 'Oil disposal']
    },
    {
      title: 'Shop Clearance',
      description: 'Retail space clearance and shopfitting waste removal',
      icon: '🛒',
      features: ['Fixture removal', 'Stock disposal', 'Retail equipment']
    },
    {
      title: 'Scrap Metal',
      description: 'Competitive prices for all types of scrap metal collection',
      icon: '⚙️',
      features: ['Best prices paid', 'Collection service', 'Licensed dealer']
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Waste Removal Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional waste management solutions tailored to your needs. 
            From single item collection to complete property clearances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow p-6 hover:border-primary"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => navigate('/quote')}
                className="w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Quote
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-600 mb-6">
            Don't see exactly what you need? We offer bespoke waste management solutions 
            for unique requirements. Contact us to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/quote')}
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Discuss Requirements
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              View All Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;