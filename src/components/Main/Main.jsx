import React, {useRef} from "react";
import Carousel from "../Carousel/Carousel";
import BrandLogo from "../../assets/BrandName.png";
import main2_1 from "../../assets/main2_1.png";
import main2_2 from "../../assets/main2_2.png";
import main2_3 from "../../assets/main2_3.png";
import main_bg6 from "../../assets/main_bg6.jpg";
import main_bg2 from "../../assets/main_bg2.AVIF";
import "./Main.css";
import { useSelector } from "react-redux";

const Main = () => {
  const theme = useSelector((state) => state.theme.value);

  // const btnRef = useRef(0)

  // function changeColor () {
  //   btnRef.current.style.backgroundColor = "red"
  // }  // This was just for learning purposes

  return (
    <>
      <div
        style={
          theme
            ? {
                backgroundImage: `url(${main_bg6})`,
                backgroundSize: "contain",
                color: "white",
              }
            : { backgroundColor: "#fce7f3" }
        }
        className={`h-[93vh] pink-100`}
      >
        <div className="flex justify-evenly items-center translate-y-[45%]">
          <div className="flex flex-col items-start w-1/2">
            <h1 className="text-8xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
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
          <div className="main-content">
            <img
              src={BrandLogo}
              style={{
                height: "120px",
                filter: theme ? "invert(1)" : "invert(0)", // Invert colors in dark mode
                transition: "filter 0.3s ease-in-out",
              }}
              alt="Logo"
            />
          </div>
        </div>
      </div>

      {/* // This was just for learning purposes */}
      {/* <div className="h-96 grid items-center font-extrabold " >
        <button ref={btnRef} className="p-2 m-auto rounded-md" > Click Me </button>
        <button onClick={changeColor} className="bg-zinc-700 text-white p-2 m-auto rounded-md" > Click Me </button>
      </div> */}

      <div
        style={
          theme
            ? {
                backgroundImage: `url(${main_bg2})`,
                backgroundSize: "contain",
              }
            : { backgroundColor: "" }
        }
        className={`${
          theme ? "text-white" : "bg-gradient-to-b from-pink-100 to-blue-100"
        } 'flex justify-evenly items-center'`}
      >
        <div className="">
          <h1 className="text-5xl font-bold py-8 text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            How it works
          </h1>
          <div className="flex justify-evenly mt-8 pb-20">
            <div className="flex flex-col items-center w-1/4">
              <img
                className=""
                src={main2_1}
                style={{ height: "150px" }}
                alt="Logo"
              />
              <h1 className="text-2xl font-bold mt-4">Step 1</h1>
              <p className="text-center mt-2">
                Choose from our pre-built templates and enter your information.
              </p>
            </div>
            <div className="flex flex-col items-center w-1/4">
              <img
                className="rounded shadow-lg"
                src={main2_2}
                style={{ height: "150px" }}
                alt="Logo"
              />
              <h1 className="text-2xl font-bold mt-4">Step 2</h1>
              <p className="text-center mt-2">
                Customize your resume template and download your resume.
              </p>
            </div>
            <div className="flex flex-col items-center w-1/4">
              <img
                className=""
                src={main2_3}
                style={{ height: "150px" }}
                alt="Logo"
              />
              <h1 className="text-2xl font-bold mt-4">Step 3</h1>
              <p className="text-center mt-2">
                Apply to your dream job with your resume and get hired!
              </p>
            </div>
          </div>
        </div>
      </div>

      <Carousel />

    </>
  );
};

export default Main;
