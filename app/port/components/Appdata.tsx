export interface Product {
  id: number;
  title: string;
  price: number;
  company: string;
  info: string;
  incart: boolean;
  count: number;
}

export const rowData: Product[] = [
  {
    id: 1,
    title: "Car",
    price: 10,
    company: "Toyota",
    info: "One of the best cars",
    incart: false,
    count: 1,
  },
  {
    id: 2,
    title: "Car",
    price: 15,
    company: "Honda",
    info: "Reliable and efficient",
    incart: false,
    count: 1,
  },
  {
    id: 3,
    title: "Car",
    price: 20,
    company: "Ford",
    info: "Stylish and powerful",
    incart: false,
    count: 1,
  },
];