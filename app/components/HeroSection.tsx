'use client'

import { scrollToSection } from '../utils/scroll';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute w-full h-full object-cover"
          >
            <source src="/india-s-first-abrasive-waterjet-katana-series-720-ytshorts.savetube.me (online-video-cutter.com)-2-2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#3d5a80] h-full flex flex-col justify-between py-20">
        <motion.div 
          initial={{ y: 0 }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ 
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut"
          }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 
            shadow-[0_10px_30px_rgba(61,_90,_128,_0.7)]
            hover:shadow-[0_20px_40px_rgba(61,_90,_128,_0.8)]
            transform hover:-translate-y-4 transition-all duration-500 max-w-lg mx-auto"
        >
          <h1 className="text-xl md:text-3xl font-bold text-[#1890d5]">
            KATANA WATERJET SERIES
          </h1>
        </motion.div>

        <button 
          onClick={() => scrollToSection('overview')}
          className="mt-8 bg-[#293241] hover:bg-[#293241]/[0.85] backdrop-blur-sm text-[#1890d5]
            px-5 py-2.5 rounded-full text-base transition-all duration-300 
            transform hover:scale-105 hover:-translate-y-1
            border border-[#98c1d9]/20 shadow-[0_5px_20px_rgba(61,_90,_128,_0.3)]
            max-w-xs mx-auto"
        >
          Discover More
        </button>
      </div>
    </section>
  );
}