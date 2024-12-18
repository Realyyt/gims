import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { services } from '@/app/constants';
import React from 'react';

const images = ['/gims1.png', '/sj451.png', '/sj700.png'];

export default function CollageSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.min(images.length, services.length));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square"
          >
            <Image
              src={images[currentIndex]}
              alt={`Gallery ${currentIndex + 1}`}
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>

          <motion.div
            key={`service-${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1890d5] rounded-lg p-8 flex flex-col justify-center border border-[#3d5a80] min-h-[200px] shadow-lg"
          >
            {services[currentIndex].icon && (
              <div>
                {React.createElement(services[currentIndex].icon, {
                  className: "w-8 h-8 text-[#ee6c4d] mb-4"
                })}
              </div>
            )}
            <h3 className="text-2xl font-bold mb-3 text-[#e0fbfc] font-serif">
              {services[currentIndex].title}
            </h3>
            <p className="text-[#98c1d9] text-lg leading-relaxed font-sans">
              {services[currentIndex].description}
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center mt-4 gap-1">
          {images.slice(0, services.length).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
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