import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "@/store/slices/theme/themeSlice";
import main_carousel1 from "../../assets/main_carousel1.jpg";
import main_carousel2 from "../../assets/main_carousel2.jpg";
import main_carousel3 from "../../assets/main_carousel3.png";
import main_carousel4 from "../../assets/main_carousel4.png";
import main_carousel5 from "../../assets/main_carousel5.jpeg";
import main_carousel6 from "../../assets/main_carousel6.jpeg";
import main_carousel9 from "../../assets/main_carousel9.webp";

const carouselImages = [
  main_carousel1,
  main_carousel2,
  main_carousel3,
  main_carousel4,
  main_carousel5,
  main_carousel6,
  main_carousel4,
  main_carousel9,
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const [visibleImages, setVisibleImages] = useState(1);
  const [IMAGE_WIDTH, setIMAGE_WIDTH] = useState(270);
  const carouselRef = useRef(null);
  const autoSlideInterval = useRef(null);
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const updateImageWidth = () => {
      const width = window.innerWidth;
      if (width > 1030) {
        setVisibleImages(4);
        setIMAGE_WIDTH(270);
      } else if (width > 800) {
        setVisibleImages(3);
        setIMAGE_WIDTH(300);
      } else if (width > 500) {
        setVisibleImages(2);
        setIMAGE_WIDTH(250);
      } else {
        setVisibleImages(1);
        setIMAGE_WIDTH(230);
      }
    };

    updateImageWidth();
    window.addEventListener("resize", updateImageWidth);
    return () => window.removeEventListener("resize", updateImageWidth);
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
    <div className={`${!theme ? "bg-[#fef2f8]" : "bg-[#2e1a24] text-white"} `}>
      <div className="relative overflow-hidden w-full flex flex-col items-center ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center p-6 sm:p-8 md:p-10 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
          Choose your Template
        </h1>

        <div
          className="w-full sm:w-[90%] md:w-[80%] flex justify-center overflow-hidden pb-8"
          ref={carouselRef}
        >
          <div
            className="flex gap-4 transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${slide * IMAGE_WIDTH}px)`,
              width: `${carouselImages.length * IMAGE_WIDTH}px`,
            }}
          >
            {carouselImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`carousel-${index}`}
                className="lg:h-[500px] h-[300px] md:h-[450px] object-contain rounded-xl shadow-xl p-4 sm:p-6 transition-transform duration-300 hover:scale-110 "
              />
            ))}
          </div>
        </div>

        {/* Left arrow - hidden on small screens */}
        <button
          onClick={prev}
          className="hidden sm:block absolute left-5 top-1/2 transform -translate-y-20 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200"
        >
          <span className="material-symbols-outlined text-2xl">
            chevron_left
          </span>
        </button>

        {/* Right arrow - hidden on small screens */}
        <button
          onClick={next}
          className="hidden sm:block absolute right-5 top-1/2 transform -translate-y-20 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200"
        >
          <span className="material-symbols-outlined text-2xl">
            chevron_right
          </span>
        </button>

        {/* Dots */}
        <div className="flex gap-2 mt-5 pb-10">
          <div className="flex justify-center items-center">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setSlide(index)}
                className={`md:w-3 w-2 md:h-3 h-2 border-2 border-blue-600 rounded-full mx-1 hover:bg-blue-400 ${
                  slide === index
                    ? "md:p-2 p-1 bg-blue-400 border-4 border-blue-600"
                    : "bg-opacity-50 bg-blue-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
