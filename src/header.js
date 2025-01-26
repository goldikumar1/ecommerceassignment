import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
  return (
    <header>
      <h1>Shopping Website</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/account">Account</Link>
        <Link to="/comments">Comments</Link>

      </nav>
    </header>
  );
};

export default Header;