import { useState } from "react";

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleAddP = () => {
    if (productName.trim() !== "" && productPrice.trim() !== "") {
      const newProduct = {
        id: crypto.randomUUID(),
        name: productName.trim(),
        price: parseFloat(productPrice),
        quantity: 1,
      };
      setProducts([...products, newProduct]);
      setProductName("");
      setProductPrice("");
    }
  };
  const increaseQ = (id) => {
    const updatedP = products.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setProducts(updatedP);
  };

  const decreaseQ = (id) => {
    const updatedP = products.map((product) =>
      product.id === id && product.quantity > 1
        ? {
            ...product,
            quantity: product.quantity - 1,
          }
        : product
    );
    setProducts(updatedP);
  };
  const removeP = (id) => {
    const updatedP = products.filter((product) => product.id !== id);
    setProducts(updatedP);
  };
  const totalP = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div>
      <h3>Simple Shopping Cart</h3>
      <div>
        <strong>Add a Product</strong>

        <input
          type="text"
          placeholder="Product Name"
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />
        <input
          min="0"
          type="number"
          placeholder="Price"
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
        />
        <button onClick={handleAddP}>Add to Cart</button>
      </div>
      {products.length > 0 ? (
        <div>
          <h3>Products in Cart</h3>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <strong>{product.name}</strong>-${product.price.toFixed(2)}
                <div>
                  Quantity:{" "}
                  <button onClick={() => decreaseQ(product.id)}>-</button>
                  {product.quantity}
                  <button onClick={() => increaseQ(product.id)}>+</button>
                </div>
                <button onClick={() => removeP(product.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h4>Total price: ${totalP.toFixed(2)}</h4>
        </div>
      ) : (
        <p>The cart is empty.</p>
      )}
    </div>
  );
};

export default ShoppingCart;
