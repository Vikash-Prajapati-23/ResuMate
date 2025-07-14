import React, { useRef } from "react";
import { useSelector } from "react-redux";
import main_img_1 from "../../assets/main_carousel1.jpg";
import main_img_2 from "../../assets/main_carousel5.jpeg";
import main_img_3 from "../../assets/main_carousel9.webp";
import "./Main.css";
import Carousel from "../Carousel/Carousel";
import MidSection from "../MidSection/MidSection";
import { Link } from "react-router-dom";

const Main = () => {
  const theme = useSelector((state) => state.theme.value);

  //  ${!theme ? "bg-[#fce7f3]" : "bg-[#2e1a24] text-white"}

  return (
    <div className={``}>
      <div className={` `}>
        {/* <img className="main_bg" src={main_bg_img} alt="" /> */}

        <div className="main-content h-screen md:translate-y-[-5%] translate-y-[-5%]  bg-gradient-to-b from-white to-blue-50">
          <div className="flex flex-col items-start main_1 ">
            <span className="font-bold lg:text-6xl md:text-4xl main-head bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Welcome to Resume Builder
            </span>
            <p className="font-bold mt-4 lg:text-xl md:text-sm text-xs text-justify ">
              Craft a professional, job-winning resume in minutes! Our
              AI-powered resume builder tailors content, optimizes layouts, and
              helps you stand out from the crowd. Start creating your perfect
              resume today!
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 md:hover:scale-125 ease-in-out duration-300 text-white md:text-base text-xs font-bold py-2 px-4 rounded mt-4">
              <Link to="/Dashboard">Get Started</Link>
            </button>
          </div>

          <div className="main_2 relative md:flex ">
            <img className="main-imgs" src={main_img_3} alt="" />
            <img
              className="main-imgs middle shadow-2xl "
              src={main_img_1}
              alt=""
            />
            <img className="main-imgs" src={main_img_2} alt="" />
          </div>
        </div>
      </div>

      <MidSection />

      <Carousel />
    </div>
  );
};

export default Main;
