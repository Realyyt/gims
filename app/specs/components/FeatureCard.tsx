import { motion } from 'framer-motion';
import { Feature } from '../../specs/types';

export default function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 
        rounded-lg flex items-center justify-center mb-4">
        <feature.icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
      {feature.value && (
        <div className="mt-4 bg-stone-100 px-4 py-2 rounded-lg">
          <span className="font-medium text-blue-600">{feature.value}</span>
        </div>
      )}
    </motion.div>
  );
} 