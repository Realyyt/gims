import { motion } from 'framer-motion';
import { ComparisonData } from '../../specs/types';

export default function ComparisonTable({ data }: { data: ComparisonData[] }) {
  return (
    <div className="overflow-x-auto">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-w-full rounded-2xl bg-[#293241] shadow-lg border border-[#3d5a80]"
      >
        <table className="min-w-full">
          <thead>
            <tr className="bg-gradient-to-r from-[#3d5a80] to-[#293241]">
              <th className="px-6 py-4 text-left text-[#e0fbfc]">Feature</th>
              <th className="px-6 py-4 text-left text-[#e0fbfc]">KATANA SJ150</th>
              <th className="px-6 py-4 text-left text-[#e0fbfc]">Competitors</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#3d5a80]">
            {data.map((row, index) => (
              <motion.tr 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="hover:bg-[#3d5a80]/20"
              >
                <td className="px-6 py-4 text-[#98c1d9]">{row.feature}</td>
                <td className="px-6 py-4 font-medium text-[#ee6c4d]">{row.katana}</td>
                <td className="px-6 py-4 text-[#e0fbfc]/70">{row.competitor}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
} 