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
import { Service, IndustrialApplication, Specification } from '../types';

export interface MediaItem {
  type: 'image' | 'video';
  src: string;
  title: string;
}


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
  },
  {
    title: "Medical",
    image: "/2e9efcc7e2ec55a1a09e5a1fd59e1e6f.jpg",
    description: "Precision medical devices and surgical instruments"
  },
  {
    title: "Electronics",
    image: "/670c15988e6badbc4976ac42f4fa778b.jpg",
    description: "Circuit boards and electronic component manufacturing"
  },
  {
    title: "Energy",
    image: "/0307d63360ea9d0cbbe3a0c6a6f80afc.jpg",
    description: "Components for renewable energy and power generation"
  },
  {
    title: "Marine",
    image: "/330e7adcd3564a053e3ed39b3d59fb26.jpg",
    description: "Shipbuilding and marine equipment fabrication"
  },
  {
    title: "Mining",
    image: "/e703e1b6504ed7ed38efcb3d779487eb.jpg",
    description: "Heavy equipment and mining machinery components"
  },
  {
    title: "Food Processing",
    image: "/4583de9ea04ad5488a6fe74e8bd7a6a6.jpg",
    description: "Food processing equipment and machinery parts"
  },
  {
    title: "Textile",
    image: "/cc941db18d40dfda9182ad796ee07db0.jpg",
    description: "Textile machinery and equipment components"
  },
  {
    title: "Research",
    image: "/dfa35ad401df335d1944ececce90f551.jpg",
    description: "Scientific research and development applications"
  }
];



  export const specifications: Specification[] = [
    {
      model: "KATANA SJ700",
      image: "/sj700.png",
      specs: {
        "Pressure": "700 Bar",
        "Maximum Flow Rate": "8 L/min",
        "Abrasive Rate": "5 g/sec to 15 g/sec",
        "Gantry Max Speed": "3,000 mm/min", 
        "Bed size": "1250x1250x150mm (customizable)",
        "For steel": "25 mm - 46 mm/min\n50 mm - 20 mm/min\n10 mm - 118 mm/min"
      }
    },
    {
      model: "KATANA SJ400",
      image: "/sj451.png",
      specs: {
        "Pressure": "400 Bar",
        "Maximum Flow Rate": "4.5 L/min",
        "Abrasive Rate": "5 g/sec to 15 g/sec",
        "Gantry Max Speed": "3,000 mm/min",
        "Bed size": "600x600x100mm (customizable)",
        "For steel": "10 mm - 60 mm/min\n25 mm - 13 mm/min\n5 mm - 125 mm/min"
      }
    },
    {
      model: "KATANA SJ150",
      image: "/gims1.png",
      specs: {
        "Pressure": "150 Bar",
        "Maximum Flow Rate": "3 L/min",
        "Abrasive Rate": "5 g/sec to 15 g/sec",
        "Gantry Max Speed": "3,000 mm/min",
        "Bed size": "600x300x50mm (customizable)",
        "For steel": "2 mm - 42 mm/min\n3 mm - 26 mm/min\n1 mm - 62 mm/min"
      }
    }
  ];
  
  export const customers = [
    { name: 'BHC', logo: '/BHC.png' },
    { name: 'IIT', logo: '/IIT.png' },
    { name: 'IIT1', logo: '/IIT1.png' },
    { name: 'WhatsApp Image 1', logo: '/WhatsApp_Image_2024-11-25_at_19.49.54__1_-removebg-preview.png' },
    { name: 'WhatsApp Image 2', logo: '/WhatsApp_Image_2024-11-25_at_19.49.54-removebg-preview.png' },
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

  export const navItems = {
    'Technical Specifications': [
      { title: 'KATANA SJ150', image: '/gims1.png', link: '/specs' },
      { title: 'KATANA SJ450', image: '/sj451.png', link: '/specs' },
      { title: 'KATANA SJ700', image: '/sj700.png', link: '/specs' },
      { title: 'Compare Models', image: '/2d7839103e8aed7e9ac618fd7dd66ca2.jpg', link: '/specs' },
      { title: 'Software', image: '/6bb6115d24ebd60c2d84f224c7a9c004.jpg', link: '/specs/' },
    ],
    'Materials': [
      { title: 'Gallery', image: '/marble.jpg', description: 'Explore different materials and cutting capabilities' },
      { title: 'Waterjet Feedrate Calculator', image: '/calc.jpg', description: 'Calculate pressure, flow rate and cutting parameters' },
      { title: 'Applications', image: '/application.jpg', description: 'Advanced manufacturing systems' },
    ],
    'Services': [
      { title: 'New product development ', image: '/new product.jpg', description: 'Our story and mission' },
      { title: 'Design and simulation', image: '/machine-shops-menu.jpg', description: 'Innovation at its core' },
      { title: 'Manufacturing and fabrication', image: '/rapid-prototyping-flyout-thumbnail.jpg', description: 'State-of-the-art manufacturing' },
      { title: 'Machine tool service', image: '/testing-quality-control-flyout-thumbnail.jpg', description: 'State-of-the-art Tooling service' },
    ],
    'Learn more': [
      { title: 'About Us', image: '/gims1.png', description: 'Innovation at its core' },
      { title: 'FAQ', image: '/faq-flyout-thumbnail.jpg', description: 'Frequently asked questions' },
      { title: 'Reviews', image: '/8512fbae976e871e5353cdd64c165fa1.jpg', description: 'What our customers say' },
      { title: 'Articles', image: '/9fdabfb0a24c51234f146b33d48d003d.jpg', description: 'Read our latest articles' },
    ],
  };
  
  export const mediaItems: MediaItem[] = [
    {
      type: 'video',
      src: '/videos/Composite katana sj 400-2-2 - Compressed with FlexClip (online-video-cutter.com) - Compressed with FlexClip.mp4',
      title: 'Waterjet Cutting Demo',
    },
    {
      type: 'image', 
      src: '/image/1718973848141-2.jpg',
      title: 'Katana sj150 in display',
    },
    {
      type: 'video',
      src: '/videos/india-s-first-abrasive-waterjet-katana-series-720-ytshorts.savetube.me (online-video-cutter.com)-3-2.mp4',
      title: 'India\'s First Abrasive Waterjet - Katana Series',
    },
    {
      type: 'image',
      src: '/image/PXL_20241115_094322236.jpg',
      title: 'Materials cutting',
    },
    {
      type: 'video',
      src: '/videos/PXL_20241115_113910820-2-2-2-2.mp4',
      title: 'Cutting operation on sj450',
    },
    {
      type: 'image',
      src: '/image/photo_6_2024-11-25_08-07-53.jpg',
      title: 'katana sj450 in display',
    }
  ];