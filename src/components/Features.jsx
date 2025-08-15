import React from "react";
import {
  FaCoffee,
  FaAppleAlt,
  FaHamburger,
  FaHeart,
  FaCookieBite,
  FaSmile,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCoffee className="text-3xl text-peach" />,
    title: "Specialty Coffee",
    description: "Rich espresso, creamy lattes, and bold brews made from premium beans.",
  },
  {
    icon: <FaAppleAlt className="text-3xl text-peach" />,
    title: "Fresh Juices",
    description: "Hydrate with a variety of freshly pressed fruit & vegetable juices.",
  },
  {
    icon: <FaHamburger className="text-3xl text-peach" />,
    title: "Fast Food Delights",
    description: "From crispy fries to burgers and sandwiches — satisfy every craving.",
  },
  {
    icon: <FaHeart className="text-3xl text-peach" />,
    title: "Healthy Options",
    description: "Smoothie bowls, salads, and snacks made with wellness in mind.",
  },
  {
    icon: <FaCookieBite className="text-3xl text-peach" />,
    title: "Baked Goodies",
    description: "Cookies, croissants, muffins, and more — fresh every day.",
  },
  {
    icon: <FaSmile className="text-3xl text-peach" />,
    title: "Great Vibes",
    description: "Relax, work, or chill with friends over a comforting cup.",
  },
];

const Features = () => {
  return (
    <div className="py-16 px-6 bg-[#141414] text-white">
      <h2 className="text-3xl font-heading mb-10 text-peach text-center">
        Why Choose Shayam Cafe?
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="text-center border border-peach rounded-lg p-6 hover:shadow-lg hover:scale-[1.03] transition-all"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-peach mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
