import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen text-white font-body">
      {/* Hero Section with background */}
      <div
        className="text-center py-32 px-6 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7)), url("/images/3.jpg")`,
        }}
      >
        <div className="mb-4 inline-block px-4 py-1 rounded-full border border-peach text-sm">
          ☕ Freshly Brewed Everyday
        </div>
        <h1 className="text-4xl md:text-6xl font-heading leading-tight mb-4 text-peach">
          Welcome to Jinmata Cafe
        </h1>
        <p className="text-lg text-white max-w-2xl mx-auto">
          A cozy spot to enjoy hand-crafted coffee, refreshing juices, and
          delicious fast food in a relaxing atmosphere.
        </p>
        <div className="mt-6 space-x-4">
          <button className="bg-peach hover:bg-white hover:text-black px-6 py-3 rounded-full text-black font-semibold transition duration-300">
            View Menu
          </button>
          <button className="border border-peach px-6 py-3 rounded-full text-peach hover:bg-peach hover:text-black transition duration-300">
            Order Now
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-stone my-12 mx-6 md:mx-16" />

      {/* Features Section */}
      <div className="py-16 px-6 bg-[#141414] grid md:grid-cols-3 gap-12 text-center">
        <div>
          <h3 className="text-xl font-semibold text-peach mb-2">
            Specialty Coffee
          </h3>
          <p className="text-gray-400 text-sm">
            Enjoy rich espresso, creamy lattes, and bold brews made from
            premium beans.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-peach mb-2">
            Fresh Juices
          </h3>
          <p className="text-gray-400 text-sm">
            Hydrate with our variety of freshly pressed fruit & vegetable juices.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-peach mb-2">
            Fast Food Delights
          </h3>
          <p className="text-gray-400 text-sm">
            From crispy fries to burgers and sandwiches — satisfy every craving.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-peach mb-2">
            Healthy Options
          </h3>
          <p className="text-gray-400 text-sm">
            Smoothie bowls, salads, and snacks made with wellness in mind.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-peach mb-2">
            Baked Goodies
          </h3>
          <p className="text-gray-400 text-sm">
            Treat yourself to cookies, croissants, muffins, and more — fresh every day.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-peach mb-2">
            Great Vibes
          </h3>
          <p className="text-gray-400 text-sm">
            A perfect space to relax, work, or chill with friends over a cup.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
