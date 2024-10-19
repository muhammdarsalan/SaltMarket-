import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Header: React.FC = () => {
  const { cart } = useCart();

  return (
    <header className="bg-emerald-700 text-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Salt Market</Link>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-emerald-200 transition-colors">Home</Link></li>
          <li><Link to="/about" className="hover:text-emerald-200 transition-colors">About Us</Link></li>
          <li><Link to="/products" className="hover:text-emerald-200 transition-colors">Products</Link></li>
          <li><Link to="/gallery" className="hover:text-emerald-200 transition-colors">Gallery</Link></li>
          <li><Link to="/blog" className="hover:text-emerald-200 transition-colors">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-emerald-200 transition-colors">Contact Us</Link></li>
          <li>
            <Link to="/cart" className="relative hover:text-emerald-200 transition-colors">
              <ShoppingCart size={24} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cart.length}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;