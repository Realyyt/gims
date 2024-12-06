export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  title: string;
  image: string;
  description: string;
  features: ServiceFeature[];
}

export interface ServiceSectionProps {
  service: Service;
  index: number;
}

export interface CustomerQuoteProps {
  quote: string;
  author: string;
  position: string;
  company: string;
}
