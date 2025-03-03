import React, { useState, useEffect, useRef } from "react";
import main_carousel1 from "../../assets/main_carousel1.jpg";
import main_carousel2 from "../../assets/main_carousel2.jpg";
import main_carousel3 from "../../assets/main_carousel3.png";
import main_carousel4 from "../../assets/main_carousel4.png";
import main_carousel5 from "../../assets/main_carousel5.jpeg";
import main_carousel6 from "../../assets/main_carousel6.jpeg";
import main_carousel7 from "../../assets/main_carousel7.jpeg";
import main_carousel9 from "../../assets/main_carousel9.webp";

const carouselImages = [
  main_carousel1,
  main_carousel2,
  main_carousel3,
  main_carousel4,
  main_carousel5,
  main_carousel6,
  main_carousel7,
  main_carousel9,
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const [visibleImages, setVisibleImages] = useState(1);
  const carouselRef = useRef(null);
  const autoSlideInterval = useRef(null);

  useEffect(() => {
    const updateVisibleImages = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.offsetWidth;
        const imageWidth = 250; // Approximate width of each image
        setVisibleImages(Math.floor(containerWidth / imageWidth));
      }
    };

    updateVisibleImages();
    window.addEventListener("resize", updateVisibleImages);
    return () => window.removeEventListener("resize", updateVisibleImages);
  }, []);

  useEffect(() => {
    autoSlideInterval.current = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(autoSlideInterval.current);
  }, []);

  const next = () => {
    setSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prev = () => {
    setSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-100 relative overflow-hidden w-full flex flex-col items-center h-screen">
      <h1 className="text-5xl font-bold text-center p-3 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
        How it works
      </h1>

      <div
        className="w-full flex justify-center overflow-hidden pb-8 "
        ref={carouselRef}
      >
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${slide * (100 / visibleImages)}%)`,
          }}
        >
          {carouselImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`carousel-${index}`}
              className="h-[500px] w-auto object-contain rounded-xl shadow-xl p-8 transition-transform duration-300 hover:scale-125"
            />
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-5 top-1/2 transform -translate-y-20 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200"
      >
        <span className="material-symbols-outlined text-2xl">chevron_left</span>
      </button>

      <button
        onClick={next}
        className="absolute right-5 top-1/2 transform -translate-y-20 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200"
      >
        <span className="material-symbols-outlined text-2xl">
          chevron_right
        </span>
      </button>

      <div className="flex gap-2 mt-5">
        <div className="flex justify-center items-center">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setSlide(index)}
              className={`w-4 h-4 rounded-full mx-1 bg-blue-400 hover:bg-blue-400 ${
                slide === index ? "p-3 bg-blue-700" : "bg-opacity-50"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
