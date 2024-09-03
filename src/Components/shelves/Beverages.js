import { Link } from "react-router-dom";
// import { toys } from "../../data";
import useDataFetching from "../../lib/useDataFetching";
import ProductCard from "./ProductCard";
import apiList from "../../lib/apiList";

const Beverages = () => {
  const {
    data: allData,
    loading,
    error,
  } = useDataFetching(apiList.getAllProducts);

  const toys = allData.filter((item) => item.category?.name === "beverages");
  console.log(toys);

  return (
    <>
      <Link to={"/"}>Back to Shelves</Link>
      <div>Beverages</div>
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
    </>
  );
};

export default Beverages;
