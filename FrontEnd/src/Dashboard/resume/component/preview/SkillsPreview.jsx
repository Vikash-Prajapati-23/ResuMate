import React from "react";

function SkillsPreview({ resumeInfo }) {
  return (
    <>
      <div className="grid grid-cols-2 gap-3 mt-3 mb-6 m-2">
        {resumeInfo?.skills.map((skills, index) => (
          <div key={index} className="flex justify-between items-center h-2">
            <h2 className="text-xs font-bold">{skills.name}</h2>
            <div className="h-2 bg-slate-400 w-[120px]">
              <div
                className="h-2"
                style={{
                  backgroundColor: resumeInfo?.personal_info.theme_color,
                  width: skills?.rating*20+'%',
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <h2
        className="font-bold text-xl my-3 mb-1 m-2"
        style={{ color: resumeInfo?.personal_info.theme_color }}
      >
        Experience
      </h2>

      <hr
        style={{ borderColor: resumeInfo?.personal_info.theme_color }}
        className="border-[1.5px]"
      />
    </>
  );
}

export default SkillsPreview;
