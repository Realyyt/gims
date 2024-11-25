import Image from 'next/image';
import { specifications } from '../constants/index';
import { motion } from 'framer-motion';

export default function SpecificationsSection() {
    return (
      <section id="specifications" className="py-20 bg-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            KATANA SERIES SPECIFICATIONS
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specifications.map((spec, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                key={spec.model} 
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl 
                  transition-all duration-300 border border-blue-100/20 group bg-gradient-to-r from-blue-600 to-purple-600"
              >
                <div className="relative h-56 bg-white">
                  <Image
                    src={spec.image}
                    alt={spec.model}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-black">{spec.model}</h3>
                  <div className="space-y-3">
                    {Object.entries(spec.specs).map(([key, value]) => (
                      <motion.div 
                        key={key} 
                        className="flex justify-between items-center py-1 border-b border-blue-100"
                        whileHover={{ 
                          backgroundColor: "rgba(0, 0, 0, 0.1)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        <span className="text-black font-medium">{key}</span>
                        <span className="font-semibold text-black">{value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }