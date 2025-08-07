import React from "react";
import Routes from "./routes/Routes";
import CartProvider from "./context/CartContext"; // ✅ Corrected path
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <CartProvider>
      <Routes />
      <ToastContainer position="top-right" autoClose={3000} />
    </CartProvider>
  );
};

export default App;
