'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface DemoRequestFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function DemoRequestForm({ isOpen, onClose }: DemoRequestFormProps) {
  const [formData, setFormData] = useState({
    model: '',
    name: '',
    organization: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: ''
  })

  // Add useEffect to handle body scroll
  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling on mount
      document.body.style.overflow = 'hidden'
      // Re-enable scrolling on cleanup
      return () => {
        document.body.style.overflow = 'unset'
      }
    }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    document.body.style.overflow = 'unset' // Re-enable scrolling on submit
    window.location.href = `mailto:Admin@gimsindia.in?subject=Demo Request for ${formData.model}&body=Name: ${formData.name}%0D%0AOrganization: ${formData.organization}%0D%0APhone: ${formData.phone}%0D%0AEmail: ${formData.email}%0D%0APreferred Date: ${formData.preferredDate}%0D%0APreferred Time: ${formData.preferredTime}`
  }

  const handleClose = () => {
    document.body.style.overflow = 'unset' // Re-enable scrolling on close
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[99999] p-4 overflow-y-auto"
          onClick={handleClose}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={e => e.stopPropagation()}
            className="bg-[#293241] p-8 rounded-xl shadow-xl max-w-md w-full relative my-auto z-[99999]"
          >
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>

            <h2 className="text-3xl font-bold text-white mb-6 text-center">Schedule a Demo</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-white text-sm mb-1 block">Select Model</label>
                <select
                  required
                  value={formData.model}
                  onChange={e => setFormData({...formData, model: e.target.value})}
                  className="w-full p-3 rounded-md bg-[#1e2530] text-white border border-gray-700 focus:border-[#ee6c4d] focus:ring-1 focus:ring-[#ee6c4d] outline-none"
                >
                  <option value="">Choose a model...</option>
                  <option value="SJ150">Katana SJ150</option>
                  <option value="SJ450">Katana SJ450</option>
                  <option value="SJ700">Katana SJ700</option>
                </select>
              </div>

              {/* Name field */}
              <div>
                <label className="text-white text-sm mb-1 block">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full p-3 rounded-md bg-[#1e2530] text-white border border-gray-700 focus:border-[#ee6c4d] focus:ring-1 focus:ring-[#ee6c4d] outline-none"
                  placeholder="Your Name"
                />
              </div>

              {/* Organization field */}
              <div>
                <label className="text-white text-sm mb-1 block">Organization</label>
                <input
                  type="text"
                  required
                  value={formData.organization}
                  onChange={e => setFormData({...formData, organization: e.target.value})}
                  className="w-full p-3 rounded-md bg-[#1e2530] text-white border border-gray-700 focus:border-[#ee6c4d] focus:ring-1 focus:ring-[#ee6c4d] outline-none"
                  placeholder="Your Organization"
                />
              </div>

              {/* Contact fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-sm mb-1 block">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full p-3 rounded-md bg-[#1e2530] text-white border border-gray-700 focus:border-[#ee6c4d] focus:ring-1 focus:ring-[#ee6c4d] outline-none"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div>
                  <label className="text-white text-sm mb-1 block">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full p-3 rounded-md bg-[#1e2530] text-white border border-gray-700 focus:border-[#ee6c4d] focus:ring-1 focus:ring-[#ee6c4d] outline-none"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              {/* Date and Time fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-sm mb-1 block">Preferred Date</label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={e => setFormData({...formData, preferredDate: e.target.value})}
                    className="w-full p-3 rounded-md bg-[#1e2530] text-white border border-gray-700 focus:border-[#ee6c4d] focus:ring-1 focus:ring-[#ee6c4d] outline-none"
                  />
                </div>
                <div>
                  <label className="text-white text-sm mb-1 block">Preferred Time</label>
                  <input
                    type="time"
                    required
                    value={formData.preferredTime}
                    onChange={e => setFormData({...formData, preferredTime: e.target.value})}
                    className="w-full p-3 rounded-md bg-[#1e2530] text-white border border-gray-700 focus:border-[#ee6c4d] focus:ring-1 focus:ring-[#ee6c4d] outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#ee6c4d] text-white font-semibold rounded-md hover:bg-[#e85d3d] transition-colors"
              >
                Schedule Demo
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 