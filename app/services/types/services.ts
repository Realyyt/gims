export interface ServiceDetail {
  title: string;
  description: string;
  benefits: string[];
  applications: string[];
}

export interface ServicePageProps {
  service: ServiceDetail;
} 