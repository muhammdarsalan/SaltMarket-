import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  { name: 'Jane Doe', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { name: 'John Smith', role: 'Head Gemologist', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { name: 'Emily Brown', role: 'Marketing Director', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
];

const AboutPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <h1 className="text-4xl font-bold text-center mb-8">About Salt Market</h1>
      
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-700 mb-4">
          Founded in 2010, Salt Market has been a pioneer in the online gemstone industry. Our passion for rare and beautiful stones drives us to source the finest specimens from around the world, bringing them directly to collectors and jewelry enthusiasts.
        </p>
        <p className="text-gray-700 mb-4">
          We believe that every gemstone tells a unique story, and our mission is to help our customers find the perfect stone that resonates with their personal journey. From raw, uncut crystals to expertly faceted gems, we offer a diverse selection to suit every taste and budget.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li className="mb-2">Quality: We rigorously inspect each gemstone to ensure it meets our high standards.</li>
          <li className="mb-2">Transparency: We provide detailed information about the origin and characteristics of every stone.</li>
          <li className="mb-2">Sustainability: We are committed to ethical sourcing and supporting responsible mining practices.</li>
          <li className="mb-2">Education: We strive to share our knowledge and passion for gemstones with our customers.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;