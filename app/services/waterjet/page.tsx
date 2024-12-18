'use client'

import {  Target, Factory, Diamond, Scissors, Ship } from 'lucide-react';
import ServiceHero from '../components/ServiceHero';
import ServiceSection from '../components/ServiceSection';
import ServiceCard from '../components/ServiceCard';
import CaseStudyCard from '../components/CaseStudyCard';

export default function WaterjetServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceHero
        title="Waterjet Services"
        subtitle="Advanced abrasive waterjet machining for precise cutting of hard-to-cut materials"
        backgroundImage="/image/blast.jpeg"
      />

      <ServiceSection
        title="Industry Applications"
        subtitle="Specialized waterjet solutions across diverse industries"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Factory,
              title: "Aerospace & Defense",
              description: "Processing carbon fiber composites for aviation, helicopter systems, rocket motors, and satellite systems.",
              features: [
                "Heat-sensitive material processing",
                "Precision component manufacturing",
                "Military application support",
                "Satellite components",
                "Aircraft parts"
              ]
            },
            {
              icon: Ship,
              title: "Ship Decommissioning",
              description: "Revolutionary approach to ship dismantling at ports like Alang, focusing on safety and environmental sustainability.",
              features: [
                "Eco-friendly dismantling",
                "Enhanced worker safety",
                "Efficient recycling process",
                "Maritime compliance",
                "Waste reduction"
              ]
            },
            {
              icon: Factory,
              title: "Mining Industry",
              description: "Advanced solutions for mineral extraction and processing, addressing efficiency and safety challenges.",
              features: [
                "Reduced operational costs",
                "Improved safety measures",
                "Environmental compliance",
                "Process optimization",
                "Resource efficiency"
              ]
            },
            {
              icon: Diamond,
              title: "Diamond Processing",
              description: "Precision cutting solutions for India's diamond processing industry, supporting 91.67% of global diamond processing.",
              features: [
                "Minimal material waste",
                "Enhanced precision",
                "Innovative designs",
                "Quality assurance",
                "Process efficiency"
              ]
            },
            {
              icon: Target,
              title: "Glass & Stone Cutting",
              description: "Versatile cutting solutions for diverse materials and thicknesses.",
              features: [
                "Complex design capability",
                "Reduced labor dependency",
                "Improved safety",
                "Material optimization",
                "Custom patterns"
              ]
            },
            {
              icon: Scissors,
              title: "Leather Industry",
              description: "Modern cutting solutions for India's leather hubs in Tamil Nadu, West Bengal, Uttar Pradesh, and Karnataka.",
              features: [
                "Precise cutting patterns",
                "Efficient material usage",
                "Enhanced productivity",
                "Quality improvement",
                "Waste reduction"
              ]
            }
          ].map((industry, index) => (
            <ServiceCard
              key={index}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
              features={industry.features}
              delay={index * 0.1}
            />
          ))}
        </div>
      </ServiceSection>

      <ServiceSection
        title="Defense Applications"
        subtitle="Specialized solutions for military and defense sector"
        isDark
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CaseStudyCard
            title="Landmine Clearance Technology"
            description="Advanced waterjet solutions for safe landmine removal operations"
            image="/image/blast.jpeg"
            stats={[
              { label: "Safety Rating", value: "99.9%" },
              { label: "Clearance Rate", value: "+75%" },
              { label: "Area Coverage", value: "2x" },
              { label: "Cost Reduction", value: "40%" }
            ]}
          />
          <CaseStudyCard
            title="Maritime Operations"
            description="Ship decommissioning and maintenance solutions"
            image="/image/ship.jpg"
            stats={[
              { label: "Processing Time", value: "-50%" },
              { label: "Material Recovery", value: "95%" },
              { label: "Environmental Impact", value: "-80%" },
              { label: "Cost Efficiency", value: "+60%" }
            ]}
            delay={0.2}
          />
        </div>
      </ServiceSection>
    </div>
  );
} 