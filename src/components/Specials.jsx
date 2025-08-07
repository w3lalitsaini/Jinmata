import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import specialsData from "../data/data.json";
import MenuItemCard from "./MenuItemCard";
import Button from "./Button";
import { toast } from "react-toastify";

const Specials = () => {
  const [specials, setSpecials] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const filtered = specialsData.filter((item) => item.category === "special");
    setSpecials(filtered);
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <div className="px-6 pb-16 pt-4 bg-cream text-black">
      <h2 className="text-4xl font-bold font-heading mb-8 text-berry">Specials</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {specials.map((item) => (
          <MenuItemCard
            key={item.id}
            item={item}
            footer={
              <Button
                onClick={() => handleAddToCart(item)}
                className="w-full text-sm hover:ring-red-300 hover:ring-1 "
              >
                Add to Cart
              </Button>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Specials;
