'use client'

import { Rocket, Factory, Diamond, Ship, Wind, Beaker,  } from 'lucide-react';
import ServiceHero from '../components/ServiceHero';
import ServiceSection from '../components/ServiceSection';
import ServiceCard from '../components/ServiceCard';
import CaseStudyCard from '../components/CaseStudyCard';
import { motion } from 'framer-motion';

export default function ApplicationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceHero
        title="Industry Applications"
        subtitle="Specialized Solutions Across Multiple High-Value Industries"
        backgroundImage="/image/284ccf16900287ebcc60d2c3beced007.jpg"
      />

      <ServiceSection
        title="Specialized Industry Solutions"
        subtitle="Comprehensive solutions tailored for specific industry needs"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Rocket,
              title: "Aerospace & Defense",
              description: "Advanced solutions for critical aerospace components and defense applications.",
              features: [
                "Carbon fiber composite processing",
                "Satellite components",
                "Aircraft parts manufacturing",
                "Defense equipment",
                "Rocket motor components"
              ]
            },
            {
              icon: Ship,
              title: "Maritime & Offshore",
              description: "Comprehensive solutions for maritime and offshore operations.",
              features: [
                "Ship decommissioning",
                "Hull maintenance",
                "Offshore platform dismantling",
                "Marine equipment servicing",
                "Underwater cutting operations"
              ]
            },
            {
              icon: Diamond,
              title: "Diamond & Precious Materials",
              description: "Precision cutting solutions for high-value materials.",
              features: [
                "Diamond processing",
                "Gemstone cutting",
                "Precision material shaping",
                "Quality optimization",
                "Minimal waste processing"
              ]
            },
            {
              icon: Factory,
              title: "Manufacturing & Processing",
              description: "Industrial solutions for diverse manufacturing needs.",
              features: [
                "Sheet metal cutting",
                "Glass processing",
                "Stone cutting",
                "Industrial automation",
                "Quality control systems"
              ]
            },
            {
              icon: Beaker,
              title: "Research & Development",
              description: "Supporting innovation through advanced technology.",
              features: [
                "Material testing",
                "Prototype development",
                "Process optimization",
                "Technical collaboration",
                "Custom solution development"
              ]
            },
            {
              icon: Wind,
              title: "Renewable Energy",
              description: "Supporting sustainable energy infrastructure.",
              features: [
                "Wind turbine maintenance",
                "Solar panel processing",
                "Energy equipment servicing",
                "Component recycling",
                "Green technology support"
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
        title="Featured Projects"
        subtitle="Real-world applications and success stories"
        isDark
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CaseStudyCard
            title="Aerospace Innovation"
            description="Precision cutting solution for composite aircraft components"
            image="/image/284ccf16900287ebcc60d2c3beced007.jpg"
            stats={[
              { label: "Precision", value: "±0.1mm" },
              { label: "Time Saved", value: "60%" },
              { label: "Material Saved", value: "40%" }
            ]}
          />
          <CaseStudyCard
            title="Maritime Excellence"
            description="Large-scale ship decommissioning project"
            image="/image/7c666d08646ce761ae07dc296662b00d.jpg"
            stats={[
              { label: "Completion", value: "30 days" },
              { label: "Recovery Rate", value: "95%" },
              { label: "Cost Saving", value: "45%" }
            ]}
            delay={0.2}
          />
          <CaseStudyCard
            title="Industrial Advancement"
            description="Automated manufacturing system implementation"
            image="/image/blast.jpeg"
            stats={[
              { label: "Efficiency", value: "+75%" },
              { label: "Quality", value: "99.9%" },
              { label: "ROI", value: "12 mo" }
            ]}
            delay={0.4}
          />
        </div>
      </ServiceSection>

      {/* Additional Success Metrics Section */}
      <ServiceSection
        title="Success Metrics"
        subtitle="Measurable impact across industries"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Projects Completed", value: "500+" },
            { label: "Industries Served", value: "12+" },
            { label: "Client Satisfaction", value: "98%" },
            { label: "Years Experience", value: "25+" }
          ].map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <p className="text-4xl font-bold text-[#1890d5] mb-2">{metric.value}</p>
              <p className="text-[#293241]/70">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </ServiceSection>
    </div>
  );
} 