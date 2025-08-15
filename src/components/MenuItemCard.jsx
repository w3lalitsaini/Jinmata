import React from "react";

// Category-based color map
const categoryColors = {
  spicy: "bg-red-500",
  sweet: "bg-pink-500",
  vegan: "bg-green-500",
  popular: "bg-yellow-500",
  seasonal: "bg-blue-500",
  special: "bg-berry", 
  default: "bg-gray-500",
};

const MenuItemCard = ({ item, footer }) => {
  const category = item.category?.toLowerCase();
  const showCategoryBadge = category && category !== "normal";

  // Get color class from map or fallback
  const badgeColor = categoryColors[category] || categoryColors.default;

  return (
    <div className="relative bg-orange-200 p-4 rounded-md shadow transition-transform duration-300 hover:shadow-md hover:scale-[1.01] group">
      {/* Category Badge */}
      {showCategoryBadge && (
        <span
          className={`absolute top-2 right-2 ${badgeColor} text-white text-xs px-2 py-1 rounded-full shadow`}
        >
          {item.category}
        </span>
      )}

      <img
        src={item.image}
        alt={item.name}
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h3 className="text-lg font-semibold">{item.name}</h3>
      <p className="text-sm font-semibold text-gray-600 mb-4">₹{item.price}</p>
      {footer}
    </div>
  );
};

export default MenuItemCard;
