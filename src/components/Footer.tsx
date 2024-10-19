import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Salt Market</h3>
            <p className="text-sm">Discover the beauty of natural gemstones.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="text-sm">
              <li className="mb-2"><a href="/" className="hover:text-emerald-300">Home</a></li>
              <li className="mb-2"><a href="/about" className="hover:text-emerald-300">About Us</a></li>
              <li className="mb-2"><a href="/products" className="hover:text-emerald-300">Products</a></li>
              <li className="mb-2"><a href="/contact" className="hover:text-emerald-300">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <p className="text-sm mb-2">123 Gem Street, Crystal City</p>
            <p className="text-sm mb-2">Phone: (555) 123-4567</p>
            <p className="text-sm">Email: info@saltmarket.com</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-emerald-300"><Facebook size={24} /></a>
              <a href="#" className="text-white hover:text-emerald-300"><Instagram size={24} /></a>
              <a href="#" className="text-white hover:text-emerald-300"><Twitter size={24} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; 2024 Salt Market. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;