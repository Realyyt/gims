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
      <div className="max-w-7xl mx-auto py-4 sm:py-8 px-2 sm:px-4">
        {/* Main Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-16">
          {menuItems.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={item.title}
                className="relative cursor-pointer"
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
                  w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${item.color} flex items-center justify-center
                  transition-all duration-300 ${isActive ? 'shadow-lg shadow-blue-600/20' : ''}
                `}>
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap
                  text-[10px] sm:text-xs font-medium text-gray-600">
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
              className="mt-12 sm:mt-16 overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {menuItems[activeIndex].items.map((subItem, index) => (
                  <motion.div
                    key={subItem}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`
                      p-3 sm:p-4 rounded-lg hover:bg-gray-50
                      transition-all duration-300 cursor-pointer
                      border border-gray-100 hover:border-gray-200
                    `}
                  >
                    <span className="text-gray-700 text-xs sm:text-sm font-medium">{subItem}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-6 sm:mt-8 mx-auto block px-4 sm:px-6 py-2 rounded-lg border border-gray-200
                  hover:bg-gray-50 transition-colors text-xs sm:text-sm text-gray-600"
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