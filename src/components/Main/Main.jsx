// import React from "react";
// import BrandLogo from "../../assets/BrandName.png";
// import "./Main.css";
// import matter from "../../../matter.js";

// const Main = () => {
//   return (
//     <>
//       <div className="absolute inset-0 hidden md:block" id="wrapper-canvas">
//       </div>
//       <div>
//         <div className="flex justify-evenly items-center h-screen">
//           <div className="flex flex-col items-start w-1/2">
//             <h1 className="text-8xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//               Welcome to Resume Builder
//             </h1>
//             <div className="">
//               <p className="w-90 mt-4">
//                 Craft a professional, job-winning resume in minutes! Our
//                 AI-powered resume builder tailors content, optimizes layouts,
//                 and helps you stand out from the crowd. No more guesswork—just a
//                 sleek, ATS-friendly resume that gets results. ✨ Start creating
//                 your perfect resume today!
//               </p>
//             </div>
//             <button className="bg-blue-500 hover:bg-blue-700 hover:scale-125 ease-in-out duration-300 text-white font-bold py-2 px-4 rounded mt-4">
//               Get Started
//             </button>
//           </div>
//           <div className="main-content">
//             <img src={BrandLogo} style={{ height: "120px" }} alt="Logo" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Main;

import React, { useEffect } from "react";
import BrandLogo from "../../assets/BrandName.png";
import "./Main.css";
import { runMatter } from "../../../matter.js"; // Import the function

const Main = () => {
  useEffect(() => {
    runMatter(); // Initialize Matter.js when component mounts
  }, []);

  return (
    <>
      <div
        className="absolute inset-0 hidden md:block"
        id="wrapper-canvas"
      ></div>
      <div>
        <div className="flex justify-evenly items-center h-screen">
          <div className="flex flex-col items-start w-1/2">
            <h1 className="text-8xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Welcome to Resume Builder
            </h1>
            <p className="w-90 mt-4">
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
            <img src={BrandLogo} style={{ height: "120px" }} alt="Logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
