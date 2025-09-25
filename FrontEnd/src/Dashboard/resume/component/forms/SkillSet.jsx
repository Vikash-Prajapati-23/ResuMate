import React, { useState, useEffect, useId } from "react";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setResumeInfo,
  updateResumeInfoField,
} from "@/store/slices/resumeInfo/resumeInfo";
import { toast } from "sonner";
import { useParams } from "react-router-dom";
const baseUrl = import.meta.env.VITE_BASE_URL;

function SkillSet({ loading }) {
  const dispatch = useDispatch();
  const resumeInfo = useSelector((state) => state.resumeInfo.value);
  const { resumeId } = useParams();

  // const [skills, setSkills] = useState([
  //   {
  //     name: "",
  //     rating: 0,
  //   },
  // ]);

  // useEffect(() => {
  //   // This is used to to show the dummy data.
  //   if (resumeInfo.skills) {
  //     setSkills(resumeInfo.skills);
  //   }
  // }, []);

  const handleFormChange = (index, field, value) => {
    const newSkills = [...(resumeInfo.skills || [])];

    // if no object exists at this index, create it
    if (!newSkills[index]) {
      newSkills[index] = { name: "", rating: 0 };
    }

    newSkills[index] = {
      ...newSkills[index],
      [field]: value, // Update the specific field
    };

    dispatch(
      updateResumeInfoField({
        field: "skills",
        data: newSkills,
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
        body: JSON.stringify({ skills: resumeInfo.skills }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        dispatch(
          setResumeInfo({
            ...resumeInfo,
            skills: data.data.skills,
          })
        );
      }
    } catch (error) {
      toast.error("Failed to save the data.");
      console.error("Internal server error.", error);
    }
  };

  const addSkill = () => {
    const newSkills = [...(resumeInfo.skills || []), { name: "", rating: 0 }];

    dispatch(
      updateResumeInfoField({
        field: "skills",
        data: newSkills,
      })
    );
  };

  const removeSkill = (index) => {
    const newSkills = resumeInfo.skills.filter((_, i) => i !== index);

    dispatch(
      updateResumeInfoField({
        field: "skills",
        data: newSkills,
      })
    );
  };

  return (
    <div className="bg-white border rounded-lg md:p-4 p-3 border-t-4 border-purple-500 my-5">
      <div className="ms-2">
        <h2 className="font-bold">Skills</h2>
        <p className="text-sm">Tell about your Skills.</p>
      </div>

      <form className="mt-3" onSubmit={handleSave}>
        <div className="">
          {resumeInfo?.skills?.map((item, index) => (
            <div
              className="border-2 p-6 mb-3 rounded-md flex justify-between"
              key={index}
            >
              <div>
                <label className="ms-2 text-xs">Name</label>
                <Input
                  required
                  value={item.name}
                  type="text"
                  className="w-[250px] text-xs"
                  onChange={(e) =>
                    handleFormChange(index, "name", e.target.value)
                  }
                />
              </div>
              <div className="flex justify-between items-end ">
                <Rating
                  style={{ maxWidth: 170 }}
                  value={Number(item.rating)}
                  // type="number"
                  className="flex items-end"
                  onChange={(value) => handleFormChange(index, "rating", value)}
                />
                <Button
                  type="button"
                  onClick={() => removeSkill(index)}
                  className="bg-red-500 ml-2"
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-3">
          <div className="flex">
            <Button
              type="button"
              onClick={() => addSkill()}
              className="bg-purple-500"
            >
              Add skills
            </Button>
          </div>

          <div>
            <Button
              disabled={loading}
              onClick={handleSave}
              type="submit"
              className="bg-purple-500"
            >
              {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SkillSet;
