'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';

interface CaseStudyCardProps {
  title: string;
  description: string;
  image: string;
  stats?: { label: string; value: string }[];
  delay?: number;
}

export default function CaseStudyCard({ title, description, image, stats, delay = 0 }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-semibold text-white mb-2">
            {title}
          </h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-[#293241]/70 mb-6 leading-relaxed">
          {description}
        </p>

        {stats && (
          <div className="grid grid-cols-2 gap-4 mt-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: delay + (index * 0.1) }}
                className="text-center p-3 rounded-lg bg-gray-50"
              >
                <p className="text-2xl font-bold text-[#1890d5]">{stat.value}</p>
                <p className="text-sm text-[#293241]/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
} 