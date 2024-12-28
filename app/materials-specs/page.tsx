'use client'
import { useState, useMemo } from 'react';
import Image from 'next/image';
import MaterialsTable from './components/MaterialsTable';
import MaterialsHeader from './components/MaterialsHeader';
import SearchBar from './components/SearchBar';
import CuttingCalculator from './components/CuttingCalculator';
import { materialCategories } from './data/materials';
import { filterMaterials } from './utils/filters';
import { industrialApplications, mediaItems } from '../constants';
import type { UnitType } from './types';

// Add gallery data configuration
const galleryData = {
  materials: mediaItems.filter(item => item.type === 'image').map(item => ({
    src: item.src,
    title: item.title,
    description: 'High-precision cutting capabilities'
  })),
  industries: industrialApplications.map(app => ({
    src: app.image,
    title: app.title,
    description: app.description
  }))
};

export default function MaterialsSpecsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [unit, setUnit] = useState<UnitType>('imperial');
  const [activeTab, setActiveTab] = useState<'materials' | 'industries'>('materials');

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

      {/* Add the new gallery section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
              <button
                onClick={() => setActiveTab('materials')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'materials' 
                    ? 'bg-[#0a4165] text-white' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Materials
              </button>
              <button
                onClick={() => setActiveTab('industries')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'industries' 
                    ? 'bg-[#0a4165] text-white' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Industries
              </button>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryData[activeTab].map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 