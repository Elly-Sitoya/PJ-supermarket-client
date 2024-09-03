import React, { useState, useEffect } from "react";
import axios from "axios";
import isAuth from "../../lib/isAuth";
import { useParams } from "react-router";

const UpdateCategory = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    icon: "",
    color: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/categories/${id}`)
      .then((response) => {
        const category = response.data;
        setFormData({
          name: category.name,
          icon: category.icon,
          color: category.color,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:4000/api/v1/categories/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${isAuth()}`,
        },
      })
      .then((response) => {
        console.log("Category updated successfully:", response.data);
        // Handle success or show a success message
      })
      .catch((error) => {
        console.error(error);
        // Handle error or show an error message
      });
  };

  return (
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
      {/* <div>
        <label htmlFor="icon">Icon: </label>
        <input
          type="text"
          id="icon"
          name="icon"
          value={formData.icon}
          onChange={handleChange}
        />
      </div> */}
      {/* <div>
        <label htmlFor="color">Color: </label>
        <input
          type="text"
          id="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />
      </div> */}
      <button type="submit">Update Category</button>
    </form>
  );
};

export default UpdateCategory;
