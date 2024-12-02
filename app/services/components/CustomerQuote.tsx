'use client'
import { motion } from 'framer-motion';
import { CustomerQuoteProps } from '../types';
import { Quote } from 'lucide-react';

export default function CustomerQuote({ quote, author, position, company }: CustomerQuoteProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-xl shadow-lg"
    >
      <Quote className="w-12 h-12 text-[#ee6c4d] mb-4" />
      <p className="text-lg text-[#293241]/80 mb-6 italic">
        &ldquo;{quote}&rdquo;
      </p>
      <div>
        <p className="font-semibold text-[#293241]">{author}</p>
        <p className="text-[#293241]/60">{position}</p>
        <p className="text-[#293241]/60">{company}</p>
      </div>
    </motion.div>
  );
} 