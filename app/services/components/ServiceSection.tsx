'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ServiceSectionProps } from '../types';
import { CheckCircle } from 'lucide-react';

export default function ServiceSection({ service, index }: ServiceSectionProps) {
  return (
    <section className={`py-16 ${index % 2 === 0 ? 'bg-white/50' : 'bg-[#1890d5]/5'} -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6 text-[#293241]">
              {service.title}
            </h2>
            <p className="text-lg mb-8 text-[#293241]/80">
              {service.description}
            </p>

            <div className="space-y-6">
              {service.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-2 text-[#1890d5] flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#ee6c4d]" />
                    {feature.title}
                  </h3>
                  <p className="text-[#293241]/70 ml-7">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 