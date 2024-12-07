'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-stone-200 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-[#293241]"
        >
          About GIMS
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-[#293241] mb-6">Our Story</h2>
            <p className="text-gray-700">
              GIMS (Guhan Industrial and Manufacturing Solutions) is a leading provider of advanced 
              waterjet cutting solutions. With years of expertise in precision manufacturing...
            </p>
            {/* Add more content as needed */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src="/gims1.png"
              alt="GIMS Facility"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
} 