'use client'

import { Rocket, Factory, Diamond, Ship, Wind, Beaker, CheckCircle } from 'lucide-react';
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
        subtitle="Advanced Waterjet Solutions for Diverse Industry Needs"
        backgroundImage="/image/284ccf16900287ebcc60d2c3beced007.jpg"
      />

     
<ServiceSection
        title="Industry Applications"
        subtitle="Specialized waterjet solutions across diverse industries"
      >
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Rocket,
              title: "Aerospace & Defense",
              description: "Advanced solutions for aerospace platforms across Indian Defense Services and civil aviation, specializing in carbon fiber composite processing.",
              features: [
                "Heat-sensitive material processing",
                "Satellite components manufacturing",
                "Aircraft parts production",
                "Rocket motor components",
                "Defense equipment processing"
              ]
            },
            {
              icon: Ship,
              title: "Maritime & Offshore",
              description: "Revolutionary solutions for ship decommissioning at ports like Alang, focusing on safety and environmental sustainability.",
              features: [
                "Ship dismantling operations",
                "Offshore platform decommissioning",
                "Real-time hull descaling",
                "Environmental compliance",
                "Cost-effective solutions"
              ]
            },
            {
              icon: Diamond,
              title: "Diamond & Precious Materials",
              description: "Precision cutting solutions for India's diamond processing industry, supporting 91.67% of global diamond processing.",
              features: [
                "Precision diamond cutting",
                "Minimal material waste",
                "Quality optimization",
                "Innovative designs",
                "Cost-effective processing"
              ]
            },
            {
              icon: Factory,
              title: "Sheet Metal & Allied Industries",
              description: "Advanced cutting solutions for aerospace, automotive, and construction sectors with unmatched performance.",
              features: [
                "Low force cutting",
                "Thick material processing",
                "No heat affected zones",
                "Complex shape cutting",
                "Environmentally friendly"
              ]
            },
            {
              icon: Wind,
              title: "Wind Turbine Solutions",
              description: "Specialized services for wind turbine dismantling and material processing with focus on precision and sustainability.",
              features: [
                "Blade cutting without heat",
                "Safe dismantling process",
                "Environmental compliance",
                "Component recycling",
                "Efficient processing"
              ]
            },
            {
              icon: Beaker,
              title: "Mining & Research",
              description: "Revolutionary solutions for mining operations and research applications, enhancing efficiency and safety.",
              features: [
                "Mineral extraction",
                "Process optimization",
                "Safety enhancement",
                "Environmental protection",
                "Cost reduction"
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