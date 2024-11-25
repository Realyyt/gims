import { motion } from 'framer-motion';
import { ComparisonData } from '../../specs/types';

export default function ComparisonTable({ data }: { data: ComparisonData[] }) {
  return (
    <div className="overflow-x-auto">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-w-full rounded-2xl bg-white shadow-lg"
      >
        <table className="min-w-full">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-purple-600">
              <th className="px-6 py-4 text-left text-white">Feature</th>
              <th className="px-6 py-4 text-left text-white">KATANA SJ150</th>
              <th className="px-6 py-4 text-left text-white">Competitors</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((row, index) => (
              <motion.tr 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="hover:bg-stone-50"
              >
                <td className="px-6 py-4 text-gray-600">{row.feature}</td>
                <td className="px-6 py-4 font-medium text-blue-600">{row.katana}</td>
                <td className="px-6 py-4 text-gray-500">{row.competitor}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
} 