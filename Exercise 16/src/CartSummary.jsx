import { useContext } from "react";
import CartContext from "./CartContext";

const CartSummary = () => {
  const { cartItems, removeCart } = useContext(CartContext);
  return (
    <div>
      <h1>Cart Summary</h1>
      <span>Total Items: {cartItems.length}</span>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}{" "}
            <button onClick={() => removeCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartSummary;
