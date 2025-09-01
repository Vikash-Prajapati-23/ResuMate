import React from "react";
import { useSelector } from "react-redux";

function EducationalDetailPreview() {
  const resumeInfo = useSelector((state) => state.resumeInfo.value);

  return (
    <div className="">
      <h2
        style={{ color: "blue" }}
        className="text-center mt-6 text-xl font-bold mb-1"
      >
        Educational Qualification
      </h2>

      <hr
        style={{ borderColor: "blue" }}
        className="border-[1.5px] mb-1 "
      />

      {resumeInfo?.education.map((edu, index) => (
        <div className="my-2 flex justify-between" key={index}>
          <div>
            <h2 className="font-bold text-normal">{edu.institution}</h2>
            <p className="text-xs">{edu.degree}</p>
          </div>
          <div>
            <p className="text-xs">{edu.location}</p>
            <p className="text-xs">
              {edu.start_year} - {edu.end_year}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EducationalDetailPreview;
