import React from "react";
import { LayoutGridIcon, MoveLeft, MoveRight } from "lucide-react";
import PersonalInfo from "./forms/PersonalInfo";
import SkillSet from "./forms/SkillSet";
import Experience from "./forms/Experience";
import Projects from "./forms/Projects";

function FormSection() {
  return (
    <div className="bg-white p-5 shadow-lg rounded-lg">
      <div className="flex justify-between">
        <h2 className="flex gap-2 border-2 cursor-pointer p-3 font-bold rounded-md border-slate-400 w-[110px]">
          <LayoutGridIcon className="" /> Theme
        </h2>

        <div className="flex gap-2 ">
          <button className="border-2 p-3 font-bold rounded-md border-slate-400 ">
            <MoveLeft />
          </button>
          <button className="border-2 p-3 font-bold rounded-md border-slate-400 ">
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
