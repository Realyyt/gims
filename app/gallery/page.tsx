'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

// Define the materials and their images
const materials = [
  {
    name: 'Stainless Steel',
    image: '/materials/stainless-steel.jpg',
    description: 'Precision cuts in stainless steel with superior edge quality'
  },
  {
    name: 'Aluminum',
    image: '/materials/aluminum.jpg',
    description: 'Clean cuts in aluminum with minimal heat affected zone'
  },
  {
    name: 'Glass',
    image: '/materials/glass.jpg',
    description: 'Intricate patterns and shapes in glass materials'
  },
  // Add more materials as needed
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-stone-200 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-[#293241]"
        >
          Material Gallery
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map((material, index) => (
            <motion.div
              key={material.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(material.image)}
            >
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={material.image}
                  alt={material.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-xl font-bold text-white mb-2">{material.name}</h3>
                    <p className="text-white/80">{material.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full max-w-4xl h-[80vh]">
              <Image
                src={selectedImage}
                alt="Selected material"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
} 