import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { state } = useCart();
  return (
    <header className="header">
      <h1>Cart List</h1>
      <div className="cart-count"><IoCartOutline /> {state.cart.length}</div>
    </header>
  );
};

export default Header;
