import React, { useContext } from "react";
import ResumeInfoContext from "../../../../context/ResumeInfoContext";
import { Github, Mail, MapPinHouse, Phone } from "lucide-react";

const PresonalDetailPreview = () => {
  const { resumeInfo } = useContext(ResumeInfoContext);

  return (
    <div>
      <div className="flex justify-center gap-2">
        <p
          style={{ color: resumeInfo?.personal_info.theme_color }}
          className="text-center font-bold text-2xl"
        >
          {resumeInfo?.personal_info.first_name}
        </p>
        <p
          style={{ color: resumeInfo?.personal_info.theme_color }}
          className="text-center font-bold text-2xl"
        >
          {resumeInfo?.personal_info.last_name}
        </p>
      </div>

      <div className="flex justify-between text-xs m-2">
        <div className="space-y-1 my-2">
          <p className="text-start flex gap-2">
            <MapPinHouse className="w-4 h-4" /> {resumeInfo?.personal_info.address}
          </p>
          <p className="text-start flex gap-2">
            <Phone  size={16} /> {resumeInfo?.personal_info.phone}
          </p>
          {/* <p className="text-start flex">
            <MapPinHouse className="" /> {resumeInfo?.personal_info.linkedin}
          </p> */}
        </div>

        <div className="space-y-1 ">
          <p className="text-start flex gap-2">
            <Mail className="w-4 h-4" /> {resumeInfo?.personal_info.email}
          </p>
          <p className="text-start flex gap-2">
            <Github className="w-4 h-4" /> {resumeInfo?.personal_info.portfolio}
          </p>
          {/* <p className="text-start flex">
            <MapPinHouse className="" /> {resumeInfo?.personal_info.github}
          </p> */}
        </div>
      </div>

      <h2
        className="text-center font-bold text-l mb-1"
        style={{ color: resumeInfo?.personal_info.theme_color }}
      >
        Summary
      </h2>

      <hr
        style={{ borderColor: resumeInfo?.personal_info.theme_color }}
        className="border-[1.5px] mb-1 "
      />

      <p className="text-justify text-xs m-2">{resumeInfo?.summary}</p>

      
      <h2
        style={{ color: resumeInfo?.personal_info.theme_color }}
        className=" mt-4 text-xl font-bold mb-1 m-2"
      >
        Skills
      </h2>

      <hr
        style={{ borderColor: resumeInfo?.personal_info.theme_color }}
        className="border-[1.5px] mb-1 "
      />
    </div>
  );
};

export default PresonalDetailPreview;
