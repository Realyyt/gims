'use client'
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle,
  Zap,
  Sliders,
  Factory,
  Leaf,
  DollarSign,
  Maximize,
  Volume2,
  Cog,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import CircularNavigation from '../components/CircularNavigation';
import { scrollToSection } from './utils/scroll';

// Add this before the Home component
const services = [
  {
    title: "Cutting Speed Excellence",
    description: "3x faster cutting time compared to conventional systems, setting new standards in production efficiency",
    icon: Cog
  },
  {
    title: "Premium Finish Quality", 
    description: "Delivers exceptional cutting finish quality, ensuring precision and superior end results",
    icon: CheckCircle
  },
  {
    title: "Energy Efficient",
    description: "Achieve remarkable 70% energy savings in your operations, reducing operational costs significantly", 
    icon: Zap
  },
  {
    title: "Pressure Customization",
    description: "Fully customizable pressure variants to match your specific manufacturing requirements",
    icon: Sliders
  },
  {
    title: "Industry Versatility",
    description: "Adaptable for multiple industries and applications, providing flexible manufacturing solutions",
    icon: Factory
  },
  {
    title: "Environmental Impact",
    description: "Reduce your carbon footprint with 50% CO2 savings, supporting sustainable manufacturing",
    icon: Leaf
  },
  {
    title: "Cost Effectiveness",
    description: "Economical pricing structure that ensures optimal return on investment",
    icon: DollarSign
  },
  {
    title: "Space Optimization",
    description: "Compact footprint design that maximizes your facility space utilization",
    icon: Maximize
  },
  {
    title: "Quiet Operation",
    description: "Reduced noise levels for a better working environment and improved operator comfort",
    icon: Volume2
  },
  // Add more service objects as needed
];

// Add this to your existing array of constants
const industrialApplications = [
  {
    title: "Aerospace",
    image: "/b9f968ce59e2b9b70373a6ebf7074555.jpg",
    description: "Precision cutting for aerospace components and satellite parts"
  },
  {
    title: "Civil Works",
    image: "/fa36c1eba5f6ce0325fbc50e0ee748ee.jpg",
    description: "Construction materials and infrastructure applications"
  },
  {
    title: "Automotive",
    image: "/5993377dd085bb4c52bc7fb94c961175.jpg",
    description: "Automotive parts and precision vehicle components"
  },
  {
    title: "Defense",
    image: "/6af112a0ba19b55f04935bfe15df3b36.jpg",
    description: "Military equipment and defense industry applications"
  },
  {
    title: "Medical",
    image: "/2e9efcc7e2ec55a1a09e5a1fd59e1e6f.jpg",
    description: "Medical devices and surgical instruments"
  },
  {
    title: "Electronics",
    image: "/f593b1e3f24b408e35299c1af23b2c74.jpg",
    description: "Circuit boards and electronic component manufacturing"
  },
  {
    title: "Stone & Glass",
    image: "/2d7839103e8aed7e9ac618fd7dd66ca2.jpg", 
    description: "Stone cutting and glass fabrication"
  },
  {
    title: "Energy",
    image: "/ebcded7d81d27bba76680b38d582a3f4.jpg",
    description: "Power generation and renewable energy parts"
  },
  {
    title: "Mining",
    image: "/b0048a31523aa8d61e08d443cde3b735.jpg",
    description: "Mining equipment and mineral processing"
  },
  {
    title: "Rubber & Plastics",
    image: "/0811700b989a20da3f4ac1f594710373.jpg",
    description: "Rubber processing and plastic manufacturing"
  },
];

// Add this custom hook for automatic sliding
function useAutoSlide(length: number, interval = 3000) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((current) => (current + 1) % length);
  }, [length]);

  const prev = useCallback(() => {
    setCurrentIndex((current) => (current - 1 + length) % length);
  }, [length]);

  useEffect(() => {
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval]);

  return { currentIndex, next, prev, setCurrentIndex };
}

