import React, { useState } from "react";
import isAuth from "../../lib/isAuth";

const CreateSupplier = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const authToken = isAuth(); // Retrieve the authentication token from isAuth() function

      const response = await fetch("http://localhost:4000/api/v1/suppliers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`, // Include the bearer token in the request header
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Supplier created successfully!");
        // Reset form fields
        setFormData({
          name: "",
          location: "",
          phoneNumber: "",
          email: "",
        });
      } else {
        const errorData = await response.json();
        console.log("Error creating supplier:", errorData);
      }
    } catch (error) {
      console.log("Error creating supplier:", error);
    }
  };

  return (
    <div>
      <h2>Create Supplier</h2>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create Supplier</button>
      </form>
    </div>
  );
};

export default CreateSupplier;
