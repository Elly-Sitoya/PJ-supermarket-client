import { Navigate, Outlet } from "react-router-dom";
import isAuth from "../lib/isAuth";

const PrivateRoutes = () => {
  const auth = { token: isAuth() };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
