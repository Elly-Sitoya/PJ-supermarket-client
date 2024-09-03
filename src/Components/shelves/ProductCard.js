import { Link } from "react-router-dom";
import "../../Styles/ProductCard.css";
import AddCart from "../AddCart";
import ReserveOrderBtn from "../ReserveOrderBtn";

const ProductCard = ({
  image,
  name,
  price,
  _id,
  id,
  toy,
  addToCart,
  cart,
  toyItems,
}) => {
  console.log("hello");
  return (
    <div className="productCard">
      <Link to={`/item/${_id}`}>
        <img src={image} alt="" className="productImage" />
        <div className="productDetails">
          <h2 className="brandName">{name}</h2>
          <p className="productPrice">Ksh. {price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
