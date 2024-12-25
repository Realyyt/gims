'use client'

import {  Target, Factory, Diamond, Scissors, Ship, Cog, Layers, CheckCircle } from 'lucide-react';
import ServiceHero from '../components/ServiceHero';
import ServiceSection from '../components/ServiceSection';
import ServiceCard from '../components/ServiceCard';
import CaseStudyCard from '../components/CaseStudyCard';

export default function WaterjetServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceHero
        title="Waterjet Technology"
        subtitle="Advanced abrasive waterjet machining for precise cutting of hard-to-cut, heat-sensitive materials"
        backgroundImage="/image/blast.jpeg"
      />

      <ServiceSection
        title="Waterjet Technology"
        subtitle="Specialized waterjet solutions across diverse industries"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Factory,
              title: "Aeronautical & Defense",
              description: "Cutting-edge solutions for processing carbon fiber composites in aviation, helicopter systems, rocket motors, and satellite systems.",
              features: [
                "Heat-sensitive material processing",
                "Precision component manufacturing",
                "Defense applications",
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
                "Efficient recycling",
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-4 text-[#293241] text-center">Waterjet Technology Solutions</h2>
        <h3 className="text-2xl font-bold mb-4 text-[#293241] text-center">Precision Manufacturing and Materials Processing</h3>
        <div className="space-y-8">
          {/* Precision Manufacturing Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start gap-6">
              <Cog className="h-12 w-12 text-[#1890d5] flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-[#293241]">Precision Manufacturing</h3>
                <p className="text-[#293241]/70 mb-6">
                  Our flagship Waterjet Series machines cater to diverse cutting needs, offering unparalleled precision and efficiency for aerospace, automotive, semiconductors, and materials processing.
                </p>

                <div className="bg-[#ee6c4d]/10 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-[#293241] mb-3">Technology Impact</h4>
                  <p className="text-[#293241]/70">
                    Abrasive waterjet machining provides precise cutting of hard-to-cut, heat-sensitive materials with negligible thermal damage and very low machining force.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">Technical Capabilities</h4>
                    <ul className="space-y-2">
                      {[
                        "Heat-sensitive material processing",
                        "High precision cutting (±0.1mm)",
                        "Multi-material compatibility",
                        "Zero thermal damage",
                        "Complex shape cutting"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-[#ee6c4d]" />
                          <span className="text-[#293241]/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">Industry Benefits</h4>
                    <ul className="space-y-2">
                      {[
                        "Reduced material waste",
                        "Faster processing time",
                        "Lower operational costs",
                        "Environmental compliance",
                        "Improved quality control"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-[#ee6c4d]" />
                          <span className="text-[#293241]/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Materials Processing Section with adjusted width */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start gap-6">
              <Layers className="h-12 w-12 text-[#1890d5] flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-[#293241]">Materials Processing</h3>
                <p className="text-[#293241]/70 mb-6">
                  From metals to composites, our waterjet technology handles diverse materials with precision and efficiency.
                </p>

                <div className="bg-[#ee6c4d]/10 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-[#293241] mb-3">Technology Impact</h4>
                  <p className="text-[#293241]/70">
                    Our waterjet technology ensures precise cutting of materials with negligible thermal damage and very low machining force, making it an ideal solution for materials processing.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">Material Capabilities</h4>
                    <ul className="space-y-2">
                      {[
                        "Metals and alloys",
                        "Composites and ceramics",
                        "Glass and stone",
                        "Plastics and rubber",
                        "Specialty materials"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-[#ee6c4d]" />
                          <span className="text-[#293241]/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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