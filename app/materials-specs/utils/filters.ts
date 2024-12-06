import type { Material } from '../types';

export function filterMaterials(materials: Material[], searchQuery: string): Material[] {
  if (!Array.isArray(materials)) return [];
  if (!searchQuery?.trim()) return materials;
  
  const query = searchQuery.toLowerCase().trim();
  
  return materials.filter(material => 
    material?.name?.toLowerCase().includes(query)
  );
} 