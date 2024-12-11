'use client'
import { motion } from 'framer-motion';
import { services, whyChooseUs } from './data/services';
import ServiceSection from './components/ServiceSection';
import CustomerQuote from './components/CustomerQuote';
import WhyChoose from './components/WhyChoose';

export default function ServicesPage() {
  return (
  <main className="bg-stone-200 min-h-screen">

   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

      <motion.h1 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  className="text-5xl text-center font-bold mt-[50px] mb-4 text-[#293241]"
  >

  Why Choose Waterjet Technologhy

</motion.h1>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  className="text-xl text-center text-left mb-8 text-[#293241]"
>
  Discover why our solutions stand out in the industry.
</motion.p>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
{whyChooseUs.map((item, index) => (
  <motion.div
    key={item.header}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    className="w-[280px] bg-[#20B1FB] rounded-lg shadow-lg overflow-hidden p-4 items-center"
  >
    <div className="flex flex-col items-center text-center p-6 pt-8">
      <span className="text-3xl mr-4">{item.icon}</span>
      <h3 className="text-white mb-2 text-center font-bold text-[20px]">{item.header}</h3>
    </div>
    <p className="text-white mb-2 text-center">{item.description}</p>
  </motion.div>
))}
</div>

          <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mt-[80px] mb-4 text-[#293241]"
        >
          Our Services
        </motion.h1>

        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl text-left mb-8 text-[#293241]"
        >
          Elevating maritime solution with advance waterjet technologhy
        </motion.p>


<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {/* Service Sections */}
        {services.map((service, index) => (
          <ServiceSection 
            key={service.title}
            service={service}
            index={index}
          />
        ))}
</div>



         <section>
              <div className="w-full bg-[#0a4165] shadow-lg overflow-hidden pt-20 pb-20 mt-[100px]">
              <h1 className='text-white items-center text-center font-bold text-[40px]'>Experienct the future of maritime service today.</h1>
              <p className='text-white items-center text-center'>Transform your maritime orperations with our cutting edge waterjet.</p>
              <div className='flex space-x-4 justify-center items-center pt-4 '>
              <button className='bg-[#20B1FB] text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300'>Request a quote</button>
              <button className='bg-[#20B1FB] text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300'>Contact Us</button>
              </div>
            </div>
         </section>


      </div>
    </main>
  );
} 