'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ServiceSectionProps } from '../types';
import { CheckCircle } from 'lucide-react';

export default function ServiceSection({ service, index }: ServiceSectionProps) {
  return (
    <section className="flex flex-wrap justify-center gap-8 w-full" >
      
      <div className="w-[280px] bg-[#20B1FB] rounded-lg shadow-lg overflow-hidden">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col items-center text-center p-4"
  >
    <h2 className="text-white mb-2 font-bold text-[20px]">{service.title}</h2>
    <p className="text-white mb-2">{service.description}</p>
    <p className="text-white-500 underline">{service.link}</p>
  </motion.div>
</div>



<div className="w-[280px] bg-[#20B1FB] rounded-lg shadow-lg overflow-hidden">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col items-center text-center p-4"
  >
    <h2 className="text-white mb-2 font-bold text-[20px]">{service.title}</h2>
    <p className="text-white mb-2">{service.description}</p>
    <p className="text-white-500 underline">{service.link}</p>
  </motion.div>
</div>




<div className="w-[280px] bg-[#20B1FB] rounded-lg shadow-lg overflow-hidden">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col items-center text-center p-4"
  >
    <h2 className="text-white mb-2 font-bold text-[20px]">{service.title}</h2>
    <p className="text-white mb-2">{service.description}</p>
    <p className="text-white-500 underline">{service.link}</p>
  </motion.div>
</div>



<div className="w-[280px] bg-[#20B1FB] rounded-lg shadow-lg overflow-hidden">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col items-center text-center p-4"
  >
    <h2 className="text-white mb-2 font-bold text-[20px]">{service.title}</h2>
    <p className="text-white mb-2">{service.description}</p>
    <p className="text-white-500 underline">{service.link}</p>
  </motion.div>
</div>

    </section>
  );
} 