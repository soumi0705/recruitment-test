// src/components/Table.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const Table = () => {
  const [data, setData] = useState([]);
  const token = "Bearer my-access-token"; // Replace with your actual access token

  useEffect(() => {
    const headers = {
      Authorization: token,
    };

    axios
      .get("http://localhost:5000/items", { headers })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [token]);

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Title</th>
          <th className="px-4 py-2">Identifier</th>
          <th className="px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="border px-4 py-2">{item.title}</td>
            <td className="border px-4 py-2">{item.identifier}</td>
            <td className="border px-4 py-2">{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
