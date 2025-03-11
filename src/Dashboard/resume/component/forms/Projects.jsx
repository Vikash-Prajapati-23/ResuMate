import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import TextEditor from "../TextEditor";

function Projects({ resumeInfo, setResumeInfo, handleSave, loading }) {
  const [project, setProject] = useState([
    {
      name: "",
      description: "",
      technologies: [],
      link: "",
    },
  ]);

  useEffect(() => {
    if (resumeInfo.projects) {
      setProject(resumeInfo.projects);
    }
  }, []);

  const handleFormChange = (index, name, value) => {
    const newProject = project.slice();
    if (name === "technologies") {
      newProject[index][name] = value.split(",").map((tech) => tech.trim());
    } else {
      newProject[index][name] = value;
    }
    setProject(newProject);
    setResumeInfo((prevInfo) => ({
      ...prevInfo,
      project: newProject,
    }));
  };

  const handleTextFormChange = (event, name, index) => {
    const newProject = project.slice();
    newProject[index][name] = event.target.value;
    setProject(newProject);
    setResumeInfo((prevInfo) => ({
      ...prevInfo,
      project: newProject,
    }));
  }
  const addProject = () => {
    setProject([
      ...project,
      {
        name: "",
        description: "",
        technologies: [],
        link: "",
      },
    ]);
  };

  const removeProject = (index) => {
    const newProject = project.filter((_, i) => i !== index);
    setProject(newProject);
    setResumeInfo((prevInfo) => ({
      ...prevInfo,
      project: newProject,
    }));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 border-t-4 border-purple-500 my-5">
      <div className="ms-2">
        <h2 className="font-bold">Projects</h2>
        <p className="text-sm">Fill your projects if any.</p>
      </div>

      <form onSubmit={handleSave}>
        <div>
          {project.map((item, index) => (
            <div
              className="grid grid-cols-2 gap-3 mt-3 mb-3 border-2 rounded-md p-4"
              key={index}
            >
              <div>
                <label className="ms-2 text-sm">Project name</label>
                <Input
                  value={item.name}
                  type="text"
                  required
                  onChange={(e) =>
                    handleFormChange(index, "name", e.target.value)
                  }
                />
              </div>

              <div>
                <label className="ms-2 text-sm">Technologies</label>
                <Input
                  value={item.technologies.join(", ")}
                  type="text"
                  placeHolder="Ex. React, Js, Node.js"
                  required
                  onChange={(e) =>
                    handleFormChange(index, "technologies", e.target.value)
                  }
                />
              </div>

              <div className="col-span-2">
                <label className="ms-2 text-sm">Description</label>
                <TextEditor
                  onTextEditorChange={(event) => handleTextFormChange(event, "description", index)}
                />
              </div>

              <div className="col-span-2">
                <label className="ms-2 text-sm">Github link</label>
                <Input
                  value={item.link}
                  type="link"
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
