import React from "react";
import { Github, Mail, MapPinHouse, Phone } from "lucide-react";
import { useSelector } from "react-redux";

const PresonalDetailPreview = () => {
  const resumeInfo = useSelector((state) => state.resumeInfo.value);

  return (
    <div>
      <div className="flex justify-center gap-2">
        <p
          style={{ color: "blue" }}
          className="text-center font-bold text-2xl"
        >
          {/* {resumeInfo?.personal_info.first_name} */}
        </p>
        <p
          style={{ color: "blue" || "blue" }}
          className="text-center font-bold text-2xl"
        >
          {/* {resumeInfo?.personal_info.last_name} */}
        </p>
      </div>

      <div className="flex justify-between text-xs">
        <div className="space-y-1 my-2">
          <p className="text-start flex gap-2">
            {/* <MapPinHouse className="w-4 h-4" /> {resumeInfo?.personal_info.address} */}
          </p>
          <p className="text-start flex gap-2">
            {/* <Phone size={16} /> {resumeInfo?.personal_info.phone} */}
          </p>
        </div>

        <div className="space-y-1 ">
          <p className="text-start flex gap-2">
            {/* <Mail className="w-4 h-4" /> {resumeInfo?.personal_info.email} */}
          </p>
          {/* <p className="text-start flex gap-2">
            <Github className="w-4 h-4" /> {resumeInfo?.personal_info.github}
          </p> */}
          <p className="text-start flex gap-2">
            {/* <MapPinHouse size={16} className="" /> {resumeInfo?.personal_info.linkedin} */}
          </p>
          {/* <p className="text-start flex">
            <MapPinHouse size={16} className="" /> {resumeInfo?.personal_info.github}
          </p> */}
        </div>
      </div>

      <h2
        className="text-center font-bold text-l mb-1"
        style={{ color: "blue" }}
      >
        Summary
      </h2>

      <hr
        style={{ borderColor: "blue" }}
        className="border-[1.5px] mb-1 "
      />

      {/* <p className="text-justify text-xs">{resumeInfo?.summary}</p> */}

      
      <h2
        style={{ color: "blue" }}
        className=" mt-4 text-xl font-bold mb-1"
      >
        Skills
      </h2>

      <hr
        // style={{ borderColor: "blue" }}
        className="border-[1.5px] mb-1 "
      />
    </div>
  );
};

export default PresonalDetailPreview;
