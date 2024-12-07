'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const articles = [
  {
    title: "The Future of Waterjet Cutting Technology",
    excerpt: "Explore how suspension waterjet technology is revolutionizing the manufacturing industry...",
    date: "2024-03-15",
    image: "/articles/waterjet-future.jpg",
    slug: "future-of-waterjet-cutting"
  },
  {
    title: "Sustainability in Manufacturing",
    excerpt: "Learn how GIMS's waterjet systems contribute to sustainable manufacturing practices...",
    date: "2024-03-10",
    image: "/articles/sustainability.jpg",
    slug: "sustainability-in-manufacturing"
  },
  // Add more articles as needed
];

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-stone-200 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-[#293241]"
        >
          Latest Articles
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <time className="text-sm text-gray-500">
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                
                <h2 className="text-xl font-bold text-[#293241] mt-2 mb-3">
                  {article.title}
                </h2>
                
                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                
                <Link 
                  href={`/learn-more/articles/${article.slug}`}
                  className="inline-flex items-center text-[#ee6c4d] hover:text-[#ee6c4d]/80 font-semibold"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
} 