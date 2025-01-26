import React, { useState } from "react";
import "./Account.css"; // Import the CSS file

const Account = () => {
  const [account, setAccount] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccount((prevAccount) => ({
      ...prevAccount,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account details saved successfully!");
    console.log("Account Details:", account);
  };

  return (
    <div className="account-container">
      <h1 className="account-title">Account Management</h1>
      <form onSubmit={handleSubmit} className="account-form">
        {/* Name Input */}
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={account.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="form-input"
          />
        </div>

        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={account.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="form-input"
          />
        </div>

        {/* Address Input */}
        <div className="form-group">
          <label htmlFor="address" className="form-label">
            Shipping Address:
          </label>
          <textarea
            id="address"
            name="address"
            value={account.address}
            onChange={handleChange}
            placeholder="Enter your shipping address"
            required
            className="form-textarea"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="form-button">
          Save Account
        </button>
      </form>
    </div>
  );
};

export default Account;
