'use client'
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { SpecTable } from './components';
import { specTables } from './data/specs';
import Update from '../portal/components/Update';
import Adminportal from '../port/components/Adminportal'
import Home from '../page';
import { ProductProvider } from './components/Context';

export default function SpecificationsPage() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <main className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
      
      <ProductProvider>
        <Home />
      </ProductProvider>
      <Adminportal />
      <Update />
      </div>
    </main>
  );
} 