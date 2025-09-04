import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useCart } from '../../context/CartContext';

interface FormData {
  // Collection Details
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  confirmEmail: string;
  businessName: string;
  
  // Collection Address
  addressFirstName: string;
  addressLastName: string;
  streetAddress: string;
  apartment: string;
  city: string;
  county: string;
  postcode: string;
  
  // Collection Date & Time
  collectionDate: string;
  timeSlot: string;
  
  // Additional Information
  orderNotes: string;
  
  // Payment
  paymentMethod: string;
  payDeposit: boolean;
  agreeTerms: boolean;
}

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useCart();
  const [showCouponInput, setShowCouponInput] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    confirmEmail: '',
    businessName: '',
    addressFirstName: '',
    addressLastName: '',
    streetAddress: '',
    apartment: '',
    city: 'London',
    county: '',
    postcode: '',
    collectionDate: '4 September, 2025',
    timeSlot: '07:00 - 12:00',
    orderNotes: 'Delivery to collection',
    paymentMethod: 'paypal',
    payDeposit: false,
    agreeTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const subtotal = state.totalPrice;
  const vat = subtotal * 0.2;
  const total = subtotal + vat;

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">No items in cart</h1>
            <p className="text-gray-600 mb-8">Add some items to proceed to checkout</p>
            <button
              onClick={() => navigate('/services')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Browse Services
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Location Notice */}
        <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 mb-6">
          <p className="text-gray-700">Customer matched zone "Locations not covered by your other zones"</p>
        </div>

        {/* Coupon Section */}
        <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 mb-8">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Have a coupon? </span>
            <button 
              onClick={() => setShowCouponInput(!showCouponInput)}
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Click here to enter your code
            </button>
          </div>
          {showCouponInput && (
            <div className="mt-4 flex gap-2">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Coupon code"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                Apply
              </button>
            </div>
          )}
        </div>

        {/* Collection Details */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Collection Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="confirmEmail"
                value={formData.confirmEmail}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Name (optional)
            </label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              placeholder="Your Business Name here..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Collection Address */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Collection Address</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="addressFirstName"
                value={formData.addressFirstName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="addressLastName"
                value={formData.addressLastName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Street address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleInputChange}
              placeholder="House number and street name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
              required
            />
            <input
              type="text"
              name="apartment"
              value={formData.apartment}
              onChange={handleInputChange}
              placeholder="Apartment, suite, unit, etc. (optional)"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Town / City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              County (optional)
            </label>
            <input
              type="text"
              name="county"
              value={formData.county}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Postcode <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="postcode"
              value={formData.postcode}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Collection Date<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="collectionDate"
              value={formData.collectionDate}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-green-50"
              required
            />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time Slot <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => setFormData(prev => ({ ...prev, timeSlot: '07:00 - 12:00' }))}
                className={`p-4 rounded-lg border-2 text-center font-medium transition-colors ${
                  formData.timeSlot === '07:00 - 12:00'
                    ? 'bg-green-500 text-white border-green-500'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-green-300'
                }`}
              >
                07:00 - 12:00
              </button>
              <button
                onClick={() => setFormData(prev => ({ ...prev, timeSlot: '12:00 - 17:00' }))}
                className={`p-4 rounded-lg border-2 text-center font-medium transition-colors ${
                  formData.timeSlot === '12:00 - 17:00'
                    ? 'bg-green-500 text-white border-green-500'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-green-300'
                }`}
              >
                12:00 - 17:00
              </button>
              <button
                onClick={() => setFormData(prev => ({ ...prev, timeSlot: 'Any Time 6:30 AM to 8:30 PM' }))}
                className={`p-4 rounded-lg border-2 text-center font-medium transition-colors ${
                  formData.timeSlot === 'Any Time 6:30 AM to 8:30 PM'
                    ? 'bg-green-500 text-white border-green-500'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-green-300'
                }`}
              >
                Any Time 6:30 AM to 8:30 PM
              </button>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Information</h2>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Order notes (optional)
            </label>
            <textarea
              name="orderNotes"
              value={formData.orderNotes}
              onChange={handleInputChange}
              placeholder="Delivery to collection"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Your Order */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Order</h2>
          
          <div className="bg-green-100 p-4 rounded-lg mb-6">
            <p className="text-green-800 text-sm">
              All items to be left outside and collected anytime during the day receive 10% discount.
            </p>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-4">
              <strong>Scheduled Time Advisory:</strong> Chosen time slots are subject to rare adjustments based on your postcode and our team's coverage schedule. We appreciate your understanding and flexibility. In the unlikely event of any changes, we will notify you at least one day prior to the scheduled collection.
            </p>
            <p className="text-sm text-gray-600">
              If there are more than 2 flights of stairs you maybe subject to further charges (depending on difficulty of access), please{' '}
              <button className="text-blue-600 hover:text-blue-800 underline">get in touch</button> if you have any doubts.
            </p>
          </div>

          {/* Order Summary Table */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Subtotal</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {state.items.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                        <div className="text-sm text-gray-500">Item Position (£18.00): Inside the Property Needs Dismantling</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-900">
                      £{(parseFloat(item.price.replace('£', '')) * item.quantity + 18).toFixed(2)}
                    </td>
                  </tr>
                ))}
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Subtotal</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-bold text-gray-900">
                    £{(subtotal + (state.totalItems * 18)).toFixed(2)}
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">VAT</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-bold text-gray-900">
                    £{((subtotal + (state.totalItems * 18)) * 0.2).toFixed(2)}
                  </td>
                </tr>
                <tr className="bg-gray-50 border-t-2 border-gray-900">
                  <td className="px-6 py-4 whitespace-nowrap text-lg font-bold text-gray-900">Total</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-lg font-bold text-gray-900">
                    £{((subtotal + (state.totalItems * 18)) * 1.2).toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Payment Options */}
          <div className="mt-8">
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="payDeposit"
                name="payDeposit"
                checked={formData.payDeposit}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="payDeposit" className="ml-2 block text-sm text-gray-700">
                Pay Deposit for cash on completion
              </label>
            </div>

            {/* PayPal Option */}
            <div className="mb-4">
              <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={formData.paymentMethod === 'paypal'}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <div className="ml-3 flex items-center">
                  <span className="text-sm font-medium text-gray-900">PayPal</span>
                  <div className="ml-2 flex items-center space-x-1">
                    <img src="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 2.281C5.026 1.833 5.428 1.5 5.886 1.5h5.482c1.756 0 3.239.221 4.413.867 1.141.629 1.738 1.539 1.738 2.778 0 .129-.01.259-.027.388-.802 4.842-3.608 6.75-7.28 6.75H8.553l-.918 5.055a.381.381 0 0 1-.376.314l-.003.001-.18-.008z' fill='%23003087'/%3E%3Cpath d='m12.95 5.848 1.508 8.284a.641.641 0 0 0 .633.5h4.729a.641.641 0 0 0 .633-.74l-1.508-8.284a.641.641 0 0 0-.633-.5h-4.729a.641.641 0 0 0-.633.74z' fill='%23009cde'/%3E%3C/svg%3E" alt="PayPal" className="h-6" />
                    <span className="text-xs text-gray-500">Visa</span>
                    <span className="text-xs text-gray-500">Mastercard</span>
                    <span className="text-xs text-gray-500">American Express</span>
                  </div>
                  <button className="ml-2 text-blue-600 hover:text-blue-800 text-xs underline">What is PayPal?</button>
                </div>
              </label>
              {formData.paymentMethod === 'paypal' && (
                <div className="mt-2 p-3 bg-gray-100 rounded">
                  <p className="text-sm text-gray-600">
                    Pay via PayPal; you can pay with your credit card if you don't have a PayPal account.
                  </p>
                </div>
              )}
            </div>

            {/* Credit Card Option */}
            <div className="mb-6">
              <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit_card"
                  checked={formData.paymentMethod === 'credit_card'}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <div className="ml-3 flex items-center">
                  <span className="text-sm font-medium text-gray-900">Credit & Debit Cards</span>
                  <div className="ml-2 flex items-center space-x-1">
                    <span className="text-xs text-gray-500">American Express</span>
                    <span className="text-xs text-gray-500">Discover</span>
                    <span className="text-xs text-gray-500">Visa</span>
                    <span className="text-xs text-gray-500">Mastercard</span>
                  </div>
                </div>
              </label>
            </div>

            {/* Terms and Privacy */}
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-4">
                Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our{' '}
                <button className="text-blue-600 hover:text-blue-800 underline">Privacy policy</button>.
              </p>
              
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                  required
                />
                <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-700">
                  I have read and agree to the website{' '}
                  <button className="text-blue-600 hover:text-blue-800 underline">terms and conditions</button>{' '}
                  <span className="text-red-500">*</span>
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/services')}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                See Discounts
              </button>
              <button
                onClick={() => navigate('/services')}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Add More Items
              </button>
              <button
                onClick={() => {
                  if (formData.agreeTerms) {
                    // Process payment
                    alert('Proceeding to PayPal...');
                  } else {
                    alert('Please agree to the terms and conditions');
                  }
                }}
                className="flex-1 bg-gray-800 hover:bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Proceed To PayPal
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;