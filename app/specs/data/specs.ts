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
  },
  {
    title: "Cutting Specs",
    columns: ["KATANA SJ700", "KATANA SJ450", "KATANA SJ150"],
    rows: [
      {
        label: "Cutting Area (D x W)",
        values: [
          "12 x 18 in\n305 x 460 mm",
          "12 x 18 in\n305 x 460 mm",
          "12 x 18 in\n305 x 460 mm"
        ]
      },
      {
        label: "Cut Bed Size (D x W)",
        values: [
          "13 x 19 in\n330 x 485 mm",
          "13 x 19 in\n330 x 485 mm",
          "13 x 19 in\n330 x 485 mm"
        ]
      },
      {
        label: "Z-Axis Travel",
        values: [
          "4 in\n102 mm",
          "4 in\n102 mm",
          "4 in\n102 mm"
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
        label: "Cutting Materials",
        values: [
          "Metal, glass, stone, tile, composites, plastic, rubber, foam",
          "Metal, glass, stone, tile, composites, plastic, rubber, foam",
          "Metal, glass, stone, tile, composites, plastic, rubber, foam"
        ]
      },
      {
        label: "Maximum Material Thickness",
        values: [
          "1 in\n25.4 mm",
          "0.75 in\n19 mm",
          "0.5 in\n12.7 mm"
        ]
      },
      {
        label: "Positioning Accuracy",
        values: [
          "±0.003 in\n±0.075 mm",
          "±0.003 in\n±0.075 mm",
          "±0.003 in\n±0.075 mm"
        ]
      },
      {
        label: "Repeatability",
        values: [
          "±0.002 in\n±0.05 mm",
          "±0.002 in\n±0.05 mm",
          "±0.002 in\n±0.05 mm"
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
          "80 mesh garnet",
          "80 mesh garnet",
          "80 mesh garnet"
        ]
      },
      {
        label: "Abrasive Rate",
        values: [
          "0.33 lb/min\n0.15 kg/min",
          "0.33 lb/min\n0.15 kg/min",
          "0.33 lb/min\n0.15 kg/min"
        ]
      },
      {
        label: "Abrasive Hopper Capacity",
        values: [
          "42 lb\n19.1 kg",
          "30 lb\n13.5 kg",
          "30 lb\n13.5 kg"
        ]
      },
      {
        label: "Abrasive Feed System",
        values: [
          "Automatic feed with level sensing",
          "Automatic feed with level sensing",
          "Automatic feed with level sensing"
        ]
      },
      {
        label: "Abrasive Consumption Rate",
        values: [
          "20 lb/hr\n9.1 kg/hr",
          "20 lb/hr\n9.1 kg/hr",
          "20 lb/hr\n9.1 kg/hr"
        ]
      },
      {
        label: "Abrasive Storage",
        values: [
          "Integrated hopper with moisture protection",
          "Integrated hopper with moisture protection",
          "Integrated hopper with moisture protection"
        ]
      }
    ]
  },
  {
    title: "Power Specs",
    columns: ["KATANA SJ700", "KATANA SJ450", "KATANA SJ150"],
    rows: [
      {
        label: "Power Requirement",
        values: [
          "220V / 60Hz (North America)\n220V / 50Hz (International)",
          "110V / 60Hz (North America)\n220V / 50Hz (International)",
          "110V / 60Hz (North America)\n220V / 50Hz (International)"
        ]
      },
      {
        label: "Circuit Requirement",
        values: [
          "30A dedicated circuit",
          "20A dedicated circuit",
          "20A dedicated circuit"
        ]
      },
      {
        label: "Power Consumption",
        values: [
          "3.5 kW maximum",
          "2.2 kW maximum",
          "2.2 kW maximum"
        ]
      },
      {
        label: "Standby Power",
        values: [
          "200W",
          "150W",
          "150W"
        ]
      },
      {
        label: "Emergency Stop",
        values: [
          "Dual redundant system",
          "Dual redundant system",
          "Dual redundant system"
        ]
      }
    ]
  },
  {
    title: "High Pressure Water Specs",
    columns: ["KATANA SJ700", "KATANA SJ450", "KATANA SJ150"],
    rows: [
      {
        label: "Operating Pressure",
        values: [
          "55,000 PSI\n3,800 bar",
          "45,000 PSI\n3,100 bar",
          "45,000 PSI\n3,100 bar"
        ]
      },
      {
        label: "Hydraulic Power",
        values: [
          "2,088 W\n2.8 HP",
          "820 W\n1.1 HP",
          "820 W\n1.1 HP"
        ]
      },
      {
        label: "Orifice Size",
        values: [
          "0.014 in\n0.35 mm",
          "0.012 in\n0.30 mm",
          "0.012 in\n0.30 mm"
        ]
      },
      {
        label: "Water Flow Rate",
        values: [
          "0.4 GPM\n1.5 L/min",
          "0.3 GPM\n1.1 L/min",
          "0.3 GPM\n1.1 L/min"
        ]
      },
      {
        label: "Intensifier Type",
        values: [
          "Direct drive intensifier",
          "Direct drive intensifier",
          "Direct drive intensifier"
        ]
      },
      {
        label: "Pressure Control",
        values: [
          "Electronic pressure control system",
          "Electronic pressure control system",
          "Electronic pressure control system"
        ]
      },
      {
        label: "Nozzle Assembly",
        values: [
          "Diamond orifice with carbide mixing tube",
          "Diamond orifice with carbide mixing tube",
          "Diamond orifice with carbide mixing tube"
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
      {
        label: "Input Water Flow Rate (minimum)",
        values: ["1.5 GPM\n5.7 L/min", "1 GPM\n3.8 L/min", "1 GPM\n3.8 L/min"]
      },
      {
        label: "Input Water Hardness (maximum TDS)",
        values: ["180 ppm\n180 mg/L", "180 ppm\n180 mg/L", "180 ppm\n180 mg/L"]
      },
      {
        label: "Input Water Temperature (maximum)",
        values: ["130 °F\n54 °C", "130 °F\n54 °C", "130 °F\n54 °C"]
      }
    ]
  },
  {
    title: "Water Drainage Specs",
    columns: ["KATANA SJ700", "KATANA SJ450", "KATANA SJ150"],
    rows: [
      {
        label: "Water Drain Distance from Waterjet (maximum)",
        values: ["30 ft\n9 m", "30 ft\n9 m", "30 ft\n9 m"]
      },
      {
        label: "Water Drain Height above Waterjet (maximum)",
        values: ["4 ft\n1.2 m", "4 ft\n1.2 m", "4 ft\n1.2 m"]
      },
      {
        label: "Water Drainage Flow Rate (maximum)",
        values: ["1.5 GPM\n5.7 L/min", "1.5 GPM\n5.7 L/min", "1.5 GPM\n5.7 L/min"]
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
      {
        label: "Connectivity to KATANA Waterjet",
        values: ["SD Card", "SD Card", "SD Card"]
      },
      {
        label: "Cost",
        values: ["Free", "Free", "Free"]
      }
    ]
  },
  {
    title: "Certifications",
    columns: ["KATANA SJ700", "KATANA SJ450", "KATANA SJ150"],
    rows: [
      {
        label: "North America (60Hz)",
        values: ["UL, cUL, FCC", "UL, cUL, FCC", "UL, cUL, FCC"]
      },
      {
        label: "International (50Hz)",
        values: ["CE", "CE", "CE"]
      }
    ]
  },
  {
    title: "Misc Specs",
    columns: ["KATANA SJ700", "KATANA SJ450", "KATANA SJ150"],
    rows: [
      {
        label: "Waterjet Size",
        values: [
          "34 x 26 x 55 in\n856 x 648 x 1400 mm",
          "34 x 26 x 48 in\n856 x 648 x 1220 mm",
          "34 x 26 x 22 in\n856 x 648 x 551 mm"
        ]
      },
      {
        label: "Waterjet Main Unit Weight (empty tank)",
        values: ["375 lb\n170 kg", "110 lb\n50 kg", "110 lb\n50 kg"]
      },
      {
        label: "Waterjet Main Unit Weight (filled tank)",
        values: ["800 lb\n360 kg", "400 lb\n180 kg", "400 lb\n180 kg"]
      },
      {
        label: "Connectivity",
        values: [
          "Offline. No internet required to run the Waterjet.",
          "Offline. No internet required to run the Waterjet.",
          "Offline. No internet required to run the Waterjet."
        ]
      },
      {
        label: "Sound Pressure Level",
        values: ["77.6 dB", "72.3 dB", "72.3 dB"]
      },
      {
        label: "Sound Power Level",
        values: ["85.4 dB", "87 dB", "87 dB"]
      },
      {
        label: "Room Temperature (operating)",
        values: [
          "32 – 160 °F\n0 – 70 °C",
          "32 – 160 °F\n0 – 70 °C",
          "32 – 160 °F\n0 – 70 °C"
        ]
      },
      {
        label: "Room Temperature (storage)",
        values: [
          "32 – 104 °F\n0 – 40 °C",
          "32 – 104 °F\n0 – 40 °C",
          "32 – 104 °F\n0 – 40 °C"
        ]
      }
    ]
  },
  {
    title: "Spatial Requirements",
    columns: ["KATANA SJ700", "KATANA SJ450", "KATANA SJ150"],
    rows: [
      {
        label: "Minimum weight supporting surface must withstand",
        values: [
          "Floor only\n1,300 lb\n600 kg",
          "Floor or table\n400 lb\n180 kg",
          "Floor or table\n400 lb\n180 kg"
        ]
      },
      {
        label: "Spatial Footprint",
        values: [
          "Floor only\n46 x 27 in\n1.2 x 0.7 m",
          "Floor or table\n46 x 27 in\n1.2 x 0.7 m",
          "Floor or table\n46 x 27 in\n1.2 x 0.7 m"
        ]
      },
      {
        label: "Height Clearance",
        values: [
          "80 in\n2 m\nabove the floor",
          "25 in\n0.6 m\nabove the top of the machine",
          "25 in\n0.6 m\nabove the top of the machine"
        ]
      }
    ]
  },
  {
    title: "Maintenance Procedures",
    columns: ["KATANA SJ700", "KATANA SJ450", "KATANA SJ150"],
    rows: [
      {
        label: "Short-Term Maintenance",
        values: [
          "Interval: 20–50 hrs of cutting",
          "Interval: 20–50 hrs of cutting",
          "Interval: 20–50 hrs of cutting"
        ]
      },
      {
        label: "Medium-Term Maintenance",
        values: [
          "Interval: 300 hrs of cutting",
          "Interval: 300 hrs of cutting",
          "Interval: 300 hrs of cutting"
        ]
      },
      {
        label: "Long-Term Maintenance",
        values: [
          "Interval: 600 hrs of cutting",
          "Interval: 600 hrs of cutting",
          "Interval: 600 hrs of cutting"
        ]
      }
    ]
  }
]; 