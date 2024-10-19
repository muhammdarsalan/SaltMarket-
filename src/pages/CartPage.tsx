import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../contexts/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    // Implement checkout logic here
    alert('Checkout functionality would be implemented here.');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <h1 className="text-4xl font-bold text-center mb-8">Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b py-4 last:border-b-0">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="mx-2 w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <Plus size={20} />
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mb-8">
            <button
              onClick={clearCart}
              className="text-red-500 hover:text-red-700 font-semibold"
            >
              Clear Cart
            </button>
            <div className="text-xl font-bold">
              Total: ${total.toFixed(2)}
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleCheckout}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default CartPage;