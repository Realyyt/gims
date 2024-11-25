import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { features } from '../constants';

const KatanaSJ150Overview = () => {

  return (
    <div className="bg-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] md:w-1/2 p-8" // Added padding around image
          >
            <Image
              src="/gims1.png"
              alt="KATANA SJ150 Machine"
              fill
              className="rounded-lg shadow-lg object-contain" // Changed to object-contain
            />
          </motion.div>
          
          {/* Features Grid */}
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={feature.id}
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg 
                  shadow-md p-4 transition-transform duration-300 hover:-translate-y-1 
                  hover:shadow-lg border border-blue-100/20 group"
              >
                <div className="flex items-center mb-2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                    px-2 py-1 rounded-md font-bold text-sm mr-2">
                    #{feature.id}
                  </span>
                  <h3 className="text-lg font-semibold text-black bg-clip-text ">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-black leading-relaxed text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KatanaSJ150Overview;