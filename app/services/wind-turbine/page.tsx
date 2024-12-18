'use client'

import {  Hammer, Flame, Leaf, Gauge, Shield, Target, Droplets, Recycle, Clock, Award, HeartHandshake, BadgeCheck, Ship } from 'lucide-react';
import ServiceHero from '../components/ServiceHero';
import ServiceSection from '../components/ServiceSection';
import ServiceCard from '../components/ServiceCard';
import CaseStudyCard from '../components/CaseStudyCard';

export default function WindTurbinePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceHero
        title="Wind Turbine Cutting Solutions"
        subtitle="Advanced Waterjet Technology by GIMS"
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
                "Ensures clean cuts and maintains material usability.",
                "Preserves structural integrity of components",
                "Suitable for recycling or repurposing"
              ]
            },
            {
              icon: Shield,
              title: "Safe, Flameless Dismantling",
              description: "Safety remains our top priority. Our waterjet systems operate without flames or combustion, significantly reducing risks during the decommissioning process. This approach creates a secure environment for work teams and eliminates ignition hazards.",
              features: [
                "Safe operation in all environments, including hazardous zones.",
                "Eliminates ignition hazards",
                "Reduces risks during decommissioning process"
              ]
            },
            {
              icon: Leaf,
              title: "Environmentally Responsible Cutting",
              description: "GIMS integrates eco-conscious practices into its services by using water and natural abrasives instead of harmful chemicals. This approach minimizes environmental harm and aligns with green energy initiatives.",
              features: [
                "Reduces environmental impact and supports sustainability goals.",
                "Minimizes environmental harm",
                "Aligns with green energy initiatives"
              ]
            },
            {
              icon: Gauge,
              title: "Flexible Tower Structure Dismantling",
              description: "Our waterjet technology offers unmatched versatility when dismantling wind turbine towers. Whether dealing with steel, composites, or concrete, we deliver precise and efficient cutting tailored to project requirements.",
              features: [
                "Handles a wide range of materials effectively.",
                "Delivers precise and efficient cutting",
                "Tailored to project requirements"
              ]
            },
            {
              icon: Clock,
              title: "Streamlined Component Processing",
              description: "We focus on delivering efficient solutions that minimize downtime during decommissioning. GIMS waterjet systems allow for the swift removal and processing of wind turbine components, ensuring they are ready for reuse or recycling.",
              features: [
                "Enhances productivity while optimizing component repurposing.",
                "Minimizes downtime during decommissioning",
                "Swift removal and processing of components"
              ]
            },
            // ... other solution cards
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