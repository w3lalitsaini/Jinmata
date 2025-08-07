import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { cart } = useCart();

  const cartCount = Array.isArray(cart)
    ? cart.reduce((total, item) => total + item.quantity, 0)
    : 0;

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-xl font-heading text-coffee font-bold"
          >
            Jinmata Cafe
          </NavLink>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-6">
            <li>
              <NavLink
                to="/"
                end
                className="text-gray hover:text-yellow transition-colors duration-300"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/features"
                className="text-gray-700 hover:text-black"
              >
                Features
              </NavLink>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <NavLink
                to="/menu"
                className="flex items-center text-gray-700 hover:text-black"
              >
                Menu <IoIosArrowDown className="ml-1" />
              </NavLink>
              {dropdownOpen && (
                <ul className="absolute w-44 bg-white border rounded-md mt-0 p-2 space-y-1 shadow-lg z-50">
                  <li>
                    <NavLink
                      to="/menu/juices"
                      className="block px-4 py-1 text-gray-600 hover:text-black"
                    >
                      Juices
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/menu/fast-food"
                      className="block px-4 py-1 text-gray-600 hover:text-black"
                    >
                      Fast Food
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/menu/drinks-coffee"
                      className="block px-4 py-1 text-gray-600 hover:text-black"
                    >
                      Drinks & Coffee
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/menu/snacks"
                      className="block px-4 py-1 text-gray-600 hover:text-black"
                    >
                      Snacks
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink to="/gallery" className="text-gray-700 hover:text-black">
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="text-gray-700 hover:text-black">
                Contact
              </NavLink>
            </li>
            <li className="relative">
              <NavLink
                to="/cart"
                className="text-gray hover:text-yellow transition duration-300"
              >
                <FiShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                    {cartCount}
                  </span>
                )}
              </NavLink>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white border-t">
          <NavLink to="/" end className="block text-gray-700 hover:text-black">
            Home
          </NavLink>
          <NavLink
            to="/features"
            className="block text-gray-700 hover:text-black"
          >
            Features
          </NavLink>
          <div>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center w-full text-gray-700 hover:text-black"
            >
              Menu <IoIosArrowDown className="ml-1" />
            </button>
            {dropdownOpen && (
              <div className="pl-4 mt-1 space-y-1">
                <NavLink
                  to="/menu/juices"
                  className="block text-gray-600 hover:text-black"
                >
                  Juices
                </NavLink>
                <NavLink
                  to="/menu/fast-food"
                  className="block text-gray-600 hover:text-black"
                >
                  Fast Food
                </NavLink>
                <NavLink
                  to="/menu/drinks-coffee"
                  className="block text-gray-600 hover:text-black"
                >
                  Drinks & Coffee
                </NavLink>
                <NavLink
                  to="/menu/snacks"
                  className="block text-gray-600 hover:text-black"
                >
                  Snacks
                </NavLink>
              </div>
            )}
          </div>
          <NavLink
            to="/gallery"
            className="block text-gray-700 hover:text-black"
          >
            Gallery
          </NavLink>
          <NavLink
            to="/contact"
            className="block text-gray-700 hover:text-black"
          >
            Contact
          </NavLink>
          <NavLink to="/cart" className="block text-gray-700 hover:text-black">
            <FiShoppingCart size={20} />
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Header;
