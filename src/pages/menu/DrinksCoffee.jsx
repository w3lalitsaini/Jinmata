import React from "react";
import MenuItemCard from "../../components/MenuItemCard";
import Button from "../../components/Button";
import data from "../../data/data.json";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";

const DrinksCoffee = () => {
  const drinks = data.filter((item) => item.type === "drinks-coffee");
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {drinks.map((item) => (
        <MenuItemCard
          key={item.id}
          item={item}
          footer={
            <Button
              onClick={() => handleAddToCart(item)}
              className="w-full text-sm hover:ring-red-300 hover:ring-1"
            >
              Add to Cart
            </Button>
          }
        />
      ))}
    </div>
  );
};

export default DrinksCoffee;
