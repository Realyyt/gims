'use client'

import { useState } from 'react';
import { CheckCircle, Leaf, Gauge, Shield, Target, Droplets, Recycle, Clock, Award, HeartHandshake, BadgeCheck, Ship, ArrowRight } from 'lucide-react';
import ContactForm2 from '../components/contactform2';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Add new service categories
const serviceCategories = [
  {
    title: "Ship Decommissioning",
    image: "/image/ship.jpg", // Using existing image
    description: "Eco-friendly ship dismantling with advance waterjet tech",
    link: "/services/ship-decommissioning",
    features: [
      "Eco-friendly dismantling",
      "Enhanced worker safety",
      "Efficient recycling process"
    ]
  },
  {
    title: "Industrial Services",
    image: "/image/blast.jpeg", // Using existing image
    description: "Industrial solutions for manufacturing and processing needs",
    link: "/services/applications",
    features: [
      "Process automation",
      "Quality optimization",
      "Advanced manufacturing"
    ]
  },
  {
    title: "Wind Turbine Services",
    image: "/image/7c666d08646ce761ae07dc296662b00d.jpg", // Using existing image
    description: "Wind energy maintenance and decommissioning solutions",
    link: "/services/wind-turbine",
    features: [
      "Precision blade cutting",
      "Safe dismantling process",
      "Environmental compliance"
    ]
  },
  {
    title: "Specialized Cutting Services",
    image: "/image/284ccf16900287ebcc60d2c3beced007.jpg", // Using existing image
    description: "Advanced cutting solutions for diverse materials and industries",
    link: "/services/core-competencies",
    features: [
      "Multi-material capabilities",
      "Precision engineering",
      "Complex shape processing"
    ]
  }
];

export default function ServicesPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactFormType, setContactFormType] = useState<'contact' | 'quote'>('contact');

  const openContactModal = (type: 'contact' | 'quote') => {
    setContactFormType(type);
    setIsContactModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-stone-200">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-[#293241] flex items-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-6xl font-bold mb-6">Maritime Waterjet Services</h1>
          <p className="text-2xl mb-8">
            <strong>Advanced Waterjet Technology for Maritime Excellence | Professional Solutions for Ship Maintenance and Repair</strong>
          </p>
          <button 
            onClick={() => openContactModal('quote')}
            className="bg-[#ee6c4d] text-white px-8 py-3 rounded-lg hover:bg-[#ee6c4d]/90 transition-colors"
          >
            Get Your Quote Today
          </button>
        </div>
      </section>

      {/* Enhanced Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#293241]">
              Why Choose Our Waterjet Technology?
            </h2>
            <p className="text-2xl text-[#293241]/70 max-w-3xl mx-auto">
              <strong>Unlock maritime excellence with our precision, sustainable, and innovative waterjet solutions.</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Core Benefits */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#1890d5]">
              <div className="text-[#1890d5] mb-6">
                <Target className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[#293241]">Precision Excellence</h3>
              <p className="text-[#293241]/70 mb-4">
                <strong>Our advanced waterjet systems deliver unmatched accuracy with tolerances down to ±0.1mm, 
                ensuring perfect results every time.</strong>
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-[#293241]/70">
                  <CheckCircle className="h-5 w-5 text-[#ee6c4d]" />
                  <span>Computer-controlled precision cutting</span>
                </li>
                <li className="flex items-center gap-2 text-[#293241]/70">
                  <CheckCircle className="h-5 w-5 text-[#ee6c4d]" />
                  <span>Consistent quality across projects</span>
                </li>
                <li className="flex items-center gap-2 text-[#293241]/70">
                  <CheckCircle className="h-5 w-5 text-[#ee6c4d]" />
                  <span>Complex shape capabilities</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#1890d5]">
              <div className="text-[#1890d5] mb-6">
                <Leaf className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[#293241]">Environmental Leadership</h3>
              <p className="text-[#293241]/70 mb-4">
                <strong>Our eco-friendly approach sets new standards in sustainable maritime operations, 
                minimizing environmental impact while maximizing efficiency.</strong>
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-[#293241]/70">
                  <Droplets className="h-5 w-5 text-[#ee6c4d]" />
                  <span>Zero harmful chemicals</span>
                </li>
                <li className="flex items-center gap-2 text-[#293241]/70">
                  <Recycle className="h-5 w-5 text-[#ee6c4d]" />
                  <span>98% water recycling rate</span>
                </li>
                <li className="flex items-center gap-2 text-[#293241]/70">
                  <Shield className="h-5 w-5 text-[#ee6c4d]" />
                  <span>EPA compliant processes</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#1890d5]">
              <div className="text-[#1890d5] mb-6">
                <Gauge className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[#293241]">Operational Efficiency</h3>
              <p className="text-[#293241]/70 mb-4">
                <strong>Our streamlined processes and advanced technology ensure faster completion times 
                without compromising on quality.</strong>
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-[#293241]/70">
                  <Clock className="h-5 w-5 text-[#ee6c4d]" />
                  <span>Rapid project completion</span>
                </li>
                <li className="flex items-center gap-2 text-[#293241]/70">
                  <Ship className="h-5 w-5 text-[#ee6c4d]" />
                  <span>Minimal downtime</span>
                </li>
                <li className="flex items-center gap-2 text-[#293241]/70">
                  <BadgeCheck className="h-5 w-5 text-[#ee6c4d]" />
                  <span>Quality assurance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Certified Excellence",
                description: "ISO 9001:2015 certified operations ensuring highest quality standards"
              },
              {
                icon: HeartHandshake,
                title: "Customer Focus",
                description: "Dedicated project managers for personalized service"
              },
              {
                icon: Shield,
                title: "Safety First",
                description: "Comprehensive safety protocols exceeding industry standards"
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description: "Round-the-clock technical assistance and emergency response"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/50 p-6 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="text-[#1890d5] mb-4">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#293241]">{item.title}</h3>
                <p className="text-[#293241]/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#293241]">
            Our Services
          </h2>
          <p className="text-2xl text-center mb-16 text-[#293241]/70">
            <strong>Comprehensive Waterjet Solutions for Every Industry</strong>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Link href={category.link}>
                  <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                      <p className="text-white/90 mb-4">{category.description}</p>
                      <ul className="space-y-2 mb-6">
                        {category.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-[#ee6c4d]" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href={category.link}>
                        <button className="bg-[#ee6c4d] text-white px-6 py-2 rounded-lg hover:bg-[#ee6c4d]/90 transition-all duration-300 flex items-center gap-2">
                          Learn More
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-[#293241]">Materials We Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Steel',
              'Aluminum',
              'Stainless Steel',
              'Marine-grade Materials',
              'Composite Materials',
              'High-strength Alloys',
              'Specialized Coatings',
              'Maritime Components'
            ].map((material) => (
              <div key={material} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="text-[#293241] font-medium">{material}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm2 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        initialTab={contactFormType}
        variant="modal"
      />
    </main>
  );
}
