import React, { useState } from "react";
import "./ProductList.css"; // Import CSS for styling

const ProductList = () => {
  const [products] = useState([
    { id: 1, name: "Product 1", description: "High-quality item", price: 10 },
    { id: 2, name: "Product 2", description: "Durable and reliable", price: 20 },
    { id: 3, name: "Product 3", description: "Affordable and stylish", price: 30 },
    { id: 4, name: "Product 4", description: "Premium quality", price: 40 },
    { id: 5, name: "Product 5", description: "Best in class", price: 50 },
  ]);

  const addToCart = (product) => {
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-list-container">
      <h1 className="product-list-title">Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">Price: ${product.price}</p>
            <button className="add-to-cart-button" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
