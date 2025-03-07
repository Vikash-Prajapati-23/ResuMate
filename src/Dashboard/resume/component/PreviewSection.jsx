import React from "react";
import PresonalDetailPreview from "./preview/PresonalDetailPreview";
import EducationalDetailPreview from "./preview/EducationalDetailPreview";
import ExperiencePreview from "./preview/ExperiencePreview";
import SkillsPreview from "./preview/SkillsPreview";
import ProjectsPreview from "./preview/ProjectsPreview";
import CertificationsPreview from "./preview/CertificationsPreview";

function PreviewSection() {
  return (
    <div className='bg-white p-5 shadow-lg border-t-[25px]  border-blue-800'>
      {/* personal_info */}
      <PresonalDetailPreview />

      {/* skills */}
      <SkillsPreview />

      {/* experience */}
      <ExperiencePreview/>

      {/* projects */}
      <ProjectsPreview />

      {/* education */}
      <EducationalDetailPreview />

      {/* certifications */}
      <CertificationsPreview />
    </div>
  );
}

export default PreviewSection;
