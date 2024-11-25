'use client'
import { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import SpecificationsSection from './components/SpecificationsSection';
import IndustrialApplicationsCarousel from './components/IndustrialApplicationsCarousel';
import { services, industrialApplications } from './constants';
import { useAutoSlide } from './hooks/useAutoSlide';
import CustomersSection from './components/CustomersSection';
import KatanaSJ150Overview from './components/KatanaSJ150Overview';

export default function Home() {
  const { currentIndex, next, prev, setCurrentIndex } = useAutoSlide(industrialApplications.length, 5000);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex-grow overflow-x-hidden bg-blue-50">
      <HeroSection />
      <ServicesSection services={services} />
      <KatanaSJ150Overview />
      <SpecificationsSection />
      <CustomersSection />
      <IndustrialApplicationsCarousel 
        applications={industrialApplications}
        currentIndex={currentIndex}
        next={next}
        prev={prev}
        setCurrentIndex={setCurrentIndex}
      />
    </main>
  );
}
