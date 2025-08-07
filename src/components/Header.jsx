import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cart } = useCart();

  const cartCount = Array.isArray(cart)
    ? cart.reduce((total, item) => total + item.quantity, 0)
    : 0;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-peach fixed top-0 left-0 shadow-md "
          : "bg-white relative"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink
            to="/"
            className="text-xl font-heading text-coffee font-bold"
            onClick={closeMenu}
          >
            Jinmata Cafe
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6 font-body">
            <li>
              <NavLink
                to="/"
                end
                className="text-charcoal hover:text-berry transition-colors duration-300"
              >
                Home
              </NavLink>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center text-charcoal hover:text-berry focus:outline-none">
                Menu <IoIosArrowDown className="ml-1" />
              </button>
              {dropdownOpen && (
                <ul className="absolute w-44 bg-white border rounded-md mt-0 p-2 space-y-1 shadow-lg z-50">
                  <li>
                    <NavLink
                      to="/menu/juices"
                      className="block px-4 py-1 text-charcoal hover:text-berry"
                    >
                      Juices
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/menu/fast-food"
                      className="block px-4 py-1 text-charcoal hover:text-berry"
                    >
                      Fast Food
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/menu/drinks-coffee"
                      className="block px-4 py-1 text-charcoal hover:text-berry"
                    >
                      Drinks & Coffee
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/menu/snacks"
                      className="block px-4 py-1 text-charcoal hover:text-berry"
                    >
                      Snacks
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink to="/gallery" className="text-charcoal hover:text-berry">
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="text-charcoal hover:text-berry">
                Contact
              </NavLink>
            </li>
            <li className="relative pl-24">
              <NavLink to="/cart" className="text-charcoal hover:text-berry">
                <FiShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-berry text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                    {cartCount}
                  </span>
                )}
              </NavLink>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <NavLink
              to="/cart"
              className="relative text-charcoal hover:text-berry"
            >
              <FiShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-berry text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </NavLink>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-charcoal hover:text-berry focus:outline-none"
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

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-14 py-8 space-y-6 absolute w-full bg-cream border-t font-body animate-slide-down">
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className="block text-charcoal hover:text-berry"
          >
            Home
          </NavLink>
          <NavLink
            to="/features"
            onClick={closeMenu}
            className="block text-charcoal hover:text-berry"
          >
            Features
          </NavLink>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center w-full text-charcoal hover:text-berry"
          >
            Menu <IoIosArrowDown className="ml-1" />
          </button>
          {dropdownOpen && (
            <div className="pl-6 mt-1 space-y-2 animate-slide-down">
              <NavLink
                to="/menu/juices"
                onClick={closeMenu}
                className="block text-charcoal hover:text-berry"
              >
                Juices
              </NavLink>
              <NavLink
                to="/menu/fast-food"
                onClick={closeMenu}
                className="block text-charcoal hover:text-berry"
              >
                Fast Food
              </NavLink>
              <NavLink
                to="/menu/drinks-coffee"
                onClick={closeMenu}
                className="block text-charcoal hover:text-berry"
              >
                Drinks & Coffee
              </NavLink>
              <NavLink
                to="/menu/snacks"
                onClick={closeMenu}
                className="block text-charcoal hover:text-berry"
              >
                Snacks
              </NavLink>
            </div>
          )}
          <NavLink
            to="/gallery"
            onClick={closeMenu}
            className="block text-charcoal hover:text-berry"
          >
            Gallery
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="block text-charcoal hover:text-berry"
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Header;
