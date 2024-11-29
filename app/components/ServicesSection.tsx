import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';


export default function ServicesSection() {
  const controls = useAnimation();
  
  const features = [
    { title: "3x cutting speed" },
    { title: "High quality cutting finish" },
    { title: "50% Cost saving" },
    { title: "50% Energy saving" },
    { title: "Customized pressure" },
    { title: "Compact footprint" },
    { title: "Less noise" },
  ];

  useEffect(() => {
    const slideCards = async () => {
      await controls.start({
        x: [0, -1920],
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    };

    slideCards();
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
            className="text-5xl font-bold mb-6 text-[#293241]"
          >
            INDIA&apos;S FIRST ABRASIVE SUSPENSION WATERJET
          </motion.h2>
          
          <div className="relative overflow-hidden h-48 mt-20">
            <motion.div
              animate={controls}
              className="flex gap-8 absolute left-0"
              style={{ width: "fit-content" }}
            >
              {[...features, ...features, ...features].map((feature, index) => (
                <div 
                  key={index}
                  className="w-48 h-48 flex items-center justify-center bg-[#1890d5]
                    rounded-lg shadow-xl border border-[#98c1d9]/20 flex-shrink-0 hover:border-[#98c1d9]/40 
                    transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl
                    relative [perspective:1000px] hover:[transform:rotateX(10deg)]
                    group overflow-hidden"
                >
                  {/* Bottom shadow layer */}
                  <div className="absolute inset-0 bg-[#1275b3] rounded-lg transform translate-y-1"></div>
                  
                  {/* Middle layer */}
                  <div className="absolute inset-0 bg-[#1583c7] rounded-lg transform translate-y-0.5"></div>
                  
                  {/* Top content layer */}
                  <div className="absolute inset-0 bg-[#1890d5] rounded-lg flex items-center justify-center
                    transform transition-transform duration-300 group-hover:translate-y-[-2px]">
                    <h4 className="text-xl font-bold text-white text-center px-4 drop-shadow-md
                      transform transition-all duration-300 group-hover:scale-105">
                      {feature.title}
                    </h4>
                  </div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}