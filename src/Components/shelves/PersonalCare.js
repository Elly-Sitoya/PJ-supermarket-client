import { Link } from "react-router-dom";
import { toys } from "../../data";
import ProductCard from "./ProductCard";
import apiList from "../../lib/apiList";
import useDataFetching from "../../lib/useDataFetching";

const PersonalCare = () => {
  const {
    data: allData,
    loading,
    error,
  } = useDataFetching(apiList.getAllProducts);

  const toys = allData.filter((item) => item.category?.name === "personalcare");
  return (
    <>
      <Link to={"/"}>Back to Shelves</Link>
      <div>PersonalCare</div>
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

export default PersonalCare;
