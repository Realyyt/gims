'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navItems } from '../constants';

interface NavItem {
  title: string;
  image: string;
  link?: string;
  description?: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="fixed w-full bg-stone-200/[0.65] backdrop-blur-lg z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/circle logo1-Photoroom.png"
                alt="Guhan Industries Logo"
                width={120}
                height={64}
                className="h-16 w-auto"
              />
              <div className="hidden sm:block ml-4 border-l border-gray-400 pl-4">
                <div className="text-black text-xs leading-tight">
                  GUHAN INDUSTRIAL<br />AND MANUFACTURING<br />SOLUTION
                </div>
              </div>
            </Link>
          </div>
          
          {/* Navigation Menu - Both Desktop and Mobile */}
          <div className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:justify-center lg:flex-1 absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-stone-200 lg:bg-transparent`}>
            <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 p-4 lg:p-0">
              {Object.keys(navItems).map((item) => (
                <div 
                  key={item}
                  className="relative group"
                  onMouseEnter={() => !isMobile && setActiveDropdown(item)}
                  onMouseLeave={() => !isMobile && setActiveDropdown(null)}
                  onClick={() => isMobile && setActiveDropdown(activeDropdown === item ? null : item)}
                >
                  <button 
                    className="w-full lg:w-auto px-3 py-2 text-sm font-medium text-[#171a20] hover:bg-black/[0.05] rounded-md transition flex items-center justify-between lg:justify-start"
                  >
                    {item}
                    <ChevronDown size={16} className={`ml-1 transform transition-transform ${activeDropdown === item ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {activeDropdown === item && (
                    <div className={`${isMobile ? 'relative' : 'absolute'} left-0 lg:left-1/2 transform lg:-translate-x-1/2 w-full lg:w-screen lg:max-w-7xl bg-stone-200 shadow-lg rounded-b-lg mt-2`}>
                      <div className="px-4 lg:px-8 py-4 lg:py-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                          {navItems[item as keyof typeof navItems].map((subItem: NavItem, index) => (
                            <Link 
                              key={index}
                              href={subItem.link || '#'}
                              className="group flex lg:flex-col items-center lg:text-center hover:bg-gray-100 rounded-lg p-2"
                              onClick={() => setIsOpen(false)}
                            >
                              <div className="relative w-20 h-20 lg:w-full lg:h-40 mb-0 lg:mb-3 overflow-hidden rounded-lg flex-shrink-0">
                                <Image
                                  src={subItem.image}
                                  alt={subItem.title}
                                  fill
                                  className="object-contain p-4 group-hover:scale-105 transition duration-300"
                                />
                              </div>
                              <div className="ml-4 lg:ml-0">
                                <h3 className="text-[#171a20] font-medium mb-1">{subItem.title}</h3>
                                {subItem.description && (
                                  <p className="text-sm text-gray-500">{subItem.description}</p>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              <button 
                onClick={() => scrollToSection('contact')} 
                className="w-full lg:w-auto px-3 py-2 text-sm font-medium text-[#171a20] hover:bg-black/[0.05] rounded-md transition text-center"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#171a20] hover:bg-black/[0.05] rounded-md transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}