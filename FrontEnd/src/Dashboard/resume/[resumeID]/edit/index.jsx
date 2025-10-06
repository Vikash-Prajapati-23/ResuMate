import React, { useEffect } from "react";
import FormSection from "../../component/FormSection";
import PreviewSection from "../../component/PreviewSection";
// import dummy from "@/Data/dummy";
import { useDispatch } from "react-redux";
import { setResumeInfo } from "../../../../store/slices/resumeInfo/resumeInfo.js";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";

function EditResume() {
  const { resumeId } = useParams();
  const dispatch = useDispatch();
  console.log(resumeId);

  useEffect(() => {
    const getResume = async () => {
      try {
        const res = await axios.get(
          `${
            import.meta.env.VITE_BASE_URL
          }/api/create-resume/view-resume/${resumeId}`
        );
        if (res.data) {
          dispatch(setResumeInfo(res.data));
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch resume data.");
      }
    };
    getResume();
  }, [resumeId]);

  return (
    <div className="md:mx-3 mx-3 my-10 grid grid-cols-1 md:grid-cols-2 lg:gap-3 md:gap-1 lg:p-5 md:p-2">
      <FormSection />
      <PreviewSection />
    </div>
  );
}

export default EditResume;
