'use client'

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ServiceSectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  isDark?: boolean;
}

export default function ServiceSection({ title, subtitle, children, isDark = false }: ServiceSectionProps) {
  return (
    <section className={`py-20 ${isDark ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#293241]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-[#293241]/70 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
} 