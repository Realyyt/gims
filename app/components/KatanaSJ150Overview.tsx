import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const machines = [
  {
    model: "KATANA SJ700 OVERVIEW",
    image: "/sj700.png",
    specs: {
      "Most Reliable CNC Controller": "High-performance CNC controller ensures precise cutting operations, seamless automation, and robust reliability",
      "Servo Motors and Drives": "Advanced servo motors integrated with closed-loop control systems deliver precise, smooth movements with minimal energy consumption",
      "Precision Traverse System": "High-grade ball screws ensure exceptional positional accuracy, repeatability, and low backlash for high-precision operations",
      "HMI Interface": "User-friendly HMI interface provides an intuitive and simplified control experience",
      "Tungsten Carbide Nozzle": "Durable tungsten carbide nozzle ensures long-lasting performance and is easy to replace, maintaining high operational efficiency",
      "Stainless Steel Catcher Tank": "A robust stainless steel catcher tank with a higher capacity, tailored for large-scale operations, ensuring easy maintenance and durability"
    }
  },
  {
    model: "KATANA SJ450 OVERVIEW", 
    image: "/sj451.png",
    specs: {
      "Most Reliable CNC Controller": "High-performance CNC controller ensures precise cutting operations, seamless automation, and robust reliability",
      "Servo Motors and Drives": "Advanced servo motors integrated with closed-loop control systems deliver precise, smooth movements with minimal energy consumption",
      "Precision Traverse System": "High-grade ball screws ensure exceptional positional accuracy, repeatability, and low backlash for high-precision operations",
      "HMI Interface": "User-friendly HMI interface provides an intuitive and simplified control experience",
      "Tungsten Carbide Nozzle": "Durable tungsten carbide nozzle ensures long-lasting performance and is easy to replace, maintaining high operational efficiency",
      "Stainless Steel Catcher Tank": "A robust stainless steel catcher tank with a higher capacity, tailored for large-scale operations, ensuring easy maintenance and durability"
    }
  },
  {
    model: "KATANA SJ150 OVERVIEW",
    image: "/gims1.png",
    specs: {
      "Most Reliable Controller": "High-end microcontroller based control system ensures smooth operation, precise cutting quality, and high reliability",
      "High Performance Motors": "Hybrid servo stepper in the closed-loop control system ensures accurate movement and lower energy consumption",
      "Precision Traverse System": "Precision-grade ball screw provides excellent positional accuracy, repeatability, and low backlash",
      "Handheld Teach Pendant": "Compact teach pendant offers a more user-friendly interface and is easy to operate",
      "Tungsten Carbide Nozzle": "High-strength tungsten carbide nozzle ensures a long lifespan and is easy to replace",
      "Stainless Steel Catcher Tank": "Stainless steel catcher tank offers a strong build, effortless maintenance and a 100-liter capacity"
    }
  }
];

const KatanaSeriesOverview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % machines.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + machines.length) % machines.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % machines.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="bg-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold text-[#293241] text-center mb-12">
          {machines[currentIndex].model}
        </h1>

        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#3d5a80]/20 hover:bg-[#3d5a80]/40 
              p-2 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-[#e0fbfc]" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#3d5a80]/20 hover:bg-[#3d5a80]/40 
              p-2 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-[#e0fbfc]" />
          </button>

          <div className="relative overflow-hidden">
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ 
                  duration: 0.3,
                  ease: "easeInOut"
                }}
                className=" bg-[#1890d5] bg-opacity-75 rounded-3xl p-8"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Image Section */}
                  <div className="relative h-[500px] md:w-1/2 p-8  rounded-2xl ">
                    <Image
                      src={machines[currentIndex].image}
                      alt={`${machines[currentIndex].model} Machine`}
                      fill
                      className="rounded-lg object-contain"
                    />
                  </div>
                  
                  {/* Features Grid */}
                  <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Object.entries(machines[currentIndex].specs).map(([title, description], idx) => (
                      <div
                        key={idx}
                        className="glass-effect rounded-2xl p-6  transform hover:-translate-y-2 transition-all duration-500"
                      >
                        <div className="flex items-center mb-2">
                          <span className="bg-[#ee6c4d] text-[#e0fbfc] px-2 py-1 rounded-md font-bold text-sm mr-2">
                            #{idx + 1}
                          </span>
                          <h3 className="text-lg font-semibold text-[#e0fbfc]">
                            {title}
                          </h3>
                        </div>
                        <p className="text-[#293241] leading-relaxed text-sm">{description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {machines.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KatanaSeriesOverview;