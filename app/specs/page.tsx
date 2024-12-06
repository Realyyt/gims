'use client'
import { useAnimation, AnimationControls } from 'framer-motion';
import { useEffect } from 'react';
import { SpecTable } from './components';
import { specTables } from './data/specs';


export default function SpecificationsPage(): JSX.Element {
  const controls: AnimationControls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);



  return (
    <main className="bg-white min-h-screen py-8 md:py-12">
      <div className="max-w-full md:max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 bg-[#1890d5] text-black py-3 md:py-4">
          KATANA Tech Specs
        </h1>
        
        <div className="md:hidden text-sm text-gray-600 mb-4 text-center">
          Scroll horizontally to view complete specifications
        </div>
        
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