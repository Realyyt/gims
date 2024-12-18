'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Phone, MapPin, X } from 'lucide-react';

interface ContactFormProps {
  isOpen?: boolean;
  onClose?: () => void;
  initialTab?: 'contact' | 'quote';
  variant?: 'modal' | 'section';
}

export default function ContactForm2({ 
  isOpen, 
  onClose, 
  variant = 'modal' 
}: ContactFormProps) {
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
    
    // Create mailto URL with form data
    const subject = `Contact Form Submission from ${formData.name}`;
    const body = `
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Company: ${formData.company}

      Message:
      ${formData.message}
    `;

    // Encode the mailto URL
    const mailtoUrl = `mailto:Sales@gimsindia.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open default email client
    window.location.href = mailtoUrl;
    
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

  if (variant === 'modal') {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-stone-200 rounded-2xl w-full max-w-7xl max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <button 
                  onClick={onClose}
                  className="absolute right-4 top-4 text-[#3d5a80] hover:text-[#ee6c4d] transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <section className="py-20 bg-stone-200">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
                    >
                      {/* Contact Information */}
                      <div>
                        <h2 className="text-4xl font-bold text-[#3d5a80] mb-6">Get in Touch</h2>
                        <p className="text-[#3d5a80]/80 mb-12 text-lg">
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
                            <div className="bg-[#20B1FB] p-3 rounded-lg">
                              <Mail className="w-6 h-6 text-[#e0fbfc]" />
                            </div>
                            <div>
                              <h3 className="text-[#3d5a80] font-semibold mb-1">Email Us</h3>
                              <a href="mailto:Sales@gimsindia.in" className="text-[#3d5a80] hover:text-[#ee6c4d] transition">
                                Sales@gimsindia.in
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
                            <div className="bg-[#20B1FB] p-3 rounded-lg">
                              <Phone className="w-6 h-6 text-[#e0fbfc]" />
                            </div>
                            <div>
                              <h3 className="text-[#3d5a80] font-semibold mb-1">Call Us</h3>
                              <a href="tel:+918925559983" className="text-[#3d5a80] hover:text-[#ee6c4d] transition">
                                +91 8925559983
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
                            <div className="bg-[#20B1FB] p-3 rounded-lg">
                              <MapPin className="w-6 h-6 text-[#e0fbfc]" />
                            </div>
                            <div>
                              <h3 className="text-[#3d5a80] font-semibold mb-1">Visit Us</h3>
                              <p className="text-[#3d5a80]">
                                22-25, Sri Sai Nagar Main Rd,<br />
                                Sri Sai Nagar, Pallikaranai,<br />
                                Thoraipakkam, Chennai,<br />
                                Tamil Nadu 600096
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
                        className="bg-[#1890d5] bg-opacity-95 p-8 rounded-2xl border border-white/10 shadow-lg 
                          backdrop-blur-sm hover:border-white/20 transition-colors"
                      >
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label htmlFor="name" className="block text-white mb-2 text-sm font-medium">
                                Your Name
                              </label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                                  text-white placeholder-white/50 focus:outline-none focus:border-white/40
                                  transition-colors"
                                placeholder="John Doe"
                              />
                            </div>
                            <div>
                              <label htmlFor="email" className="block text-white mb-2 text-sm font-medium">
                                Email Address
                              </label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                                  text-white placeholder-white/50 focus:outline-none focus:border-white/40
                                  transition-colors"
                                placeholder="john@example.com"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label htmlFor="phone" className="block text-white mb-2 text-sm font-medium">
                                Phone Number
                              </label>
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                                  text-white placeholder-white/50 focus:outline-none focus:border-white/40
                                  transition-colors"
                                placeholder="+91 123 456 7890"
                              />
                            </div>
                            <div>
                              <label htmlFor="company" className="block text-white mb-2 text-sm font-medium">
                                Company Name
                              </label>
                              <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                                  text-white placeholder-white/50 focus:outline-none focus:border-white/40
                                  transition-colors"
                                placeholder="Your Company"
                              />
                            </div>
                          </div>

                          <div>
                            <label htmlFor="message" className="block text-white mb-2 text-sm font-medium">
                              Message
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              required
                              rows={4}
                              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                                text-white placeholder-white/50 focus:outline-none focus:border-white/40
                                transition-colors resize-none"
                              placeholder="How can we help you?"
                            />
                          </div>

                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-[#ee6c4d] hover:bg-[#ee6c4d]/90 text-[#0a4165] py-3 px-6 rounded-lg
                              transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center
                              disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                          >
                            {isSubmitting ? (
                              <div className="w-6 h-6 border-2 border-[#1890d5] border-t-transparent rounded-full animate-spin" />
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  // For section variant
  return (
    <section className="py-20">
      {/* ... your existing form content ... */}
    </section>
  );
} 