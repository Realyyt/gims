'use client'

import { useState } from 'react';
import { CheckCircle, Leaf, Gauge, Shield } from 'lucide-react';
import { services } from './data/services';
import ContactForm2 from '../components/contactform2';

export default function ServicesPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactFormType, setContactFormType] = useState<'contact' | 'quote'>('contact');

  const openContactModal = (type: 'contact' | 'quote') => {
    setContactFormType(type);
    setIsContactModalOpen(true);
  };

  return (
    <main className="bg-stone-200 min-h-screen text-[#293241]">
      {/* Technology Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Why Choose Our Waterjet Technology?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Technology benefits cards */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-[#1890d5] mb-4">
              <CheckCircle className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#293241]">Precision</h3>
            <p className="text-gray-600">Unmatched cutting accuracy for complex operations</p>
          </div>
          {/* Add similar cards for Eco-Friendly, Efficiency, and Safety */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-[#1890d5] mb-4">
              <Leaf className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#293241]">Eco-Friendly</h3>
            <p className="text-gray-600">Environmentally concious process</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-[#1890d5] mb-4">
              <Gauge className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#293241]">Efficiency</h3>
            <p className="text-gray-600">Faster completion with superior results</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-[#1890d5] mb-4">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#293241]">Safety</h3>
            <p className="text-gray-600">Enhanced safety standards for all operations</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
        <p className="text-xl text-center mb-16 text-[#293241]">
          Elevating Maritime Solutions with Advanced Waterjet Technology
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-[#1890d5] mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#293241] text-center">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-center">{service.description}</p>
              <div className="text-center">
                <a href="#" className="text-[#1890d5] hover:underline">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative bg-[#293241] py-20 bg-opacity-50">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/50">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/maritime-bg.jpg)' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience the Future of Maritime Services Today
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Transform your maritime operations with our cutting-edge waterjet technology
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => openContactModal('quote')}
              className="bg-[#1890d5] text-white px-8 py-3 rounded-lg hover:bg-[#1890d5]/90 transition-colors"
            >
              Request a Quote
            </button>
            <button 
              onClick={() => openContactModal('contact')}
              className="border border-[#1890d5] text-white px-8 py-3 rounded-lg hover:bg-[#1890d5]/10 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
      <div className="bg-stone-200 h-20"></div>

      {/* Contact Form Modal */}
      <ContactForm2 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        initialTab={contactFormType}
        variant="modal"
      />
    </main>
  );
}
