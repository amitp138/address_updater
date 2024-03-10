import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AddressProvider } from "./context/AddressContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AddressProvider>
      <App />
    </AddressProvider>
  </React.StrictMode>
);
