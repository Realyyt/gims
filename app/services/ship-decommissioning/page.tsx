'use client'

import { Ship, Anchor, Droplets,  Shield,  CheckCircle } from 'lucide-react'
import ServiceHero from '../components/ServiceHero';
import ServiceSection from '../components/ServiceSection';

export default function ShipDecommissioningPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceHero
        title="Ship Decommissioning Solutions"
        subtitle="Revolutionary Waterjet Technology for Industries"
        backgroundImage="/image/ship-decom.jpg"
      />

      <ServiceSection
        title="Waterjet Solutions"
        subtitle="Advanced waterjet technology for ship decommissioning"
      >
        <div className="space-y-8">
          {/* Maritime Operations Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start gap-6">
              <Ship className="h-12 w-12 text-[#1890d5] flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#293241]">Waterjet Ship Operations</h3>
                <p className="text-[#293241]/70 mb-6">
                  Ship decommissioning at ports like Alang traditionally relies on manual labor, involving significant safety risks and environmental concerns. Our waterjet technology revolutionizes this process with precision, safety, and environmental sustainability.
                </p>

                <div className="bg-[#ee6c4d]/10 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-[#293241] mb-3">Ship Descaling Innovation</h4>
                  <p className="text-[#293241]/70">
                    Our waterjet descaling technology allows for maintenance during transit, addressing biofouling and corrosion without additional downtime.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">Ship Decommissioning</h4>
                    <ul className="space-y-2">
                      {[
                        "Enhanced worker safety protocols",
                        "Environmental compliance",
                        "Efficient material recovery",
                        "Reduced hazardous exposure",
                        "Improved recycling processes"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-[#ee6c4d]" />
                          <span className="text-[#293241]/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">Offshore Operations</h4>
                    <ul className="space-y-2">
                      {[
                        "Platform dismantling",
                        "Pipeline removal",
                        "Subsea structure cutting",
                        "Environmental protection",
                        "Waste minimization"
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

          {/* Hull Maintenance Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start gap-6">
              <Anchor className="h-12 w-12 text-[#1890d5] flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#293241]">Hull Maintenance Solutions</h3>
                <p className="text-[#293241]/70 mb-6">
                  Our advanced waterjet technology provides innovative solutions for hull maintenance and descaling operations during transit.
                </p>

                <div className="bg-[#ee6c4d]/10 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-[#293241] mb-3">Maintenance Innovation</h4>
                  <p className="text-[#293241]/70">
                    Real-time descaling with waterjet technology minimizes drag and friction during transit, leading to immediate fuel savings and improved hydrodynamic performance, eliminating the need for separate dry-docking periods.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">Key Benefits</h4>
                    <ul className="space-y-2">
                      {[
                        "Ongoing maintenance during transit",
                        "Reduced dry-docking time",
                        "Improved fuel efficiency",
                        "Extended hull life",
                        "Cost-effective maintenance"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-[#ee6c4d]" />
                          <span className="text-[#293241]/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">Technical Features</h4>
                    <ul className="space-y-2">
                      {[
                        "Biofouling prevention",
                        "Corrosion management",
                        "Surface optimization",
                        "Real-time monitoring",
                        "Automated cleaning systems"
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

          {/* Offshore Decommissioning Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start gap-6">
              <Droplets className="h-12 w-12 text-[#1890d5] flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#293241]">Offshore Decommissioning</h3>
                <p className="text-[#293241]/70 mb-6">
                  Specialized solutions for decommissioning offshore oil and gas infrastructure, addressing the growing need for platform and pipeline removal.
                </p>

                <div className="bg-[#ee6c4d]/10 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-[#293241] mb-3">Industry Impact</h4>
                  <p className="text-[#293241]/70">
                    With over 7,500 offshore platforms becoming obsolete in the next decades, our waterjet technology provides efficient and environmentally responsible solutions for infrastructure removal.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">Infrastructure Solutions</h4>
                    <ul className="space-y-2">
                      {[
                        "Platform dismantling",
                        "Pipeline removal",
                        "Subsea structure cutting",
                        "Rig decommissioning",
                        "Conductor removal"
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
                        "Minimal marine impact",
                        "Clean cutting process",
                        "Reduced contamination risk",
                        "Eco-friendly approach",
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

          {/* Environmental Compliance Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start gap-6">
              <Shield className="h-12 w-12 text-[#1890d5] flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#293241]">Environmental Compliance</h3>
                <p className="text-[#293241]/70 mb-6">
                  Our waterjet technology ensures compliance with global environmental standards while maintaining operational efficiency.
                </p>

                <div className="bg-[#ee6c4d]/10 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-[#293241] mb-3">Sustainability Focus</h4>
                  <p className="text-[#293241]/70">
                    By incorporating waterjet technology into ship dismantling processes, we significantly improve environmental sustainability and align with global trends toward greener maritime operations.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">Compliance Standards</h4>
                    <ul className="space-y-2">
                      {[
                        "Global maritime regulations",
                        "Environmental protection",
                        "Waste management",
                        "Emissions control",
                        "Resource conservation"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-[#ee6c4d]" />
                          <span className="text-[#293241]/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">Community Benefits</h4>
                    <ul className="space-y-2">
                      {[
                        "Reduced environmental impact",
                        "Safer work environment",
                        "Community protection",
                        "Sustainable practices",
                        "Economic growth support"
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
      </ServiceSection>

      
    </div>
  )
} 