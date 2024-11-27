'use client'
import { FacebookIcon, Linkedin, Youtube } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

export default function Footer() {
  return (
    <footer className="flex-shrink-0 w-full bg-[#1a2530] text-[#e0fbfc]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#98c1d9]">Guhan Industries</h3>
            <p className="text-[#e0fbfc]/70">
              Leading manufacturer of precision engineering solutions since 1998.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#98c1d9]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-[#e0fbfc]/70 hover:text-[#ee6c4d] transition cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('overview')}
                  className="text-[#e0fbfc]/70 hover:text-[#ee6c4d] transition cursor-pointer"
                >
                  Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('specifications')}
                  className="text-[#e0fbfc]/70 hover:text-[#ee6c4d] transition cursor-pointer"
                >
                  Products
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#98c1d9]">Contact</h4>
            <address className="text-[#e0fbfc]/70 not-italic">
              123 Industrial Area<br />
              Chennai, Tamil Nadu<br />
              India - 600001<br />
              <a href="tel:+911234567890" className="hover:text-[#ee6c4d] transition">
                +91 123 456 7890
              </a>
            </address>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#98c1d9]">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.youtube.com/@GIMSINDIA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e0fbfc]/70 hover:text-[#ee6c4d] transition"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/company/gims-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e0fbfc]/70 hover:text-[#ee6c4d] transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://www.facebook.com/nirmaan.iitm/videos/gims-guhan-industrial-manufacturing-solutions-is-a-pre-incubated-startup-under-n/778451072866765/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e0fbfc]/70 hover:text-[#ee6c4d] transition"
              >
                <FacebookIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#3d5a80] mt-12 pt-8 text-center text-[#e0fbfc]/50">
          <p>&copy; {new Date().getFullYear()} Guhan Industries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}