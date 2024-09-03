import { useEffect, useContext, useState } from "react";
import { Navigate } from "react-router-dom";

import { SetPopupContext } from "../App";

const Logout = (props) => {
  const [popup, setPopup] = useState({
    open: false,
    severity: "",
    message: "",
  });
  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("type");
    setPopup({
      open: true,
      severity: "success",
      message: "Logged out successfully",
    });
  }, []);
  return <Navigate to="/login" />;
};

export default Logout;
