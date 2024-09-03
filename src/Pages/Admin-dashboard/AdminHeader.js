import { BsSearch, BsJustify, BsFillBellFill } from "react-icons/bs";
import "../../Styles/AdminHeader.css";
import { Link } from "react-router-dom";
function AdminHeader() {
  return (
    <header className="header">
      {/* <div className="header-left">
        <BsSearch className="icon" />
      </div> */}
      <div className="header-right">
        <Link className="btn" to="/admin/createUser">
          <BsFillBellFill className="icon" />
          CREATE USER
        </Link>
        <Link className="btn" to="/admin/createCategory">
          <BsFillBellFill className="icon" />
          CREATE CATEGORY
        </Link>
        <Link className="btn" to="/admin/createSupplier">
          <BsFillBellFill className="icon" />
          ADD SUPPLIER
        </Link>
        <Link className="btn" to="/admin/addproducts">
          <BsFillBellFill className="icon" />
          ADD
        </Link>
      </div>
    </header>
  );
}

export default AdminHeader;
