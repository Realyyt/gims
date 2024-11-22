'use client'
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/Guhan industrial and manufacturing solution_logo.png"
                alt="Guhan Industries Logo"
                width={40}
                height={40}
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-semibold text-gray-900">
                Guhan Industries
              </span>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
          <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('overview')} 
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Overview
            </button>
            
            <button 
              onClick={() => scrollToSection('specifications')} 
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 