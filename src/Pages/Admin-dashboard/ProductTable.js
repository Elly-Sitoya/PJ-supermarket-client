import React from "react";
import isAuth from "../../lib/isAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductTable = ({ products }) => {
  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 4) {
      return words.slice(0, 2).join(" ") + "...";
    }
    return description;
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const thStyle = {
    backgroundColor: "#f2f2f2",
    borderBottom: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  };

  const tdStyle = {
    borderBottom: "1px solid #ddd",
    // padding: "8px",
    textAlign: "left",
    whiteSpace: "nowrap",
  };

  const imgStyle = {
    maxWidth: "50px",
  };

  // const handleDelete = (id) => {
  //   fetch(`http://localhost:4000/api/v1/products/${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       Authorization: `Bearer ${isAuth()}`,
  //     },
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         // Handle successful deletion, e.g., update product list
  //         console.log("Product deleted successfully");
  //         window.location.reload();
  //       } else {
  //         throw new Error("Failed to delete product");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error deleting product:", error);
  //     });
  // };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#caba2c",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/api/v1/products/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${isAuth()}`,
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to delete product");
            }
            return response.json();
          })
          .then((data) => {
            console.log("Product deleted successfully", data);
            window.location.reload(); // Reload or update the product list after successful deletion
          })
          .catch((error) => {
            console.error("Error deleting product:", error);
            Swal.fire({
              title: "Error",
              text: "Failed to delete the product.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div>
      <div style={{ whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Brand</th>
              <th style={thStyle}>Price</th>
              <th style={thStyle}>Description</th>
              <th style={thStyle}>Category</th>
              <th style={thStyle}>Count in Stock</th>
              <th style={thStyle}>Date Created</th>
              <th style={thStyle}>Image</th>
              <th style={thStyle}>Actions</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td style={tdStyle}>{product.name}</td>
                <td style={tdStyle}>{product.brand}</td>
                <td style={tdStyle}>${product.price.toFixed(2)}</td>
                <td style={{ ...tdStyle, whiteSpace: "wrap" }}>
                  {truncateDescription(product.description)}
                </td>
                <td style={tdStyle}>
                  {product.category ? product.category.name : "N/A"}
                </td>
                <td style={tdStyle}>{product.countInStock}</td>
                <td style={tdStyle}>{product.dateCreated}</td>
                <td style={tdStyle}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={imgStyle}
                  />
                </td>
                <td style={tdStyle}>
                  <Link className="btn" to={`editProduct/${product._id}`}>
                    edit
                  </Link>
                </td>
                <td style={tdStyle}>
                  <button
                    className="btn"
                    onClick={() => handleDelete(product.id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>{" "}
    </div>
  );
};

export default ProductTable;
