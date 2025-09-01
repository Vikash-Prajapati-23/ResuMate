import { FileUser } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function SavedResume() {
  return (
    <Link to="/dashboard/resume/[resumeID]/edit">
      <div className="mb-2 mt-4 p-14 h-[250px] cursor-pointer bg-secondary w-60 flex justify-center items-center border-2 border-double border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out shadow-md">
        <FileUser />
      </div>
      <h3>Resume Title</h3>
      <p>Created on 07/03/2025</p>
    </Link>
  );
}

export default SavedResume;
