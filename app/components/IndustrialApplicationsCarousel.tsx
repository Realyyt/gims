import Image from 'next/image';
import { CarouselProps } from '../types';
import { NavigationArrows } from './carousel/NavigationArrows';
import { ProgressIndicators } from './carousel/ProgressIndicators';
import { motion } from 'framer-motion';

export default function IndustrialApplicationsCarousel({
  applications,
  currentIndex,
  next,
  prev,
  setCurrentIndex
}: CarouselProps) {
  return (
    <section id="applications" className="py-20 bg-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          INDUSTRIAL APPLICATIONS
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-center mb-16 max-w-2xl mx-auto"
        >
          Discover how our cutting-edge technology transforms various industries
        </motion.p>

        <div className="relative">
          <div className="relative h-[600px] overflow-hidden rounded-2xl shadow-[0_10px_20px_rgba(8,_112,_184,_0.1)]">
            {applications.map((app, index) => {
              const isActive = index === currentIndex;
              const isPrev = (index === currentIndex - 1) || (currentIndex === 0 && index === applications.length - 1);
              const isNext = (index === currentIndex + 1) || (currentIndex === applications.length - 1 && index === 0);

              return (
                <div
                  key={app.title}
                  className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform
                    ${isActive ? 'opacity-100 translate-x-0 z-20' : 
                    isPrev ? 'opacity-0 -translate-x-full z-10' : 
                    isNext ? 'opacity-0 translate-x-full z-10' : 'opacity-0 translate-x-full z-0'}`}
                >
                  <div className="relative h-full w-full group">
                    <Image
                      src={app.image}
                      alt={app.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                      <div className={`transform transition-all duration-700 delay-100
                        ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                          {app.title}
                        </h3>
                        <p className="text-lg text-white/90 mb-6 max-w-2xl">
                          {app.description}
                        </p>
                        <div className="flex gap-4">
                          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
                            text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                            Learn More
                          </button>
                          <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full 
                            backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
                            View Cases
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <NavigationArrows onNext={next} onPrev={prev} />
            <ProgressIndicators 
              total={applications.length}
              currentIndex={currentIndex}
              onChange={setCurrentIndex}
            />
          </div>
        </div>
      </div>
    </section>
  );
}