import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import TextEditor from "../TextEditor";
import { useDispatch, useSelector } from "react-redux";
import {
  setResumeInfo,
  updateResumeInfoField,
} from "@/store/slices/resumeInfo/resumeInfo";
import { toast } from "sonner";
import { useParams } from "react-router-dom";

const baseUrl = import.meta.env.VITE_BASE_URL;

function Projects({ loading }) {
  const dispatch = useDispatch();
  const resumeInfo = useSelector((state) => state.resumeInfo.value);
  const { resumeId } = useParams();

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${baseUrl}/api/create-resume/${resumeId}`, {
        method: "PATCH",
        credentials: "include",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ projects: resumeInfo.projects }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success(data.message);
        dispatch(
          setResumeInfo({
            ...resumeInfo,
            projects: data.data.projects,
          })
        );
      }
    } catch (error) {
      toast.error("Something went wrong, please try again later.");
      console.error("Internal error.", error);
    }
  };

  const handleFormChange = (index, name, value) => {
    const newProjects = [...(resumeInfo.projects || [])];

    if (name === "technologies") {
      newProjects[index] = {
        ...newProjects[index],
        [name]: value.split(",").map((tech) => tech.trim()),
      };
    } else {
      newProjects[index] = {
        ...newProjects[index],
        [name]: value,
      };
    }

    // Use updateResumeInfoField for consistency
    dispatch(
      updateResumeInfoField({
        field: "projects",
        data: newProjects,
      })
    );
  };

  // Fixed TextEditor handler to work with string values
  const handleTextFormChange = (value, name, index) => {
    const newProjects = [...(resumeInfo.projects || [])];
    newProjects[index] = {
      ...newProjects[index],
      [name]: value, // Now receives string directly from TextEditor
    };

    dispatch(
      updateResumeInfoField({
        field: "projects",
        data: newProjects,
      })
    );
  };

  const addProject = () => {
    const newProject = {
      name: "",
      description: "",
      technologies: [],
      link: "",
    };
    const updatedProjects = [...(resumeInfo.projects || []), newProject];

    dispatch(
      updateResumeInfoField({
        field: "projects",
        data: updatedProjects,
      })
    );
  };

  const removeProject = (index) => {
    const updatedProjects = (resumeInfo.projects || []).filter(
      (_, i) => i !== index
    );

    dispatch(
      updateResumeInfoField({
        field: "projects",
        data: updatedProjects,
      })
    );
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 border-t-4 border-purple-500 my-5">
      <div className="ms-2">
        <h2 className="font-bold">Projects</h2>
        <p className="">Fill your projects if any.</p>
      </div>

      <form onSubmit={handleSave}>
        <div>
          {resumeInfo.projects?.map((item, index) => (
            <div
              className="grid grid-cols-2 gap-3 mt-3 mb-3 border-2 rounded-md p-4"
              key={index}
            >
              <div>
                <label className="ms-2 ">Project name</label>
                <Input
                  value={item.name || ""}
                  type="text"
                  required
                  onChange={(e) =>
                    handleFormChange(index, "name", e.target.value)
                  }
                />
              </div>

              <div>
                <label className="ms-2 ">Technologies</label>
                <Input
                  value={
                    Array.isArray(item.technologies)
                      ? item.technologies.join(", ")
                      : ""
                  }
                  type="text"
                  placeholder="Ex. React, Js, Node.js"
                  required
                  onChange={(e) =>
                    handleFormChange(index, "technologies", e.target.value)
                  }
                />
              </div>

              <div className="col-span-2">
                <label className="ms-2 ">Description</label>
                <TextEditor
                  value={item.description || ""} // Pass current value
                  onTextEditorChange={(value) =>
                    handleTextFormChange(value, "description", index)
                  }
                />
              </div>

              <div className="col-span-2">
                <label className="ms-2">Github link</label>
                <Input
                  value={item.link || ""}
                  type="url"
                  required
                  onChange={(e) =>
                    handleFormChange(index, "link", e.target.value)
                  }
                />
              </div>
              <Button
                type="button"
                onClick={() => removeProject(index)}
                className="bg-red-500 w-[40%]"
              >
                Remove Project
              </Button>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-3">
          <div>
            <Button
              type="button"
              onClick={addProject}
              className="bg-purple-500"
            >
              Add Project
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

export default Projects;
