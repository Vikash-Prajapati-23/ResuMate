import React, { useEffect } from "react";
import FormSection from "../../component/FormSection";
import PreviewSection from "../../component/PreviewSection";
import dummy from "@/Data/dummy";
import { useDispatch } from "react-redux";
import { setResumeInfo } from "../../../../store/slices/resumeInfo/resumeInfo.js";
import { useParams } from "react-router-dom";

function EditResume() {

  const dispatch = useDispatch();
  const params = useParams();

  // useEffect(() => {
  //   dispatch(setResumeInfo(dummy))
  // }, []);

  // useEffect(() => {
  //   console.log(params.resumeId);
  // }, []);

  return (
      <div className="mx-2 my-10 grid grid-cols-1 md:grid-cols-2 gap-3 p-5 bg-secondary">
        <FormSection />
        <PreviewSection />
      </div>
  );
}

export default EditResume;
