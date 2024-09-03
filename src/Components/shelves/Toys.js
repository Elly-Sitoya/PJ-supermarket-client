import { Link } from "react-router-dom";
import "../../Styles/Toys.css";
import ProductCard from "./ProductCard";
import apiList from "../../lib/apiList";
import useDataFetching from "../../lib/useDataFetching";

const Toys = () => {
  const {
    data: allData,
    loading,
    error,
  } = useDataFetching(apiList.getAllProducts);

  const toys = allData.filter((item) => item.category?.name === "toys");

  return (
    <article className="toy-container">
      <Link to={"/"}>Back to Shelves</Link>
      <div className="items-title">
        <h1 className="cat-title">Toys Section</h1>
        <div className="toys-button-header"></div>
      </div>
      <section className="toys-container">
        <div className="toy-shelf">
          <div className="first-row row">
            <>
              {loading ? (
                <div>Loading...</div>
              ) : error ? (
                <div>Error: {error.message}</div>
              ) : (
                toys.map((toy, index) => (
                  <ProductCard {...toy} toy={toy} key={index} toyItems={toys} />
                ))
              )}
            </>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Toys;
