'use client'
import { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import SpecificationsSection from './components/SpecificationsSection';
import IndustrialApplicationsCarousel from './components/IndustrialApplicationsCarousel';
import {  industrialApplications } from './constants';
import { useAutoSlide } from './hooks/useAutoSlide';
import CustomersSection from './components/CustomersSection';
import KatanaSJ150Overview from './components/KatanaSJ150Overview';
import ContactForm from './components/ContactForm';
import MediaGallery from './components/MediaGallery';
import TradeUpProgram from './components/TradeUpProgram';

export default function Home() {
  const { currentIndex, next, prev, setCurrentIndex } = useAutoSlide(industrialApplications.length, 5000);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-[#293241]">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-4 border-[#98c1d9]/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-[#ee6c4d] rounded-full animate-spin border-t-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-[#ee6c4d] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }
  //to helo recommit

  return (
    <main className="flex-grow overflow-x-hidden">
      <HeroSection />

      {/* Services section with diagonal stripes */}
      <div className="relative bg-gradient-to-r from-stone-100 to-stone-200">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.03)_25%,transparent_25%,transparent_75%,rgba(0,0,0,0.03)_75%)] bg-[length:128px_128px]" />
        <TradeUpProgram />
      </div>

      {/* Comparison section with linear stripes */}
    

      {/* Overview section with subtle diagonal pattern */}
      <div className="relative bg-gradient-to-r from-stone-100 to-stone-200">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.03),rgba(0,0,0,0.03)_1px,transparent_1px,transparent_16px)]" />
        <KatanaSJ150Overview />
      </div>

      {/* Specifications with prominent diagonal stripes */}
      <div className="relative bg-gradient-to-r from-stone-200 to-stone-300">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.04)_25%,transparent_25%,transparent_75%,rgba(0,0,0,0.04)_75%)] bg-[length:96px_96px]" />
        <SpecificationsSection />
      </div>

      {/* Media Gallery with fine diagonal lines */}
      <div className="relative bg-gradient-to-r from-stone-100 to-stone-200">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.03),rgba(0,0,0,0.03)_1px,transparent_1px,transparent_16px)]" />
        <MediaGallery />
      </div>

      {/* Customers section with wide diagonal stripes */}
      <div className="relative bg-gradient-to-r from-stone-200 to-stone-300">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.02)_33%,transparent_33%,transparent_66%,rgba(0,0,0,0.02)_66%)] bg-[length:160px_160px]" />
        <CustomersSection />
      </div>

      {/* Applications with intersecting diagonals */}
      <div className="relative bg-gradient-to-r from-stone-100 to-stone-200">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.02)_25%,transparent_25%,transparent_75%,rgba(0,0,0,0.02)_75%)] bg-[length:128px_128px]" />
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,rgba(0,0,0,0.02)_25%,transparent_25%,transparent_75%,rgba(0,0,0,0.02)_75%)] bg-[length:128px_128px]" />
        </div>
        <IndustrialApplicationsCarousel 
          applications={industrialApplications}
          currentIndex={currentIndex}
          next={next}
          prev={prev}
          setCurrentIndex={setCurrentIndex}
        />
      </div>

      {/* Contact form with subtle diagonal texture */}
      <div className="relative bg-gradient-to-r from-stone-200 to-stone-300">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.01),rgba(0,0,0,0.01)_2px,transparent_2px,transparent_8px)]" />
        <ContactForm />
      </div>

      {/* Add section transitions */}
      <style jsx global>{`
        /* Add smooth transitions between sections */
        section {
          position: relative;
          z-index: 1;
        }
        
        /* Optional: Add subtle animation to the diagonal patterns on hover */
        div[class*="bg-[linear-gradient"] {
          transition: background-position 0.3s ease;
        }
        
        div[class*="bg-[linear-gradient"]:hover {
          background-position: 4px 4px;
        }
      `}</style>
    </main>
  );
}
