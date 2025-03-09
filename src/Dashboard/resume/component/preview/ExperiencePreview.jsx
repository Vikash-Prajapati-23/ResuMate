import React from "react";

function ExperiencePreview({resumeInfo}) {

  return (
    <div className="m-2">
      {resumeInfo?.experience.map((experience, index) => (
        <div key={index}>
          <div className="flex justify-between my-1">
            <div>
              <p className="font-bold"> {experience?.job_title} </p>
              <p className="">
                {experience?.company}, {experience?.location}
              </p>
            </div>
            <div>
              <span className="flex mt-5 text-xs">
                {experience?.start_date} - {experience?.end_date}
              </span>
            </div>
          </div>
          <p className="mb-6 mt-3 text-xs"> {experience?.responsibilities} </p>
        </div>
      ))}
    </div>
  );
}

export default ExperiencePreview;
