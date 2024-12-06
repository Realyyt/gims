import { LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  image?: string;
  icon?: LucideIcon;
}

export interface IndustrialApplication {
  title: string;
  image: string;
  description: string;
}

export interface CarouselProps {
  applications: IndustrialApplication[];
  currentIndex: number;
  next: () => void;
  prev: () => void;
  setCurrentIndex: (index: number) => void;
}

export interface NavigationArrowsProps {
  onNext: () => void;
  onPrev: () => void;
}

export interface ProgressIndicatorsProps {
  total: number;
  currentIndex: number;
  onChange: (index: number) => void;
}

export interface Specification {
  model: string;
  image: string;
  specs: {
    [key: string]: string;
  };
} 