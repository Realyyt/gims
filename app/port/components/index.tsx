

import React from "react";
import ReactDOM from "react-dom";
import { ProductProvider } from "./Context";
import Adminportal from "./Adminportal";

ReactDOM.render(
  <ProductProvider>
    <Adminportal />
  </ProductProvider>,
  document.getElementById("root")
);