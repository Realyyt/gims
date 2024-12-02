'use client'
import { useAnimation, AnimationControls } from 'framer-motion';
import { useEffect } from 'react';
import { SpecTable } from './components';
import { specTables } from './data/specs';

interface SpecTableData {
  title: string;
  columns: string[];
  rows: {
    label: string;
    values: string[];
  }[];
}

export default function SpecificationsPage(): JSX.Element {
  const controls: AnimationControls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);



  return (
    <main className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16 bg-[#1890d5] text-black py-4">
          KATANA Tech Specs
        </h1>
        
        {specTables.map((table, i) => (
          <section 
            key={i} 
            id={table.title.toLowerCase().replace(/\s+/g, '-')}
          >
            <SpecTable table={table} />
          </section>
        ))}
      </div>
    </main>
  );
}