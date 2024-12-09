'use client'
import { useState } from 'react';
import { materialCategories } from '../data/materials';
import type { UnitType } from '../types';
import Image from 'next/image';

interface CuttingCalculatorProps {
  unit: UnitType;
}

interface CalculationResult {
  cutRate: string;    // in ipm/mmpm
  pierceTime: string; // in min:sec
  jobTime: string;    // in min:sec
  abrasiveUsed: string; // in lb
  jobCost: string;    // in INR
}

interface ModelData {
  cutSpeed?: string;
  pierceTime?: string;
}

export default function CuttingCalculator({ unit: globalUnit }: CuttingCalculatorProps) {
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [thickness, setThickness] = useState('');
  const [cutLength, setCutLength] = useState('');
  const [pierces, setPierces] = useState('1');
  const [localUnit, setLocalUnit] = useState<UnitType>(globalUnit);
  const [results, setResults] = useState<{ [key: string]: CalculationResult | string }>({});

  const allMaterials = Object.values(materialCategories)
    .flatMap(category => category.materials.map(m => m.name))
    .sort();

  const handleUnitToggle = () => {
    setLocalUnit(localUnit === 'metric' ? 'imperial' : 'metric');
    // Convert values when switching units
    if (thickness) {
      setThickness(convertValue(thickness, localUnit === 'metric' ? 'imperial' : 'metric'));
    }
    if (cutLength) {
      setCutLength(convertValue(cutLength, localUnit === 'metric' ? 'imperial' : 'metric'));
    }
    // Convert existing results if any
    if (Object.keys(results).length > 0) {
      const newResults = { ...results };
      Object.entries(newResults).forEach(([model, result]) => {
        if (typeof result !== 'string') {
          const speedValue = parseFloat(result.cutRate);
          if (localUnit === 'metric') {
            // Converting from mmpm to ipm
            newResults[model] = {
              ...result,
              cutRate: `${(speedValue / 25.4).toFixed(1)} ipm`
            };
          } else {
            // Converting from ipm to mmpm
            newResults[model] = {
              ...result,
              cutRate: `${(speedValue * 25.4).toFixed(1)} mmpm`
            };
          }
        }
      });
      setResults(newResults);
    }
  };

  const convertValue = (value: string, toUnit: UnitType): string => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return '';

    if (toUnit === 'metric') {
      return (numValue * 25.4).toFixed(2); // inches to mm
    } else {
      return (numValue / 25.4).toFixed(3); // mm to inches
    }
  };

  const findMaterialData = () => {
    for (const category of Object.values(materialCategories)) {
      const material = category.materials.find(m => m.name === selectedMaterial);
      if (material) {
        // Find the exact thickness match
        const thicknessData = material.thicknesses.find(t => {
          const thicknessValue = parseFloat(t.value[localUnit]);
          const inputThickness = parseFloat(thickness);
          // Use a small epsilon for floating point comparison
          return Math.abs(thicknessValue - inputThickness) < 0.0001;
        });
        return thicknessData;
      }
    }
    return null;
  };

  // Get available thicknesses for selected material
  const getAvailableThicknesses = (): string[] => {
    if (!selectedMaterial) return [];

    for (const category of Object.values(materialCategories)) {
      const material = category.materials.find(m => m.name === selectedMaterial);
      if (material) {
        // Base thicknesses that are common across materials
        const specificThicknesses = ['1', '1.6', '2', '2.5', '3', '6', '8', '10'];
        
        // Set maximum thickness based on material type and machine capabilities
        let maxThickness =100;
        
        // SJ700 (Most powerful) - Maximum capabilities
        if (selectedMaterial.toLowerCase().includes('steel')) {
          maxThickness = 65; // Up to 65mm for steel
        } else if (selectedMaterial.toLowerCase().includes('stainless')) {
          maxThickness = 60; // Up to 60mm for stainless steel
        } else if (selectedMaterial.toLowerCase().includes('aluminum')) {
          maxThickness = 55; // Up to 55mm for aluminum
        } else if (selectedMaterial.toLowerCase().includes('copper') || 
                   selectedMaterial.toLowerCase().includes('brass')) {
          maxThickness = 50; // Up to 50mm for copper/brass
        } else if (selectedMaterial.toLowerCase().includes('titanium')) {
          maxThickness = 45; // Up to 45mm for titanium
        } else if (selectedMaterial.toLowerCase().includes('glass') || 
                   selectedMaterial.toLowerCase().includes('ceramic')) {
          maxThickness = 40; // Up to 40mm for glass/ceramic
        } else if (selectedMaterial.toLowerCase().includes('stone') || 
                   selectedMaterial.toLowerCase().includes('granite') ||
                   selectedMaterial.toLowerCase().includes('marble')) {
          maxThickness = 50; // Up to 50mm for stone materials
        } else if (selectedMaterial.toLowerCase().includes('composite') || 
                   selectedMaterial.toLowerCase().includes('carbon') ||
                   selectedMaterial.toLowerCase().includes('kevlar')) {
          maxThickness = 45; // Up to 45mm for composites
        } else if (selectedMaterial.toLowerCase().includes('plastic') ||
                   selectedMaterial.toLowerCase().includes('acrylic') ||
                   selectedMaterial.toLowerCase().includes('polycarbonate')) {
          maxThickness = 35; // Up to 35mm for plastics
        } else if (selectedMaterial.toLowerCase().includes('wood') ||
                   selectedMaterial.toLowerCase().includes('plywood') ||
                   selectedMaterial.toLowerCase().includes('mdf') ||
                   selectedMaterial.toLowerCase().includes('bamboo')) {
          maxThickness = 40; // Up to 40mm for wood materials
        } else if (selectedMaterial.toLowerCase().includes('rubber') ||
                   selectedMaterial.toLowerCase().includes('foam') ||
                   selectedMaterial.toLowerCase().includes('neoprene')) {
          maxThickness = 30; // Up to 30mm for rubber/foam
        } else if (selectedMaterial.toLowerCase().includes('nickel') ||
                   selectedMaterial.toLowerCase().includes('inconel')) {
          maxThickness = 40; // Up to 40mm for nickel alloys
        } else if (selectedMaterial.toLowerCase().includes('zinc') ||
                   selectedMaterial.toLowerCase().includes('lead')) {
          maxThickness = 35; // Up to 35mm for soft metals
        } else {
          maxThickness = 30; // Default maximum for other materials
        }

        // Generate series from 11 to maxThickness
        const seriesThicknesses = Array.from(
          { length: Math.max(0, maxThickness - 10) }, 
          (_, i) => (i + 11).toString()
        );

        // Combine specific and series thicknesses
        const allThicknesses = [...specificThicknesses, ...seriesThicknesses]
          .filter(t => parseFloat(t) <= maxThickness) // Ensure we don't exceed max thickness
          .map(t => `${t}${localUnit === 'metric' ? ' mm' : ' in'}`);

        return allThicknesses;
      }
    }
    return [];
  };

  // Update thickness input to show available options
  const handleMaterialChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMaterial = e.target.value;
    setSelectedMaterial(newMaterial);
    setThickness(''); // Reset thickness when material changes
  };

  const calculateResults = () => {
    if (!selectedMaterial || !thickness || !cutLength || !pierces) {
      alert('Please fill in all fields');
      return;
    }

    const materialData = findMaterialData();
    if (!materialData) {
      alert(`Invalid material and thickness combination. Here's how to select correctly:

1. First select your material (e.g., "Stainless Steel 304")
2. Then choose from the available thicknesses in the dropdown menu

For example:
- If you selected Stainless Steel 304:
  ✓ Valid: 10mm (from dropdown)
  ✗ Invalid: 70mm (exceeds maximum 60mm)
  ✗ Invalid: 4.7mm (not a standard thickness)

Each material has specific thickness limitations:
• Stainless Steel: up to 60mm
• Mild Steel: up to 65mm
• Aluminum: up to 55mm

Please select from the predefined thicknesses in the dropdown menu.`);
      return;
    }

    const results: { [key: string]: CalculationResult | string } = {};

    const calculateForModel = (
      modelData: ModelData, 
      modelName: string, 
      abrasiveRate: number, 
      costRate: number
    ) => {
      if (modelData.cutSpeed && modelData.pierceTime) {
        const speedValue = parseFloat(modelData.cutSpeed.split(' ')[0]);
        const pierceTimeSeconds = parseFloat(modelData.pierceTime.split(' ')[0]);
        const lengthValue = parseFloat(cutLength);
        const piercesValue = parseInt(pierces);

        const totalPierceTime = pierceTimeSeconds * piercesValue;
        const cutTime = (lengthValue / speedValue) * 60;
        const totalTime = totalPierceTime + cutTime;

        let abrasiveUsed = (totalTime / 60) * abrasiveRate;
        if (localUnit === 'metric') {
          abrasiveUsed *= 0.453592; // Convert lb to kg
        }

        const jobCost = (totalTime / 60) * costRate;

        results[modelName] = {
          cutRate: `${speedValue.toFixed(1)}${localUnit === 'metric' ? ' mmpm' : ' ipm'}`,
          pierceTime: formatTime(pierceTimeSeconds),
          jobTime: formatTime(totalTime),
          abrasiveUsed: `${abrasiveUsed.toFixed(1)}${localUnit === 'metric' ? 'kg' : 'lb'}`,
          jobCost: `₹${jobCost.toFixed(2)}`
        };
      } else {
        results[modelName] = `The selected thickness exceeds what can be cut with this model`;
      }
    };

    // Calculate for each model
    calculateForModel(
      {
        cutSpeed: materialData.cutSpeed.Sj700?.metric || materialData.cutSpeed.Sj700?.imperial,
        pierceTime: materialData.pierceTime.Sj700
      }, 
      'sj700', 
      0.75, 
      41.50
    );
    calculateForModel(
      {
        cutSpeed: materialData.cutSpeed.sj450?.metric ?? materialData.cutSpeed.sj450?.imperial,
        pierceTime: materialData.pierceTime.sj450 ?? ''
      }, 
      'sj450', 
      0.5, 
      29.05
    );
    calculateForModel(
      {
        cutSpeed: materialData.cutSpeed.sj150?.metric || materialData.cutSpeed.sj150?.imperial,
        pierceTime: materialData.pierceTime.sj150 ?? ''
      }, 
      'sj150', 
      0.3, 
      20.00
    );

    setResults(results);
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.round(seconds % 60);
    return `${minutes}m ${remainingSeconds}s`;
  };

  const availableThicknesses = getAvailableThicknesses();

  return (
    <div className="bg-slate-100 shadow-lg rounded-xl p-4 sm:p-8 mb-12">
      <div className="max-w-3xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Cutting Calculator
            </h2>
            <p className="text-lg sm:text-xl text-blue-600 font-medium">
              Calculate cutting parameters for your material
            </p>
          </div>

          <div className="flex items-center space-x-3 bg-white p-2 rounded-lg">
            <span className={`text-sm font-bold ${localUnit === 'metric' ? 'text-blue-600' : 'text-gray-600'}`}>
              MM
            </span>
            <button
              type="button"
              onClick={handleUnitToggle}
              className={`relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full 
                border-2 border-transparent transition-colors duration-200 ease-in-out 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                ${localUnit === 'metric' ? 'bg-blue-600' : 'bg-gray-200'}`}
              aria-pressed={localUnit === 'metric'}
            >
              <span className="sr-only">Toggle units</span>
              <span 
                className={`pointer-events-none inline-block h-6 w-6 transform rounded-full 
                  bg-white shadow ring-0 transition duration-200 ease-in-out
                  ${localUnit === 'metric' ? 'translate-x-5' : 'translate-x-0'}`}
              />
            </button>
            <span className={`text-sm font-bold ${localUnit === 'imperial' ? 'text-blue-600' : 'text-gray-600'}`}>
              IN
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Material Selection
            </label>
            <select
              value={selectedMaterial}
              onChange={handleMaterialChange}
              className="w-full h-[42px] px-4 py-2.5 bg-white border border-gray-300 rounded-lg
                text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select material</option>
              {allMaterials.map((material) => (
                <option key={material} value={material}>
                  {material}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Material Thickness
            </label>
            <select
              value={thickness}
              onChange={(e) => setThickness(e.target.value)}
              className="w-full h-[42px] px-4 py-2.5 bg-white border border-gray-300 rounded-lg
                text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              disabled={!selectedMaterial}
            >
              <option value="">Select thickness</option>
              {availableThicknesses.map((t) => (
                <option key={t} value={t.split(' ')[0]}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Cut Length ({localUnit === 'metric' ? 'mm' : 'in'})
            </label>
            <input
              type="number"
              value={cutLength}
              onChange={(e) => setCutLength(e.target.value)}
              className="w-full h-[42px] px-4 py-2.5 bg-white border border-gray-300 rounded-lg
                text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              min="0"
              step={localUnit === 'metric' ? '1' : '0.1'}
              placeholder={`Enter length in ${localUnit === 'metric' ? 'mm' : 'inches'}`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Number of Pierces
            </label>
            <select
              value={pierces}
              onChange={(e) => setPierces(e.target.value)}
              className="w-full h-[42px] px-4 py-2.5 bg-white border border-gray-300 rounded-lg
                text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={calculateResults}
          className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg
            hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            transition-colors"
        >
          Calculate Results
        </button>
      </div>

      {Object.entries(results).length > 0 && (
        <div className="mt-8 grid grid-cols-1 gap-6">
          {Object.entries(results).map(([model, result]) => (
            <div key={model} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center gap-4 mb-6 border-b pb-4">
                <Image 
                  src={model === 'sj700' ? '/sj700.png' : model === 'sj450' ? '/sj451.png' : '/gims1.png'}
                  alt={model}
                  width={64}
                  height={64}
                  className="object-contain"
                />
                <h3 className="text-xl font-semibold text-gray-900 uppercase">{model}</h3>
              </div>

              {typeof result === 'string' ? (
                <p className="text-red-500 text-center py-4">{result}</p>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Cut Rate</p>
                    <p className="text-lg font-bold text-blue-600">{result.cutRate}</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Pierce Time</p>
                    <p className="text-lg font-bold text-blue-600">{result.pierceTime}</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Total Time</p>
                    <p className="text-lg font-bold text-blue-600">{result.jobTime}</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Abrasive Used</p>
                    <p className="text-lg font-bold text-blue-600">{result.abrasiveUsed}</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Total Cost</p>
                    <p className="text-lg font-bold text-blue-600">{result.jobCost}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}