import React from "react";
import BrandLogo from "../../assets/BrandName.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-purple-100 to-indigo-100 ">
      <div className="mx-[5%]">
        <div className="grid sm:grid-cols-1 md:grid-cols-5 pt-8 justify-items-center">
          <div className="md:space-y-5 col-span-2 md:text-left">
            <img
              src={BrandLogo}
              className="w-[150px] sm:w-[200px] md:mx-0 ms-4"
              alt="Logo"
            />
            <div className="w-[90%] sm:w-[80%] md:w-[90%] mx-auto md:mx-0">
              <p className="text-pretty lg:text-base md:text-sm py-4">
                ResuMate is a platform that helps you create a professional
                resume. We assure our brand can increase your chances of getting
                your dream job by 50%.
              </p>
            </div>

            <div className="flex justify-start md:text-4xl text-3xl md:mx-0 ms-4 md:mb-0 mb-10 col-span-3 gap-4">
              <a href="#">
                <i className="fa-brands fa-facebook bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent hover:scale-125 transition-transform duration-300"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-square-instagram bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent hover:scale-125 transition-transform duration-300"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-square-x-twitter bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent hover:scale-125 transition-transform duration-300"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-tiktok bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent hover:scale-125 transition-transform duration-300"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-youtube bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent hover:scale-125 transition-transform duration-300"></i>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="text-left">
            <h1 className="font-bold lg:text-xl md:text-base md:pb-4 pb-3">About Us</h1>
            <ul className="space-y-2 lg:text-xl md:text-sm text-xs">
              <li>
                <a href="#" className="hover:text-blue-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Terms of Services
                </a>
              </li>
            </ul>
          </div>

          <div className="text-left">
            <h1 className="font-bold lg:text-xl md:text-base md:pb-4 pb-3">Templates</h1>
            <ul className="space-y-2 lg:text-lg md:text-sm text-xs">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Front-end Dev
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Back-end Dev
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Full-Stack Dev
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Software Engineer
                </a>
              </li>
            </ul>
          </div>

          <div className="text-left md:mt-0 mt-6 md:ms-0 ms-4">
            <h1 className="font-bold lg:text-xl md:text-lg md:pb-4 pb-3">Build Resumes</h1>
            <ul className="space-y-2 lg:text-lg md:text-sm text-xs">
              <li>
                <a href="#" className="hover:text-blue-600">
                  AI Resume Builder
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Resume Examples
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Cover Letter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Cover Letters
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot-copy py-4 flex justify-center items-center mt-8 border-t-2 border-indigo-400 ">
          <p className="text-center text-sm md:text-lg font-bold">
            &copy;
            <span className="mx-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              2025
            </span>
            . All rights reserved by ResuMate
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
