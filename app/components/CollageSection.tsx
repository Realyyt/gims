import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { services } from '@/app/constants';
import React from 'react';

// Example images array - replace with your actual images
const images = [
  '/gims1.png',
  '/sj450.png',
  '/sj700.png',
  // Add more images as needed
];

export default function CollageSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.min(images.length, services.length));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-[#3d5a80]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 text-[#293241]"
        >
          IMAGE GALLERY
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Carousel */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square"
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src={images[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                fill
                className="object-contain rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>

          {/* Service Card */}
          <motion.div
            key={`service-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-[#293241] rounded-lg p-8 shadow-lg flex flex-col justify-center border border-[#3d5a80]"
          >
            <div className="mb-4">
              {services[currentIndex].icon && (
                <div>
                  {React.createElement(services[currentIndex].icon, {
                    className: "w-12 h-12 text-[#ee6c4d]"
                  })}
                </div>
              )}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#e0fbfc]">
              {services[currentIndex].title}
            </h3>
            <p className="text-[#98c1d9]">
              {services[currentIndex].description}
            </p>
          </motion.div>
        </div>

        {/* Optional: Navigation Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {images.slice(0, services.length).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-gray-400'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 