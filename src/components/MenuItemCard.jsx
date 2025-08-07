import React from "react";

const MenuItemCard = ({ item, footer }) => {
  return (
    <div className="relative bg-orange-200 p-4 rounded-md shadow transition-transform duration-300 hover:shadow-md hover:scale-[1.01] group">
      {/* Category Badge */}
      {item.category && (
        <span className="absolute top-2 right-2 bg-berry text-white text-xs px-2 py-1 rounded-full shadow">
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
