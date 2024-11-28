// Define the type for a single product
interface Product {
    id: number;
    title: string;
    price: number;
    company: string;
    powerRequirement: string;
    info: string;
    incart: boolean;
    count: number;
  }
  
  // Define the rowData array with the Product type
  export const rowData: Product[] = [
    {
      id: 1,
      title: "car",
      price: 10,
      company: "Toyota",
      powerRequirement: "220V / 60Hz (North America) 220V / 50Hz (International)",
      info: "One of the best cars",
      incart: false,
      count: 1
    },
    {
      id: 2,
      title: "car",
      price: 12,
      company: "Honda",
      powerRequirement: "220V / 60Hz (North America) 220V / 50Hz (International)",
      info: "A reliable car",
      incart: false,
      count: 1
    },
    {
      id: 3,
      title: "car",
      price: 15,
      company: "Ford",
      powerRequirement: "220V / 60Hz (North America) 220V / 50Hz (International)",
      info: "Best car for family trips",
      incart: false,
      count: 1
    },
    {
      id: 4,
      title: "car",
      price: 20,
      company: "BMW",
      powerRequirement: "220V / 60Hz (North America) 220V / 50Hz (International)",
      info: "Luxury car for comfort",
      incart: false,
      count: 1
    },
    {
      id: 5,
      title: "car",
      price: 18,
      company: "Mercedes",
      powerRequirement: "220V / 60Hz (North America) 220V / 50Hz (International)",
      info: "Elegant and efficient",
      incart: false,
      count: 1
    },
    {
      id: 6,
      title: "car",
      price: 22,
      company: "Audi",
      powerRequirement: "220V / 60Hz (North America) 220V / 50Hz (International)",
      info: "Sporty and stylish",
      incart: false,
      count: 1
    },
    {
      id: 7,
      title: "car",
      price: 25,
      company: "Tesla",
      powerRequirement: "220V / 60Hz (North America) 220V / 50Hz (International)",
      info: "Electric car for the future",
      incart: false,
      count: 1
    },
  ];