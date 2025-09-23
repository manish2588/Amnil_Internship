import { CartProvider } from "./context/CartContext";
import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  {
    /* Data objects to display */
  }
  const products = [
    {
      id: 1,
      name: "Gaming Console",
      price: 50,
      image: "/game.jpg",
    },
    {
      id: 2,
      name: "Mobile",
      price: 120,
      image: "/mobile.png",
    },
    { id: 3, name: "Laptop", price: 80, image: "/laptop.jpg" },
    {
      id: 4,
      name: "Gaming Console",
      price: 500,
      image: "/game.jpg",
    },
    {
      id: 5,
      name: "Mobile",
      price: 50,
      image: "/mobile.png",
    },
    { id: 6, name: "Laptop", price: 800, image: "/laptop.jpg" },
  ];

  return (
    <CartProvider>
      <Header />
      <div className="product-list">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </CartProvider>
  );
};

export default App;
