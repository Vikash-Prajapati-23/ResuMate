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
    </section>
  );
};

export default MidSection;
