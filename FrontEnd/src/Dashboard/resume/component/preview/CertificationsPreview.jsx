import React from "react";
import { useSelector } from "react-redux";

function CertificationsPreview() {
  const resumeInfo = useSelector((state) => state.resumeInfo.value);

  return (
    <div className="">
      <h2
        style={{ color: resumeInfo?.personal_info.theme_color }}
        className="text-center mt-6 text-xl font-bold mb-1 m-2"
      >
        Certificates
      </h2>

      <hr
        style={{ borderColor: resumeInfo?.personal_info.theme_color }}
        className="border-[1.5px] mb-1 "
      />

      <div className="m-2">
        {resumeInfo?.certifications.map((certificate, index) => (
          <div className="flex justify-between" key={index}>
            <p className="text-xs">{certificate.name}</p>
            <p className="text-xs">{certificate.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CertificationsPreview;
