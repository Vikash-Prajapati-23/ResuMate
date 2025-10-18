import React from "react";
import { useSelector } from "react-redux";

function SkillsPreview() {
  const resumeInfo = useSelector((state) => state.resumeInfo.value);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 mt-3 mb-6">
        {resumeInfo.skills?.map((skill, index) => (
          <div key={index} className="flex justify-between items-center h-2">
            <h2 className="text-xs font-bold">{skill?.name}</h2>
            <div className="h-2 bg-slate-400 w-[120px]">
              <div
                className="h-2"
                style={{
                  backgroundColor:
                    resumeInfo.personalInfo?.theme_color || "#1e40af",
                  width: `${(Number(skill?.rating) || 0) * 20}%`, // Convert to number and handle edge cases.
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <h2
        className="font-bold text-xl my-3 mb-1"
        style={{ color: resumeInfo.personalInfo?.theme_color || "#1e40af" }}
      >
        Experience
      </h2>

      <hr
        style={{ color: resumeInfo.personalInfo?.theme_color || "#1e40af" }}
        className="border-[1.5px]"
      />
    </>
  );
}

export default SkillsPreview;
