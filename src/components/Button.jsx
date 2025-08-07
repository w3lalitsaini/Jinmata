import React from "react";

const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-peach text-black px-4 py-2 rounded-full font-medium hover:bg-white hover:text-peach transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
