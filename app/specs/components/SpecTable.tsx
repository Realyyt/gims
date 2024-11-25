import type { SpecTable } from '../../specs/types';

export default function SpecTable({ table }: { table: SpecTable }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">{table.title}</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-4 border-b text-left"></th>
              {table.columns.map((col, i) => (
                <th key={i} className="px-6 py-4 border-b text-left font-medium">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {table.rows.map((row, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{row.label}</td>
                {row.values.map((value, j) => (
                  <td key={j} className="px-6 py-4">{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 