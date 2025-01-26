import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./header";
import ProductList from "./pages/ProductList";
import ShoppingCart from "./pages/ShoppingCart";
import Account from "./pages/Account";
import Comments from "./pages/Comments";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Header Section */}
        <Header />

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
            <Route path="/comments" element={<Comments />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
