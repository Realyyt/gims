import { 
  CheckCircle,
  Zap,
  Sliders,
  Factory,
  Leaf,
  DollarSign,
  Maximize,
  Volume2,
  Cog
} from 'lucide-react';
import { 
    Settings, 
    Wrench,
    Lightbulb,
    Image as ImageIcon,
    Phone,
    BookOpen,
  } from 'lucide-react';
import { Service, IndustrialApplication, Specification } from '../types';


export const services: Service[] = [
  {
    title: "Cutting Speed Excellence",
    description: "3x faster cutting time compared to conventional systems, setting new standards in production efficiency",
    icon: Cog
  },
  {
    title: "Premium Finish Quality", 
    description: "Delivers exceptional cutting finish quality, ensuring precision and superior end results",
    icon: CheckCircle
  },
  {
    title: "Energy Efficient",
    description: "Achieve remarkable 70% energy savings in your operations, reducing operational costs significantly", 
    icon: Zap
  },
  {
    title: "Pressure Customization",
    description: "Fully customizable pressure variants to match your specific manufacturing requirements",
    icon: Sliders
  },
  {
    title: "Industry Versatility",
    description: "Adaptable for multiple industries and applications, providing flexible manufacturing solutions",
    icon: Factory
  },
  {
    title: "Environmental Impact",
    description: "Reduce your carbon footprint with 50% CO2 savings, supporting sustainable manufacturing",
    icon: Leaf
  },
  {
    title: "Cost Effectiveness",
    description: "Economical pricing structure that ensures optimal return on investment",
    icon: DollarSign
  },
  {
    title: "Space Optimization",
    description: "Compact footprint design that maximizes your facility space utilization",
    icon: Maximize
  },
  {
    title: "Quiet Operation",
    description: "Reduced noise levels for a better working environment and improved operator comfort",
    icon: Volume2
  }
];

export const industrialApplications: IndustrialApplication[] = [
  {
    title: "Aerospace",
    image: "/b9f968ce59e2b9b70373a6ebf7074555.jpg",
    description: "Precision cutting for aerospace components and satellite parts"
  },
  {
    title: "Civil Works",
    image: "/fa36c1eba5f6ce0325fbc50e0ee748ee.jpg",
    description: "Construction materials and infrastructure applications"
  },
  {
    title: "Automotive",
    image: "/5993377dd085bb4c52bc7fb94c961175.jpg",
    description: "Automotive parts and precision vehicle components"
  },
  {
    title: "Defense",
    image: "/6af112a0ba19b55f04935bfe15df3b36.jpg",
    description: "Military equipment and defense industry applications"
  }
]; 

export const menuItems = [
    {
      title: 'PRODUCT',
      icon: Settings,
      color: 'bg-blue-600',
      items: ['Waterjet Models', 'Injection vs Suspension', 'Waterjet Specification', 'Software', 'Consumables', 'Shop']
    },
    {
      title: 'SERVICES',
      icon: Wrench,
      color: 'bg-green-500',
      items: ['Waterjet Cutting', '3D Printing', 'Lathe', 'Milling', 'Welding']
    },
    {
      title: 'SOLUTIONS',
      icon: Lightbulb,
      color: 'bg-purple-500',
      items: ['3D Design', 'Simulation', 'SPM', 'R&D', 'Manufacturing', 'Shop']
    },
    {
      title: 'MATERIAL GALLERY',
      icon: ImageIcon,
      color: 'bg-orange-500',
      items: ['Material Images', 'Economic Calculator', 'Cutting Calculator', 'Quotation Maker', 'Feed Rate Chart']
    },
    {
      title: 'CONTACT',
      icon: Phone,
      color: 'bg-red-500',
      items: ['Location', 'Technical Support', 'Get Quote', 'Requirements']
    },
    {
      title: 'LEARN',
      icon: BookOpen,
      color: 'bg-teal-500',
      items: ['Technology', 'FAQ', 'Reviews', 'How To', 'Updates', 'Videos', 'Articles', 'About Us']
    }
  ];

  export const specifications: Specification[] = [
    {
      model: "KATANA SJ150",
      image: "/gims1.png",
      specs: {
        "Operation Pressure": "150 Bar",
        "Pump Specification": "2 HP", 
        "Water Consumption": "3 LPM",
        "Abrasive Consumption": "300 GPM",
        "Gantry Linear Speed": "1500 mm/min",
        "Customized For": "Research and Education Institute"
      }
    },
    {
      model: "KATANA SJ450",
      image: "/sj450.png",
      specs: {
        "Operation Pressure": "400 Bar",
        "Pump Specification": "8 HP",
        "Water Consumption": "5.5 LPM", 
        "Abrasive Consumption": "500 GPM",
        "Gantry Linear Speed": "1500 mm/min",
        "Customized For": "Mid-scale Industries & MSME"
      }
    },
    {
      model: "KATANA SJ700",
      image: "/sj700.png",
      specs: {
        "Operation Pressure": "700 Bar",
        "Pump Specification": "15 HP",
        "Water Consumption": "6.3 LPM",
        "Abrasive Consumption": "600 GPM",
        "Gantry Linear Speed": "1500 mm/min",
        "Customized For": "Commercial Industrial"
      }
    }
  ];
  
  export const customers = [
    { name: 'PBS', logo: '/logos/pbs.svg' },
    { name: 'Bandcamp', logo: '/logos/bandcamp.svg' },
    { name: 'Wistia', logo: '/logos/wistia.svg' },
    { name: 'TED', logo: '/logos/ted.svg' },
    { name: 'Robinhood', logo: '/logos/robinhood.svg' },
    { name: 'Equinox', logo: '/logos/equinox.svg' },
    { name: 'Strava', logo: '/logos/strava.svg' },
    { name: 'Vimeo', logo: '/logos/vimeo.svg' },
    { name: 'Patreon', logo: '/logos/patreon.svg' }
  ];



  export const features = [
    {
      id: '01',
      title: 'Most Reliable Controller',
      description: 'High-end microcontroller based control system ensures smooth operation, precise cutting quality, and high reliability'
    },
    {
      id: '02', 
      title: 'High Performance Motors',
      description: 'Hybrid servo stepper in the closed-loop control system ensures accurate movement and lower energy consumption'
    },
    {
      id: '03',
      title: 'Precision Traverse System', 
      description: 'Precision-grade ball screw provides excellent positional accuracy, repeatability, and low backlash'
    },
    {
      id: '04',
      title: 'Handheld Teach Pendant',
      description: 'Compact teach pendant offers a more user-friendly interface and is easy to operate'
    },
    {
      id: '05',
      title: 'Tungsten Carbide Nozzle',
      description: 'High-strength tungsten carbide nozzle ensures a long lifespan and is easy to replace'
    },
    {
      id: '06',
      title: 'Stainless Steel Catcher Tank',
      description: 'Stainless steel catcher tank offers a strong build, effortless maintenance and a 100-liter capacity'
    }
  ];