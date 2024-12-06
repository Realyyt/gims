import type { MaterialsHeaderProps } from '../types';
import { materialCategories, materialCategoryOrder } from '../data/materials';

export default function MaterialsHeader({ 
  selectedCategory, 
  onCategoryChange,
  unit,
  onUnitChange
}: MaterialsHeaderProps) {
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onCategoryChange(e.target.value);
  };

  const handleUnitToggle = () => {
    onUnitChange(unit === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="form-select appearance-none rounded-lg border-2 border-gray-300 py-2.5 pl-4 pr-10 
                text-base font-semibold text-gray-900
                focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500
                shadow-sm hover:border-gray-400 transition-colors
                bg-white cursor-pointer"
            >
              {materialCategoryOrder.map((categoryId) => (
                <option 
                  key={categoryId} 
                  value={categoryId}
                  className="text-gray-900 font-medium"
                >
                  {categoryId === 'all' ? 'All Materials' : materialCategories[categoryId]?.name || categoryId}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
              <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span className={`text-sm font-bold ${unit === 'metric' ? 'text-gray-900' : 'text-gray-600'}`}>
              METRIC
            </span>
            <button
              type="button"
              onClick={handleUnitToggle}
              className={`relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full 
                border-2 border-transparent transition-colors duration-200 ease-in-out 
                focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
                shadow-sm hover:shadow
                ${unit === 'metric' ? 'bg-orange-500' : 'bg-gray-200'}`}
              aria-pressed={unit === 'metric'}
            >
              <span className="sr-only">Toggle units</span>
              <span 
                className={`pointer-events-none inline-block h-6 w-6 transform rounded-full 
                  bg-white shadow-md ring-0 transition duration-200 ease-in-out
                  ${unit === 'metric' ? 'translate-x-5' : 'translate-x-0'}`}
              />
            </button>
            <span className={`text-sm font-bold ${unit === 'imperial' ? 'text-gray-900' : 'text-gray-600'}`}>
              IMPERIAL
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 