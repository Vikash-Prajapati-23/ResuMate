import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

function Education({ resumeInfo, setResumeInfo, handleSave, loading }) {
  const [education, setEducation] = useState([
    {
      degree: "",
      institution: "",
      location: "",
      start_year: "",
      end_year: "",
    },
  ]);

  useEffect(() => {
    if (resumeInfo && resumeInfo.education) {
      setEducation(resumeInfo.education);
    }
  }, []);

  const handleFormChange = (index, name, value) => {
    const newEducation = education.slice();
    newEducation [index] [name] = value;
    setEducation(newEducation);
    setResumeInfo((prevInfo) => ({
      ...prevInfo,
      education: newEducation,
    }));
  };

  const addEducation = () => {
    setEducation([
      ...education,
      {
        degree: "",
        institution: "",
        location: "",
        start_year: "",
        end_year: "",
      },
    ]);
  };

  const removeEducation = (index) => {
    const newEducation = education.filter((_ , i) => i !== index);
    setEducation(newEducation);
    setResumeInfo((prevInfo) => ({
      ...prevInfo,
      education: newEducation,
    }));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 border-t-4 border-purple-500 my-5">
      <div className="ms-2">
        <h2 className="font-bold">Educational Details</h2>
        <p className="text-sm">Fill up some Educational details.</p>
      </div>

      <form onSubmit={handleSave}>
        <div className="mt-3">
          {education.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-2 border-2 p-3 rounded-md gap-3 mt-3"
            >
              <div>
                <label className="ms-2 text-sm">Degree</label>
                <Input
                  value={item.degree}
                  type="text"
                  required
                  onChange={(e) => handleFormChange(index, "degree", e.target.value)}
                />
              </div>
              <div>
                <label className="ms-2 text-sm">Institute name</label>
                <Input
                  value={item.institution}
                  type="text"
                  required
                  onChange={(e) => handleFormChange(index, "institution", e.target.value)}
                />
              </div>

              <div className="col-span-2">
                <label className="ms-2 text-sm">Institute Location</label>
                <Input
                  value={item.location}
                  type="text"
                  required
                  onChange={(e) => handleFormChange(index, "location", e.target.value)}
                />
              </div>
              <div className="col-span-1">
                <label className="ms-2 text-sm">Start Date</label>
                <Input
                  value={item.start_year}
                  type="number"
                  min="1900"
                  max={new Date().getFullYear()} // Prevents future years
                  required
                  onChange={(e) => handleFormChange(index, "start_year", e.target.value)}
                />
              </div>
              <div className="col-span-1">
                <label className="ms-2 text-sm">End Date</label>
                <Input
                  value={item.end_year}
                  type="number"
                  min="1900"
                  max={new Date().getFullYear()} // Prevents future years
                  required
                  onChange={(e) => handleFormChange(index, "end_year", e.target.value)}
                />
              </div>
              <Button
                type="button"
                onClick={(e) => removeEducation(index)}
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
