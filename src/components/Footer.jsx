import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const CafeFooter = () => {
  return (
    <footer className="bg-orange-100 text-coffee py-12 px-6 border-t-2 border-peach">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand & Intro */}
        <div>
          <h2 className="text-coffee text-2xl font-bold tracking-wide">
            Jinmata <span className="text-peach">Cafe</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed max-w-xs text-coffee">
            A cozy place to enjoy freshly brewed coffee, homemade snacks, and
            peaceful ambiance.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-charcoal text-lg font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm text-charcoal">
            <li>
              <Link to="/" className="hover:text-coffee transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-coffee transition">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-coffee transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-coffee transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-charcoal text-lg font-semibold mb-3">Visit Us</h3>
          <ul className="space-y-2 text-sm text-charcoal">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> 123 Main Street, Jaipur, India
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +91 98765 43210
            </li>
            <li>
              Email:{" "}
              <a
                href="mailto:jinmatacafe@example.com"
                className="hover:underline text-coffee"
              >
                shayamcafe@example.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h3 className="text-charcoal text-lg font-semibold mb-3">
            Stay Connected
          </h3>
          <div className="flex space-x-4 text-xl text-charcoal mb-4">
            <a
              href="https://facebook.com/jinmatacafe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-coffee transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com/jinmatacafe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-coffee transition"
            >
              <FaInstagram />
            </a>
          </div>
          <form
            action="https://formspree.io/f/mnnzblkd"
            method="POST"
            className="flex flex-col gap-3"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="w-full px-4 py-2 bg-peach text-charcoal rounded-md placeholder:text-charcoal"
            />
            <button
              type="submit"
              className="bg-orange-300 text-green-950 font-semibold px-5 py-2 rounded-md hover:bg-chatext-charcoal transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-peach mt-10 pt-4 text-center text-sm text-coffee">
        © {new Date().getFullYear()} Jinmata Cafe — Crafted with ❤️ by Lalit
      </div>
    </footer>
  );
};

export default CafeFooter;
