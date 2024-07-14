// components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-300 text-white py-52 my-5">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold leading-tight mb-6">Discover Our Latest Collections</h1>
        <p className="text-xl mb-8">Explore EarlyBird's premium fitness apparel.</p>
        <a
          href="/Clothing/browse-all"
          className="bg-white text-gray-800 py-2 px-6 rounded-full font-semibold uppercase text-sm hover:bg-gray-200"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
