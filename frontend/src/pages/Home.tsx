import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mt-8">Welcome to Earlybird</h1>
        <p className="text-gray-600 mt-4">
          Your one-stop shop for all things fashion!
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Explore our store
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
