import { motion } from 'framer-motion';
import Image from 'next/image';
import { customers } from '../constants';

export default function CustomersSection() {
  return (
    <section className="py-16 bg-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          <h3 className="text-5xl font-semibold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
            OUR CLIENTS
          </h3>
          <div className="w-full overflow-hidden">
            <motion.div
              initial={{ x: 0 }}
              animate={{
                x: [0, -100 * customers.length],
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.5
                }
              }}
              className="flex gap-16 items-center"
            >
              {/* Double the customers array to create seamless loop */}
              {[...customers, ...customers].map((customer, index) => (
                <div
                  key={`${customer.name}-${index}`}
                  className="flex-shrink-0 w-48 h-24 relative opacity-60 hover:opacity-100 transition-opacity duration-300"
                >
                  <Image
                    src={customer.logo}
                    alt={customer.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}