'use client'
import { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import SpecificationsSection from './components/SpecificationsSection';
import IndustrialApplicationsCarousel from './components/IndustrialApplicationsCarousel';
import {  industrialApplications } from './constants';
import { useAutoSlide } from './hooks/useAutoSlide';
import CustomersSection from './components/CustomersSection';
import KatanaSJ150Overview from './components/KatanaSJ150Overview';
import ContactForm from './components/ContactForm';
import MediaGallery from './components/MediaGallery';
import ComparisonSection from './components/ComparisonSection';

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
    <main className="flex-grow overflow-x-hidden bg-[#293241]">
      <HeroSection />
      <ServicesSection />
      <ComparisonSection />
      <KatanaSJ150Overview />
      <SpecificationsSection />
      <MediaGallery />
      <CustomersSection />
      <IndustrialApplicationsCarousel 
        applications={industrialApplications}
        currentIndex={currentIndex}
        next={next}
        prev={prev}
        setCurrentIndex={setCurrentIndex}
      />
      <ContactForm />
    </main>
  );
}
