import React from 'react';

interface SpecTableRow {
  label: string;
  values: string[];
}

interface SpecTableData {
  title: string;
  columns: string[];
  rows: SpecTableRow[];
}

export default function SpecTable({ table }: { table: SpecTableData }) {
  return (
    <div className="mb-16">
      {/* Single centered main title */}
      <h1 className="text-4xl font-bold text-center mb-16 bg-[#1890d5] text-black py-4">
        KATANA Tech Specs
      </h1>

      {/* Header with images and titles aligned */}
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr_1fr_1fr] gap-x-8 mb-16">
        {/* Top Specs title aligned with model names */}
        <div className="flex items-end">
          <h2 className="text-xl font-semibold text-[#ee6c4d]">
            Top Specs
          </h2>
        </div>
        
        {table.columns.map((col, i) => (
          <div key={i} className="text-center">
            <img 
              src={`/images/katana-${col.toLowerCase().replace(' ', '-')}.png`}
              alt={col}
              className="w-64 h-auto mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold text-[#ee6c4d]">{col}</h3>
          </div>  
        ))}
      </div>

      {/* Specs Table with perfect row alignment */}
      <div className="border-t border-gray-200">
        {table.rows.map((row, rowIndex) => (
          <div 
            key={rowIndex} 
            className="grid grid-cols-1 md:grid-cols-[300px_1fr_1fr_1fr] gap-x-8 border-b border-gray-200"
          >
            {/* Label column */}
            <div className="font-medium text-gray-900 py-4">
              {row.label}
            </div>

            {/* Value columns */}
            {row.values.map((value, colIndex) => (
              <div key={colIndex} className="text-gray-600 py-4">
                {value.split('\n').map((line, k) => (
                  <div key={k}>{line}</div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}