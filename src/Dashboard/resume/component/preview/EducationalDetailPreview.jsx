import React from "react";

function EducationalDetailPreview({ resumeInfo }) {
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

      {resumeInfo?.education.map((edu, index) => (
        <div className="my-2 flex justify-between m-2" key={index}>
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
