import React, { useState } from "react";
import axios from "axios";
import isAuth from "../../lib/isAuth";
import apiList from "../../lib/apiList";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    icon: "",
    color: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const authToken = isAuth(); // Call isAuth() directly to retrieve the authorization token

    axios
      .post(apiList.createCategory, formData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        setSuccessMessage("Category created successfully"); // Set success message
        setFormData({
          name: "",
          icon: "",
          color: "",
        }); // Clear form data
      })
      .catch((error) => {
        console.error(error); // Handle error
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {successMessage && <p>{successMessage}</p>}
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
