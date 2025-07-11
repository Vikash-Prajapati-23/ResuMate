import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormSection from "../../component/FormSection";
import PreviewSection from "../../component/PreviewSection";
import {ResumeInfoContext} from "@/context/ResumeInfoContext.jsx";
import dummy from "@/Data/dummy";

function EditResume() {
  const params = useParams();
  const [resumeInfo, setResumeInfo] = useState();

  useEffect(() => {
    setResumeInfo(dummy)
  }, []);

  // useEffect(() => {
    
  // }, [resumeInfo]);

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 gap-3 p-5 bg-secondary">
        <FormSection />
        <PreviewSection />
      </div>
    </ResumeInfoContext.Provider>
  );
}

export default EditResume;
