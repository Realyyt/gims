'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ServiceSectionProps } from '../types';


export default function ServiceSection({ service, index }: ServiceSectionProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const words = service.description.split(' ');
  const excerpt = words.slice(0, 8).join(' ');
  const remaining = words.slice(8).join(' ');

  return (
    <section className="flex flex-wrap justify-center gap-8 w-full">
      <div className="w-[280px] bg-[#20B1FB] rounded-lg shadow-lg overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center p-6 pt-14"
        >
          <h2 className="text-white mb-2 font-bold text-[20px]">{service.title}</h2>
          <p className="text-white mb-2">
            {excerpt}
            {!isExpanded && words.length > 8 && '... '}
            {isExpanded && ` ${remaining}`}
          </p>
          {words.length > 8 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-white underline"
            >
              {isExpanded ? 'Show Less' : 'Show More'}
            </button>
          )}
          <p className="text-white-500 underline">{service.link}</p>
        </motion.div>
      </div>
      
    </section>
  );
}
