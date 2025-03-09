import React, { useContext, useState } from "react";
import { LayoutGridIcon, MoveLeft, MoveRight } from "lucide-react";
import PersonalInfo from "./forms/PersonalInfo";
import SkillSet from "./forms/SkillSet";
import Experience from "./forms/Experience";
import Projects from "./forms/Projects";

function FormSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(false);

  return (
    <div className=" p-4">
      <div className="flex justify-between">
        <h2 className="flex gap-2 bg-purple-500 text-white cursor-pointer p-3 font-bold rounded-md w-[110px]">
          <LayoutGridIcon className="" /> Theme
        </h2>

        <div className="flex gap-2 ">
          {activeIndex > 1 && (
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
            disabled={!enableNext}
            onClick={() => setActiveIndex(activeIndex + 1)}
          >
            Next
            <MoveRight />
          </button>
        </div>
      </div>

      {activeIndex == 1 ? (
        <PersonalInfo enableNext={(value) => setEnableNext(value)} setEnableNext={setEnableNext} />
      ) : <SkillSet />}
      

      <Experience />
      <Projects /> 
    </div>
  );
}

export default FormSection;
