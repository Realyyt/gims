'use client'
import Link from 'next/link';
import { FacebookIcon, Linkedin, Youtube } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Guhan Industries</h3>
            <p className="text-gray-400">
              Leading manufacturer of precision engineering solutions since 1998.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('overview')}
                  className="text-gray-400 hover:text-white transition cursor-pointer"
                >
                  Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('specifications')}
                  className="text-gray-400 hover:text-white transition cursor-pointer"
                >
                  Products
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="text-gray-400 not-italic">
              123 Industrial Area<br />
              Chennai, Tamil Nadu<br />
              India - 600001<br />
              <a href="tel:+911234567890" className="hover:text-white transition">
                +91 123 456 7890
              </a>
            </address>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.youtube.com/@GIMSINDIA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/company/gims-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://www.facebook.com/nirmaan.iitm/videos/gims-guhan-industrial-manufacturing-solutions-is-a-pre-incubated-startup-under-n/778451072866765/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FacebookIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Guhan Industries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}