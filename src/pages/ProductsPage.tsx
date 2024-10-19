import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Filter } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const products = [
  { id: 1, name: 'Sapphire Ring', price: 1299, category: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 2, name: 'Emerald Necklace', price: 1599, category: 'Necklaces', image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 3, name: 'Ruby Earrings', price: 999, category: 'Earrings', image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 4, name: 'Diamond Bracelet', price: 2499, category: 'Bracelets', image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 5, name: 'Opal Pendant', price: 799, category: 'Necklaces', image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 6, name: 'Amethyst Ring', price: 899, category: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
];

const ProductsPage: React.FC = () => {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('');

  const filteredProducts = products
    .filter(product => filter === '' || product.category === filter)
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>

      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <Filter className="mr-2" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border rounded-md px-2 py-1"
          >
            <option value="">All Categories</option>
            <option value="Rings">Rings</option>
            <option value="Necklaces">Necklaces</option>
            <option value="Earrings">Earrings</option>
            <option value="Bracelets">Bracelets</option>
          </select>
        </div>
        <div className="flex items-center">
          <span className="mr-2">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-md px-2 py-1"
          >
            <option value="">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 inline-flex items-center"
              >
                Add to Cart <ShoppingCart className="ml-2" size={20} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductsPage;