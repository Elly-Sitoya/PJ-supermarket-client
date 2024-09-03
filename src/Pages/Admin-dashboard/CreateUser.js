import React, { useState } from "react";
import axios from "axios";
import apiList from "../../lib/apiList";

const CreateUser = () => {
  const initialUserData = {
    name: "",
    email: "",
    password: "",
    phone: "",
    isAdmin: false,
    street: "",
    apartment: "",
    zip: "",
    city: "",
    country: "",
  };

  const [userData, setUserData] = useState(initialUserData);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(apiList.createUser, userData);
      setMessage("User created successfully");
      setUserData(initialUserData);
    } catch (error) {
      setMessage("Error creating user");
    }
  };

  return (
    <div>
      <h2>Create a new user</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={userData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={userData.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="street"
          placeholder="Street"
          value={userData.street}
          onChange={handleChange}
        />
        <input
          type="text"
          name="apartment"
          placeholder="Apartment"
          value={userData.apartment}
          onChange={handleChange}
        />
        <input
          type="text"
          name="zip"
          placeholder="ZIP Code"
          value={userData.zip}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={userData.city}
          onChange={handleChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={userData.country}
          onChange={handleChange}
        />

        <button type="submit" className="btn">
          Create User
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateUser;
