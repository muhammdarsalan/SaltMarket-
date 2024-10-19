import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: 'The Fascinating World of Gemstones',
    excerpt: 'Discover the rich history and allure of precious stones that have captivated humanity for centuries.',
    image: 'https://images.unsplash.com/photo-1551122087-f9ece0e8c1a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    date: '2024-03-15',
  },
  {
    id: 2,
    title: 'How to Care for Your Gemstone Jewelry',
    excerpt: 'Learn essential tips and tricks to keep your precious gemstone jewelry looking brilliant for years to come.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    date: '2024-03-10',
  },
  {
    id: 3,
    title: 'The Four Cs of Diamond Quality',
    excerpt: 'Understand the crucial factors that determine a diamond\'s value: cut, color, clarity, and carat weight.',
    image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    date: '2024-03-05',
  },
];

const BlogPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <h1 className="text-4xl font-bold text-center mb-8">Salt Market Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.date}</span>
                <a href="#" className="text-emerald-600 hover:text-emerald-800 font-semibold">Read More</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BlogPage;