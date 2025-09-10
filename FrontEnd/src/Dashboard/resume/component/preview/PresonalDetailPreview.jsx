import React from "react";
import { Github, Mail, MapPinHouse, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { useSelector } from "react-redux";

const PresonalDetailPreview = () => {
  const resumeInfo = useSelector((state) => state.resumeInfo.value);

  return (
    <div>
      <div className="flex justify-center gap-2">
        <p
          style={{ color: "blue" }}
          className="text-center font-semibold text-lg md:text-xl lg:text-2xl"
        >
          {resumeInfo.personalInfo?.first_name}
        </p>
        <p
          style={{ color: "blue" }}
          className="text-center font-semibold text-lg sm:text-xl md:text-xl lg:text-2xl"
        >
          {resumeInfo.personalInfo?.last_name}
        </p>
      </div>

      <div className="flex justify-between sm:text-sm md:text-base">
        <div className="space-y-1 my-2 lg:w-full md:text-xs text-[8px] max-w-[100px]">
          <p className="text-start flex gap-2 ">
            <MapPinHouse className="w-3 h-3" />
            {resumeInfo.personalInfo?.address}
          </p>
          <p className="text-start flex gap-2 ">
            <Phone className="md: w-3 h-3" /> {resumeInfo.personalInfo?.phone}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center space-y-1 lg:w-full max-w-[150px]">
          <p className="text-start flex justify-center items-center gap-2 md:text-[10px] text-[9px]">
            <Mail className="w-3 h-3" /> {resumeInfo.personalInfo?.email}
          </p>
          <p className="text-start flex gap-2 md:text-[10px] text-[9px] ">
            <FaLinkedin
              size={20}
              className="text-blue-600 sm:w-4 sm:h-4 md:w-5 md:h-5"
            />

            {resumeInfo.personalInfo?.linkedin}
          </p>
        </div>
      </div>

      <h2
        className="text-center font-semibold text-sm md:text-xl lg:text-xl mb-1"
        style={{ color: "blue" }}
      >
        Summary
      </h2>

      <hr style={{ borderColor: "blue" }} className="border-[1.5px] mb-1 " />

      <p className="text-justify text-xs sm:text-sm md:text-base">
        {resumeInfo.personalInfo?.summary}
      </p>

      <h2
        style={{ color: "blue" }}
        className="mt-4 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1"
      >
        Skills
      </h2>

      <hr style={{ borderColor: "blue" }} className="border-[1.5px] mb-1 " />
    </div>
  );
};

export default PresonalDetailPreview;
