import Image from 'next/image';
import { specifications } from '../constants/index';
import { motion } from 'framer-motion';

export default function SpecificationsSection() {
    return (
      <section id="specifications" className="py-20 bg-[#3d5a80]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-5xl font-bold text-center mb-16 text-[#e0fbfc]"
          >
            KATANA MODEL SPECIFICATIONS
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specifications.map((spec, index) => (
              <motion.div
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl 
                  transition-all duration-300 border border-[#98c1d9] bg-[#293241]"
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
                  <h3 className="text-2xl font-bold mb-6 text-[#e0fbfc]">{spec.model}</h3>
                  <div className="space-y-3">
                    {Object.entries(spec.specs).map(([key, value]) => (
                      <motion.div 
                        className="flex justify-between items-center py-1 border-b border-[#98c1d9]/30"
                        whileHover={{ 
                          backgroundColor: "#3d5a80",
                          transition: { duration: 0.2 }
                        }}
                      >
                        <span className="text-[#98c1d9] font-medium">{key}</span>
                        <span className="font-semibold text-[#ee6c4d]">{value}</span>
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