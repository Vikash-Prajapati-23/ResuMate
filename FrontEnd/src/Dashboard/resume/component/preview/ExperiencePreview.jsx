import React from "react";
import { useSelector } from "react-redux";

function ExperiencePreview() {
  const resumeInfo = useSelector((state) => state.resumeInfo.value);

  return (
    <div className="">
      {resumeInfo.experience?.map((experience, index) => (
        <div key={index}>
          <div className="flex justify-between my-1">
            <div>
              <p className="font-bold text-sm"> {experience?.job_title} </p>
              <p className="font-semibold text-xs">
                {experience?.company} { experience?. company && experience?.location && ','} {experience?.location}
              </p>
            </div>
            <div>
              <span className="flex mt-5 text-xs">
                {experience?.start_date} { experience?.start_date && experience?.end_date && "-" } {experience?.end_date}
              </span>
            </div>
          </div>
          {/* <p className="mb-6 mt-3 text-xs"> {experience?.responsibilities} </p> */}
          <div className=" text-xs" dangerouslySetInnerHTML={{__html:experience?.responsibilities}} />
        </div>
      ))}
    </div>
  );
}

export default ExperiencePreview;
