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
    <main className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        
        {specTables.map((table, i) => (
          <SpecTable key={i} table={table as any} />
        ))}
      </div>
    </main>
  );
} 