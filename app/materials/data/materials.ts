interface MaterialSpec {
  thickness: string;
  cutRate: {
    sj700: string;
    sj450: string;
    sj150: string;
  };
  pierceTime: {
    sj700: string;
    sj450: string;
    sj150: string;
  };
}

interface Material {
  name: string;
  maxThickness: {
    sj700: string;
    sj450: string;
    sj150: string;
  };
  specs: MaterialSpec[];
}

interface MaterialCategory {
  name: string;
  materials: Material[];
}

export const materialCategories: MaterialCategory[] = [
  {
    name: "Metal",
    materials: [
      {
        name: "Aluminum",
        maxThickness: {
          sj700: "1″ (Max Pro)",
          sj450: "0.5″ (Max Desktop)",
          sj150: "0.5″ (Max Desktop)"
        },
        specs: [
          {
            thickness: "0.031″ (1 mm)",
            cutRate: {
              sj700: "16.2 ipm (324 mmpm)",
              sj450: "5.6 ipm (117 mmpm)",
              sj150: "5.6 ipm (117 mmpm)"
            },
            pierceTime: {
              sj700: "1 sec",
              sj450: "2 sec",
              sj150: "3 sec"
            }
          },
          // Add more thickness specs...
        ]
      },
      // Add more metal materials...
    ]
  },
  // Add more categories (Glass, Plastic, etc.)...
]; 