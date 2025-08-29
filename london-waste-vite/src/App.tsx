import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import QuoteForm from './pages/QuoteForm/QuoteForm';
import BlogList from './pages/Blog/BlogList/BlogList';
import BlogPost from './pages/Blog/BlogPost/BlogPost';
import ContactUs from './pages/ContactUs/ContactUs';
import MovingServices from './pages/MovingServices/MovingServices';
import Chatbot from './components/Chatbot/Chatbot';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Home />
            </>
          } />
          <Route path="/quote" element={<QuoteForm />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/moving-services" element={<MovingServices />} />
        </Routes>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App
