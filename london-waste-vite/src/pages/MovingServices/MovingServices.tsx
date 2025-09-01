import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const MovingServices: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    repeatEmail: '',
    pickupLocation: '',
    propertyTypePickup: '',
    dropOffLocation: '',
    propertyTypeDropOff: '',
    packingRequired: 'yes',
    accessInfo: '',
    extraInfo: '',
    files: [] as File[]
  });

  const services = [
    {
      title: "House Removals",
      icon: (
        <svg width="80" height="80" viewBox="0 0 100 100" className="mx-auto mb-4">
          <rect x="20" y="40" width="60" height="40" fill="#4F46E5" stroke="#1E40AF" strokeWidth="2"/>
          <polygon points="20,40 50,20 80,40" fill="#10B981" stroke="#059669" strokeWidth="2"/>
          <rect x="30" y="50" width="15" height="20" fill="#FBBF24" stroke="#F59E0B" strokeWidth="1"/>
          <rect x="55" y="50" width="15" height="15" fill="#60A5FA" stroke="#3B82F6" strokeWidth="1"/>
        </svg>
      )
    },
    {
      title: "Furniture & Large Items Delivery", 
      icon: (
        <svg width="80" height="80" viewBox="0 0 100 100" className="mx-auto mb-4">
          <rect x="15" y="50" width="70" height="25" rx="5" fill="#8B5CF6" stroke="#7C3AED" strokeWidth="2"/>
          <circle cx="25" cy="65" r="8" fill="#374151" stroke="#1F2937" strokeWidth="2"/>
          <circle cx="75" cy="65" r="8" fill="#374151" stroke="#1F2937" strokeWidth="2"/>
          <rect x="20" y="35" width="40" height="15" rx="2" fill="#F59E0B" stroke="#D97706" strokeWidth="1"/>
        </svg>
      )
    },
    {
      title: "Item Transport",
      icon: (
        <svg width="80" height="80" viewBox="0 0 100 100" className="mx-auto mb-4">
          <rect x="25" y="40" width="50" height="35" rx="3" fill="#EC4899" stroke="#DB2777" strokeWidth="2"/>
          <rect x="30" y="45" width="40" height="5" fill="#FBBF24"/>
          <rect x="30" y="55" width="40" height="5" fill="#FBBF24"/>
          <rect x="30" y="65" width="40" height="5" fill="#FBBF24"/>
          <rect x="40" y="25" width="20" height="15" fill="#10B981" stroke="#059669" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "Man & Van Service",
      icon: (
        <svg width="80" height="80" viewBox="0 0 100 100" className="mx-auto mb-4">
          <rect x="15" y="45" width="50" height="30" rx="5" fill="#06B6D4" stroke="#0891B2" strokeWidth="2"/>
          <rect x="65" y="50" width="20" height="25" rx="3" fill="#06B6D4" stroke="#0891B2" strokeWidth="2"/>
          <circle cx="25" cy="75" r="6" fill="#374151" stroke="#1F2937" strokeWidth="2"/>
          <circle cx="75" cy="75" r="6" fill="#374151" stroke="#1F2937" strokeWidth="2"/>
          <rect x="20" y="50" width="15" height="10" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1"/>
        </svg>
      )
    },
    {
      title: "Office / Commercial Removals",
      icon: (
        <svg width="80" height="80" viewBox="0 0 100 100" className="mx-auto mb-4">
          <rect x="25" y="20" width="50" height="55" fill="#10B981" stroke="#059669" strokeWidth="2"/>
          <rect x="30" y="25" width="8" height="8" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1"/>
          <rect x="42" y="25" width="8" height="8" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1"/>
          <rect x="54" y="25" width="8" height="8" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1"/>
          <rect x="30" y="37" width="8" height="8" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1"/>
          <rect x="42" y="37" width="8" height="8" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1"/>
          <rect x="54" y="37" width="8" height="8" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1"/>
          <rect x="35" y="55" width="30" height="20" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="1"/>
        </svg>
      )
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      packingRequired: e.target.value
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setFormData(prev => ({
        ...prev,
        files: [...prev.files, ...filesArray]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">Moving Services</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-20">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                {service.icon}
                <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Are You Tired Of The Hassle And Stress That Comes With Moving Or Decluttering?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Look no further! Our professional removal services are here to make your life easier. Whether you're relocating to a new home or simply need to clear out some space, our experienced team will handle all the heavy lifting, packing, and transportation for you. We take great care in handling your belongings, ensuring their safe arrival to their new destination. With our reliable and efficient service, you can sit back, relax, and leave the hard work to us.
              </p>
              <div className="relative">
                <svg width="300" height="200" viewBox="0 0 300 200" className="mx-auto">
                  <circle cx="80" cy="80" r="60" fill="#E0F2FE" stroke="#0891B2" strokeWidth="2"/>
                  <path d="M50 80 L70 100 L110 60" stroke="#059669" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="20" y="140" width="120" height="8" rx="4" fill="#E5E7EB"/>
                  <rect x="20" y="155" width="80" height="8" rx="4" fill="#E5E7EB"/>
                  <rect x="20" y="170" width="100" height="8" rx="4" fill="#E5E7EB"/>
                  
                  <rect x="180" y="60" width="80" height="100" rx="8" fill="#3B82F6"/>
                  <rect x="190" y="70" width="60" height="6" rx="3" fill="#DBEAFE"/>
                  <rect x="190" y="85" width="60" height="6" rx="3" fill="#DBEAFE"/>
                  <rect x="190" y="100" width="60" height="6" rx="3" fill="#DBEAFE"/>
                  <circle cx="220" cy="160" r="25" fill="#1F2937" stroke="#374151" strokeWidth="2"/>
                  <circle cx="220" cy="160" r="15" fill="#E5E7EB"/>
                  <path d="M215 160 L220 165 L230 150" stroke="#059669" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Number<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Repeat Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="repeatEmail"
                    value={formData.repeatEmail}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pick up Location<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Property Type of Pick Up Location<span className="text-red-500">*</span>
                  </label>
                  <select
                    name="propertyTypePickup"
                    value={formData.propertyTypePickup}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  >
                    <option value="">--Please choose an option--</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="office">Office</option>
                    <option value="storage">Storage Unit</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Drop Off Location<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="dropOffLocation"
                    value={formData.dropOffLocation}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Property Type of Drop Off Location<span className="text-red-500">*</span>
                  </label>
                  <select
                    name="propertyTypeDropOff"
                    value={formData.propertyTypeDropOff}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  >
                    <option value="">--Please choose an option--</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="office">Office</option>
                    <option value="storage">Storage Unit</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Is Packing Required<span className="text-red-500">*</span>
                  </label>
                  <div className="flex space-x-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="packingRequired"
                        value="yes"
                        checked={formData.packingRequired === 'yes'}
                        onChange={handleRadioChange}
                        className="mr-2"
                      />
                      Yes
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="packingRequired"
                        value="no"
                        checked={formData.packingRequired === 'no'}
                        onChange={handleRadioChange}
                        className="mr-2"
                      />
                      No
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    What is access like on both sides?
                  </label>
                  <textarea
                    name="accessInfo"
                    value={formData.accessInfo}
                    onChange={handleInputChange}
                    placeholder="Detail if there is lift access and how many flights of stairs there are"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Upload an image or Video of item
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <div className="mb-4">
                      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Drag & Drop Files Here</h3>
                    <p className="text-sm text-gray-500 mb-2">or</p>
                    <label className="inline-block bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600">
                      Browse Files
                      <input
                        type="file"
                        multiple
                        accept="image/*,video/*,.jpeg,.jpg,.png,.gif,.mp4"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                    <p className="text-xs text-gray-400 mt-2">Supported formats: JPEG, PNG, GIF, MP4</p>
                    <p className="text-xs text-gray-400">0 of 10</p>
                  </div>
                  {formData.files.length > 0 && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-600">Selected files:</p>
                      <ul className="text-sm text-gray-500">
                        {formData.files.map((file, index) => (
                          <li key={index}>{file.name}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Extra Info
                  </label>
                  <textarea
                    name="extraInfo"
                    value={formData.extraInfo}
                    onChange={handleInputChange}
                    placeholder="Any extra information you want to convey"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="notRobot"
                    className="mr-2"
                    required
                  />
                  <label htmlFor="notRobot" className="text-sm text-gray-700">
                    I'm not a robot (reCAPTCHA)
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-700 transition-colors"
                >
                  Request Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MovingServices;