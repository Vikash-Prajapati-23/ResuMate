import React, { useEffect } from "react";
import FormSection from "../../component/FormSection";
import PreviewSection from "../../component/PreviewSection";
import dummy from "@/Data/dummy";
import { useDispatch } from "react-redux";
import { setResumeInfo } from "../../../../store/slices/resumeInfo/resumeInfo.js";

function EditResume() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setResumeInfo(dummy))
  }, []);

  // useEffect(() => {
    
  // }, [resumeInfo]);

  return (
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 gap-3 p-5 bg-secondary">
        <FormSection />
        <PreviewSection />
      </div>
  );
}

export default EditResume;
