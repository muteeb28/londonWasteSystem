import React from 'react';
import { useNavigate } from 'react-router-dom';

const WhyChooseUs: React.FC = () => {
  const navigate = useNavigate();
  const features = [
    {
      title: 'Immediate Response',
      description: 'Quick response within 2 hours of your call',
      icon: '⚡'
    },
    {
      title: 'Same Day Collections',
      description: 'Available 7 days a week including weekends',
      icon: '📅'
    },
    {
      title: 'Licensed & Insured',
      description: 'Fully certified waste carrier license',
      icon: '✅'
    },
    {
      title: 'Competitive Prices',
      description: 'No hidden costs, transparent pricing',
      icon: '💰'
    },
    {
      title: 'Eco-Friendly',
      description: '95% of waste recycled responsibly',
      icon: '🌱'
    },
    {
      title: 'Professional Team',
      description: 'Trained and uniformed staff',
      icon: '👥'
    },
    {
      title: 'Full Clean Up',
      description: 'We sweep and clean after collection',
      icon: '🧹'
    },
    {
      title: 'Free Quotes',
      description: 'No obligation estimates provided',
      icon: '📋'
    },
    {
      title: 'All Areas Covered',
      description: 'Serving all London boroughs',
      icon: '📍'
    },
    {
      title: 'Heavy Items',
      description: 'Specialist equipment for large items',
      icon: '🏋️'
    },
    {
      title: 'Customer Satisfaction',
      description: '99% customer satisfaction rate',
      icon: '⭐'
    },
    {
      title: 'Flexible Timing',
      description: 'Morning, afternoon or evening slots',
      icon: '🕒'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose London Waste Management?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're London's most trusted waste removal service, committed to providing 
            exceptional service with environmental responsibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border hover:border-primary"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-primary rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6">
              Get your free quote today and experience the difference professional service makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/quote')}
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </button>
              <button 
                onClick={() => window.location.href = 'tel:02081234567'}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                Call: 020 8123 4567
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;