import React, { useContext } from "react";
import ResumeInfoContext from "../../../../context/ResumeInfoContext";

function EducationalDetailPreview() {
  const { resumeInfo } = useContext(ResumeInfoContext);

  return (
    <div className="">
      <h2
        style={{ color: resumeInfo?.personal_info.theme_color }}
        className="text-center mt-6 text-xl font-bold mb-1 m-2"
      >
        Educational Qualification
      </h2>

      <hr
        style={{ borderColor: resumeInfo?.personal_info.theme_color }}
        className="border-[1.5px] mb-1 "
      />

      <div className="my-2 flex justify-between m-2">
        <div>
          <h2 className="font-bold text-normal">
            {resumeInfo?.education.institution}
          </h2>
          <p className="text-xs" > {resumeInfo?.education.degree} </p>
        </div>
        <div>
          <p className="text-xs" > {resumeInfo?.education.location} </p>
          <p className="text-xs" >
            {resumeInfo?.education.start_year} -
            {resumeInfo?.education.end_year}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EducationalDetailPreview;
