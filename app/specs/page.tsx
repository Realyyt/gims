'use client'
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { ComparisonTable, FeatureCard, SpecSection } from './components';
import { machineSpecs, keyFeatures, comparisonData } from './data/specs';

export default function SpecificationsPage() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <main className="bg-stone-200 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            KATANA SJ150 Technical Specifications
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Advanced waterjet cutting technology with precision engineering and reliable performance
          </p>
        </motion.div>

        {/* Key Features */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </motion.div>

        {/* Machine Specifications */}
        {machineSpecs.map((section, index) => (
          <SpecSection key={index} section={section} />
        ))}

        {/* Comparison Table */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Performance Comparison
          </h2>
          <ComparisonTable data={comparisonData} />
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-semibold mb-6">Need more information?</h3>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white 
            px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 
            transform hover:-translate-y-1">
            Contact Our Engineers
          </button>
        </motion.div>
      </div>
    </main>
  );
} 