'use client';

import React, { Component, createContext } from 'react';
import { Product } from '@/app/portal/data/Appdata';
import { rowData } from '../data/Appdata';

// Create the context with default values (or undefined)
const productContext = createContext<ProductContextType | undefined>(undefined);

interface ProductContextType {
  Alldata: Product[];
  title: string;
  info: string;
  company: string;
  price: number;
  powerRequirement: string;
  updateEdit: Product[];
  updateValue: (e: React.ChangeEvent<HTMLInputElement>, field: 'title' | 'info' | 'company' | 'price' | 'powerRequirement') => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

interface ProductProviderState {
  Alldata: Product[];
  title: string;
  info: string;
  company: string;
  price: number;
  powerRequirement: string;
  updateEdit: Product[];
}

class ProductProvider extends Component<{ children: React.ReactNode }, ProductProviderState> {
  state = {
    Alldata: rowData,
    title: '',
    info: '',
    company: '',
    price: 0,
    powerRequirement: '',
    updateEdit: [],
  };

  updateValue = (e: React.ChangeEvent<HTMLInputElement>, field: 'title' | 'info' | 'company' | 'price' | 'powerRequirement') => {
    const { value } = e.target;
    const newValue = field === 'price' ? Number(value) : value;
    this.setState((prevState) => ({
      ...prevState,
      [field]: newValue
    }));
  };

  onEdit = (id: number) => {
    const product = this.state.Alldata.find(product => product.id === id);
    if (product) {
      this.setState({
        title: product.title,
        info: product.info,
        company: product.company,
        price: product.price
      });
    }
  };

  onDelete = (id: number) => {
    const updatedProducts = this.state.Alldata.filter(product => product.id !== id);
    this.setState({ Alldata: updatedProducts });
  };

  render() {
    return (
      <productContext.Provider
        value={{
          ...this.state,
          updateValue: this.updateValue,
          onEdit: this.onEdit,
          onDelete: this.onDelete,
        }}
      >
        {this.props.children}
      </productContext.Provider>
    );
  }
}

const ProductConsumer = productContext.Consumer;

export { ProductProvider, ProductConsumer };