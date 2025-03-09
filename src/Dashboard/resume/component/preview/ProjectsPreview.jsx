import React from "react";

function ProjectsPreview({resumeInfo}) {

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
        {resumeInfo?.projects.map((projects, index) => (
          <div key={index}>
            <div className=" my-1">
              <div>
                <p className="font-bold"> {projects?.name} </p>
                <p className="text-sm">{projects?.description}</p>
              </div>
              <div className="flex mt-1 text-xs">
                <span className="font-bold" >Technologies used -</span>
                {projects?.technologies?.map((tech, index) => (
                  <span key={index} className="text-xs mx-1">
                    {tech},
                  </span>
                ))}
              </div>
            </div>
            <p className="mb-6 mt-3 text-xs"> Github link :- {projects?.link} </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPreview;
