// components/CartDrawer.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import { FiX } from "react-icons/fi";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ isOpen, onClose }) => {
  const {
    cart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    getTotal,
    clearCart,
  } = useCart();
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            className="fixed right-0 top-0 h-full w-[90%] sm:w-[400px] bg-white shadow-xl z-50 p-4 overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Your Cart</h2>
              <button onClick={onClose}>
                <FiX className="w-6 h-6" />
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              <>
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="border-b pb-2 flex justify-between items-start"
                    >
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-600">
                          ₹{item.price} × {item.quantity}
                        </p>
                        <div className="flex gap-2 mt-1">
                          <button
                            className="px-2 py-1 bg-gray-200 rounded"
                            onClick={() => decrementQuantity(item.id)}
                          >
                            -
                          </button>
                          <button
                            className="px-2 py-1 bg-gray-200 rounded"
                            onClick={() => incrementQuantity(item.id)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button onClick={() => removeFromCart(item.id)}>
                        <FiX className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t pt-4">
                  <p className="text-lg font-bold">
                    Total: ₹{getTotal().toFixed(2)}
                  </p>

                  <Button
                    className="w-full mt-4"
                    onClick={() => {
                      onClose(); // Close drawer first
                      setTimeout(() => navigate("/cart"), 300); // Navigate after 300ms
                    }}
                  >
                    Checkout
                  </Button>

                  <Button
                    className="w-full mt-2 bg-gray-200 text-black"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
