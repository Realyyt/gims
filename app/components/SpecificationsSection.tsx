import Image from 'next/image';
import { specifications } from '../constants/index';
import { motion } from 'framer-motion';

export default function SpecificationsSection() {
    return (
      <section id="specifications" className="py-20 bg-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-5xl font-bold text-center mb-16 text-[#293241]"
          >
            KATANA MODEL SPECIFICATIONS
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specifications.map((spec) => (
              <motion.div
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl 
                  transition-all duration-300 border border-[#98c1d9] bg-[#1890d5]"
                key={spec.model}
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
                        className="flex justify-between items-start py-1 border-b border-[#98c1d9]/30"
                        whileHover={{ 
                          backgroundColor: "#3d5a80",
                          transition: { duration: 0.2 }
                        }}
                        key={`${spec.model}-${key}`}
                      >
                        <span className="text-[#293241] font-medium whitespace-nowrap">{key}</span>
                        <span className="font-semibold text-white text-right break-words max-w-[60%]">
                          {key === "For steel" ? (
                            value.split('mm/min')
                              .filter(Boolean)
                              .map((part, i) => (
                                <div key={i} className="mb-1">
                                  {part.trim() + ' mm/min'}
                                </div>
                              ))
                          ) : key === "Bed size" ? (
                            <>
                              {value.toString().split('(')[0]}
                              <div>(customizable)</div>
                            </>
                          ) : (
                            value
                          )}
                        </span>
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