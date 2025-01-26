import React, { useState } from "react";
import "./ShoppingCart.css"; // Import CSS for styling

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 10, quantity: 1 },
    { id: 2, name: "Product 2", price: 20, quantity: 2 },
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(id);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty!</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-price">Price: ${item.price}</p>
              <div className="cart-item-quantity">
                <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                <input
                  id={`quantity-${item.id}`}
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value, 10))
                  }
                />
              </div>
              <p className="cart-item-total">Total: ${item.price * item.quantity}</p>
              <button className="remove-button" onClick={() => removeItem(item.id)}>
                Remove
              </button>
            </div>
          ))}
          <h3 className="grand-total">Grand Total: ${calculateTotal()}</h3>
          <button
            className="finalize-button"
            onClick={() => alert("Purchase finalized!")}
          >
            Finalize Purchase
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
