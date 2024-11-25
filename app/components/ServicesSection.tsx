import { Service } from '../types';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

interface ServicesSectionProps {
  services: Service[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  const controls = useAnimation();

  useEffect(() => {
    let isSubscribed = true;

    const flipCard = async () => {
      if (!isSubscribed) return;
      
      try {
        await controls.start({ rotateY: 180 });
        if (!isSubscribed) return;
        await new Promise(resolve => setTimeout(resolve, 5000));
        if (!isSubscribed) return;
        await controls.start({ rotateY: 0 });
        if (!isSubscribed) return;
        await new Promise(resolve => setTimeout(resolve, 5000));
        
        if (isSubscribed) {
          flipCard();
        }
      } catch (error) {
        console.error('Animation error:', error);
      }
    };

    flipCard();

    return () => {
      isSubscribed = false;
    };
  }, [controls]);

  return (
    <section id="services" className="py-20 bg-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            INDIA'S FIRST ABRASIVE SUSPENSION WATERJET
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-semibold mb-8 text-gray-700"
          >
            3X Better Than Commercial Injection Waterjet
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative max-w-3xl mx-auto"
            style={{ perspective: '1000px' }}
          >
            <motion.div
              animate={controls}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{
                transformStyle: 'preserve-3d',
                position: 'relative',
                width: '100%',
                height: '100%',
                cursor: 'pointer'
              }}
            >
              {/* Front of card */}
              <div 
                style={{
                  backfaceVisibility: 'hidden',
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  zIndex: 2
                }}
              >
                <div className="bg-blue-600 p-6 rounded-2xl shadow-2xl border border-blue-100 transition-all duration-300">
                  <div className="flex flex-col items-center">
                    <h4 className="text-xl font-medium mb-4 text-black text-center">
                      The Katana Advantage
                    </h4>
                    <p className="text-black leading-relaxed mb-6 text-center">
                      Experience superior cutting performance with our revolutionary suspension technology, 
                      delivering precision and efficiency that surpasses traditional injection systems.
                    </p>
                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div className="space-y-3">
                        <h5 className="font-semibold text-black">Suspension System</h5>
                        <ul className="space-y-2 text-sm text-black">
                          <li className="flex items-center justify-center">
                            <span className="w-2 h-2 bg-black rounded-full mr-2 animate-pulse"></span>
                            3x Faster Cutting Speed
                          </li>
                          <li className="flex items-center justify-center">
                            <span className="w-2 h-2 bg-black rounded-full mr-2 animate-pulse"></span>
                            70% Energy Savings
                          </li>
                          <li className="flex items-center justify-center">
                            <span className="w-2 h-2 bg-black rounded-full mr-2 animate-pulse"></span>
                            Superior Surface Finish
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h5 className="font-semibold text-black">Traditional Injection</h5>
                        <ul className="space-y-2 text-sm text-black">
                          <li className="flex items-center justify-center">
                            <span className="w-2 h-2 bg-black/50 rounded-full mr-2"></span>
                            Standard Cutting Speed
                          </li>
                          <li className="flex items-center justify-center">
                            <span className="w-2 h-2 bg-black/50 rounded-full mr-2"></span>
                            Higher Power Consumption
                          </li>
                          <li className="flex items-center justify-center">
                            <span className="w-2 h-2 bg-black/50 rounded-full mr-2"></span>
                            Regular Surface Quality
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Back of card */}
              <div 
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl shadow-2xl border border-blue-100 transition-all duration-300">
                  <div className="flex flex-col items-center">
                    <h4 className="text-xl font-medium mb-4 text-black text-center">
                      The Katana Advantage
                    </h4>
                    <p className="text-black leading-relaxed mb-6 text-center">
                      Experience superior cutting performance with our revolutionary suspension technology, 
                      delivering precision and efficiency that surpasses traditional injection systems.
                    </p>
                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div className="space-y-3">
                        <h5 className="font-semibold text-black">Suspension System</h5>
                        <ul className="space-y-2 text-sm text-black">
                          <li className="flex items-center justify-center">
                            <span className="w-2 h-2 bg-black rounded-full mr-2 animate-pulse"></span>
                            3x Faster Cutting Speed
                          </li>
                          <li className="flex items-center justify-center">
                            <span className="w-2 h-2 bg-black rounded-full mr-2 animate-pulse"></span>
                            70% Energy Savings
                          </li>
                          <li className="flex items-center justify-center">
                            <span className="w-2 h-2 bg-black rounded-full mr-2 animate-pulse"></span>
                            Superior Surface Finish
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h5 className="font-semibold text-black">Traditional Injection</h5>
                        <ul className="space-y-2 text-sm text-black">
                          <li className="flex items-center justify-center">
                            <span className="w-2 h-2 bg-black/50 rounded-full mr-2"></span>
                            Standard Cutting Speed
                          </li>
                          <li className="flex items-center justify-center">
                            <span className="w-2 h-2 bg-black/50 rounded-full mr-2"></span>
                            Higher Power Consumption
                          </li>
                          <li className="flex items-center justify-center">
                            <span className="w-2 h-2 bg-black/50 rounded-full mr-2"></span>
                            Regular Surface Quality
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={service.title}
              className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl 
                hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 
                border border-blue-100/20 backdrop-blur-sm group"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 
                rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon size={24} className="text-black" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-black bg-clip-text ">{service.title}</h3>
              <p className="text-black leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}