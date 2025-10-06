import axios from "axios";
import {
  FileUser,
  MoreVerticalIcon,
  Trash,
  EyeIcon,
  DownloadCloud,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
const baseUrl = import.meta.env.VITE_BASE_URL;

function SavedResume({ resume, onResumeDeleted, fetchSavedresumes }) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSavedresumes();
  }, []);

  const deleteResume = async (resumeId) => {
    try {
      const res = await axios.delete(
        `${baseUrl}/api/create-resume/delete-resume/${resumeId}`
      );
      if (res.status === 200) {
        toast.success(res.data.message);
        onResumeDeleted?.(resumeId);
      }
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Something went wrong, please try again later.";
      toast.error(message);
      console.error(error);
    }
  };

  const handleCardClick = () => {
    navigate(`/dashboard/resume/${resume.resumeId}/edit`);
  };

  return (
    <div>
      <div
        onClick={handleCardClick}
        className="mb-2 mt-4 p-14 h-[250px] cursor-pointer bg-secondary w-60 flex justify-center items-center border-2 border-double border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out"
      >
        <FileUser />
      </div>
      <div className="flex justify-between gap-2 p-1 w-[85%] relative">
        <div onClick={handleCardClick} className="cursor-pointer">
          <h3 className="font-semibold"> {resume.resumeTitle} </h3>
          <p className="text-sm">
            {new Date(resume.updatedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>

        <MoreVerticalIcon
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          size={20}
          className="mt-1 cursor-pointer"
        />

        {show && (
          <div
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            className="absolute right-5 top-6 text-xs flex flex-col gap-1 z-50 cursor-pointer border py-1 px-1 rounded-md shadow-md hover:shadow-xl bg-white"
          >
            <Link
              to={`/dashboard/resume/${resume.resumeId}/edit`}
              className="flex gap-1 hover:bg-slate-100 border-0 rounded-md p-1"
            >
              <EyeIcon size={15} className="text-blue-500" /> View
            </Link>
            <span
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                deleteResume(resume.resumeId);
              }}
              className="flex gap-1 hover:bg-red-50 border-0 rounded-md p-1"
            >
              <Trash size={15} className="text-red-500" /> Delete
            </span>
            <span
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // Add your download logic here
                console.log("Download resume:", resume.resumeId);
              }}
              className="flex gap-1 hover:bg-slate-100 border-0 rounded-md p-1"
            >
              <DownloadCloud size={15} className="text-gray-500" /> Download
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default SavedResume;
