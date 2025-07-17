import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import PreviewSection from "@/Dashboard/resume/component/PreviewSection";
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

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "My Website",
          text: "Check this out!",
          url: window.location.href,
        })
        .then(() => console.log("Shared successfully"))
        .catch(console.error);
    } else {
      alert("Web Share API not supported.");
    }
  };

  if (!resumeInfo) {
    return <div className="text-center p-5 text-gray-500">Loading...</div>;
  }

  return (
    <>
      {/* Buttons that will not be printed */}
      <div className="no-print flex justify-between my-5 lg:mx-96 md:mx-20">
        <Button onClick={handleShare} className="bg-purple-500 text-white" type="button">
          Share
        </Button>

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
