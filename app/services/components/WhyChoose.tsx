'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

// Define the type for individual items in the "whyChooseUs" array
interface WhyChooseUsItem {
  icon: ReactNode;
  header: string;
  description: string;
}

// Props for the ServiceSection component
interface ServiceSectionProps {
  whyChooseUs: WhyChooseUsItem[];
}

export default function whyChooseUs({ whyChooseUs }: ServiceSectionProps) {
  return (
    <section className="flex flex-wrap justify-center gap-8 w-full">
      {whyChooseUs.map((item, index) => (
        <div
          key={index}
          className="w-[280px] bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-4"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h2 className="text-black mb-2 font-semibold">{item.header}</h2>
            <p className="text-black mb-2">{item.description}</p>
          </motion.div>
        </div>
      ))}
    </section>
  );
}