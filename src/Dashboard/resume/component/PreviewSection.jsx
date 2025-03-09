import React, { useContext } from "react";
import PresonalDetailPreview from "./preview/PresonalDetailPreview";
import EducationalDetailPreview from "./preview/EducationalDetailPreview";
import ExperiencePreview from "./preview/ExperiencePreview";
import SkillsPreview from "./preview/SkillsPreview";
import ProjectsPreview from "./preview/ProjectsPreview";
import CertificationsPreview from "./preview/CertificationsPreview";
import {ResumeInfoContext} from "@/context/ResumeInfoContext";

function PreviewSection() {
  const {resumeInfo, setresumeInfo} = useContext(ResumeInfoContext)

  return (
    <div className='bg-white p-5 shadow-lg border-t-[25px]  border-blue-800'>
      {/* personal_info */}
      <PresonalDetailPreview resumeInfo={resumeInfo} />

      {/* skills */}
      <SkillsPreview resumeInfo={resumeInfo} />

      {/* experience */}
      <ExperiencePreview resumeInfo={resumeInfo} />

      {/* projects */}
      <ProjectsPreview resumeInfo={resumeInfo} />

      {/* education */}
      <EducationalDetailPreview resumeInfo={resumeInfo} />

      {/* certifications */}
      <CertificationsPreview resumeInfo={resumeInfo} />
    </div>
  );
}

export default PreviewSection;
