import React, { useEffect, useState } from "react";
import { simulatedData } from "../../data";

const Reports = () => {
  const [productData, setProductData] = useState([]);

  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 4) {
      return words.slice(0, 2).join(" ") + "...";
    }
    return description;
  };

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        // Perform the data fetching operation
        // Example: const response = await fetch('/api/products');
        // const data = await response.json();
        // setProductData(data);

        // Simulated data for demonstration purposes
        // const
        setProductData(simulatedData);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, []);

  return (
    <div>
      <h2>Supermarket Product Report</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Price</th>
            <th style={tableHeaderStyle}>Quantity</th>
            <th style={tableHeaderStyle}>Sales</th>
            <th style={tableHeaderStyle}>Revenue</th>
            <th style={tableHeaderStyle}>Description</th>
            <th style={tableHeaderStyle}>Supplier</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((product) => {
            const revenue = product.price * product.sales;
            return (
              <tr key={product.id}>
                <td style={{ ...tableCellStyle }}>{product.name}</td>
                <td style={tableCellStyle}>${product.price.toFixed(2)}</td>
                <td style={tableCellStyle}>{product.quantity}</td>
                <td style={tableCellStyle}>{product.sales}</td>
                <td style={tableCellStyle}>${revenue.toFixed(2)}</td>
                <td style={tableCellStyle}>
                  {truncateDescription(product.description)}
                </td>
                <td style={tableCellStyle}>{product.supplier}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h3>Recommendations:</h3>
      <ul>
        <li>Include more products from Supplier 1 due to high sales.</li>
        <li>Consider reducing the price of Product 2 to boost sales.</li>
      </ul>
    </div>
  );
};

const tableHeaderStyle = {
  backgroundColor: "#f2f2f2",
  padding: "8px",
  textAlign: "left",
  borderBottom: "1px solid #ddd",
  whiteSpace: "nowrap",
};

const tableCellStyle = {
  padding: "8px",
  borderBottom: "1px solid #ddd",
  whiteSpace: "nowrap",
};

export default Reports;
