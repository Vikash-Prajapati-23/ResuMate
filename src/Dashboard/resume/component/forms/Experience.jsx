import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function Experience({ resumeInfo, setResumeInfo, handleSave, loading }) {
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

  const handleFormChange = (index, name, value) => {
    const newExperience = experience.slice();
    newExperience[index][name] = value;
    setExperience(newExperience);
    setResumeInfo((prevInfo) => ({
      ...prevInfo,
      experience: newExperience,
    }));
  };

  const addExperience = () => {
    setExperience([
      ...experience,
      {
        job_title: "",
        company: "",
        location: "",
        start_date: "",
        end_date: "",
        responsibilities: "",
      },
    ]);
  };

  const removeExperience = (index) => {
    const newExperience = experience.filter((_, i) => i !== index);
    setExperience(newExperience);
    setResumeInfo((prevInfo) => ({
      ...prevInfo,
      experience: newExperience,
    }));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 border-t-4 border-purple-500 my-5">
      <div className="ms-2">
        <h2 className="font-bold">Experience</h2>
        <p className="text-sm">
          Share your working experience to showcase you work and capabilities.
        </p>
      </div>

      <form className="mt-4" onSubmit={handleSave}>
        <div>
          {experience.map((item, index) => (
            <div key={index} className="grid grid-cols-2 gap-3">
              <div className="">
                <label className="ms-2 text-xs"> Job Title </label>
                <Input
                  value={item.job_title}
                  onChange={(e) =>
                    handleFormChange(index, "job_title", e.target.value)
                  }
                  required
                />
              </div>
              <div className="">
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
              <div className="">
                <label className="ms-2 text-xs"> Start Date </label>
                <Input
                  value={item.start_date}
                  onChange={(e) =>
                    handleFormChange(index, "start_date", e.target.value)
                  }
                  required
                />
              </div>
              <div className="">
                <label className="ms-2 text-xs"> End Date </label>
                <Input
                  value={item.end_date}
                  onChange={(e) =>
                    handleFormChange(index, "end_date", e.target.value)
                  }
                  required
                />
              </div>
              <div className=" col-span-2">
                <label className="ms-2 text-xs"> Your Responsibility </label>
                <Textarea
                  value={item.responsibilities}
                  required
                  onChange={(e) =>
                    handleFormChange(index, "responsibilities", e.target.value)
                  }
                />
              </div>
              <Button
                type="button"
                onClick={removeExperience}
                className="bg-purple-500"
              >
                Remove Experience
              </Button>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-3">
          <div>
            <Button
              type="button"
              onClick={addExperience}
              className="bg-purple-500"
            >
              Add Experience
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

export default Experience;
