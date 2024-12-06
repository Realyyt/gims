'use client'
import { motion } from 'framer-motion';
import { services } from './data/services';
import ServiceSection from './components/ServiceSection';
import CustomerQuote from './components/CustomerQuote';

export default function ServicesPage() {
  return (
    <main className="bg-stone-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-8 text-[#293241]"
        >
          Engineering Services
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl text-center mb-16 text-[#293241]/80 max-w-3xl mx-auto"
        >
          From concept to production, we provide comprehensive engineering solutions
          to bring your ideas to life.
        </motion.p>

        {/* Service Sections */}
        {services.map((service, index) => (
          <ServiceSection 
            key={service.title}
            service={service}
            index={index}
          />
        ))}

        {/* Customer Testimonials */}
        <section className="mt-32">
          <h2 className="text-3xl font-bold text-center mb-16 text-[#293241]">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <CustomerQuote
              quote="We often iterate multiple times a day on the same design, allowing us to perfect our products faster than ever before."
              author="John Smith"
              position="Lead Engineer"
              company="Aerospace Solutions"
            />
            <CustomerQuote
              quote="The team's expertise in rapid prototyping has significantly reduced our time-to-market for new products."
              author="Sarah Johnson"
              position="Product Manager"
              company="Medical Devices Inc"
            />
          </div>
        </section>
      </div>
    </main>
  );
} 