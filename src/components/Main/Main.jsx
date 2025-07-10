import React, {useRef} from "react";
import Carousel from "../Carousel/Carousel";
import main_bg_img from "../../assets/main-bg_img.jpg";
import "./Main.css";
import { useSelector } from "react-redux";
import MidSection from "../MidSection/MidSection";

const Main = () => {
  const theme = useSelector((state) => state.theme.value);

//  ${!theme ? "bg-[#fce7f3]" : "bg-[#2e1a24] text-white"}

  return (
    <div className={``}>
      <div
        className={`relative `}
      >

        <img className="main_bg" src={main_bg_img} alt="" />

        <div className="main-content">
          <div className="flex flex-col items-start main_1 ">
            <h1 className="font-bold main_1-head">
              Welcome to Resume Builder
            </h1>
            <p className="w-90 font-bold mt-4 ">
              Craft a professional, job-winning resume in minutes! Our
              AI-powered resume builder tailors content, optimizes layouts, and
              helps you stand out from the crowd. No more guesswork—just a
              sleek, ATS-friendly resume that gets results. ✨ Start creating
              your perfect resume today!
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 hover:scale-125 ease-in-out duration-300 text-white font-bold py-2 px-4 rounded mt-4">
              Get Started
            </button>
          </div>
          
          <div className="main_2 lg:block md:block hidden">
            {/* <img
              src={BrandLogo}
              style={{
                height: "120px",
                filter: theme ? "invert(1)" : "invert(0)", // Invert colors in dark mode
                transition: "filter 0.3s ease-in-out",
              }}
              alt="Logo"
            /> */}
          </div>
        </div>
      </div>

      <MidSection />

      <Carousel />

    </div>
  );
};

export default Main;
