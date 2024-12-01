export type UnitType = 'metric' | 'imperial';
export type ModelType = 'Sj700' | 'sj450' | 'sj150';
export type MaxNoteType = ModelType;

export interface Thickness {
  value: {
    imperial: string;
    metric: string;
  };
  maxNote?: MaxNoteType;
  cutSpeed: {
    [K in ModelType]: {
      imperial: string;
      metric: string;
    } | null;
  };
  pierceTime: {
    [K in ModelType]: string | null;
  };
}

export interface Material {
  name: string;
  thicknesses: Thickness[];
}

export interface MaterialCategory {
  name: string;
  description?: string;
  materials: Material[];
}

export interface MaterialsData {
  [key: string]: MaterialCategory;
}

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

export interface CuttingCalculatorProps {
  unit: UnitType;
} 