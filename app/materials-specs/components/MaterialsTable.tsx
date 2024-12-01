import { MaterialsTableProps, Thickness } from '../types';

export default function MaterialsTable({ category, materials, unit }: MaterialsTableProps) {
  if (!materials || materials.length === 0) {
    return null; // Don't render empty tables
  }

  const renderCutSpeed = (thickness: Thickness, model: keyof Thickness['cutSpeed']) => {
    const speedData = thickness.cutSpeed[model];
    if (!speedData) {
      return <span className="text-gray-500">Too thick for {model}</span>;
    }
    return speedData[unit];
  };

  const renderPierceTime = (thickness: Thickness, model: keyof Thickness['pierceTime']) => {
    const pierceTime = thickness.pierceTime[model];
    return pierceTime || '-';
  };

  // Only show machine images for the first table
  const showMachineImages = category === 'Metal'; // Or any logic to determine first table

  return (
    <div className="mt-8">
      {showMachineImages && (
        <div className="flex flex-col mb-12">
          <div className="w-full">
            <div className="flex">
              <div className="w-[300px]"></div>
              
              <div className="flex flex-1 justify-between">
                {/* Sj700 section */}
                <div className="flex flex-col items-center w-[250px]">
                  <img 
                    src="/Sj700.png" 
                    alt="Sj700" 
                    className="w-32 mb-3"
                  />
                  <span className="text-xl font-semibold text-gray-900">sj700</span>
                </div>

                {/* sj450 section */}
                <div className="flex flex-col items-center w-[250px]">
                  <img 
                    src="/sj451.png" 
                    alt="sj450" 
                    className="w-32 mb-3"
                  />
                  <span className="text-xl font-semibold text-gray-900">sj450</span>
                </div>

                {/* sj150 section */}
                <div className="flex flex-col items-center w-[250px]">
                  <img 
                    src="/gims1.png" 
                    alt="sj150" 
                    className="w-32 mb-3"
                  />
                  <span className="text-xl font-semibold text-gray-900">sj150</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <h2 className="text-3xl font-bold text-gray-900 mb-6">{category}</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th scope="col" className="w-36 px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Material
              </th>
              <th scope="col" className="w-36 px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Thickness<br/>({unit === 'metric' ? 'MM' : 'IN'})
              </th>
              
              {/* Sj700 columns */}
              <th scope="col" colSpan={2} className="text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">
                <div className="grid grid-cols-2 divide-x divide-gray-200">
                  <div className="px-6 py-2">Cut Rate<br/>({unit === 'metric' ? 'MM/MIN' : 'IN/MIN'})</div>
                  <div className="px-6 py-2">Pierce Time</div>
                </div>
              </th>

              {/* sj450 columns */}
              <th scope="col" colSpan={2} className="text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">
                <div className="grid grid-cols-2 divide-x divide-gray-200">
                  <div className="px-6 py-2">Cut Rate<br/>({unit === 'metric' ? 'MM/MIN' : 'IN/MIN'})</div>
                  <div className="px-6 py-2">Pierce Time</div>
                </div>
              </th>

              {/* sj150 columns */}
              <th scope="col" colSpan={2} className="text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">
                <div className="grid grid-cols-2 divide-x divide-gray-200">
                  <div className="px-6 py-2">Cut Rate<br/>({unit === 'metric' ? 'MM/MIN' : 'IN/MIN'})</div>
                  <div className="px-6 py-2">Pierce Time</div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {materials.map((material, materialIndex) => {
              if (!material.thicknesses || !Array.isArray(material.thicknesses)) {
                return null;
              }

              return material.thicknesses.map((thickness, thicknessIdx) => (
                <tr key={`${material.name}-${materialIndex}-${thicknessIdx}`} className="hover:bg-gray-50">
                  {thicknessIdx === 0 && (
                    <td rowSpan={material.thicknesses.length} className="px-6 py-4">
                      <span className="text-lg font-medium text-orange-500">{material.name}</span>
                    </td>
                  )}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {thickness.value[unit]}
                    {thickness.maxNote && (
                      <span className="ml-2 text-gray-500">({thickness.maxNote})</span>
                    )}
                  </td>
                  {/* Sj700 data */}
                  <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-900">
                    {renderCutSpeed(thickness, 'Sj700')}
                  </td>
                  <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-900">
                    {renderPierceTime(thickness, 'Sj700')}
                  </td>
                  {/* sj450 data */}
                  <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-900">
                    {renderCutSpeed(thickness, 'sj450')}
                  </td>
                  <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-900">
                    {renderPierceTime(thickness, 'sj450')}
                  </td>
                  {/* sj150 data */}
                  <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-900">
                    {renderCutSpeed(thickness, 'sj150')}
                  </td>
                  <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-900">
                    {renderPierceTime(thickness, 'sj150')}
                  </td>
                </tr>
              ));
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
} 