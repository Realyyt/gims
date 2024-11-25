'use client'

import { scrollToSection } from '../utils/scroll';
import { useEffect, useRef } from 'react';

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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white h-full flex flex-col justify-between py-20">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">KATANA SERIES</h1>
        <button 
          onClick={() => scrollToSection('overview')}
          className="w-2/3 md:w-1/3 mx-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full
            text-lg transition-all duration-300 transform hover:scale-105"
        >
          Discover More
        </button>
      </div>
    </section>
  );
}