import {
  BsFillArchiveFill,
  BsFillBellFill,
  BsFillGrid3X3GapFill,
  BsFillPeopleFill,
} from "react-icons/bs";
import "../../Styles/AdminHome.css";
import ProductsCharts from "../../Components/ProductsCharts";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminHome = () => {
  const [categoryCount, setCategoryCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    fetchCategoryCount();
    fetchProductCount();
  }, []);

  const fetchCategoryCount = () => {
    axios
      .get("http://localhost:4000/api/v1/categories")
      .then((response) => {
        setCategoryCount(response.data.length);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to fetch category count.");
        setLoading(false);
      });
  };

  const fetchProductCount = () => {
    axios
      .get("http://localhost:4000/api/v1/products")
      .then((response) => {
        setProductCount(response.data.length);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to fetch product count.");
        setLoading(false);
      });
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="admin-main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="admin-card">
          <div className="card-inner">
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>{productCount}</h1>
        </div>
        <div className="admin-card">
          <div className="card-inner">
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className="card-icon" />
          </div>
          <h1>{categoryCount}</h1>
        </div>
        {/* <div className="admin-card">
          <div className="card-inner">
            <h3>CUSTOMERS</h3>
            <BsFillPeopleFill className="card-icon" />
          </div>
          <h1>59</h1>
        </div> */}
        <div className="admin-card">
          <div className="card-inner">
            <h3>ALERTS</h3>
            <BsFillBellFill className="card-icon" />
          </div>
          <h1>36</h1>
        </div>
      </div>
      <div className="charts">
        <ProductsCharts />
      </div>
    </main>
  );
};

export default AdminHome;
