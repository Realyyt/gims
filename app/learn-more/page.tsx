'use client'
import { motion } from 'framer-motion';
import { navItems } from '../constants';
import Image from 'next/image';

export default function LearnMorePage() {
  const learnMoreItems = navItems['Learn more'];

  return (
    <main className="min-h-screen bg-stone-200 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-[#293241]"
        >
          Learn More About GIMS
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {learnMoreItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-[#293241] mb-2">{item.title}</h2>
                <p className="text-gray-600">{item.description}</p>
                <button 
                  className="mt-4 px-4 py-2 bg-[#ee6c4d] text-white rounded-lg hover:bg-[#ee6c4d]/90 
                    transition-colors"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 