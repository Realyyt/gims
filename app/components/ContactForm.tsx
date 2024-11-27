'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Add your form submission logic here
    // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
    
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-[#3d5a80]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl font-bold text-[#e0fbfc] mb-6">Get in Touch</h2>
            <p className="text-[#e0fbfc]/80 mb-12 text-lg">
              Ready to revolutionize your manufacturing process? Contact us today for a consultation.
            </p>

            <div className="space-y-8">
              <motion.div 
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-[#293241] p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-[#e0fbfc]" />
                </div>
                <div>
                  <h3 className="text-[#e0fbfc] font-semibold mb-1">Email Us</h3>
                  <a href="mailto:info@guhanindustries.com" className="text-[#98c1d9] hover:text-[#ee6c4d] transition">
                    info@guhanindustries.com
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-[#293241] p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-[#e0fbfc]" />
                </div>
                <div>
                  <h3 className="text-[#e0fbfc] font-semibold mb-1">Call Us</h3>
                  <a href="tel:+911234567890" className="text-[#98c1d9] hover:text-[#ee6c4d] transition">
                    +91 123 456 7890
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="bg-[#293241] p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#e0fbfc]" />
                </div>
                <div>
                  <h3 className="text-[#e0fbfc] font-semibold mb-1">Visit Us</h3>
                  <p className="text-[#98c1d9]">
                    123 Industrial Area<br />
                    Chennai, Tamil Nadu<br />
                    India - 600001
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#293241] p-8 rounded-2xl border border-[#98c1d9]/20 shadow-lg 
              backdrop-blur-sm hover:border-[#98c1d9]/30 transition-colors"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[#98c1d9] mb-2 text-sm">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#1a2530] border border-[#3d5a80] 
                      text-[#e0fbfc] placeholder-[#98c1d9]/50 focus:outline-none focus:border-[#ee6c4d]
                      transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#98c1d9] mb-2 text-sm">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#1a2530] border border-[#3d5a80] 
                      text-[#e0fbfc] placeholder-[#98c1d9]/50 focus:outline-none focus:border-[#ee6c4d]
                      transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-[#98c1d9] mb-2 text-sm">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#1a2530] border border-[#3d5a80] 
                      text-[#e0fbfc] placeholder-[#98c1d9]/50 focus:outline-none focus:border-[#ee6c4d]
                      transition-colors"
                    placeholder="+91 123 456 7890"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-[#98c1d9] mb-2 text-sm">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#1a2530] border border-[#3d5a80] 
                      text-[#e0fbfc] placeholder-[#98c1d9]/50 focus:outline-none focus:border-[#ee6c4d]
                      transition-colors"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-[#98c1d9] mb-2 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-[#1a2530] border border-[#3d5a80] 
                    text-[#e0fbfc] placeholder-[#98c1d9]/50 focus:outline-none focus:border-[#ee6c4d]
                    transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#ee6c4d] hover:bg-[#ee6c4d]/90 text-[#e0fbfc] py-3 px-6 rounded-lg
                  transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center
                  disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-[#e0fbfc] border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 