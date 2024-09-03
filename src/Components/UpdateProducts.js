import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import isAuth from "../lib/isAuth";

const EditProductForm = () => {
  const [initialFormData, setInitialFormData] = useState(null);
  const { id } = useParams();
  const [formData, setFormData] = useState(null);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/v1/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const products = await response.json();

        const matchingProduct = products.find((item) => item._id === id);

        setInitialFormData(matchingProduct);
        setFormData(matchingProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    axios
      .get("http://localhost:4000/api/v1/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to fetch categories.");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEdit = () => {
    fetch(`http://localhost:4000/api/v1/products/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${isAuth()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setSuccessMessage("Product updated successfully");
          setErrorMessage(null);
        } else {
          setErrorMessage("Failed to update product");
          setSuccessMessage(null);
        }
      })
      .catch((error) => {
        console.error("Error updating product:", error);
        setErrorMessage("An error occurred while updating the product");
        setSuccessMessage(null);
      });
  };

  if (!initialFormData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="richDescription">Rich Description:</label>
        <textarea
          id="richDescription"
          name="richDescription"
          value={formData.richDescription}
          onChange={handleChange}
        ></textarea>
      </div>

      {/* <div>
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
      </div> */}

      <div>
        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          id="brand"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="countInStock">Count In Stock:</label>
        <input
          type="number"
          id="countInStock"
          name="countInStock"
          value={formData.countInStock}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="numReviews">Number of Reviews:</label>
        <input
          type="number"
          id="numReviews"
          name="numReviews"
          value={formData.numReviews}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="isFeatured">Is Featured:</label>
        <input
          type="checkbox"
          id="isFeatured"
          name="isFeatured"
          checked={formData.isFeatured}
          onChange={handleChange}
        />
      </div>

      <button onClick={handleEdit}>Update Product</button>
    </div>
  );
};

export default EditProductForm;
