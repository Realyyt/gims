'use client'

import { Cog, Cpu, Lightbulb, Zap, Microscope, Bot } from 'lucide-react';
import ServiceHero from '../components/ServiceHero';
import ServiceSection from '../components/ServiceSection';
import ServiceCard from '../components/ServiceCard';
import CaseStudyCard from '../components/CaseStudyCard';

export default function CoreCompetenciesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceHero
        title="Our Core Competencies"
        subtitle="Delivering innovative and industry-leading solutions through advanced engineering expertise"
        backgroundImage="/image/ship.jpg"
      />

      <ServiceSection
        title="Engineering Excellence"
        subtitle="Our expertise extends beyond machine building, encompassing comprehensive engineering solutions"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Cog,
              title: "Machine Building & Waterjet Series",
              description: "Our flagship Waterjet Series machines cater to diverse cutting needs, offering unparalleled precision and efficiency.",
              features: [
                "Aerospace applications",
                "Automotive components",
                "Semiconductor processing",
                "Ship decommissioning",
                "Materials processing"
              ]
            },
            {
              icon: Cpu,
              title: "Industry Automation & Control",
              description: "Advanced programming for PLC and SCADA systems, empowering industries with enhanced automation and control.",
              features: [
                "Process control systems",
                "Safety implementations",
                "Manufacturing automation",
                "Energy sector solutions",
                "Material processing control"
              ]
            },
            {
              icon: Lightbulb,
              title: "Design & Development",
              description: "Comprehensive design services fortified with simulation modeling and analysis for optimized solutions.",
              features: [
                "Simulation-based design",
                "Rapid prototyping",
                "Performance optimization",
                "Cost reduction analysis",
                "Time-to-market improvement"
              ]
            },
            {
              icon: Microscope,
              title: "Electromagnetic & Plasma Research",
              description: "Development of custom plasma systems and vacuum-based technologies for advanced applications.",
              features: [
                "CVD systems",
                "Material synthesis",
                "Semiconductor manufacturing",
                "Plasma technology",
                "Vacuum systems"
              ]
            },
            {
              icon: Bot,
              title: "Embedded Engineering",
              description: "Custom sensor solutions and system integration for specific industrial applications.",
              features: [
                "Sensor development",
                "System integration",
                "Healthcare applications",
                "Manufacturing solutions",
                "Energy monitoring"
              ]
            },
            {
              icon: Zap,
              title: "High-Value Applications",
              description: "Creating substantial value across multiple high-demand industries through innovative solutions.",
              features: [
                "Precision cutting",
                "Clean processing",
                "Automation solutions",
                "R&D collaboration",
                "Prototype development"
              ]
            }
          ].map((competency, index) => (
            <ServiceCard
              key={index}
              icon={competency.icon}
              title={competency.title}
              description={competency.description}
              features={competency.features}
              delay={index * 0.1}
            />
          ))}
        </div>
      </ServiceSection>

      <ServiceSection
        title="Success Stories"
        subtitle="Real-world applications of our core competencies"
        isDark
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CaseStudyCard
            title="Aerospace Innovation"
            description="Advanced waterjet cutting system for composite aircraft components"
            image="/image/284ccf16900287ebcc60d2c3beced007.jpg"
            stats={[
              { label: "Precision", value: "±0.1mm" },
              { label: "Efficiency", value: "+40%" }
            ]}
          />
          <CaseStudyCard
            title="Automation Excellence"
            description="Complete factory automation system with real-time monitoring"
            image="/image/blast.jpeg"
            stats={[
              { label: "Productivity", value: "+65%" },
              { label: "ROI Time", value: "18 mo" }
            ]}
            delay={0.2}
          />
          <CaseStudyCard
            title="Research Partnership"
            description="Collaborative R&D project for next-gen manufacturing"
            image="/image/ship.jpg"
            stats={[
              { label: "Patents", value: "3" },
              { label: "Publications", value: "7" }
            ]}
            delay={0.4}
          />
        </div>
      </ServiceSection>
    </div>
  );
} 