import { Link } from "react-router-dom";
import "../Styles/ProductCard.css";

const CartCard = ({ thumbnail, name, price, id, toy, removeFromCart }) => {
  return (
    <div className="productCard">
      <Link to={`item/${id}`}>
        <img src={thumbnail} alt="" className="productImage" />
        <div className="productDetails">
          <h2 className="brandName">{name}</h2>
          <p className="productPrice">Ksh. {price}</p>
        </div>
      </Link>
      <div className="card-buttons">
        <button
          className="btn"
          onClick={() => {
            removeFromCart(toy);
          }}
        >
          remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
