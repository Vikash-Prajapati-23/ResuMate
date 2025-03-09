import { Input } from "@/components/ui/input";
import React, { useContext } from "react";
import {ResumeInfoContext} from "@/context/ResumeInfoContext";
import { Button } from "@/components/ui/button";

function PersonalInfo() {
  const { resumeInfo, setresumeInfo } = useContext(ResumeInfoContext);
  const handleFormChange = (e) => {
    const {name, value} = e.target;
    setresumeInfo({
        ...resumeInfo,
        [name]:value,
    })
    console.log(resumeInfo)
  };

  const handleSave = (e) => {
    // e.preventDefault();
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 border-t-4 border-purple-500 my-5">
      <div className="ms-2">
        <h2>Personal Details</h2>
        <p>Get started with filling up some personal details.</p>
      </div>

      <form onSubmit={handleSave}>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <div>
            <label className="ms-2 text-sm">First name</label>
            <Input name="first_name" required onChange={handleFormChange} />
          </div>
          <div>
            <label className="ms-2 text-sm">Last name</label>
            <Input name="last_name" required onChange={handleFormChange} />
          </div>

          <div className="col-span-2">
            <label className="ms-2 text-sm">Job title</label>
            <Input name="job_title" required onChange={handleFormChange} />
          </div>
          <div className="col-span-2">
            <label className="ms-2 text-sm">Address</label>
            <Input name="address" required onChange={handleFormChange} />
          </div>

          <div>
            <label className="ms-2 text-sm">Phone</label>
            <Input name="phone" required onChange={handleFormChange} />
          </div>
          <div>
            <label className="ms-2 text-sm">Email</label>
            <Input name="email" required onChange={handleFormChange} />
          </div>
        </div>

        <div className="flex justify-end mt-3">
          <Button type="submit" className="bg-purple-500"> Save </Button>
        </div>
      </form>
    </div>
  );
}

export default PersonalInfo;
