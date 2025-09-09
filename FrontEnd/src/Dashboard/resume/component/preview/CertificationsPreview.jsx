import React from "react";
import { useSelector } from "react-redux";

function CertificationsPreview() {
  const resumeInfo = useSelector((state) => state.resumeInfo.value);

  return (
    <div className="">
      <h2
        style={{ color: "blue" }}
        className="text-center mt-6 text-xl font-bold mb-1 "
      >
        Certificates
      </h2>

      <hr style={{ borderColor: "blue" }} className="border-[1.5px] mb-1 " />

      <div className="">
        {resumeInfo.certifications?.map((certificate, index) => (
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
