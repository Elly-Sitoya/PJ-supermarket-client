import React from "react";

const Inventories = () => {
  return (
    <div>
      <h2>Product Details</h2>
      <div>
        <label>Product Name:</label>
        <input type="text" placeholder="Enter product name" />
      </div>
      <div>
        <label>Product Description:</label>
        <textarea placeholder="Enter product description"></textarea>
      </div>
      <div>
        <label>Product Code/ID:</label>
        <input type="text" placeholder="Enter product code/ID" />
      </div>
      <div>
        <label>Category:</label>
        <input type="text" placeholder="Enter product category" />
      </div>
      <div>
        <label>Price:</label>
        <input type="text" placeholder="Enter product price" />
      </div>
      <div>
        <label>Images:</label>
        <input type="file" accept="image/*" multiple />
      </div>
    </div>
  );
};

export default Inventories;
