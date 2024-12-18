'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

const comparisonData = {
  suspension: {
    title: "Suspension Waterjet",
    image: "/image/suspension.png",
    advantages: [
      "3x Higher Cutting Speed",
      "50% Lower Operating Cost", 
      "50% Energy Saving",
      "Superior Surface Finish",
      "Reduced Noise Level",
      "Compact Design",
      "Customizable Pressure"
    ]
  },
  normal: {
    title: "Injection Waterjet",
    image: "/image/normal.png",
    disadvantages: [
      "Standard Cutting Speed",
      "Higher Operating Cost",
      "Higher Energy Consumption", 
      "Standard Surface Finish",
      "Higher Noise Level",
      "Larger Footprint",
      "Fixed Pressure System"
    ]
  }
};

export default function ComparisonSection() {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-[#293241]"
        >
          Comparative Analysis of Suspension and Injection Technologies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Suspension Waterjet */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1890d5] rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">{comparisonData.suspension.title}</h3>
            <div className="relative h-[400px] mb-6 w-full rounded-lg overflow-hidden bg-black/10">
              <Image
                src={comparisonData.suspension.image}
                alt="Suspension Waterjet"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <ul className="space-y-3">
              {comparisonData.suspension.advantages.map((advantage, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center text-white"
                >
                  <span className="w-6 h-6 bg-[#ee6c4d] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    ✓
                  </span>
                  {advantage}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Normal Waterjet */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-stone-700 rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">{comparisonData.normal.title}</h3>
            <div className="relative h-[400px] mb-6 w-full rounded-lg overflow-hidden bg-black/10">
              <Image
                src={comparisonData.normal.image}
                alt="Normal Waterjet"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <ul className="space-y-3">
              {comparisonData.normal.disadvantages.map((disadvantage, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center text-white/80"
                >
                  <span className="w-6 h-6 bg-stone-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    ×
                  </span>
                  {disadvantage}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 