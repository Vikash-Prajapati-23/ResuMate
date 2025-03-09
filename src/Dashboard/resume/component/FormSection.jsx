import React, { useContext, useState } from "react";
import { LayoutGridIcon, MoveLeft, MoveRight } from "lucide-react";
import PersonalInfo from "./forms/PersonalInfo";
import SkillSet from "./forms/SkillSet";
import Experience from "./forms/Experience";
import Projects from "./forms/Projects";

function FormSection() {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <div className=" bg-white p-4">
      <div className="flex justify-between">
        <h2 className="flex gap-2 bg-purple-500 text-white cursor-pointer p-3 font-bold rounded-md w-[110px]">
          <LayoutGridIcon className="" /> Theme
        </h2>

        <div className="flex gap-2 ">
          {activeIndex > 1 && (
            <button
              className="bg-purple-500 text-white p-3 font-bold rounded-md"
              onClick={() => setActiveIndex(activeIndex - 1)}
            >
              <MoveLeft />
            </button>
          )}
          <button
            className="bg-purple-500 text-white p-3 font-bold rounded-md"
            onClick={() => setActiveIndex(activeIndex + 1)}
          >
            <MoveRight />
          </button>
        </div>
      </div>

      <PersonalInfo />
      <SkillSet />
      <Experience />
      <Projects />
    </div>
  );
}

export default FormSection;
