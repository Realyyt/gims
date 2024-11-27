import type { SpecTable } from '../../specs/types';

export default function SpecTable({ table }: { table: SpecTable }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-[#e0fbfc]">{table.title}</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-[#3d5a80] rounded-lg">
          <thead>
            <tr className="bg-[#3d5a80]">
              <th className="px-6 py-4 border-b border-[#98c1d9]/20 text-left"></th>
              {table.columns.map((col, i) => (
                <th key={i} className="px-6 py-4 border-b border-[#98c1d9]/20 text-left font-medium text-[#e0fbfc]">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-[#293241]">
            {table.rows.map((row, i) => (
              <tr key={i} className="border-b border-[#3d5a80] hover:bg-[#3d5a80]/30 transition-colors">
                <td className="px-6 py-4 font-medium text-[#98c1d9]">{row.label}</td>
                {row.values.map((value, j) => (
                  <td key={j} className="px-6 py-4 text-[#e0fbfc]">{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 