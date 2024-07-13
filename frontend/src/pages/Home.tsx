// pages/Home.tsx
import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <Hero />
      <ProductGrid />
    </div>
  );
};

export default Home;

