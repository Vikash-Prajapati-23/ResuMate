import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

function SkillSet({ handleSave, loading, resumeInfo, setResumeInfo }) {
  const [skills, setSkills] = useState([
    {
      name: "",
      rating: 0,
    },
  ]);

  useEffect(() => {
    if (resumeInfo.skills) {
      setSkills(resumeInfo.skills);
    }
  }, [resumeInfo]);

  const handleFormChange = (index, name, value) => {
    const newSkills = skills.slice();
    newSkills[index][name] = value;
    setSkills(newSkills);
    setResumeInfo((prevInfo) => ({
      ...prevInfo,
      skills: newSkills,
    }));
  };

  const addSkill = () => {
    setSkills([...skills, { name: "", rating: 0 }]);
  };

  const removeSkill = (index) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
    setResumeInfo((prevInfo) => ({
      ...prevInfo,
      skills: newSkills,
    }));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 border-t-4 border-purple-500 my-5">
      <div className="ms-2">
        <h2 className="font-bold">Skills</h2>
        <p className="text-sm">Tell about your Skills.</p>
      </div>

      <form className="mt-3" onSubmit={handleSave}>
        <div className="">
          {skills.map((item, index) => (
            <div
              className="border-2 p-6 mb-3 rounded-md flex justify-between"
              key={index}
            >
              <div>
                <label className="ms-2">Name</label>
                <Input
                  required
                  value={item.name}
                  className="w-[250px]"
                  onChange={(e) =>
                    handleFormChange(index, "name", e.target.value)
                  }
                />
              </div>
              <div className="flex justify-between items-end ">
                <Rating
                  style={{ maxWidth: 170 }}
                  value={item.rating}
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
            <Button type="button" onClick={addSkill} className="bg-purple-500">
              Add skills
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

export default SkillSet;
