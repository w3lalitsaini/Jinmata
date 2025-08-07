import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { toast } from "react-toastify";

const CheckoutForm = () => {
  const { cart, getTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const itemsList = cart
      .map(
        (item) =>
          `${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`
      )
      .join(", ");

    const orderData = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      address: form.address,
      items: itemsList,
      total: getTotal(),
    };

    try {
      // ✅ Send email using EmailJS
      await emailjs.send(
        "service_h9dk23n", // your service ID
        "template_j3ywnz9", // your template ID
        orderData,
        "XlJ4bIw7Fe9TE_q4s" // your public key
      );

      toast.success("Order submitted successfully");
      clearCart();
      navigate("/");
    } catch (emailError) {
      console.error("❌ EmailJS Error:", emailError);

      try {
        const response = await axios.post(
          "https://script.google.com/macros/s/AKfycbzoxgrT1k3FFWcRAvV4hQKmgHq4k5Y3uJ1s0bLkGacUgG7oQgcGAUGqW_Pbhotf1pXetQ/exec",
          orderData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("✅ Google Sheets response:", response.data);
        toast.info("⚠️ Email failed, but order saved to Google Sheets.");
        clearCart();
        navigate("/");
      } catch (sheetError) {
        console.error("❌ Google Sheets Error:", sheetError);
        toast.error("❌ Failed to submit order. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <textarea
          name="address"
          placeholder="Shipping Address"
          value={form.address}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        ></textarea>

        {/* 🧾 Order Summary */}
        <div className="bg-gray-100 p-4 rounded mt-6">
          <h2 className="text-lg font-semibold mb-2">Order Summary:</h2>
          <ul className="space-y-2 text-sm">
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ₹{item.price} × {item.quantity}
              </li>
            ))}
          </ul>
          <div className="mt-2 font-semibold">Total: ₹{getTotal()}</div>
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Order"}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
