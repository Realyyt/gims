'use client'
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { SpecTable } from './components';
import { specTables } from './data/specs';

export default function SpecificationsPage() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <main className="bg-[#293241] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-[#e0fbfc]">Technical Specifications</h1>
        
        {specTables.map((table, i) => (
          <SpecTable key={i} table={table} />
        ))}
      </div>
    </main>
  );
} 