import React from "react";
import { useSelector } from "react-redux";

function ProjectsPreview() {
  const resumeInfo = useSelector((state) => state.resumeInfo.value);

  return (
    <div>
      <h2
        // style={{ color: "blue" }}
        className="text-center mt-6 text-xl font-bold mb-1"
      >
        Projects
      </h2>

      <hr
        // style={{ borderColor: "blue" }}
        className="border-[1.5px] mb-1 "
      />
      <div className="">
        {resumeInfo?.projects.map((project, index) => (
          <div key={index}>
            <div className=" my-1">
              <div>
                <p className="font-bold text-xs"> {project?.name} </p>
                {/* <p className="text-sm">{project?.description}</p> */}
                <div className="font-semibold text-xs" dangerouslySetInnerHTML={{__html:project?.description}} />
              </div>
              <div className="flex mt-1 text-xs">
                <span className="font-bold me-1" >Technologies used:</span>
                {project?.technologies?.map((tech, index) => (
                  <span key={index} className="text-xs">
                    {tech} {index < project.technologies.length - 1 && ","}
                  </span>
                ))}
              </div>
            </div>
            <p className="mb-6 mt-3 text-xs"> <span className="font-semibold text-xs">Github link:</span> {project?.link} </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPreview;
