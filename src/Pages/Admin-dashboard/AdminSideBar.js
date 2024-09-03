import {
  BsFillArchiveFill,
  BsFillGearFill,
  BsFillGrid3X3GapFill,
  BsFillMenuButtonWideFill,
  BsFillPeopleFill,
  BsGrid1X2Fill,
  BsListCheck,
} from "react-icons/bs";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../../Styles/AdminSidebar.css";

const AdminSideBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem("token");

    // Perform any other necessary cleanup or redirection
    // For example, you can redirect the user to the login page
    // window.location.href = "/login";
    navigate("/login");
  };

  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        <span className="icon close_icon">X</span>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/admin">
            <BsGrid1X2Fill className="icon" />
            Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/admin/allproducts">
            <BsFillArchiveFill className="icon" />
            Products
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/admin/categories">
            <BsFillGrid3X3GapFill className="icon" />
            Categories
          </Link>
        </li>

        <li className="sidebar-list-item">
          <Link to="/admin/inventories">
            <BsListCheck className="icon" />
            Inventories
          </Link>
        </li>
        {/* <li className="sidebar-list-item">
          <Link to="/admin/reports">
            <BsFillMenuButtonWideFill className="icon" />
            Reports
          </Link>
        </li> */}
        <li className="sidebar-list-item">
          <Link to="/logout">
            <BsFillGearFill className="icon" />
            Logout
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default AdminSideBar;
