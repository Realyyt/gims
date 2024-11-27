import Image from 'next/image';
import { motion } from 'framer-motion';

// Example images array - replace with your actual images
const images = [
  '/gims1.png',
  '/sj450.png',
  '/sj700.png',
  // Add more images as needed
];

export default function CollageSection() {
  return (
    <section className="py-20 bg-[#3d5a80]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 text-[#293241]"
        >
          IMAGE GALLERY
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-square"
              whileHover={{ 
                scale: 1.05,
                zIndex: 10,
                transition: { duration: 0.2 }
              }}
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-contain rounded-lg shadow-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index < 2}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 