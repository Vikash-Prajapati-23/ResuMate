import React from "react";
import PresonalDetailPreview from "./preview/PresonalDetailPreview";
import EducationalDetailPreview from "./preview/EducationalDetailPreview";
import ExperiencePreview from "./preview/ExperiencePreview";
import SkillsPreview from "./preview/SkillsPreview";
import ProjectsPreview from "./preview/ProjectsPreview";
import CertificationsPreview from "./preview/CertificationsPreview";
import { useSelector } from "react-redux";

function PreviewSection() {
  const resumeInfo = useSelector((state) => state.resumeInfo.value);

  return (
    <div
        style={{ borderBlockColor: resumeInfo.personalInfo?.theme_color || "#1e40af" }} className={`bg-white lg:p-5 border md:p-4 p-3 md:mt-12 mt-6 border-t-[25px] shadow-md border-${resumeInfo.personalInfo?.theme_color || "#1e40af"}delay-500`}>
      {/* personal_info */}
      <PresonalDetailPreview />

      {/* skills */}
      <SkillsPreview />

      {/* experience */}
      <ExperiencePreview />

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
