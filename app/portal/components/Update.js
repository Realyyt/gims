import React from "react";

export default function Update ()  {
  return (
    <div className="overflow-x-auto bg-gray-800 p-5">
      <table className="min-w-full bg-gray-800 text-white table-auto rounded-lg shadow-md">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="px-4 py-2 text-left">Model</th>
            <th className="px-4 py-2 text-left">Cutting Area (D x W)</th>
            <th className="px-4 py-2 text-left">Kerf (width of cut)</th>
            <th className="px-4 py-2 text-left">Abrasive Rate</th>
            <th className="px-4 py-2 text-left">Abrasive Rate</th>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                onChange={(e) => value.updateValue(e, "title")}
                className="p-2 border rounded-lg bg-gray-900 text-white w-full"
              />
            </td>
            <td>
              <input
                type="text"
                onChange={(e) => value.updateValue(e, "info")}
                className="p-2 border rounded-lg bg-gray-900 text-white w-full"
              />
            </td>
            <td>
              <input
                type="text"
                onChange={(e) => value.updateValue(e, "price")}
                className="p-2 border rounded-lg bg-gray-900 text-white w-full"
              />
            </td>
            <td>
              <input
                type="text"
                onChange={(e) => value.updateValue(e, "company")}
                className="p-2 border rounded-lg bg-gray-900 text-white w-full"
              />
            </td>
            <td>
              <input
                type="text"
                onChange={(e) => value.updateValue(e, "company")}
                className="p-2 border rounded-lg bg-gray-900 text-white w-full"
              />
            </td>
          </tr>
          
        </thead>
        <tbody>
 
            <tr className="border-b border-gray-700">
             
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2">Update</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2">Delete</button>

            </tr>

    
        </tbody>
      </table>
    </div>
  );
};

