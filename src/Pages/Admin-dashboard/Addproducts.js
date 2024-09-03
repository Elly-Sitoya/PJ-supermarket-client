import React, { useState, useEffect } from "react";
import axios from "axios";
import isAuth from "../../lib/isAuth";

const CreateProduct = () => {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    supplierEmail: "",
    name: "",
    description: "",
    richDescription: "",
    image: null,
    brand: "",
    price: 0,
    category: "",
    countInStock: 0,
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  });
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

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
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataWithImage = new FormData();
    for (const key in formData) {
      formDataWithImage.append(key, formData[key]);
    }

    console.log(formDataWithImage);

    axios
      .post("http://localhost:4000/api/v1/products", formDataWithImage, {
        headers: {
          Authorization: `Bearer ${isAuth()}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Product created successfully:", response.data);
        resetForm();
        setSuccessMessage("Product created successfully!");
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to create product.");
      });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      richDescription: "",
      image: null,
      brand: "",
      price: 0,
      category: "",
      countInStock: 0,
      rating: 0,
      numReviews: 0,
      isFeatured: false,
    });
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {successMessage && <p>{successMessage}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        {/* <div>
          <label htmlFor="richDescription">Rich Description: </label>
          <input
            type="text"
            id="richDescription"
            name="richDescription"
            value={formData.richDescription}
            onChange={handleChange}
          />
        </div> */}
        <div>
          <label htmlFor="image">Image: </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
          />
        </div>
        <div>
          <label htmlFor="brand">Brand: </label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price: </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category: </label>

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
          <label htmlFor="countInStock">Count in Stock: </label>
          <input
            type="number"
            id="countInStock"
            name="countInStock"
            value={formData.countInStock}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="rating">Rating: </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="numReviews">Number of Reviews: </label>
          <input
            type="number"
            id="numReviews"
            name="numReviews"
            value={formData.numReviews}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="isFeatured">Is Featured: </label>
          <input
            type="checkbox"
            id="isFeatured"
            name="isFeatured"
            checked={formData.isFeatured}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="supplierEmail">Supplier Email: </label>
          <input
            type="email"
            id="supplierEmail"
            name="supplierEmail"
            value={formData.supplierEmail}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;
