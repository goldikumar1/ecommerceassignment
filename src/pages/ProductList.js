import React, { useState } from "react";
import "./ProductList.css"; // Import CSS for styling

const ProductList = () => {
  const [products] = useState([
    { 
      id: 1, 
      name: "Apple", 
      description: "High-quality item", 
      price: 10, 
      image: "/images/apples.jpg"  // Add image path
    },
    { 
      id: 2, 
      name: "Mangoes", 
      description: "Durable and reliable", 
      price: 20, 
      image: "/images/mangoes.jpg"  // Add image path
    },
    { 
      id: 3, 
      name: "peaches", 
      description: "Affordable and stylish", 
      price: 30, 
      image: "/images/peaches.jpg"  // Add image path
    },
    { 
      id: 4, 
      name: "Carrots", 
      description: "Premium quality", 
      price: 40, 
      image: "/images/carrots.jpg"  // Add image path
    },
    { 
      id: 5, 
      name: "Broccoli", 
      description: "Best in class", 
      price: 50, 
      image: "/images/broccoli.jpg"  // Add image path
    }
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
            <img 
              src={product.image} 
              alt={product.name} 
              className="product-image" // Apply styling class
            />
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
