'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is suspension waterjet technology?",
    answer: "Suspension waterjet technology is an advanced cutting method that pre-mixes abrasive with water before pressurization, resulting in higher cutting speeds and improved efficiency compared to traditional injection waterjet systems."
  },
  {
    question: "What materials can be cut with GIMS waterjets?",
    answer: "GIMS waterjets can cut a wide range of materials including metals (steel, aluminum, titanium), glass, stone, composites, plastics, and more. The technology is versatile and can handle materials up to 200mm thick depending on the model."
  },
  {
    question: "What are the advantages of GIMS waterjet systems?",
    answer: "GIMS waterjet systems offer several advantages: 3x higher cutting speed, 50% lower operating costs, 50% energy savings, superior surface finish, reduced noise levels, compact design, and customizable pressure settings."
  },
  // Add more FAQs as needed
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-stone-200 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-[#293241]"
        >
          Frequently Asked Questions
        </motion.h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
              >
                <span className="text-lg font-semibold text-[#293241]">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-[#293241] transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="border-t border-gray-200"
                  >
                    <p className="px-6 py-4 text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 