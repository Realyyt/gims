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
    title: "Machine Specifications",
    columns: ["KATANA SJ150"],
    rows: [
      { label: "Working Area", values: ["1500 x 3000 mm"] },
      { label: "Z-Axis Travel", values: ["200 mm"] },
      { label: "Maximum Speed", values: ["12,000 mm/min"] },
    ]
  },
  // Add more tables as needed
]; 