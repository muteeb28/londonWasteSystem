import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const predefinedResponses: { [key: string]: string } = {
  'hello': 'Hello! Welcome to London Waste Management. How can I help you today?',
  'services': 'We offer various waste management services including residential pickup, commercial disposal, recycling services, special waste handling, and moving services. Would you like to know more about any specific service?',
  'contact': 'You can contact us at info@londonwastemanagement.com or call us at +44 20 1234 5678. Our office hours are Monday-Friday 8AM-6PM.',
  'quote': 'I can help you get a quote! You can fill out our quote form or tell me about your waste management needs and I\'ll provide initial guidance.',
  'hours': 'Our service hours are Monday-Friday 7AM-7PM, Saturday 8AM-4PM. We\'re closed on Sundays and public holidays.',
  'recycling': 'We accept paper, cardboard, plastic bottles, glass, and metal cans. Please ensure items are clean and separated. Electronics and hazardous materials require special handling.',
  'pricing': 'Our pricing depends on service type, frequency, and location. For accurate pricing, please use our quote form or contact us directly.',
  'emergency': 'For emergency waste removal, please call our emergency line at +44 20 1234 9999. We provide 24/7 emergency services for urgent situations.',
  'moving': 'We offer comprehensive moving services including house removals, furniture delivery, piano transport, man & van service, and office relocations. Our fully insured team handles all the heavy lifting with modern equipment. Available at short notice!',
  'removal': 'Our removal services include house removals and office relocations. We provide fully equipped modern vehicles, professional packing, furniture dismantling and reassembling. All services are fully insured with transparent pricing.',
  'furniture': 'We specialize in furniture and large item delivery with careful handling. Our team can dismantle and reassemble furniture as needed. Perfect for moving bulky items safely.',
  'piano': 'We offer specialized piano transport services with expert handling of delicate instruments. Our professional team ensures safe transport of pianos and other valuable items.',
  'office': 'Our commercial removal services help businesses relocate with minimal downtime. We handle office furniture, equipment, and files with professional care and efficiency.',
  'van': 'Our man & van service is perfect for smaller moves and quick deliveries. Flexible scheduling and competitive rates for students, small apartments, and urgent transport needs.',
  'newsletter': 'Stay updated with our weekly newsletter! Get waste management tips, special offers, service updates, and eco-friendly advice. You can subscribe on our homepage or in the footer. No spam, unsubscribe anytime!',
  'subscribe': 'You can subscribe to our newsletter on the homepage or footer. We send weekly tips about waste management, recycling advice, special offers, and service updates. It\'s completely free!',
  'tips': 'Our newsletter includes weekly waste management and recycling tips to help you reduce waste and save money. Subscribe to get expert advice delivered to your inbox!',
  'offers': 'We regularly send special offers and discounts to our newsletter subscribers. Sign up to be the first to know about our latest deals on waste removal and moving services!'
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your London Waste Management assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    
    return "Thank you for your message! For specific inquiries, please contact us directly at info@londonwastemanagement.com or use our quote form for service requests.";
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputText),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-96 bg-white border border-gray-300 rounded-lg shadow-xl z-50 flex flex-col">
          <div className="bg-green-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">London Waste Management</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.isBot
                      ? 'bg-gray-200 text-gray-800'
                      : 'bg-green-600 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;