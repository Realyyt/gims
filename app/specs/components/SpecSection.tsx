import { motion } from 'framer-motion';
import { SpecSection as SpecSectionType } from '../../specs/types';

export default function SpecSection({ section }: { section: SpecSectionType }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="mb-8 md:mb-12"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 
        to-purple-600 bg-clip-text text-transparent">
        {section.title}
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
        {section.specs.map((spec, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg 
              transition-shadow border border-gray-100"
          >
            <h3 className="text-base md:text-lg font-medium text-gray-800 mb-1 md:mb-2">{spec.name}</h3>
            <p className="text-blue-600 font-semibold">{spec.value}</p>
            {spec.description && (
              <p className="mt-1 md:mt-2 text-sm text-gray-600">{spec.description}</p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 