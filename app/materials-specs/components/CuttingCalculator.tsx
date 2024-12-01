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
        return material.thicknesses.map(t => t.value[localUnit]);
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
      alert('Please select a valid material and thickness combination');
      return;
    }

    // Calculate for sj700
    const sj700Data = {
      cutSpeed: materialData.cutSpeed.Sj700?.[localUnit],
      pierceTime: materialData.pierceTime.Sj700
    };

    // Calculate for sj450
    const sj450Data = {
      cutSpeed: materialData.cutSpeed.sj450?.[localUnit],
      pierceTime: materialData.pierceTime.sj450
    };

    // Calculate for sj150
    const sj150Data = {
      cutSpeed: materialData.cutSpeed.sj150?.[localUnit],
      pierceTime: materialData.pierceTime.sj150
    };

    const results: { [key: string]: CalculationResult | string } = {};

    // Calculate for sj700
    if (sj700Data.cutSpeed && sj700Data.pierceTime) {
      const speedValue = parseFloat(sj700Data.cutSpeed.split(' ')[0]);
      const pierceTimeSeconds = parseFloat(sj700Data.pierceTime.split(' ')[0]);
      const lengthValue = parseFloat(cutLength);
      const piercesValue = parseInt(pierces);

      const totalPierceTime = pierceTimeSeconds * piercesValue;
      const cutTime = (lengthValue / speedValue) * 60; // Convert to seconds
      const totalTime = totalPierceTime + cutTime;

      // Calculate abrasive used (0.75 lb/min for sj700)
      const abrasiveRate = 0.75; // lb per minute
      const abrasiveUsed = (totalTime / 60) * abrasiveRate;

      // Calculate job cost (₹41.50/min operating cost for sj700)
      const costRate = 41.50; // INR per minute
      const jobCost = (totalTime / 60) * costRate;

      results['sj700'] = {
        cutRate: `${speedValue.toFixed(1)}${localUnit === 'metric' ? ' mmpm' : ' ipm'}`,
        pierceTime: formatTime(pierceTimeSeconds),
        jobTime: formatTime(totalTime),
        abrasiveUsed: `${abrasiveUsed.toFixed(1)}lb`,
        jobCost: `₹${jobCost.toFixed(2)}`
      };
    } else {
      results['sj700'] = 'The selected thickness exceeds what can be cut with this model';
    }

    // Calculate for sj450
    if (sj450Data.cutSpeed && sj450Data.pierceTime) {
      const speedValue = parseFloat(sj450Data.cutSpeed.split(' ')[0]);
      const pierceTimeSeconds = parseFloat(sj450Data.pierceTime.split(' ')[0]);
      const lengthValue = parseFloat(cutLength);
      const piercesValue = parseInt(pierces);

      const totalPierceTime = pierceTimeSeconds * piercesValue;
      const cutTime = (lengthValue / speedValue) * 60;
      const totalTime = totalPierceTime + cutTime;

      const abrasiveRate = 0.5; // lb per minute for sj450
      const abrasiveUsed = (totalTime / 60) * abrasiveRate;

      const costRate = 29.05; // INR per minute for sj450
      const jobCost = (totalTime / 60) * costRate;

      results['sj450'] = {
        cutRate: `${speedValue.toFixed(1)}${localUnit === 'metric' ? ' mmpm' : ' ipm'}`,
        pierceTime: formatTime(pierceTimeSeconds),
        jobTime: formatTime(totalTime),
        abrasiveUsed: `${abrasiveUsed.toFixed(1)}lb`,
        jobCost: `₹${jobCost.toFixed(2)}`
      };
    } else {
      results['sj450'] = 'The selected thickness exceeds what can be cut with this model';
    }

    // Calculate for sj150
    if (sj150Data.cutSpeed && sj150Data.pierceTime) {
      const speedValue = parseFloat(sj150Data.cutSpeed.split(' ')[0]);
      const pierceTimeSeconds = parseFloat(sj150Data.pierceTime.split(' ')[0]);
      const lengthValue = parseFloat(cutLength);
      const piercesValue = parseInt(pierces);

      const totalPierceTime = pierceTimeSeconds * piercesValue;
      const cutTime = (lengthValue / speedValue) * 60;
      const totalTime = totalPierceTime + cutTime;

      const abrasiveRate = 0.25; // lb per minute for sj150
      const abrasiveUsed = (totalTime / 60) * abrasiveRate;

      const costRate = 20.75; // INR per minute for sj150
      const jobCost = (totalTime / 60) * costRate;

      results['sj150'] = {
        cutRate: `${speedValue.toFixed(1)}${localUnit === 'metric' ? ' mmpm' : ' ipm'}`,
        pierceTime: formatTime(pierceTimeSeconds),
        jobTime: formatTime(totalTime),
        abrasiveUsed: `${abrasiveUsed.toFixed(1)}lb`,
        jobCost: `₹${jobCost.toFixed(2)}`
      };
    } else {
      results['sj150'] = 'The selected thickness exceeds what can be cut with this model';
    }

    setResults(results);
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.round(seconds % 60);
    return `${minutes}m ${remainingSeconds}s`;
  };

  const availableThicknesses = getAvailableThicknesses();

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 mb-12">
      <div className="max-w-3xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cutting Calculator
            </h2>
            <p className="text-xl text-[#FF6B00] font-medium">
              Explore cutting performance in your material
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <span className={`text-sm font-bold ${localUnit === 'metric' ? 'text-gray-900' : 'text-gray-600'}`}>
              METRIC
            </span>
            <button
              type="button"
              onClick={handleUnitToggle}
              className={`relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full 
                border-2 border-transparent transition-colors duration-200 ease-in-out 
                focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
                ${localUnit === 'metric' ? 'bg-orange-500' : 'bg-gray-200'}`}
              aria-pressed={localUnit === 'metric'}
            >
              <span className="sr-only">Toggle units</span>
              <span 
                className={`pointer-events-none inline-block h-6 w-6 transform rounded-full 
                  bg-white shadow ring-0 transition duration-200 ease-in-out
                  ${localUnit === 'metric' ? 'translate-x-5' : 'translate-x-0'}`}
              />
            </button>
            <span className={`text-sm font-bold ${localUnit === 'imperial' ? 'text-gray-900' : 'text-gray-600'}`}>
              IMPERIAL
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            SELECT MATERIAL
          </label>
          <select
            value={selectedMaterial}
            onChange={handleMaterialChange}
            className="w-full h-[42px] px-4 py-2.5 bg-white border border-gray-300 rounded-lg
              text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          >
            <option value="">Select material</option>
            {allMaterials.map((material) => (
              <option key={material} value={material}>
                {material}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            THICKNESS
          </label>
          <select
            value={thickness}
            onChange={(e) => setThickness(e.target.value)}
            className="w-full h-[42px] px-4 py-2.5 bg-white border border-gray-300 rounded-lg
              text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
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

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            CUT LENGTH ({localUnit === 'metric' ? 'mm' : 'in'})
          </label>
          <div className="relative">
            <input
              type="number"
              value={cutLength}
              onChange={(e) => setCutLength(e.target.value)}
              className="w-full h-[42px] px-4 py-2.5 bg-white border border-gray-300 rounded-lg
                text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              min="0"
              step={localUnit === 'metric' ? '1' : '0.1'}
              placeholder={`Enter length in ${localUnit === 'metric' ? 'mm' : 'inches'}`}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            NO. OF PIERCES
          </label>
          <select
            value={pierces}
            onChange={(e) => setPierces(e.target.value)}
            className="w-full h-[42px] px-4 py-2.5 bg-white border border-gray-300 rounded-lg
              text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={calculateResults}
        className="px-8 py-2.5 bg-[#FF6B00] text-white font-medium rounded-lg
          hover:bg-[#e65000] focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:ring-offset-2
          transition-colors"
      >
        CALCULATE
      </button>

      {Object.entries(results).length > 0 && (
        <div className="mt-8 space-y-6">
          {Object.entries(results).map(([model, result]) => (
            <div key={model} className="border-t border-gray-200 pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Image 
                  src={model === 'sj700' ? '/sj700.png' : model === 'sj450' ? '/sj451.png' : '/gims1.png'}
                  alt={model}
                  width={64}
                  height={64}
                  className="object-contain"
                />
                <h3 className="text-lg font-semibold text-gray-900">{model}</h3>
              </div>

              {typeof result === 'string' ? (
                <p className="text-red-500">{result}</p>
              ) : (
                <div className="grid grid-cols-5 gap-8">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">CUT RATE</p>
                    <p className="text-lg font-bold text-gray-900">{result.cutRate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">TIME/PIERCE</p>
                    <p className="text-lg font-bold text-gray-900">{result.pierceTime}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">JOB TIME</p>
                    <p className="text-lg font-bold text-gray-900">{result.jobTime}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">ABRASIVE USED</p>
                    <p className="text-lg font-bold text-gray-900">{result.abrasiveUsed}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">JOB COST</p>
                    <p className="text-lg font-bold text-gray-900">{result.jobCost}</p>
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