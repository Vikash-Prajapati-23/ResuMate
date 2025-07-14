import React, { useState, useEffect, useId } from "react";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useDispatch, useSelector } from "react-redux";
import { setResumeInfo } from "@/features/resumeInfo/resumeInfo";

function SkillSet({ handleSave, loading }) {
  const dispatch = useDispatch();
  const resumeInfo = useSelector((state) => state.resumeInfo.value);

  const [skills, setSkills] = useState([
    {
      name: "",
      rating: 0,
    },
  ]);

  useEffect(() => {
    // This is used to to show the dummy data.
    if (resumeInfo.skills) {
      setSkills(resumeInfo.skills);
    }
  }, []);

  const handleFormChange = (index, name, value) => {
    const newSkills = skills.slice();
    newSkills[index][name] = value;
    setSkills(newSkills);
    dispatch(
      setResumeInfo((prevInfo) => ({
        ...prevInfo,
        skills: newSkills,
      }))
    );
  };

  const addSkill = () => {
    setSkills([...skills, { name: "", rating: 0 }]);
  };

  const removeSkill = (index) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
    dispatch(
      setResumeInfo((prevInfo) => ({
        ...prevInfo,
        skills: newSkills,
      }))
    );
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
                  value={item.rating}
                  type="number"
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
