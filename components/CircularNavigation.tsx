'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Settings, 
  Wrench,
  Lightbulb,
  Image as ImageIcon,
  Phone,
  BookOpen,
} from 'lucide-react';

const menuItems = [
  {
    title: 'PRODUCT',
    icon: Settings,
    color: 'bg-blue-600',
    items: ['Waterjet Models', 'Injection vs Suspension', 'Waterjet Specification', 'Software', 'Consumables', 'Shop']
  },
  {
    title: 'SERVICES',
    icon: Wrench,
    color: 'bg-green-500',
    items: ['Waterjet Cutting', '3D Printing', 'Lathe', 'Milling', 'Welding']
  },
  {
    title: 'SOLUTIONS',
    icon: Lightbulb,
    color: 'bg-purple-500',
    items: ['3D Design', 'Simulation', 'SPM', 'R&D', 'Manufacturing', 'Shop']
  },
  {
    title: 'MATERIAL GALLERY',
    icon: ImageIcon,
    color: 'bg-orange-500',
    items: ['Material Images', 'Economic Calculator', 'Cutting Calculator', 'Quotation Maker', 'Feed Rate Chart']
  },
  {
    title: 'CONTACT',
    icon: Phone,
    color: 'bg-red-500',
    items: ['Location', 'Technical Support', 'Get Quote', 'Requirements']
  },
  {
    title: 'LEARN',
    icon: BookOpen,
    color: 'bg-teal-500',
    items: ['Technology', 'FAQ', 'Reviews', 'How To', 'Updates', 'Videos', 'Articles', 'About Us']
  }
];

export default function CircularNavigation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (!isExpanded) {
      const timer = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % menuItems.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isExpanded]);

  return (
    <div className="w-full bg-white/95 backdrop-blur-md border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-6 md:py-10 px-4 md:px-8">
        {/* Main Navigation */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 place-items-center">
          {menuItems.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={item.title}
                className="relative cursor-pointer w-full max-w-[120px]"
                animate={{
                  scale: isActive ? 1.05 : 1,
                  opacity: isActive ? 1 : 0.7,
                }}
                whileHover={{ scale: 1.05, opacity: 1 }}
                onClick={() => {
                  setActiveIndex(index);
                  setIsExpanded(true);
                }}
              >
                <div className={`
                  w-16 h-16 md:w-20 md:h-20 rounded-2xl ${item.color} 
                  flex items-center justify-center mx-auto
                  transition-all duration-300 ${isActive ? 'shadow-lg shadow-blue-600/20' : ''}
                `}>
                  <item.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="mt-3 text-center text-sm md:text-base font-medium text-gray-600 px-2">
                  {item.title}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Expanded Menu */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-16 md:mt-20 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {menuItems[activeIndex].items.map((subItem, index) => (
                  <motion.div
                    key={subItem}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`
                      p-6 md:p-8 rounded-xl hover:bg-gray-50
                      transition-all duration-300 cursor-pointer
                      border border-gray-200 hover:border-gray-300
                      hover:shadow-sm
                    `}
                  >
                    <span className="text-gray-700 text-base md:text-lg font-medium">{subItem}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-10 mx-auto block px-8 py-4 rounded-xl border border-gray-200
                  hover:bg-gray-50 transition-colors text-base md:text-lg text-gray-600
                  hover:border-gray-300 hover:shadow-sm"
                onClick={() => setIsExpanded(false)}
              >
                Close Menu
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}