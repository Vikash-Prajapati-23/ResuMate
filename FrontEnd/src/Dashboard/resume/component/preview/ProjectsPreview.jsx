import React from "react";
import { useSelector } from "react-redux";

function ProjectsPreview() {
  const resumeInfo = useSelector((state) => state.resumeInfo.value);

  return (
    <div>
      <h2
        style={{ color: resumeInfo?.personal_info.theme_color }}
        className="text-center mt-6 text-xl font-bold mb-1 m-2"
      >
        Projects
      </h2>

      <hr
        style={{ borderColor: resumeInfo?.personal_info.theme_color }}
        className="border-[1.5px] mb-1 "
      />
      <div className="m-2">
        {resumeInfo?.projects.map((project, index) => (
          <div key={index}>
            <div className=" my-1">
              <div>
                <p className="font-bold"> {project?.name} </p>
                {/* <p className="text-sm">{project?.description}</p> */}
                <div dangerouslySetInnerHTML={{__html:project?.description}} />
              </div>
              <div className="flex mt-1 text-xs">
                <span className="font-bold" >Technologies used -</span>
                {project?.technologies?.map((tech, index) => (
                  <span key={index} className="text-xs mx-1">
                    {tech} {index < project.technologies.length - 1 && ","}
                  </span>
                ))}
              </div>
            </div>
            <p className="mb-6 mt-3 text-xs"> Github link :- {project?.link} </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPreview;
