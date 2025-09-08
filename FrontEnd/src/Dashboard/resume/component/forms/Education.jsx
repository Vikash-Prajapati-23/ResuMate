import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import {
  setResumeInfo,
  updateResumeInfoField,
} from "@/store/slices/resumeInfo/resumeInfo";
import { useParams } from "react-router-dom";
import { toast } from "sonner"; // Added missing import

const baseUrl = import.meta.env.VITE_BASE_URL;

function Education({ loading }) {
  const dispatch = useDispatch();
  const resumeInfo = useSelector((state) => state.resumeInfo.value);
  const { resumeId } = useParams();

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${baseUrl}/api/create-resume/${resumeId}`, {
        method: "PATCH",
        credentials: "include",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ education: resumeInfo.education }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success(data.message);
        dispatch(
          setResumeInfo({
            ...resumeInfo,
            education: data.data.education,
          })
        );
      }
    } catch (error) {
      toast.error("Something went wrong, please try again later.");
      console.error("Internal error.", error);
    }
  };

  // FIXED: Properly create deep copies of objects
  const handleFormChange = (index, name, value) => {
    const newEducation = [...(resumeInfo.education || [])];

    // Create a new object instead of mutating the existing one
    newEducation[index] = {
      ...newEducation[index], // Spread the existing object
      [name]: value, // Update only the specific field
    };

    // Use updateResumeInfoField for consistency
    dispatch(
      updateResumeInfoField({
        field: "education",
        data: newEducation,
      })
    );
  };

  const addEducation = () => {
    const newEducation = {
      degree: "",
      institution: "",
      location: "",
      start_year: "",
      end_year: "",
    };
    const updatedEducation = [...(resumeInfo.education || []), newEducation];

    dispatch(
      updateResumeInfoField({
        field: "education",
        data: updatedEducation,
      })
    );
  };

  // FIXED: Remove the setEducation call and use consistent Redux actions
  const removeEducation = (index) => {
    const updatedEducation = (resumeInfo.education || []).filter(
      (_, i) => i !== index
    );

    dispatch(
      updateResumeInfoField({
        field: "education",
        data: updatedEducation,
      })
    );
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 border-t-4 border-purple-500 my-5">
      <div className="ms-2">
        <h2 className="font-bold">Educational Details</h2>
        <p className="text-sm">Fill up some Educational details.</p>
      </div>

      <form onSubmit={handleSave}>
        <div className="mt-3">
          {resumeInfo.education?.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-2 border-2 p-3 rounded-md gap-3 mt-3"
            >
              <div>
                <label className="ms-2 text-sm">Degree</label>
                <Input
                  value={item.degree || ""} // Added fallback
                  type="text"
                  required
                  onChange={(e) =>
                    handleFormChange(index, "degree", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="ms-2 text-sm">Institute name</label>
                <Input
                  value={item.institution || ""} // Added fallback
                  type="text"
                  required
                  onChange={(e) =>
                    handleFormChange(index, "institution", e.target.value)
                  }
                />
              </div>

              <div className="col-span-2">
                <label className="ms-2 text-sm">Institute Location</label>
                <Input
                  value={item.location || ""} // Added fallback
                  type="text"
                  required
                  onChange={(e) =>
                    handleFormChange(index, "location", e.target.value)
                  }
                />
              </div>
              <div className="col-span-1">
                <label className="ms-2 text-sm">Start Date</label>
                <Input
                  value={item.start_year || ""} // Added fallback
                  type="date"
                  min="1900"
                  max={new Date().getFullYear()} // Prevents future years
                  required
                  onChange={(e) =>
                    handleFormChange(index, "start_year", e.target.value)
                  }
                />
              </div>
              <div className="col-span-1">
                <label className="ms-2 text-sm">End Date</label>
                <Input
                  value={item.end_year || ""} // Added fallback
                  type="date"
                  min="1900"
                  max={new Date().getFullYear()} // Prevents future years
                  required
                  onChange={(e) =>
                    handleFormChange(index, "end_year", e.target.value)
                  }
                />
              </div>
              <Button
                type="button"
                onClick={() => removeEducation(index)} // Removed unnecessary (e) parameter
                className="bg-red-500 w-[50%]"
              >
                Remove Education
              </Button>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-3">
          <div>
            <Button
              type="button"
              onClick={addEducation}
              className="bg-purple-500"
            >
              Add Education
            </Button>
          </div>

          <div>
            <Button disabled={loading} type="submit" className="bg-purple-500">
              {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Education;
