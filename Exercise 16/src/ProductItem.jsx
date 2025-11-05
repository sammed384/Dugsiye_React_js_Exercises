import { useContext } from "react";
import CartContext from "./CartContext";

const ProductItem = ({ id, name, price }) => {
  const { addCart } = useContext(CartContext);
  const handleAdd = () => {
    addCart({ id, name, price });
  };
  return <div>
    <p>{name}</p>
    <p>price: ${price}</p>
    <button onClick={handleAdd}>Add to cart</button>
  </div>;
};

export default ProductItem;
