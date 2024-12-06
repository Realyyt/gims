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
          "1250x1250x150 (Customisable)",
          "600x600x100 (Customisable)",
          "600x300x50 (Customisable)"
        ]
      },
      { 
        label: "Kerf (width of cut)", 
        values: [
          "0.6 - 1.5 mm",
          "0.6 - 1.5 mm",
          "0.6 - 1.5 mm"
        ]
      },
      { 
        label: "Abrasive Rate", 
        values: [
          "5 to 15 gram/min (Adjustable)",
          "5 to 15 gram/min (Adjustable)",
          "5 to 15 gram/min (Adjustable)"
        ]
      },
      { 
        label: "Power Requirement", 
        values: [
          "380V~450v/50Hz,Three phase",
          "380V~450v /50Hz,Three phase",
          "380V~450v/50Hz, Three phase"
        ]
      }
    ]
  },
  {
    title: "Cutting Specs",
    columns: ["KATANA SJ700", "KATANA SJ450", "KATANA SJ150"],
    rows: [
      {
        label: "Cutting Area (D x W)",
        values: [
          "1250x1250mm (Customisable)",
          "600x600mm (Customisable)",
          "600x300mm (Customisable)"
        ]
      },
      {
        label: "Cut Bed Size (D x W)",
        values: [
          "1300x1300mm(Customisable)",
          "630x630mm (Customisable)",
          "630x330mm (Customisable)"
        ]
      },
      {
        label: "Z-Axis Travel",
        values: [
          "150mm (Customisable)",
          "100mm (Customisable)",
          "50mm (Customisable)"
        ]
      },
      {
        label: "Kerf (width of cut)",
        values: [
          "0.6 - 1.5mm",
          "0.6 - 1.5mm",
          "0.6 - 1.5mm"
        ]
      },
      {
        label: "Maximum Material Thickness",
        values: [
          "100mm",
          "50mm",
          "25mm"
        ]
      },
      {
        label: "Positioning Accuracy",
        values: [
          "0.03mm (Customisable)",
          "0.03mm (Customisable)",
          "0.03mm (Customisable)"
        ]
      },
      {
        label: "Repeatability",
        values: [
          "0.02mm (Customisable)",
          "0.02mm (Customisable)",
          "0.02mm (Customisable)"
        ]
      }
    ]
  },
  {
    title: "Abrasive Specs",
    columns: ["KATANA SJ700", "KATANA SJ450", "KATANA SJ150"],
    rows: [
      {
        label: "Abrasive Type",
        values: [
          "80 Mesh garnet",
          "80 Mesh garnet",
          "120 Mesh garnet"
        ]
      },
      {
        label: "Abrasive Rate",
        values: [
          "5 to 15 gram/min (Adjustable)",
          "5 to 15 gram/min (Adjustable)",
          "5 to 15 gram/min (Adjustable)"
        ]
      },
      {
        label: "Recommanded abrasive",
        values: [
          "Our standard absarive\nfor max performance",
          "Our standard absarive\nfor max performance",
          "Our standard absarive\nfor max performance"
        ]
      },
      
      
    ]
  },
  {
    title: "Power Specs",
    columns: ["KATANA SJ700", "KATANA SJ450", "KATANA SJ150"],
    rows: [
      {
        label: "Power Requirement",
        values: [
          "380V~450v/50Hz, Three phase",
          "380V~450v/50Hz, Three phase",
          "380V~450v/50Hz, Three phase"
        ]
      },
      {
        label: "Power Consumption",
        values: [
          "15 HP maximum",
          "6 HP maximum",
          "3 HP maximum"
        ]
      },
    ]
  },
  {
    title: "High Pressure Water Specs",
    columns: ["KATANA SJ700", "KATANA SJ450", "KATANA SJ150"],
    rows: [
      {
        label: "Operating Pressure",
        values: [
          "700 bar",
          "400   bar",
          "150 bar"
        ]
      },
      {
        label: "Orifice Size",
        values: [
          "0.5 - 1.2 mm",
          "0.5 - 1.2 mm",
          "0.5 - 1.2 mm"
        ]
      },
      {
        label: "Water Flow Rate",
        values: [
          "8 L/min Depends on nozzle size",
          "4.5 L/min Depends on nozzle size",
          "3 L/min Depends on nozzle size"
        ]
      },
      {
        label: "Nozzle y",
        values: [
          "Tungsten Carbide",
          "Tungsten Carbide",
          "Tungsten Carbide"
        ]
      }
    ]
  },
  {
    title: "Input Water Specs",
    columns: ["KATANA SJ700", "KATANA SJ450", "KATANA SJ150"],
    rows: [
      {
        label: "Water Source",
        values: ["Filtered Tap Water", "Filtered Tap Water", "Filtered Tap Water"]
      },
      {
        label: "Input Water Filter",
        values: ["300 mesh", "300 mesh", "300 mesh"]
      },
      {
        label: "Input Water Pressure (minimum)",
        values: ["35 psi\n2.4 bar", "35 psi\n2.4 bar", "35 psi\n2.4 bar"]
      },
    ]
  },
  {
    title: "Water Drainage Specs",
    columns: ["KATANA SJ700", "KATANA SJ450", "KATANA SJ150"],
    rows: [
      {
        label: "Drain Distance from Waterjet (maximum)",
        values: ["5 m", "5 m", "5 m"]
      },
      {
        label: "Water Recirculation",
        values: ["Not Recommended", "Not Recommended", "Not Recommended"]
      }
    ]
  },
  {
    title: "Software Specs",
    columns: ["KATANA SJ700", "KATANA SJ450", "KATANA SJ150"],
    rows: [
      {
        label: "System Requirements",
        values: [
          "Internet connection required (for software only)",
          "Internet connection required (for software only)",
          "Internet connection required (for software only)"
        ]
      },
      {
        label: "Browser Compatibility",
        values: [
          "Chrome, Safari, Edge, Explorer, Firefox",
          "Chrome, Safari, Edge, Explorer, Firefox",
          "Chrome, Safari, Edge, Explorer, Firefox"
        ]
      },
      {
        label: "Compatible Input Design File Types",
        values: [".dxf, .svg", ".dxf, .svg", ".dxf, .svg"]
      },
      {
        label: "Output Cut File Type",
        values: [".gcode", ".gcode", ".gcode"]
      },
    ]
  },
 
  
     
  {
    title: "Spatial Requirements",
    columns: ["KATANA SJ700", "KATANA SJ450", "KATANA SJ150"],
    rows: [
      {
        label: "Minimum weight supporting surface ",
        values: [
          "Floor \n700 kg",
          "Floor \n250 kg",
          "Table\n150 kg"
        ]
      },
      {
        label: "Spatial Footprint",
        values: [
          "3000mm x 2800mm",
          "1200mm x 1400mm",
          "1200mm x 800mm"
        ]
      },
    ]
  },
]; 