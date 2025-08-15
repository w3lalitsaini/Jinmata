import React, { useEffect, useRef, useState } from "react";
import MenuItemCard from "./MenuItemCard";
import Button from "./Button"; // Adjust path if needed
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

const FeaturedSlider = ({ items }) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`);
  };

  // Duplicate items for infinite scroll illusion
  const infiniteItems = [...items, ...items];

  useEffect(() => {
    const container = containerRef.current;
    let scrollInterval;

    if (!isHovered) {
      scrollInterval = setInterval(() => {
        if (container) {
          container.scrollBy({ left: 1, behavior: "smooth" });

          // Reset to start if scrolled through first set
          if (container.scrollLeft >= container.scrollWidth / 2) {
            container.scrollTo({ left: 0, behavior: "auto" });
          }
        }
      }, 16); // 60fps
    }

    return () => clearInterval(scrollInterval);
  }, [isHovered]);

  return (
    <div className="px-4 py-8 overflow-hidden">
      <h3 className="text-3xl font-heading font-bold mb-4 text-center text-berry">
        Featured Dishes
      </h3>

      <div
        ref={containerRef}
        className="flex gap-16 overflow-x-auto overflow-y-hidden scroll-smooth no-scrollbar"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {infiniteItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex-shrink-0 w-[300px] transition-transform duration-300"
          >
            <MenuItemCard
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSlider;
