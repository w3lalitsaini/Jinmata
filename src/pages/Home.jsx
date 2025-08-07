import React from "react";
import { useNavigate } from "react-router-dom";
import Specials from "../components/Specials";
import Features from "../components/Features";
import Button from "../components/Button";

const Home = () => {

    const navigate = useNavigate();

  return (
    <div>
      <div className="h-[65vh] text-white font-body">
        <div
          className="h-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-6 text-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7)), url("/images/cafe.jpg")`,
          }}
        >
          <div className="mb-4 inline-block px-4 py-1 rounded-full border border-peach text-sm">
            ☕ Freshly Brewed Everyday
          </div>
          <h1 className="text-4xl md:text-6xl font-heading leading-tight mb-4">
            Welcome to Jinmata Cafe
          </h1>
          <p className="text-lg text-peach max-w-2xl mx-auto">
            A cozy spot to enjoy hand-crafted coffee, refreshing juices, and
            delicious fast food in a relaxing atmosphere.
          </p>
          <div className="mt-6 space-x-4 flex flex-wrap justify-center">
            <Button
              onClick={() => navigate("/menu")}
              className="bg-berry border border-berry hover:text-berry hover:bg-transparent text-black font-semibold"
            >
              View Menu
            </Button>
            <Button
              onClick={() => navigate("/order")}
              className="border border-berry bg-transparent text-peach hover:bg-berry hover:text-black"
            >
              Order Now
            </Button>
          </div>
        </div>
      </div>

      <Specials />

      <Features />
    </div>
  );
};

export default Home;
