import React from "react";
import { Input } from "@/components/ui/input";
import { LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

function Education({ setResumeInfo, handleSave, loading }) {
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setResumeInfo((prevInfo) => ({
      ...prevInfo,
      education: {
        ...prevInfo.education,
        [name]: value,
      },
    }));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 border-t-4 border-purple-500 my-5">
      <div className="ms-2">
        <h2 className="font-bold">Educational Details</h2>
        <p className="text-sm">Fill up some Educational details.</p>
      </div>

      <form onSubmit={handleSave}>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <div>
            <label className="ms-2 text-sm">Degree</label>
            <Input
              name="degree"
              type="text"
              required
              onChange={handleFormChange}
            />
          </div>
          <div>
            <label className="ms-2 text-sm">Institute name</label>
            <Input
              name="institution"
              type="text"
              required
              onChange={handleFormChange}
            />
          </div>

          <div className="col-span-2">
            <label className="ms-2 text-sm">Institute Location</label>
            <Input
              name="location"
              type="text"
              required
              onChange={handleFormChange}
            />
          </div>
          <div className="col-span-1">
            <label className="ms-2 text-sm">Start Date</label>
            <Input
              name="start_year"
              type="number"
              min="1900"
              max={new Date().getFullYear()} // Prevents future years
              required
              onChange={handleFormChange}
            />
          </div>
          <div className="col-span-1">
            <label className="ms-2 text-sm">End Date</label>
            <Input
              name="end_year"
              type="number"
              min="1900"
              max={new Date().getFullYear()} // Prevents future years
              required
              onChange={handleFormChange}
            />
          </div>
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

export default Education;
