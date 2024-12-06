'use client'
import { useState, useMemo } from 'react';
import MaterialsTable from './components/MaterialsTable';
import MaterialsHeader from './components/MaterialsHeader';
import SearchBar from './components/SearchBar';
import CuttingCalculator from './components/CuttingCalculator';
import { materialCategories } from './data/materials';
import { filterMaterials } from './utils/filters';
import type { UnitType } from './types';

export default function MaterialsSpecsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [unit, setUnit] = useState<UnitType>('imperial');

  const groupedMaterials = useMemo(() => {
    if (!materialCategories || !selectedCategory) return [];

    try {
      if (selectedCategory === 'all') {
        // For 'all', create sections for each category
        return Object.entries(materialCategories).map(([, category]) => ({
          categoryName: category.name,
          materials: filterMaterials(category.materials || [], searchQuery)
        })).filter(group => group.materials.length > 0);
      } else {
        // For specific category, just show those materials
        const category = materialCategories[selectedCategory];
        if (category?.materials) {
          const filteredMaterials = filterMaterials(category.materials, searchQuery);
          if (filteredMaterials.length > 0) {
            return [{
              categoryName: category.name,
              materials: filteredMaterials
            }];
          }
        }
      }
      
      return [];
    } catch (error) {
      console.error('Error grouping materials:', error);
      return [];
    }
  }, [selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-gray-50">
      <section id="cutting-calculator" className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <CuttingCalculator unit={unit} />
        </div>
      </section>

      <section id="materials-table" className="bg-white shadow-sm border-b mt-6">
        <MaterialsHeader 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          unit={unit}
          onUnitChange={setUnit}
        />
      </section>

      {/* Search and Table Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchBar 
          value={searchQuery}
          onChange={setSearchQuery}
        />
        
        {groupedMaterials.map((group, index) => (
          <div key={group.categoryName} className={index > 0 ? 'mt-12' : ''}>
            <MaterialsTable 
              category={group.categoryName}
              materials={group.materials}
              unit={unit}
            />
          </div>
        ))}
        
        {groupedMaterials.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No materials found</p>
          </div>
        )}
      </section>
    </main>
  );
} 