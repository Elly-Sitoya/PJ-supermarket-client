import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Toys from "./Components/shelves/Toys";
import Beverages from "./Components/shelves/Beverages";
import Clothing from "./Components/shelves/Clothing";
import Electronics from "./Components/shelves/Electronics";
import Food from "./Components/shelves/Food";
import Household from "./Components/shelves/Household";
import PersonalCare from "./Components/shelves/PersonalCare";
import Teller1 from "./Components/shelves/Teller1";
import Teller2 from "./Components/shelves/Teller2";
import Teller3 from "./Components/shelves/Teller3";
import StoreShelf from "./Components/StoreShelf";
import ProductDetails from "./Components/shelves/ProductDetails";
import SharedLayout from "./Components/SharedLayout";
import OrderReservation from "./Pages/OrderReservation";
import Admin from "./Pages/Admin-dashboard/Admin";
import Products from "./Pages/Admin-dashboard/Products";
import Categories from "./Pages/Admin-dashboard/Categories";
import Addproducts from "./Pages/Admin-dashboard/Addproducts";
import CreateCategory from "./Pages/Admin-dashboard/CreateCategory";
import AdminSharedLayout from "./Pages/Admin-dashboard/AdminSharedLayout";
import Reports from "./Pages/Admin-dashboard/Reports";
import Inventories from "./Pages/Admin-dashboard/Inventories";
import Login from "./Pages/Login";
import Logout from "./Components/Logout";
import isAuth from "./lib/isAuth";
import PrivateRoutes from "./lib/PrivateRoutes";
import UpdateCategory from "./Pages/Admin-dashboard/UpdateCategory";
import DeleteCategory from "./Pages/Admin-dashboard/DeleteCategory";
import CreateSupplier from "./Pages/Admin-dashboard/CreateSupplier";
import CreateUser from "./Pages/Admin-dashboard/CreateUser";
import UpadateProducts from "./Components/UpdateProducts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/beverages" element={<Beverages />} />
            <Route path="/clothing" element={<Clothing />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/food" element={<Food />} />
            <Route path="/toys" element={<Toys />} />
            <Route path="/household" element={<Household />} />
            <Route path="/personalCare" element={<PersonalCare />} />
            <Route path="/teller1" element={<Teller1 />} />
            <Route path="/teller2" element={<Teller2 />} />
            <Route path="/teller3" element={<Teller3 />} />
            <Route path="/storeShelf" element={<StoreShelf />} />
            <Route path="/item/:toyID" element={<ProductDetails />} />
            <Route path="/orderReservation" element={<OrderReservation />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/admin" element={<AdminSharedLayout />}>
                <Route index element={<Admin />} />
                <Route path="/admin/allproducts" element={<Products />} />
                <Route path="/admin/addproducts" element={<Addproducts />} />
                <Route
                  path="/admin/allproducts/editProduct/:id"
                  element={<UpadateProducts />}
                />
                <Route
                  path="/admin/updatecategory/:id"
                  element={<UpdateCategory />}
                />
                <Route
                  path="/admin/deletecategory/:id"
                  element={<DeleteCategory />}
                />
                <Route
                  path="/admin/createcategory"
                  element={<CreateCategory />}
                />
                <Route
                  path="/admin/createSupplier"
                  element={<CreateSupplier />}
                />
                <Route path="/admin/categories" element={<Categories />} />
                {/* <Route path="/admin/inventories" element={<Inventories />} /> */}
                <Route path="/admin/inventories" element={<Addproducts />} />
                <Route path="/admin/reports" element={<Reports />} />
                <Route path="/admin/createUser" element={<CreateUser />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
