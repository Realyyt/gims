import React, { Component, ReactNode } from "react";
import { rowData, Product } from "./Appdata";

// Define the state structure
interface State {
  Alldata: Product[];
  id: number | null; // Adjusted to number for consistency with product IDs
  title: string;
  info: string;
  company: string;
  updateEdit: Product[];
}

// Define the context structure
interface ContextProps extends State {
  updateValue: (value: string | number, field: keyof Omit<State, "Alldata" | "updateEdit">) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

// Create the context
const productContext = React.createContext<ContextProps | undefined>(undefined);

class ProductProvider extends Component<{ children: ReactNode }, State> {
  state: State = {
    Alldata: rowData,
    id: null,
    title: "",
    info: "",
    company: "",
    updateEdit: [],
  };

  // Update value dynamically
  updateValue = (value: string | number, field: keyof Omit<State, "Alldata" | "updateEdit">) => {
    this.setState({ [field]: value } as Pick<State, keyof State>);
  };

  // Edit functionality
  onEdit = (id: number) => {
    const productToEdit = this.state.Alldata.find((product) => product.id === id);
    if (productToEdit) {
      this.setState({
        id: productToEdit.id,
        title: productToEdit.title,
        info: productToEdit.info,
        company: productToEdit.company,
        updateEdit: [productToEdit],
      });
    }
  };

  // Delete a product by ID
  onDelete = (id: number) => {
    this.setState({
      Alldata: this.state.Alldata.filter((product) => product.id !== id),
    });
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

export { ProductProvider, ProductConsumer, productContext };