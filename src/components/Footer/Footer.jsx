import React from "react";
import BrandLogo from "../../assets/BrandName.png";

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-100">
      <div className="foot-section grid sm:grid-cols-1 md:grid-cols-4 gap-8 px-10 md:px-20 justify-items-center">
        <div className="foot-content1 space-y-5 text-center md:text-left">
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
              <img
                width="40"
                src="https://img.icons8.com/carbon-copy/100/instagram-new--v2.png"
                alt="instagram"
              />
            </a>
            <a href="#">
              <img
                width="40"
                src="https://img.icons8.com/carbon-copy/100/facebook-new.png"
                alt="facebook"
              />
            </a>
            <a href="#">
              <img
                width="40"
                src="https://img.icons8.com/carbon-copy/100/twitter.png"
                alt="twitter"
              />
            </a>
            <a href="#">
              <img
                width="40"
                src="https://img.icons8.com/carbon-copy/100/tiktok.png"
                alt="tiktok"
              />
            </a>
            <a href="#">
              <img
                width="40"
                src="https://img.icons8.com/carbon-copy/100/youtube.png"
                alt="youtube"
              />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="foot-content2 text-center md:text-left">
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

        <div className="foot-content3 text-center md:text-left">
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

        <div className="foot-content4 text-center md:text-left">
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

      <div className="foot-copy py-4 bg-red-200 flex justify-center items-center mt-8">
        <p className="text-center text-sm md:text-lg font-bold">
          © 2025. All rights reserved by ResuMate
        </p>
      </div>
    </footer>
  );
};

export default Footer;
