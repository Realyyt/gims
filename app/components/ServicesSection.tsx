import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ServicesSection() {
  return (
    <section id="services" className="py-8 bg-stone-200">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-16 text-[#293241]"
        >
          INDIA&apos;S FIRST ABRASIVE SUSPENSION WATERJET
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-square">
            <Image
              src="/sj451.png"
              alt="KATANA Waterjet"
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="bg-[#1890d5] rounded-lg p-8 flex flex-col justify-center border border-[#3d5a80] min-h-[200px] shadow-lg">
            <h3 className="text-4xl font-bold mb-6 text-[#293241]">
              PRECISION ENGINEERED FOR EXCELLENCE
            </h3>
            <p className="text-white text-lg leading-relaxed">
              The Katana Series is designed to meet the demands of modern manufacturing, 
              offering high-level cutting capabilities for businesses of any size. From 
              intricate designs to heavy-duty components, the Katana Series delivers 
              precision without compromise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}