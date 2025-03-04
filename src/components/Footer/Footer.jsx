import React from "react";
import BrandLogo from "../../assets/BrandName.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-purple-100 to-indigo-100 ">
      <div className="mx-[5%]">
        <div className="foot-section grid sm:grid-cols-1 md:grid-cols-4 pt-8 justify-items-center">
          <div className="foot-content1 space-y-5 text-center md:text-left sm:text-left">
            <img
              src={BrandLogo}
              className="w-[150px] sm:w-[200px] mx-auto md:mx-0"
              alt="Logo"
            />
            <div className="w-[90%] sm:w-[80%] md:w-[70%] mx-auto md:mx-0">
              <p className="text-pretty py-4">
                ResuMate is a platform that helps you create a professional
                resume. We assure our brand can increase your chances of getting
                your dream job by 50%.
              </p>
            </div>

            <div className="flex justify-center md:justify-start gap-4">
              <a href="#">
                <i className="fa-brands fa-facebook text-4xl bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent hover:scale-125 transition-transform duration-300"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-square-instagram text-4xl bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent hover:scale-125 transition-transform duration-300"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-square-x-twitter text-4xl bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent hover:scale-125 transition-transform duration-300"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-tiktok text-4xl bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent hover:scale-125 transition-transform duration-300"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-youtube text-4xl bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent hover:scale-125 transition-transform duration-300"></i>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="foot-content2 text-center md:text-left sm:text-left">
            <h1 className="font-bold text-xl pb-4">About ResuMate</h1>
            <ul className="space-y-2">
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

          <div className="foot-content3 text-center md:text-left sm:text-left">
            <h1 className="font-bold text-xl pb-4">Resume Templates</h1>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Front End Developer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Back End Developer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Full Stack Developer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Software Engineer
                </a>
              </li>
            </ul>
          </div>

          <div className="foot-content4 text-center md:text-left sm:text-left">
            <h1 className="font-bold text-xl pb-4">Build your Resume</h1>
            <ul className="space-y-2">
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
                  Cover Letter Examples
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
