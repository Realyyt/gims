'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import DemoRequestForm from './DemoRequestForm'

export default function TradeUpProgram() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <div className="relative bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            className="text-4xl font-bold text-[#ee6c4d] mb-4"
            initial={{ opacity: 1, y: 0 }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            35% discount for this NEW YEAR!
          </motion.div>
          
          <div className="flex justify-center items-center gap-4 text-3xl font-bold">
            <span className="text-black">KATANA SJ150</span>
            <span className="text-gray-500 line-through">15 Lakhs</span>
            <span className="text-[#ee6c4d]">9.75 Lakhs</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-black">Easy EMI Options</h3>
              <p className="text-lg text-gray-600">
                Get Katana SJ150 for <span className="text-[#ee6c4d] font-bold">JUST 5 LAKH</span> down and 19,791/month for 24 months
              </p>
            </div>

            <div className="space-y-4">
              <button 
                onClick={() => setIsFormOpen(true)}
                className="inline-block px-8 py-4 bg-[#ee6c4d] text-white text-lg font-semibold rounded-md hover:bg-[#e85d3d] transition-colors"
              >
                BOOK NOW
              </button>
            </div>
          </div>

          {/* Center Column - Machine Image */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.8 
            }}
            className="relative h-[400px] w-full transform hover:scale-105 transition-transform duration-300"
            style={{
              filter: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))',
            }}
          >
            <Image
              src="/gims1.png"
              alt="KATANA SJ150 Waterjet"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>

          {/* Right Column */}
          <div className="space-y-12">
            <div className="space-y-3">
              <h3 className="text-3xl font-bold text-black">Zero Downtime Promise</h3>
              <p className="text-lg text-gray-600">
              Experience smooth transition and increase your productivity.
              </p>
            </div>

            {/*<div className="space-y-4">
              <p className="text-lg text-gray-600">
                Get Katana SJ150 for just 5 lakh down and 19,791/month for 24 months
              </p>
            </div>*/}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 text-3xl font-bold mb-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse"
                }
              }}
              viewport={{ once: true }}
              className="text-black text-center"
            >
              Revolutionize Your Workshop
            </motion.h2>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse",
                  delay: 0.3
                }
              }}
              viewport={{ once: true }}
              className="text-black text-center"
            >
              Upgrade the Way You Cut
            </motion.h2>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse",
                  delay: 0.6
                }
              }}
              viewport={{ once: true }}
              className="text-black text-center"
            >
              cut anything, Including your cost!
            </motion.h2>
          </div>

      <DemoRequestForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </div>
  )
} 