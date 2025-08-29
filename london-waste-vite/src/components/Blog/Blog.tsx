import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';
import { newsletterService } from '../../utils/newsletterService';

const Blog: React.FC = () => {
  const navigate = useNavigate();
  const featuredPosts = blogPosts.slice(0, 6);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    setMessage('');

    try {
      const result = await newsletterService.subscribe(email);
      setMessage(result.message);
      
      if (result.success) {
        setIsSuccess(true);
        setEmail('');
        
        // Reset success state after 4 seconds
        setTimeout(() => {
          setIsSuccess(false);
          setMessage('');
        }, 4000);
      }
    } catch (error) {
      setMessage('Failed to subscribe. Please try again.');
    } finally {
      setIsLoading(false);
      
      // Clear error messages after 5 seconds
      if (!isSuccess) {
        setTimeout(() => {
          setMessage('');
        }, 5000);
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with expert tips, industry insights, and helpful guides 
            for all your waste management needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <article
              key={index}
              onClick={() => navigate(`/blog/${post.id}`)}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 cursor-pointer group"
            >
              <div className="aspect-video bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-6xl text-white group-hover:scale-105 transition-transform">
                {post.image}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{post.date}</span>
                  <span className="text-primary font-medium text-sm group-hover:text-blue-700 transition-colors">
                    Read More →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={() => navigate('/blog')}
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Blog Posts
          </button>
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 border-l-4 border-primary">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Stay Updated with Our Newsletter
              </h3>
              <p className="text-gray-600 mb-6">
                Get the latest tips, industry news, and exclusive offers delivered 
                straight to your inbox every month.
              </p>
              {isSuccess ? (
                <div className="flex items-center justify-center bg-green-100 text-green-800 p-4 rounded-lg">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-semibold">Successfully subscribed to our newsletter!</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      disabled={isLoading}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
                    />
                    <button 
                      type="submit"
                      disabled={isLoading}
                      className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px]"
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Subscribing...
                        </>
                      ) : (
                        'Subscribe'
                      )}
                    </button>
                  </div>
                  {message && !isSuccess && (
                    <div className={`p-3 rounded-lg text-sm ${
                      message.includes('already subscribed') 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {message}
                    </div>
                  )}
                </form>
              )}
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">📧</div>
              <p className="text-gray-600 text-sm">
                Join over 5,000 subscribers who trust us for waste management insights
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;