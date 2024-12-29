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

    // Base calculations on material type without thickness restrictions
    const thicknessValue = parseFloat(thickness);
    if (isNaN(thicknessValue) || thicknessValue <= 0) {
      alert('Please enter a valid thickness value greater than 0');
      return;
    }

    // Calculate based on material type and thickness
    const results: { [key: string]: CalculationResult | string } = {};
    
    // Calculate for each model with adjusted parameters based on thickness
    const calculateForModel = (modelName: string, baseSpeed: number, basePierceTime: number, abrasiveRate: number, costRate: number) => {
      // Adjust speed and pierce time based on thickness
      const thicknessFactor = Math.pow(0.85, Math.floor(thicknessValue / 10)); // Reduce efficiency as thickness increases
      const adjustedSpeed = baseSpeed * thicknessFactor;
      const adjustedPierceTime = basePierceTime * (1 + (thicknessValue / 20)); // Increase pierce time with thickness

      const lengthValue = parseFloat(cutLength);
      const piercesValue = parseInt(pierces);

      const totalPierceTime = adjustedPierceTime * piercesValue;
      const cutTime = (lengthValue / adjustedSpeed) * 60;
      const totalTime = totalPierceTime + cutTime;

      let abrasiveUsed = (totalTime / 60) * abrasiveRate;
      if (localUnit === 'metric') {
        abrasiveUsed *= 0.453592; // Convert lb to kg
      }

      const jobCost = totalTime * costRate / 60; // Cost per minute

      results[modelName] = {
        cutRate: `${adjustedSpeed.toFixed(1)}${localUnit === 'metric' ? ' mmpm' : ' ipm'}`,
        pierceTime: formatTime(adjustedPierceTime),
        jobTime: formatTime(totalTime),
        abrasiveUsed: `${abrasiveUsed.toFixed(1)}${localUnit === 'metric' ? 'kg' : 'lb'}`,
        jobCost: `₹${jobCost.toFixed(2)}`
      };
    };

    // Base parameters for each model
    calculateForModel('sj700', 1000, 15, 0.75, 41.50);
    calculateForModel('sj450', 750, 20, 0.5, 29.05);
    calculateForModel('sj150', 500, 25, 0.3, 20.00);

    setResults(results);
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.round(seconds % 60);
    return `${minutes}m ${remainingSeconds}s`;
  };

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
            <input
              type="number"
              value={thickness}
              onChange={(e) => setThickness(e.target.value)}
              className="w-full h-[42px] px-4 py-2.5 bg-white border border-gray-300 rounded-lg
                text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder={`Enter thickness in ${localUnit === 'metric' ? 'mm' : 'inches'}`}
              step={localUnit === 'metric' ? '0.1' : '0.001'}
              min="0"
            />
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