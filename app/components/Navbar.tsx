'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navItems } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
    setActiveDropdown(null);
  };

  

  return (
    <nav className="fixed w-full bg-white/[0.65] backdrop-blur-lg z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/Guhan industrial and manufacturing solution_logo.png"
                alt="Guhan Industries Logo"
                width={120}
                height={24}
                className="h-8 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-1">
            <div className="flex items-center space-x-8">
              {Object.keys(navItems).map((item) => (
                <div 
                  key={item}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button 
                    className="px-3 py-2 text-sm font-medium text-[#171a20] hover:bg-black/[0.05] rounded-md transition flex items-center"
                  >
                    {item}
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                  
                  {activeDropdown === item && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-screen max-w-7xl bg-white shadow-lg rounded-b-lg">
                      <div className="px-8 py-6">
                        <div className="grid grid-cols-3 gap-8">
                          {navItems[item as keyof typeof navItems].map((subItem, index) => (
                            <Link 
                              key={index}
                              href={(subItem as any).link || '#'}
                              className="group"
                            >
                              <div className="relative h-40 mb-3 overflow-hidden rounded-lg">
                                <Image
                                  src={subItem.image}
                                  alt={subItem.title}
                                  fill
                                  className="object-cover group-hover:scale-105 transition duration-300"
                                />
                              </div>
                              <h3 className="text-[#171a20] font-medium mb-1">{subItem.title}</h3>
                              {(subItem as any).description && (
                                <p className="text-sm text-gray-500">{(subItem as any).description}</p>
                              )}
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
                className="px-3 py-2 text-sm font-medium text-[#171a20] hover:bg-black/[0.05] rounded-md transition"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#171a20] hover:bg-black/[0.05] rounded-md transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu Panel */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-16 bg-white overflow-y-auto">
            <div className="container mx-auto px-4 py-6 md:px-8">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                {Object.entries(navItems).map(([category, items]) => (
                  <div key={category} className="mb-8">
                    <h2 className="text-lg font-medium text-[#171a20] mb-4">{category}</h2>
                    <div className="grid grid-cols-1 gap-4">
                      {items.map((item, index) => (
                        <Link 
                          key={index} 
                          href={(item as any).link || '#'}
                          onClick={() => setIsOpen(false)}
                          className="block"
                        >
                          <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50">
                            <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                              <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover rounded-lg"
                              />
                            </div>
                            <div>
                              <h3 className="font-medium text-[#171a20]">{item.title}</h3>
                              {(item as any).description && (
                                <p className="text-sm text-gray-500 mt-1">{(item as any).description}</p>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full p-4 text-left text-[#171a20] hover:bg-gray-50 rounded-lg"
              >
                <h3 className="font-medium">Contact</h3>
                <p className="text-sm text-gray-500 mt-1">Get in touch with us</p>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}