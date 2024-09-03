// import { Outlet } from "react-router-dom";
// import Footer from "./Footer";
// import Navbar from "./Navbar";

// const SharedLayout = () => {
//   return (
//     <>
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </>
//   );
// };

// export default SharedLayout;

import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const SharedLayout = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([
    { id: 1, name: "Apple", category: "Fruits" },
    { id: 2, name: "Banana", category: "Fruits" },
    { id: 3, name: "Milk", category: "Dairy" },
    { id: 4, name: "Bread", category: "Bakery" },
  ]);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <>
      <Navbar handleSearch={handleSearch} />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
