import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import TextEditor from "../TextEditor";
import { useDispatch, useSelector } from "react-redux";
import {
  setResumeInfo,
  updateResumeInfoField,
} from "@/store/slices/resumeInfo/resumeInfo";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const baseUrl = import.meta.env.VITE_BASE_URL;

function Experience({ loading }) {
  const dispatch = useDispatch();
  const resumeInfo = useSelector((state) => state.resumeInfo.value);
  const resumeId = useParams();

  // Handle input change for text, date, etc.
  const handleFormChange = (index, name, value) => {
    const newExperience = [...(resumeInfo.experience || [])];
    newExperience[index] = {
      ...newExperience[index],
      [name]: value,
    };

    dispatch(
      updateResumeInfoField({
        field: "experience",
        data: newExperience,
      })
    );
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseUrl}/api/create-resume/${resumeId}`, {
        method: "PATCH",
        credentials: "include",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ experience: resumeInfo.experience }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        dispatch(
          setResumeInfo({
            ...resumeInfo,
            experience: data.data.experience,
          })
        );
      }
    } catch (error) {
      toast.error("Failed to save the data.");
      console.error("Internal server error.", error);
    }
  };

  // Fixed TextEditor handler - ensure we only get the string value
  const handleTextFormChange = (value, name, index) => {
    // Extract only the string value, handle different possible return types
    let textValue = "";
    
    if (typeof value === "string") {
      textValue = value;
    } else if (value && typeof value === "object") {
      // If TextEditor returns an object, try to extract the text
      if (value.target && value.target.value) {
        textValue = value.target.value;
      } else if (value.target && value.target.innerHTML) {
        textValue = value.target.innerHTML;
      } else if (value.target && value.target.textContent) {
        textValue = value.target.textContent;
      } else if (typeof value.toString === "function") {
        textValue = value.toString();
      }
    }

    const newExperience = [...(resumeInfo.experience || [])];
    newExperience[index] = {
      ...newExperience[index],
      [name]: textValue, // Ensure this is always a string
    };

    dispatch(
      updateResumeInfoField({
        field: "experience",
        data: newExperience,
      })
    );
  };

  const addExperience = () => {
    const newItem = {
      job_title: "",
      company: "",
      location: "",
      start_date: "",
      end_date: "",
      responsibilities: "", // Initialize as empty string
    };
    const updatedList = [...(resumeInfo.experience || []), newItem];
    dispatch(
      updateResumeInfoField({
        field: "experience",
        data: updatedList,
      })
    );
  };

  const removeExperience = (index) => {
    const updatedList = resumeInfo.experience.filter((_, i) => i !== index);
    dispatch(
      updateResumeInfoField({
        field: "experience",
        data: updatedList,
      })
    );
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 border-t-4 border-purple-500 my-5">
      <div className="ms-2">
        <h2 className="font-bold">Experience</h2>
        <p className="text-sm">
          Share your working experience to showcase your work and capabilities.
        </p>
      </div>

      <form className="mt-4" onSubmit={handleSave}>
        <div className="mt-4 border-2 p-3 rounded-md">
          {resumeInfo.experience?.map((item, index) => (
            <div key={index} className="grid grid-cols-2 gap-3 mb-5">
              <div>
                <label className="ms-2 text-xs"> Job Title </label>
                <Input
                  value={item.job_title || ""} // Ensure fallback to empty string
                  onChange={(e) =>
                    handleFormChange(index, "job_title", e.target.value)
                  }
                  required
                />
              </div>
              <div>
                <label className="ms-2 text-xs"> Company </label>
                <Input
                  value={item.company || ""} // Ensure fallback to empty string
                  onChange={(e) =>
                    handleFormChange(index, "company", e.target.value)
                  }
                  required
                />
              </div>
              <div className="col-span-2">
                <label className="ms-2 text-xs"> Address </label>
                <Input
                  value={item.location || ""} // Ensure fallback to empty string
                  onChange={(e) =>
                    handleFormChange(index, "location", e.target.value)
                  }
                  required
                />
              </div>
              <div>
                <label className="ms-2 text-xs"> Start Date </label>
                <Input
                  value={item.start_date || ""} // Ensure fallback to empty string
                  type="date"
                  onChange={(e) =>
                    handleFormChange(index, "start_date", e.target.value)
                  }
                  required
                />
              </div>
              <div>
                <label className="ms-2 text-xs"> End Date </label>
                <Input
                  value={item.end_date || ""} // Ensure fallback to empty string
                  type="date"
                  onChange={(e) =>
                    handleFormChange(index, "end_date", e.target.value)
                  }
                  required
                />
              </div>
              <div className="col-span-2">
                <label className="ms-2 text-xs"> Your Responsibility </label>
                <TextEditor
                  value={item.responsibilities || ""} // Ensure fallback to empty string
                  onTextEditorChange={(value) =>
                    handleTextFormChange(value, "responsibilities", index)
                  }
                />
              </div>
              <Button
                type="button"
                onClick={() => removeExperience(index)}
                className="bg-red-500 w-[50%]"
              >
                Remove Experience
              </Button>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-3">
          <Button
            type="button"
            onClick={addExperience}
            className="bg-purple-500"
          >
            Add Experience
          </Button>
          <Button disabled={loading} type="submit" className="bg-purple-500">
            {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Experience;