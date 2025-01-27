import React, { useState } from "react";

const Account = () => {
  const [accountDetails, setAccountDetails] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account details updated!");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1>Account Details</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ margin: "10px 0" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={accountDetails.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            style={{ padding: "5px", width: "100%" }}
          />
        </div>

        <div style={{ margin: "10px 0" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={accountDetails.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            style={{ padding: "5px", width: "100%" }}
          />
        </div>

        <div style={{ margin: "10px 0" }}>
          <label>Shipping Address:</label>
          <textarea
            name="address"
            value={accountDetails.address}
            onChange={handleChange}
            placeholder="Enter your shipping address"
            required
            style={{ padding: "5px", width: "100%", height: "100px" }}
          ></textarea>
        </div>

        <div style={{ margin: "10px 0" }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={accountDetails.password}
            onChange={handleChange}
            placeholder="Enter a new password"
            style={{ padding: "5px", width: "100%" }}
          />
        </div>

        <button type="submit" style={{ padding: "10px 20px" }}>
          Update Account
        </button>
      </form>
    </div>
  );
};

export default Account;
