import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./header";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import ShoppingCart from "./pages/ShoppingCart";
import Account from "./pages/Account";
import Comments from "./pages/Comments";

const App = () => {
  const [user, setUser] = useState(null); // Manage user login state
  const [showLogin, setShowLogin] = useState(false); // Manage login dialog visibility

  const login = (name) => {
    setUser(name); // Set logged-in user's name
    setShowLogin(false); // Close login dialog
  };

  const logout = () => {
    setUser(null); // Log out the user
  };

  return (
    <Router>
      <div className="app-container">
        {/* Header Section with login */}
        <Header
          user={user}
          onLoginClick={() => setShowLogin(true)}
          logout={logout}
        />

        {/* Show login dialog if needed */}
        {showLogin && (
          <div>
            <Login
              onLogin={(email) => {
                login(email.split("@")[0]); // Use email prefix as username
              }}
            />
            <button onClick={() => setShowLogin(false)}>Close</button>
          </div>
        )}

        {/* Main Content */}
        <main>
          <Routes>
            <Route
              path="/"
              element={<center>Welcome to the Shopping Website</center>}
            />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/account" element={<Account />} />
            <Route path="/comments" element={<Comments user={user} />} />
            
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
