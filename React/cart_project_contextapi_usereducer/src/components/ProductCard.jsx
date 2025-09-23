import { useCart } from "../context/CartContext";
import PropTypes from "prop-types";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineDeleteOutline } from "react-icons/md";
const ProductCard = ({ product }) => {
  const { state, dispatch } = useCart();

  const isInCart = state.cart.some((item) => item.id === product.id);

  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-img" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      {isInCart ? (
        <button
          className="remove-btn"
          onClick={() =>
            dispatch({ type: "REMOVE_FROM_CART", payload: product })
          }
        >
          Remove From Cart <MdOutlineDeleteOutline />
        </button>
      ) : (
        <button
          className="add-btn"
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
        >
          Add to Cart <IoCartOutline />
        </button>
      )}
    </div>
  );
};
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
