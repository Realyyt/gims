import React, { useContext } from "react";
import { Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { productContext } from "./Context";

const AdminPortal: React.FC = () => {
  const context = useContext(productContext);

  if (!context) {
    return <div>Loading...</div>;
  }

  const { title, info, price, company, Alldata, updateValue, onEdit, onDelete } = context;

  return (
    <div className="container">
      <h3>CRUD Operations</h3>
      <Table size="sm" variant="dark" striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Information</th>
            <th>Price</th>
            <th>Company</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                value={title}
                onChange={(e) => updateValue(e.target.value, "title")}
              />
            </td>
            <td>
              <input
                type="text"
                value={info}
                onChange={(e) => updateValue(e.target.value, "info")}
              />
            </td>
            <td>
              <input
                type="number"
                value={price}
                onChange={(e) => updateValue(Number(e.target.value), "price")}
              />
            </td>
            <td>
              <input
                type="text"
                value={company}
                onChange={(e) => updateValue(e.target.value, "company")}
              />
            </td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {Alldata.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.info}</td>
              <td>{product.price}</td>
              <td>{product.company}</td>
              <td>
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => onEdit(product.id)}
                >
                  Update
                </Button>{" "}
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => onDelete(product.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminPortal;