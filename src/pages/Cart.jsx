import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Cart = () => {
  const navigate = useNavigate();
  const {
    cart,
    getTotal,
    removeFromCart,
    clearCart,
    incrementQuantity,
    decrementQuantity,
  } = useCart();

  const totalPrice = getTotal();

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    navigate("/checkout");
  };

  return (
    <motion.div
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100vw", opacity: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 15, duration: 0.5 }}
      className="p-4"
    >
      <h1 className="text-2xl font-heading mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty ☕</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      ₹{item.price} x {item.quantity}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                      >
                        Remove
                      </button>
                      <button
                        onClick={() => decrementQuantity(item.id)}
                        disabled={item.quantity === 1}
                        className={`text-xs rounded py-2 px-3 ${
                          item.quantity === 1
                            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      >
                        −
                      </button>
                      <button
                        onClick={() => incrementQuantity(item.id)}
                        className="text-xs bg-gray-300 py-2 px-3 rounded hover:bg-gray-400"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-gray-700 font-semibold">
                  ₹{item.price * item.quantity}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 font-semibold text-lg">Total: ₹{totalPrice}</div>

          <div className="mt-4 flex gap-4">
            <button
              onClick={clearCart}
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded text-sm"
            >
              Clear Cart
            </button>
            <button
              onClick={handleCheckout}
              className="bg-peach hover:bg-orange-400 px-4 py-2 rounded text-sm text-black"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Cart;
