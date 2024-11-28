// 'use client'
// import { useAnimation } from 'framer-motion';
// import { useEffect } from 'react';
// import { SpecTable } from './components';
// import { specTables } from './data/specs';
// import Update from './components/Update';


// export default function SpecificationsPage() {
//   const controls = useAnimation();

//   useEffect(() => {
//     controls.start({ opacity: 1, y: 0 });
//   }, [controls]);

//   return (
//     <main className="bg-white min-h-screen py-12">
      
//       <div className="max-w-7xl mx-auto px-4">
        
//       <Update />

//       </div>
//     </main>
//   );
// } 

import React from 'react';
import { ProductProvider } from './context/productContext';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <ProductProvider>
      <ProductList />
    </ProductProvider>
  );
};

export default App;