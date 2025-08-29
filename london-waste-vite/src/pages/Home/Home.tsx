import React from 'react';
import Hero from '../../components/Hero/Hero';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import Services from '../../components/Services/Services';
import Blog from '../../components/Blog/Blog';
import Footer from '../../components/Footer/Footer';

const Home: React.FC = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <WhyChooseUs />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </>
  );
};

export default Home;