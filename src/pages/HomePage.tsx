import React from 'react';
import Hero from '../components/sections/Hero/Hero';
import Featured from '../components/sections/Featured/Featured';
import Flagship from '../components/sections/Flagship/Flagship';
import Testimonials from '../components/sections/Testimonials/Testimonials';
import CTA from '../components/sections/CTA/CTA';

const HomePage: React.FC = () => {
  return (
    <div className="page-home">
      <Hero />
      <Featured />
      <Flagship />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default HomePage;
