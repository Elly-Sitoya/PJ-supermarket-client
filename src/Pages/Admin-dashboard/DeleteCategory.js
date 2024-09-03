import React, { useState, useEffect } from "react";
import axios from "axios";
import isAuth from "../../lib/isAuth";
import { useParams, Navigate, useNavigate } from "react-router-dom";

const DeleteCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [category, setCategory] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/categories/${id}`)
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to fetch category.");
      });
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:4000/api/v1/categories/${id}`, {
        headers: {
          Authorization: `Bearer ${isAuth()}`,
        },
      })
      .then(() => {
        console.log("Category deleted successfully.");
        navigate("/admin/categories"); // Navigate to the category list page
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to delete category.");
      });
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (!category) {
    return <p>Loading...</p>; // or a loading spinner
  }

  return (
    <div>
      <h2>Delete Category</h2>
      <p>Are you sure you want to delete the category "{category.name}"?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteCategory;
