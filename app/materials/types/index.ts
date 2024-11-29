export interface MaterialSpec {
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

export interface MaterialCategory {
  name: string;
  materials: {
    name: string;
    specs: MaterialSpec[];
    maxThickness: {
      sj700: string;
      sj450: string;
      sj150: string;
    };
  }[];
} 