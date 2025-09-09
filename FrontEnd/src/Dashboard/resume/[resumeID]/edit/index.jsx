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
      <div className="md:mx-3 mx-3 my-10 grid grid-cols-1 md:grid-cols-2 lg:gap-3 md:gap-1 lg:p-5 md:p-2">
        <FormSection />
        <PreviewSection />
      </div>
  );
}

export default EditResume;
