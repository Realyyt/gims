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
    <section id="services" className="py-20 bg-[#293241]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-6 text-[#e0fbfc]"
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
                  className="w-48 h-48 flex items-center justify-center bg-gradient-to-b from-[#3d5a80] to-[#293241] 
                    rounded-lg shadow-lg border border-[#98c1d9]/20 flex-shrink-0 hover:border-[#98c1d9]/40 
                    transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h4 className="text-xl font-medium text-[#e0fbfc] text-center px-4">
                    {feature.title}
                  </h4>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}