'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is the Katana Series Waterjet Cutting System?",
    answer: "The Katana Series is a line of precision abrasive waterjet cutting machines designed and developed by GIMS to deliver high-quality, versatile cutting solutions. These machines utilize high-pressure water mixed with abrasive material to cut through a variety of materials with exceptional accuracy and smooth finishes."
  },
  {
    question: "How does abrasive waterjet cutting work?",
    answer: "Abrasive waterjet cutting works by:\n• Pressurizing water to extremely high levels\n• Forcing water through a small nozzle\n• Combining with fine abrasive substance (like garnet)\n• Creating a powerful cutting jet\n• Eroding and cutting through materials with precision"
  },
  {
    question: "What materials can the Katana Series cut?",
    answer: "The Katana waterjet systems can efficiently cut through:\n• Metals (steel, aluminum, titanium, copper)\n• Composites and carbon fiber\n• Glass and ceramics\n• Stone, granite, and marble\n• Plastics and acrylics\n• Rubber and foam\n\nIf you are unsure about a specific material, our team can guide you to determine its suitability for waterjet cutting."
  },
  {
    question: "What are the advantages of using abrasive waterjet cutting?",
    answer: "The Katana Series waterjets offer several benefits:\n• No Heat-Affected Zones (HAZ): Prevents material warping or thermal damage\n• High Precision: Achieves intricate designs and tight tolerances\n• Material Versatility: Suitable for both hard and soft materials\n• Clean Edges: Produces smooth finishes, reducing secondary processing\n• Environmentally Friendly: Minimal waste and no hazardous fumes"
  },
  {
    question: "How accurate is the Katana Series waterjet cutting?",
    answer: "The Katana Series delivers exceptional precision:\n• Cutting tolerances as tight as ±0.1 mm\n• Accuracy varies based on material type and thickness\n• Consistent cutting speed control\n• High repeatability for production runs\n• Precise depth control capabilities"
  },
  {
    question: "What industries benefit from Katana Series waterjets?",
    answer: "Our abrasive waterjet cutting systems are widely used in:\n• Aerospace and automotive\n• Manufacturing and fabrication\n• Architecture and interior design\n• Electronics and precision engineering\n• Stone and tile cutting\n• Art and signage industries"
  },
  {
    question: "How does the Katana waterjet compare to laser cutting?",
    answer: "Key differences include:\n• Superior thickness handling compared to laser cutting\n• No heat-affected zones or material distortion\n• Greater material versatility (metals and non-metals)\n• Effective for stone, glass, and composites\n• Better for thick material applications\n• More environmentally friendly process"
  },
  {
    question: "What are the maintenance requirements for the Katana Series?",
    answer: "Routine maintenance tasks include:\n• Regular nozzle, focusing tube, and mixing chamber checks\n• Water filter inspection and replacement\n• Monitoring abrasive flow and clearing blockages\n• Periodic high-pressure pump and seal checks\n• Preventive maintenance scheduling\n• Regular calibration and alignment checks"
  },
  {
    question: "Is the Katana Series suitable for small to mid-scale industries?",
    answer: "The Katana Series is ideal for small and mid-scale businesses because:\n• Compact footprint saves space\n• Cost-efficient operation\n• High precision capabilities\n• Versatile application range\n• Suitable for custom projects\n• Handles both prototyping and production runs"
  },
  {
    question: "How does waterjet cutting impact the environment?",
    answer: "Waterjet cutting is considered an environmentally friendly technology due to:\n• Minimal waste generation\n• No toxic fumes or hazardous gases\n• Efficient use of water, as it can often be recycled\n• Reduced need for secondary processes that generate additional waste"
  },
  {
    question: "Can I get a demonstration of the Katana Series waterjets?",
    answer: "Yes! We offer multiple demonstration options:\n• Live demonstrations at our facility\n• Virtual demonstration sessions\n• Sample cutting demonstrations\n• Custom material testing\n• Hands-on training opportunities"
  },
  {
    question: "What support does GIMS offer post-purchase?",
    answer: "Our comprehensive post-purchase support includes:\n• Installation and commissioning\n• Comprehensive operator training\n• Regular maintenance and servicing\n• On-demand troubleshooting assistance\n• Spare parts and consumables supply\n• Technical support and updates"
  },
  {
    question: "How can I order a Katana Series waterjet cutting machine?",
    answer: "To order, you can:\n• Contact our sales team directly\n• Submit an inquiry through our website\n• Request a customized quote\n• Schedule a consultation\n• Discuss financing options\n• Plan installation requirements"
  },
  {
    question: "What is the typical lead time for a Katana Series waterjet?",
    answer: "Lead time factors include:\n• Standard delivery: 4-8 weeks\n• Custom configurations may require additional time\n• Installation scheduling\n• Site preparation requirements\n• Training schedule coordination\n\nContact us for specific timelines based on your requirements."
  },
  {
    question: "How can I contact GIMS for further inquiries?",
    answer: "You can reach us through:\n• Email: sales@gimsindia.in\n• Phone: +91 89255 59810\n• Website: gimsindia.in\n• Facility visits for consultation\n• Online inquiry form\n• Social media channels"
  }
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
                    <p className="px-6 py-4 text-gray-600 whitespace-pre-line">{faq.answer}</p>
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