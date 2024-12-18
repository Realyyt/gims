'use client'

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  delay?: number;
}

export default function ServiceCard({ icon: Icon, title, description, features, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#1890d5]/20"
    >
      <div className="relative">
        {/* Icon Background */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#1890d5] to-[#ee6c4d] rounded-lg opacity-20 group-hover:opacity-30 blur transition-all duration-300" />
        
        {/* Icon */}
        <div className="relative text-[#1890d5] mb-6 transform group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-12 w-12" />
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4 text-[#293241] group-hover:text-[#1890d5] transition-colors duration-300">
        {title}
      </h3>

      <p className="text-[#293241]/80 mb-6 leading-relaxed">
        {description}
      </p>

      {features && features.length > 0 && (
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + (i * 0.1) }}
              className="flex items-center gap-3 text-[#293241]/80"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#ee6c4d] group-hover:bg-[#1890d5] transition-colors duration-300" />
              <span className="group-hover:text-[#293241] transition-colors duration-300">
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>
      )}
    </motion.div>
  );
} 