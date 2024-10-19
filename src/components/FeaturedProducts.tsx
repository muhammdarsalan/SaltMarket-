import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const featuredProducts = [
  { id: 1, name: 'Sapphire Ring', price: 1299, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 2, name: 'Emerald Necklace', price: 1599, image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 3, name: 'Ruby Earrings', price: 999, image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
];

const FeaturedProducts: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
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
      </div>
    </section>
  );
};

export default FeaturedProducts;