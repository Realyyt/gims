'use client'

import {   Flame, Leaf, Gauge, Shield, Clock, CheckCircle, Wind, Settings } from 'lucide-react';
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-4 text-[#293241] text-center">Wind Turbine Solutions</h2>
        <h3 className="text-2xl font-bold mb-4 text-[#293241] text-center">Advanced Waterjet Technology for Efficient and Sustainable Turbine Decommissioning</h3>
        <div className="space-y-8">
          {/* Wind Energy Solutions Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start gap-6">
              <Wind className="h-12 w-12 text-[#1890d5] flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#293241]">Wind Energy Solutions</h3>
                <p className="text-[#293241]/70 mb-6">
                  Our state-of-the-art waterjet cutting services are specifically designed to streamline wind turbine dismantling and material processing.
                </p>

                <div className="bg-[#ee6c4d]/10 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-[#293241] mb-3">Technology Impact</h4>
                  <p className="text-[#293241]/70">
                    Our innovative methods focus on precision, environmental sustainability, and operational efficiency, helping renewable energy industries meet their decommissioning needs effectively.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">Cutting Capabilities</h4>
                    <ul className="space-y-2">
                      {[
                        "Precision blade cutting",
                        "Non-thermal processing",
                        "Composite material handling",
                        "Structure dismantling",
                        "Component recycling"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-[#ee6c4d]" />
                          <span className="text-[#293241]/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">Environmental Benefits</h4>
                    <ul className="space-y-2">
                      {[
                        "Zero thermal damage",
                        "Eco-friendly process",
                        "Material recovery",
                        "Waste reduction",
                        "Sustainable practices"
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

          {/* Component Processing Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start gap-6">
              <Settings className="h-12 w-12 text-[#1890d5] flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#293241]">Component Processing</h3>
                <p className="text-[#293241]/70 mb-6">
                  Streamlined solutions for efficient processing and recycling of wind turbine components.
                </p>

                <div className="bg-[#ee6c4d]/10 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-[#293241] mb-3">Processing Impact</h4>
                  <p className="text-[#293241]/70">
                    Our advanced processing methods maximize material recovery and minimize environmental impact, ensuring efficient handling of turbine components while maintaining the highest quality standards throughout the decommissioning process.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">Processing Features</h4>
                    <ul className="space-y-2">
                      {[
                        "Swift component removal",
                        "Efficient processing",
                        "Material separation",
                        "Quality assurance",
                        "Recycling optimization"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-[#ee6c4d]" />
                          <span className="text-[#293241]/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">Technical Benefits</h4>
                    <ul className="space-y-2">
                      {[
                        "Optimized workflow",
                        "Resource efficiency",
                        "Precise handling",
                        "Waste minimization",
                        "Quality control"
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