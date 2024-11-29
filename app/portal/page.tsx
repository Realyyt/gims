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