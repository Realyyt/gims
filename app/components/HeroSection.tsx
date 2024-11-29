'use client'

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [state, handleSubmit] = useForm("xeoqpory");

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
          className="max-w-lg mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-wider text-white">
            GIMS
          </h1>
          <p className="text-sm md:text-base text-white/80 tracking-[0.3em] mt-2">
            KATANA WATERJET SERIES
          </p>
        </motion.div>
        <div>
          <button 
            onClick={() => {
              const form = document.getElementById('brochureForm') as HTMLDivElement;
              form.classList.remove('hidden');
            }}
            className="mt-8 relative group max-w-xs mx-auto"
          >
            {/* Shadow layers for depth */}
            <div className="absolute inset-0 bg-stone-900 rounded-full transform translate-y-2 blur-sm"></div>
            <div className="absolute inset-0 bg-stone-800 rounded-full transform translate-y-1"></div>
            
            {/* Main button */}
            <div className="relative bg-stone-700 hover:bg-stone-600 backdrop-blur-sm text-white
              px-5 py-2.5 rounded-full text-base transition-all duration-300
              transform hover:scale-105 hover:-translate-y-1 group-hover:shadow-[0_10px_30px_rgba(0,_0,_0,_0.4)]
              border border-stone-500/20 shadow-[0_5px_20px_rgba(0,_0,_0,_0.3)]"
            >
              {/* Text with text shadow for depth */}
              <span className="font-semibold tracking-wide text-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Download Brochure
              </span>
              
              {/* Shine effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/5 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </button>

          <div id="brochureForm" className="hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
              <h3 className="text-2xl font-bold text-[#293241] mb-6">Download Brochure</h3>
              <form onSubmit={async (e) => {
                e.preventDefault();
                await handleSubmit(e);
                if (state.succeeded) {
                  const link = document.createElement('a');
                  link.href = '/katana pdf.pdf';
                  link.download = 'GIMS_Katana_Brochure.pdf';
                  link.click();

                  const form = document.getElementById('brochureForm') as HTMLDivElement;
                  form.classList.add('hidden');
                }
              }}>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#1890d5]"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                  
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    required
                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#1890d5]"
                  />
                  <ValidationError prefix="Company" field="company" errors={state.errors} />
                  
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#1890d5]"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div className="mt-6 flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => {
                      const form = document.getElementById('brochureForm') as HTMLDivElement;
                      form.classList.add('hidden');
                    }}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#1890d5] text-white rounded hover:bg-[#1890d5]/90
                      shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5
                      font-semibold tracking-wide relative overflow-hidden
                      before:absolute before:inset-0 before:bg-black/10 before:translate-y-full hover:before:translate-y-0 
                      before:transition-transform before:duration-300"
                  >
                    <span className="relative z-10 drop-shadow-md">Download</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}