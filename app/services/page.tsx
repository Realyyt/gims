'use client'
import { motion } from 'framer-motion';
import { services } from './data/services';
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
          className="text-5xl font-bold text-center mb-8 text-[#293241]"
        >
          Our Services
        </motion.h1>

        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl text-center mb-16 text-[#293241]/80 max-w-3xl mx-auto"
        >
          Elevating maritime solution with advance waterjet technologhy
        </motion.p>



        {/* Service Sections */}
        {services.map((service, index) => (
          <ServiceSection 
            key={service.title}
            service={service}
            index={index}
          />
        ))}

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



 
        {/* Customer Testimonials */}
        <section className=" mt-16 w-full">
          <h2 className="text-3xl font-bold  mb-16 text-[#293241]">
            What Our Clients Say
          </h2>
          <div className='justify-center gap-8 w-full '>
          <div className="grid md:grid-cols-4 gap-8">

            <div className="w-[280px] bg-[#20B1FB] rounded-lg shadow-lg overflow-hidden p-8">
              <h1 className='text-white items-center text-center font-bold text-[20px]'>Precision</h1>
              <p className='text-white items-center text-center'>unmatched cutting accuracy for complex operations.</p>
            </div>

            <div className="w-[280px] bg-[#20B1FB] rounded-lg shadow-lg overflow-hidden p-8 ">
              <h1 className='text-white items-center text-center font-bold text-[20px]'>Eco-Friendly</h1>
              <p className='text-white items-center text-center'>Enviromentally concious processes.</p>
            </div>

            <div className="w-[280px] bg-[#20B1FB] rounded-lg shadow-lg overflow-hidden p-8">
              <h1 className='text-white items-center text-center font-bold text-[20px]'>Efficiency</h1>
              <p className='text-white items-center text-center'>Faster competition with supperior results.</p>
            </div>

            <div className="w-[280px] bg-[#20B1FB] rounded-lg shadow-lg overflow-hidden p-8">
              <h1 className='text-white items-center text-center font-bold text-[20px]'>Safety</h1>
              <p className='text-white items-center text-center'>Enhanced safety standards for all operations.</p>
            </div>
            </div>


          </div>
          </section> 
      </div>
    </main>
  );
} 