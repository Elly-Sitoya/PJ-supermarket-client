import React, { useEffect, useState } from "react";
import axios from "axios";
import apiList from "../../lib/apiList";
import { Link } from "react-router-dom";

const CategoriesComponent = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(apiList.getAllCategories)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category._id}>
            {category.name}{" "}
            <Link to={`/admin/updatecategory/${category._id}`}>
              <button className="btn">Edit</button>
            </Link>
            <Link to={`/admin/deletecategory/${category._id}`}>
              <button className="btn">delete</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesComponent;
