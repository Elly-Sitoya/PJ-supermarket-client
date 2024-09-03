import { Outlet } from "react-router-dom";
import "../../Styles/AdminLayout.css";
import AdminHeader from "./AdminHeader";
import AdminSideBar from "./AdminSideBar";

const AdminSharedLayout = () => {
  return (
    <article className="admin-body">
      <div className="grid-container">
        <AdminHeader />
        <AdminSideBar />
        <Outlet />
      </div>
    </article>
  );
};

export default AdminSharedLayout;
