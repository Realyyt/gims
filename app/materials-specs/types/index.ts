export type UnitType = 'metric' | 'imperial';

export interface Thickness {
  value: {
    imperial: string;
    metric: string;
  };
  maxNote?: 'Sj700' | 'sj450' | 'sj150';
  cutSpeed: {
    Sj700: {
      imperial: string;
      metric: string;
    } | null;
    sj450: {
      imperial: string;
      metric: string;
    } | null;
    sj150: {
      imperial: string;
      metric: string;
    } | null;
  };
  pierceTime: {
    Sj700: string;
    sj450: string | null;
    sj150: string | null;
  };
}

export interface Material {
  name: string;
  thicknesses: Thickness[];
  notes?: string;
}

export interface MaterialsData {
  [key: string]: {
    name: string;
    materials: Material[];
  };
}

// Props interfaces for components
export interface MaterialsTableProps {
  category: string;
  materials: Material[];
  unit: UnitType;
}

export interface MaterialsHeaderProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  unit: UnitType;
  onUnitChange: (unit: UnitType) => void;
}

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export interface MaterialCardProps {
  material: Material;
}

export interface CuttingCalculatorProps {
  unit: UnitType;
}

export interface CalculationResult {
  cutRate: string;
  pierceTime: string;
  jobTime: string;
  abrasiveUsed: string;
  jobCost: string;
} 