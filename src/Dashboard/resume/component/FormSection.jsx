import React, { useState, useContext } from "react";
import { LayoutGridIcon, MoveLeft, MoveRight } from "lucide-react";
import PersonalInfo from "./forms/PersonalInfo";
import SkillSet from "./forms/SkillSet";
import Experience from "./forms/Experience";
import Projects from "./forms/Projects";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";

function FormSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  // const [enableNext, setEnableNext] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [loading, setLoading] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // setEnableNext(true);
    }, 2000);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h2 className="flex gap-2 bg-purple-500 text-white cursor-pointer p-3 font-bold rounded-md w-[110px]">
          <LayoutGridIcon /> Theme
        </h2>

        <div className="flex gap-2">
          {activeIndex > 1 && ( //This is short-circuit evaluation using the && operator.
            <button
              className="bg-purple-500 flex gap-1 text-white p-3 font-bold rounded-md"
              onClick={() => setActiveIndex(activeIndex - 1)}
            >
              <MoveLeft />
              Back
            </button>
          )}
          <button
            className="bg-purple-500 flex gap-1 text-white p-3 font-bold rounded-md"
            // disabled={!enableNext}
            onClick={() => setActiveIndex(activeIndex + 1)}
          >
            Next
            <MoveRight />
          </button>
        </div>
      </div>

      {activeIndex === 1 && (
        <PersonalInfo
          setResumeInfo={setResumeInfo}
          handleSave={handleSave}
          loading={loading}
        />
      )}
      {activeIndex === 2 && (
        <SkillSet
          setResumeInfo={setResumeInfo}
          resumeInfo={resumeInfo}
          handleSave={handleSave}
          loading={loading}
        />
      )}
      {activeIndex === 3 && (
        <Experience
          resumeInfo={resumeInfo}
          setResumeInfo={setResumeInfo}
          handleSave={handleSave}
          loading={loading}
        />
      )}
      {activeIndex === 4 && (
        <Projects
          setResumeInfo={setResumeInfo}
          handleSave={handleSave}
          loading={loading}
        />
      )}
    </div>
  );
}

export default FormSection;
