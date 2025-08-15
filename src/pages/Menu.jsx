// MenuPage.jsx
import React, { lazy, Suspense, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FeaturedSlider from "../components/FeaturedSlider";
import data from "../data/data.json"

const Juices = lazy(() => import("./menu/Juices"));
const FastFood = lazy(() => import("./menu/FastFood"));
const DrinksCoffee = lazy(() => import("./menu/DrinksCoffee"));
const Snacks = lazy(() => import("./menu/Snacks"));
const featuredItems = data.filter((item) => item.category === "special");

const Menu = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const categories = [
    { key: "juices", label: "Juices" },
    { key: "fast-food", label: "Fast Food" },
    { key: "drinks-coffee", label: "Drinks & Coffee" },
    { key: "snacks", label: "Snacks" },
  ];

  useEffect(() => {
    if (!category) navigate("/menu/juices"); // fallback
  }, [category, navigate]);

  const renderCategory = () => {
    switch (category) {
      case "juices":
        return <Juices />;
      case "fast-food":
        return <FastFood />;
      case "drinks-coffee":
        return <DrinksCoffee />;
      case "snacks":
        return <Snacks />;
      default:
        return <p className="text-center">Category Not Found</p>;
    }
  };

  return (
    <div className="px-4 py-8">
      <h2 className="text-3xl font-heading text-center mb-6">Menu</h2>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => navigate(`/menu/${cat.key}`)}
            className={`px-4 py-2 rounded-full border ${
              category === cat.key
                ? "bg-berry text-white border-berry"
                : "text-berry border-berry hover:bg-berry hover:text-white"
            } transition`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <Suspense
        fallback={<div className="text-center text-peach">Loading...</div>}
      >
        {renderCategory()}
      </Suspense>

      <FeaturedSlider items={featuredItems} />
    </div>
  );
};

export default Menu;
