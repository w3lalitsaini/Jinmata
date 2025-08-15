import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Riya Sharma",
    message:
      "Absolutely love this place! The coffee is divine and the ambience is perfect for reading or chatting with friends.",
    rating: 5,
  },
  {
    name: "Aman Verma",
    message:
      "Best cold brew in town. The food is always fresh and the staff is super friendly.",
    rating: 4,
  },
  {
    name: "Pooja Mehta",
    message:
      "Great vibes, tasty snacks, and peaceful music. A must-visit cafe!",
    rating: 5,
  },
  {
    name: "Karan Singh",
    message: "A hidden gem. Their hot chocolate and samosas are unbeatable!",
    rating: 4,
  },
  {
    name: "Sneha Joshi",
    message: "Such a calm environment. I always bring my laptop and work here.",
    rating: 5,
  },
  {
    name: "Raj Patel",
    message:
      "Top-notch service. The baristas know how to make you feel at home.",
    rating: 5,
  },
];

// Duplicate testimonials for smooth infinite loop
const fullList = [...testimonials, ...testimonials];

const Testimonials = () => {
  return (
    <section className="py-16 px-6 bg-cream text-black overflow-hidden">
      <h2 className="text-3xl font-heading mb-12 text-berry text-center">
        What Our Customers Say
      </h2>
      <div className="relative w-full px-10">
        <div className="flex gap-8 animate-slide whitespace-nowrap w-max">
          {fullList.map((t, idx) => (
            <div
              key={idx}
              className="w-[400px] text-wrap shrink-0 bg-orange-100 rounded-xl shadow-lg p-6 border border-peach hover:shadow-xl transition-all duration-300"
            >
              <p className="italic mb-4">“{t.message}”</p>
              <div className="flex items-center gap-2 mb-2">
                {[...Array(t.rating)].map((_, i) => (
                  <FaStar key={i} className="text-peach" />
                ))}
              </div>
              <p className="font-semibold text-peach">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
