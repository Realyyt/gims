import { motion } from 'framer-motion';
import { Feature } from '../../specs/types';

export default function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-[#293241] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-[#3d5a80]"
    >
      <div className="bg-gradient-to-r from-[#3d5a80] to-[#ee6c4d] w-12 h-12 
        rounded-lg flex items-center justify-center mb-4">
        <feature.icon className="w-6 h-6 text-[#e0fbfc]" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-[#e0fbfc]">{feature.title}</h3>
      <p className="text-[#98c1d9]">{feature.description}</p>
      {feature.value && (
        <div className="mt-4 bg-[#3d5a80]/30 px-4 py-2 rounded-lg">
          <span className="font-medium text-[#ee6c4d]">{feature.value}</span>
        </div>
      )}
    </motion.div>
  );
} 