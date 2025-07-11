import React from "react";
import "./MidSection.css";
import main2_1 from "../../assets/main2_1.png";
import main2_2 from "../../assets/main2_2.png";
import main2_3 from "../../assets/main2_3.png";

const MidSection = () => {
  return (
    <section>
      <div className={`flex justify-evenly items-center`}>
        <div className="">
          <h1 className="md:text-5xl text-4xl font-bold md:py-10 pt-10 pb-6 text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            How it works
          </h1>
          <div className="flex justify-evenly md:mt-8 pb-20">
            <div className="flex flex-col items-center w-1/4">
              <img
                className="midsection-imgs"
                src={main2_1}
                alt="Logo"
              />
              <h1 className="md:text-2xl text-xl font-bold mt-4">Step 1</h1>
              <p className="text-center mt-2 md:text-base text-xs">
                Choose from our pre-built templates and enter your information.
              </p>
            </div>
            <div className="flex flex-col items-center w-1/4">
              <img
                className=" midsection-imgs"
                src={main2_2}
                alt="Logo"
              />
              <h1 className="md:text-2xl text-xl font-bold mt-4">Step 2</h1>
              <p className="text-center mt-2 md:text-base text-xs">
                Customize your resume template and download your resume.
              </p>
            </div>
            <div className="flex flex-col items-center w-1/4">
              <img
                className="midsection-imgs"
                src={main2_3}
                alt="Logo"
              />
              <h1 className="md:text-2xl text-xl font-bold mt-4">Step 3</h1>
              <p className="text-center mt-2 md:text-base text-xs">
                Apply to your dream job with your resume and get hired!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidSection;
