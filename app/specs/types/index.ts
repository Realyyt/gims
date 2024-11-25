import { LucideIcon } from 'lucide-react';

export interface Spec {
  name: string;
  value: string;
  description?: string;
}

export interface SpecSection {
  title: string;
  specs: Spec[];
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  value?: string;
}

export interface ComparisonData {
  feature: string;
  katana: string;
  competitor: string;
} 