import { Input } from "@/components/ui/input";
import { LoaderCircle } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { BrainCircuitIcon } from "lucide-react";

function PersonalInfo({ setResumeInfo, handleSave, loading }) {
  
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setResumeInfo((prevInfo) => ({
      ...prevInfo,
      personal_info: {
        ...prevInfo.personal_info,
        [name]: value,
      },
      summary: name === "summary" ? value : prevInfo.summary,
    }));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 border-t-4 border-purple-500 my-5">
      <div className="ms-2">
        <h2 className="font-bold">Personal Details</h2>
        <p className="text-sm">
          Get started with filling up some personal details.
        </p>
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

        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <div>
              <h2 className="ms-2">Add Summary</h2>
              <p className="text-sm ms-2">Add a summary for your job role.</p>
            </div>
            <div>
              <Button variant="outline" type="button" className="bg-purple-500">
                <BrainCircuitIcon /> Generate with AI
              </Button>
            </div>
          </div>
          <Textarea
            placeholder="Type your message here..."
            required
            name="summary"
            onChange={handleFormChange}
          />
        </div>

        <div className="flex justify-end mt-3">
          <Button disabled={loading} type="submit" className="bg-purple-500">
            {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PersonalInfo;
