import "../../Styles/productDetails.css";
import apiList from "../../lib/apiList";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { toyID } = useParams();
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await axios.get(apiList.getAllProducts);
        const results = response.data;

        if (!results) {
          console.log("No results");
          return;
        }

        setToys(results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getItems();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const toy = toys.find((toy) => toy._id === toyID);

  if (!toy) {
    return <p>Toy not found</p>;
  }

  const { image, name, price, description } = toy;

  return (
    <section className="container">
      <div className="card">
        <img src={image} alt={name} />
        <div className="productDetails">
          <h5>{price}</h5>
          <p>{description}</p>
        </div>
      </div>
      <Link to="/toys">Back to Toys</Link>
    </section>
  );
};

export default ProductDetails;
