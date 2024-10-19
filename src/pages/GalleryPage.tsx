import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';
import { X } from 'lucide-react';

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1551122087-f9ece0e8c1a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', alt: 'Gemstone 1' },
  { id: 2, src: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', alt: 'Gemstone 2' },
  { id: 3, src: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', alt: 'Gemstone 3' },
  { id: 4, src: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', alt: 'Gemstone 4' },
  { id: 5, src: 'https://images.unsplash.com/photo-1615485290400-80920d1d3b1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', alt: 'Gemstone 5' },
  { id: 6, src: 'https://images.unsplash.com/photo-1615485290322-2ce54ef62a5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', alt: 'Gemstone 6' },
];

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <h1 className="text-4xl font-bold text-center mb-8">Gemstone Gallery</h1>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto"
        columnClassName="bg-clip-padding px-2"
      >
        {galleryImages.map((image) => (
          <motion.div
            key={image.id}
            className="mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            />
          </motion.div>
        ))}
      </Masonry>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <img src={selectedImage} alt="Selected gemstone" className="max-w-full max-h-[90vh] rounded-lg" />
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default GalleryPage;