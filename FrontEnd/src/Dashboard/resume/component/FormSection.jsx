import React, { useState } from "react";
import { LayoutGridIcon, MoveLeft, MoveRight } from "lucide-react";
import PersonalInfo from "./forms/PersonalInfo";
import SkillSet from "./forms/SkillSet";
import Experience from "./forms/Experience";
import Projects from "./forms/Projects";
import Certificates from "./forms/Certificates";
import Education from "./forms/Education";
import { toast } from "sonner";
import { Navigate, useParams } from "react-router-dom";

function FormSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [loading, setLoading] = useState(false);
  const { resumeViewID } = useParams();

  return (
    <div className="lg:p-4 md:p-2 p-1 ">
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
            onClick={() => setActiveIndex(activeIndex + 1)}
          >
            Next
            <MoveRight />
          </button>
        </div>
      </div>

      {activeIndex === 1 && (
        <PersonalInfo loading={loading} setLoading={setLoading} />
      )}
      {activeIndex === 2 && <SkillSet loading={loading} />}
      {activeIndex === 3 && <Experience loading={loading} />}
      {activeIndex === 4 && <Projects loading={loading} />}
      {activeIndex === 5 && <Education loading={loading} />}
      {activeIndex === 6 && <Certificates loading={loading} />}
      {activeIndex === 7 && (
        <Navigate to={`/ViewResume/${resumeViewID}/view`} replace />
      )}
    </div>
  );
}

export default FormSection;
