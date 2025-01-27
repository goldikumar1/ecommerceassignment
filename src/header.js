import React from "react";
import { Link } from "react-router-dom";
import './Header.css';


const Header = ({ user, onLoginClick, logout }) => {
  return (
    <header>
      <h1>Shopping Website</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/products">Products</Link> | <Link to="/cart">Cart</Link> |{" "}
        <Link to="/account">Account</Link> | <Link to="/comments">Comments</Link>
      </nav>

      {/* Login/Logout Section */}
      <div className="user-status">
  {user ? (
    // Show user greeting and logout button if logged in
    <div>
      <span>Welcome, {user}!</span>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    // Show login button if not logged in
    <button onClick={onLoginClick}>Login</button>
  )}
</div>

    </header>
  );
};

export default Header;
