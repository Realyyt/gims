'use client';

import React, { Component, createContext } from 'react';
import { Product, ProductContextType} from '@/app/port/components/Appdata';
import { rowData } from '../data/Appdata';

// Create the context with default values (or undefined)
const productContext = createContext<ProductContextType | undefined>(undefined);

interface ProductProviderState {
  Alldata: Product[];
  title: string;
  info: string;
  company: string;
  price: number;
  updateEdit: any[];
}

class ProductProvider extends Component<{}, ProductProviderState> {
  state = {
    Alldata: rowData,
    title: '',
    info: '',
    company: '',
    price: 0,
    updateEdit: [],
  };

  updateValue = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const { value } = e.target;
    this.setState({ [field]: value } as Pick<ProductProviderState, keyof ProductProviderState>);
  };

  onEdit = (id: number) => {
    const product = this.state.Alldata.find(product => product.id === id);
    if (product) {
      this.setState({
        title: product.title,
        info: product.info,
        company: product.company,
        price: product.price,
        powerRequirement: product.powerRequirement,

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