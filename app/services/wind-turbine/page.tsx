'use client'

import {   Flame, Leaf, Gauge, Shield, Clock,  } from 'lucide-react';
import ServiceHero from '../components/ServiceHero';
import ServiceSection from '../components/ServiceSection';
import ServiceCard from '../components/ServiceCard';
import CaseStudyCard from '../components/CaseStudyCard';

export default function WindTurbinePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceHero
        title="Wind Turbine Cutting Solutions"
        subtitle="Advanced Waterjet Technology for Efficient and Sustainable Turbine Decommissioning"
        backgroundImage="/image/7c666d08646ce761ae07dc296662b00d.jpg"
      />

      <ServiceSection
        title="Our Solutions"
        subtitle="GIMS offers state-of-the-art waterjet cutting services, specifically designed to streamline wind turbine dismantling and material processing. Our innovative methods focus on precision, environmental sustainability, and operational efficiency, helping renewable energy industries meet their decommissioning needs effectively."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Flame,
              title: "Precision Blade Cutting Without Heat",
              description: "Utilizing non-thermal waterjet technology, GIMS ensures highly accurate cutting of turbine blades without producing heat. This preserves the structural integrity of components, making them suitable for recycling or repurposing.",
              features: [
                "Clean cuts without thermal damage",
                "Material integrity preservation",
                "Recycling-ready components",
                "High precision cutting",
                "Sustainable processing"
              ]
            },
            {
              icon: Shield,
              title: "Safe, Flameless Dismantling",
              description: "Safety remains our top priority. Our waterjet systems operate without flames or combustion, significantly reducing risks during the decommissioning process.",
              features: [
                "No combustion process",
                "Enhanced worker safety",
                "Secure environment",
                "Risk reduction",
                "Hazard elimination"
              ]
            },
            {
              icon: Leaf,
              title: "Environmentally Responsible Cutting",
              description: "GIMS integrates eco-conscious practices into its services by using water and natural abrasives instead of harmful chemicals.",
              features: [
                "Eco-friendly processes",
                "Natural abrasives usage",
                "Minimal environmental impact",
                "Sustainable practices",
                "Green technology"
              ]
            },
            {
              icon: Gauge,
              title: "Flexible Tower Structure Dismantling",
              description: "Our waterjet technology offers unmatched versatility when dismantling wind turbine towers, handling steel, composites, and concrete effectively.",
              features: [
                "Multi-material processing",
                "Adaptable solutions",
                "Custom cutting plans",
                "Structural integrity",
                "Efficient dismantling"
              ]
            },
            {
              icon: Clock,
              title: "Streamlined Component Processing",
              description: "We focus on delivering efficient solutions that minimize downtime during decommissioning, ensuring swift removal and processing of components.",
              features: [
                "Minimal downtime",
                "Quick processing",
                "Efficient removal",
                "Component recycling",
                "Optimized operations"
              ]
            }
          ].map((solution, index) => (
            <ServiceCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              features={solution.features}
              delay={index * 0.1}
            />
          ))}
        </div>
      </ServiceSection>

      <ServiceSection
        title="Case Studies"
        subtitle="Real-world applications of our wind turbine solutions"
        isDark
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CaseStudyCard
            title="Precision Blade Cutting Without Heat"
            description="Utilizing non-thermal waterjet technology, GIMS ensures highly accurate cutting of turbine blades without producing heat. This preserves the structural integrity of components, making them suitable for recycling or repurposing."
            image="/image/7c666d08646ce761ae07dc296662b00d.jpg"
            stats={[
              { label: "", value: "" }
            ]}
          />
          <CaseStudyCard
            title="Safe, Flameless Dismantling"
            description="Safety remains our top priority. Our waterjet systems operate without flames or combustion, significantly reducing risks during the decommissioning process. This approach creates a secure environment for work teams and eliminates ignition hazards."
            image="/image/7c666d08646ce761ae07dc296662b00d.jpg"
            stats={[
              { label: "", value: "" }
            ]}
          />
          <CaseStudyCard
            title="Environmentally Responsible Cutting"
            description="GIMS integrates eco-conscious practices into its services by using water and natural abrasives instead of harmful chemicals. This approach minimizes environmental harm and aligns with green energy initiatives."
            image="/image/7c666d08646ce761ae07dc296662b00d.jpg"
            stats={[
              { label: "", value: "" }
            ]}
          />
          {/* Add more case studies as needed */}
        </div>
      </ServiceSection>
    </div>
  );
} 