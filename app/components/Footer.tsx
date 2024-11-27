'use client'
import Image from 'next/image';
import { FacebookIcon, Linkedin, Youtube, Instagram } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

export default function Footer() {
  return (
    <footer className="flex-shrink-0 w-full bg-[#0a4165] text-[#e0fbfc]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex flex-col space-y-4">
              <div className="relative w-48 h-16">
                <Image
                  src="/Guhan industrial and manufacturing solution_logo.png"
                  alt="Guhan Industries Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-white">Guhan Industrial and Manufacturing Solutions Pvt Ltd</h3>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white/70 hover:text-white transition cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('overview')}
                  className="text-white/70 hover:text-white transition cursor-pointer"
                >
                  Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('specifications')}
                  className="text-white/70 hover:text-white transition cursor-pointer"
                >
                  Products
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <address className="text-white/70 not-italic">
              22-25, Sri Sai Nagar Main Rd,<br />
              Sri Sai Nagar, Pallikaranai,<br />
              Thoraipakkam, Chennai,<br />
              Tamil Nadu 600096<br />
              <a href="mailto:Sales@gimsindia.in" className="hover:text-white transition">
                Sales@gimsindia.in
              </a>
            </address>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.youtube.com/@GIMSINDIA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/company/gims-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://www.facebook.com/nirmaan.iitm/videos/gims-guhan-industrial-manufacturing-solutions-is-a-pre-incubated-startup-under-n/778451072866765/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition"
              >
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/gims_india/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/50">
          <p>&copy; {new Date().getFullYear()} Guhan Industries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}