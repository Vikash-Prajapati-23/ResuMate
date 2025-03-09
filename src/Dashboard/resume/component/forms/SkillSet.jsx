import React, { useState, useContext } from "react";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from 'lucide-react';
import { ResumeInfoContext } from "@/context/ResumeInfoContext";

function SkillSet() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [loading, setLoading] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    enableNext(false);
    setResumeInfo((prevInfo) => ({
      ...prevInfo,
      skills: {
        ...prevInfo.skills,
        [name]: value,
      },
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setEnableNext(true);
    }, 2000);
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4 border-t-4 border-purple-500 my-5">
      <div className="ms-2">
        <h2>Skills</h2>
        <p>Tell about your Skills.</p>
      </div>

      <input onChange={handleFormChange} />

      <form onSubmit={handleSave}>
        <div className="flex justify-end mt-3">
          <Button disabled={loading} type="submit" className="bg-purple-500">
            {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SkillSet;