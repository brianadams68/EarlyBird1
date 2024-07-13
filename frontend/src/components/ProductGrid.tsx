// components/ProductGrid.tsx
import React from 'react';

const ProductGrid: React.FC = () => {
  // Dummy product data for demonstration
  const products = [
    { id: 1, name: 'Product 1', price: 29.99, imageUrl: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Product 2', price: 39.99, imageUrl: 'https://via.placeholder.com/300' },
    { id: 3, name: 'Product 3', price: 49.99, imageUrl: 'https://via.placeholder.com/300' },
    { id: 4, name: 'Product 4', price: 59.99, imageUrl: 'https://via.placeholder.com/300' },
    { id: 5, name: 'Product 1', price: 29.99, imageUrl: 'https://via.placeholder.com/300' },
    { id: 6, name: 'Product 2', price: 39.99, imageUrl: 'https://via.placeholder.com/300' },
    { id: 7, name: 'Product 3', price: 49.99, imageUrl: 'https://via.placeholder.com/300' },
    { id: 8, name: 'Product 4', price: 59.99, imageUrl: 'https://via.placeholder.com/300' },
  ];

  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold mb-8">Popular Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={product.imageUrl} alt={product.name} className="h-64 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-700">${product.price}</p>
              <button className="mt-4 bg-gray-900 text-white py-2 px-4 rounded-full hover:bg-gray-800 focus:outline-none focus:bg-gray-800">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
