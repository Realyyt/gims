import { motion } from 'framer-motion';
import Image from 'next/image';
import { customers } from '../constants';

export default function CustomersSection() {
  return (
    <section className="py-20 bg-[#293241]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-[#e0fbfc]"
        >
          Our Trusted Clients
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {customers.map((customer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#3d5a80]/10 p-6 rounded-xl border border-[#98c1d9]/20 
                hover:border-[#98c1d9]/40 transition-all duration-300 group"
            >
              <div className="relative h-24 w-full">
                <Image
                  src={customer.logo}
                  alt={customer.name}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}