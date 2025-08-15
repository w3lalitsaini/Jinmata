import React from "react";

const images = [
  "/gallery/img1.jpg",
  "/gallery/img2.jpg",
  "/gallery/img3.jpg",
  "/gallery/img4.jpg",
  "/gallery/img5.jpg",
  "/gallery/img6.jpg",
  "/gallery/img7.jpg",
  "/gallery/img8.jpg",
  "/gallery/img9.jpg",
  "/gallery/img10.jpg",
  "/gallery/img11.jpg",
  "/gallery/img12.jpg",
];

const Gallery = () => {
  return (
    <section className="py-16 px-4 bg-cream">
      <h2 className="text-3xl font-heading text-berry text-center mb-10">
        Our Cafe Moments
      </h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-xl group relative">
            <img
              src={src}
              alt={`Gallery ${idx + 1}`}
              loading="lazy"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
