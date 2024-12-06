import React from 'react';
import Image from 'next/image';

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
    <div className="mb-12 md:mb-16 overflow-x-auto">
      <div className="min-w-[768px]">
        {/* Top Specs section */}
        {table.title === "Top Specs" ? (
          <>
            <div className="grid grid-cols-[300px_1fr_1fr_1fr] gap-x-4 md:gap-x-8 mb-8 md:mb-16">
              {/* Top Specs title aligned with model names */}
              <div className="flex items-end border-b-2 border-[#1890d5] pb-2">
                <h2 className="text-lg md:text-xl font-semibold text-[#ee6c4d]">
                  {table.title}
                </h2>
              </div>
              
              {table.columns.map((col, i) => {
                console.log('Column:', col, typeof col); // Debug log to see exact value and type
                const imagePath = 
                  col === "KATANA SJ150" ? "/gims1.png" :
                  col === "KATANA SJ450" ? "/sj451.png" :
                  col === "KATANA SJ700" ? "/sj700.png" : null;
                console.log('Image path:', imagePath); // Debug log
                
                return (
                  <div key={i} className="text-center border-b-2 border-[#1890d5] pb-2">
                    {imagePath && (  // Only render Image if we have a path
                      <Image 
                        src={imagePath}
                        alt={col}
                        width={80}
                        height={80}
                        className="mx-auto"
                      />
                    )}
                    <h3 className="text-lg md:text-xl font-semibold text-[#ee6c4d]">{col}</h3>
                  </div>  
                );
              })}
            </div>
          </>
        ) : (
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-8 text-[#ee6c4d] border-b-2 border-[#1890d5] pb-2">
            {table.title}
          </h2>
        )}

        {/* Table Structure */}
        <div className="border-t border-gray-200">
          {/* Column headers for non-Top Specs sections */}
          {table.title !== "Top Specs" && (
            <div className="grid grid-cols-[300px_1fr_1fr_1fr] gap-x-4 md:gap-x-8 bg-gray-50">
              <div className="font-semibold text-gray-900 p-3">
                Specification
              </div>
              {table.columns.map((col, i) => (
                <div key={i} className="font-semibold text-gray-900 p-3">
                  {col}
                </div>
              ))}
            </div>
          )}

          {/* Table rows */}
          {table.rows.map((row, rowIndex) => (
            <div 
              key={rowIndex} 
              className="grid grid-cols-[300px_1fr_1fr_1fr] gap-x-4 md:gap-x-8 border-b border-gray-200 hover:bg-gray-50"
            >
              <div className="font-medium text-gray-900 p-3">
                {row.label}
              </div>
              {row.values.map((value, colIndex) => (
                <div key={colIndex} className="text-gray-600 p-3">
                  {value.split('\n').map((line, i) => (
                    <div key={i} className="mb-1">
                      {line.trim()}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}