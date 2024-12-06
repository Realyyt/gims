import { motion } from 'framer-motion';
import { Feature } from '../../specs/types';

export default function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-[#293241] rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow border border-[#3d5a80]"
    >
      <div className="bg-gradient-to-r from-[#3d5a80] to-[#ee6c4d] w-10 h-10 md:w-12 md:h-12 
        rounded-lg flex items-center justify-center mb-3 md:mb-4">
        <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-[#e0fbfc]" />
      </div>
      <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-[#e0fbfc]">{feature.title}</h3>
      <p className="text-[#98c1d9] text-sm md:text-base">{feature.description}</p>
      {feature.value && (
        <div className="mt-3 md:mt-4 bg-[#3d5a80]/30 px-3 md:px-4 py-2 rounded-lg">
          <span className="font-medium text-[#ee6c4d]">{feature.value}</span>
        </div>
      )}
    </motion.div>
  );
} 