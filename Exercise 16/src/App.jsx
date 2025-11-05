import { useState } from "react";
import CartContext from "./CartContext";
import ProductItem from "./ProductItem";
import CartSummary from "./CartSummary";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const addCart = (i) => {
    setCartItems([...cartItems, i]);
  };
  const removeCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  const value = { cartItems, addCart, removeCart };

  return (
    <CartContext.Provider value={value}>
      <ProductItem id={1} name="Widget" price={10.99} />
      <ProductItem id={2} name="Widget" price={50.99} />
      <ProductItem id={3} name="Laptop" price={550.99} />
      <CartSummary />
    </CartContext.Provider>
  );
}

export default App;
