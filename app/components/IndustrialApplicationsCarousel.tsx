import Image from 'next/image';
import { CarouselProps } from '../types';
import { NavigationArrows } from './carousel/NavigationArrows';
import { ProgressIndicators } from './carousel/ProgressIndicators';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function IndustrialApplicationsCarousel({
  applications,
  currentIndex,
  next,
  prev,
  setCurrentIndex
}: CarouselProps) {
  // Calculate the starting index for the current group of 4 cards
  const startIndex = Math.floor(currentIndex / 4) * 4;

  // Auto-advance slides every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 2000);

    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="applications" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-4 text-[#293241]"
        >
          INDUSTRIAL APPLICATIONS
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#293241] text-center mb-16 max-w-2xl mx-auto"
        >
          Discover how our cutting-edge technology transforms various industries
        </motion.p>

        <div className="relative">
          <div className="relative h-[800px] overflow-hidden rounded-2xl shadow-[0_10px_20px_rgba(8,_112,_184,_0.1)]">
            <div className="absolute inset-0 grid grid-rows-2 grid-cols-2 gap-4 p-4">
              {[0, 1, 2, 3].map((offset) => {
                const appIndex = startIndex + offset;
                const app = applications[appIndex % applications.length];
                
                return (
                  <div
                    key={app.title}
                    className="relative h-full w-full rounded-xl overflow-hidden group transition-all duration-700"
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={app.image}
                        alt={app.title}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#293241] via-[#293241]/40 to-transparent" />
                      
                      <div className="absolute inset-0 flex flex-col justify-end p-6">
                        <div className="transform transition-all duration-700">
                          <h3 className="text-xl md:text-2xl font-bold text-stone-200 mb-2">
                            {app.title}
                          </h3>
                          <p className="text-sm text-stone-200 mb-4 line-clamp-2">
                            {app.description}
                          </p>
                          {/* 
                          <div className="flex gap-2">
                            <button className="bg-[#20B1FB] hover:bg-[#ee6c4d] 
                              text-white px-4 py-1 text-sm rounded-full transition-all duration-300 transform hover:scale-105">
                              Learn More
                            </button>
                            <button className="bg-[#98c1d9]/20 hover:bg-[#98c1d9]/30 text-stone-200 px-4 py-1 text-sm rounded-full 
                              backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
                              View Cases
                            </button>
                          </div>
                          */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <NavigationArrows 
              onNext={() => next()} 
              onPrev={() => prev()} 
            />
            <ProgressIndicators 
              total={Math.ceil(applications.length / 4)}
              currentIndex={Math.floor(currentIndex / 4)}
              onChange={(index) => setCurrentIndex(index * 4)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}