export default function Home() {
  const { currentIndex, next, prev, setCurrentIndex } = useAutoSlide(industrialApplications.length, 5000);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <iframe
            src="https://www.youtube.com/embed/FboDXlYcsUM?autoplay=1&mute=1&loop=1&playlist=FboDXlYcsUM&controls=0"
            allow="autoplay; encrypted-media"
            className="w-full h-full object-cover"
            style={{ border: 'none' }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          KATANA Series
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
          Explore the suspension tech
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium transition"
          >
            Get in Touch
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">KATANA SJ150 OVERVIEW</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Most Reliable Controller",
                description: "High-end microcontroller based control system ensures smooth operation, precise cutting quality, and high reliability"
              },
              {
                number: "02",
                title: "High Performance Motors",
                description: "Hybrid servo stepper in the closed-loop control system ensures accurate movement and lower energy consumption"
              },
              {
                number: "03",
                title: "Precision Traverse System",
                description: "Precision-grade ball screw provides excellent positional accuracy, repeatability, and low backlash"
              },
              {
                number: "04",
                title: "Handheld Teach Pendant",
                description: "Compact teach pendant offers a more user-friendly interface and is easy to operate"
              },
              {
                number: "05",
                title: "Tungsten Carbide Nozzle",
                description: "High-strength tungsten carbide nozzle ensures a long lifespan and is easy to replace"
              },
              {
                number: "06",
                title: "Stainless Steel Catcher Tank",
                description: "Stainless steel catcher tank offers a strong build, effortless maintenance and a 100-liter capacity"
              }
            ].map((feature) => (
              <div key={feature.number} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-blue-600 font-bold text-xl mb-4">#{feature.number}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section id="specifications" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">KATANA SERIES SPECIFICATION</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                model: "KATANA SJ150",
                image: "/gims1.png",
                specs: {
                  "Operation Pressure": "150 Bar",
                  "Pump Specification": "2 HP", 
                  "Water Consumption": "3 LPM",
                  "Abrasive Consumption": "300 GPM",
                  "Gantry Linear Speed": "1500 mm/min",
                  "Customized For": "Research and Education Institute"
                }
              },
              {
                model: "KATANA SJ450",
                image: "/sj450.png",
                specs: {
                  "Operation Pressure": "400 Bar",
                  "Pump Specification": "8 HP",
                  "Water Consumption": "5.5 LPM", 
                  "Abrasive Consumption": "500 GPM",
                  "Gantry Linear Speed": "1500 mm/min",
                  "Customized For": "Mid-scale Industries & MSME"
                }
              },
              {
                model: "KATANA SJ700",
                image: "/sj700.png",
                specs: {
                  "Operation Pressure": "700 Bar",
                  "Pump Specification": "15 HP",
                  "Water Consumption": "6.3 LPM",
                  "Abrasive Consumption": "600 GPM",
                  "Gantry Linear Speed": "1500 mm/min",
                  "Customized For": "Commercial Industrial"
                }
              }
            ].map((model) => (
              <div key={model.model} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-64 w-full">
                  <Image
                    src={model.image}
                    alt={`${model.model} Machine`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{model.model}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {Object.entries(model.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center border-b border-gray-100 pb-2 group hover:bg-gray-50 p-2 rounded transition-colors">
                        <span className="text-gray-600 group-hover:text-blue-600 transition-colors">{key}</span>
                        <span className="font-semibold group-hover:text-blue-600 transition-colors">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Applications Section - Updated Carousel */}
      <section id="applications" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">INDUSTRIAL APPLICATIONS</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Discover how our cutting-edge technology transforms various industries
          </p>

          <div className="relative">
            <div className="relative h-[600px] overflow-hidden rounded-2xl">
              {industrialApplications.map((app, index) => {
                const isActive = index === currentIndex;
                const isPrev = (index === currentIndex - 1) || (currentIndex === 0 && index === industrialApplications.length - 1);
                const isNext = (index === currentIndex + 1) || (currentIndex === industrialApplications.length - 1 && index === 0);

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
                      
                      {/* Content Overlay */}
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
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full 
                              transition-all duration-300 transform hover:scale-105">
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

              {/* Navigation Arrows */}
              <button 
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 
                  p-2 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button 
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 
                  p-2 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Progress Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                {industrialApplications.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-12 h-1 rounded-full transition-all duration-300 
                      ${currentIndex === index ? 'bg-white w-20' : 'bg-white/50'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <CircularNavigation />
        </div>
        
      </section>
    </>
  );
}

