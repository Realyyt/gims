import { MaterialCategory } from '../types';

export default function MaterialTable({ category }: { category: MaterialCategory }) {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-8 text-[#293241]">{category.name}</h2>
      
      {category.materials.map((material, materialIndex) => (
        <div key={materialIndex} className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-[#ee6c4d]">
            {material.name}
          </h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border p-3 text-left">Thickness</th>
                  <th className="border p-3 text-center" colSpan={2}>KATANA SJ700</th>
                  <th className="border p-3 text-center" colSpan={2}>KATANA SJ450</th>
                  <th className="border p-3 text-center" colSpan={2}>KATANA SJ150</th>
                </tr>
                <tr className="bg-gray-50">
                  <th className="border p-3"></th>
                  <th className="border p-3">Cut Rate</th>
                  <th className="border p-3">Pierce Time</th>
                  <th className="border p-3">Cut Rate</th>
                  <th className="border p-3">Pierce Time</th>
                  <th className="border p-3">Cut Rate</th>
                  <th className="border p-3">Pierce Time</th>
                </tr>
              </thead>
              <tbody>
                {material.specs.map((spec, specIndex) => (
                  <tr key={specIndex} className={specIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border p-3 font-medium">{spec.thickness}</td>
                    <td className="border p-3">{spec.cutRate.sj700}</td>
                    <td className="border p-3">{spec.pierceTime.sj700}</td>
                    <td className="border p-3">{spec.cutRate.sj450}</td>
                    <td className="border p-3">{spec.pierceTime.sj450}</td>
                    <td className="border p-3">{spec.cutRate.sj150}</td>
                    <td className="border p-3">{spec.pierceTime.sj150}</td>
                  </tr>
                ))}
                <tr className="bg-gray-50">
                  <td className="border p-3 font-bold">Maximum Thickness</td>
                  <td className="border p-3 text-center" colSpan={2}>{material.maxThickness.sj700}</td>
                  <td className="border p-3 text-center" colSpan={2}>{material.maxThickness.sj450}</td>
                  <td className="border p-3 text-center" colSpan={2}>{material.maxThickness.sj150}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
} 