import { 
  Zap, 
  Gauge,
} from 'lucide-react';
import { SpecSection, Feature, ComparisonData } from '../types';

export const machineSpecs: SpecSection[] = [
  {
    title: "Machine Specifications",
    specs: [
      {
        name: "Working Area",
        value: "1500 x 3000 mm",
        description: "Large format cutting capability"
      },
      {
        name: "Z-Axis Travel",
        value: "200 mm",
        description: "Accommodates various material thicknesses"
      },
      {
        name: "Maximum Speed",
        value: "12,000 mm/min",
        description: "High-speed cutting capability"
      },
      // Add more specifications...
    ]
  },
  // Add more sections...
];

export const keyFeatures: Feature[] = [
  {
    icon: Zap,
    title: "Cutting Speed",
    description: "Industry-leading cutting speed with precision control",
    value: "Up to 12,000 mm/min"
  },
  {
    icon: Gauge,
    title: "Pressure System",
    description: "Advanced pressure control for optimal cutting performance",
    value: "4000 bar"
  },
  // Add more features...
];

export const comparisonData: ComparisonData[] = [
  {
    feature: "Cutting Speed",
    katana: "12,000 mm/min",
    competitor: "8,000 mm/min"
  },
  {
    feature: "Accuracy",
    katana: "±0.05 mm",
    competitor: "±0.1 mm"
  },
  // Add more comparison data...
];

export const specTables = [
  {
    title: "Top Specs",
    columns: ["KATANA SJ700", "KATANA SJ450", "KATANA SJ150"],
    rows: [
      { 
        label: "Model", 
        values: ["KATANA SJ700", "KATANA SJ450", "KATANA SJ150"]
      },
      { 
        label: "Cutting Area (D x W)", 
        values: [
          "12 x 18 in\n305 x 460 mm",
          "12 x 18 in\n305 x 460 mm",
          "18 x 24 in\n457 x 610 mm"
        ]
      },
      { 
        label: "Kerf (width of cut)", 
        values: [
          "0.044 in\n1.1 mm",
          "0.044 in\n1.1 mm",
          "0.044 in\n1.1 mm"
        ]
      },
      { 
        label: "Abrasive Rate", 
        values: [
          "0.33 lb/min\n0.15 kg/min",
          "0.33 lb/min\n0.15 kg/min",
          "0.40 lb/min\n0.18 kg/min"
        ]
      },
      { 
        label: "Power Requirement", 
        values: [
          "220V / 60Hz (North America)\n220V / 50Hz (International)",
          "110V / 60Hz (North America)\n220V / 50Hz (International)",
          "220V / 60Hz (North America)\n220V / 50Hz (International)"
        ]
      }
    ]
  }
]; 