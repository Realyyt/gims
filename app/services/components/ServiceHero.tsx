'use client'

import { motion } from 'framer-motion';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

export default function ServiceHero({ title, subtitle, backgroundImage }: ServiceHeroProps) {
  return (
    <section className="relative h-[500px] bg-[#293241] flex items-center overflow-hidden">
      {/* Background Pattern - reduced opacity */}
      <div className="absolute inset-0 opacity-10 bg-grid-pattern" />
      
      {/* Background Image Overlay - increased opacity for better visibility */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl mb-8 max-w-2xl text-gray-100">
            {subtitle}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <button className="bg-[#ee6c4d] text-white px-8 py-3 rounded-lg hover:bg-[#ee6c4d]/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200">
              Contact Us
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Reduced gradient opacity */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/90 to-transparent" />
    </section>
  );
} 