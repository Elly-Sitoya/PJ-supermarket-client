import { Link } from "react-router-dom";
import "../Styles/AddCart.css";

const AddCart = ({ addToCart, toy, cart, toyItems }) => {
  return (
    <Link>
      <button
        className="btn"
        onClick={() => {
          addToCart(toy);
          console.log(cart);
        }}
      >
        Add to Cart
      </button>
    </Link>
  );
};

export default AddCart;
