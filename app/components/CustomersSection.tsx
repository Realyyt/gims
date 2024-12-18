'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { customers } from '../constants';

export default function CustomersSection() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-[#293241]"
        >
          Our Trusted Clients
        </motion.h2>

        <div className="relative w-full">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {customers.map((customer, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-48 h-48 mx-20 flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={customer.logo}
                    alt={customer.name}
                    fill
                    style={{ objectFit: 'contain' }}
                    className={customer.logo === '/logo.png' ? 'scale-[2.5]' : 'scale-150'}
                  />
                </div>
              </div>
            ))}
            {/* Duplicate set of logos for seamless loop */}
            {customers.map((customer, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-48 h-48 mx-20 flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={customer.logo}
                    alt={customer.name}
                    fill
                    style={{ objectFit: 'contain' }}
                    className={customer.logo === '/logo.png' ? 'scale-[2.5]' : 'scale-150'}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx global>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
}