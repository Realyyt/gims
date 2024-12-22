export interface ServiceDetail {
  title: string;
  description: string;
  benefits: string[];
  applications: string[];
  technology?: {
    name: string;
    features: string[];
    specifications?: {
      precision?: string;
      materials?: string[];
      maintenance?: string[];
    };
  };
}

export interface ServicePageProps {
  service: ServiceDetail;
}

export interface WaterjetService {
  name: string;
  description: string;
  benefits: string[];
  industries: string[];
  features: {
    precision: string;
    materials: string[];
    advantages: string[];
  };
}

export interface IndustryApplication {
  sector: string;
  description: string;
  challenges: string[];
  solutions: string[];
  benefits: string[];
  caseStudies?: {
    title: string;
    metrics: {
      label: string;
      value: string;
    }[];
  }[];
} 