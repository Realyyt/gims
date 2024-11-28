'use client'
import React, { Component } from "react";
import { ProductConsumer } from "../context/productContext";
import { Table, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ProductList extends Component {
  render() {
    return (
    <div>
      <h1>TEchnical Spec Portal</h1>
< div className="overflow-x-auto bg-[#1890d5] p-5 m-20">

        <ProductConsumer>
          {(value) => {
            if (!value) return null;  

            return (
                <div className=" bg-[#1890d5] p-5">
              <table  className="min-w-full text-white table-auto rounded-lg shadow-md">
                <thead>
                  <tr >
                    <th className="px-2 py-2 text-left text-lg">Model</th>
                    <th className="px-2 py-2 text-left text-lg">Cutting Area (D x W)</th>
                    <th className="px-2 py-2 text-left text-lg">Kerf (width of cut)</th>
                    <th className="px-2 py-2 text-left text-lg">Abrasive Rate</th>
                    <th className="px-2 py-2 text-left text-lg">Power Requirement</th>
                    <th className="px-2 py-2 text-left text-lg">Action</th>
                  </tr>
                  <tr>
                    <td className=" rounded-lg bg-white-900 text-black w-full h-full">
                    <input type="text" value={value.title} onChange={(e) => value.updateValue(e, "title")} /></td>

                    <td className=" rounded-lg bg-white-900 text-black w-full h-full">
                    <input type="text" value={value.info} onChange={(e) => value.updateValue(e, "info")} /></td>

                    <td className=" rounded-lg bg-white-900 text-black w-full h-full">
                    <input type="text" value={value.price} onChange={(e) => value.updateValue(e, "price")} /></td>
                    
                    <td className=" rounded-lg bg-white-900 text-black w-full h-full">
                    <input type="text" value={value.company} onChange={(e) => value.updateValue(e, "company")} /></td>

                    <td className=" rounded-lg b g-white-900 text-black w-full h-full">
                    <input type="text" value={value.powerRequirement} onChange={(e) => value.updateValue(e, "company")} /></td>

                    <td className="rounded-lg bg-white-900 text-black w-full h-full"> 
                    </td>
                  </tr>
                </thead> 
                 <tbody>
                  {value.Alldata.map((product) => (
                    <tr key={product.id}>
                      <td className="px-2">{product.title}</td>
                      <td className="px-2">{product.info}</td>
                      <td className="px-2">{product.price}</td>
                      <td className="px-2">{product.company}</td>
                      <td className="px-2">{product.powerRequirement}</td>
                      <td className="px-2">
                        <button className="px-2 bg-blue-500 text-white px-4 py-2 rounded-lg mr-2" onClick={() => value.onEdit(product.id)}>Update</button>
                        <button className="px-2 bg-red-500 text-white px-4 py-2 rounded-lg mr-2" onClick={() => value.onDelete(product.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            );
          }}
        </ProductConsumer>
        </div>
      </div>
    );
  }
}

