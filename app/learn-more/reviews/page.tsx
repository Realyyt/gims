'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, User } from 'lucide-react';

const reviews = [
  {
    name: "John Smith",
    company: "Precision Manufacturing Co.",
    rating: 5,
    review: "The KATANA SJ700 has transformed our manufacturing process. The cutting speed and precision are unmatched.",
    image: "/testimonials/person1.jpg"
  },
  {
    name: "Sarah Johnson", 
    company: "Advanced Materials Ltd.",
    rating: 5,
    review: "Exceptional service and support from the GIMS team. The waterjet system has exceeded our expectations.",
    image: "/testimonials/person2.jpg"
  },
  {
    name: "Rajesh Kumar",
    company: "Bharat Engineering Works",
    rating: 5, 
    review: "KATANA SJ450 has revolutionized our production line. The energy efficiency and cutting quality are remarkable.",
    image: "/testimonials/person3.jpg"
  },
  {
    name: "Priya Patel",
    company: "Innovation Metal Crafts",
    rating: 5,
    review: "As a precision parts manufacturer, we needed reliable equipment. GIMS delivered beyond expectations with their waterjet solution.",
    image: "/testimonials/person4.jpg"
  },
  {
    name: "Mohammed Al Rashid",
    company: "Dubai Fabrication Industries",
    rating: 5,
    review: "The KATANA series has given us a competitive edge in the UAE market. Outstanding performance and support.",
    image: "/testimonials/person5.jpg"
  },
  {
    name: "Ahmed Al Maktoum",
    company: "Gulf Technical Solutions",
    rating: 5,
    review: "We've seen significant cost savings and productivity improvements since installing the KATANA SJ700. Highly recommended.",
    image: "/testimonials/person6.jpg"
  }
];

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-stone-200 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-[#293241]"
        >
          Customer Reviews
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                  {/* Fallback to User icon if image fails to load */}
                  <User className="w-full h-full p-2 text-gray-400" />
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Hide the image on error
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-[#293241]">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.company}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700">{review.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}