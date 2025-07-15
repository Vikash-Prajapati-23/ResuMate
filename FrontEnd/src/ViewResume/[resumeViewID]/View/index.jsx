import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import PreviewSection from "@/Dashboard/resume/component/PreviewSection";
import { RWebShare } from "react-web-share";
import { useParams } from "react-router-dom";

const ViewResume = () => {
  const resumeInfo = useSelector((state) => state.resumeInfo.value);
  const { resumeViewID } = useParams();

  const handleDownload = () => {
    // Add a class to body to trigger print-specific styles
    document.body.classList.add("printing");
    document.body.classList.remove("shadow-lg");

    // Use setTimeout to ensure styles are applied before printing
    setTimeout(() => {
      window.print();
      document.body.classList.remove("printing");
    }, 100);
  };

  if (!resumeInfo) {
    return <div className="text-center p-5 text-gray-500">Loading...</div>;
  }

  return (
    <>
      {/* Buttons that will not be printed */}
      <div className="no-print flex justify-between my-5 lg:mx-96 md:mx-20">
        <RWebShare
          data={{
            text: "Hey, I just got a platform where you can create and download resumes just in minuts. You just need to fill your details and your resume is ready. No more editing Formating! Here's the link for my resume that i'he created for me. Do check this out.",
            url:
              import.meta.env.VITE_BASE_URL +
              "/ViewResume/" +
              resumeViewID +
              "/view",
            title:
              resumeInfo?.first_name + " " + resumeInfo?.last_name + "resume",
          }}
          onClick={() => console.log("shared successfully!")}
        >
          <Button className="bg-purple-500 text-white" type="button">
            Share
          </Button>
        </RWebShare>

        <Button
          onClick={handleDownload}
          className="bg-purple-500 text-white"
          type="button"
        >
          Download
        </Button>
      </div>

      {/* Printable section */}
      <div className="print-only lg:mx-96 md:mx-20 mb-20">
        <PreviewSection />
      </div>
    </>
  );
};

export default ViewResume;
