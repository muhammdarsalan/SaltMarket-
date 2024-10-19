import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import FeaturedProducts from '../components/FeaturedProducts';

const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="relative h-screen flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551122087-f9ece0e8c1a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 text-center">
          <h1 className="text-5xl font-bold mb-4">Discover Nature's Treasures</h1>
          <p className="text-xl mb-8">Exquisite gemstones for the discerning collector</p>
          <div className="space-x-4">
            <a href="/products" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 inline-flex items-center">
              Shop Now <ArrowRight className="ml-2" size={20} />
            </a>
            <a href="/about" className="bg-transparent hover:bg-white hover:text-emerald-800 text-white font-semibold py-2 px-6 border border-white hover:border-transparent rounded-full transition duration-300">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <FeaturedProducts />

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Salt Market?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Expert Curation</h3>
              <p>Our gemstones are hand-selected by industry experts to ensure the highest quality.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Ethical Sourcing</h3>
              <p>We are committed to responsible and sustainable sourcing practices.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Customization</h3>
              <p>Create your perfect piece with our bespoke design services.</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;