import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const MovingServices: React.FC = () => {
  const services = [
    {
      title: "House Removals",
      description: "Complete residential moving services for homes of all sizes",
      icon: "🏠"
    },
    {
      title: "Furniture & Large Items Delivery",
      description: "Safe transport of furniture and bulky items with professional handling",
      icon: "🛋️"
    },
    {
      title: "Item Transport (Piano Transport)",
      description: "Specialized transport for delicate items including pianos and artwork",
      icon: "🎹"
    },
    {
      title: "Man & Van Service",
      description: "Flexible moving solution perfect for smaller moves and quick deliveries",
      icon: "🚐"
    },
    {
      title: "Office/Commercial Removals",
      description: "Professional business relocation services with minimal downtime",
      icon: "🏢"
    }
  ];

  const features = [
    "Fully insured for your peace of mind",
    "No hidden costs - transparent pricing",
    "Flexible service to meet your needs",
    "Fully equipped modern vehicles",
    "Professional furniture dismantling and reassembling",
    "Available at short notice"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        <div className="bg-green-600 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Moving Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl">
              Professional moving services in London. We handle all the heavy lifting, 
              packing, and transportation to make your move easier and stress-free.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Moving Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Choose Our Moving Services?</h2>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Professional Team</h3>
                <p className="text-gray-600 mb-6">
                  Our experienced team handles all aspects of your move with care and professionalism. 
                  From careful packing to secure transportation, we ensure your belongings arrive 
                  safely at their destination.
                </p>
                <div className="bg-green-600 text-white p-4 rounded-lg">
                  <p className="font-semibold">Available at Short Notice</p>
                  <p className="text-sm">Contact us for same-day and next-day moving services</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Move?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get a free quote for your moving needs. Our team is ready to make your move 
              as smooth and stress-free as possible.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <a 
                href="/quote" 
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Get Free Quote
              </a>
              <a 
                href="/contact" 
                className="inline-block bg-white text-green-600 border-2 border-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MovingServices;