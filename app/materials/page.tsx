'use client'
import { materialCategories } from './data/materials';
import MaterialTable from './components/MaterialTable';

export default function MaterialsPage() {
  return (
    <main className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16">
          Materials Specs
        </h1>
        
        {/* Materials Calculator section - can be added later */}
        
        {/* Materials Tables */}
        {materialCategories.map((category, index) => (
          <MaterialTable key={index} category={category} />
        ))}
      </div>
    </main>
  );
} 