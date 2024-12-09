'use client'

import { CheckCircle } from 'lucide-react';
import { services } from './data/services';

export default function ServicesPage() {
  return (
    <main className="bg-stone-200 min-h-screen text-[#293241]">
      {/* Technology Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold mb-12">
          Why Choose Our Waterjet Technology?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Technology benefits cards */}
          <div className="bg-[#1890d5] p-6 rounded-lg">
            <div className="text-[#1890d5] mb-4">
              <CheckCircle className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Precision</h3>
            <p className="text-gray-300">Unmatched cutting accuracy for complex operations</p>
          </div>
          {/* Add similar cards for Eco-Friendly, Efficiency, and Safety */}
          <div className="bg-[#1890d5] p-6 rounded-lg">
            <div className="text-[#1890d5] mb-4">
              <CheckCircle className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
            <p className="text-gray-300">
              Environmentally concious process
            </p>
          </div>
          <div className="bg-[#1890d5] p-6 rounded-lg">
            <div className="text-[#1890d5] mb-4">
              <CheckCircle className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Efficiency</h3>
            <p className="text-gray-300">
              Faster completion with superior results
            </p>
          </div>
          <div className="bg-[#1890d5] p-6 rounded-lg">
            <div className="text-[#1890d5] mb-4">
              <CheckCircle className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Safety</h3>
            <p className="text-gray-300">
              Enhanced safety standards for all operations
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold text-center mb-4">Our Services</h1>
        <p className="text-xl text-center mb-16 text-[#293241]">
          Elevating Maritime Solutions with Advanced Waterjet Technology
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-[#1890d5] p-6 rounded-lg">
              <div className="text-[#1890d5] mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <a href="#" className="text-[#1890d5] hover:underline">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

