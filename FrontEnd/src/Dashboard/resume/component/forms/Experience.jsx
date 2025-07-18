import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import TextEditor from "../TextEditor";
import { useDispatch, useSelector } from "react-redux";
import { updateResumeInfoField } from "@/store/slices/resumeInfo/resumeInfo";

function Experience({ handleSave, loading }) {
  const dispatch = useDispatch();
  const resumeInfo = useSelector((state) => state.resumeInfo.value);

  const [experience, setExperience] = useState([
    {
      job_title: "",
      company: "",
      location: "",
      start_date: "",
      end_date: "",
      responsibilities: "",
    },
  ]);

  // 🧠 Load data from Redux when resumeInfo changes
  useEffect(() => {
    if (resumeInfo?.experience) {
      setExperience(resumeInfo.experience);
    }
  }, [resumeInfo]);

  // ✅ Handle input change for text, date, etc.
  const handleFormChange = (index, name, value) => {
    const newExperience = [...experience];
    newExperience[index] = {
      ...newExperience[index],
      [name]: value,
    };
    setExperience(newExperience);

    dispatch(updateResumeInfoField({
      field: "experience",
      data: newExperience,
    }));
  };

  // ✅ Handle TextEditor separately
  const handleTextFormChange = (value, name, index) => {
    const newExperience = [...experience];
    newExperience[index] = {
      ...newExperience[index],
      [name]: value,
    };
    setExperience(newExperience);

    dispatch(updateResumeInfoField({
      field: "experience",
      data: newExperience,
    }));
  };

  const addExperience = () => {
    const newItem = {
      job_title: "",
      company: "",
      location: "",
      start_date: "",
      end_date: "",
      responsibilities: "",
    };

    const updatedList = [...experience, newItem];
    setExperience(updatedList);

    dispatch(updateResumeInfoField({
      field: "experience",
      data: updatedList,
    }));
  };

  const removeExperience = (index) => {
    const updatedList = experience.filter((_, i) => i !== index);
    setExperience(updatedList);

    dispatch(updateResumeInfoField({
      field: "experience",
      data: updatedList,
    }));
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
          {experience.map((item, index) => (
            <div key={index} className="grid grid-cols-2 gap-3 mb-5">
              <div>
                <label className="ms-2 text-xs"> Job Title </label>
                <Input
                  value={item.job_title}
                  onChange={(e) =>
                    handleFormChange(index, "job_title", e.target.value)
                  }
                  required
                />
              </div>
              <div>
                <label className="ms-2 text-xs"> Company </label>
                <Input
                  value={item.company}
                  onChange={(e) =>
                    handleFormChange(index, "company", e.target.value)
                  }
                  required
                />
              </div>
              <div className="col-span-2">
                <label className="ms-2 text-xs"> Address </label>
                <Input
                  value={item.location}
                  onChange={(e) =>
                    handleFormChange(index, "location", e.target.value)
                  }
                  required
                />
              </div>
              <div>
                <label className="ms-2 text-xs"> Start Date </label>
                <Input
                  value={item.start_date}
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
                  value={item.end_date}
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
                  value={item.responsibilities}
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
          <Button type="button" onClick={addExperience} className="bg-purple-500">
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
