import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Get the root DOM element
const rootElement = document.getElementById("root");

// Create a root for rendering
const root = ReactDOM.createRoot(rootElement);

// Render the application
root.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);
